How Do SLAs Work
----------------

You can define several independent SLAs, however, ensure to have no overlapping
SLAs as their calculations may not work as you intended them originally.

.. figure:: /images/manage/slas/sla-settings.png
   :align: center
   :width: 60%
   :alt: Part of the configuration dialog for SLAs

.. warning::

   Updating existing SLA configurations *may* cause temporary performance issues
   depending on your instance size and affected tickets. You may want to perform
   those changes outside of your business hours.

.. tip::

   Communication type articles are not enough for your SLA?
   You can also configure Zammad to allow **public** notes as fulfillment for
   SLA requirements,
   :docs:`our console documentation </admin/console/working-on-ticket-articles.html#count-public-notes-toward-slas>` tells you how.

Name
   Give your SLA a meaningful name to quickly see what or who is affected.

Ticket selector
   Specify the conditions on which tickets this SLA should apply to.

   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

Preview
   In the preview you see the selection of the tickets and double check whether
   those are correct.

Calendar
   Zammad calculates ticket escalations based on your business hours.
   It makes no sense to escalate tickets when you're not in.

   Choose the correct calendar here. If you haven't set your business hours
   yet, see :doc:`/manage/calendars` to learn more.

SLA Times
   Define the escalation timings based on your working hours.
   Keep in mind that if you defined 8 hour business hours per day, a 16 hour
   escalation will take two business days.

   First Response
      Time frame for the first response (external call, email).
      This time is calculated from the ticket creation.

      The start time *does not* reset if you're e.g. moving the ticket into
      new groups or different SLA calculations. That is because the creation
      time of the ticket does not change - keep this in mind.

   Update Time
      Time frame for every following response (external call, email).
      This time either counts from ticket creation (if no first response is set)
      or *after* the first response was done.

      between agent updates
         In this scenario your agent have to respond every ``n`` hours depending
         on your configuration. This causes Zammad to not care if your customer
         replied or not.

         Be aware that this setting can be quite stressful for your agents!

      for an agent to respond
         From the moment your customer replied to the ticket, your agents have
         the configured time amount to respond until the ticket escalates.

   Solution Time
      Time frame for solving the problem (setting the ticket to a closed state
      type).

      This escalation timing *does not* care about ticket responses.
      It's simply being calculated from the ticket creation.

   It is up to you if you set one, two or all three times. When the SLA time is
   reached, the ticket escalates.

   .. hint::

      *First response* and *Solution time* can only apply once. Update time
      applies until the ticket has been solved or the SLA no longer matches
      your criteria.

      The only way to stop escalations in default installations is to set the
      ticket to either a pending reminder or pending close. **However**:
      as soon as the ticket is being set to open (e.g. by a customer responding)
      the ticket may instantly escalate depending on its age and your
      configuration.

.. note::

   Ticket escalations will notify all affected agents. This highly depends on
   their chosen notification settings (Profile). Escalated tickets can also be
   filtered for:

      * by searching
      * :doc:`/manage/trigger`
      * :doc:`/manage/scheduler`
      * :doc:`/manage/overviews`
