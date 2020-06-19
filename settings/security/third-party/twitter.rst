Twitter
=======

It is possible to create a quick login for your helpdesk via Twitter To do so, you need to follow these steps:

Register Twitter app
--------------------

Go to https://dev.twitter.com/apps and login with your account.

.. image:: /images/settings/security/third-party/twitter/apps.twitter.com_start.png
   :alt: inital page

Click on "Create App"


.. image:: /images/settings/security/third-party/twitter/apps.twitter.com_new_app_screen.png
   :alt: new app page

Enter app settings. As "Callback URL" you need to enter "https://zammad_host/api/v1/external_credentials/twitter/callback"

After the app has been created, update the application icon and organization attributes.

.. image:: /images/settings/security/third-party/twitter/apps.twitter.com_set_permissions.png
   :alt: set permissions to receive and send direct messages

Next we need to set ``read, write and access direct messages permissions`` for the app.

.. image:: /images/settings/security/third-party/twitter/apps.twitter.com_get_credentials.png
   :alt: click on Keys & Access Token, note them

Go to "Keys and Access Token" tab and note the "Consumer Key" and "Consumer Secret".

Configure Zammad as Twitter app
-------------------------------

Go to "Admin -> Security -> Twitter -> Third Party Applications -> Twitter Section"

.. image:: /images/settings/security/third-party/twitter/zammad_connect_twitter_thirdparty1.png
   :alt: Admin -> Security -> Third Party Applications

Fill in the "Twitter Key" and the "Twitter Secret" and click the "Submit" button.


Now you can link accounts via "Avatar -> Profile -> Link Accounts" or login via Zammad login page.
