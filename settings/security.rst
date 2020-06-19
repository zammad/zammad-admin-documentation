Security
********

Base
----

*New User Accounts*
   Enables users to create their own account via web interface.

*Lost Password*
   Activates lost password feature for users. If "no" is selected here, the password can only be changed via the admin interface.

.. hint:: Normally, especially when using LDAP, you might want to consider to disable both above options, because you'd normally do that via LDAP.


Password
--------

This section allows you to define password requirements for the local user accounts.

.. note:: Zammad does **not** allow you to change your LDAP password, instead, it will set a password in it's local database which might confuse your users.
   This will be addressed in the future by `#1169 <https://github.com/zammad/zammad/issues/1169>`_ and `#2389 <https://github.com/zammad/zammad/issues/2389>`_.


Maximum failed logins
^^^^^^^^^^^^^^^^^^^^^

You can choose a value between *4* and *20*. This defines how often a login to a user account may fail until Zammad will lock it.
Please note that via UI the only way to unlock a user account is to change the password (either as admin or via password reset function (if enabled)).
The default value is `10`.

.. note:: You can also unlock an account via `console <https://docs.zammad.org/en/latest/console/working-on-users.html>`_ or `API <https://docs.zammad.org/en/latest/api-user.html>`_.


2 lower and 2 upper characters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can add complexity into passwords by enforcing at least 2 upper and lower case characters. The default value is `no`.


Minimum length
^^^^^^^^^^^^^^

This defines the minimum password length required (from *4* to *20*). The default value is `6`.


Digit required
^^^^^^^^^^^^^^

This enforces your users to at least use one digit with his password.
The default value is `yes`.


Third-Party Applications
------------------------

Third party authentication is a great way to help your users to login to Zammad easier.
If the account is yet unknown, Zammad will create a new user automatically, without the user needed to interact (e.g. type in his name).
Another big advantage of this feature is that your user doesn't need another password to remember.

.. toctree::
   :caption: Login Providers
   :maxdepth: 1

   security/third-party/facebook
   security/third-party/github
   security/third-party/gitlab
   security/third-party/google
   security/third-party/microsoft
   security/third-party/twitter
   security/third-party/saml

.. note:: We're currently missing documentation for the following login providers:

   * LinkedIn
   * Generic OAuth2
   * Weibo

.. _automatic_account_linking:

Automatic account link on initial logon
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In general there's two ways two possible ways to handle how Zammad deals with users it already knows (from whatever source) when you try to authenticate
against a third-party application. By default, Zammad will not automatically link "unknown" authentication providers to existing accounts.
This means that the user has to manually link authentication providers to their accounts (for more about this `consult the user documentation <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_).

Sometimes, this doesn't come in handy, as this also means if you're trying to authenticate against a (yet) unknown third party authentication, Zammad will throw an error telling you, that the email address is already in use. If you want to ensure that no matter if your user links his account or not, you might want to enable "Automatic account link on initial logon"

.. image:: /images/settings/security/automatic-account-link.png
