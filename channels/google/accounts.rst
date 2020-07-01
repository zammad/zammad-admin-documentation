Accounts
********

.. toctree::
   :hidden:

   accounts/register-app
   accounts/account-setup
   accounts/secondary-addresses
   accounts/managing-accounts

:doc:`accounts/register-app`
   Use the **Connect Google App** dialog to register Zammad as an OAuth app on Google.

   (This step is **required**; read on to learn why.)

   .. figure:: /images/channels/google/accounts/register-app/05-add-oauth-credentials.gif
      :alt: Registering Zammad as a Google OAuth app
      :scale: 60%
      :align: center

:doc:`accounts/account-setup`
   Use the **Add Account** dialog to connect your account.

   .. figure:: /images/channels/google/accounts/account-setup/add-gmail-account-to-zammad.gif
      :alt: Adding your gmail account to Zammad
      :scale: 60%
      :align: center

:doc:`accounts/secondary-addresses`
   Send and receive email at **additional email addresses**,
   all through the same mailbox/account.

   .. figure:: /images/channels/google/add-gmail-alias.gif
      :alt: Adding new aliases to your gmail account in Zammad
      :scale: 60%
      :align: center

:doc:`accounts/managing-accounts`
   Edit the configuration of existing accounts in the **Accounts Panel**.

   .. figure:: /images/channels/google/panel.png
      :alt: Existing accounts can be edited from the Accounts panel.
      :scale: 60%
      :align: center

Email Notification
   This option is **not available on Google channels**.

   To configure the outgoing mail provider for system notifications,
   use a :doc:`regular email notification channel </channels/email/accounts>`.
   (Self-hosted installations only.)

   .. note:: 🤔 **Why?**

      Using a Gmail account for automated, outgoing messages is risky:
      users who exceed Google’s `email sending limits
      <https://support.google.com/a/answer/166852>`_
      can have their accounts suspended.
