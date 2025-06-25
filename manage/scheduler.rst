Scheduler
=========

Zammad's scheduler performs time-based automated actions. The most important
difference to :doc:`trigger` is that no action is required for the execution.
You can set up your own scheduler jobs and configure:

- At which time they should run
- Which objects should be modified based on conditions
- What changes or actions should be executed for matching objects

As an example, scheduler jobs can be used to send periodic reminder emails. If
this is what you want to do, have a look at :doc:`/misc/variables` to build
highly-customized email templates.

.. hint::

   Scheduler jobs can process a maximum of ``2000`` objects per run. This is a
   security function in case you accidentally misconfigured the scheduler.

Quick Start
-----------

Manage Scheduler Jobs
^^^^^^^^^^^^^^^^^^^^^

You can find the scheduler configuration in the admin settings under *Manage >
Scheduler*. Create a new scheduler job by clicking the **New Scheduler** button
in the top right corner. This opens a dialog where you can define your scheduler
job. To edit an existing scheduler, simply click on the row and the dialog gets
opened again. The ︙ action menu holds the options to clone or delete the
scheduler job.

After creating at least one scheduler job, you can find a table in the main
area. There you can see additional information like how many objects were
processed at the last run and how many will be processed at the next run.

.. figure:: /images/manage/scheduler/scheduler-management.png
   :scale: 70%
   :align: center
   :alt: Screenshot shows Zammad's scheduler management

Scheduler Job Structure
^^^^^^^^^^^^^^^^^^^^^^^

Read on for details about the main parts of a scheduler job. A description of
all available fields follows in the :ref:`scheduler-job-details` section.

Execution Time
   Define time(s) and day(s), when the scheduler job is supposed to run. Simply
   click the day and time table entries to select and deselect items. You can
   see a textual preview of what you configured above the tables.

   .. figure:: /images/manage/scheduler/scheduler-date-time-section.png
      :scale: 70%
      :align: center
      :alt: Screenshot shows date and time selection in scheduler job configuration

Define Object Condition
   Define a condition to specify the affected objects you want to apply changes
   or perform an action. If you're not familiar with conditions in Zammad, you
   can find an explanation at the :doc:`/misc/object-conditions/index` page.
   The availability of attributes depends on the selected object context.

   .. figure:: /images/manage/scheduler/scheduler-object-condition-section.png
      :scale: 70%
      :align: center
      :alt: Screenshot shows object condition definition in scheduler job configuration

Define Action
   In this area, you define which changes or actions should get applied to the
   affected objects. Depending on the selected object context, the available
   options differ.

   .. figure:: /images/manage/scheduler/scheduler-action-section.png
      :scale: 70%
      :align: center
      :alt: Screenshot shows action selection in scheduler job configuration

.. _scheduler-job-details:

Scheduler Job Details
---------------------

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

