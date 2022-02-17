CTI (generic)
=============

.. include:: /system/integrations/cti/includes/introduction.include.rst

Requirements
------------

Please provide the following requirements:

   * a telephone system that supports webhooks (outbound)
     (best option are those that allow customizing the calls)
   * a unique Call-ID during the call session
   * call event data (from and to numbers, direction)
   * your Zammad instance must be reachable for your telephony system

If you want to learn more on what kind of requests are supported by Zammad
and what it expects, please consult our `CTI-API documentation`_.

.. URL is subject to change due to reworks

.. _CTI-API documentation:
   https://docs.zammad.org/en/latest/cti/api-intro.html

Available settings
------------------

.. hint::

   Click the button next to the ``CTI (generic)`` heading to activate or
   deactivate this function.

Endpoint Settings
   Zammad will list your generic CTI endpoint here.
   It contains a unique token so ensure to keep this URL save.

   You'll need this endpoint for your PBX to talk to Zammad,
   see `CTI-API documentation`_.

.. include:: /system/integrations/cti/includes/important-dont-forget-saving.include.rst

Call Settings
   Inbound
      .. include:: /system/integrations/cti/includes/inbound-calls.include.rst

      ..
         yes above and below looks odd but is required to allow including and
         page specific content. :-/

      .. note::

         Your telephony system has to support this function.
         Zammad will send a ``reject`` response which will cause your telephony
         system to hang up the call.

         To callers this usually will feel like the line is busy.

   .. include:: /system/integrations/cti/includes/outbound-calls.include.rst

   .. include:: /system/integrations/cti/includes/generic-cti-support-note.includes.rst

Other Settings
   .. include:: /system/integrations/cti/includes/other-settings-intro.include.rst

   .. include:: /system/integrations/cti/includes/default-caller-id.include.rst

   .. include:: /system/integrations/cti/includes/generic-cti-support-note.includes.rst

   .. include:: /system/integrations/cti/includes/records-caller-log.include.rst

Caller Log Filter
   This function allows you to provide call information based on e.g. queues
   only to agents that really need the information.

   Why? If you have a team for several countries or departments, you don't want
   to bug your agents from other departments. Leaving these options empty will
   fallback to showing everything to everyone.

   Destination caller ID or Queue
      This depends on your PBX and usually is either a queue ID, phone number
      or extension.

   Agents
      Select the agents that are responsible for the group.
      These agents will then see caller log entries and call notifications
      fitting to said queue.

   .. figure:: /images/system/integrations/cti/generic/caller-log-filter.png
      :alt: Screenshot showing the caller log filter table with pre filled sample data
      :width: 75%

.. include:: /system/integrations/cti/includes/recent-logs.include.rst
