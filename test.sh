#!/bin/bash

set -e

docker build --tag home .

IMAGES=$(docker images | grep "<none>" | awk '{ print $3 }')

if [ ! -z "$IMAGES" ]; then
    docker rmi -f $IMAGES
fi

docker run --rm -ti -v $(pwd):/opt/project -p 9000:8080 home