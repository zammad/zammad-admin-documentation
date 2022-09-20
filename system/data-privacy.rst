Data Privacy
============

For compliance with GDPR and other data privacy laws,
you may wish to **permanently delete users from the system**,
along with **all of their associated tickets**.

.. figure:: /images/system/data-privacy/creating-a-new-deletion-task.png
   :alt: User deletion dialog in the Data Privacy panel
   :align: center

   The user deletion dialog lists some of the tickets
   that will be removed from the system along with the user.

.. note:: 🤔 **Huh? I don’t see the Data Privacy panel...**

   Access to this panel requires ``admin.data_privacy`` permissions
   (introduced in Zammad 3.5).

   On older systems that have not been updated yet,
   customers can also be `deleted via the Zammad console`_.

.. _deleted via the Zammad console:
   https://docs.zammad.org/en/latest/admin/console/dangerzone-for-experts.html#deleting-customers

Deleting Users
--------------

.. warning:: 💣 **All deletions are FINAL!**

   Once you click “Delete”, the action cannot be cancelled or undone.

   Any time you delete a user, all their tickets will be deleted, as well.
   It is not possible to delete a user and still keep their tickets.

.. note:: 🙅 **The following records cannot be deleted:**

  * your own account
  * the system’s last remaining administrator account

Step 1: Find a user / confirm deletion
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are three ways to access the user deletion dialog:

**from the user’s profile**

   .. figure:: /images/system/data-privacy/delete-user-via-profile.gif
      :alt: Accessing the user deletion dialog in a user profile
      :align: center

      Click **Action > Delete**.

**in the “Manage > Users” Admin Panel**

   .. figure:: /images/system/data-privacy/delete-user-via-user-panel.gif
      :alt: Accessing the user deletion dialog under “Users” in the Admin Panel
      :align: center

      Use the **⋮ Actions** menu for the target user.

**in the “System > Data Privacy” Admin Panel**

   .. figure:: /images/system/data-privacy/delete-user-via-data-privacy-panel.gif
      :alt: Accessing the user deletion dialog under “Data Privacy” in the Admin Panel
      :align: center

      Use the **New Deletion Task** button. Search for users by name or email address.

.. hint:: 👥 **You can delete organizations, too.**

   If the customer you are deleting is the last user in their organization,
   a **Delete Organization?** option will be displayed in the user deletion dialog:

   .. figure:: /images/system/data-privacy/delete-organization-option.png
      :alt: Deleting an organization via the user deletion dialog
      :align: center
      :width: 50%

   (If this option does not appear,
   make sure there are no pending deletion tasks
   for other customers from this organization.)

Step 2: Monitor deletion job status
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It may take up to ten minutes for the system to process your request,
so for each user you delete, a “deletion task” is added to the queue.
You can keep an eye on the status of these tasks in two places:

**in the Activity Stream**
   .. figure:: /images/system/data-privacy/activity-stream-with-deletion-tasks.png
      :alt: Activity Stream showing data privacy tasks
      :align: center
      :width: 90%

   For each deleted user, the Activity Stream will be updated twice—once when the task is created, and once when it’s complete.

   .. hint:: These notifications are only visible to users with ``admin.data_privacy`` permissions.

**in the “System > Data Privacy” Admin Panel**
   .. figure:: /images/system/data-privacy/data-privacy-task-list.png
      :alt: The task list within Data Privacy shows removals being in progress and completed.
      :align: center
      :width: 90%

Frequently Asked Questions
--------------------------

🤓 What happens if I receive an email from a deleted customer?
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

🤔 What about user information stored in internal notes or other messages?
   The deletion process removes **user accounts and associated tickets only**.

   If there are references to a user’s name or information
   stored elsewhere in the system,
   that information **will not be removed**
   because there is no way to safely determine
   if it actually describes the user in question.

😵 I deleted an user and can still see a message they sent!
   Tickets can only belong to a single customer,
   but may contain messages (“articles”) from many people.
   If you deleted a user but you’re still seeing articles they sent,
   don’t worry—those articles are for a ticket that belongs to someone else,
   and no longer contain any reference to the sender’s identity.

🚮 I removed a customer, now my reporting is off!
   When removing users and their tickets, all references are removed.
   This also affects e.g. Reporting - these information are lost.
