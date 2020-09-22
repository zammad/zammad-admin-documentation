Data Privacy
************

Zammad allows you to delete any user and its associated customer tickets. 
This is an easy and great addition to our `console way <https://docs.zammad.org/en/latest/admin/console/dangerzone-for-experts.html#deleting-customers>`_.

.. figure:: /images/system/data-privacy/creating-a-new-deletion-task.png
   :alt: Screenshot of Zammads Data Privacy function
   :align: center

.. note:: **🤔 Huh? I don’t see a Data Privacy option...**
   
   This functionality was introduced with Zammad 3.5. 
   Also, you'll need at least ``admin.data_privacy`` permissions.

Limitations
-----------

   * You can't delete your own account
   * You can't remove the last administrator of your Zammad installation
   * You can remove organizations together with the last organization member
   * If you do want to remove the last organization member with it's organization, 
     please ensure that all deletion tasks for other members have been **completed**
   * Adding a deletion task can't be canceled and will be run within 10 minutes
   * The ticket preview within the deletion dialogue holds up to 6 tickets and works 
     similar to the overview previews.
   * Text fields will not get updated. Only references to the affected user matter.

Deleting a user
---------------

**Method 1: via user management or user details**
   From a user’s profile: click Action > Delete. 
   In the Admin Panel: use the ⋮ menu under Manage > Users.
   
   .. figure:: /images/system/data-privacy/create-user-deletion-task-via-context-menus.gif
      :alt: Screencast showing how to initiate a deletion task via Zammads context menus.
      :align: center

**Method 2: via Data Privacy option directly**
   If you want to skip other menus, you can also create a deletion task directly within "Data Privacy". 
   The user can be found via it's name or email address.

   .. figure:: /images/system/data-privacy/create-user-deletion-task-via-data-privacy-directly.gif
      :alt: Screencast showing how to initiate a deletion task directly within Data Privacy.
      :align: center

Following up on deletion tasks
------------------------------

**via Activity Stream**
   Zammad will create two information within the Activity Stream:
      * Data privacy task for user X created
      * Data privacy task for user X updated

   These messages can only be seen by persons with access to Data Privacy.

   .. figure:: /images/system/data-privacy/activity-stream-with-deletion-tasks.png
      :alt: Activity Stream showing data privacy tasks
      :align: center
      :width: 90%  

**via Data Privacy task list**
   Within Data Privacy you can always see the last removed users and tickets. 

   .. figure:: /images/system/data-privacy/data-privacy-task-list.png
      :alt: The task list within Data Privacy shows removals being in progress and completed.
      :align: center
      :width: 90%  

Frequently asked questions
--------------------------

**🤓 What happens if my customer drops a mail while the deletion taks is pending?** 
   Zammad will remove all tickets of your customer. This means if your customer creates a new ticket 
   in between task creation and execution, the ticket will also be removed. 
   A user can only be removed if all references are removed. However: Zammad will update the "deleted Tickets" 
   list with the tickets.

**🧐 Can removed users still create tickets?**
   If the user you removed decides to create a new ticket (by e.g. mail), Zammad will automatically create 
   a new user account. The Data Privacy function does not block any users.

**😵 I removed a user but still can find an article!**
   Zammad takes in account tickets the user is customer of. 
   It doesn't remove articles from tickets the user wasn't customer of. 
   To clear out those references, the creator ID will be reset to ``System``.
