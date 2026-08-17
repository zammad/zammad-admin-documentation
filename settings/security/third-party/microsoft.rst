Microsoft
=========

Zammad's Microsoft connection allows your users with Microsoft accounts to log
in. This works for Entra ID users as well and can be an alternative to
:doc:`/system/integrations/ldap/index`. The configuration in Zammad is located
under *Settings > Security > Third-party Applications* in the section
**Authentication via Microsoft**. To access it, the permission
``admin.security`` is required.

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
- Any Entra ID Tenant + Personal Microsoft accounts - allow users in
  any Microsoft Entra tenant and with personal Microsoft accounts
  (e.g. Skype, Xbox) to sign in.

Register a Microsoft App in Entra ID
------------------------------------

Sign in to the `Microsoft Entra admin center <https://entra.microsoft.com/>`_,
go to **App registrations** and create a new app. Provide the requested
information to register your app.

Name
   Any meaningful name fits, as this name is displayed to users trying
   to authenticate with this app.

Supported account types
   Choose one of the account types listed above. The correct account type
   depends on your use case. If you want to use the authentication internally
   only, choose the first option. If you're unsure, use the
   "Help me choose..." link.

Redirect URI (optional)
   Select web as platform and provide your callback URL. You can find and copy
   it from Zammad's read-only **Your callback URL** field. Paste it into the
   redirect URI field in Microsoft's app configuration.

   The callback URL looks like this:
   ``https://zammad.example.com/auth/microsoft_office365/callback``

Sign-in requires only the ``User.Read`` API permission, which new apps
already have. You can verify this under **API permissions**, within
*Microsoft Graph > Delegated permissions*. The ``openid`` scope is part
of the sign-in protocol and is sent automatically, so there is nothing
to add.

Within **Certificates & secrets**, create a new client secret. Note down the
returned secret **value** for the next step. **Do not** use the secret ID!

Add App Credentials to Zammad
-----------------------------

Now you are ready to provide the values to Zammad. The following table
maps the values you collected in Entra ID to the fields in Zammad.

.. list-table::
   :header-rows: 1
   :widths: 35 25 40

   * - Entra ID
     - Zammad field
     - Comment
   * - **Application (client) ID**
     - **App ID**
     - From **Overview** in the Entra ID portal.
   * - **Client secret** (value)
     - **App Secret**
     - From **Certificates & secrets** > **Client secrets**. Use the *value*, not the *secret ID*.
   * - **Directory (tenant) ID**
     - **App Tenant ID**
     - Optional. Required only when the app uses the **Single tenant only** account type.

Click on ``Submit`` to save and activate your configuration.

Optional: restrict sign-in to verified email domains
------------------------------------------------------

In multi-tenant (``/common``) setups, sign-in can present an email address
from any domain. Microsoft signals whether the sending domain is verified on
the account via the ``xms_edov`` ID-token claim. You can let Zammad enforce
this before it auto-links a signed-in email to an existing user by enabling
the **Require verified email domain** option on this screen.

When enabled, Zammad only auto-links an account when the ID token carries
both an ``email`` claim and a ``xms_edov`` claim whose value is ``true``. If
either is missing or the domain check is not verified, the user can still log
in, but the account must be linked to an existing user manually.

For this to work, the two claims must first be requested on the app. In the
`Microsoft Entra admin center <https://entra.microsoft.com/>`_, go to
*Entra ID > App registrations*, select your app and under **Manage** choose
**Token configuration**. Select **Add optional claim**, set the token type to
**ID token**, add the claims ``email`` and ``xms_edov`` and save. Until both
are configured, enabling this option in Zammad blocks all Microsoft 365
account auto-linking by email.
