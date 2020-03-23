Conditions and actions
======================

Conditions
----------

When creating a trigger, define your conditions here:

  .. figure:: /images/manage/trigger/Zammad_Helpdesk_Trigger-conditions.png

If you set multiple conditions for a trigger, they must **all** be true for it
to fire. You can configure triggers to fire based on the properties of:

The **Ticket** itself
   *e.g.,* Was this ticket newly created? Is the ticket currently open? When was
   the last time we received contact from the customer on this ticket?

New **Articles** on the ticket
   *e.g.,* Was this article added by email? by phone? Was it created by an
   agent, or a customer? Does the subject contain a certain set of words?

The **Customer** that created the ticket
   *e.g.,* What is the customer’s name? Is the customer a VIP? What department
   does the customer work in?

The **Organizations** that the ticket’s customer belongs to
   *e.g.,* What is the name of the customer’s organization? Does it have a note
   attached to it containing a certain set of words?

Actions
-------

When creating a trigger, define your changes here:

  .. figure:: /images/manage/trigger/Zammad_Helpdesk_Trigger-actions.png

A trigger can do two things once its conditions have been met:

Modify the ticket
   *e.g.,* Escalate its priority, close it, reassign it, rename it, add tags, etc.

Send an email
   Either to the customer, the agent who owns the ticket, or every agent in the system.

.. note:: In order to send emails with Triggers, you need to configure an email address for the group the trigger is working in.
   If you don't, Zammad will skip the Trigger.

.. hint:: Certain actions (such as *Email* and *Notes*) support :doc:`/system/variables`, which can be used to build highly-customized message templates.
