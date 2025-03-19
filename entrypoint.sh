#!/bin/bash

if [ -f yarn.lock ]; then yarn run preview --port 3000;
    elif [ -f package-lock.json ]; then npm run preview --port 3000;
    elif [ -f pnpm-lock.yaml ]; then pnpm run preview --port 3000;
    else echo "Lockfile not found." && exit 1;
fi
