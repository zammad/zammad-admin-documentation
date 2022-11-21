Scheduler
*********

The scheduler performs time-based automated actions. You can set up your own
schedulers, configure at which points in time they should run, set up conditions
to determine which tickets they should affect, and then configure the actions
that you want to be executed on these tickets.

.. note::

   Schedulers with *Action: Delete* are currently the only way in the Zammad
   front end to permanently delete tickets. This limitation is intentional as
   Zammad is designed to be revision-proof. A possible use case for such a
   scheduler is to delete spam tickets some time after creation (e.g. 30 days).

.. warning::

   While it is possible to delegate scheduler permissions to normal agents with
   the ``admin/scheduler`` permission, it is inadvisable to do so. Malicious
   agents could use a scheduler to access tickets in restricted groups
   (by moving them to a non-restricted group) or to delete arbitrary tickets.

.. hint::

   Schedulers can be used to send periodic reminder emails.
   Use :doc:`/system/variables` to build highly-customized email templates.

Add a new scheduler
===================

.. figure:: /images/manage/scheduler/scheduler-change-owner-in-case-of-ticket-escalation.png

Name
   Choose a name for the scheduler.

When should the job run?
   Choose the points in time using :doc:`Zammad's timezone </settings/branding>`
   when the scheduler should run.

   .. note::

      The scheduler tasks are not saving any timezone information.
      Thus: Scheduler tasks created prior Zammad 5.1 don't require any change.

Conditions for affected objects
   Determine the ticket attributes (conditions) to limit on which tickets the
   actions configured in step 5 are to be performed.

Preview
   This list previews some tickets that your conditions are matching and shows 
   a total of how many tickets are being matched. Use this to double-check the
   entered conditions.

Execute changes on objects
   Determine the changes to be made to the ticket.

Disable notifications
   By default, actions triggered by schedulers won't send notifications.
   You can override this here by setting this to *no*.

Note
   You can use the note field to describe the purpose of the scheduler.
   This is only visible to other admins when they are editing the scheduler.
   It is *not* a way to add notes to tickets.

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
   tickets, and no note will be added to them.
