Accounts
********

.. toctree::
   :hidden:

   accounts/configure-app
   accounts/account-setup
   accounts/secondary-addresses
   accounts/managing-accounts

🚛 Migrate an Existing Email Channel
   If you’ve already added your Gmail account as a regular email channel,
   you’ll have to convert it to a Google channel eventually:
   Google is planning to end support for simple password authentication
   in third-party email clients (like Zammad).
   **But there’s no rush just yet**.

   Upcoming versions of Zammad will feature an automated migration wizard
   to help you make the switch, and it’ll be available
   well before Google officially pulls the plug on password auth.

   .. hint:: If you’d rather just do it manually today,
      just remember to **delete the email channel for your Gmail account**
      (and all its associated aliases) before re-adding it here.

:doc:`accounts/account-setup`
   Use the **Add Account** dialog to connect your account.

   .. figure:: /images/channels/google/add-gmail-account-to-zammad.gif
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
   use a :doc:`regular email channel </channels/email/accounts>`.
   (Self-hosted installations only.)

   .. note:: 🤔 **Why?**

      Using a Gmail account for automated, outgoing messages is risky:
      users who exceed Google’s `email sending limits
      <https://support.google.com/a/answer/166852>`_
      can have their accounts suspended.
