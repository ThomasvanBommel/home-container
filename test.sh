#!/bin/bash

set -e

docker build --tag home .
docker run --rm -ti -v $(pwd):/opt/project -p 9000:8080 home