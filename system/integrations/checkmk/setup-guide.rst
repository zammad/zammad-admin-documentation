Setup Guide
===========

Whenever the Checkmk integration is enabled,
Zammad listens for messages on its API and over email.
As long as those messages follow the required format,
Zammad will create new tickets (or find and update existing ones)
based on the message contents.

That means that “setting up Checkmk integration”
is simply a matter of **adding configuration to your Checkmk site**:
telling it when to send these messages and what to say.
To do that, you’ll need to create a new **notification rule**
(see `Checkmk’s official docs <https://checkmk.com/cms_notifications.html>`_
for help with that).

As part of this new rule, you’ll have to choose a **notification method**
(*i.e.,* a script to execute whenever the rule is triggered).
This script will be written by you (samples below),
and contain the logic for sending API/email messages to Zammad:

.. figure:: /images/system/integrations/checkmk/adding-new-notification-rules.png
   :alt: Checkmk "New Rule" dialog
   :align: center

   Find your custom scripts in the Checkmk WATO under **Notifications > New Rule > Notification Method**.

Once you’re done setting up your new rule, you’re all set!
New tickets should start coming in and auto-updating
any time your rule is triggered.

(If you need help troubleshooting, be sure to check the :ref:`checkmk-recent-logs`.)

.. _checkmk-api-alerts:

API Alerts
^^^^^^^^^^

To add these scripts in the Checkmk WATO,
copy them into your Checkmk installation directory and make them executable.
(Be sure to replace the ``zammad.example.com`` callback URL
with the one found in your admin panel.)

Service notification
   For updates on the status of the software running on your server
   (*e.g.,* postgres).

   .. code:: bash

      #!/bin/bash
      # /opt/omd/sites/<SITE>/local/share/check_mk/notifications/zammad-service

      curl -X POST \
        -F "event_id=$NOTIFY_SERVICEPROBLEMID" \
        -F "host=$NOTIFY_HOSTNAME" \
        -F "service=$NOTIFY_SERVICEDESC" \
        -F "state=$NOTIFY_SERVICESTATE" \
        -F "text=$NOTIFY_SERVICEOUTPUT" \
        https://zammad.example.com/api/v1/... # see Admin Panel > System > Integrations > Checkmk > Usage

Host notification
   For updates on the status of the server itself.

   .. code:: bash

      #!/bin/bash
      # /opt/omd/sites/<SITE>/local/share/check_mk/notifications/zammad-host

      curl -X POST \
        -F "event_id=$NOTIFY_HOSTPROBLEMID" \
        -F "host=$NOTIFY_HOSTNAME" \
        -F "state=$NOTIFY_HOSTSTATE" \
        -F "text=$NOTIFY_HOSTOUTPUT" \
        https://zammad.example.com/api/v1/... # see Admin Panel > System > Integrations > Checkmk > Usage

.. note:: 🤔 **What’s with all the env vars?**

   Whenever Checkmk runs these scripts,
   it needs to provide some information
   about the event that triggered the notification.
   This information is passed in the form of
   these ``$NOTIFY_*`` environment variables.

   You can specify additional parameters to pass to the script
   when you’re setting up your notification rule,
   but the ones you see here are all provided by default.

Email Alerts
^^^^^^^^^^^^

.. warning:: 🐞 **There are known bugs** in Zammad’s processing of email from Checkmk.
   This section will be completed once they have been resolved.
   (Learn more at GitHub issues `#2377`_ & `#2180`_.)

   In the meantime, we encourage you to set up API alerts instead.

   .. _#2377: https://github.com/zammad/zammad/issues/2377
   .. _#2180: https://github.com/zammad/zammad/issues/2180
