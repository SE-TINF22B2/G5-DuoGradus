# Set the working directory
cd /services/duogradus/

# Stop the current docker compose server
docker compose down

# Download the current code main branch from github
git fetch --all
# Yes, this is the desired option!
git reset --hard origin/master

# Rebuild the images with the new code
docker compose build

# Restart the service
docker compose up -d