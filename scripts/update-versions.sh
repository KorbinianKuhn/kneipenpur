#!/bin/sh
# increment package.json version

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p');
if [ $branch = "master" ]; then
node scripts/update-versions.js
else
echo "Not on master branch, skipping..."
fi