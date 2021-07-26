Office 365
==========

Zammads Office 365 allows your users with Microsoft accounts to login. 
This works for Azure users as well and can be an alternative to 
:doc:`/system/integrations/ldap`.

.. note::

   This documentation part does not cover our 
   :doc:`📧 Microsoft 365 email channel </channels/microsoft365/index>`.

.. figure:: /images/settings/security/third-party/microsoft/zammad-login-with-office365-button.png
   :alt: Screenshot showing Office365 login button on Zammad login screen.
   :scale: 75%
   :align: center

Limitations
-----------

Supported account types:
   Please note that Zammad only supports these account types (App dependent):

      * Accounts in this organizational directory only 
        (Default Directory only - Single tenant)
      * Accounts in any organizational directory 
        (Any Azure AD directory - Multitenant)
      * Accounts in any organizational directory 
        (Any Azure AD directory - Multitenant) 
        and personal Microsoft accounts (e.g. Skype, Xbox)

Avatars of signing in users:
   Zammad currently ignores user avatars. If the user is registered with 
   e.g. Gravatar, Zammad will fetch the avatar from there if enabled. 
   See :doc:`Zammad Image Service </settings/system/index>` for more.

Step 1 - Register a Microsoft app for Zammad
--------------------------------------------

Login to the `Microsoft Azure Portal <https://portal.azure.com/>`_ 
and navigate to App registrations to create a new app. 
Provide the requested information as follows and register your app. 

Name:
   Any meaningful name fitting, this name will be displayed to users 
   trying to authenticate with this app.

Supported account types:
   Choose one of the above mentioned account types (see Limitations).

   .. tip::

      The correct account type depends on your use case. 
      If you want to use the authentication internal only, choose the first 
      option. If you're unsure, use the "Help me choose..." link.

Redirect URI (optional):
   Select web and provide your callback url. 
   The callback url looks like this: 
   ``https://zammad.domain.tld/auth/microsoft_office365/callback``

.. figure:: /images/settings/security/third-party/microsoft/register-microsoft-app.gif
   :alt: Screencast showing how to register a Microsoft app
   :width: 80%
   :align: center

Within  **API permissions** add the following permissions:
   OpenId permissions
      * ``openid``
   User
      * ``User.Read``
   Contacts
      * ``Contacts.Read``

You can find these permissions within *Microsoft Graph → Delegated permissions*. 

.. figure:: /images/settings/security/third-party/microsoft/microsoft-app-add-api-permissions.gif
   :alt: Screencast showing how to add required API permissions
   :width: 80%
   :align: center

Within **Certificates & secrets** create a new client secret. 
Note down the returned secret **value** for later. **Do not** use the secret ID!

.. figure:: /images/settings/security/third-party/microsoft/microsoft-app-create-secret.gif
   :alt: Screencast showing how to create a new app secret
   :width: 80%
   :align: center

From **Overview** copy your apps *Application (client) ID*. 
If you're using a single tenant app, please also copy *Directory (tenant) ID*. 
You now have all required information for Zammad.

.. figure:: /images/settings/security/third-party/microsoft/microsoft-app-get-applicationID-and-tenantID.gif
   :alt: Screencast showing how to retreive application client and tenant IDs
   :width: 80%
   :align: center

Step 2 - Add app credentials to Zammad
--------------------------------------

Navigate to Security → Third-party Applications (Tab) within Zammads admin 
settings. Scroll down to the section *Authentication via Office 365* and 
fill in the required information.

App ID:
   This is your *Application (client) ID*.

App secret:
   This is your *client secret* (value).

App Tenant ID:
   **optional** only required for apps that use account type 
   *Accounts in this organizational directory only 
   (Default Directory only - Single tenant).*

Apply your settings by pressing submit and activate 
*Authentication via Office 365*.

.. figure:: /images/settings/security/third-party/microsoft/add-microsoft-app-credentials-to-zammad.gif
   :alt: Screencast showing how to add app credentials and activating the 
         authentication method
   :width: 80%
   :align: center
