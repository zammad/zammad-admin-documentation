SLAs
====

Service Level Agreements (SLAs) ensure timely responses to customer requests.
You can set these goals - such as responding to all inquiries within eight
hours - with optional custom deadlines for specific customers. When such a
deadline is passed, the ticket escalates. In other words: SLAs reflect the
agreement you have with your customer about the processing time of tickets.
To add or edit SLAs, navigate to `Manage > SLAs`. You need the permission
``admin.sla`` to manage them.

Quick Start
-----------

- Set up your business hours in a :doc:`calendar </manage/calendars>`.
- Create SLAs with different conditions and escalation time intervals.
- Optionally create triggers or scheduler jobs to handle escalated tickets and/or
  tickets about to escalate.

Setup
-----

Calendar
^^^^^^^^

First of all, set up your business hours in a
:doc:`calendar </manage/calendars>`. A calendar is used in an SLA to calculate
escalation times based on your business hours. You can set up one general
calendar or use multiple calendars which you can assign individually to your
SLAs. In case you have specific business times for different customers or
service levels, make sure that your calendars match the business hours of your
service levels or individual customer agreements.

SLA Configuration
^^^^^^^^^^^^^^^^^

Create a new SLA by clicking the **New SLA** button. To edit an existing SLA,
click on the **Edit** button in the SLA list. Both actions open the SLA
configuration dialog, where you can adjust the settings below:

.. figure:: /images/manage/slas/sla-settings.png
   :align: center
   :width: 60%
   :alt: Part of the configuration dialog for SLAs

.. warning::

   Updating existing SLA configurations can cause temporary performance issues
   depending on your instance size and affected tickets. Try to perform
   such changes outside of your business hours.

Name
   Provide a meaningful name to quickly see what the SLA is about.

Ticket Selector
   Specify to which tickets this SLA should apply to based on conditions. This
   means you can filter tickets by checking their attributes, e.g. customer,
   organization or group.

   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

Preview
   Based on your condition, you can see a preview of the matching tickets to
   double check if your condition is correct.

Calendar
   As mentioned above, SLAs use calendars to calculate escalation times.
   Choose the correct calendar here, otherwise the SLA calculation may be
   incorrect. If you haven't set your business hours yet, see
   :doc:`/manage/calendars` to learn more.

SLA Times
   Define the escalation time intervals based on your working hours.
   It is up to you if you set one, two or all three times. When a SLA time is
   reached, the ticket escalates.
   Keep in mind: if you define 8 hour business hours per day, a 16 hour
   SLA time interval will lead to a ticket escalation in 2 business days.

   - **First Response**: Time interval for the first response (external call,
     email). This time is calculated based on the ticket creation time and
     does not reset if you're moving the ticket into another group or apply
     other changes.
   - **Update Time**: Time interval for every following response (external call,
     email). This time either counts from ticket creation (if no first response
     is set) or after the last response time. You can choose between two modes:

     - **between agent updates**: In this mode, agents have to respond
       every defined interval, no matter if the customer replied or not.
     - **for an agent to respond**: In this mode, agents have to respond after
       a customer replies. In case there is no new customer reply after the last
       agent response, no escalation time is calculated for updating the ticket.
   - **Solution Time**: Time interval for solving the problem and setting the
     ticket to a closed state type. This calculation ignores ticket updates
     unless they solve and close it.

   **First Response** and **Solution Time** can only apply once per ticket.
   **Update Time** can apply once ("for an agent to respond" mode when no new
   customer reply has been received) or applies multiple times until the ticket
   has been solved ("between agent updates" mode).

   By default, the states *pending close*, *pending reminder* and *closed* are
   ignored for the SLA calculation. Tickets in one of these states are freezed:
   they are displayed as not escalated and escalation times are not visible.
   However, as soon as the ticket set to open (e.g. by a customer responding),
   the ticket may instantly escalate, depending on its age and your set
   intervals.

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

.. note::

   Ticket escalations will notify all affected agents. This highly depends on
   their chosen notification settings (Profile). Escalated tickets can also be
   filtered for:

      * by searching
      * :doc:`/manage/trigger`
      * :doc:`/manage/scheduler`
      * :doc:`/manage/overviews`

Agent Perspective
-----------------

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
