Microsoft 365 Graph Email
=========================

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
----------------

Go to Microsoft's `Entra admin center <https://entra.microsoft.com/#home>`_ and
log in with as an administrator.

Create App
^^^^^^^^^^

- Create a new app by going to *Applications > App registrations* and select
  **New registration**.
- Enter a fitting name and select an account type. Supported types are:

  - Accounts in this organizational directory only (Single tenant)
  - Accounts in any organizational directory (Multitenant)

- Under "Redirect URI", select "Web" as platform and paste your already copied
  callback URL from Zammad.
- Click on **Register**.
- In the overview screen, copy the "Application (client) ID", switch to Zammad
  and paste it in the "Client ID" field in the pop up.
- Only required for single tenant setup: copy the "Directory (tenant) ID" and
  paste it in the "Tenant UUID/Name" field in Zammad.

Create Secret
^^^^^^^^^^^^^

- In Entra, go to "Certificates & secrets" and add a secret by clicking the
  **New client secret** button.
- Enter a description, set an expiry duration and click **Add**.
- Copy the string under "Value", this is the secret. Paste it to Zammad
  in the "Client Secret" field.

Configure API Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^

- Go to "API permissions" and **Add a permission**.
- Select "Microsoft Graph" and "Delegated permissions".
- Add the following permissions:

  - ``offline_access``
  - ``openid``
  - ``profile``
- Add the following permissions for **user mailboxes** only:

  - ``Mail.ReadWrite``
  - ``Mail.Send``
- Add the following permissions for **shared mailboxes** only:

  - ``Mail.ReadWrite.Shared``
  - ``Mail.Send.Shared``

Save it by clicking the **Add permissions** button.

Enterprise Applications
^^^^^^^^^^^^^^^^^^^^^^^

- Go to *Applications > Enterprise applications* and select your just created
  app.
- Go to "Users and groups" and **Add user/group**.
- Click "None selected" to add a user.
- Search and select your user and click on **Select** and then **Assign** to
  save it.

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

If you followed this guide, you already should have pasted your app information.
If not, here is a short summary:

- In Zammad's channel configuration, click on **Configure App**.
- Enter your app details:

  - Client ID: *Application (client) ID*
  - Client Secret: *Value* from client secret
  - Tenant UUID/Name: *Directory (tenant) ID* (not required for shared mailboxes)
- Click on **Submit**.

Add Account
^^^^^^^^^^^

Now you can add your account to Zammad. Do so by clicking the **Add account**
button in the top right corner. Select the correct mailbox type and click
**Authenticate**. Enter your credentials and confirm the requested permissions
by clicking the **Accept** button.

After that, Zammad will ask you to assign a destination group. Select a group
which should (initially) handle the incoming tickets of this channel. You can
also specify a folder from which Zammad should fetch emails from. If you do so,
make sure that the emails are routed to this folder somehow. Otherwise you won't
receive tickets. Leave it empty to fetch all emails from the inbox. Finally,
choose if fetched emails should remain on the server or not and confirm by
clicking the **Save** button.

Now your channel is ready and can be used! If something doesn't work, have
a look at the :doc:`troubleshooting section <../common-errors>`, where you can
find common errors related to the M365 configuration.