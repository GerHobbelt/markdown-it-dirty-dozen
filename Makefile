PATH        := ./node_modules/.bin:${PATH}

NPM_PACKAGE := $(shell node support/getGlobalName.js package)
NPM_VERSION := $(shell node support/getGlobalName.js version)

GLOBAL_NAME := $(shell node support/getGlobalName.js global)
BUNDLE_NAME := $(shell node support/getGlobalName.js microbundle)

TMP_PATH    := /tmp/${NPM_PACKAGE}-$(shell date +%s)

REMOTE_NAME ?= origin
REMOTE_REPO ?= $(shell git config --get remote.${REMOTE_NAME}.url)

CURR_HEAD   := $(firstword $(shell git show-ref --hash HEAD | cut -b -6) master)
GITHUB_PROJ := https://github.com//GerHobbelt/${NPM_PACKAGE}


build: report-config lintfix bundle test coverage todo 

lint:
	eslint .

lintfix:
	eslint --fix .

bundle:
	-rm -rf ./dist
	mkdir dist
	microbundle --no-compress --target node --strict --name ${GLOBAL_NAME}
	npx prepend-header 'dist/*js' support/header.js

test:
	mocha

coverage:
	-rm -rf coverage
	-rm -rf .nyc_output
	cross-env NODE_ENV=test nyc mocha

report-coverage: lint coverage

doc:
	-rm -rf ./apidoc
	ndoc --link-format "https://github.com/{package.repository}/blob/${CURR_HEAD}/{file}#L{line}"
	touch ./apidoc/.nojekyll

gh-doc: doc
	git add ./apidoc/
	touch ./demo/.nojekyll
	git commit -m "Auto-generate API doc"
	#rm -rf ./apidoc

publish:
	@if test 0 -ne `git status --porcelain | wc -l` ; then \
		echo "Unclean working tree. Commit or stash changes first." >&2 ; \
		exit 128 ; \
		fi
	@if test 0 -ne `git fetch ; git status | grep '^# Your branch' | wc -l` ; then \
		echo "Local/Remote history differs. Please push/pull changes." >&2 ; \
		exit 128 ; \
		fi
	@if test 0 -ne `git tag -l ${NPM_VERSION} | wc -l` ; then \
		echo "Tag ${NPM_VERSION} exists. Update package.json" >&2 ; \
		exit 128 ; \
		fi
	git tag ${NPM_VERSION} && git push origin ${NPM_VERSION}
	npm run pub

specsplit: 											\
			./test/fixtures/commonmark/good.txt     \
			./test/fixtures/commonmark/bad.txt

./test/fixtures/commonmark/good.txt : 				\
			./support/specsplit.js 					\
			./test/fixtures/commonmark/spec.txt
	./support/specsplit.js good ./test/fixtures/commonmark/spec.txt > ./test/fixtures/commonmark/good.txt
	./support/specsplit.js ./test/fixtures/commonmark/spec.txt

./test/fixtures/commonmark/bad.txt :    			\
			./support/specsplit.js 					\
			./test/fixtures/commonmark/spec.txt
	./support/specsplit.js bad ./test/fixtures/commonmark/spec.txt > ./test/fixtures/commonmark/bad.txt
	./support/specsplit.js ./test/fixtures/commonmark/spec.txt

todo:
	@echo ""
	@echo "TODO list"
	@echo "---------"
	@echo ""
	grep 'TODO' -n -r ./ --exclude-dir=node_modules --exclude-dir=unicode-homographs --exclude-dir=.nyc_output --exclude-dir=dist --exclude-dir=coverage --exclude=Makefile 2>/dev/null || test true

clean:
	-rm -rf ./coverage/
	-rm -rf ./dist/
	-rm -rf ./.nyc_output/

superclean: clean
	-rm -rf ./node_modules/
	-rm -f ./package-lock.json

prep: superclean
	-ncu -a --packageFile=package.json
	-npm install
	-npm audit fix

prep-ci: clean
	-rm -rf ./node_modules/
	-npm ci
	-npm audit fix

report-config:
	-echo "NPM_PACKAGE=${NPM_PACKAGE} NPM_VERSION=${NPM_VERSION} GLOBAL_NAME=${GLOBAL_NAME} BUNDLE_NAME=${BUNDLE_NAME} TMP_PATH=${TMP_PATH} REMOTE_NAME=${REMOTE_NAME} REMOTE_REPO=${REMOTE_REPO} CURR_HEAD=${CURR_HEAD}"


.PHONY: specsplit doc gh-doc clean superclean prep prep-ci report-config publish lint lintfix test todo coverage report-coverage doc build gh-doc bundle
.SILENT: help todo report-config
