User Preferences Permissions
============================

.. note::

   📁 **Permissions are namespaced**,
   which is sort of like having files inside of folders.

   The permissions listed on this page all belong to the
   ``user_preferences`` namespace.
   You can select them individually, or you can just select
   ``user_preferences`` to enable the whole bunch.

.. container:: cfloat-left

   .. figure:: /images/manage/roles/permissions-user-preferences.png
      :alt: User preferences permissions in the New Role dialog
      :align: center
      :width: 80%

      User preferences permissions are shown at the bottom of the
      New Role dialog...

.. container:: cfloat-right

   .. figure:: /images/manage/roles/users-profile-settings.png
      :alt: User profile page
      :align: center
      :width: 80%

      ...and give users access to the pages of their
      :user-docs:`User Profile </extras/profile-and-settings.html>`.

.. container:: cfloat-clear

   x

:``user_preferences.access_token``:
   Generate API tokens to control Zammad via the
   :docs:`REST API </api/intro.html>`

   .. note:: 💡 **Security Tip**

      Generated tokens will never have more permissions than the user that
      generated them.

:``user_preferences.avatar``:
   Override the default Gravatar with a custom avatar

:``user_preferences.calendar``:
   Configure the calendar feed

:``user_preferences.device``:
   Manage device login sessions

   .. note:: 💡 **Security Tip**

      Revoking this permission disables “Login detected from a new location”
      notification emails.

      To learn more, see :doc:`/manage/trigger/system-notifications`.

:``user_preferences.language``:
   Configure the UI locale/language

:``user_preferences.linked_accounts``:
   Manually link accounts after signing in with 
   :doc:`third-party authentication </settings/security/third-party>`

   .. note::

      If :ref:`automatic account linking <automatic-account-linking>` fails,
      this is the only way your users can utilize third-party logins.

:``user_preferences.notifications``:
   Configure ticket notification settings

   .. note::

      Agents only receive ticket notifications for
      :doc:`groups they have “full” access to </manage/groups/access-levels>`.

      Customers can't receive ticket notifications at all.

:``user_preferences.out_of_office``:
   Designate a substitute for out-of-office hours

   .. note:: 💡 **Security Tip**

      Designating a substitute does **not** grant that person the permissions /
      :doc:`group access levels </manage/groups/access-levels>` of the agent they're replacing.

:``user_preferences.overview_sorting``:
   Allow your users to define their own overview order.

   .. note::

      The order your user chooses here cannot be overwritten by admins.
      Renaming or resorting overviews has no effect on custom orders.

   .. hint::

      This is an optional permission for customers and thus disabled by default.

:``user_preferences.password``:
   Change account password

   .. warning:: 🔑 **Third-party authentication / LDAP users:**

      Be sure to **revoke this permission** for all your users.
      When using a third-party identity server (like LDAP),
      the whole point is to let *it* take care of authentication
      so that passwords never have to live in Zammad's database.
