#!/usr/bin/env bash
set -p

SWA_ROOT="../swagger-codegen"
THREEPANE="$SWA_ROOT/modules/swagger-codegen/src/main/resources/threepane"
#NOTE: the single quotes to perserve the asterixes
NESTED='assets/* images/* code_samples/*.mustache'
THREEPANE_ROOT="mustache/*"

echo 'Copying across rig files to swagger ('$SWA_ROOT')'
echo '............................................'
echo "Cleaning..."
rm -rv $THREEPANE/*
echo '............................................'
echo "Copying across nested dirs..."
for FILE in $NESTED; do
  DEST_DIR="$THREEPANE/`dirname $FILE`"
  # dir doesn't exist?
  if [[ ! -d $DEST_DIR ]]; then
    echo $DEST_DIR doesn\'t exist, making it...
    mkdir -p $DEST_DIR
  fi

  cp -v "$FILE" "$DEST_DIR"
done
echo '............................................'
echo "Copying files to threepane root"
cp -v $THREEPANE_ROOT "$THREEPANE"
echo '............................................'
