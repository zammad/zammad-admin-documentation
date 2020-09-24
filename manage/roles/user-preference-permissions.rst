User preference permissions
---------------------------

You can set "user_preferences" as permission which will include all of the below settings.
These permissions are part of `Profile Settings <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_.

.. figure:: /images/manage/roles/users-profile-settings.png
   :alt: Screenshot showing the profile settings.
   :align: center
   :width: 90%

``user.access_token``
    Allow your users to create API-Tokens for e.g. Scripts. API-Tokens depend on the users overall permissions.

``user.avatar``
    Allow your users to set an avatar. This allows users to overwrite Gravatar originating avatars.

``user.calendar``
    Allow your users to configure their calendar feed settings.

``user.device``
    Provides access to the Sessions of your user and allows them to remove obsolete sessions if needed.

    .. hint:: **Your users are tired of "login from new location" based emails upon logging in?**

        Disabling this permission also disables login triggered notifications to users affected.
        More informations can be found on :doc:`/manage/trigger/system-notifications`.

``user.language``
    Allow your users to set their preferred language for Zammads UI.
    Upon first logon Zammad tries to auto detect the correct language right away.

``user.linked_accounts``
    This option is relevant for instances using :ref:`Third Party authentication <third_party_logins>`.
    If you haven't activated automatic account linking, this will be the only way for your users to
    link their existing third party accounts to their Zammad account.

``user.notifications``
    Allow your agents to decide which notifications they want to receive for their tickets.
    Notifications are only sent on tickets your agent has :doc:`full permissions of a group <group-permissions>`.

``user.out_of_office``
    If enabled your agents can define a replacement agent during their vacation.

    .. hint:: **🤓 Zammad will not provide more permissions for replacement agents.**

        Replacement agents do not gain more ticket permissions than they already have.
        This function only makes sense within the same department. Replacement users will see a new
        :doc:`overview </manage/overviews>` ``My replacement Tickets``.

``user.password``
    Allow your users to change their account password.

    .. hint:: **🔑 Third Party Authentications and LDAP**

        When using Third Party Authentications or LDAP, you'll want to deactivate this permission.
        Zammad would otherwise set or reset the password of the local user account within Zammad.
        This leads in an account potentially having two passwords.
