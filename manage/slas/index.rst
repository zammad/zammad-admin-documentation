SLAs
====

Service Level Agreements (SLAs) ensure timely responses to customer requests.
You can set these goals - such as responding to all inquiries within eight
hours - with optional custom deadlines for specific customers. When such a
deadline is passed, the ticket escalates. In other words: SLAs reflect the
agreement you have with your customer about the processing time of a ticket.
To add or edit SLAs, navigate to `Manage > SLAs`. You need the permission
``admin.sla`` to manage them.

Quick Start
-----------

- Set up your business hours in a :doc:`/manage/calendars`.
- Create SLAs with different conditions and escalation times.
- Optionally create triggers or scheduler jobs to handle escalated tickets or
  tickets about to escalate.

SLA Setup
---------

Calendar
^^^^^^^^

First of all, set up your business hours in a :doc:`/manage/calendars`. A
calendar is used in an SLA to calculate escalation times based on your business
hours. You can set up one general calendar or use multiple calendars which you
can assign individually to your SLAs.

SLA Configuration
^^^^^^^^^^^^^^^^^

Create a new SLA by clicking the **New SLA** button. To edit an existing SLA,
click on the **Edit** button in the SLA list. Both actions open the SLA
configuration dialog, where you can apply the following configuration:

.. figure:: /images/manage/slas/sla-settings.png
   :align: center
   :width: 60%
   :alt: Part of the configuration dialog for SLAs

.. warning::

   Updating existing SLA configurations can cause temporary performance issues
   depending on your instance size and affected tickets. Try to perform
   such changes outside of your business hours.

Name
   Give your SLA a meaningful name to quickly see what it is about.

Ticket Selector
   Specify the conditions on which tickets this SLA should apply to.

   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

   Probably not all tickets are SLA relevant. Apply filter tickets based on conditions.
   You can even fetch tickets before they escalate.

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


## Agent Perspective

Agent get notified and see a timestamp in SLA-relevant tickets.

Tips
----

Tip: Create a trigger or scheduler job to move escalated tickets to a
special group or agent. You can even re-dispatch tickets **before** they
escalate.

.. tip::

   Communication type articles are not enough for your SLA?
   You can also configure Zammad to allow **public** notes as fulfillment for
   SLA requirements,
   :docs:`our console documentation </admin/console/working-on-ticket-articles.html#count-public-notes-toward-slas>` tells you how.

You can define several independent SLAs, however, ensure to have no overlapping
SLAs as their calculations may not work as you intended them originally.

----------

Agents will be notified via several, optional ways. You can provide overviews
for escalated or soon to escalate tickets to help you agents. Also, agents can
check the current applying SLA timings of tickets at any time.

Online notifications
   Zammad will warn agents roughly 15 minute before escalation and when the
   ticket finally escalates. This depends on the notification configuration of
   your agent.

   .. figure:: /images/manage/slas/online-notifications-escalations.png
      :scale: 70%
      :align: center
      :alt: Screenshot showing two notifications: One upcoming escalation and
            one escalated ticket

Email notifications
   Zammad will warn agents roughly 15 minute before escalation and when the
   ticket finally escalates. This depends on the notification configuration of
   your agent.

   .. container:: cfloat-left

      .. figure:: /images/manage/slas/email-notficiation-to-be-escalated-ticket.png
         :align: center
         :alt: Email notification for a ticket that's going to escalate.

         Notification by mail that a ticket is going to escalate.

   .. container:: cfloat-right

      .. figure:: /images/manage/slas/email-notficiation-escalated-ticket.png
         :align: center
         :alt: Email notification for a ticket that escalated.

         Notification by mail that a ticket has escalated.

   .. container:: cfloat-clear

      X

Overviews
   You can configure :doc:`/manage/overviews` to allow your agents to filter
   for escalated tickets or those that are about to escalate. By default Zammad
   comes with an overview that will show all tickets that are either escalated
   or escalating within the next 10 minutes: ``Escalated Tickets``.

   .. tip::

      If you have all/most of your tickets covered by SLAs you may consider
      changing the default sorting of existing overviews by escalation time,
      instead of creation time.

   .. figure:: /images/manage/slas/overview-of-escalated-tickets.png
      :align: center
      :alt: Screenshot showing overview with escalated tickets

SLA timings of a ticket
   Ticket zooms provide a timestamp of the next escalation of a ticket. Agents
   can hover that timestamp and learn about all upcoming escalation stages.

   .. figure:: /images/manage/slas/tickets-sla-timings.png
      :align: center
      :scale: 70%
      :alt: Screenshot showing the calculated escalation stages

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   learn-by-example
   how-do-they-work
