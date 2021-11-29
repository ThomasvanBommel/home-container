#!/bin/bash

set -e

# Check if we're in a devlopment environment
if [ "$ENVIRONMENT" = "dev" ]; then

    # Install node packages
    npm i

    # Transpile typescript into javascript
    npx tsc

    # Transpile scss to css
    npx sass src/scss/:build/css/ --style compressed
fi

# Start application
node build/js/index.js