User Preferences Permissions
============================

.. note:: 📁 **Permissions are namespaced**,
   which is sort of like having files inside of folders.

   The permissions listed on this page all belong to the ``user_preferences`` namespace.
   You can select them individually,
   or you can just select ``user_preferences`` to enable the whole bunch.

.. figure:: /images/manage/roles/permissions-user-preferences.png
   :alt: User preferences permissions in the New Role dialog
   :align: center
   :width: 80%

   User preferences permissions are shown at the bottom of the New Role dialog...

.. figure:: /images/manage/roles/users-profile-settings.png
   :alt: User profile page
   :align: center
   :width: 80%

   ...and give users access to the pages of their `User Profile <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_.

:``user_preferences.access_token``:    Generate API tokens to control Zammad via the `REST API <https://docs.zammad.org/en/latest/api/intro.html>`_

                                       .. note:: 💡 **Security Tip**

                                          Generated tokens will never have more permissions than the user that generated them.
:``user_preferences.avatar``:          Override the default Gravatar with a custom avatar
:``user_preferences.calendar``:        Configure the calendar feed
:``user_preferences.device``:          Manage device login sessions

                                       .. note:: 💡 **Security Tip**

                                          Revoking this permission disables “Login detected from a new location” notification emails.

                                          To learn more, see :doc:`/manage/trigger/system-notifications`.
:``user_preferences.language``:        Configure the UI locale/language
:``user_preferences.linked_accounts``: Manually link accounts after signing in with :ref:`third-party authentication <third-party-logins>`

                                       .. note:: If :ref:`automatic account linking <automatic-account-linking>` fails,
                                          this is the only way your users can utilize third-party logins.
:``user_preferences.notifications``:   Configure ticket notification settings

                                       .. note:: Agents only receive ticket notifications for
                                          :doc:`groups they have “full” access to </manage/groups/access-levels>`.

                                          Customers can’t receive ticket notifications at all.
:``user_preferences.out_of_office``:   Designate a substitute for out-of-office hours

                                       .. note:: 💡 **Security Tip**

                                          Designating a substitute does **not** grant that person
                                          the permissions / :doc:`group access levels </manage/groups/access-levels>`
                                          of the agent they’re replacing.
:``user_preferences.password``:        Change account password

                                       .. warning:: 🔑 **Third-party authentication / LDAP users:**

                                          Be sure to **revoke this permission** for all your users.
                                          Otherwise, users will have two passwords (local & LDAP).
