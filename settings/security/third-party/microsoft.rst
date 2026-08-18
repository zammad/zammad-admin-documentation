Microsoft
=========

Zammad's Microsoft connection allows your users with Microsoft accounts to log
in. This works for Entra ID users as well and can be an alternative to
:doc:`/system/integrations/ldap/index`. The configuration in Zammad is located
under *Settings > Security > Third-party Applications* in the section
**Authentication via Microsoft**. To access it, the permission
``admin.security`` is required.

.. note::

   This page does not cover our
   :doc:`📧 Microsoft 365 email channel </channels/microsoft365/index>`.

.. figure:: /images/settings/security/third-party/microsoft/zammad-login-interface-with-microsoft-login.png
   :alt: Screenshot showing Microsoft login button on Zammad login screen.
   :scale: 75%
   :align: center

Limitations
-----------

Please note that Zammad only supports these account types (app-dependent):

- **Single tenant only**: restrict sign-in to users (or guests) in your
  own tenant.
- **Multiple Entra ID tenants**: allow users in any Microsoft Entra
  tenant to sign in.
- **Any Entra ID tenant + personal Microsoft accounts**: allow users in
  any Microsoft Entra tenant, as well as users with personal Microsoft
  accounts (e.g. Skype, Xbox), to sign in.

Register a Microsoft App in Entra ID
------------------------------------

Sign in to the `Microsoft Entra admin center <https://entra.microsoft.com/>`_,
go to **App registrations** and create a new app. Provide the requested
information to register your app.

Name
   Any meaningful name fits, as it is displayed to users trying
   to authenticate with this app.

Supported account types
   Choose one of the account types listed above. The correct account type
   depends on your use case. If you only want to use authentication
   internally, choose the first option. If you're unsure, use the
   "Help me choose..." link.

Redirect URI (optional)
   Select **Web** as the platform and provide your callback URL. You can find
   and copy it from Zammad's read-only **Your callback URL** field. Paste it
   into the redirect URI field in Microsoft's app configuration.

   The callback URL looks like this:
   ``https://zammad.example.com/auth/microsoft_office365/callback``

Sign-in requires only the ``User.Read`` API permission, which new apps
already have. You can verify this under **API permissions** within
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

Make sure to enable the toggle next to **Authentication via Microsoft** and
click ``Submit`` to activate and save your configuration.

Optional: Require a Verified Email Domain for Account Linking
-------------------------------------------------------------

In multi-tenant (``/common``) setups, anyone signing in can present an email
address from any domain. Microsoft signals whether the domain of that address
is verified for the account's tenant via the ``xms_edov`` ("email domain owner
verified") claim in the ID token. Enable **Require verified email domain** to
make Zammad insist on that signal before it links a Microsoft login to an
existing Zammad user by email address.

.. note::

   This option only has an effect in combination with
   :ref:`Automatic account link on initial logon <automatic-account-linking>`.
   Without it, Zammad never links a third-party login to an existing account
   by email address in the first place.

With the option enabled, Zammad links a login to an existing user only if all
of the following apply:

- the ID token contains an ``xms_edov`` claim with the value ``true``,
- the ID token contains a non-empty ``email`` claim, and
- that ``email`` claim matches the email address of the account that is about
  to be linked (upper and lower case are treated as equal).

If one of these conditions is not met, Zammad refuses to link the accounts and
the sign-in fails with an error message: either that the email address is
already in use by another user, or, if **No user creation on logon** is
enabled, that the user account does not exist. Affected users can still get
access: they log in to their existing Zammad account by other means and link
their Microsoft account themselves under *Profile > Linked Accounts*.

While the option is disabled (default), Zammad does not require the claim:
Microsoft either reports a verified domain via ``xms_edov`` or omits the claim
entirely, so an existing account is linked as soon as the email address
matches. Only enabling the option makes the verified domain a requirement.

.. warning::

   Both claims must be configured on your app registration first. In the
   `Microsoft Entra admin center <https://entra.microsoft.com/>`_, go to
   *Entra ID > App registrations*, select your app and choose
   **Token configuration** under **Manage**. Select **Add optional claim**,
   set the token type to **ID token** and add the claims ``email`` and
   ``xms_edov``. As long as they are missing, enabling the option blocks all
   Microsoft account linking by email address.
