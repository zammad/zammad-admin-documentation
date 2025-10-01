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

Either install the dependencies on your machine or use a devcontainer, see next section.

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

### Devcontainer

If you can't or don't want to install the dependencies on your system, you can use a devcontainer. The repo
is prepared so you just need a supported editor (e.g. VS Code) and a Docker installation on your system. 

Simply open the cloned repo in a supported editor and it should ask you to open the folder in a container. After it got
set up, you can compile the docs with your changes locally.

For more information, check these ressources:

- https://github.com/devcontainers/
- https://containers.dev/

### Example for a local HTML build

```
$ make html
```
Building for a specific language:

```
$ make -e SPHINXOPTS="-D language='en'" html
```

### Update of Translation Catalog

Before creating a pull request, make sure to update the translation catalog after your last changes:

```
$ make gettext
```

[badge_latest]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=latest
[docs_latest]: https://admin-docs.zammad.org/en/latest/

[badge_pre-release]: https://readthedocs.org/projects/zammad-admin-documentation/badge/?version=pre-release
[docs_pre-release]: https://admin-docs.zammad.org/en/pre-release/

[tbadge_pre-release]: https://translations.zammad.org/widget/documentations/admin-documentation-pre-release/svg-badge.svg
[wbetranslate_pre-release]: https://translations.zammad.org/projects/documentations/admin-documentation-pre-release/

[tbadge_latest]: https://translations.zammad.org/widget/documentations/admin-documentation-latest/svg-badge.svg
[wbetranslate_latest]: https://translations.zammad.org/projects/documentations/admin-documentation-latest/
