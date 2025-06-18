#!/bin/bash

# Exit on error
set -e

echo "Starting deployment process..."

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
else
    echo "Build failed!"
    exit 1
fi

# Add all changes to git
echo "Adding changes to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

echo "Deployment completed successfully!" 