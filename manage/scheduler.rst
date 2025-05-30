Scheduler
=========

The scheduler performs time-based automated actions. You can set up your own
schedulers, configure at which points in time they should run, set up conditions
to determine which objects they should affect, and then configure the actions
that you want to execute for these objects.

.. hint::

   Schedulers can be used to send periodic reminder emails.
   Use :doc:`/misc/variables` to build highly-customized email templates.

   Schedulers only perform ``2000`` objects per run. This is a security
   function in case you accidentally misconfigured the scheduler.

Add a New Scheduler
-------------------

Create a new scheduler job by clicking on the "New scheduler" button in the top
right corner. Then Zammad presents a dialog where you can create your own one.

Example:

.. figure:: /images/manage/scheduler/scheduler-change-owner-in-case-of-ticket-escalation_with_locale.png
   :alt: Screenshot showing dialog of creating a new scheduler job
   :scale: 80%
   :align: center

Name
   Choose a name for the scheduler.

When should the job run?
   Choose the points in time when the scheduler should run. It depends on the
   configured :doc:`timezone in Zammad </settings/branding>`.

Object
   Choose in which object context the scheduler should be executed. Possible
   objects are: **Organization**, **Ticket** and **User**.

Conditions for affected objects
   Determine the object attributes to select the objects on which the actions
   will be applied.

   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

Preview
   This list previews some objects that your conditions are matching and shows
   a total of how many objects are being matched. Use this to double-check the
   entered conditions.

   Please be aware that the preview and displayed number is just based on
   the currently selected condition. It doesn't necessarily represent the
   objects for execution at the defined time.

Execute changes on objects
   Determine the changes to be made to the object. The possible changes depend
   on the selected object context. Be aware that a related object context
   may not be available (e.g. to perform ticket actions from a user context
   based scheduler).

   .. warning::

      🔥 Schedulers with *Action: Delete immediately* and *Action: Add a data
      privacy deletion task* are dangerous and should be used with care! If
      executed, the objects are deleted and no rollback is possible.

      **Delete immediately** will delete the ticket at the runtime of the job
      *without any hint* in the UI.

      **Add a data privacy deletion task** will create a data privacy deletion
      task for the object at the runtime of the job. That means it is visible
      in Zammad's :doc:`data privacy panel </system/data-privacy>`.

Disable notifications
   By default, actions triggered by schedulers won't send notifications.
   You can override this here by setting this to *no*.

Locale
   This can be activated with the switch labeled "Localization of execution
   changes".

   Set a desired language, in which the output of variables is
   translated into by using the ``t`` function.
   For more information, please have a look at
   the explanation in the :ref:`variables section <variable_localization>`.

Timezone
   This can be activated with the switch labeled "Localization of execution
   changes".

   Similar as for the "Locale" setting, you can define a time zone, which is
   applied to the output of time stamp variables.
   For more information, please have a look at
   the explanation in the :ref:`variables section <variable_localization>`.

Note
   You can use the note field to describe the purpose of the scheduler.
   This is only visible to other admins when they are editing the scheduler.
   It is *not* a way to add notes to objects.

Active
   With this setting you can enable/disable the scheduler.

The scheduler shown in the screenshot would have the following effects:

   Every workday (Monday to Friday) at 9:00 a.m. (*Europe / Berlin UTC+1*),
   all tickets which:

      - are not closed or merged, and
      - are assigned to the Sales group, and
      - whose escalation was 30 minutes ago

   will be:

      - assigned to Emma, and
      - have their priority changed to 3 high.

   As a supervisor in the Sales group, this enables Emma to intercept and
   process escalated tickets.

   Emma will not receive notifications when the scheduler assigns her these
   tickets.
