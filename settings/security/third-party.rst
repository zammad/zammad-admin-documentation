Third-Party Applications
========================

Third party authentication is a great way to help your users to login to Zammad
more easily. If the account is yet unknown, Zammad will create a new user
automatically, without the user needed to interact (e.g. type in his name).
Another big advantage of this feature is that your user doesn't need to remember
another password.

You can deactivate logging in via :ref:`security_password_login` if any
of the mentioned authentication providers are enabled in your instance.

You can find the settings in Zammad's admin panel under *Settings > Security >
Third-party Applications*.

.. toctree::
   :caption: Login Providers
   :maxdepth: 1

   third-party/facebook
   third-party/github
   third-party/gitlab
   third-party/google
   third-party/microsoft
   third-party/openid-connect
   third-party/saml
   third-party/twitter

.. note::

   We're currently missing documentation for the following login providers:

      * LinkedIn
      * Weibo

.. _automatic-account-linking:

Automatic Account Link on Initial Logon
---------------------------------------

In general there's two possible options for Zammad on how to deal with
already known users as they try to authenticate against a third-party
application. By default, Zammad will not automatically link "unknown"
authentication providers to existing accounts.

This means that the user has to manually link authentication providers to their
accounts (for more about this
:user-docs:`consult the user documentation </extras/profile-and-settings.html>`).

Sometimes this doesn't come in handy as this also means you'll receive
error messages about "email address being in use already" for (yet) unknown
third-party authentication methods.

If you want to allow your users to always be able to log in, no matter what,
you may want to enable **Automatic account link on initial logon** by setting
it to ``yes``.

.. _automatic-account-linking-notification:

Automatic Account Linking Notification
--------------------------------------

To improve security and your users awareness, you can enable Zammad to
notify your users when a new third-party application has been linked to their
account by setting it to ``yes``.

This notification is sent out once per third-party application.
Zammad does also mention the method used, e.g.: ``Microsoft``.

By default this setting is not active (set to ``no``).

.. note::

   This notification is only sent if the account in question already exists.
   If the login via the third-party also creates the missing account,
   the notification will be skipped.

   This means it only affects:

      * manual account linking within the third-party page of the users profile
      * logging into an existing local account by utilizing the
        **automatic account link on initial logon** functionality

No User Creation on Logon
-------------------------

By default, Zammad will create a new user account if the user logs in via a
third-party application and the account doesn't exist yet.

If you want to prevent Zammad from creating new accounts on logon, you can
disable this feature by setting **No user creation on logon** to ``yes``.
