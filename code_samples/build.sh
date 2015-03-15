#!/usr/bin/env bash
MYDIR=`dirname $0`

# RUn commands from the dir that the script is in, but don't pollute the cd history
(

cd $MYDIR
echo "In $MYDIR"
FILES="*.mustache"
ORIG_EXT='.mustache'
COMPILER="mustache"
EXT='.js'

# Test if we have the command
hash $COMPILER
if [[ $? -ne 0 ]]; then
  echo "We don't have $COMPILER, first install the gem.... "
  echo "gem install $COMPILER"
  exit 1
fi

for FILE in $FILES; do
  OUT=`basename $FILE $ORIG_EXT`$EXT
  echo -n "compiling $FILE...$OUT"
  echo -e '---\n' `cat ../data.json` '\n---' | $COMPILER - $FILE > $OUT
  if [[ $? = 0 ]]; then
    echo " [successfully]"
  else
    echo " [failed!]"
    exit 1
  fi
done

)
