=====
Text Templates
=====

Create text templates to spend less time writing responses. You can create text passages (Text modules) or even entire response templates.


Text modules
-------------

Text modules can be edited in the admin interface under Manage --> Text modules.
Here you will find text snippets already created in the standard version, which can be extended as needed.

.. image:: images/manage/Zammad_Helpdesk_-_Text_modules.jpg

Text modules can include smart variables like the users name or email address.
Here you can add new text modules, delete or edit them.

Creating keywords makes it easier to find the right text module.

To select placeholders from a list, just enter "::" in the text block. The list can be searched with the arrow keys after inputting keywords or shortcuts.
All text modules can be used in articles as well as in triggers (auto-messages) and in chat.


**Tip:**
  If text modules are to be grouped, this can be done using shortcuts. Example country codes:

  Text modules are created for the group Germany as follows:

  - Ger_Textmodule1
  - Ger_Textmodule2
  - ...

  for Austrian-Snippets:

  - Aut_Textmodule1
  - Aut_Textmodule2

  thus only the relevant text modules are displayed for each country.





**Examples of snippets are:**

  Hello Mrs. #{ticket.customer.lastname},

  Hello Mr. #{ticket.customer.lastname},

  Hello #{ticket.customer.firstname},

  My Name is #{user.firstname},

Of course you can also use multi line snippets.



**Available objects are:**

  ticket (e. g. ticket.state, ticket.group)

  ticket.customer (e. g. ticket.customer.firstname, ticket.customer.lastname)

  ticket.owner (e. g. ticket.owner.firstname, ticket.owner.lastname)

  ticket.organization (e. g. ticket.organization.name)

  user (e. g. user.firstname, user.email)


Delete or clone text modules
----------

  It happens more often that similar text modules have to be created or unnecessary ones deleted. For these cases you can click on the 3 points in the text module overview on the right side and select the corresponding action:

    .. image:: images/manage/Zammad_Helpdesk_-_Text_modules-clone.jpg

  When cloning, text modules with all attributes are duplicated and can be edited later.


Import of text modules via CSV file
----------
  With the import action (since Zammad 2.5) you can download a sample CSV file and upload your own CSV file.

  To reduce the error rate of unwanted mass changes, a test import is carried out first and a summary appears at the end. If you agree with the summary, the CSV import can be finally executed.

  .. image:: images/manage/Zammad_Helpdesk_-_Text_modules-Import.jpg



Ticket templates for new tickets
-------------

  Ticket templates in new tickets can be created by any agent. Therefore you will find information under the following link:

`<http://zammad-user-documentation.readthedocs.io/de/latest/zammad-ticket-templates.html>`_
