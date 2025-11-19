Accounts
========

You can connect to user and shared mailboxes in your M365 environment.
Follow the steps below and skip not applicable parts.

First Steps
-----------

- Check your FQDN under *Settings > System > Fully Qualified Domain Name* in the
  admin interface of Zammad. If it is not correct, change it now. Otherwise the
  setup of the channel will fail.
- Go to *Channels > Microsoft 365 Graph Email* and click on
  **Connect Microsoft 365 App**. Copy the provided callback URL.

Configuration
-------------

Go to Microsoft's `Entra admin center <https://entra.microsoft.com/#home>`_ and
log in as an administrator (at least application administrator permission is
required).

Create App
^^^^^^^^^^

.. figure:: /images/channels/microsoft365-graph/register-app.png
  :align: center
  :alt: Screenshot shows Entra admin center with application registration screen.

- Create a new app by going to *Applications > App registrations* and select
  **New registration**.
- Enter a fitting name and select an account type. Supported types are:

  - Accounts in this organizational directory only (Single tenant)
  - Accounts in any organizational directory (Multitenant)

- Under "Redirect URI", select "Web" as platform and paste your already copied
  callback URL from Zammad.
- Click on **Register**.


.. figure:: /images/channels/microsoft365-graph/app-overview.png
  :align: center
  :alt: Screenshot shows Entra admin center with application overview screen.

- In the overview screen, copy the "Application (client) ID", switch to Zammad
  and paste it in the "Client ID" field in the pop up.
- Only required for single tenant setup: copy the "Directory (tenant) ID" and
  paste it in the "Tenant UUID/Name" field in Zammad.

Create Secret
^^^^^^^^^^^^^

.. figure:: /images/channels/microsoft365-graph/secret.png
  :align: center
  :alt: Screenshot shows Entra admin center with client secret screen.

- In Entra, go to "Certificates & secrets" and add a secret by clicking the
  **New client secret** button.
- Enter a description, set an expiry duration and click **Add**.
- Copy the string under "Value" (not the "Secret ID"!), this is the secret.
  Paste it to Zammad in the "Client Secret" field.

Configure API Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: /images/channels/microsoft365-graph/api-permissions.png
  :align: center
  :alt: Screenshot shows Entra admin center with api permission screen.

- Go to "API permissions" and **Add a permission**.
- Select "Microsoft Graph" and "Delegated permissions".
- Add the following permissions:

  - ``offline_access``
  - ``openid``
  - ``profile``
  - ``Mail.ReadWrite``
  - ``Mail.Send``
  - ``Mail.ReadWrite.Shared``
  - ``Mail.Send.Shared``

Save it by clicking the **Add permissions** button.

Additional Steps for Shared Mailboxes
-------------------------------------

If you want to fetch email from a shared mailbox, you have to perform additional
steps:

- Log in to the `Exchange admin center <https://admin.exchange.microsoft.com>`_.
- Go to *Recipients > Mailboxes*, select the mailbox and click on **Mailboxes
  delegation**.
- Under "Send as", click on **Edit** and **Add members**. Search and select the
  user from which you want to access the mailbox and **Save** it.
- Do the same for "Read and manage (Full Access)".

Configure the Channel in Zammad
-------------------------------

App Configuration
^^^^^^^^^^^^^^^^^

.. figure:: /images/channels/microsoft365-graph/connect-app-dialog.png
  :align: center
  :alt: Screenshot shows Zammad's app configuration dialog.

If you followed this guide, you already should have pasted your app information.
If not, here is a short summary:

- In Zammad's channel configuration, click on **Configure App**.
- Enter your app details:

  - Client ID: *Application (client) ID*
  - Client Secret: *Value* (not the "Secret ID"!) from client secret
  - Tenant UUID/Name: *Directory (tenant) ID* (not required for shared mailboxes)
- Click on **Submit**.

Add Account
^^^^^^^^^^^

Now you can add your account to Zammad. Do so by clicking the **Add account**
button in the top right corner. Select the correct mailbox type. In case you
selected "Shared Mailbox", you have to enter the email address of the shared
mailbox. Confirm by clicking the **Authenticate** button, enter your credentials
and confirm the requested permissions by clicking the **Accept** button.

.. figure:: /images/channels/microsoft365-graph/add-account-dialog.png
  :align: center
  :alt: Screenshot shows Zammad's dialog for account configuration.

After that, Zammad will ask you to assign a destination group. Select a group
which should (initially) handle the incoming tickets of this channel.
Additionally, you can decide if assign the email address should be assigned to
the selected group for outgoing emails
(*Destination group > Sending email address*). Choose between:

- **Change to ...** to add this
  email address to the group for outgoing emails. This may overwrite an already
  assigned email address.
- **Do not change email address** if you don't want assign an email address to
  the group or change it. If the group has no assigned email address, it stays
  empty. If the group already has an assigned email address, it stays the same.

You can also specify a folder from which Zammad should fetch emails from. If
you do so, make sure that the emails are routed to this folder somehow.
Otherwise, you won't receive tickets. Leave it empty to fetch all emails from
the inbox. After that, choose if fetched emails should remain on the server or
not.

Depending if there are already email messages in this account, the archive mode
dialog may be shown.

.. include:: /channels/email/accounts/archive-mode.rst

Now your channel is ready and can be used! If something doesn't work, have
a look at the :doc:`common errors section <common-errors>`, where you can
find common errors related to the M365 configuration.

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

Using Aliases
^^^^^^^^^^^^^

In case you want to use secondary addresses (aliases), make sure to add the
aliases to the desired mailbox first. You can find additional information in
Microsoft's documentation:

- https://learn.microsoft.com/en-us/graph/outlook-send-mail-from-other-user
- https://learn.microsoft.com/en-us/microsoft-365/admin/email/add-another-email-alias-for-a-user

To add an alias, click on ``+ Add`` in the **Email Address** section and provide
the requested information. It works the same way as for other email based
channels. Because of this, have a look at the
:doc:`section in the standard email configuration </channels/email/accounts/secondary-addresses>`
for more information.

Re-Authenticate
^^^^^^^^^^^^^^^

If your token got invalid, you have to replace the token due to other reasons,
you want to use a shared mailbox with another user, you can use the
**Re-Authenticate** button.

In case you are using an user mailbox, the new user has to match the
existing one, otherwise it will result in a user mismatch error. In this case,
you should delete the channel and add a new account.

Request Admin Consent
^^^^^^^^^^^^^^^^^^^^^

It is possible to request the permissions via admin consent. In this case
Zammad will request necessary permissions for you from your admin, and then your
admin (if it's not the same user as you) can accept them on Microsoft side.
Trigger this process via the **Request Admin Consent** button in Zammad.