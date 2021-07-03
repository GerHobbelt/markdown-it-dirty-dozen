---
title: Associative arrays
people:
    name: John Smith
    age: 33
morePeople: { name: Grace Jones, age: 21 }
---

# Heading: table-of-contents

[[toc]]

# Heading: toc

@[toc](Title)

# Heading: toc-and-anchor

@[toc]

# Heading: toc-done-right

Note that this plugin will also patch the `[[toc]]` marker, so...

${toc}



## Sub heading 1

Some nice text, press [=Ctrl A=] or [=F12=]

furi: 

+ should parse basic [body]{toptext}...
+ [漢字]{かんじ}
+ Foo [漢字]{かんじ} bar.
+ Foo [漢字]{かんじ} bar [猫]{ねこ} baz.
+ [食べる]{たべる}
+ [取り返す]{とりかえす}
+ [漢字]{かん.じ}
+ [可愛い犬]{か.わい.い.いぬ}
+ [可愛い犬]{か+わい.い.いぬ}
+ [猫！？可愛い！！！w]{ねこ.かわいい}
+ [食べる]{たべべ}
+ [アクセラレーター]{accelerator}
+ [cat]{ねこ}
+ [可愛い]{kawaii}
+ [犬犬犬犬犬犬犬犬犬犬犬]{いぬ.いぬ．いぬ。いぬ・いぬ|いぬ｜いぬ/いぬ／いぬ いぬ　いぬ}
+ [可愛い犬]{か＋わい.い.いぬ}
+ [漢字]{kan.ji}
+ [食べる]{=たべる}
+ [食べる]{＝たべる}
+ [猫だ]{ね=こだ}
+ [猫だ]{ね＝こだ}
+ [ダメな奴]{ダメなやつ}
+ [ﾀﾞﾒな奴]{ﾀﾞﾒなやつ}
+ [猫だ]{ねこだよ}
+ [は猫]{これはねこ}
+ [だから]{*}
+ [だから]{＊}
+ [だから]{*+}
+ [猫is❤]{*}
+ [猫だ]{ね*こだ}
+ [猫だ]{ね＊こだ}
+ [漢字]{かんじ}
+ [犬犬犬犬犬犬犬]{いぬ.いぬ。いぬ_いぬ-いぬ\\いぬ]いぬ}
+ [可愛い犬]{か+わい.い.いぬ}
+ [可愛い犬]{か*わい.い.いぬ}


## Sub heading 2

Some even nicer text


### Subsub heading 2.1

Some even nicer text


### Subsub heading 2.2

Some even nicer text


## Sub heading 3

Some even nicer text


## Sub heading 4

Some even nicer text


# Testing more...


## Footnotes Exemplified...

Here is a footnote reference,[^7] and another.[^longnote]

[^7]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

        { some.code }

    The whole paragraph can be indented, or just the first
    line.  In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won't be part of the note, because it
isn't indented.


They could terminate each other:

.
[^1][^2][^3]

[^1]: foo
[^2]: bar
[^3]: baz


We support inline notes too (pandoc example):

Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]

foo^[ *bar* ]

[^xxxxx] [^xxxxx]

[^xxxxx] [^yyyyy]

[^xxxxx]: foo
    ---

[^yyyyy]: foo


