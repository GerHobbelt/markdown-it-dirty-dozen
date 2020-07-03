#! /bin/bash
#

target=$( realpath ./test/fixtures/ )

for f in node_modules/@gerhobbelt/markdown-it-* ; do 
	pushd $f    > /dev/null

	pattern="test/fixtures/*.txt"    2> /dev/null
	files=( $pattern )

	if [ -f "${files[0]}" ]; then
		cp -v -n ${pattern} ${target}
	fi

	popd    > /dev/null
done
