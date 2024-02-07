Managing users via the admin panel
==================================

The “Users” panel provides tools to manually manage user accounts. See
:ref:`user-details-reference` for help with the New/Edit User dialog.

👥 Creating and editing users
   .. figure:: /images/manage/users/new-user-dialog.gif
      :alt: Screencast showing a user being created.
      :align: center

      Click the **New User** button to open the New User dialog,
      or click on an existing user to edit.

🗑️ Deleting users
   .. figure:: /images/manage/users/delete-user-via-user-management.gif
      :alt: Screencast showing a user being selected for deletion.
      :align: center

      Use the ⋮ **Actions** menu to open the **Delete User** dialog.

   .. warning:: 💥 **Deleting a customer destroys all their associated tickets!**

      To learn more, see :doc:`/system/data-privacy`.

🔎 Filtering the user list
   .. figure:: /images/manage/users/user-list-restrict-by-role.gif
      :alt: Screencast showing the user list being filtered by available user roles.
      :align: center

      Use the 🔎 **Search for users** bar and the **Roles** buttons to filter the list.
      You may search by name, email, or any other user attribute.

   .. note:: 🐞 **Known bug**

      The search list displays up to 50 users, from newest to oldest.
      That means that if there are more than 50 results,
      the user you're searching for might not be shown.

      This is a `known bug <https://github.com/zammad/zammad/issues/2214>`_
      with a fix underway.

   .. _locked-user-accounts:

🔒 Unlock locked user accounts
   .. figure:: /images/manage/users/unlock-account.gif
      :alt: Screencast showing how to unlock user accounts
      :align: center

      Use the ⋮ **Actions** menu to unlock accounts after too many
      failed logins. Locked accounts are indicated with a 🔒 lock icon
      on the left side.

   .. _view-from-users-perspective:

🏴‍☠️ Taking over a user's session
   .. figure:: /images/manage/users/takeover-user-session.gif
      :alt: Screencast showing an admin switching to the users perspective
      :align: center

      Use the ⋮ **Actions** menu to 👁️ **View from user's perspective**.

   The **View from user's perspective** button
   allows you to “hijack” another user's session
   and confirm firsthand what they can and can't do (or see)
   when they're logged in.

   This is especially useful when you need to verify
   that you've set up custom permissions correctly for non-admin users.

   When finished, use the **Back to my view ✕** button at the top of the page.
   If you try to exit by logging out,
   the “hijacked” user session will be restored when you log back in.

   .. danger:: **⚠ With great power comes with great responsibility.**

      This feature is not a simulation;
      entering this mode will boot the user from their session,
      and any actions you take
      (responding to tickets, changing passwords,
      :doc:`logging hours worked </manage/time-accounting>`)
      will actually be performed from the user's account.

      (On the other hand, if the user logs back in, you'll be booted, too.)

🔑 Manage Two-Factor Authentication
   .. figure:: /images/manage/users/remove-two-factor-method.gif
      :alt: Screencast showing removal of user's two-factor method.
      :align: center

      Use the ⋮ **Actions** menu to remove a user's configured two-factor
      method.

   It's possible to remove a single or all of the user's configured methods, if
   they lose access. They can then set it up again by themselves via
   "Avatar -> Profile -> Password & Authentication".
