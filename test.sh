#!/bin/bash

set -e

docker build --tag home .

IMAGES=$(docker images | grep "<none>" | awk '{ print $3 }')

[[ ! -z "$IMAGES" ]] && docker rmi -f $IMAGES || echo "No images to remove"

rm -rf ./build

docker run --rm -ti -v $(pwd):/opt/project -p 9000:8080 home