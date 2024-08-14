[![Documentation Status][badge_pre-release]][docs_pre-release]
[![Translation Status][tbadge_pre-release]][wbetranslate_pre-release] (pre-release)

[![Documentation Status][badge_latest]][docs_latest]
[![Translation Status][tbadge_latest]][wbetranslate_latest] (latest)

# Zammad Admin Documentation

Source files for Zammad’s admin documentation [(latest][docs_latest] / [pre-release)][docs_pre-release].

## Contributing

Please see [the Contributing section in this manual](https://docs.zammad.org/en/latest/contributing/start.html).

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
Building for a specific language:

```
$ make -e SPHINXOPTS="-D language='en'" html
```

### Localization progress

[![Translation progress][tprogress]][wbetranslate_pre-release]

[badge_latest]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=latest
[docs_latest]: https://admin-docs.zammad.org/en/latest/

[badge_pre-release]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=pre-release
[docs_pre-release]: https://admin-docs.zammad.org/en/pre-release/

[tbadge_pre-release]: https://translations.zammad.org/widget/documentations/admin-documentation-pre-release/svg-badge.svg
[wbetranslate_pre-release]: https://translations.zammad.org/projects/documentations/admin-documentation-pre-release/

[tbadge_latest]: https://translations.zammad.org/widget/documentations/admin-documentation-latest/svg-badge.svg
[wbetranslate_latest]: https://translations.zammad.org/projects/documentations/admin-documentation-latest/

[tprogress]: https://translations.zammad.org/widget/documentations/admin-documentation-latest/horizontal-auto.svg
