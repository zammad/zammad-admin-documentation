System Notifications
====================

.. note:: System notifications can only be customized
   on **self-hosted installations**.

System notifications are automated emails sent by Zammad for critical system
events, such as account changes or SLA violations.

Unlike the automated emails you can set up using :doc:`/manage/trigger` or the
:doc:`/manage/scheduler`, these notifications are built into Zammad itself:
if you need to customize them, you will have to modify some of the files on
your server.

When Are They Sent?
-------------------

**All users** are notified about:

* Password change requests
* :ref:`automatic-account-linking-notification` on initial login

**Staff (admins & agents)** are notified of:

* Logins from a new device
* Logins from a new country

**Agents** are notified about:

* New tickets
* Ticket updates
* Pending reached tickets
* SLA violations (before and after the deadline)

Agents can change their notification settings in their
:user-docs:`user profile </extras/profile-and-settings.html>`.

Daily reminder emails are sent at midnight (of the Zammad system timezone)
for all tickets where the *pending till* time is reached or SLA violations
exist.

How Can I Customize Them?
-------------------------

Inside your Zammad directory (usually ``/opt/zammad``), email templates for
various events are stored inside the ``/app/views/mailer`` directory, named
according to the language they're written in. Thus, ::

   /opt/zammad/app/views/mailer/ticket_create/de.html.erb

is the German-language template used to notify agents whenever a new ticket is
created. To modify this template, create another file with the same name and
add a ``.custom`` suffix::

   /opt/zammad/app/views/mailer/ticket_create/de.html.erb.custom

Now, this file will be used instead of the original when sending notification
emails in German.
