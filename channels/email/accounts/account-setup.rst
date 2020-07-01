Account Setup
=============

Setting up a new email account? Here’s what all the settings do.

☠️ **But first, a word of warning!** The import process does things you might not expect:

.. danger:: 🚯 **Zammad will delete all emails in your inbox
   during the import process.**

   Use the *Experts* dialog to
   :ref:`disable this behavior <email-experts-keep-messages-on-server>`.

.. warning:: 📮 **Zammad will send an auto-reply message
   to every email it imports.** (Including the old ones!)

   Make sure to :doc:`disable this behavior </manage/trigger>`
   prior adding an email account,
   and to turn it back on once all your messages have been imported.

.. note:: **Gmail / G Suite users:**
   Google is in the process of upgrading its security policies.
   To stay up-to-date, do **not** add your account as an email channel—instead,
   create a :doc:`Google channel </channels/google/accounts/account-setup>`.

   **Office365 / Exchange users:** Shared mailboxes are not supported.

Basic
-----

In most cases, Zammad is smart enough
to figure out your email provider’s configuration
based on your email address alone.

.. figure:: /images/channels/email/accounts-new-success.gif
   :alt: Enter your email address and password, and Zammad will figure out the rest.
   :scale: 50%
   :align: center

Organization & Department Name
   The display name used for outgoing email.

   .. figure:: /images/channels/email/account-setup-org-dept-name.png
      :alt: Screenshot of customer inbox with email from "Chrispresso Sales"
      :scale: 40%
      :align: center

      A customer’s inbox with an auto-reply from **Chrispresso Sales**.

   If you add :doc:`multiple addresses <secondary-addresses>` to a single account,
   you can define a separate Organization & Department Name for each one.

   Email display names value can be
   :ref:`further customized in the Settings tab <email-settings-sender-format>`.

Email
   Your email address.

   If your account login/username is different from your email address,
   use the *Experts* dialog (see below).

   If your inbox receives mail for more than one email address,
   be sure to :doc:`add your alternate addresses <secondary-addresses>`
   after account setup.

Password
   Your account password.

   If your email provider requires you to enter
   a one-time passcode (sent via SMS) when logging in,
   you’ll have to :doc:`generate an app password <2fa-gmail>` to use with Zammad.

Destination Group
   The :doc:`group </manage/groups>` that incoming mail will be assigned to.

   Use :doc:`filters </channels/email/filters>`
   for more fine-grained sorting of incoming email.

.. _email-new-account-experts:

Experts
-------

If Zammad can’t figure out how to connect your account
(or if you just want to access advanced settings),
use the *Experts* dialog.

.. figure:: /images/channels/email/accounts-new-failure.gif
   :alt: When auto-detection fails, you will be presented with the "Experts" account setup dialog.
   :scale: 50%
   :align: center

Email Inbound
^^^^^^^^^^^^^

Type
   Choose from **IMAP** and **POP3**.

   In most cases, you want IMAP.
   (With POP3, you won’t be able to
   :ref:`keep messages on the server <email-experts-keep-messages-on-server>`
   or :ref:`specify which folder to fetch from <email-experts-folder>`.)

Host
   Your email server’s hostname or IP address (*e.g.,* ``imap.gmail.com``).

   Contact your email provider or system administrator if you don’t know.

Password
   Your account password.

   If your email provider requires you to enter
   a one-time passcode (sent via SMS) when logging in,
   you’ll have to :doc:`generate an app password <2fa-gmail>` to use with Zammad.

SSL / STARTTLS
   Enable encryption when fetching messages.

   Choose from **yes** and **no**;
   Zammad will detect which protocol to use.

Port
   Your email server’s port (usu. ``993`` for IMAP, or ``995`` for POP3).

   Contact your email provider or system administrator if you don’t know.

   .. _email-experts-folder:

Folder
   Specify which folder to fetch from, or leave empty to fetch from ``INBOX``.

   If specifying a nested folder, be sure to use the full path.
   (Some systems use different **path separators**;
   *e.g.,* ``Inquiries/Tech-Support`` vs. ``Inquiries.Tech-Support``.
   Contact your email provider or system administrator if you don’t know.)

   .. note:: 📥 **Additional Steps Required**

      In the last step of the account setup process,
      Zammad sends you an email from your own account,
      then waits for it to appear in the folder specified here.
      **Account verification will not complete until
      this test message has been received.**

      If this folder does not receive incoming messages automatically,
      you may have to manually check your inbox during the verification step
      and move Zammad’s test message there when it arrives.

   .. _email-experts-keep-messages-on-server:

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

Email Outbound
^^^^^^^^^^^^^^

Send mails via
   Choose from **SMTP** and **local MTA** (*e.g.,* Sendmail).

   Local MTA (mail transfer agent) configuration
   is only available on self-hosted installations.

Host
   Your email server’s hostname or IP address (*e.g.,* ``smtp.gmail.com``).

User
   Your account login/username.

   Leave blank to use the same value from incoming account setup.

Password
   Your account password.

   Leave blank to use the same value from incoming account setup.

Port
   Your email server’s port (usu. ``587`` or ``465``).

   Zammad will detect and enable SSL/STARTTLS support automatically.

Verification
------------

.. figure:: /images/channels/email/adding-email-account_verification-send-and-receive.gif
   :alt: Email account verification step
   :align: center

As a final step, Zammad sends a test email
from your own account, to your own account.
Once this test email is received, the new account setup process is complete! 🎉

Troubleshooting
^^^^^^^^^^^^^^^

* :ref:`Is a custom incoming mail folder to blame? <email-experts-folder>`
