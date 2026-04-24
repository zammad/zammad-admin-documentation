Basic Notification
==================

This page serves as a basic example of a simple generic notification webhook.
It uses the ``notification.`` variables like the pre-defined notification
webhooks do. These variables provide human readable output for different ticket
events. Make sure your external service can understand and parse the output and
adjust or enhance it, where necessary.

Payload Example
---------------

.. code-block:: json

   {
      "ticket": "#{ticket.number}",
      "subject": "#{notification.subject}",
      "message": "#{notification.message}",
      "link": "#{notification.link}",
      "changes": "#{notification.changes}",
      "body": "#{notification.body}"
   }

Variables
---------

The payload contains the following variables:

``ticket.number``
   The ticket number of the triggering ticket.

``notification.subject``
   The subject of the triggering ticket.

``notification.message``
   A short description of the triggering event.

   Examples:

   - ``Updated by Nicole Braun at 04/24/2026 10:26 am (Europe/Berlin)``
   - ``Last updated at 04/24/2026  9:23 am (Europe/Berlin)``

``notification.link``
   A link to the ticket which triggered the webhook.

   Example: ``https://zammad.example.com/#ticket/zoom/123``.

``notification.changes``
   A list of changes which were applied to the ticket attributes. In case the
   webhook was triggered without a ticket change, the last changes are listed
   here.

   Example: ``* Priority: 2 normal -> 1 low\n* Owner: - -> Emma Taylor``

``notification.body``
   If an article triggered the webhook or was part of the ticket changes, the
   variable contains the article's content. Otherwise, it is empty.
