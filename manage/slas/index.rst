SLAs
****

Service Level Agreements , abbreviated SLAs , help you to meet specific response
times for your customers' requests. This way you can define goals such as
answering every inquiry within eight hours. If you are at risk of missing this
target, Zammad will alert you.

.. figure:: /images/manage/slas/sla-configuration-overview.png
   :width: 90%
   :align: center
   :alt: Screenshot showing SLA management with configured SLA levels

Agents will be notified via several, optional ways. You can provide overviews
for escalated or soon to escalate tickets to help you agents. Also, agents can
check the current applying SLA timings of tickets at any time.

Online notifications
   Zammad will warn agents roughly 15 minute before escalation and when the
   ticket finally escalates. This depends on the notification configuration of
   your agent.

   .. figure:: /images/manage/slas/online-notifications-escalations.png
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
   for escalated or to be escalated tickets. By default Zammad comes with an
   Overview that will show all tickets that are either escalated or escalating
   within the next 10 minutes: ``Escalated Tickets``.

   .. figure:: /images/manage/slas/overview-of-escalated-tickets.png
      :align: center
      :alt: Screenshot showing overview with escalated tickets

SLA timings of a ticket
   Ticket zooms provide a timestamp of the next escalation of a ticket. Agents
   can hover that timestamp and learn about all upcoming escalation stages.

   .. container:: cfloat-left

      .. figure:: /images/manage/slas/tickets-sla-timings.png
         :align: center
         :alt: Screenshot showing the calculated escalation stages

         A fresh ticket without any response by agents.

   .. container:: cfloat-right

      .. figure:: /images/manage/slas/tickets-sla-timings-after-first-response.png
         :align: center
         :alt: Screenshot showing the calculated escalation stages after agents
               first response

         A ticket after the agents initial response and a customer response.

   .. container:: cfloat-clear

      X

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   learn-by-example   
   how-do-they-work
