Accounts
========

.. toctree::
   :hidden:

   accounts/register-app
   accounts/account-setup
   accounts/migrate-from-email-channel
   accounts/secondary-addresses
   accounts/managing-accounts

Use the links below to step through the process of adding an M365 IMAP channel
to Zammad.

:doc:`accounts/register-app`
   Use the **Connect Microsoft 365 App** dialog to register Zammad as an
   OAuth app on Microsoft.

   This step is **required** before adding an account to Zammad.

:doc:`accounts/account-setup`
   Use the **Add Account** dialog to connect your account.

   If you want to migrate an existing email channel, see next section.

:doc:`accounts/migrate-from-email-channel`
   Migrate your existing email channels from standard IMAP to the dedicated
   M365 IMAP channel in Zammad to quickly move your mailboxes. You can roll
   back if something goes wrong!

:doc:`accounts/secondary-addresses`
   Send and receive email at **additional email addresses**,
   all through the same mailbox/account.

:doc:`accounts/managing-accounts`
   Edit the configuration of existing accounts in the **Accounts Panel**.

.. note:: 🤔 **How do I use my Microsoft 365 account for outgoing system notifications?**

   On **subscription/cloud-hosted instances**, you can't.
   Notifications will always come from
   “Notification Master <noreply\@your.zammad.domain>”.

   On **self-hosted instances**, we still don't recommend it.
   Using a Microsoft account for automated, outgoing messages is risky:
   users who exceed Microsoft's
   `email sending limits <https://docs.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits#receiving-and-sending-limits>`_
   can have their accounts suspended.

   Set up a generic :doc:`email channel </channels/email/index>` instead,
   then use the :ref:`Email Notification <email-notification>` setting.
