Microsoft / Office365
=====================

It is possible to create a quick login for your helpdesk via Microsoft (also Office 365) To do so, you need to follow these steps:

Register Microsoft app
----------------------

Go to https://identity.microsoft.com (or https://apps.dev.microsoft.com) and login with your account.


.. image:: /images/settings/security/third-party/microsoft/identity.microsoft.com_new_app_screen.png
   :alt: inital page

Click on "Create App"


.. image:: /images/settings/security/third-party/microsoft/identity.microsoft.com_new_app_screen2.png
   :alt: new app page

Enter app settings. Then a new plattform and select "web".


.. image:: /images/settings/security/third-party/microsoft/identity.microsoft.com_new_app_screen_add_platform.png
   :alt: new plattform


.. image:: /images/settings/security/third-party/microsoft/identity.microsoft.com_new_app_screen_add_platform_url.png
   :alt: set callack/redirect url

As "Redirect URL" you need to enter "https://yourdomain.zammad.com/auth/microsoft_office365/callback"

After the app has been created, update the application icon and organization attributes.

Click on "Generate New Password" button and note the "Password" and "Application Id".

Configure Zammad as Microsoft app
---------------------------------

Go to "Admin -> Security -> Twitter -> Third Party Applications -> Office 365 Section"

.. image:: /images/settings/security/third-party/microsoft/zammad_connect_microsoft_thirdparty1.png
   :alt: Admin -> Security -> Third Party Applications

Fill in the "APP ID" and the "APP SECRET" and click the "Submit" button.

Now you can link accounts via "Avatar -> Profile -> Link Accounts" or login via Zammad login page.
