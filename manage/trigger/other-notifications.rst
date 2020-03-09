Other Notifications
===================

There are other notification emails sent by Zammad that are not configurable as
triggers (*e.g.,* the notifications that **agents** receive when a new ticket
is created, or when a ticket is escalated). These notifications are built into
Zammad itself, and if you need to customize them, you will have to modify some
of the files on your server.

Inside your Zammad directory (usually ``/opt/zammad``), email templates for
various events are stored inside the ``/app/views/mailer`` directory, named
according to the language they’re written in. Thus, ::

   /opt/zammad/app/views/mailer/ticket_create/de.html.erb

is the German-language template used to notify agents whenever a new ticket is
created. To modify this template, create another file with the same name and
add a ``.custom`` suffix::

   /opt/zammad/app/views/mailer/ticket_create/de.html.erb.custom

Now, this file will be used instead of the original when sending notification
emails in German.
