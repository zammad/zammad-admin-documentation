Register an OAuth App
=====================

Setting up a new Microsoft 365 account? Follow our basic setup guide to get
started.

First, you'll have to connect Zammad to your Microsoft account as an
**OAuth app** in the Microsoft Entra portal.
Once that's done, you'll be able to connect as many Microsoft 365 accounts to
Zammad as you want, using only active Microsoft 365 browser sessions
(no usernames or passwords required).

.. _register_ms_app_stepbystep:

Preparation
-----------

- Check your FQDN under *Settings > System > Fully Qualified Domain Name* in the
  admin interface of Zammad. If it is not correct, change it now. Otherwise the
  setup of the channel will fail.
- Go to *Channels > Microsoft 365 IMAP Email* and click on
  **Connect Microsoft 365 App**. Copy the provided callback URL.

Step-by-Step
------------

To get started, head over to
`Microsoft's Entra Portal <https://entra.microsoft.com>`_. Make sure to use an
admin account for your organization. Otherwise, an admin will have to approve
your changes before they can take effect.

Create App
^^^^^^^^^^

.. figure:: /images/channels/microsoft365/accounts/register-app/register-app.png
  :align: center
  :alt: Screenshot shows Entra admin center with application registration screen.

- Create a new app by going to *Applications > App registrations* and select
  **New registration**.
- Enter a fitting name and select an account type. Supported types are:

  * Accounts in this organizational directory only (Single tenant)
  * Accounts in any organizational directory (Multitenant)
  * Accounts in any organizational directory (Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)

    .. note::
       "Personal Microsoft accounts only" are not supported.

- Under "Redirect URI", select "Web" as platform and paste your already copied
  callback URL from Zammad.
- Click on **Register**.

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

.. figure:: /images/channels/microsoft365/accounts/register-app/api-permissions.png
  :align: center
  :alt: Screenshot shows Entra admin center with api permission screen.

- Go to "API permissions" and **Add a permission**.
- Select "Microsoft Graph" and "Delegated permissions".
- Add the following permissions:

  - ``email``
  - ``openid``
  - ``profile``
  - ``offline_access``
  - ``IMAP.AccessAsUser.all``
  - ``SMTP.Send``

Save it by clicking the **Add permissions** button.

Admin Consent (optional)
^^^^^^^^^^^^^^^^^^^^^^^^

.. hint::

  This step is only required for tenants that require admin consent.
  Admin consent adds another layer of security for your tenants users
  and allows administrators to define who may share user information.

Within *Enterprise applications* select your app. When creating an app within
*App registrations*, Microsoft will automatically also create an enterprise
application for you.

Set *Assignment required* to ``Yes`` within the apps properties and hit
*Save*. This generally activates your app requesting admin consent already.

.. figure:: /images/channels/microsoft365/accounts/register-app/03_1-optional-configure-admin-consent.png
  :alt: Screenshot showing enabled assignment requirement
  :align: center

Tightening your App (recommended, optional)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This step will protect your tenant users from -to admins- unwanted
permission changes (e.g. requesting more permissions than originally
noted).

It also has another benefit: You can add the email account in question
immediately without any administrator being forced to step in
manually.

Still within *Enterprise applications* select *Users and groups*.
In this section you can select specific users and / or groups
(users must be direct members!) that are allowed to use your app for
adding mailboxes to Zammad.

After adding users and groups, go back to the Azure portals home and
select *App registrations*. Within your desired app go to
*API permissions* and use the *Grant admin consent for {company name}*
button to generally allow connecting users you previously consented.

.. note::

   Not adding users / groups nor providing the granted admin consent
   right away will cause Microsoft to enforce at least the first user
   to be requested to provide a reason for the consent request. After that
   Microsoft will automatically grant the consent for your tenant.

   Administrative accounts can also use the option
   *Consent on behalf of your organization* in above mentioned permission
   dialogue.

App Configuration
^^^^^^^^^^^^^^^^^

.. figure:: /images/channels/microsoft365/accounts/register-app/connect-app.png
  :alt: Screenshot showing popup about connecting app
  :align: center

- In Zammad's channel configuration, click on **Configure App**.
- Enter your app details:

  - Client ID: *Application (client) ID*
  - Client Secret: *Value* (not the "Secret ID"!) from client secret
  - Tenant UUID/Name: *Directory (tenant) ID* (not required for shared mailboxes)
- Click on **Submit**.


🍾 Congratulations! Now you're ready to connect Microsoft 365 accounts to
Zammad.
