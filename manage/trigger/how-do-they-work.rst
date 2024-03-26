How Do Trigger Work
===================

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

The execution is triggered by some actor.
Either a user creating or updating the ticket. Or an external action,
e.g. an email coming in.

Action activator may evaluate **conditions** in two modes:

**Selective** execution
   checks if any property that is included in conditions
   was updated. If the action was other than update, it checks if conditions match.

   **Example:** A selective action trigger which is listening on the
   priority **1 low** will trigger if the ticket was changed to **1 low** or
   got an new article in that priority state.

**Always** execution
   checks if the current state of the ticket in question
   matches conditions.

   **Example:** An always action trigger which is listening on the priority
   **1 low** will trigger if the ticket was moved to another group while
   priority was set **1 low**.

Time Event
^^^^^^^^^^

The execution is triggered at a specific time when a certain event is
reached, e.g. ticket pending time.

This activator simply checks if **conditions** match.
This is the same behavior as action-based activator's "always" mode.

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
   :doc:`/system/variables`, which can be used to build
   highly-customized message templates.

A trigger can do the following things once its conditions have been met:

* Modify the ticket
   Examples: escalate its priority, close it, reassign it, rename it,
   add tags, etc.

   Date & time attributes (like **Pending till**) can be
   specified in *absolute* or *relative* terms.

   You can also combine static text with placeholders for text fields.
   Remember that the placeholders' values have to be known during trigger
   runtime. Learn more about :doc:`/system/variables`.

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

Localization of Trigger Based Notifications
-------------------------------------------

To translate the output of variables and to format date and time stamps for
notifications in triggers, use the ``t`` and ``dt`` methods.
The ``t`` method translates the output of variables according to the selected
"Locale" field below.
The ``dt`` method transforms a date and time stamp according to the selected
"Timezone".

.. figure:: /images/manage/trigger/notification-localization.png
   :align: center
   :scale: 90%
   :alt: Screenshot showing localization section of trigger dialog

Be aware that it is not possible to perform an automatic translation for
different languages in one trigger. That means if you want to create
notifications for different languages/regions, you have to create one trigger
for each language and execute them based on user or organization attributes.

For more information and examples, please have a look at the explanation in the
:ref:`variables section <variable_localization>`.
