Webhook
=======

Webhooks are a way to integrate Zammad with other web services or applications,
allowing them to subscribe to live updates about tickets instead of having to
poll the Zammad server every *n* minutes.

.. note:: ⌛ **Webhooks may not arrive immediately.**

   Webhooks are sent out with the same priority and order as email triggers.
   If webhook dispatch fails (*e.g.,* because the receiving server is
   misconfigured), Zammad will retry up to four times.

.. hint::

   Webhooks are available for :doc:`/manage/trigger` and
   :doc:`/manage/scheduler`.

How does it work?
-----------------

Under the hood, Zammad sends a POST request to a third-party URL
(“API endpoint”) you specify in the New Webhook dialog. The application server
behind this URL/endpoint must be configured to receive messages from Zammad and
handle the provided payload accordingly.

Webhooks can be created both from scratch and from pre-defined templates.

When created from scratch, regular webhook payloads by default contain the
following JSON data about new/updated tickets:

* ticket attributes/metadata
* *all* associated articles
* associated users (*e.g.* article senders, owners, etc.)
* associated user roles
* associated user organizations (if applicable)
* associated groups

On the other hand, pre-defined webhooks are designed to work with specific
services, containing special payloads that these services understand.

In both cases, however, it is possible to further customize the webhook payload
to your own needs.

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /manage/webhook/add
   /manage/webhook/payload
   /manage/webhook/log
   /manage/webhook/examples
