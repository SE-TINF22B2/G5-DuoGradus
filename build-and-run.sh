# Download the current code main branch from github
git pull

# Stop the current docker compose server
docker compose down

# Rebuild the images with the new code
docker compose build

# Restart the service
docker compose up -d