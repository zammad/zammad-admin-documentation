Text Templates
==============

.. warning:: With Zammad 3.1 we introduced group based text modules. This documentation contains information that might no longer apply to Zammad versions earlier 3.1.

Create text templates to spend less time writing responses. You can create text passages (Text modules) or even entire response templates.

.. note:: Beside text modules Zammad also allows you to use `Ticket-Templates for ticket creation <https://user-docs.zammad.org/en/latest/advanced/ticket-templates.html>`_.


Text modules
------------

Text modules can be edited in the admin interface under Manage --> Text modules.
Here you will find text snippets already created in the standard version, which can be extended as needed.

.. image:: /images/manage/Zammad_Helpdesk_-_Text_modules.jpg

Here you can add new text modules, delete or edit them.

Creating keywords makes it easier to find the right text module.

.. figure:: /images/manage/text-module-keywords-example.png
   :alt: You can find text modules either by their name or keyword.

If needed, you can restrict text modules to specific groups.
With this, you can easilly keep text module lists short and dedicate specific texts to where they belong.

You can adjust the group memberships for text modules at any time.
This allows you to have the text module available globally (no groups selected) or one or several specific groups.

.. figure:: /images/manage/text-module-group-specific.png
   :alt: Example: Restricting text modules to 2nd Level group only.

To select placeholders from a list, just enter "::" in the text block. The list can be searched with the arrow keys after inputting keywords or shortcuts.
All text modules can be used in articles as well as in the chat.

.. note:: You can find more information on how to use text modules on our `User Documentation <https://user-docs.zammad.org/en/latest/advanced/text-modules.html>`_.


.. tip:: If text modules are to be grouped, this can be done using shortcuts. Example country codes:

   Text modules are created for the group Germany as follows:

   - Ger_Textmodule1
   - Ger_Textmodule2
   - ...

   for Austrian-Snippets:

   - Aut_Textmodule1
   - Aut_Textmodule2

   thus only the relevant text modules are displayed for each country.




The example text modules below use :doc:`/system/variables` to dynamically insert information like the customer’s or agent’s names.

**Examples of snippets are**::

   Hello Mrs. #{ticket.customer.lastname},

   Hello Mr. #{ticket.customer.lastname},

   Hello #{ticket.customer.firstname},

   My Name is #{user.firstname},

Of course you can also use multi line snippets.


Delete or clone text modules
----------------------------

Often similar text modules have to be created or unnecessary ones deleted. For these cases you can click on the 3 points in the text module overview on the right side and select the corresponding action:

.. image:: /images/manage/Zammad_Helpdesk_-_Text_modules-clone.jpg

When cloning, text modules with all attributes are duplicated and can be edited later.


Import of text modules via CSV file
-----------------------------------

With the import action (since Zammad 2.5) you can download a sample CSV file and upload your own CSV file.

To reduce the error rate of unwanted mass changes, a test import is carried out first and a summary appears at the end. If you agree with the summary, the CSV import will be executed.

.. image:: /images/manage/Zammad_Helpdesk_-_Text_modules-Import.jpg



Ticket templates for new tickets
--------------------------------

Ticket templates in new tickets can be created by any agent. Therefore you will find information inside of our `User-Documentation <https://user-docs.zammad.org/en/latest/advanced/ticket-templates.html>`_ .
