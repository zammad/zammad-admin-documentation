# Zammad admin documentation

If you want to contribute to zammad documentation you can
edit the \*.rst files and create pull requests.

We take care about the translation part, so please don't change anything else
whithin the repo, those changes will be discarded anyway ;) .

**Note:**
These docs are available only in English.
There are currently no plans to produce official translations into other languages.

## Documentation

Zammad hosts a searchable version of this documentation on https://docs.zammad.org

### ReStructuredText markup

If you like to edit the docs use the ReStructuredText markup language. Infos about this markup language can be found at:

- http://www.sphinx-doc.org/en/stable/rest.html
- http://docs.readthedocs.io/en/latest/_themes/sphinx_rtd_theme/demo_docs/source/demo.html

Thanks! ❤️ ❤️ ❤️

  Zammad Team


[![Documentation Status](https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=latest)](https://zammad-admin-documentation.readthedocs.io/de/latest/)

## Notes on Documentation Branches and Pull Requests

Please note that this repository uses protected branches, which is why the default branch is ``develop``.
The most current version is **always** ``master`` - if you create Pull Requests, please define ``master`` as destination Branch.

This will ensure that your changes are available upon merge.


## Local tests (mostly internal stuff)

If you want to test the doc for yourself you need a local installation of sphinx and gettext.

```
pip install sphinx sphinx-autobuild sphinx-intl sphinx_rtd_theme

```


### Example for a local HTML build

```
make html
```

### Example workflow for localization using transifex

If you have to work on the translations you need gettext.

For OS X use HomeBrew or build from source. For Linux use your package
manager.

```
brew install gettext
```

The workflow itself
```
# create .tx config
tx init
# or when just want to update a ressource
tx set --source -r <project_slug.resource_slug> -l <lang> <file>

make clean

# this will generate the strings from the *.rst files
make gettext

# this will generate the locales (DE|EN)
sphinx-intl update -p _build/locale/ -l de -l en

# this will update the ressource files from the pot dir
sphinx-intl update-txconfig-resources --pot-dir _build/locale --transifex-project-name zammad-admin-documentation

# push to transifex (if configured)
tx push -s

# after translation pull needed languages from transifex
tx pull -l en

# manual build based upon the language (_build/html/)
make -e SPHINXOPTS="-D language='de'" html
make -e SPHINXOPTS="-D language='en'" html

```

If you have a problem, please create an issue. Thanks.
