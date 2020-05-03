PATH        := ./node_modules/.bin:${PATH}

NPM_PACKAGE := $(shell node -e 'process.stdout.write(require("./package.json").name.replace(/^.*?\//, ""))')
NPM_VERSION := $(shell node -e 'process.stdout.write(require("./package.json").version)')

TMP_PATH    := /tmp/${NPM_PACKAGE}-$(shell date +%s)

REMOTE_NAME ?= origin
REMOTE_REPO ?= $(shell git config --get remote.${REMOTE_NAME}.url)

CURR_HEAD   := $(firstword $(shell git show-ref --hash HEAD | cut -b -6) master)
GITHUB_PROJ := https://github.com//GerHobbelt/${NPM_PACKAGE}


build: lint test coverage todo

lint:
	eslint .

lintfix:
	eslint --fix .

rollup:
	-mkdir dist
	# Rollup
	rollup -c

test: lint
	-rm -rf coverage
	nyc mocha

coverage: test
	node_modules/.bin/cross-env NODE_ENV=test node_modules/.bin/nyc node_modules/mocha/bin/_mocha

report-coverage: coverage

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

browserify:
	-rm -rf ./dist
	mkdir dist
	# Browserify
	browserify ./index.js --no-browser-field --standalone markdown-it-attrs -o markdown-it-plugin-for-browser.js
	( printf "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */\n\n" ; \
		 cat markdown-it-plugin-for-browser.js \
	) > dist/${NPM_PACKAGE}.js
	rm -f markdown-it-plugin-for-browser.js

minify: browserify
	# Minify
	terser dist/${NPM_PACKAGE}.js -b beautify=false,ascii_only=true -c -m \
		--preamble "/*! ${NPM_PACKAGE} ${NPM_VERSION} ${GITHUB_PROJ} @license MIT */" \
		> dist/${NPM_PACKAGE}.min.js

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
	grep 'TODO' -n -r ./ --exclude-dir=node_modules --exclude-dir=unicode-homographs --exclude-dir=dist --exclude-dir=coverage --exclude=Makefile 2>/dev/null || test true

clean:
	-rm -rf ./coverage/
	-rm -rf ./dist/

superclean: clean
	-rm -rf ./node_modules/
	-rm -f ./package-lock.json

prep: superclean
	-ncu -a --packageFile=package.json
	-npm install


.PHONY: clean superclean prep publish lint lintfix test todo coverage report-coverage doc build browserify minify gh-doc specsplit rollup
.SILENT: help todo
