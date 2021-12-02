[![Documentation Status][badge]][docs] [![Translation Status][tbadge]][wbetranslate]

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

## Notes on Documentation Branches and Pull Requests

Please note that this repository uses protected branches.
The most current version is **always**  ``main`` - if you create Pull Requests,
please use ``main`` as destination Branch.

This will ensure that your changes are available upon merge.

## Compilation

### Dependencies

* sphinx

  ```
  $ pip install sphinx sphinx-autobuild sphinx-intl sphinx_rtd_theme sphinx-tabs
  ```

* gettext

  ```
  $ brew install gettext              # macOS
  $ sudo apt install gettext          # Debian / Ubuntu
  $ sudo dnf install gettext          # Fedora
  ```

### Example for a local HTML build

```
make html
```

### Localization using Weblate

This documentation is translated via Weblate.
After changing or adding text in this documentation, updating the POT file
is required. (This is usually done by us after QA *before* merging the PR)

Weblate will automatically provide the translation parts in in its UI for
all available languages. If there's translation progress it will automatically
provide pull requests on this repository. 🎉

```
# ensure clean enviroment
$ make clean

# generate the strings from the *.rst files
$ make gettext

# manual language-based build (`_build/html/`) (for testing)
$ make -e SPHINXOPTS="-D language='de'" html
$ make -e SPHINXOPTS="-D language='en'" html
```

If you have a problem, please create an issue. Thanks.

### Localization progress

[![Translation progress][tprogress]][wbetranslate]

[badge]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=latest
[docs]: https://admin-docs.zammad.org/en/latest/
[tbadge]: https://translations.zammad.org/widgets/documentations/-/admin-documentation/svg-badge.svg
[wbetranslate]: https://translations.zammad.org/projects/documentations/admin-documentation/
[tprogress]: https://translations.zammad.org/widgets/documentations/-/admin-documentation/multi-auto.svg