Should allow links in inline footnotes
.
Example^[this is another example https://github.com]


Should allow additional text in numeric footnote reference
.
Here is a footnote[^4] reference with [^5 added text].

[^4]: Here is a footnote.
[^5]: Here is another footnote.


Here[^anote] is a footnote [^Bnote reference] with [^c-note added text].

[^anote]: Here is the first footnote.
[^Bnote]: Here is the second footnote.
[^c-note]: Here is the third footnote.



Here is a footnote reference,[^1] and another,[^longnote] and an inline footnote ^[it works!].

And then there are duplicate references to those footnotes here[^1][^longnote].










---

## critic markup ☞          HTML ☞                                    LaTeX

{--[text]--} ☞           `<del>[text]</del>`        ☞               `\st{[text]}`

{++[text]++} ☞           `<ins>[text]</ins>`       ☞                `\underline{[text]}`

{~~[text1]~>[text2]~~} ☞ `<del>[text1]</del><ins>[text2]</ins>`  ☞  `\st{[text1]}\underline{[text2]}`

{==[text]==}     ☞       `<mark>[text]</mark>`        ☞             `\hl{[text]}`

{>>[text]<<}    ☞        `<aside>[text]</aside>`         ☞          `\marginpar{[text]}`

An editor can delete text as he {--bloody well--} pleases.


An editor can also insert text, {++as this is his prerogative++} and duty when the writer dropped the, ah, word.

As you know {~~theres~>there's~~} always that fuss about their and {~~ their ~> there ~~}...

Among all the bla bla there's a golden nugget to be found, {==if only you'ld go looking==}.

JS HTTP is a collection of low-level javascript HTTP-related modules. {>>It's awesome!<<}












---

## Basic alerts example

::: warning
Hello world! [Link](#).
:::

With option `links` enabled (by default):


This is a test. [Link](#).

::: success
Hello world! [Link](#).
:::

This is a test. [Link](#).

With option `icons` enabled (not default):

This is a test. [Link](#).

::: danger
Uh-oh! [Link](#).
:::

This is a test. [Link](#).














---

## emojis

- :one: aaa :fifty:

  :smile: :grin: :wink: :100:

- shortcuts

  :50 |50 :uno aaa

- skip rewritten defaults

  :smile: :)

<http://www.example.org/wiki/Special:Preferences> :P

<http://www.example.org/foo:joy:bar> :joy:

[bar](http://www.example.org/foo:joy:)

http://www.example.org/wiki/Special:Preferences :P

http://www.example.org/foo:joy:bar :joy:







----

## Wiki links

[[Wiki Link]]

[[Help/Wiki Link]]

[[/Main/Wiki Link]]

Here is a [[Wiki Link]]

[[Wiki Link]]s are cool

Click [[Wiki Link|here]] to learn about wiki links

This is [[not a valid wiki link]

This is [not a valid wiki link]] either

And here are a few edge cases for the default 'accept everything' regex:

This is [[a valid wiki link] thanks to [the matching]] markers.

Did [[anyone test]] [[many|multiple]] [[dir/fff|links]] in a single line?

And [[how... about?some:nice:punctuation|what?about?this!]]

While [[dir/file[1]|this one]] has brackets in the URL, it **is** accepted.

However, [[dir/file[[1]]|this one[[1]]]] does NOT deliver what you'ld expect!

Neither does [[[[This one]]]] do what it looks like at first glance!

But [[then, however, yada yada, --there's this baby--it's me, "Papa Doc"]] who'll make it through unscathed.









---

text {.someclass #someid attr=allowed}

should parse attributes with = '{attr=/id=1}', options
{link=/some/page/in/app/id=1}

some text {with=attrs}

some text {{with=attrs}}

some text
{with=attrs}

some text {.green}

some text {..green}


some text {#section2}

some text {attr=lorem .class ..css-module #id}

some text {attr="lorem ipsum"}

some text {.c1 .c2}

some text {..c1 ..c2}

some text {..c1.c2}

paragraph **bold**{.red} asdf

paragraph **bold**{{.red}} asdf

- item 1{.red}
- item 2


text {.someclass #someid attr=allowed}












---

# Original markdown-it demo text

Here it is:


---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::











---

# This particular issue is *For Developers Only*

---

**Please file a fresh, new issue if you see something you want to request as a feature or report a bug on or simply talk about.**

**Copy&paste the bit of text that's relevant, if you want.**

---

The notorious "*Mother Of All PRs*" for Qiqqa. (Folks who've worked with me before, will know the feeling. 😉🤯 ) 

## Why?

Because I don't want to swamp the issue tracker with the stuff I note, think about, or otherwise need to remind myself about at some later point in time, where my brain *very probably* has already given up attempting to track and manage.

a.k.a. "*Notes To Self*"

> I've been pondering dropping this stuff in the [kanban projects](https://github.com/jimmejardine/qiqqa-open-source/projects) but that hasn't worked out before, because this is about a **lot of details** that *do matter*, but are *clutter* for everyone trying to get a handle on the overall state of affairs (like *me*), so after a long time considering and trying other means, failures all, the current idea is to bundle all these devils in a single issue, with perhaps some check boxes, and then using the github EDIT feature, rather than COMMENTing each time: once an item in this list is done, it can be DELETED as far as I'm concerned. The git commit log serves well for keeping track of what happened and what was done; it's the 'gotta do / check this' buggers that need a place to go and I want to keep it all in a single website, i.e. *github*.

# Observed Crappiness?

- [ ] BibTeX editor. OMG. 🤯 I know it's hacky (hey, *I* did that back in '19, **I know**), but the parser is... 😒 and the (re)formatter... and the editor modes are 🤡  -- find time and effort to do a proper editor one day, please. Doesn't need to be smart, just **flexible**. **Tolerant**, say.
- [x] ~antique `pdfdraw.exe` still locks up on some particular 'evil PDFs'~ --> filed as #305 for it happens almost every day now with my test repo 😩 😭 
- [ ] ditto for SynFusion-based annotation, etc. metadata extraction logic: here we end up with a run-away memory consumption problem in .NET, resulting in out-of-memory a little later on. 
   --> work is done in MuPDF repo (`mutool multipurp`): `multipurp` tool is created to extract a metric ton of PDF metadata, including outlines, annotations and attachments and dump all that to JSON, so we can easily go through this stuff picking up what we want/need at that particular mo.
- BibTeX parsing:
  - [ ] check the Unicode translation code: it works **but a little too well**, as `\LaTeX` and `\kern` TeX macros at least get their leading chars converted to Unicode, and that's plain *wrong*.
  - [ ] Go through the test set and vet the results in the sollwert files: there's very probably a couple of issues lurking in there still.
  - [ ] BibTeX (re)formatting? Yech, TABs! 🤢 
  - [ ] Qiqqa Search: search for `fingerprint:HASH` (e.g. `fingerprint:20359B18C8D6AC93F836962526FDC306118486C`) doesn't work. *Would* be handy debug/diag tool, while help screen says fingerprint is recognized as a field. Well... (Also does not work in global search. Obviously.)



# *Crazy Ideas* To Try?

- [ ] [ReoGrid](https://github.com/unvell/ReoGrid) spreadsheet bulk editing of metadata 
  + [ ] free export to Excel that way?
  + [ ] how about letting user edit it in another tool, then re-import the spreadsheet and bulk-update the metadata that way?
- [ ] I *loath* WPF (OK, *we already knew that*, tell me something *new*, will ya?); ditch the crappy table in the Sync Manager dialog and replace it with a [ReoGrid](https://github.com/unvell/ReoGrid) instance, i.e. make it act like a spreadsheet too. [ReoGrid](https://github.com/unvell/ReoGrid) says they can do **readonly** on cells. Yay! 🥳 
- [ ] use a Nuke-like node editor interface for the OCR process. Find a way to have it communicate with mupdf+leptonica+tesseract. 
  - 🚫  As different PDFs require different processing, should we store the graph per PDF?
  - [ ] Better to link PDFs to a "OCR template" of some kind: that way we get the user automatically keep them "grouped" that way.
  - [ ] Ditto for text extraction! 
    + **Remember your own bloody OnSemi (ex-Fairchild) datasheets with obnoxious cover sheets!**
    + Remember those Taiwanese Uni PDF papers you have, which have their own flavour of more-or-less useful cover sheets to strip off / *reduce*.
    + Oh! Oh! The cover sheets of that scientific PDF aggregation site you got them from. Suppressed the name, but you know which one I mean! Almost white sheet, images of the authors and a bit of crap. Making it hard to recognize the papers as duplicates when you get them from elsewhere.
- [ ] Check NodeJS interaction speed: JSON chat + background 'webserver'? 
- [ ] Big Binary Chunks coming from background processes (node, [mupdf](https://github.com/ArtifexSoftware/mupdf), tesseract, [solr](https://lucene.apache.org/solr/), whatever): Named pipes for bigger loads or is that overkill and do we push everything through a socket anyway? (copy bin blocks vs memory mapped I/O for large data chunks)
  + [x] Given what I read about it from others, plus personal experience in the past, `mmap()` is superb, but for this cross-platform stuff we'ld better stick to named pipes or localhost TCP loopback: the latter being the most generic while pipes would be great, but at least *named* pipes on Windows are **visible outside the machine**, thus posing a **security risk** when I don't do something smart about it: https://docs.microsoft.com/en-us/windows/win32/ipc/named-pipes (see the bit there about `NT AUTHORITY\NETWORK`.
  - [ ] memory mapped I/O only works really well when you know the required block size up front, so an alternative might be sending handles to memory mapped areas to share among processes, instead of copying data like mad through pipe or TCP/IP (short-circuited) IPC. Still, that's more work to code and ensure it's *robust*, so I guess we'll stick with the pipes and local-loopback TCP IPC instead as that's standard fare and also maps very well onto the idea of running the important stuff in server apps on the local box (civetweb, solr, ...)
  - [x] currently C# code shuffles and copies the image data multiple times at a horrible performance pace: C# isn't exactly beautiful for image processing (or rather: I'm not versed well enough in the language+libs to make this crap run fast, more probably.
      - [ ] "next stage" would therefor be *either* checking out the ways pros do image processing in C#, *or* we move that crap to a C++/C process and deal with the binary blobs traveling across the barrier every time. 😢 💢  
- [ ] [tesseract](https://github.com/tesseract-ocr/tesseract/issues/2961) is [**integrated with mupdf by Artifex**](https://github.com/ArtifexSoftware/mupdf/search?q=tesseract&type=commits) 👍 👍 👍 🥳  -- now open that bugger up and permit scriptable/configurable image processing **inside** [mupdf-as-you-have-it](https://github.com/GerHobbelt/mupdf), so we can optimize OCR. Drive this with the [Nuke](https://www.foundry.com/products/nuke/features#link112)-style node editor mentioned above.
  + I mention Nuke, because that's what my brain comes up with for this Rorschach Blot, but it's more like Autodesk 3dsmax's Material Editor and their ilk: intermediate or fundamental as visual thumbnail in each node to help track where happens what:
    - https://unity3d.com/profiles/unity3d/themes/unity/images/pages/shader-graph/ShaderGraphHologram.jpg
    - https://cdn.soft8soft.com/images/materials_maps_max.jpg
  + [ ]  consider adding [OpenCV lib](https://docs.opencv.org/master/d7/dbd/group__imgproc.html) to the mupdf tool, next to [leptonica](http://leptonica.org/) (which is already the *default* part of the pdf-to-tesseract path in there), so we have additional image filters / processing for the OCR workflow. --> prepwork for facilitating pre- and postprocessing of PDF image and text data: https://github.com/GerHobbelt/owemdjee
- [ ] add a 'webserver' mode to mupdf (**mutool + mudraw**: both for metadata extraction, text extraction, OCR processing (and consequent text extraction) and PDF page to image rendering) so we don't have the (costly?!) tool startup time for every page or bit of (meta)data we're requesting.
  - [ ] be prepared to kill the bugger or expect the bastard to lock up or crash due to **nasty PDF inputs** once every couple of documents: feed the entire evil library through it, and then everything else you can grab off the Net. 
  
    **Reminder**: the SynFusion libs b0rked out with a HUGE memory leakage just today, and that was only because Qiqqa was doing a bit of *annotations* extraction via that one today. We got rid of SORAX, but SynFusion is on its way out too. 💢 

    -[x] --> `mutool multipurp` is a new tool in the mupdf palette, derived off `mutool info` and the `mupdf` gui app. `multipurp` dumps all available metadata for the PDF in JSON format. This includes attachments, annotations, etc.

  - [ ] see if I should revive [my old mongoose clone](https://github.com/GerHobbelt/mongoose-vanilla) for this, or grab another *light*, **embeddable** C/C++ web server that can do JSON and a whole lot more.
    - [ ] what's it called now? Or was it the original with MIT license that got renamed? Don't recall precisely. There was a license change back then with some brouhaha, but since Qiqqa and mupdf are (A)GPL, it doesn't matter no more, right?!
    - [ ] I'm not looking at nginx and its ilk: way to much overkill and I've working with them before: I want an **embeddable** webserver, which can run on `localhost` for as long as Qiqqa is *alive*: started and stopped by Qiqqa, preferably. 
- [ ] Analyze Qiqqa PDF page render behaviour (we're doing that now) and see what we can do to improve performance there by caching some sort of LIFO / timestamped cache, where we can *age off* old slots. No more 3 images per PDF static crap.
- [ ] **Please** wrack your brain for a **smart solution** for the many 'get it as we need them' situations in the code, where we SafeThreadPool the work, but **should** ideally should:
  - [ ] respond with a **fake answer** immediately, so the UI gets rendered pronto. (Think the grey boxes on page load you see happenin' with modern websites, which perform async content loading)
  - [ ] don't care about effin' WPF INotifyWhatWasIt crap and code bloat, "required" for UI updating. Come up with something leaner and preferably faster / as fast once the 'async' data finally arrives.
  - [ ] **extra bonus points** when you go through the code and make sure the final result is checked against the current state of affairs in the UI to ensure the data is not already outdated, because the user has moved on and another panel or PDF is currently in view, while the work is about a PDF that's already closed again.
  - [ ] **extra extra bonus points** if you can come up with a solid schema where all this work is *abortable* without a lot of hassle. It happens in a zillion places and I'ld rather not clutter the whole codebase with [CancellationTokens processing](https://docs.microsoft.com/en-us/dotnet/standard/threading/cancellation-in-managed-threads), if I can get away with something leaner, preferably **much** leaner.
- [ ] rework the async stuff to modern C# 
  + https://docs.microsoft.com/en-us/dotnet/standard/threading/managed-threading-best-practices
  + https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/event-based-asynchronous-pattern-overview
  + https://docs.microsoft.com/en-us/dotnet/standard/threading/overview-of-synchronization-primitives
  + https://docs.microsoft.com/en-us/dotnet/standard/threading/synchronizing-data-for-multithreading
  + https://docs.microsoft.com/en-us/dotnet/standard/threading/synchronizing-data-for-multithreading
  + https://olitee.com/2015/01/c-async-await-common-deadlock-scenario/
  + https://medium.com/devtechblogs/overview-of-c-async-programming-with-thread-pools-and-task-parallel-library-7b18c9fc192d#62e6
  + https://devblogs.microsoft.com/dotnet/understanding-the-whys-whats-and-whens-of-valuetask/
  + https://stackoverflow.com/questions/9602567/how-to-update-ui-from-another-thread-running-in-another-class#answer-9620011
- BibTeX parsing:
  - [ ] run it through the Zotero test set
  - [ ] Make that bugger an external lib or use the Zotero scripts via NodeJS, maybe?
  - [ ] Idea: any BibTeX or whole DB metadata records (JSON) which do not parse should NOT BE LOST: dump these in a special field called 'b0rked' or something, so we can add a UI or tooling process to post-process those. Particularly important when processing damaged or VERY old Qiqqa libraries, where some stuff seems to go wrong, but we cannot find out what exactly goes haywire.
- NodeJS / async JavaScript
  - [x] Ran into this today, keep in mind when moving to electron or doing other JS-based async work:
    + `process.exit()` will immediately terminate any pending promises!
    + https://github.com/nodejs/node/issues/22088 (read the entire thread!)
    + https://stackoverflow.com/questions/46966890/what-happens-when-a-promise-never-resolves
    + https://github.com/nodejs/node/issues/29355#issuecomment-525935873
- Tesseract & image binarization/threshold/object detection/...:       
  - Tesseract OCR: Text localization and detection - PyImageSearch
    + https://www.pyimagesearch.com/2020/05/25/tesseract-ocr-text-localization-and-detection/
  - pedrofrodenas/image-thresholding-OCR: Local adaptive image binarization algorithm to improve Tesseract OCR accuracy.
    + https://github.com/pedrofrodenas/image-thresholding-OCR
  - palucdev/CudaOtsu: Otsu's method thresholding and image binarization on GPU in CUDA
    + https://github.com/palucdev/CudaOtsu
  - OpenCV: Image Thresholding
    + https://docs.opencv.org/master/d7/d4d/tutorial_py_thresholding.html
  - DIGI-VUB/image.binarization: Image Binarization for improving OCR and HTR
    + https://github.com/DIGI-VUB/image.binarization
  - brandonmpetty/Doxa: A Local Adaptive Thresholding framework for image binarization written in C++, with JS and Python bindings. Implementing: Otsu, Bernsen, Niblack, Sauvola, Wolf, Gatos, NICK, Su, T.R. Singh, WAN, ISauvola, Bataineh, Chan and Shafait.
    + https://github.com/brandonmpetty/Doxa
  - glefundes/Multimethod-Binarization: Efficient implementation of local thresholding image binarization in python for use in multimethod binarization OCR
    + https://github.com/glefundes/Multimethod-Binarization
  - Tesseract thresholding eliminates text on bright background colors · Issue #1990 · tesseract-ocr/tesseract
    + https://github.com/tesseract-ocr/tesseract/issues/1990
  - Proper image thresholding to prepare it for OCR in python using opencv - Stack Overflow
    + https://stackoverflow.com/questions/52459794/proper-image-thresholding-to-prepare-it-for-ocr-in-python-using-opencv
  - image processing - Multi otsu(multi-thresholding) with openCV - Stack Overflow
    + https://stackoverflow.com/questions/22706742/multi-otsumulti-thresholding-with-opencv
  - Image Thresholding — OpenCV-Python Tutorials 1 documentation
    + https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_thresholding/py_thresholding.html
  - OCR · GitBook
    + https://www.pekatvision.com/doc/last/ocr.html
  - Optical Character Recognition Pipeline: Text Detection and Segmentation Part-II | TheAILearner
    + https://theailearner.com/2019/05/29/optical-character-recognition-pipeline-text-detection-and-segmentation-part-ii/
  - Automating Receipt Digitization with OCR and Deep Learning
    + https://nanonets.com/blog/receipt-ocr/
  - ocr pipeline | TheAILearner
    + https://theailearner.com/tag/ocr-pipeline/
  - Optical Character Recognition Pipeline: Text Detection and Segmentation Part-II | TheAILearner
    + https://theailearner.com/2019/05/29/optical-character-recognition-pipeline-text-detection-and-segmentation-part-ii/
  - A comprehensive guide to OCR with Tesseract, OpenCV and Python | by Suresh Thiyagaraj | NanoNets | Dec, 2020 | Medium
    + https://medium.com/nanonets/a-comprehensive-guide-to-ocr-with-tesseract-opencv-and-python-fd42f69e8ca8
- [x] my old work on nearly 10 year old mongoose (a.k.a. civetweb) has been revived and still works, including the 'book sample server app' with drag&drop GUI.
  - [ ] Had forgotten civetweb came with embedded Lua for scripting. Soit.
  - [ ] Can serve me well as test server around mupdf & friends.
- [ ] Do a web page for the releases as there'll be several flavours all the time (production, beta, raw test)
- [ ] Serialization: 
  - to disk (*persistence*)
    - [ ] JSON: UTF8Json for speed? Or regular JSON?
  - to database (*persistence* in database records)
    - [ ] JSON: UTF8Json for speed? Or regular JSON? 
       Keep in mind that we're considering NOT having everything in memory, i.e. **query database on demand**! This would benefit from faster data I/O. Nevertheless, for diagnostic purposes, it might be best to stay with a human-readable format such as JSON. Otherwise, see below for binary protocols (FlatBuffers, etc.)
  - between *processes* (NOT PERSISTED.)
    
     This concerns processes where we have reasonable/full control of both ends: PDF processor, frontend (+ business logic layer? or do we have that one separate? If we use Chromely or `electron`, you're transferring data as message between backend layer (C#/node) and browser/UI frontend anyway, so *there* is another interface comms layer, however you turn it)

      Processes where we DO NOT have full control (or don't want to patch one side to *gain control*) will generally speak JSON (or XML?): SOLR//ES

    - [ ] [Google FlatBuffers](http://google.github.io/flatbuffers/index.html#flatbuffers_overview) ([flatcc](https://github.com/dvidelabs/flatcc) for C)
    - [-] ~msgpack~ (nah...) 
    - [ ] [FBE](https://github.com/chronoxor/FastBinaryEncoding) (as a faster flavor/deriv of Flatbuffers)
    - [ ] [Ceras](https://github.com/rikimaru0345/Ceras) (just to keep in mind for slightly different purposes... Not really a candidate here.)
    - [ ] [Bebop](https://github.com/RainwayApp/bebop) - while I'm an old fan of [Cowboy Bebop](https://en.wikipedia.org/wiki/Cowboy_Bebop) too 😆 this one's currently lacking a C/C++ target. If that can be tweaked from the JS target, this might be the coolest one yet, though certainly not as *mainstream* as Flatbuffers. Has C# and JS/TS targets, so that's covering the other 66% for me.
    
     Just some stuff about FlatBuffers:
     - https://engineering.fb.com/2015/07/31/android/improving-facebook-s-performance-on-android-with-flatbuffers/
- [ ] `electron` or `NW.js` (here's some reasons why I would ride that one rather than electron for something like Qiqqa -- shoot! browser crash & links lost! 😭 Anyway, older: http://my2iu.blogspot.com/2017/06/nwjs-vs-electron.html and google stats: https://trends.google.com/trends/explore?q=nwjs,Electron%20js,Chromely,nw.js) or `Chromely`?
   - [ ] electron (so *mainstream*. And yet... Why haven't I switched already? --> Because somewhere inside my brain something is going *NO*, but I'm not entirely sure why. Except probably the reflection on Brook's Second System Syndrome that this would evoke at max power setting, perrr-haps? 🤡 
   - [ ] NW.js (better integration of UI frontend into backend layer, where a thin layer of Qiqqa business logic would reside. Promised faster UI updates that way as it takes out one hefty comms interface.
   - [ ] Chromely (no `nodejs`, backend layer is C#. Which is fine and might help me moving as the overall "business glue" logic wouldn't need to be rewritten from scratch. That might save a bundle.
- [ ] considering the new identifier hash (I have two PDFs colliding on SHA1 in the evil PDF corpus; since Qiqqa uses a 'stripped' version of SHA1 (bug since start of life), there's more collisions probable. Need the same keying system for other files too, BTW.
   - [ ]  SHA512 is reported as generally *faster* than SHA256. There's also a SHA512 "special" called SHA512/256, which takes care of the usual shitty results you get re distrib/collis when *truncating* (crypto) hashes: https://eprint.iacr.org/2010/548.pdf + https://crypto.stackexchange.com/questions/26336/sha-512-faster-than-sha-256 --> BLAKE2b --> BLAKE3 (https://github.com/BLAKE3-team/BLAKE3) (Keep in mind the [Too Much Crypto](https://eprint.iacr.org/2019/1492.pdf) article: this would however replace our b0rked SHA1 keying with a *faster* and *better* hash: collision risk now effectively zero, instead of 'a fluke, but *possible*' -- as shown with the PDFs in the Evil Corpus.



