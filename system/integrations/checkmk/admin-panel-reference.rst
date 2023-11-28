Admin Panel Reference
=====================

Settings
--------

.. figure:: /images/system/integrations/checkmk/settings.png
   :alt: Screenshot of Checkmk settings overview
   :align: center

Group
   Which :doc:`group </manage/groups/index>` should Checkmk tickets be assigned
   to as a default (*i.e.,* when none is specified)?

   (Applies to :ref:`API alerts <checkmk-api-alerts>` only.)

Auto close
   Should Zammad automatically close tickets if a service has recovered on
   its own?

   (Agents will receive notifications for such closures as appropriate.)

Auto-close state
   What ticket state should be applied when “auto-closing” a ticket?

   (You may choose from the seven built-in ticket states,
   but if you change this setting from the default, you'll more likely want to
   :docs:`define a new ticket state </admin/console/working-on-tickets.html#add-new-ticket-state>`
   for this purpose. This can be especially useful for tracking tickets with
   :doc:`reports </manage/report-profiles>`.)

.. _checkmk-recent-logs:

Recent Logs
-----------

.. figure:: /images/system/integrations/checkmk/recent-log-overview.png
   :alt: Screenshot of Checkmk "Recent Logs" section
   :align: center

If you're having trouble getting Zammad and Checkmk to play nicely together,
this section can help you troubleshoot.

It contains a record of the fifty most recent transactions that Zammad knows
about, including each one's request/response details and return status.
