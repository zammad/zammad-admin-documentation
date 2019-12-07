Articles
********

.. note:: If you're missing variables or are not sure if something is not working as expected, feel free to ask over at the `Community <https://community.zammad.org>`_.

Below you can find all available ticket article-based variables within Zammad.
These can be called via Triggers for example. If you're unsure if Zammad does support variables at the point you're at, you can try to type ``::`` to check.

The below list gives you an example what kind of data you can expect, it's not intended to explain the data itself.

.. csv-table:: Article Variables
   :header: "name", "variable", "example"
   :widths: 20, 10, 20

   "Article > Updated by > Web", "``#{article.updated_by.web}``", "``https://zammad.com`` or empty if not set in user object"
   "Article > Updated by > VIP", "``#{article.updated_by.vip}``", "``true`` or ``false``"
   "Article > Updated by > Phone", "``#{article.updated_by.phone}``", "``+4930123456789`` or empty if not set in user object"
   "Article > Updated by > Note", "``#{article.updated_by.note}``", "``Some note about user`` or empty if not set in user object"
   "Article > Updated by > Mobile", "``#{article.updated_by.mobile}``", "``+4930123456789`` or empty if not set in user object"
   "Article > Updated by > Login", "``#{article.updated_by.login}``", "``jdoe``"
   "Article > Updated by > Lastname", "``#{article.updated_by.lastname}``", "``Doe`` or empty if not set"
   "Article > Updated by > Firstname", "``#{article.updated_by.firstname}``", "``Joe`` or empty if not set"
   "Article > Updated by > Fax", "``#{article.updated_by.fax}``", "``+4930123456789`` or empty if not set in user object"
   "Article > Updated by > Email", "``#{article.updated_by.email}``", "``jdoe@example.com``"
   "Article > Updated by > Department", "``#{article.updated_by.department}``", "``Sales`` or empty if not set in user object"
   "Article > Updated by > Address", "``#{article.updated_by.address}``", "``Some street 1, 12345 Berlin`` or empty if not set in user object"
   "Article > Updated", "``#{article.updated_at}``", "``2019-10-08 15:24:47 UTC``"
   "Article > Type > Name", "``#{article.type.name}``", "``email`` (`list of article types <https://github.com/zammad/zammad/blob/develop/db/seeds/ticket_article_types.rb>`_)"
   "Article > To", "``#{article.to}``", "``helpdesk@example.com``"
   "Article > TicketID", "``#{article.ticket_id}``", "``1`` (not ticket number)"
   "Article > Subject", "``#{article.subject}``", "``My amazing subject``"
   "Article > Sender > Name", "``#{article.sender.name}``", "``Customer``, ``Agent`` or ``System``"
   "Article > Visibility", "``#{article.internal}``", "``false`` or ``true`` (false if not internal)"
   "Article > From", "``#{article.from}``", "``Joe Doe <jdoe@example.com>`` may differ, depends on ``FROM`` of send mail"
   "Article > Created by > Web", "``#{article.created_by.web}``", "``https://zammad.com`` or empty if not set in user object"
   "Article > Created by > VIP", "``#{article.created_by.vip}``", "``true`` or ``false``"
   "Article > Created by > Phone", "``#{article.created_by.phone}``", "``+4930123456789`` or empty if not set in user object"
   "Article > Created by > Note", "``#{article.created_by.note}``", "``Some note about user`` or empty if not set in user object"
   "Article > Created by > Mobile", "``#{article.created_by.mobile}``", "``+4930123456789`` or empty if not set in user object"
   "Article > Created by > Login", "``#{article.created_by.login}``", "``jdoe``"
   "Article > Created by > Lastname", "``#{article.created_by.lastname}``", "``Doe`` or empty if not set"
   "Article > Created by > Firstname", "``#{article.created_by.firstname}``", "``Joe`` or empty if not set"
   "Article > Created by > Fax", "``#{article.created_by.fax}``", "``+4930123456789`` or empty if not set in user object"
   "Article > Created by > Email", "``#{article.created_by.email}``", "``jdoe@example.com``"
   "Article > Created by > Department", "``#{article.created_by.department}``", "``Sales`` or empty if not set in user object"
   "Article > Created by > Address", "``#{article.created_by.address}``", "``Some street 1, 12345 Berlin`` or empty if not set in user object"
   "Article > Created", "``#{article.created_at}``", "``2019-10-08 15:24:47 UTC``"
   "Article > Cc", "``#{article.cc}``", "``jdoe@example.com, company@example.com``"
   "Article > Text", "``#{article.body}``", "``Test`` without formatting (plain)"
   "Article Text as HTML (not referenced)", "``#{article.body_as_html}``", "``Test`` with formatting"
   "Ticket > Article#", "``#{ticket.article_count}``", "``1`` number of ticket articles"
