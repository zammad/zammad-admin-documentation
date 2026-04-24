Basic Notification
==================

This page serves as a basic example of a simple generic notification webhook.
Make sure that the external service is able to understand and parse the output
and adjust or enhance it, where necessary.

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
   The ticket number of the ticket which triggered the webhook.

``notification.subject``
   The subject of the ticket.

``notification.message``
   The message of the notification, which is a short description of the event
   which triggered the webhook.

   Example: ``Updated by Nicole Braun at 04/24/2026 10:26 am (Europe/Berlin)``

``notification.link``
   A link to the ticket which triggered the webhook.

   Example: ``https://zammad.example.com/#ticket/zoom/123``.

``notification.changes``
   A list of changes which were applied to the ticket attributes.

   Example: ``* Priority: 2 normal -> 1 low\n* Owner: - -> Emma Taylor``

``notification.body``
   If an article triggered the webhook or was part of the ticket changes, the
   variable contains the article's content. Otherwise, it is empty.

