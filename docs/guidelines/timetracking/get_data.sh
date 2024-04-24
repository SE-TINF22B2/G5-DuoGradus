#!/usr/bin/env bash

# Depends on jq

BASE_URL="https://timetracking.henrybrink.de"
PROJECT_ID="1"
WEEKS=$(seq 15 26)
OUTPUT_FOLDER=./data

export "$(cat .env | xargs)"

mkdir -p "$OUTPUT_FOLDER"

TIME_RESPONSE=$(curl -s -X "GET" \
    "$BASE_URL/api/timesheets?user=all&project=$PROJECT_ID&full=true" \
    -H "accept: application/json" \
    -H "Authorization: Bearer $KIMAI_API_TOKEN")


for WEEK in $WEEKS; do
    TIMES=$(jq --arg WEEK "$WEEK" '[.[] | select(.begin | strptime("%Y-%m-%dT%H:%M:%S%z") | strftime("%W") as $w|$w==$WEEK)]' <<< "$TIME_RESPONSE")

    if [ "$(jq length <<< "$TIMES")" -eq 0 ]; then
        continue
    fi

    FILE="$OUTPUT_FOLDER/KW$WEEK.csv"

    echo "Name;Activty;Duration;Description" > "$FILE"
    
    echo "$TIMES" | jq -c '.[]' | while read -r ENTRY; do
        NAME=$(jq '.user.alias' <<< "$ENTRY")
        DURATION=$(jq '.duration' <<< "$ENTRY")
        ACTIVITY=$(jq '.activity.name' <<< "$ENTRY")
        DESCRIPTION=$(jq '.description' <<< "$ENTRY")

        echo "$NAME;$ACTIVITY;$(echo "scale=2; $DURATION / 3600" | bc);$DESCRIPTION" >> "$FILE"

    done
done