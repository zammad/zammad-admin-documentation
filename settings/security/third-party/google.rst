Google
======

With some easy and fast steps, you can enable Zammad to authenticate your users
via Google.

Register a Google App
---------------------

First of all, we need to create a new project - you can skip this step if you
already have one.

.. hint::

   Use this link to create a new project:
   https://console.cloud.google.com/projectcreate

Now expand the menu, expand "APIs & Services" and select "Credentials".
Go to the tab "OAuth consent screen" first and ensure to fill in the requested
information - without doing so you can't create credentials!

.. image:: /images/settings/security/third-party/google/goole-oauth-consent-screen.png
   :alt: Creating a consent screen

After filling in and saving the consent screen information, you can go to the
"Credentials" tab and create new "OAuth client ID"-Credentials.

Fill in the necessary information as follows and replace ``zammad_host``
with your FQDN:

**Application type**
``[x] Web application``

**Authorized JavaScript origins**
``https://zammad_host/``

**Authorized redirect URIs**
``https://zammad_host/auth/google_oauth2/callback``

.. image:: /images/settings/security/third-party/google/google-create-oauth-Client-ID.png
   :alt: Adding a new OAuth client ID

After creating the credentials, go to your Zammad installation and navigate to
"Admin > Security > Third Party Applications" > Google.
Enter your Client ID and Client secret here.

.. image:: /images/settings/security/third-party/google/enable-authentication-via-google-in-zammad.png
   :alt: Zammad

After submitting, the login via Google can be used.
