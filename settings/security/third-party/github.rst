GitHub
======

Configure GitHub as an authentication provider so users can log in to Zammad
with their GitHub account. For details about OAuth apps, see the `GitHub
developer documentation
<https://docs.github.com/en/apps/oauth-apps>`_.

Register a GitHub App
---------------------

Create the OAuth App
^^^^^^^^^^^^^^^^^^^^

1. In the upper-right corner of any page on GitHub, click your profile
   picture, then click **Settings**.
2. In the left sidebar, click **Developer settings**.
3. In the left sidebar, click **OAuth apps**.
4. Click **New OAuth App**.
5. Provide the following information:

**Application name**
   Enter a name for your app, for example Zammad. This is what users see
   when they authorize the login.

**Homepage URL**
   Enter the URL of your Zammad instance, for example
   ``https://zammad.domain.tld``.

**Authorization callback URL**
   Enter ``https://zammad.domain.tld/auth/github/callback`` and replace
   ``zammad.domain.tld`` with the FQDN of your Zammad instance. You can also
   copy the callback URL from the **Authentication via GitHub** section in
   Zammad's admin settings.

6. Click **Register application**.

Get Your App Credentials
^^^^^^^^^^^^^^^^^^^^^^^^

After registering, GitHub displays the **Client ID**. Generate a client
secret with the **Generate a new client secret** button and note it down.
You can retrieve both values later via **OAuth apps** > your app in the
developer settings.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via GitHub** section. Enter your **App ID** and
**App Secret**, enable the toggle, and click **Submit**.

After submitting, the GitHub button appears on the login page and users can
log in with their GitHub account. On first login, GitHub asks them to
authorize the access.
