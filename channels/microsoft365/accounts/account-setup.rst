Account Setup
=============

After you’ve :doc:`registered Zammad as an OAuth app <register-app>`
in your Azure Portal, you can begin connecting Microsoft accounts to Zammad.

☠️ **But first, a word of warning!** The import process does things you might not expect:

.. danger:: 🚯 **Zammad will delete all emails in your inbox
   during the import process.**

   Use the *Keep Messages on Server* setting to
   :ref:`disable this behavior <microsoft365-keep-messages-on-server>`.

.. warning:: 📮 **Zammad will send an auto-reply message
   to every email it imports.** (Including the old ones!)

   Make sure to :doc:`disable this behavior </manage/trigger>`
   prior adding an email account,
   and to turn it back on once all your messages have been imported.

🚛 Migrate an Existing Email Channel
------------------------------------

If you’ve already added your Microsoft365 account as a regular email channel,
you’ll have to convert it to a Microsoft365 channel eventually:
Microsoft is planning to end support for simple password authentication
in third-party email clients (like Zammad).
**But there’s no rush just yet**.

Upcoming versions of Zammad will feature an automated migration wizard
to help you make the switch, and it’ll be available
well before Microsoft officially pulls the plug on password auth.

.. hint:: If you’d prefer not to wait, you can do it manually today—just
   remember to **delete the email channel for your Microsoft account**
   (and all its associated aliases) before re-adding it here.

   .. figure:: /images/channels/microsoft365/email-addresses-without-channel.png
      :alt: List of orphaned email addresses
      :scale: 60%
      :align: center

      Make sure you don’t have any of these left over before creating your new Microsoft365 channel.

Add a New Account
-----------------

.. figure:: /images/channels/microsoft365/accounts/account-setup/add-microsoft365-account-to-zammad.gif
   :alt: Click on Add Account to add your Microsoft account to Zammad
   :scale: 50%
   :align: center

Click **Add Account** to connect your Microsoft365 / Outlook accounts to Zammad.
You will be redirected to a Microsoft sign-in and confirmation page.

Aliases are not imported automatically, see :doc:`secondary-addresses` to add further aliases.

Channel
^^^^^^^

.. figure:: /images/channels/microsoft365/accounts/account-setup/microsoft365-account-settings.png
   :alt: Click on Add Account to add your Microsoft365 account to Zammad
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

Troubleshooting
---------------

I successfully added my account, but Zammad isn’t fetching new email
   If you specified a :ref:`custom folder/label to fetch from <microsoft365-folder>`,
   are you sure incoming mail is arriving in that folder?
