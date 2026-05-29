Managing Users via Admin Settings
=================================

To manage users via UI under *Manage > Users*, you need to have the ``admin.user``
permission. See :ref:`user-details-reference` for help with the individual user
attributes.

Creating and editing users
   .. figure:: /images/manage/users/user-management.png
      :alt: Screenshot shows the user management overview.
      :align: center

   Click the ``New User`` button to open the **New User** dialog,
   or click on an existing user to edit.

Deleting users
   .. figure:: /images/manage/users/action-menu-delete-user.png
      :alt: Screenshot shows user deletion via action menu.
      :align: center

   Use the ⋮ menu in the **Action** column to open the **Delete User** dialog.

   .. warning:: **Deleting a customer destroys all their associated tickets!**

      To learn more, check out the :doc:`/system/data-privacy` section.

Filtering the user list
   .. figure:: /images/manage/users/search-and-roles.png
      :alt: Screenshot shows selected role and search term in user management.
      :align: center

   Use the **Search for users** bar and the **Roles** tabs to filter the list.
   You may search by name, email, or any other user attribute.

   .. _locked-user-accounts:

Unlock locked user accounts
   .. figure:: /images/manage/users/unlock-user.png
      :alt: Screenshot shows locked user indicator and context menu to unlock the account.
      :align: center

   Use the ⋮ menu in the **Action** column to unlock accounts after too many
   failed logins. Locked accounts are indicated with a lock icon
   on the left side.

   .. _view-from-users-perspective:

Taking over a user's session
   .. figure:: /images/manage/users/action-menu-view-from-user.png
      :alt: Screenshot shows menu with "View from user's perspective" option.
      :align: center

   Use the ⋮ menu in the **Action** column to **View from user's perspective**.

   This button allows you to "hijack" another user's session and confirm
   firsthand what they can and can't do (or see) when they're logged in.

   This is especially useful when you need to verify that you've set up custom
   permissions correctly for non-admin users.

   When finished, use the ``Back to my view ✕`` button at the top of the page.
   If you try to exit by logging out, the "hijacked" user session will be
   restored when you log back in.

   .. figure:: /images/manage/users/user-perspective.png
      :alt: Screenshot shows the view of another user's account.
      :align: center

   .. danger:: **With great power comes great responsibility.**

      This feature is not a simulation; entering this mode will boot the user
      from their session and any actions you take like responding to tickets,
      changing passwords or :doc:`logging hours worked </manage/time-accounting>`
      will actually be performed from the user's account. On the other hand, if
      the user logs back in, you'll be booted, too.

Manage Two-Factor Authentication
   .. figure:: /images/manage/users/manage-2fa-of-user.png
      :alt: Screenshot shows menu with highlighted "Manage Two-Factor Authentication" option.
      :align: center

   Use the ⋮ menu in the **Action** column to remove a user's configured
   two-factor method.

   .. figure:: /images/manage/users/dialog-2fa-deletion.png
      :alt: Screenshot shows dialog to delete a user's 2FA method.
      :align: center

   It's possible to remove a single or all of the user's configured methods, if
   they lose access. They can then set it up again by themselves via
   *Avatar > Profile > Password & Authentication*.
