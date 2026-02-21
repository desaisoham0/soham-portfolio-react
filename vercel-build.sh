#!/bin/bash

# Only build on main branch
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]] ; then
  # Proceed with the build
  echo "✅ Building main branch"
  exit 1
else
  # Don't build
  echo "🛑 Not building branch: $VERCEL_GIT_COMMIT_REF"
  exit 0
fi
