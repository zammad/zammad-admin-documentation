Articles
========

.. note:: If you're missing variables or are not sure if something is not
   working as expected, feel free to ask over at the
   `community <https://community.zammad.org>`_.

Below you can find a list with examples of article variables.
Depending on the context and if you want to use an attribute of a specific
article, you can choose from specific article types in Zammad. To access
suggestions for variables, type :kbd:`:` :kbd:`:` followed by your search query
to trigger a list of relevant options. The following article types are
available, depending on the context:

- ``first_internal_article``
- ``first_external_article``
- ``first_article``
- ``last_internal_article``
- ``last_external_article``
- ``last_article``
- ``created_internal_article``
- ``created_external_article``
- ``created_article``

The table uses "Article" as example. Replace it with one of the aforementioned
article types.

.. csv-table:: Article Variables
   :header: "Name", "Variable", "Example"
   :widths: 20, 10, 20

   "Article > Cc",                       "``#{article.cc}``",                     "``jdoe@example.com, company@example.com``"
   "Article > Created by > Address",     "``#{article.created_by.address}``",     "``Some street 1, 12345 Berlin`` or empty if not set in user object"
   "Article > Created by > Department",  "``#{article.created_by.department}``",  "``Sales`` or empty if not set in user object"
   "Article > Created by > Email",       "``#{article.created_by.email}``",       "``jdoe@example.com``"
   "Article > Created by > Fax",         "``#{article.created_by.fax}``",          "``+4930123456789`` or empty if not set in user object"
   "Article > Created by > Firstname",   "``#{article.created_by.firstname}``",   "``Joe`` or empty if not set"
   "Article > Created by > Lastname",    "``#{article.created_by.lastname}``",    "``Doe`` or empty if not set"
   "Article > Created by > Login",       "``#{article.created_by.login}``",       "``jdoe``"
   "Article > Created by > Mobile",      "``#{article.created_by.mobile}``",      "``+4930123456789`` or empty if not set in user object"
   "Article > Created by > Note",        "``#{article.created_by.note}``",        "``Some note about user`` or empty if not set in user object"
   "Article > Created by > Phone",       "``#{article.created_by.phone}``",       "``+4930123456789`` or empty if not set in user object"
   "Article > Created by > VIP",         "``#{article.created_by.vip}``",         "``true`` or ``false``"
   "Article > Created by > Web",         "``#{article.created_by.web}``",         "``https://zammad.com`` or empty if not set in user object"
   "Article > Created",                  "``#{article.created_at}``",             "``2019-10-08 15:24:47 UTC``"
   "Article > From",                     "``#{article.from}``",                   "``Joe Doe <jdoe@example.com>`` may differ, depends on ``FROM`` of send mail"
   "Article > Sender > Name",            "``#{article.sender.name}``",            "``Customer``, ``Agent`` or ``System``"
   "Article > Subject",                  "``#{article.subject}``",                "``My amazing subject``"
   "Article > Text",                     "``#{article.body}``",                   "``Test`` without formatting (plain). See also note below."
   "Article > Text (HTML)",              "``#{article.body_as_html}``",           "``Test`` with formatting. See also note below."
   "Article > TicketID",                 "``#{article.ticket_id}``",              "``1`` (not ticket number)"
   "Article > To",                       "``#{article.to}``",                     "``helpdesk@example.com``"
   "Article > Type > Name",              "``#{article.type.name}``",              "``email`` (`list of article types <https://github.com/zammad/zammad/blob/develop/db/seeds/ticket_article_types.rb>`_)"
   "Article > Updated by > Address",     "``#{article.updated_by.address}``",     "``Some street 1, 12345 Berlin`` or empty if not set in user object"
   "Article > Updated by > Department",  "``#{article.updated_by.department}``",  "``Sales`` or empty if not set in user object"
   "Article > Updated by > Email",       "``#{article.updated_by.email}``",       "``jdoe@example.com``"
   "Article > Updated by > Fax",         "``#{article.updated_by.fax}``",         "``+4930123456789`` or empty if not set in user object"
   "Article > Updated by > Firstname",   "``#{article.updated_by.firstname}``",   "``Joe`` or empty if not set"
   "Article > Updated by > Lastname",    "``#{article.updated_by.lastname}``",    "``Doe`` or empty if not set"
   "Article > Updated by > Login",       "``#{article.updated_by.login}``",       "``jdoe``"
   "Article > Updated by > Mobile",      "``#{article.updated_by.mobile}``",      "``+4930123456789`` or empty if not set in user object"
   "Article > Updated by > Note",        "``#{article.updated_by.note}``",        "``Some note about user`` or empty if not set in user object"
   "Article > Updated by > Phone",       "``#{article.updated_by.phone}``",       "``+4930123456789`` or empty if not set in user object"
   "Article > Updated by > VIP",         "``#{article.updated_by.vip}``",         "``true`` or ``false``"
   "Article > Updated by > Web",         "``#{article.updated_by.web}``",         "``https://zammad.com`` or empty if not set in user object"
   "Article > Updated",                  "``#{article.updated_at}``",             "``2019-10-08 15:24:47 UTC``"
   "Article > Visibility",               "``#{article.internal}``",               "``false`` or ``true`` (false if not internal)"
   "Ticket > Article#",                  "``#{ticket.article_count}``",           "``1`` number of ticket articles"

.. note::

   There are different variables for the body of an article. In addition to the
   mentioned variables in the table above, there are even two more which are not
   in the suggestion list when typing :kbd:`:` :kbd:`:`.

   Let's have a look at an example to make it more clear. The following text
   is the body of an article with some HTML formatting:

   .. code-block:: HTML

      This is the <b>body</b> of an<br>
      article you want to use<br>
      in a variable.<br>

   Depending on the variable, the result differs:

   .. tabs::

      .. tab:: Plain text as quote

         Variable: ``#{article.body}``

         Body in plain text, converted to HTML with quote character (``>``) at
         the beginning of each line. Example:

         .. code-block:: text

            > This is the body of an<br>
            > article you want to use<br>
            > in a variable.<br>

      .. tab:: HTML

         Variable: ``#{article.body_as_html}``

         Body as HTML without quote character (``>``). Example:

         .. code-block:: HTML

            This is the <b>body</b> of an<br>
            article you want to use<br>
            in a variable.<br>

      .. tab:: Plain text with HTML linebreaks

         Variable: ``#{article.body_as_text.text2html}``

         Body as plain text, converted to HTML without quote character (``>``).
         Example:

         .. code-block:: HTML

            This is the body of an<br>
            article you want to use<br>
            in a variable.<br>

      .. tab:: Plain text

         Variable: ``#{article.body_as_text}``

         Body as plain text without quote character (``>``). Example:

         .. code-block:: text

            This is the body of an\n
            article you want to use\n
            in a variable.\n
