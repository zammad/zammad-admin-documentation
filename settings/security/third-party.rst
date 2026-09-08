Third-Party Applications
========================

Zammad supports authentication via third-party providers. Your users can log
in with an account they already have, for example their Google or Microsoft
account, and don't need to remember an extra password. If no matching account
exists yet, Zammad creates one automatically with the roles configured as
default at signup. Once at least one provider is enabled, you can deactivate
the :ref:`password login <security_password_login>` to not offer local
passwords at all.

You can find the configuration in Zammad's admin settings under
*Settings > Security > Third-party Applications*. The general settings are at
the top of the page, followed by the configuration sections of the providers.

Settings
--------

The following options apply to all authentication providers.

.. _automatic-account-linking:

Automatic Account Link on Initial Logon
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Zammad matches third-party logins to existing accounts by email address. By
default, this linking on first logon is disabled: users have to link
authentication providers to their account manually, and may see errors that
their email address is already used for another user. If you want your users
to be able to log in with their existing accounts, enable **Automatic account
link on initial logon** by setting it to ``yes``.

.. _automatic-account-linking-notification:

Automatic Account Linking Notification
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Enable this setting to notify users when a new third-party application has
been linked to their account. The notification is sent once per application
and mentions the provider, for example ``Microsoft``. By default the setting
is inactive (set to ``no``). The notification is only sent if the account in
question already exists; it is skipped when the login itself creates the
account. It therefore only applies to:

- manual account linking in the third-party page of the user's profile
- logging into an existing local account via
  **automatic account link on initial logon**

No User Creation on Logon
^^^^^^^^^^^^^^^^^^^^^^^^^

By default, Zammad creates a new user account when a user logs in via a
third-party application for the first time and no matching account exists.
To prevent this, set **No user creation on logon** to ``yes``. Zammad then
refuses such logins with the message *The user account does not exist.
Please contact your administrator.* To allow logins only for existing
accounts, enable this setting together with **Automatic account link on
initial logon**. Without it, Zammad refuses logins even if the email address
matches an existing account.

Login Providers
---------------

Check your provider's documentation first. The configuration examples we
provide for some providers are partially outdated.

.. toctree::
   :maxdepth: 1

   third-party/facebook
   third-party/github
   third-party/gitlab
   third-party/google
   third-party/microsoft
   third-party/openid-connect
   third-party/saml
   third-party/sso
   third-party/twitter

Zammad also supports the following providers. They are currently
undocumented:

- LinkedIn
- Weibo
