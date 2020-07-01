Register an OAuth App
=====================

Setting up a new Gmail / G Suite account?
Because of Google’s strict security policies,
it’s not as simple as entering your username and password.

First, you’ll have to connect Zammad to your Google account as an **OAuth app**
via the Google Developer settings panel.
Once that’s done, you’ll be able to connect as many Gmail accounts to Zammad as you want,
using only active Gmail browser sessions (no usernames or passwords required).

.. note:: 🤔 **What the heck is OAuth?**

   If you’ve ever used a website that lets you
   “Sign in with Google/Facebook/Twitter”, you’ve used OAuth.
   OAuth is a way for you to let a third-party website see a tiny slice
   of your Google/Facebook/Twitter account data
   without giving them your password (which would let them see *everything*).

   .. figure:: /images/channels/google/accounts/register-app/sign-in-with.png
      :alt: Screenshot of website with various OAuth sign-in options
      :align: center

   When a third-party website wants to use OAuth,
   it has to **register with the provider first** (*i.e.,* Google).
   This way, the provider knows who’s receiving its users’ data,
   and can give users a way to revoke access if they change their minds.

   In this case, **Zammad is that third-party website**.
   That’s why adding a Gmail account is a two-stage process:
   first, you have to register Zammad as a website that wishes to access Google user data;
   then, you have to add yourself as a Google user who agrees to let Zammad fetch your email.

Step-by-Step
------------

To get started, head over to `Google’s
Developer settings panel <https://console.developers.google.com/>`_. 

1. **Create a new project**

   For the purposes of this guide, a “project” and an OAuth app are the same thing.
   You may name it whatever you wish.

   .. figure:: /images/channels/google/accounts/register-app/01-create-project.gif
      :alt: Screencast demo of new project creation in Google Developer settings
      :align: center

2. **Enable & add the Gmail API**

   Use the **➕ Enable APIs and Services** button to start your search.

   .. figure:: /images/channels/google/accounts/register-app/02-enable-api.gif
      :alt: Screencast demo of enabling Gmail API in Google Developer settings
      :align: center

3. **Set up the OAuth consent screen**

   Configure who can use your app, what kind of access it’s asking for,
   and a few fine print details (like a link to Zammad’s privacy policy).

   This information will be displayed in the process of connecting a Gmail account to Zammad,
   when users are redirected to Google for sign-in/confirmation.

   .. figure:: /images/channels/google/accounts/register-app/03-set-up-consent-screen.gif
      :alt: Screencast demo of OAuth consent screen setup in Google Developer settings
      :align: center

   User Type
      This option is only available to G Suite users.

      If you have the option, choose **Internal**
      (unless you plan on creating channels for Gmail addresses
      from outside your G Suite domain).

   Scopes for Google APIs
      Add **Gmail API: https://mail.google.com**.

4. **Generate OAuth credentials**

   Click on **➕ Create credentials > OAuth client ID** to begin.

   .. figure:: /images/channels/google/accounts/register-app/04-generate-oauth-credentials.gif
      :alt: Screencast demo of OAuth app creation in Google Developer settings
      :align: center

   Application type
      Choose **Web application**.

   Authorized redirect URIs
      *E.g.,* ``https://your-domain.com/api/v1/external_credentials/google/callback`` 

      Find it in the Zammad admin panel
      under **Channels > Google > Connect Google App > Your callback URL**.

5. **Connect your Google app in Zammad**

   Copy your new OAuth app’s credentials (**client ID** and **client secret**)
   into Zammad in the admin panel, under **Channels > Google > Connect Google App**.

   .. figure:: /images/channels/google/accounts/register-app/05-add-oauth-credentials.gif
      :alt: Screencast demo of entering Gmail OAuth credentials in Zammad admin panel
      :align: center

🍾 Congratulations! Now you’re ready to connect Gmail accounts to Zammad.

Troubleshooting
---------------

My OAuth credentials stopped working all of a sudden
   Did you recently reset your Google password?

   (Google invalidates all your OAuth tokens whenever you change your password.
   Generate a new one per Steps 4 and 5 above.)
