Third-Party Applications
************************

Third party authentication is a great way to help your users to login to Zammad
more easily. If the account is yet unknown, Zammad will create a new user
automatically, without the user needed to interact (e.g. type in his name).
Another big advantage of this feature is that your user doesn't need to remember
another password.

.. toctree::
   :caption: Login Providers
   :maxdepth: 1

   third-party/facebook
   third-party/github
   third-party/gitlab
   third-party/google
   third-party/microsoft
   third-party/twitter
   third-party/saml

.. note:: 

   We're currently missing documentation for the following login providers:

      * LinkedIn
      * Weibo

.. tip::

   You can deactivate logging in via :ref:`security_password_login` if any
   of above mentioned authentication providers are enabled in your instance.

.. _automatic-account-linking:

Automatic account link on initial logon
---------------------------------------

In general there's two possible options for Zammad on how to deal with
already known users as they try to authenticate against a third-party
application. By default, Zammad will not automatically link "unknown"
authentication providers to existing accounts.

This means that the user has to manually link authentication providers to their
accounts (for more about this 
`consult the user documentation <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_).

Sometimes this doesn't come in handy as this also means you'll receive
error messages about "email address being in use already" for (yet) unknown
third-party authentication methods.

If you want to allow your users to always be able to log in, no matter what,
you may want to enable ``Automatic account link on initial logon``.

.. image:: /images/settings/security/automatic-account-link.png
