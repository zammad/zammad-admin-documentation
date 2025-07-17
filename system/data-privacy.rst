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

.. figure:: /images/system/data-privacy/deletion-task-dialog.png
   :alt: Screenshot shows the dialog for creating a deletion task.
   :align: center
   :scale: 80%

Have a look at the next sections about how to create a deletion task.

User Management
^^^^^^^^^^^^^^^

To delete a user and its tickets from the user management, simply locate the
user in question (e.g. by searching) and choose **Delete** after clicking the
action menu via ︙ button:

.. figure:: /images/system/data-privacy/user-management-action-menu.png
   :alt: Screenshot shows a user from user management and the action menu with highlighted sections.

User Detail Screen
^^^^^^^^^^^^^^^^^^

To delete a user and its tickets from the user detail screen, choose **Delete**
from the action menu in the top right corner:

SCREENSHOT

Data Privacy Task
^^^^^^^^^^^^^^^^^

You can find the data privacy section in Zammad's settings under *System >
Data Privacy*. To create a deletion task, use the **New Deletion Task** button
in the top right corner. The difference to the two mentioned options is
that you first have to search the user in the dialog. Everything else is the
same.

Automatic Deletion via Scheduler
--------------------------------

In case you want to automatically clean up old tickets or tickets from specific
customers or organizations, you can do this by creating a
:doc:`scheduler </manage/scheduler>` task.


Step 2: Monitor Deletion Job Status
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It may take up to ten minutes for the system to process your request,
so for each user you delete, a “deletion task” is added to the queue.
You can keep an eye on the status of these tasks in two places:

**in the Activity Stream**
   SCREENSHOT

   For each deleted user, the Activity Stream will be updated twice—once when
   the task is created, and once when it's complete.

   .. hint:: These notifications are only visible to users with
      ``admin.data_privacy`` permissions.

**in the “System > Data Privacy” Admin Panel**
   SCREENSHOT

Frequently Asked Questions
--------------------------

What happens if I receive an email from a deleted customer?
   Zammad automatically creates a new user account
   whenever it receives a message from an unrecognized email address,
   including deleted users.
   Deleted users are never blocked from creating new tickets.

   In the unlikely event that you receive an email
   between the time that you click “Delete”
   and the system has processed your request,
   **that ticket will be automatically removed**.
   The ticket number for the lost ticket will be displayed
   in the Admin Panel under **System > Data Privacy >
   Completed Tasks > Delete User > Deleted Tickets**.

What about user information stored in internal notes or other messages?
   The deletion process removes **user accounts and associated tickets only**.

   If there are references to a user's name or information
   stored elsewhere in the system,
   that information **will not be removed**
   because there is no way to safely determine
   if it actually describes the user in question.

I deleted an user and can still see a message they sent!
   Tickets can only belong to a single customer,
   but may contain messages (“articles”) from many people.
   If you deleted a user but you're still seeing articles they sent,
   don't worry—those articles are for a ticket that belongs to someone else,
   and no longer contain any reference to the sender's identity.

I removed a customer, now my reporting is off!
   When removing users and their tickets, all references are removed.
   This also affects e.g. Reporting - these information are lost.

How long does Zammad store created tasks?
   Please see the on-premise data section of the
   :docs:`data privacy </appendix/privacy.html>` chapter.

What about re-assigned tickets? I want to delete them, too.
   Only tickets assigned to the matching customer at the time of the execution
   of the data privacy deletion task will be deleted. The deletion will not
   consider historical assignments.

Why are there so many deletion task entries, I didn't create them!
   The deletion tasks can come from the :doc:`/manage/scheduler` as well.
   Namely the action *"Add a data privacy deletion task"* is causing the
   entries.
