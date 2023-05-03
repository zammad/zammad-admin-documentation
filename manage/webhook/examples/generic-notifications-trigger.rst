Generic Notifications Trigger
=============================

For posting a notification to an external service, you can use a dedicated
:doc:`Trigger </manage/trigger>`. Here we will outline steps needed to create a
Trigger which will fire a webhook under certain conditions.

Go to Trigger management screen, and click on the green **New Trigger** button.

First, provide a suitable **Name** for the trigger.

.. figure:: /images/manage/trigger/activator-of-a-trigger.png
   :alt: Trigger Activator and Action Execution Mode

Next, choose a suitable activator type under **Activated by** field:

Action
   This will execute the trigger on a specific action, e.g. user creating or
   updating a ticket, an email coming in.

   If you choose **Action** activator, you can set one of the two options for
   **Action execution**, in order to influence how it evaluates configured
   conditions:

   Selective
      This will check if any property used as a condition attribute was updated by
      the action. If the action behind the trigger was one other than update, it
      will simply check if the conditions match.

   Always
      This will check if the current state of the ticket matches configured
      conditions.

Time event
   This will execute the trigger at a specific time, e.g. when a ticket pending
   time is reached.

   **Time event** activator simply checks if conditions match. This is the same
   behavior as **Always** execution mode for **Action** activator.

For **Conditions for affected objects**, you may configure any of the following
recipes, or their combination.

Ticket Created ``Action activator only``
   Select ticket **Action** attribute, leave the operator on *is* and set the
   value to *created*.

Ticket Updated ``Action activator only``
   Select ticket **Action** attribute, leave the operator on *is* and set the
   value to *updated*.

Ticket Merged ``Action activator only``
   Select ticket **Action** attribute, leave the operator on *is* and set the
   value to *merged into* or *received merge*.

Ticket Pending Time Reached ``Time event activator only``
   Select ticket **Pending till** attribute and set the operator to *has
   reached*.

Ticket Escalation Time Reached ``Time event activator only``
   Select ticket **Escalation at** attribute and set the operator to *has
   reached*.

Ticket Escalation Time Reached Warning ``Time event activator only``
   Select ticket **Escalation at** attribute and set the operator to *has
   reached warning*.

For complex conditions, you can switch on **Expert Mode** under the conditions
field. This will allow you to change the condition group operators to *Match any
(OR)*. See :doc:`/misc/object-conditions/expert-mode` for more information.

Next, under **Execute changes on objects**, change the initial attribute to
*Notification > Webhook* and select your notifications webhook from the list.

.. figure:: /images/manage/webhook/webhook-slack-trigger-new.png
   :alt: Configuring Trigger for firing of Webhook
   :align: center
   :width: 90%

Finally, click on **Submit** to save the trigger.
