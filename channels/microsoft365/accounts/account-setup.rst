Account Setup
=============

After you've :doc:`registered Zammad as an OAuth app <register-app>`
in your Entra admin center, you can begin connecting Microsoft accounts to
Zammad.

☠️ **But first, a word of warning!**
The import process does things you might not expect:

.. danger::
   * By default, Zammad will **delete all emails** in your inbox during the
     import process. Use the *Keep Messages on Server* setting to
     :ref:`disable this behavior <microsoft365-keep-messages-on-server>`.
   * Zammad will **send an auto-reply message to every email it imports**
     (including the old ones!). Make sure to
     :doc:`disable this behavior </manage/trigger>` prior adding an email
     account, and to turn it back on once all your messages have been imported.

.. tip:: 🤓 **Shared mailboxes are possible...**

   For this to function ensure to set a password for the account in question.
   You'll need these credentials to authenticate against later during adding
   the account.

🚛 Migrate an Existing Email Channel
------------------------------------

If you've already added your Microsoft 365 account as a regular email channel,
you'll have to convert it to a Microsoft 365 channel eventually:
Microsoft is planning to end support for simple password authentication
in third-party email clients (like Zammad).

Please refer the :doc:`migrate-from-email-channel` guide.

Requesting Administrator Consent
--------------------------------

This step is only required if you didn't consent the permissions in App
registration as administrator on behalf of your users.
If you do not use this kind of security measurement, simply skip to
`Add a New Account`_.

Requesting the consent
   Within Zammad click on **Request Admin Consent** in order to request consent
   from your administrators. This is required in some tenants.

   If your admin already provided consent, you'll be automatically
   authenticated, if this happens, continue with `Add a New Account`_.

   After authenticating against Microsoft and providing a reason for your
   request, you'll be redirect to the Zammad app. Zammad will then tell you to
   wait for your administrators consent. The consent grant or denial will be
   sent by mail.

Granting the consent (admin users)
   Within **Enterprise applications** in the Entra admin center, go to
   **Admin consent requests**. You'll find all your user grant requests here.

   Clicking on a request allows you to review which user requested the consent
   for what app. Click on **Review permissions and consent** to start the
   grant process. You'll be asked for credentials - these credentials are the
   administrator credentials *not* the ones of the mailbox user to add.

   After you've granted the request, continue with "Add a New Account" below.

Add a New Account
-----------------

.. figure:: /images/channels/microsoft365/accounts/account-setup/add-account.png
   :alt: Click on Add Account to add your Microsoft 365 account to Zammad
   :scale: 60%
   :align: center

Click **Add Account** to connect your Microsoft 365 accounts to Zammad.
You will be redirected to a Microsoft sign-in and confirmation page. Enter
your credentials and confirm it by clicking the **Accept** button.

.. note:: 🕵️ **Aliases are not imported automatically.**

   See :doc:`secondary-addresses` to add them yourself.

Channel
^^^^^^^

.. figure:: /images/channels/microsoft365/accounts/account-setup/microsoft365-account-settings.png
   :alt: Screenshot showing channel configuration during adding account for M365
   :scale: 70%
   :align: center

Destination group
   The :doc:`group </manage/groups/index>` that incoming emails will be assigned
   to.

   Use :doc:`filters </channels/microsoft365/filters>` for more fine-grained
   sorting of incoming email.

Destination group > Sending email address
   Decide if the email address should be assigned to the selected group for
   outgoing emails.

   **Change to ...** will add this email address to the group
   for outgoing emails. This may overwrite an already assigned email address.

   **Do not change email address** doesn't assign an email address to the group
   or change it. If the group has no assigned email address, it stays empty.
   If the group already has an assigned email address, it will stay the same.

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
      it'll eventually reach its storage limit,
      and your mail server will start **rejecting incoming messages**.
      Most Zammad users never even look at their inbox once it's set up,
      so they rely on Zammad to keep it clean for them.

      If you choose **yes** here, remember that it's your responsibility
      to clean out your inbox from time to time
      to keep it below its storage limit.

Archive Mode
   .. include:: /channels/email/accounts/archive-mode.rst

After adding the account
   After successfully adding the Microsoft 365 mail account, you can adjust
   the default group Zammad is going to assign incoming new tickets to by
   clicking the group name under "Destination Group":

   .. figure:: /images/channels/microsoft365/accounts/account-setup/change-destination-group.png
      :alt: Location of "Destination Group" setting for existing accounts
      :scale: 60%
      :align: center

   Only **active** groups will be displayed.

   Changing this setting will not reassign existing tickets to the new group.

   .. include:: /channels/email/accounts/account-setup-group-hint.include.rst

Troubleshooting
---------------

I successfully added my account, but Zammad isn't fetching new email
   If you specified a
   :ref:`custom folder/label to fetch from <microsoft365-folder>`,
   are you sure incoming mail is arriving in that folder?

My mailbox was working fine but suddenly it fails with ``EXPUNGE FAILED``
   This is a Microsoft 365 specific issue which you have to solve with
   Microsoft. However, you can have a look at
   `Microsofts documentation <https://docs.microsoft.com/en-us/exchange/recipients-in-exchange-online/manage-user-mailboxes/change-deleted-item-retention>`_
   which might allow you to solve the issue on your own.

   As soon as the issue has been fixed, the Zammad channel will recover
   automatically.

Have a look at the :doc:`common errors section <../common-errors>` if you still
face issues with your M365 account.
