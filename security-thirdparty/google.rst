Google
======

Register Google app
-------------------

.. hint:: You currently need to activate the Google+ API in order to successfully authenticate with Zammad.

Visit https://console.cloud.google.com/projectcreate and create an project

Go to https://console.developers.google.com. Select Credentials from the menu and then Create Credentials

Create an OAUTH Client ID

In Zammad, 2.0.x, the configuration should look like:

Authorized JavaScript origins
https://zammad_host/

Authorized redirect URIs
https://zammad_host/auth/google_oauth2/callback

zammad_host has to be replaced with your Zammad FQDN

.. image:: /images/system/thirdparty/cloud.developers.google.com-create-oauth-id.png
    :alt: Google

Navigate to "Admin -> Security -> Third Party Applications" -> Google and enter the OAUTH Keys (Client ID & Client's Secret)

.. image:: /images/system/thirdparty/zammad_connect_google_thirdparty1.png
    :alt: Zammad

Now you can link accounts via "Avatar -> Profile -> Link Accounts" or login via Zammad login page.

