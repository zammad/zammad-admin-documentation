Check_MK
========

Check_MK is a powerful monitoring solution that can either send emails or http requests to Zammad. 
This integration allows you to recognize check_mk tickets and thus automatically close tickets 
if a system self-heals or gets fixed automatically.

.. warning:: 🐞 **Bugs ahead**

   Please note that receiving mail currently is buggy and does not work as expected. 
   You can find more information on this topic on Github: Issue2377_ and Issue2180_.

.. _Issue2377: https://github.com/zammad/zammad/issues/2377
.. _Issue2180: https://github.com/zammad/zammad/issues/2180

.. figure:: /images/system/integrations/check_mk/settings.png
   :alt: Screenshot of Check_MK settings within the integrations page
   :align: center
   :width: 70%

Settings
--------

Group
   Define a group in which check_mk tickets should be created.

   .. hint:: This option only affects created monitoring tickets via http calls.

Auto close: default: `yes`
   Usually you won't have to take an extra look on self-heals. However, if it's mandatory 
   for you to have a look before you close a ticket, you can set this option to `no`. 

   .. note:: Even with auto close being set to yes, Zammad will still notify your agents 
      based on their permissions.

Auto close state: default: `closed`
   Especially if you want to use reporting on tickets, you may require a different state for 
   monitoring tickets than "closed". In this case you can choose a different state here. 
   For adding further states, please see: 
   `Zammad console documentation <https://docs.zammad.org/en/latest/admin/console.html>`_

Monitoring emails
------------------

.. note:: This section will be updated as soon as the email functionality is completely working.

At this moment, ticket follow ups are not correctly recognized, which is why you may want 
to stick to the http call method below.

   .. tip:: You want to learn more about notifications and available Checkmk variables?
      Check out the `Checkmk documentation <https://checkmk.com/cms_notifications.html>`_!

Pushing monitoring notifications via http call
----------------------------------------------

Within the integration overview you can find two script examples for host and service notifications. 
Locate these scripts within ``/opt/omd/sites/{SITENAME}/local/share/check_mk/notifications/`` and ensure 
they can be executed.

   .. tip:: As soon as you've saved the required script, go to „Notifications‟ → „➕ New Rule‟. 
      You can then select your scripts as „Notification Method‟.

         .. hint:: Our sample scripts do not require further parameters upon calling. 🤓

         .. figure:: /images/system/integrations/check_mk/adding-new-notification-rules.png
            :alt: Checkmk setting page for configuration of new notification rules
            :align: center

If you want to use the Checkmk integration out of the notification scope or maybe for another monitoring 
tool, you can also copy the endpoint URL. This URL is generated during Zammads installation and doesn't 
require further authentication.

Attributes you can use
++++++++++++++++++++++

Let's talk about attributes - first of all, the following parameters are the default parameters.

``event_id`` (mandatory)
   Even though Zammad currently doesn't take the event_id in account further, this ID should be unique.

   Checkmk variable ``NOTIFY_SERVICEPROBLEMID`` or ``NOTIFY_HOSTPROBLEMID`` will provide a unique ID per incident.

``host`` (mandatory)
   The e.g. hostname or identifier of the faulty system. 
   Zammad uses this to identify open tickets for this system.

   .. hint:: If the host value is not the same on e.g. recovery calls, Zammad is not able to recognize a follow up.

``service`` (optional)
   If applicable, this is the faulty service. 

   The Checkmk variable ``NOTIFY_SERVICEDESC`` returns the service name.

   .. hint:: Zammad uses service and host together to identify follow ups on existing issue tickets. 
      The service name may not change upon e.g. recovery, if Zammad should recognize the follow up.

   .. note:: If service is not provided, Zammad will provide service like so: ``Service: -``.

``state`` (mandatory)
   The current state of the service or host in question. 
   Zammad does not restrict the possible values here.

   The Checkmk variable ``NOTIFY_SERVICESTATE`` will return: ``OK``, ``WARN``, ``CRIT`` or ``UNKNOWN``.

   .. note:: ``UP`` and ``OK`` are recovering the ticket.

``text`` (optional)
   The output depends on the issue and service. It usually provides error details of the check.

   .. note:: If no text is provided, Zammad will provide it like so: ``Text: -``.

Manipulate ticket attributes
++++++++++++++++++++++++++++

In some cases the default alerting like above isn't enough. In such a case, you can provide further 
post variables that *have to* be valid ticket attributes.

This allows you to fill custom objects or maybe even pre-assign an owner if needed. 
Here's an example of a possible call you could create::

   curl -X POST -F "event_id=1" -F "host=sample-host" -F "state=WARN" -F "text=Some issue..." -F "priority=3 high" https://verification-20200807.zammad.com/api/v1/integration/check_mk/030e4816bec37e5909cca98d6c1beb7c

The above example creates a ticket with priority ``3 high``.

.. warning:: Additional attributes can only be used upon ticket creation. If you have an existing issue 
   ticket and try to set further ticket attributes, Zammad will ignore that ticket attribute.

Logging
-------

Zammad provides information about the last calls that were sent to this integration. 
If you can't create new tickets or can't check Zammads responses in your tool, these entries will help you.

The log entries contain the returned status, request and response and will help you to figure out the issue. 🙌

.. figure:: /images/system/integrations/check_mk/recent-log-overview.png
   :alt: Example of successful communication between a Checkmk and Zammad instance
   :align: center