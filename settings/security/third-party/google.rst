Google
======

Configure Google as an authentication provider so users can log in to Zammad
with their Google account. For details about OAuth 2.0 clients, see the
`Google Auth Platform documentation
<https://support.google.com/cloud/answer/15549257>`_.

Create the Project
------------------

Log in to the `Google Auth Platform
<https://console.developers.google.com/auth/overview>`_ with your Google
account. If you already have a project, you see its overview and can skip
this section. Otherwise you are prompted to create a project with a
**Name**, for example Zammad, and a **Parent resource** where you can select
your organization, if applicable.

If the platform is not configured yet for your project, click
``GET STARTED`` and provide the following information:

**App name**
   Enter a name, for example Zammad. This is what users see when they
   authorize the login.

**User support email**
   Choose an email address for users to contact you with questions about
   their consent. It is displayed to users on the consent screen.

**Audience**
   Choose **Internal** if your users belong to a Google Workspace
   organization and should be the only ones to log in. Choose **External**
   otherwise.

**Contact information**
   Enter an email address that Google notifies about changes to your
   project.

All of this information lives under **Branding** in the Google Auth
Platform, where you can adjust it later and add optional details:

**App domain**
   Optionally provide links to your homepage, your privacy policy and your
   terms of service. Google recommends these links so users can learn about
   your application and data practices. They are displayed to users on the
   consent screen.

**Authorized domains**
   Optionally add the domain of your Zammad instance, for example
   ``zammad.domain.tld``. If you provide app domain links, their domain
   must match an authorized domain.

**Developer contact information**
   Enter an email address that Google notifies about changes to your
   project.

None of the branding details affect the login itself. They are required if
you submit your app for verification, which is only necessary for external
apps and even then optional unless you want your app name and logo to be
displayed on the consent screen.

Create the OAuth Client
-----------------------

Zammad connects to Google via an OAuth client. Its credentials, the client
ID and the client secret, are required in Zammad afterwards.

- Switch to **Clients** in the left sidebar and click ``+ Create client``.
- For the application type, select **Web application**.
- Under **Authorized redirect URIs**, enter
  ``https://zammad.domain.tld/auth/google_oauth2/callback`` and replace
  ``zammad.domain.tld`` with the FQDN of your Zammad instance. You can also
  copy the callback URL from the **Authentication via Google** section in
  Zammad's admin settings.
- Click ``Create``.

After clicking the button, a dialog displays the **Client ID** and the
**Client secret**. Copy both from the dialog and note them down. You can
generate a new secret at any time in the client's details.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via Google** section. Enter your **Client ID** and
**Client secret**, enable the toggle, and click ``Submit``.

After submitting, the Google button appears on the login page and users can
log in with their Google account.
