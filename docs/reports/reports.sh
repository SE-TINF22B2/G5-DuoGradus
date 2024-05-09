#!/usr/bin/env bash

files=$(find . -maxdepth 1 -type f -name '[0-9][0-9][0-9][0-9]-kw[0-9][0-9].md' | sort)

for file in $files; do
    filename=$(basename "$file")
    year=$(echo "$filename" | cut -d'-' -f1)
    week=$(echo "$filename" | grep -oP '(?<=kw)\d+(?=.md)')

    echo "{ text: '$year - KW$week', link: '/reports/$filename' },"
done