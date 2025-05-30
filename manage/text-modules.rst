Text Modules
============

Text modules can be edited in the admin interface under *Manage > Text modules*.
Here you find text snippets which are already shipped by Zammad, which
can be extended as needed.

Beside text modules Zammad also allows you to use
:user-docs:`Ticket Templates for ticket creation </advanced/ticket-templates.html>`.

.. figure:: /images/manage/text-modules/managing-text-modules.png

Here you can add new text modules, delete or edit them.

Creating keywords makes it easier to find the right text module.

.. figure:: /images/manage/text-modules/text-module-keywords-example.png
   :alt: You can find text modules either by their name or keyword.

If needed, you can restrict text modules to specific groups.
With this, you can easily keep text module lists short and dedicate specific
texts to where they belong.

You can adjust the group memberships for text modules at any time.
This allows you to have the text module available globally (no groups selected)
or one or several specific groups.

.. figure:: /images/manage/text-modules/text-module-group-specific.png
   :alt: Example: Restricting text modules to 2nd Level group only.

To select placeholders from a list, just enter ``::`` in the text block.
The list can be searched with the arrow keys after inputting keywords or
shortcuts. All text modules can be used in articles as well as in the chat.

To use the text modules in a ticket, you can use ``::`` too! You can find more
information on how to use text modules in our
:user-docs:`user documentation </advanced/text-modules.html>`.

The example text modules below use :doc:`/misc/variables` to dynamically
insert information like the customer's or agent's names.

**Examples of snippets are**::

   Hello Mrs. #{ticket.customer.lastname},

   Hello Mr. #{ticket.customer.lastname},

   Hello #{ticket.customer.firstname},

   My Name is #{user.firstname},

Of course you can also use multi line snippets.

Delete or Clone Text Modules
----------------------------

Often similar text modules have to be created or unnecessary ones deleted.
For these cases you can click on the 3 points in the text module overview on
the right side and select the corresponding action:

.. figure:: /images/manage/text-modules/clone-or-delete-text-modules.png

When cloning, text modules with all attributes are duplicated and can be edited
later.

Import of Text Modules via CSV File
-----------------------------------

With the import action you can download a sample CSV file
and upload your own CSV file.

To reduce the error rate of unwanted mass changes, a test import is carried out
first and a summary appears at the end. If you agree with the summary, the CSV
import will be executed.

.. figure:: /images/manage/text-modules/add-or-update-text-modules-by-importing-csv.png
