Account Setup
=============

After you’ve :doc:`registered Zammad as an OAuth app <register-app>`
in your Google Developer settings,
you can begin connecting Gmail accounts to Zammad.

☠️ **But first, a word of warning!** The import process does things you might not expect:

.. danger:: 🚯 **Zammad will delete all emails in your inbox
   during the import process.**

   Use the *Keep Messages on Server* setting to
   :ref:`disable this behavior <google-keep-messages-on-server>`.

.. warning:: 📮 **Zammad will send an auto-reply message
   to every email it imports.** (Including the old ones!)

   Make sure to :doc:`disable this behavior </manage/trigger>`
   prior adding an email account,
   and to turn it back on once all your messages have been imported.

🚛 Migrate an Existing Email Channel
------------------------------------

If you’ve already added your Gmail account as a regular email channel,
you’ll have to convert it to a Google channel eventually:
Google is planning to end support for simple password authentication
in third-party email clients (like Zammad).
**But there’s no rush just yet**.

Upcoming versions of Zammad will feature an automated migration wizard
to help you make the switch, and it’ll be available
well before Google officially pulls the plug on password auth.

.. hint:: If you’d prefer not to wait, you can do it manually today—just
   remember to **delete the email channel for your Gmail account**
   (and all its associated aliases) before re-adding it here.

   .. figure:: /images/channels/google/email-addresses-without-channel.png
      :alt: List of orphaned email addresses
      :scale: 60%
      :align: center

      Make sure you don’t have any of these left over before creating your new Google channel.

Add a New Account
-----------------

.. figure:: /images/channels/google/accounts/account-setup/add-gmail-account-to-zammad.gif
   :alt: Click on Add Account to add your Google account to Zammad
   :scale: 50%
   :align: center

Click **Add Account** to connect your Gmail / G Suite accounts to Zammad.
You will be redirected to a Google sign-in and confirmation page.

Any aliases registered in your Gmail settings will be imported automatically.

.. note::

   .. figure:: /images/channels/google/accounts/account-setup/unverified-app-warning.png
      :alt: Google warning for unverified OAuth apps
      :align: center
      :scale: 60%

   Google has a stringent verification process
   to protect users from third-party websites that use OAuth to access their data.
   Since you *are* the third-party website here,
   you can safely ignore this warning.

Channel
^^^^^^^

.. figure:: /images/channels/google/accounts/account-setup/gmail-account-settings.png
   :alt: Click on Add Account to add your Google account to Zammad
   :scale: 50%
   :align: center

.. _google-folder:

Folder
   Specify which folder (or *label*) to fetch from,
   or leave empty to fetch from ``INBOX``.

   If specifying a nested folder, be sure to use the full path;
   *e.g.,* ``Inquiries/Tech-Support``.

   .. _google-keep-messages-on-server:

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
   If you specified a :ref:`custom folder/label to fetch from <google-folder>`,
   are you sure incoming mail is arriving in that folder?
