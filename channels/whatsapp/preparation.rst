Preparation
===========

Here you can find instructions for the required steps you need to take before
you can use the WhatsApp channel in Zammad.

Please note that these steps may change in the future, depending on changes on
Meta's side. You should also consider to read their docs if you have issues:

- `WhatsApp Cloud API <https://developers.facebook.com/docs/whatsapp/cloud-api>`_
- `WhatsApp Business Platform <https://developers.facebook.com/docs/whatsapp>`_

.. _create-meta-business-account:

Create a Meta Business Account
------------------------------

If you don't already have a business account, visit
https://business.facebook.com/overview and click on "Create an account":

.. figure:: /images/channels/whatsapp/create-meta-business-account.png
    :alt: Meta business account starting page
    :align: center

Have a look at
`Meta's documentation <https://www.facebook.com/business/help/1710077379203657?id=180505742745347>`_
if you have problems.


Create a Meta Developer Account
-------------------------------

If you don't have a developer account already, go to
https://developers.facebook.com/docs/development/register and register a new
account.

Create a Meta Developer App
---------------------------

While already logged in with your developer account, go to
https://developers.facebook.com/apps/.

You will see a screen like the following screenshot. Click on "Create App" and
follow the steps below.

.. figure:: /images/channels/whatsapp/meta-create-app.png
    :alt: Meta developer app overview
    :align: center

Choose "Other" when you are asked what you want to do with your app:

.. figure:: /images/channels/whatsapp/meta-create-app-step1.png
    :alt: Meta app creation step 1
    :align: center
    :scale: 50%

Choose "Business" as app type:

.. figure:: /images/channels/whatsapp/meta-create-app-step2.png
    :alt: Meta app creation step 2
    :align: center
    :scale: 50%

Enter a name for the app, a contact email address and a business account.
Please note that the name may not contain specific product names from Meta, as
you can see in the screenshot below.

.. figure:: /images/channels/whatsapp/meta-create-app-step3.png
    :alt: Meta app creation step 2
    :align: center
    :scale: 50%

If you already have a business account, you should assign it. In this step, this
is optional, but later it is required anyway. Click on "Create App" to finish
this step.

Add WhatsApp  Product to Your App
---------------------------------

Now you have to add a product to your app. In our case, this is WhatsApp.
Search for it and click on "Set up":

.. figure:: /images/channels/whatsapp/meta-add-product.png
    :alt: Add a product to your app
    :align: center

In the next step, you have to add a "Meta Business Account". This guide assumes
that you already have one. If not, go to the
:ref:`instructions above <create-meta-business-account>` and create one.

.. figure:: /images/channels/whatsapp/meta-add-product-step1.png
    :alt: Add the product WhatsApp to your app
    :align: center
    :scale: 70%

Create a System User
--------------------
Go to `Users > System users <https://business.facebook.com/settings/system-users/>`_
and add a system user. This is required to get a permanent API token. Make sure
the user has admin permissions.

After creating a system user, you should see a screen similar to the one below.
Here you can assign assets and (re-)generate an access token.

For now we just assign assets to this user. The creation of the token is
covered in the :doc:`Zammad setup section </channels/whatsapp/index>` because
the token is only displayed once and then you can copy and paste it directly.

.. figure:: /images/channels/whatsapp/created-system-user.png
    :alt: System user overview
    :align: center

You now have to assign assets to this user. Choose your app
and "Manage app" permissions:

.. figure:: /images/channels/whatsapp/system-user-assign-assets.png
    :alt: Assign assets to system user
    :align: center
    :scale: 70%

Configure Your WhatsApp Business Platform
-----------------------------------------

After adding a "Meta Business Account" to your app, the "App Dashboard" is
presented to you. Click on "Start using the API":

.. figure:: /images/channels/whatsapp/meta-app-dashboard-overview.png
    :alt: App dashboard overview
    :align: center


Assign an Unused Phone Number
----------------------------------

Please note: this number may not be used in a WhatsApp app already!

.. figure:: /images/channels/whatsapp/add-phone-number.png
    :align: center
    :alt: Adding a new phone number to your app

Click through the steps adding your information. You have to verify your number
by receiving a security code and repeating it when asked.

After you successfully performed these steps, you are now good to go with
the :doc:`setup on Zammad side <index>`. 🎉

We promise it will become easier! 🤓