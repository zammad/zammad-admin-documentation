How do trigger work
===================

Triggers consist of three parts: **activators**, **conditions** and **changes**.
Activator defines "when the question is asked?". Conditions answer the question,
"when should this trigger fire?" Changes answer the question,
"what should happen when it does?"

Triggers are evaluated in alphabetical order, by **name.**
In some situations triggers might be the wrong choice, see
:doc:`/manage/trigger/limitations` for more information.

.. hint:: **🤓 Email trigger behavior can be manipulated**

   Please have a look at :doc:`/channels/email/email-headers`
   in case this is a relevant use case for you.

Activators
----------

Triggers support two types of activators:

* **Action** is triggered by some actor.
  Either a user creating or updating the ticket. Or an external action, e.g. an email coming in.

* **Time event** is triggered at a specific time.
  When a certain event is reached, e.g. ticket pending time.

**Action** activator may evaluate **Conditions** in two modes:

* **Selective** execution checks if any property that is included in conditions
  was updated. If the action was other than update, it checks if conditions match.

  .. hint::
    A selective action trigger which is listening on the priority **1 low**
    will trigger if the ticket was changed to **1 low** or got an new article in
    that priority state.

* **Always** execution checks if the current state of the ticket in question
  matches conditions.

  .. hint::
    An always action trigger which is listening on the priority **1 low**
    will trigger if the ticket was moved to another group while priority was
    set **1 low**.

**Time event** activator simply checks if **Conditions** match.
This is the same behavior as Action-based activator's „Always" mode.

When creating a trigger, choose activator here:

  .. figure:: /images/manage/trigger/activator-of-a-trigger.png

Conditions
----------

When creating a trigger, define your conditions here:

   .. figure:: /images/manage/trigger/conditions-of-a-trigger.png

Trigger conditions must match as configured for the trigger to fire.

.. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

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
         Remember that the placeholders' values have to be known during trigger
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
