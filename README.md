[![Documentation Status][badge_pre-release]][docs_pre-release]
[![Translation Status][tbadge_pre-release]][wbetranslate_pre-release] (pre-release)

[![Documentation Status][badge_latest]][docs_latest]
[![Translation Status][tbadge_latest]][wbetranslate_latest] (latest)

# Zammad Admin Documentation

Source files for Zammad’s admin documentation [(latest][docs_latest] / [pre-release)][docs_pre-release].

## Contributing

If you would like to improve the docs, simply:

1. fork the repo,
2. edit the appropriate `.rst` files
   (see [Markup Format](#restructuredtext-markup) below), and
3. submit a pull request.

> 🌍 **Wanna help translate?** Submit your contributions
> (or request additional languages) [here][wbetranslate_pre-release].
> Do **NOT** submit a PR with changes to the contents of the `locale/` directory.

Thanks! ❤ ❤ ❤
   The Zammad Team

### ReStructuredText Markup

If you like to edit the docs use the ReStructuredText markup language.
Information about this markup language can be found at:

- http://www.sphinx-doc.org/en/stable/rest.html
- https://docutils.sourceforge.io/rst.html

### Versioning

This documentation provides versions:

- ``pre-release`` can contain develop, not yet released functions and changes
- ``main`` is the ``latest`` (and stable) version of the repository
- ``stable-x.x`` is the old back port for an earlier version
  - These branches do not receive further updates and serve as historic help
    for administrators

## Notes on Documentation Branches and Pull Requests

Please note that this repository uses protected branches.
The most current version is **always**  ``pre-release`` - if you create
Pull Requests, please use ``pre-release`` as destination Branch.

This will ensure that your changes are available upon merge.

## Compilation

### Dependencies

* sphinx

  ```
  $ pip install -r requirements.txt
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

Pull requests containing direct translations within the PO files will be denied.

```
# ensure clean enviroment
$ make clean

# generate the strings from the *.rst files
$ make gettext

# manual language-based build (`_build/html/`) (for testing)
$ make -e SPHINXOPTS="-D language='de'" html
$ make -e SPHINXOPTS="-D language='en'" html
```

If you have a problem with creating / building the documentation,
please create an issue. Thanks.

### Localization progress

[![Translation progress][tprogress]][wbetranslate_pre-release]

[badge_latest]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=latest
[docs_latest]: https://admin-docs.zammad.org/en/latest/

[badge_pre-release]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=pre-release
[docs_pre-release]: https://admin-docs.zammad.org/en/pre-release/

[tbadge_pre-release]: https://translations.zammad.org/widgets/documentations/-/admin-documentation-pre-release/svg-badge.svg
[wbetranslate_pre-release]: https://translations.zammad.org/projects/documentations/admin-documentation-pre-release/

[tbadge_latest]: https://translations.zammad.org/widgets/documentations/-/admin-documentation-latest/svg-badge.svg
[wbetranslate_latest]: https://translations.zammad.org/projects/documentations/admin-documentation-latest/

[tprogress]: https://translations.zammad.org/widgets/documentations/-/admin-documentation-pre-release/horizontal-auto.svg
