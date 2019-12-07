SLAs
****

Service levels and the respective agreements (service level agreements, SLAs) document quality pledges for IT services. SLAs are recorded and administered in here.

A calendar is required to calculate escalations or evaluations based on business hours.
Define a "standard" calendar which is valid throughout the system. Only in the specified business hours, escalation notifications are sent to agents.
If you have customers for which you need to comply with different business hours, you can create multiple calendars. The customer tickets are allocated via the SLAs.

That's how it works:

.. image:: /images/manage/Zammad_Helpdesk_-_manage-SLAs-1.jpg
.. image:: /images/manage/Zammad_Helpdesk_-_manage-SLAs-2.jpg


1. Give it a distinctive name
2. Specify the ticket groups for which the SLA is to apply (these can also be arbitrarily combined and thus specified)
3. In the preview you see the selection of the tickets and doublecheck wheather those are correct
4. Choose the business-calender
5. Define the SLA-Times:

   :First Response: Timeframe for the first response (external call, email)
   :Update Time:    Timeframe for every following response (external call, Email)
   :Solution Time:  Timeframe for solving the problem (status: closed)

It is up to you if you set one, two or all three times. When the SLA time is reached, the ticket escalates. Now all agents get  notifications, which have stored the corresponding setting in their own settings profile -> notifications. The information that a ticket is escalated can be selected in the triggers as an attribute, whereby a desired action can be followed.
