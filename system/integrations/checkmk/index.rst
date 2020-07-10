Checkmk
========

.. toctree::
   :hidden:

   /system/integrations/checkmk/learn-by-example
   /system/integrations/checkmk/receive-monitoring-emails
   /system/integrations/checkmk/receive-monitoring-http-calls
   /system/integrations/checkmk/valid-ticket-attributes

Checkmk is a powerful monitoring solution that can either send emails or http requests to Zammad. 
This integration allows you to recognize Checkmk tickets and thus automatically close tickets 
if a system self-heals or gets fixed automatically.

.. warning:: 🐞 **Bugs ahead**

   Please note that receiving mail currently is buggy and does not work as expected. 
   You can find more information on this topic on Github: Issue2377_ and Issue2180_.

.. _Issue2377: https://github.com/zammad/zammad/issues/2377
.. _Issue2180: https://github.com/zammad/zammad/issues/2180

.. figure:: /images/system/integrations/checkmk/settings.png
   :alt: Screenshot of Checkmk settings within the integrations page
   :align: center
   :width: 70%

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /system/integrations/checkmk/learn-by-example
   /system/integrations/checkmk/receive-monitoring-emails
   /system/integrations/checkmk/receive-monitoring-http-calls
   /system/integrations/checkmk/valid-ticket-attributes

Settings
--------

Group
   Define a group in which Checkmk tickets should be created.

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

Logging
-------

Zammad provides information about the last calls that were sent to this integration. 
If you can't create new tickets or can't check Zammads responses in your tool, these entries will help you.

The log entries contain the returned status, request and response and will help you to figure out the issue. 🙌

.. figure:: /images/system/integrations/checkmk/recent-log-overview.png
   :alt: Example of successful communication between a Checkmk and Zammad instance
   :align: center