Basic Setup
===========

.. ### Notes
.. 1. OAuth > Create OAuth client > Client ID, Client Secret angezeigt

.. 2. After OAuth creation, go to Data Access and click "Add or remove scopes" button. Check if email / https://main.google.com/ enabled.

.. Enable API (APIs > Enabled APIs & Services > Make sure Gmail is enabled or enable it by clicking the **+ Enable APIs and services** button.)

.. Credentials
.. ###

To set up a new Gmail or G Suite channel in Zammad, you first have
to create an **OAuth client** in Google's Cloud console. Then you can connect
Zammad with your Google account and add as many Gmail accounts to Zammad as
you want, using only active Gmail browser sessions (no usernames or passwords
required).

If you already set up Google email channels via IMAP in Zammad, you can easily
migrate them to a Google channel. Follow the steps below but skip the step
"Add Account" and proceed with :ref:`migrate-channel`.

.. _register-oauth-google:

Configure OAuth App
-------------------

- Sign in to the `Google Cloud console <https://console.cloud.google.com/>`_.
- Create a new app if you don't have one already.
- Go to *APIs & Services > OAuth consent screen* and create an OAuth client by
  clicking the **Create OAuth client** button.
- Choose "Web application" as type, provide a fitting name and add a redirect
  URI. You can find the redirect URI in the Google account settings dialog of
  Zammad by opening the configuration dialog via **Connect Google App** button
  (called "Your callback URL").
- After saving your app, a dialog will be shown with the "Client ID" and the
  "Client secret". Copy and add them to Zammad in the app configuration
  dialog.
- **Submit** the app configuration in Zammad and switch back to Google's Cloud
  console.
- Go back to the dashboard, select *APIs & Services > Enabled APIs & Services*
  and click on **Enable APIs & services** button. Search for ``gmail``, open it
  and hit the **Enable** button.
- Go to *OAuth consent screen > Data Access* and click the
  **Add or remove scopes** button. Search for ``gmail`` and add the scope
  ``https://mail.google.com/``. Confirm with the **Update** button.

Now, you are technically ready to connect a Gmail mailbox to Zammad. Depending
on your scenario, you should also have a look at the **Audience** section in
the Cloud console. Either add a test user to the app or publish it for
production use.

Add Account
-----------

After you've registered an OAuth app, you can connect Gmail accounts to Zammad.
If you already have Google email channels, you can skip this step and head over
to :ref:`migrate-channel`.

☠️ **But first, a word of warning!**
The import process does things you might not expect:

.. danger::
   * By default, Zammad will **delete all emails** in your inbox
     during the import process. Use the *Keep Messages on Server* setting to
     :ref:`disable this behavior <google-keep-messages-on-server>`.
   * Zammad will send an auto-reply message
     to every email it imports (including the old ones!).
     Make sure to :doc:`disable this behavior </manage/trigger>`
     prior adding an email account and to turn it back on once all your
     messages have been imported.

To connect you Google account, click on "Add Account" in Zammad. You will be
redirected to a consent dialog. Click through the screens and and make sure
to select the desired Google account as well as to grant the permission for
email handling as you can see in the following screenshot.

.. figure:: /images/channels/google/consent-screen-email-permission.png
   :alt: Screenshot shows Google's consent screen with checked email permission
   :scale: 50%
   :align: center

After clicking on "Continue", you are redirected to Zammad where you can see a
dialog for specifying some settings for the channel:

.. figure:: /images/channels/google/add-channel-dialog.png
   :alt: Screenshot shows Zammad's add channel dialog
   :scale: 70%
   :align: center

Destination group
   The :doc:`group </manage/groups/index>` that incoming emails will be assigned
   to.

   Use :doc:`filters </channels/google/filters>` for more fine-grained sorting
   of incoming email.

Destination group > Sending email address
   Decide if the email address should be assigned to the selected group for
   outgoing emails.

   **Change to ...** will add this email address to the group
   for outgoing emails. This may overwrite an already assigned email address.

   **Do not change email address** doesn't assign an email address to the group
   or change it. If the group has no assigned email address, it stays empty.
   If the group already has an assigned email address, it stays the same.

.. _google-folder:

Folder
   Specify which folder (or *label*) to fetch from,
   or leave empty to fetch from ``INBOX``.
   If specifying a nested folder, be sure to use the full path,
   e.g. ``Inquiries/Tech-Support``.

   .. _google-keep-messages-on-server:

Keep messages on server
   Specify what happens to your emails after Zammad imports them:

   * ``no``: Zammad deletes all imported messages
   * ``yes``: Zammad marks imported messages as read. With this option,
     Zammad will only import unread messages. This means Zammad may miss
     messages if the mailbox is externally modified.

   .. note:: **Why does Zammad delete messages by default?**

      If you never clean up your inbox, you reach a storage limit some day
      and your mail server will start **rejecting incoming messages**.

      If you choose **yes** here, remember that it's your responsibility
      to clean out your inbox from time to time to keep it below its storage
      limit.

Archive Mode
   .. include:: /channels/email/accounts/archive-mode.rst

After successfully adding the Google account, you can adjust
the default group Zammad is going to assign incoming new tickets to.

.. figure:: /images/channels/google/change-destination-group.png
   :alt: Location of "Destination Group" setting for existing accounts
   :scale: 70%
   :align: center

Only **active** groups will be displayed. Changing this setting will not
reassign existing tickets to the new group.

.. _migrate-channel:

Migrate from Email Channel
--------------------------

Convert Email Channel to Google Channel
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Zammad provides a migration logic that allows you to migrate existing Google
accounts from an email channel into a Google channel.

.. note:: **Zammad is expecting specific settings.**
   In order for Zammad to display the migration option, it expects the channels
   hostname to be ``imap.gmail.com`` for IMAP and ``smtp.gmail.com`` for SMTP.

The easiest way to start the migration is to :ref:`register-oauth-google` for
your Google accounts before migrating. However, if you don't, Zammad will ask
you to provide your app credentials before allowing you to continue.

If you're ready to go, simply click on the *Migrate now!* button in the red
banner of the email channel in question. Zammad will redirect you to
Google and request you to authenticate and consent to said account.

After you pressed next you'll be redirect to Zammad's Google channel overview.
Your channel, if successful, is now migrated to an Google channel.

Rolling Back the Migration
^^^^^^^^^^^^^^^^^^^^^^^^^^

In case something went wrong, Zammad allows you to roll back the migration
for up to 7 days. For this time period Zammad will remember your original
credentials and restore it if needed. These information will be removed
entirely after 7 days.

   .. figure:: /images/channels/google/rollback-migration.png
      :alt: Migrate an existing email channel to Google
      :scale: 90%
      :align: center

Troubleshooting
---------------

My OAuth credentials stopped working
   Did you recently change your Google password? Google invalidates all your
   OAuth tokens whenever you change it.

How to use the Gmail account for outgoing system notifications?
   On **subscription/cloud-hosted instances**, you can't do that.
   Notifications will always come from
   “Notification Master <noreply\@your.zammad.domain>”.

   On **self-hosted instances**, we still don't recommend it.
   Using a Gmail account for automated, outgoing messages is risky:
   users who exceed Google's `email sending limits
   <https://support.google.com/a/answer/166852>`_
   can have their accounts suspended.

   Set up a generic :doc:`email channel </channels/email/index>` instead and
   use the :ref:`Email Notification <email-notification>` setting.

I successfully added my account, but Zammad isn't fetching new emails
   If you specified a :ref:`custom folder/label to fetch from <google-folder>`,
   are you sure incoming mail is arriving in that folder?