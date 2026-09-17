LinkedIn
========

Configure LinkedIn as an authentication provider so users can log in to
Zammad with their LinkedIn account. For details about LinkedIn apps and the
Sign In with LinkedIn product, see the `LinkedIn developer documentation
<https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/sign-in-with-linkedin-v2>`_.

.. warning::

   Zammad uses the legacy Sign In with LinkedIn scopes
   (``r_liteprofile`` and ``r_emailaddress``). LinkedIn deprecated this
   version of Sign In with LinkedIn in favor of OpenID Connect, and new
   LinkedIn apps can no longer request these scopes. If the authorization
   fails for your app with an "unauthorized scope" error, use Zammad's
   :doc:`OpenID Connect <openid-connect>` provider with LinkedIn's
   OpenID Connect product instead.

Register a LinkedIn App
-----------------------

Create the App
^^^^^^^^^^^^^^

Log in to the `LinkedIn Developer Portal
<https://developer.linkedin.com/>`_ with your LinkedIn account and click
``Create app``. Provide the following information:

**App name**
   Enter a name for your app, for example Zammad. This is what users see
   when they authorize the login.

**LinkedIn Page**
   Select a LinkedIn page associated with your company or create one. Every
   app must be linked to a LinkedIn page.

**App logo**
   Upload a logo for your app. It is displayed to users on the consent
   screen.

Then check the legal agreement checkbox and click ``Create app``.

Get Your App Credentials
^^^^^^^^^^^^^^^^^^^^^^^^

- Go to the **Auth** tab of your app.
- Note down the **Client ID** and the **Client Secret** under **Application
  credentials**. The secret is shown after you click it, and you can reveal
  it again at any time.

Provide the Redirect URL
^^^^^^^^^^^^^^^^^^^^^^^^

- Still on the **Auth** tab, find the **OAuth 2.0 settings** section and
  click the edit icon next to **Authorized redirect URLs for your app**.
- Add ``https://zammad.example.com/auth/linkedin/callback`` and replace
  ``zammad.example.com`` with the FQDN of your Zammad instance. You can
  also copy the callback URL from the **Authentication via LinkedIn**
  section in Zammad's admin settings.
- Click ``Update``.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via LinkedIn** section. Enter your **App ID** and
**App Secret**, enable the toggle, and click ``Submit``.

After submitting, the LinkedIn button appears on the login page and users
can log in with their LinkedIn account. On first login, LinkedIn asks them
to authorize the access.
