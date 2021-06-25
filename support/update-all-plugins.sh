#! /bin/bash
#
# detect which plugins are included in the set by inspecting package.json
# and then check if each exists in our dev tree and if it does, try to
# update it.
# 

GPP=$( realpath $( dirname "$0" )/../../../../tools/git_pull_push.sh )

pushd $( dirname "$0" )

for f in $(  grep '@gerhobbelt/markdown-it' ../package.json | sed -E -e 's#^.*gerhobbelt/([a-z0-9_-]+).*$#\1#g' ) ; do

	echo "Checking $f..."

	pushd "../../$f"

	echo "$GPP -L"
	$GPP -L

	popd
done


# at the end, execute the longer running git update script...
for f in $(  grep '@gerhobbelt/markdown-it' ../package.json | sed -E -e 's#^.*gerhobbelt/([a-z0-9_-]+).*$#\1#g' ) ; do

	echo "Checking $f..."

	pushd "../../$f"

	echo "$GPP -f"
	$GPP -f

	popd
done

popd

