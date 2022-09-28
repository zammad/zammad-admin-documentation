Register an OAuth App
=====================

Setting up a new Microsoft365 / Outlook account?
Because of Microsoft's strict security policies,
it’s not as simple as entering your username and password.

First, you’ll have to connect Zammad to your Microsoft account as an
**OAuth app** via the Microsoft Azure Portal.
Once that’s done, you’ll be able to connect as many Microsoft 365 accounts to
Zammad as you want, using only active Microsoft 365 browser sessions
(no usernames or passwords required).

.. note:: 🤔 **What the heck is OAuth?**

   If you’ve ever used a website that lets you
   “Sign in with Google/Facebook/Twitter”, you’ve used OAuth.
   OAuth is a way for you to let a third-party website see a tiny slice
   of your Microsoft/Facebook/Twitter account data
   without giving them your password (which would let them see *everything*).

   .. figure:: /images/channels/microsoft365/accounts/register-app/sign-in-with.png
      :alt: Screenshot of website with various OAuth sign-in options
      :align: center

   When a third-party website wants to use OAuth,
   it has to **register with the provider first** (*i.e.,* Microsoft).
   This way, the provider knows who’s receiving its users’ data,
   and can give users a way to revoke access if they change their minds.

   In this case, **Zammad is that third-party website**.
   That’s why adding a Microsoft account is a two-stage process:
   first, you have to register Zammad as a website that wishes to access
   Microsoft user data; then, you have to add yourself as a Microsoft user who
   agrees to let Zammad fetch your email.

Step-by-Step
------------

To get started, head over to `Microsoft’s Azure Portal`_. 

.. _Microsoft’s Azure Portal:
   https://portal.azure.com/

.. note:: 🔑 **Use an admin account for your organization.**

   Otherwise, an admin will have to approve your changes
   before they can take effect.

1. **Add an App Registration**

   Under **App Registrations > ➕ New Registration**,
   use the following:

   Supported account types
      Choose the option that’s right for your organization
      (or click *Help me choose...* if you’re not sure).

      * Accounts in this organizational directory only 
        (Default Directory only - Single tenant)
      * Accounts in any organizational directory 
        (Any Azure AD directory - Multitenant)
      * Accounts in any organizational directory 
        (Any Azure AD directory - Multitenant) 
        and personal Microsoft accounts (e.g. Skype, Xbox)

      .. note:: 

         🙅 **The “Personal Microsoft accounts only” option is not supported.**

   Redirect URI
      **Web** > *E.g.,*
      ``https://your-domain.com/api/v1/external_credentials/microsoft365/callback`` 

      Find it in the Zammad admin panel
      under **Channels > Microsoft 365 > Connect Microsoft 365 App >
      Your callback URL**.

   .. figure:: /images/channels/microsoft365/accounts/register-app/01-create-app.gif
      :alt: Screencast demo of new app creation in Microsoft Azure Portal
            settings
      :align: center

2. **Add API permissions**

   Under **API Permissions > ➕ Add a permission > Microsoft Graph >
   Delegated permissions**, add the following:

   OpenId permissions
      * ``email``
      * ``offline_access``
      * ``openid``
      * ``profile``

   IMAP
      * ``IMAP.AccessAsUser.all``

   SMTP
      * ``SMTP.Send``

   .. figure:: /images/channels/microsoft365/accounts/register-app/02-add-api-permissions.gif
      :alt: Screencast demo of enabling Microsoft API permissions in Microsoft
            Azure Portal
      :align: center

3. **Connect your Microsoft app in Zammad**

   Copy your new app registration’s **Application (client) ID** and 
   **Directory (tenant) ID** (found under **Overview > Essentials**) 
   into Zammad in the admin panel, 
   under **Channels > Microsoft 365 > Connect Microsoft 365 App**.

   Then, create a new client secret
   under **Certificates and Secrets > ➕ New Client Secret**
   and copy that into the Zammad admin panel, as well.

   .. figure:: /images/channels/microsoft365/accounts/register-app/03-add-oauth-credentials.gif
      :alt: Screencast demo of entering Microsoft OAuth credentials in Zammad
            admin panel
      :align: center

4. **Admin Consent related information**

   .. hint::

      This step is only required for tenants that require admin consent.
      Admin consent adds another layer of security for your tenants users
      and allows administrators to define who may share user information.

   Within *Enterprise applications* select your app. When creating a app within
   *App registrations*, Microsoft will automatically also create an enterprise
   application for you.

   Set *Assignment required* to ``Yes`` within the apps properties and hit
   *Save*. This generally activates your app requesting admin consent already.

   .. figure:: /images/channels/microsoft365/accounts/register-app/04-optional-configure-admin-consent.gif
      :alt: Screencast showing how to enable assignment requirement
      :align: center

   4.1 **Tightening your app even further** (Recommended, optional)

      .. note::

         This step is not exactly required but recommended. This step will
         protect your tenant users from -to admins- unwanted permission
         changes (e.g. requesting more permissions than originally noted).

         It also has another benefit: You can add the email account in question
         immediately without any administrator being forced to stepped in
         manually.

      Still within *Enterprise applications* select *Users and groups*.
      In this section you can either specific users or groups
      (users must be direct members!) that are allowed to use your app for
      adding mailboxes to Zammad.

      After adding users and groups, go back to the Azure portals home and
      select *App registrations*. Within your desired app go to
      *API permissions* and use the *Grand admin consent for {company name}*
      button to generally allow connecting users you previously consented.

      .. note::

         Not adding users / groups and providing the granted admin consent
         right away will cause Microsoft to enforce at least the first user
         to be requested to provide a reason for the consent request. After that
         Microsoft will automatically grand the consent for your tenant.

      .. figure:: /images/channels/microsoft365/accounts/register-app/04-optional-configure-admin-consent.gif
         :alt: Screencast showing how to enable user based admin consent
         :align: center

🍾 Congratulations! Now you’re ready to connect Microsoft 365 or Outlook
accounts to Zammad.
