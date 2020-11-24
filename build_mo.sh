#!/bin/sh
for langfile in `find locale -name "*.po"`
do
    subdir=`dirname $langfile`
    filename=`basename $langfile .po`
    echo "Compiling $langfile..."
    msgfmt -o "${subdir}/${filename}.mo" "$langfile"
done