Webhook Logs
============

Zammad provides a history of your recent webhooks.
You can find them below **Recent logs**.

If you need more details you can click on the request link in question.
Zammad will provide a modal with the following information:

   Direction
      Always ``out``.

   URL
      The URL Zammad sent the request to.

   Method
      Always ``POST``.

   Status
      Contains the HTTP status code the remote server replied with.
      Should be ``2xx`` if successful.

   Request
      Contains the request Zammad sent (HTTP header and payload)

   Response
      Contains the remotes response header.

   Created at
      Date and time the request was sent.
