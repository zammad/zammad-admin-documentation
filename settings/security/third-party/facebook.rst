Facebook
========

It is possible to create a quick login for your helpdesk via Facebook To do so, you need to follow these steps:


Register Facebook app
---------------------

Visit [https://developers.facebook.com/apps/] and click on "Add a new App"

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-start.png
   :alt: initial page


After that enter the app settings

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-create-app.png
   :alt: Create App

Navigate to "Settings" and fill in this infromation

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-app-settings2.png
   :alt: App Settings

Navigate to app review and Check "Make [appname] public?"

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-app-review.png
   :alt: App Review



Configure Zammad as Facebook app
--------------------------------

Navigate to "Admin -> Security -> Third Party Applications" and enter the App ID and the App Secret. You can find this Key in the Dashbard of your Facebok app

.. image:: /images/settings/security/third-party/facebook/zammad_connect_facebook_thirdparty1.png
   :alt: Zammad Configuration


Now you can link accounts via "Avatar -> Profile -> Link Accounts" or login via Zammad login page.
