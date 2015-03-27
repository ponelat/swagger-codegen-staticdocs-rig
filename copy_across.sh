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
echo -n "Files removed: "
rm -rv $THREEPANE/* | wc -l
echo '............................................'
echo "Copying across nested dirs..."
NEST_FILES_COPIED=0
NEST_DIRS_COPIED=0
for FILE in $NESTED; do
  DEST_DIR="$THREEPANE/`dirname $FILE`"
  # dir doesn't exist?
  if [[ ! -d $DEST_DIR ]]; then
    mkdir -p $DEST_DIR
    let NEST_DIRS_COPIED=NEST_DIRS_COPIED+1
  fi
  cp "$FILE" "$DEST_DIR"
  let NEST_FILES_COPIED=NEST_FILES_COPIED+1
done
echo "Nested dirs created: $NEST_DIRS_COPIED"
echo "Nested files copied: $NEST_FILES_COPIED"
echo '............................................'
echo "Copying files to threepane root"
echo -n "Files copied: "
cp -v $THREEPANE_ROOT "$THREEPANE" | wc -l
echo '............................................'
