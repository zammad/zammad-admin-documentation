Triggers
========

Triggers are one way to automate Zammad. You can create *if this then that*
rules by defining which tickets should get changed and which changes you want
to apply to them.

In case you are looking for a time-based automation, use
:doc:`scheduler jobs </manage/scheduler>` instead. To execute pre-defined
changes manually via UI (without a condition), use :doc:`/manage/macros`
instead.

Zammad ships one active trigger by default: an auto reply trigger which sends an
email to the customer after a new ticket is created. This leads to an article in
the ticket. This article only displays the title and the recipient as a text
string to maintain clarity in the ticket view.
You can disable it, modify it or create new ones
for all sorts of automation tasks in the **Triggers** section in the admin
settings:

.. figure:: /images/manage/trigger/trigger-management.png
   :alt: Screenshot of “Triggers” page in admin panel

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /manage/trigger/learn-by-example
   /manage/trigger/how-do-they-work
   /manage/trigger/limitations
   /manage/trigger/system-notifications
