Account Setup
=============

After you’ve :doc:`registered Zammad as an OAuth app <register-app>`
in your Azure Portal, you can begin connecting Microsoft accounts to Zammad.

☠️ **But first, a word of warning!**
The import process does things you might not expect:

.. danger:: 🚯 **Zammad will delete all emails in your inbox
   during the import process.**

   Use the *Keep Messages on Server* setting to
   :ref:`disable this behavior <microsoft365-keep-messages-on-server>`.

.. warning:: 📮 **Zammad will send an auto-reply message
   to every email it imports.** (Including the old ones!)

   Make sure to :doc:`disable this behavior </manage/trigger>`
   prior adding an email account,
   and to turn it back on once all your messages have been imported.

.. tip:: 🤓 **Shared mailboxes are possible...**

   For this to function ensure to set a password for the account in question.
   You'll need these credentials to authenticate against later during adding
   the account.

🚛 Migrate an Existing Email Channel
------------------------------------

If you’ve already added your Microsoft 365 account as a regular email channel,
you’ll have to convert it to a Microsoft 365 channel eventually:
Microsoft is planning to end support for simple password authentication
in third-party email clients (like Zammad).

Please refer the :doc:`migrate-from-email-channel` guide.

Add a New Account
-----------------

.. figure:: /images/channels/microsoft365/accounts/account-setup/add-microsoft365-account-to-zammad.gif
   :alt: Click on Add Account to add your Microsoft account to Zammad
   :scale: 50%
   :align: center

Click **Add Account** to connect your Microsoft 365 / Outlook accounts to Zammad.
You will be redirected to a Microsoft sign-in and confirmation page.


.. note:: 🕵️ **Aliases are not imported automatically.**

   See :doc:`secondary-addresses` to add them yourself.

Channel
^^^^^^^

.. figure:: /images/channels/microsoft365/accounts/account-setup/microsoft365-account-settings.png
   :alt: Click on Add Account to add your Microsoft 365 account to Zammad
   :scale: 50%
   :align: center

.. _microsoft365-folder:

Folder
   Specify which folder (or *label*) to fetch from,
   or leave empty to fetch from ``INBOX``.

   If specifying a nested folder, be sure to use the full path;
   *e.g.,* ``Inquiries/Tech-Support``.

   .. _microsoft365-keep-messages-on-server:

Keep messages on server
   Specify what happens to your emails after Zammad imports them:

   * ``no`` Zammad deletes all imported messages

   * ``yes`` Zammad marks imported messages as read

     (With this option, Zammad will only import unread messages.
     This means Zammad may miss messages if the mailbox is externally modified.)

   .. note:: 🤔 **Why does Zammad delete messages by default?**

      If you never clean out your inbox,
      it’ll eventually reach its storage limit,
      and your mail server will start **rejecting incoming messages**.
      Most Zammad users never even look at their inbox once it’s set up,
      so they rely on Zammad to keep it clean for them.

      If you choose **yes** here, remember that it’s your responsibility
      to clean out your inbox from time to time
      to keep it below its storage limit.

After adding the account
   After successfully adding the Microsoft 365 mail account, you can adjust
   the default group Zammad is going to assign incoming new tickets to.

   .. figure:: /images/channels/microsoft365/accounts/account-setup/change-destination-group.png
      :alt: Location of "Destination Group" setting for existing accounts
      :scale: 60%
      :align: center

   Only **active** groups will be displayed.

   Changing this setting will not reassign existing tickets to the new group.

   .. include:: /channels/email/accounts/account-setup-group-hint.include.rst

Troubleshooting
---------------

I successfully added my account, but Zammad isn’t fetching new email
   If you specified a 
   :ref:`custom folder/label to fetch from <microsoft365-folder>`,
   are you sure incoming mail is arriving in that folder?

My mailbox was working fine but suddenly it fails with ``EXPUNGE FAILED``
   This is a Microsoft 365 specific issue which you have to solve with
   Microsoft. However, you can have a look at `Microsofts documentation`_
   which might allow you to solve the issue on your own.

   As soon as the issue has been fixed, the Zammad channel will recover
   automatically.

   .. _Microsofts documentation:
      https://docs.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-user-mailboxes/change-deleted-item-retention
