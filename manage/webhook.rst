Webhook
=======

Webhooks are a way to integrate Zammad with other web services or applications,
allowing them to subscribe to live updates about new tickets
instead of having to poll the Zammad server every *n* minutes.

.. note:: ⌛ **Webhooks may not arrive immediately.**

   Webhooks are sent out with the same priority and order as email triggers.
   If webhook dispatch fails (*e.g.,* because the receiving server is misconfigured),
   Zammad will retry up to four times.

.. hint:: 

   Webhooks are available for :doc:`/manage/trigger` and :doc:`/manage/scheduler`.

How does it work?
-----------------

Under the hood, Zammad sends a POST request
to a third-party URL (“API endpoint”) you specify in the New Trigger dialog.
The application server behind this URL/endpoint
must be configured to receive messages from Zammad
and handle the attached data accordingly.

Webhook requests from Zammad contain the following JSON data about new/incoming tickets:

* ticket attributes/metadata
* *all* associated articles
* associated users (*e.g.,* article senders, owners, etc.)
* associated user roles
* associated user organizations (if applicable)
* associated groups

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /manage/webhook/payload
   /manage/webhook/log
