Accounts
********

.. toctree::
   :hidden:

   accounts/register-app
   accounts/account-setup
   accounts/secondary-addresses
   accounts/managing-accounts

:doc:`accounts/register-app`
   Use the **Connect Microsoft 365 App** dialog to register Zammad as an OAuth app on Microsoft.

   (This step is **required**; read on to learn why.)

   .. figure:: /images/channels/microsoft365/accounts/register-app/03-add-oauth-credentials.gif
      :alt: Registering Zammad as a Microsoft OAuth app
      :scale: 60%
      :align: center

:doc:`accounts/account-setup`
   Use the **Add Account** dialog to connect your account.

   .. figure:: /images/channels/microsoft365/accounts/account-setup/add-microsoft365-account-to-zammad.gif
      :alt: Adding your gmail account to Zammad
      :scale: 60%
      :align: center

:doc:`accounts/secondary-addresses`
   Send and receive email at **additional email addresses**,
   all through the same mailbox/account.

   .. figure:: /images/channels/microsoft365/add-microsoft365-alias.gif
      :alt: Adding new aliases to your Microsoft account in Zammad
      :scale: 60%
      :align: center

:doc:`accounts/managing-accounts`
   Edit the configuration of existing accounts in the **Accounts Panel**.

   .. figure:: /images/channels/microsoft365/panel.png
      :alt: Existing accounts can be edited from the Accounts panel.
      :scale: 60%
      :align: center

Email Notification
   This option is **not available on Microsoft365 channels**.

   To configure the outgoing mail provider for system notifications,
   use a :doc:`regular email notification channel </channels/email/accounts>`.
   (Self-hosted installations only.)

   .. note:: 🤔 **Why?**

      Using a Microsoft account for automated, outgoing messages is risky:
      users who exceed Microsoft’s `email sending limits
      <https://docs.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#receiving-and-sending-limits>`_
      can have their accounts suspended.
