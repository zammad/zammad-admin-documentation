How do they work?
=================

Triggers consist of two parts: **conditions** and **changes**. Conditions
answer the question, “when should this trigger fire?” Changes answer the
question, “what should happen when it does?”

Triggers are evaluated in alphabetical order, by **name.** 
In some situations triggers might be the wrong choice, see :doc:`/manage/trigger/limitations` 
for more information.

Conditions
----------

When creating a trigger, define your conditions here:

  .. figure:: /images/manage/trigger/Zammad_Helpdesk_Trigger-conditions.png

Trigger conditions are **and-selectors** and thus all conditions must apply as configured for the trigger to fire. 
You can configure triggers to fire based on the properties of:

* The **Ticket** itself
   *e.g.,* Was this ticket newly created? Is the ticket currently open? When was
   the last time we received contact from the customer on this ticket?
* New **Articles** on the ticket
   *e.g.,* Was this article added by email? by phone? Was it created by an
   agent, or a customer? Does the subject contain a certain set of words?
* The **Customer** that created the ticket
   *e.g.,* What is the customer’s name? Is the customer a VIP? What department
   does the customer work in?
* The **Organizations** that the ticket’s customer belongs to
   *e.g.,* What is the name of the customer’s organization? Does it have a note
   attached to it containing a certain set of words?
* The **Execution time** the trigger is being triggered
    *e.g.,* Only send out a auto-reply if the mail has been received outside of 
    the working hour times. Working hours can be defined on :doc:`/manage/calendars` setting.

    .. Note::
       
       The business hours condition was introduced with Zammad 3.3.

Actions
-------

When creating a trigger, define your changes here:

  .. figure:: /images/manage/trigger/Zammad_Helpdesk_Trigger-actions.png

A trigger can do the following things once its conditions have been met:

* Modify the ticket
   *e.g.,* Escalate its priority, close it, reassign it, rename it, add tags, etc.
* Send an email or SMS
   Either to the customer, the agent who owns the ticket, or every agent in the system.
* add internal or public notes to the ticket
   This allows you to help your agents with specific information if needed. (e.g. automated changes a trigger applied to the ticket)

.. note:: In order to send emails with Triggers, you need to configure an email address for the group the trigger is working in.
   If you don't, Zammad will skip the Trigger completely.

.. hint:: Certain actions (such as *Email*, *SMS* and *Notes*) support :doc:`/system/variables`, which can be used to build highly-customized message templates.
