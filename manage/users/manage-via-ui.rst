Manage users within Zammad-UI
*****************************

👥 Create and edit users
=========================

Create User
   Creating and updating users is simpel within Zammad.
   You simply click on ``New User`` on the upper right and fill in the fields you require.

   As soon as you're ready to go, submit your changes.

   .. warning:: If you don't provide an email address, Zammad will automatically create a random user
      name for the user you're creating. Usually the login name will be the same as the email address.

      In this case, if you add the email address later, the login name will not change.
      You can update the user name `via API <https://docs.zammad.org/en/latest/api/intro.html>`_,
      :doc:`CSV import <manage-via-import>` or by using the
      `rails console <https://docs.zammad.org/en/latest/admin/console.html>`_ if needed.

Update User
   Click on the user you want to edit within the user list.
   Zammad will provide a new dialogue with all available fields to adjust.

   As soon as you're ready, submit your changes.

.. figure:: /images/manage/users/adding-and-editing-a-user.gif
   :alt: Screencast showing a user being created and updated.
   :align: center

Specific user attributes worth mentioning
+++++++++++++++++++++++++++++++++++++++++

:doc:`🏢 Organizations </manage/organizations>`
   A organization allows you to provide several organization members.
   This can be used for special conditions based on the organization.
   You'll also get an overview of all organization tickets which is a big benefit
   if working with larger companies.

      .. hint:: In order to provide a organization to a user, you'll have to the it first!

      .. note:: A user can be member of **one** organization at a time.

🔑 Passwords
   Passwords can be changed or updated by everyone with access to the user management.
   A normal agent by default does not have this right.

👑 Special users? (VIP)
   The VIP state of a user is the perfect way to visualize that the user in question is "special".
   You can't just filter for those users with :doc:`/manage/trigger`, :doc:`/manage/scheduler`, :doc:`/manage/slas`
   and :doc:`/manage/overviews`. You'll also see a crown on top of the users avatar everywere Zammad displays these avatars!

   .. figure:: /images/manage/users/vip-user-in-a-ticket.png
      :alt: Picture showing a ticket with a VIP customer.
      :align: center
      :width: 90%

📑 Note
   This is a internal note your customer can't see. These notes will be displayed to administrators and agents only.
   Very usefull in case you want to note something about the user which should be seen globally.

.. hint:: **😵 not enough fields to fill?**

   You can always add more attributes if needed.
   See :doc:`/system/objects` for more information!

🔬Find your users
=================

.. note:: **Limitation ahead**

   Zammad will provide the last created users. You'll see up to 50 users.
   Your users are not gone! This will be addressed by
   `Issue 2214 <https://github.com/zammad/zammad/issues/2214>`_ in the future.

by a specific role
   Above the user list Zammad displays all your active roles as a tab list.
   By selecting one or more tabs, Zammad will filter the user list to only show users that are
   members of that role.

   This is a great way to shrink the list and find users faster.

   .. figure:: /images/manage/users/user-list-restrict-by-role.gif
      :alt: Screencast showing the user list being filtered by available user roles.
      :align: center

by searching
   Already know who you're looking for? You can use the search function above the user list to find
   several or a single user. You can search for any information that is available within a users attribute.

   .. figure:: /images/manage/users/user-list-restrict-by-user-searching.gif
      :alt: Screencast showing the user list being restricted by searching for user attributes
      :align: center

🏴‍☠️ Take over a users session
===============================

If needed users with ``admin.users`` permission can take over a users session.
This can come in handy to cross check permissions being available to the user.

   .. warning:: **⚠ This permission comes with great responsibility**

      Zammad doesn't just allow you to take over the session, but also act on behalf of that user!

   .. hint:: When taking over a session, your agent can't work. If the agent continues the session, you'll be kicked out.

When you finished the takeover, **do not logout** but use the the ``Back to my view`` link on the upper right.
If you logout in this situation, you'll still be viewing the users session after logging back in.

.. figure:: /images/manage/users/takeover-user-session.gif
   :alt: Screencast showing an admin switching to the users perspective
   :align: center

🗑️ Remove existing users
========================

If needed you can remove existing users.
The user list provides a shortcut to the :doc:`/system/data-privacy` function.

.. figure:: /images/manage/users/initiate-deletion-task-via-user-management.gif
   :alt: Screencast showing a user being selected for deletion.
   :align: center
