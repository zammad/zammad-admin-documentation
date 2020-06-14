:orphan:

How to create an Google-App for the Google-Channel
**************************************************

In order to use Google Mails xAuth, you'll need to setup your very own oAuth-App.

.. hint:: 🤔 **What the heck is xAuth?**

   xAuth is an authentication method that works with Tokens. 
   The biggest advantage of using changing Tokens is that your application never knows 
   the password of your mail account. Especially when services are tied so tight together 
   like on Google - if you'd loose your Google accounts passwords, you wouldn't just loose 
   mail data.

   To use Zammad with a xAuth, you'll need an oAuth app. No further activation is required 
   for your account itself.

Step 1: Set up a project & app
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To begin, visit the `developer console <https://console.developers.google.com/>`_ page. 
You'll need your Google account to continue.

If you don't already have an project, create one (or select your fitting project).
Next click on **Enable APIs and services** on your projects dashboard.
Search for **Gmail API**, click on that entry and activate that API.

Now that you've activated the required API, continue to create a new **OAuth consent screen**. 

  .. note:: The OAuth consent screen is shown when trying to authenticate against your App. 
     The information you provide here will be used for that screen.

Follow the straight forward wizard and provide the requested information. 
Make sure to add the scope ``https://mail.google.com`` to your account - if you don't, Zammad 
can't fetch your emails for you.

   .. hint:: **G-Suite administrators**

      If you want an authentication app for your company only, G-Suite admins can choose to create 
      an app with user type *internal* instead of *external*. The steps after are exact the same.

.. figure:: /images/channels/google/configure-gmail-channel-app_api.gif
   :alt: Activating required API and creation of consent screen with required scopes
   :align: center

.. note:: **Note on app verifications**
   As especially the Gmail API potentially works with sensitive information, Google will show a warning 
   for every app that is not verified. Verification shouldn't be required for you, as you'll be using 
   this app internal (as admin) only.

   .. figure:: /images/channels/google/unverified-app-warning.png
      :alt: Warning Google provides on consent screens for unverified apps
      :align: center
      :scale: 60%

      Warning Google provides on consent screens for unverified apps

Step 2: Create credentials and provide to Zammad
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Communication with Google and your app requires credentials for Zammad. 
To create new ones, click on **➕ create credentials** and select **OAuth client ID**. 

On the next screen, we'll select **Web application** as Application type and provide a to you 
meaningful name. You'll also have to provide an authorised rediurect URI which can be found by 
clicking on **Connect Google App** dialogue within the google channel.

The format should look like similar to this: ``https://fqdn/api/v1/external_credentials/google/callback`` 
After pressing **Create**, Google will create your credentials and provide them in your browser session. 

  .. note:: You can view or reset the credentials at any time within the credential interface of Google.

Provide Zammad with the Client ID and Client secret and click on **Submit** if you're ready. 
You're now ready to :doc:`add gmail accounts <account-setup>` to Zammad.

.. figure:: /images/channels/google/create-app-credentials-and-provide-zammad.gif
   :alt: Creating credentials and saving them to Zammad
   :align: center
