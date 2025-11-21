Webhook
=======

Webhooks are a way to integrate Zammad with other web services or applications,
allowing them to subscribe to live updates about tickets instead of having to
poll the Zammad server every *n* minutes. You can find the webhook configuration
in Zammad's settings under *Manage > Webhooks*.

.. hint::

   - Webhooks may not arrive immediately. They are sent out with the same
     priority and order as email triggers. If webhook dispatch fails (e.g.
     because the receiving server is misconfigured), Zammad will retry up to
     four times.
   - Webhooks have to be triggered by :doc:`/manage/trigger` or
     :doc:`/manage/scheduler` jobs.
   - The usage of variables is limited compared to other places.
     Some features are not available in webhooks (e.g. the ``.value`` extension,
     translation (``#{t(object.attribute)}``) and time formatting
     (``#{dt(object.time_attribute, [...]``) functions).

How do Webhooks Work
--------------------

Under the hood, Zammad sends a request to a third-party URL ("API endpoint") you
specify in the webhook configuration. The application server behind this
URL/endpoint must be configured to receive messages from Zammad and
handle the provided payload accordingly.

Webhooks can be created both from scratch and from pre-defined templates.
When created from scratch, regular webhook payloads by default contain the
following JSON data about new/updated tickets:

* Ticket attributes/metadata
* Associated article(s)
* Associated users (e.g. article senders, owners, etc.)
* Associated user roles
* Associated user organizations (if applicable)
* Associated groups

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
