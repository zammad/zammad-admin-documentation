Third-Party Applications
************************

Third party authentication is a great way to help your users to login to Zammad
easier. If the account is yet unknown, Zammad will create a new user
automatically, without the user needed to interact (e.g. type in his name).
Another big advantage of this feature is that your user doesn't need another
password to remember.

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

.. _automatic-account-linking:

Automatic account link on initial logon
---------------------------------------

In general there's two ways two possible ways to handle how Zammad deals with
users it already knows (from whatever source) when you try to authenticate
against a third-party application. By default, Zammad will not automatically
link "unknown" authentication providers to existing accounts.
This means that the user has to manually link authentication providers to their
accounts (for more about this 
`consult the user documentation <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_).

Sometimes, this doesn't come in handy, as this also means if you're trying to
authenticate against a (yet) unknown third party authentication, Zammad will
throw an error telling you, that the email address is already in use. If you
want to ensure that no matter if your user links his account or not, you might
want to enable "Automatic account link on initial logon"

.. image:: /images/settings/security/automatic-account-link.png
