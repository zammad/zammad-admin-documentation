locale_dirs = ['locale/']
gettext_compact = False

source_suffix = '.rst'

master_doc = 'index'
exclude_patterns = ['_build', 'html', 'doctrees']
language = "en"

import sphinx_rtd_theme

html_theme = "sphinx_rtd_theme"

html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]