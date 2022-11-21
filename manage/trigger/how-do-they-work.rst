How do they work?
=================

Triggers consist of two parts: **conditions** and **changes**. Conditions
answer the question, “when should this trigger fire?” Changes answer the
question, “what should happen when it does?”

Triggers are evaluated in alphabetical order, by **name.**
In some situations triggers might be the wrong choice, see
:doc:`/manage/trigger/limitations` for more information.

.. hint:: **🤓 Email trigger behavior can be manipulated**

   Please have a look at :doc:`/channels/email/email-headers`
   in case this is a relevant use case for you.

Conditions
----------

When creating a trigger, define your conditions here:

   .. figure:: /images/manage/trigger/conditions-of-a-trigger.png

Trigger conditions are **and-selectors** and thus all conditions must apply as
configured for the trigger to fire. You can configure triggers to fire based on
the properties of:

* The **Ticket** itself
   *e.g.,* Was this ticket newly created? Is the ticket currently open? When
   was the last time we received contact from the customer on this ticket?
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
   *e.g.,* Only send an auto-reply if the message was received outside of
   regular business hours. (“Regular business hours” can be defined on
   :doc:`/manage/calendars` setting.)

Actions
-------

When creating a trigger, define your changes here:

   .. figure:: /images/manage/trigger/actions-of-a-trigger.png

A trigger can do the following things once its conditions have been met:

* Modify the ticket
   *e.g.,* Escalate its priority, close it, reassign it, rename it,
   add tags, etc.

   Date & time attributes (like **Pending till**) can be
   specified in *absolute* or *relative* terms.

      .. hint::

         You can also combine static text with placeholders for text fields.
         Remember that the placeholders value has to be known during trigger
         runtime.

         Learn more about :doc:`/system/variables`.

* Send an email or SMS
   Either to the customer, the agent who owns the ticket, or every agent in
   the system.

      .. tip::

         Sending emails allows you to include the attachments of the triggering
         article if required.
* :doc:`Fire a webhook </manage/webhook>`
   Connect Zammad to another web service or application to give it live updates
   about new tickets.
* Add internal or public notes to the ticket
   This allows you to help your agents with specific information if needed.
   (e.g. automated changes a trigger applied to the ticket)

.. note:: In order to send emails with Triggers, you need to configure
   an email address for the group the trigger is working in. If you
   don't, Zammad will skip the Trigger completely.

.. hint:: Certain actions (such as *email*, *SMS* and *notes*) support
   :doc:`/system/variables`, which can be used to build
   highly-customized message templates.
