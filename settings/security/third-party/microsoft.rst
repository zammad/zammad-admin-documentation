Microsoft
=========

Zammad's Microsoft connection allows your users with Microsoft accounts to login.
This works for Azure users as well and can be an alternative to
:doc:`/system/integrations/ldap/index`.

.. note::

   This documentation part does not cover our
   :doc:`📧 Microsoft 365 email channel </channels/microsoft365/index>`.

.. figure:: /images/settings/security/third-party/microsoft/zammad-login-interface-with-microsoft-login.png
   :alt: Screenshot showing Microsoft login button on Zammad login screen.
   :scale: 75%
   :align: center

Limitations
-----------

Please note that Zammad only supports these account types (app dependent):

- Single tenant only - restrict sign-in to users (or guests) in your
  own tenant.
- Multiple Entra ID tenants - allow users in any Microsoft Entra tenant
  to sign in.
- Any Entra ID tenant + personal Microsoft accounts - allow users in any
  Microsoft Entra tenant and with personal Microsoft accounts (e.g.
  Skype, Xbox) to sign in.

Step 1 - Get the Callback URL from Zammad
-----------------------------------------

Navigate to *Settings > Security > Third-party Applications* within
Zammad's admin settings and scroll down to the section *Authentication
via Microsoft*.

Leave the *App ID*, *App secret* and *App Tenant ID* fields empty
for now. Note down the read-only **Your callback URL** field instead
- you will need it in the next step to configure the app on the
Microsoft side, and you can copy it directly from Zammad.

Step 2 - Register a Microsoft App in Entra ID
---------------------------------------------

Sign in to the `Microsoft Entra admin center <https://entra.microsoft.com/>`_\
and select **Entra ID** > **App registrations** > **New registration**\
to create a new app.

Provide the requested information as follows and register your app.

Name:
   Any meaningful name fits, as this name is displayed to users trying
   to authenticate with this app.

Supported account types:
   Choose one of the above mentioned account types (see Limitations).

   The correct account type depends on your use case.
   If you want to use the authentication internal only, choose the first
   option. If you're unsure, use the "Help me choose..." link.

Redirect URI (optional):
   Select web and provide your callback URL. You can find it under
   **Your callback URL** in Zammad where you can copy it.
   The callback URL looks like this:
   ``https://zammad.example.com/auth/microsoft_office365/callback``

Sign-in requires only the ``User.Read`` API permission, which new apps
already have. You can verify this under **API permissions**, within
*Microsoft Graph > Delegated permissions*. The ``openid`` scope is part
of the sign-in protocol and is sent automatically, so there is nothing
to add.

Within **Certificates & secrets**, create a new client secret.
Note down the returned secret **value** for later. **Do not** use the secret ID!

From **Overview**, copy your app's *Application (client) ID*.
If you're using a single tenant app, please also copy *Directory (tenant) ID*.
You now have all required information for Zammad.

Step 3 - Add App Credentials to Zammad
--------------------------------------

Return to the *Authentication via Microsoft* section in *Settings >
Security > Third-party Applications* and fill in the required
information.

App ID:
   This is your *Application (client) ID*.

App secret:
   This is your *client secret* (value).

App Tenant ID:
   optional - only required for apps that use the account type
   *Single tenant only.*

Apply your settings by pressing submit and activate
*Authentication via Microsoft*.
