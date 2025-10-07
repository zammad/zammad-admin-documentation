Articles
========

.. note:: If you're missing variables or are not sure if something is not
   working as expected, feel free to ask over at the
   `community <https://community.zammad.org>`_.

Below you can find a list with examples of article variables.
Depending on the context and if you want to use an attribute of a specific
article, you can choose from specific article types in Zammad. To trigger
the suggestions, type ``::`` and search for the variable you want to use.
The following article types are available, depending on the context:

- ``last_internal_article``
- ``last_external_article``
- ``last_article``
- ``created_internal_article``
- ``created_external_article``
- ``created_article``

The table uses ``last_article`` as example. In case you want another article,
replace it with one of the mentioned article types.

.. csv-table:: Article Variables
   :header: "Name", "Variable", "Example"
   :widths: 20, 10, 20

   "Last Article > Cc", "``#{article.cc}``", "``jdoe@example.com, company@example.com``"
   "Last Article > Created by > Address", "``#{article.created_by.address}``", "``Some street 1, 12345 Berlin`` or empty if not set in user object"
   "Last Article > Created by > Department", "``#{article.created_by.department}``", "``Sales`` or empty if not set in user object"
   "Last Article > Created by > Email", "``#{article.created_by.email}``", "``jdoe@example.com``"
   "Last Article > Created by > Fax", "``#{article.created_by.fax}``", "``+4930123456789`` or empty if not set in user object"
   "Last Article > Created by > Firstname", "``#{article.created_by.firstname}``", "``Joe`` or empty if not set"
   "Last Article > Created by > Lastname", "``#{article.created_by.lastname}``", "``Doe`` or empty if not set"
   "Last Article > Created by > Login", "``#{article.created_by.login}``", "``jdoe``"
   "Last Article > Created by > Mobile", "``#{article.created_by.mobile}``", "``+4930123456789`` or empty if not set in user object"
   "Last Article > Created by > Note", "``#{article.created_by.note}``", "``Some note about user`` or empty if not set in user object"
   "Last Article > Created by > Phone", "``#{article.created_by.phone}``", "``+4930123456789`` or empty if not set in user object"
   "Last Article > Created by > VIP", "``#{article.created_by.vip}``", "``true`` or ``false``"
   "Last Article > Created by > Web", "``#{article.created_by.web}``", "``https://zammad.com`` or empty if not set in user object"
   "Last Article > Created", "``#{article.created_at}``", "``2019-10-08 15:24:47 UTC``"
   "Last Article > From", "``#{article.from}``", "``Joe Doe <jdoe@example.com>`` may differ, depends on ``FROM`` of send mail"
   "Last Article > Sender > Name", "``#{article.sender.name}``", "``Customer``, ``Agent`` or ``System``"
   "Last Article > Subject", "``#{article.subject}``", "``My amazing subject``"
   "Last Article > Text", "``#{article.body}``", "``Test`` without formatting (plain)"
   "Last Article > Text (HTML)", "``#{article.body_as_html}``", "``Test`` with formatting"
   "Last Article > TicketID", "``#{article.ticket_id}``", "``1`` (not ticket number)"
   "Last Article > To", "``#{article.to}``", "``helpdesk@example.com``"
   "Last Article > Type > Name", "``#{article.type.name}``", "``email`` (`list of article types <https://github.com/zammad/zammad/blob/develop/db/seeds/ticket_article_types.rb>`_)"
   "Last Article > Updated by > Address", "``#{article.updated_by.address}``", "``Some street 1, 12345 Berlin`` or empty if not set in user object"
   "Last Article > Updated by > Department", "``#{article.updated_by.department}``", "``Sales`` or empty if not set in user object"
   "Last Article > Updated by > Email", "``#{article.updated_by.email}``", "``jdoe@example.com``"
   "Last Article > Updated by > Fax", "``#{article.updated_by.fax}``", "``+4930123456789`` or empty if not set in user object"
   "Last Article > Updated by > Firstname", "``#{article.updated_by.firstname}``", "``Joe`` or empty if not set"
   "Last Article > Updated by > Lastname", "``#{article.updated_by.lastname}``", "``Doe`` or empty if not set"
   "Last Article > Updated by > Login", "``#{article.updated_by.login}``", "``jdoe``"
   "Last Article > Updated by > Mobile", "``#{article.updated_by.mobile}``", "``+4930123456789`` or empty if not set in user object"
   "Last Article > Updated by > Note", "``#{article.updated_by.note}``", "``Some note about user`` or empty if not set in user object"
   "Last Article > Updated by > Phone", "``#{article.updated_by.phone}``", "``+4930123456789`` or empty if not set in user object"
   "Last Article > Updated by > VIP", "``#{article.updated_by.vip}``", "``true`` or ``false``"
   "Last Article > Updated by > Web", "``#{article.updated_by.web}``", "``https://zammad.com`` or empty if not set in user object"
   "Last Article > Updated", "``#{article.updated_at}``", "``2019-10-08 15:24:47 UTC``"
   "Last Article > Visibility", "``#{article.internal}``", "``false`` or ``true`` (false if not internal)"
   "Ticket > Article#", "``#{ticket.article_count}``", "``1`` number of ticket articles"
