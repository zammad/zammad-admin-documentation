Facebook
========

It is possible to create a quick login for your helpdesk via Facebook. To do so,
you need to follow these steps:

Register Facebook App
---------------------

Visit https://developers.facebook.com/apps/ and click on "Add a new App"

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-start.png
   :alt: initial page

After that enter the app settings

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-create-app.png
   :alt: Create App

Navigate to "Settings" and fill in this information

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-app-settings2.png
   :alt: App Settings

Navigate to app review and Check "Make [appname] public?"

.. image:: /images/settings/security/third-party/facebook/developers.facebook.com-app-review.png
   :alt: App Review

Configure Zammad as Facebook App
--------------------------------

Navigate to *Settings > Security > Third-party Applications* and enter the App
ID and the App Secret. You can find this key in the dashboard of your Facebook
app.

.. image:: /images/settings/security/third-party/facebook/enable-authentication-via-facebook-in-zammad.png
   :alt: Zammad Configuration

Now you can link accounts via *Avatar > Profile > Link Accounts* or login via
Zammad login page.
