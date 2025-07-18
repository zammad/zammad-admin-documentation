Data Privacy
============

You can delete users and their tickets by creating a deletion task.
This can be required for compliance with GDPR and other data privacy laws. This
page describes the places where you can do it, how to do it and includes
additional useful information.

Basic Information
-----------------

- The permission ``admin.data_privacy`` is required to initiate a deletion task.
- If you want to delete an organization, the deletion task of the last remaining
  user of this organization asks you if you want to delete the user's
  organization as well.
- It is not possible to only delete a user and keep its tickets.
- You can't delete your own account.
- You can't delete the system's last remaining administrator account.
- You can create :docs:`data privacy deletion task via API </api/user>`.
- Only customer tickets of a user are deleted. If the user is also agent, only
  the owner gets removed from the affected tickets.
- All deletions are final! Double check your commands.

Manual Deletion via GUI
-----------------------

You can initiate a data privacy deletion task from different places in Zammad:

- User management
- User detail page
- Data privacy management

Independent of where you initiate the deletion task, the dialog always looks
the same. If the user is the last user of an organization, the dialog asks if
you want to delete the organization as well.

The deletion dialog consists of the following elements:

- User: either the user is pre-selected or you can search for a user by typing
  its name.
- Delete organization: optional; only available if user is last user of the
  organization.
- Preview customer tickets: shows a preview of the affected ticket. Be aware
  that this is just a preview and it may change, depending on the execution
  time.
- Confirmation: this is a safety feature where you have to enter ``DELETE``
  manually to make sure you are not deleting data by accident.

.. figure:: /images/system/data-privacy/deletion-task-dialog.png
   :alt: Screenshot shows the dialog for creating a deletion task.
   :align: center
   :width: 60%

Read on about how to create a deletion task in the different places.

User Management
^^^^^^^^^^^^^^^

To delete a user and its tickets from the user management, simply locate the
user in question (e.g. by searching) and choose **Delete** from the action
menu via ︙ button in the user table:

.. figure:: /images/system/data-privacy/user-management-action-menu.png
   :alt: Screenshot shows a user from user management and the action menu with highlighted sections.
   :align: center
   :width: 80%

User Detail Screen
^^^^^^^^^^^^^^^^^^

To delete a user and its tickets from the user detail screen, choose **Delete**
from the action menu in the top right corner:

.. figure:: /images/system/data-privacy/user-detail-action-menu.png
   :alt: Screenshot shows an user detail dialog and the action menu with highlighted sections.
   :align: center
   :width: 60%

Data Privacy Task
^^^^^^^^^^^^^^^^^

You can find the data privacy section in Zammad's settings under *System >
Data Privacy*. To create a deletion task, use the **New Deletion Task** button
in the top right corner. The difference to the two mentioned options is
that you first have to search the user in the dialog. Everything else is the
same.

.. figure:: /images/system/data-privacy/data-privacy-deletion-task.png
   :alt: Screenshot shows the data privacy section in Zammad's settings with highlighted sections.
   :align: center
   :width: 60%

In this section, you can also see logs of scheduled and finished deletion tasks.
Read on in the next section to learn more.

Monitor Deletion Jobs
---------------------

For each user you delete, a deletion task is added to the deletion queue.
It may take up to ten minutes for the system to process your request. Depending
on the amount of tickets of the user, the deletion itself can also take some
time. You can see status messages of these tasks in two places:

- Data privacy management (Zammad's admin settings)
- Activity stream (by opening the dashboard; only visible with
  ``admin.data_privacy`` permission)

For each deleted user, you can see two entries: one when the task is created and
one when the task has finished.

Activity stream in dashboard
   .. figure:: /images/system/data-privacy/deletion-task-activity-stream.png
      :alt: Screenshot shows the activity stream from Zammad's dashboard with 2 deletion task entries
      :align: center

Data privacy management in admin settings
   .. figure:: /images/system/data-privacy/data-privacy-tasks.png
      :alt: Screenshot shows the data privacy section in Zammad's settings with a finished and a running task
      :align: center
      :width: 80%

.. _automatic-deletion-scheduler:

Automatic Deletion via Scheduler
--------------------------------

In case you want to automatically clean up old customers with their tickets or
specific customers or organizations, you can do this by creating a
:doc:`scheduler </manage/scheduler>` task. Such a scheduler task checks which
users are affected based on conditions and runs at pre-defined times and days.

The relevant object is **User** and the action to execute is **Action** > **Add
a data privacy deletion task**. You can create a condition to narrow down the
users you exactly want to delete. A basic example of a scheduler could look like
this:

.. figure:: /images/system/data-privacy/scheduler-deletion-task.png
   :alt: Screenshot shows important scheduler configuration for a deletion task
   :align: center
   :width: 80%

You can delete only tickets if you choose **Ticket** as object in the scheduler
task. This gives you an additional action named **Delete immediately** which
does exactly that. Customers of these tickets aren't deleted.

Frequently Asked Questions
--------------------------

What happens if I receive an email from a deleted customer?
   Zammad automatically creates a new user account whenever it receives a
   message from an unrecognized email address, including deleted users.
   Deleted users are never blocked from creating new tickets.

   In case you receive an email between the time that you click delete and
   the system has processed your request, that ticket will be automatically
   **deleted**. The ticket number of the lost ticket is displayed in the data
   privacy management in Zammad's admin settings in the deletion task entry
   under  **Deleted Tickets**.

What about user information stored in internal notes or other messages?
   The deletion process removes user accounts and associated tickets **only**.
   If there are references to a user's name or information stored somewhere else
   in the system, this information **will not be removed** because there is no
   way to safely determine which information is relevant.

I deleted a user and can still see a message they sent!
   Tickets can only belong to a single customer, but may contain messages from
   many people. If you deleted a user but you're still seeing articles they
   sent, then it is an article in a ticket from another customer. The user
   information of the deleted user is removed but the articles in question are
   still available.

I removed a customer, now my reporting is off!
   When removing users and their tickets, all references are removed. This also
   affects reporting - these information are lost.

How long does Zammad store created tasks?
   Please see the on-premise data section of the
   :docs:`data privacy </appendix/privacy.html>` chapter.

What about re-assigned tickets? I want to delete them, too.
   Only tickets which are currently assigned to the matching customer at the
   time of the execution of the data privacy deletion task will be deleted.
   The deletion will not consider historical assignments.

Why are there so many deletion task entries, I didn't create them!
   The deletion tasks can come from :doc:`scheduler</manage/scheduler>` tasks
   as well. See :ref:`automatic-deletion-scheduler` above.
