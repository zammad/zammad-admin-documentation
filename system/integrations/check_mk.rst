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

Settings
--------

Let's talk about the settings very quick.

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

This section will be updated as soon as the email functionality is completely working.

At this moment, ticket follow ups are not correctly recognized, which is why you may want 
to stick to the http call method below.

Pushing monitoring notifications via http call
----------------------------------------------

