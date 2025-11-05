How Do Triggers Work
====================

Triggers consist of three parts:

* **Activators:** define "when the question is asked?"
* **Conditions:** answer the question "when should this trigger fire?"
* **Actions:** answer the question "what should happen when it does?"

Triggers are evaluated in alphabetical order by **name.**
In some situations, triggers might be the wrong choice, see
:doc:`/manage/trigger/limitations` for more information.

.. hint:: **🤓 Emails can adjust some behavior on their own**

   See :doc:`/channels/email/email-headers` for more information.

Activators
----------

Triggers support two types of activators:

Action
^^^^^^

An action based trigger always requires a ticket update to run. This can be an
update by an agent or even internal system updates like updated SLA times.
See the explanation below for more details.

Selective
   Checks if any attribute from the condition was updated OR an article was
   added and the condition matches. If the attributes of the condition weren't
   touched and no new article was added, the trigger doesn't run.

   **Example:** A trigger with a condition for priority **1 low** will run if
   the ticket was changed to **1 low**.

Always
   Checks if the current state of the ticket matches the condition. This means:
   the trigger always runs when the ticket is updated, no matter what was
   changed. This can lead to more often executions of such a trigger.

   **Example:** A trigger with a condition for priority **1 low** will run if
   the ticket was moved to another group while priority was set **1 low**.

   .. hint:: If in doubt, use **Selective**. The **Always** action activator can
      lead to unexpected behavior, e.g. the trigger runs after internal system
      changes of the ticket, which aren't visible in the ticket history.

Time Event
^^^^^^^^^^

The execution is triggered when one of the following events occur:

- Time of a reminder is reached
- Escalation is reached
- Escalation warning is reached

When such a time event is reached, the trigger runs if the condition
matches. This is the same behavior as action-based activator's "always" mode.

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

.. hint:: Certain actions (such as *email*, *SMS* and *notes*) support
   :doc:`/misc/variables`, which can be used to build
   highly-customized message templates.

A trigger can do the following things once its conditions have been met:

* Modify the ticket
   Examples: escalate its priority, close it, reassign it, rename it,
   add tags, subscribe and unsubscribe specific/all users, etc.

   Date & time attributes (like **Pending till**) can be
   specified in *absolute* or *relative* terms.

   You can also combine static text with placeholders for text fields.
   Remember that the placeholders' values have to be known during trigger
   runtime. Learn more about :doc:`/misc/variables`.

* Send an email or SMS
   Either to the customer, the agent who owns the ticket, or every agent in
   the system.

   Sending emails allows you to include the attachments of the triggering
   article if required.

   In order to send emails with triggers, you need to configure
   an email address for the group, the trigger is working in. If you
   don't, Zammad will skip the trigger completely.

* :doc:`Fire a webhook </manage/webhook>`
   Connect Zammad to another web service or application to give it live updates
   about new tickets.
* Add internal or public notes to the ticket
   This allows you to help your agents with specific information if needed.
   (e.g. automated changes a trigger applied to the ticket)

* :doc:`Run an AI agent </ai/ai-agents>`
   Trigger an AI agent to run using triggers.

.. _trigger-localization:

Localization of Execution Changes
---------------------------------

The system locale and timezone predefines a default format of date and timestamp replacement variables. These settings are customizable for triggers.

    .. figure:: /images/manage/trigger/notification-localization.png
       :align: center
       :scale: 90%
       :alt: Screenshot showing localization section of trigger dialog

Best practice is to create single separated localized triggers for each
language/timezone and execute them based on user or organization attributes.

The format and timezone of date and timestamp replacement variables is customizable by the use of the ``dt()`` method. Further on the ``t()`` method can be used to translated string replacement variables according to the selected locale language.

For usage of the ``t()`` and ``dt()`` method, please follow the instructions in the :ref:`variables section <variable_localization>`.
