Facebook
========

Introduction
------------

You can connect your Facebook account to Zammad, allowing you to
create tickets from posts and respond as comments.

Please note that you first and foremost should have a look at `Meta's
documentation <https://developers.facebook.com/docs/>`_ to get the most
recent and substantial information for the steps on their side.
Some steps on Meta's side are only mentioned here as prerequisites, as this
is outside the scope of this documentation.

.. tip:: The setup of the :doc:`WhatsApp channel </channels/whatsapp/index>` has
   similar prerequisites as the Facebook channel. So, if you managed to set one
   of them to up, you should have a look at the other one too. It could be a
   low hanging fruit! 🎉

Prerequisites
-------------

- `Meta business account <https://business.facebook.com/overview>`_
- `Meta developer account <https://developers.facebook.com/docs/development/register>`_
- Permission to create an app inside your developer account and needed
  information for the app (see `here <https://developers.facebook.com/docs/development/create-an-app>`_)

Creating an App
---------------

Create a new app
   Go to Meta's `app dashboard <https://developers.facebook.com/apps>`_ and create
   a new app.

   .. figure:: /images/channels/facebook/create-app.png
      :alt: Screenshot of Meta's app dashboard with highlighted "Create App" button

   If you have more than one business portfolio, select the desired one.

   In the "Use cases" tab, select "Other" and "Business" app type.

   .. figure:: /images/channels/facebook/app-use-case.png
      :alt: Screenshot of Meta's app dashboard with highlighted "Create App" button

   .. figure:: /images/channels/facebook/app-type.png
      :alt: Screenshot of app creation with highlighted app type

   In the next screen, provide a fitting app name, contact email address and
   select your business portfolio and finally click on "Create app".

   .. figure:: /images/channels/facebook/app-details.png
      :alt: Screenshot of app creation on "Details" tab

Add a product to your app
   After creating the app, you should see the app overview, where you
   can add a product to your app.

   Scroll down and select "Facebook Login for Business" by clicking on the
   "Set up" button.

   .. figure:: /images/channels/facebook/add-product-overview.png
      :alt: Screenshot of product overview with highlighted "Facebook Login for Business"

   In the following screen, go to "Valid OAuth Redirect URIs" and provide the
   URL of your Zammad instance, followed by
   ``/api/v1/external_credentials/facebook/callback``. You can copy this URL
   from Zammad if you click on the "Configure App" button in Zammad's Facebook
   channel admin screen.

   .. figure:: /images/channels/facebook/oauth-settings.png
      :alt: Screenshot of app settings with highlighted "OAuth Redirect URIs"

Continue with the next step on Zammad's side by connecting the Facebook with
Zammad.

Connect Facebook App in Zammad
------------------------------

If not already done, go to the Facebook channel section in the admin interface
in Zammad and click on "Configure App". This will open a dialog where you
have to provide the app ID as well as the app secret.

Head over to the Meta app dashboard and switch to "App settings" > "Basic".
Copy the "App ID" and the the "App secret" (after clicking on the "Show" button)
and paste both to Zammad in the corresponding fields.

.. figure:: /images/channels/facebook/app-settings-basic.png
   :alt: Screenshot showing basic settings section of app settings

.. figure:: /images/channels/facebook/zammad-connect-app.png
   :alt: Screenshot showing "Connect Facebook App" dialog in Zammad
   :scale: 60%
   :align: center

Confirm it by clicking on "Submit" and continue with the next step.

Add Facebook Account to Zammad
------------------------------

After you successfully connected your app with Zammad, you can now add
an account by clicking the "Add Account" button in Zammad. This redirects
you to Facebook and you will see an account selection dialog. Confirm by
clicking on "Continue as ..." or log in with another account.

.. figure:: /images/channels/facebook/account-login.png
   :alt: Screenshot showing Account selection from Meta
   :scale: 60%
   :align: center

In the next screen you can choose if you want to receive tickets from all pages
or just selected ones. Choose what fits your needs and confirm by clicking
"Continue".

.. figure:: /images/channels/facebook/pages-selection.png
   :alt: Screenshot showing pages selection from Meta
   :scale: 60%
   :align: center

Finally, you see an overview about the requested permission. Click on "Save"
and "Got it" in the next screen.

.. figure:: /images/channels/facebook/permission-overview.png
   :alt: Screenshot showing permission overview
   :scale: 60%
   :align: center

You are now redirected to Zammad where you can see a configuration dialog.
Select a group you want to handle the Facebook tickets and click on "Submit".

.. figure:: /images/channels/facebook/group-selection-dialog.png
   :alt: Screenshot showing group selection dialog in Zammad
   :scale: 75%
   :align: center

After that, you are technically ready to go. However, you have to do some
additional steps, which aren't covered in this documentation:

- Request advanced access for your app (see screenshot below)
- Request a business review if your business is not already reviewed
- Switch your app from development to live mode

.. figure:: /images/channels/facebook/request-permissions.png
   :alt: Screenshot showing permission and features screen in the Facebook developer portal
   :scale: 60%
   :align: center