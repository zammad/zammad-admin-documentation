Preparation
===========

Here you can find instructions for the required steps you need to take before
you can use the WhatsApp channel in Zammad.
Please note that these steps may change in the future, depending on changes on
Meta's side. You should also consider to read their docs if you have issues:

- `WhatsApp Cloud API <https://developers.facebook.com/docs/whatsapp/cloud-api>`_
- `WhatsApp Business Platform <https://developers.facebook.com/docs/whatsapp>`_

Prerequisites
-------------

- Make sure your system is accessible from the internet because WhatsApp sends
  messages via webhooks to your system.
- Make sure to have properly set up your
  :doc:`FQDN in Settings > System </settings/system/base>` (for the callback
  URL Meta will use to deliver new messages).

.. _create-meta-business-account:

Create a Meta Business Account
------------------------------

If you don't already have a business account, visit
https://business.facebook.com/overview and click on "Create an account".
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
https://developers.facebook.com/apps/. Click on **Create App** and follow the
steps below.

.. figure:: /images/channels/whatsapp/meta-create-app.png
    :alt: Meta developer app overview
    :align: center

Enter a fitting name and provide a contact email address for your app:

.. figure:: /images/channels/whatsapp/meta-create-app-step1.png
    :alt: Meta app creation step 1
    :align: center

Choose **Connect with customers through WhatsApp** as use case:

.. figure:: /images/channels/whatsapp/meta-create-app-step2.png
    :alt: Meta app creation step 2
    :align: center

Choose a business portfolio, in case you have more than one:

.. figure:: /images/channels/whatsapp/meta-create-app-step3.png
    :alt: Meta app creation step 3
    :align: center

Check if additional steps are required and follow them. In case everything is
fine, you should see a screen like this:

.. figure:: /images/channels/whatsapp/meta-create-app-step4.png
    :alt: Meta app creation step 4
    :align: center

After that, you will see a summary of your configuration. Check if everything is
correct and go back to the dashboard via the button:

.. figure:: /images/channels/whatsapp/meta-create-app-step5.png
    :alt: Meta app creation step 5
    :align: center


Assign a Phone Number
---------------------

In the app dashboard, first re-open the configuration:

.. figure:: /images/channels/whatsapp/meta-app-dashboard.png
    :alt: Meta app dashboard configuration option.
    :align: center

Now go to **API Setup** and choose or add a phone number.

.. note::
    - This number may not be used in a WhatsApp app already, not even in a
      WhatsApp Business app.
    - In case you want to test it with a provided test number, additional
      steps might be required (see
      `Reddit thread <https://www.reddit.com/r/WhatsappBusinessAPI/comments/1oa4ftw/comment/nk7sxtq/>`_).

.. figure:: /images/channels/whatsapp/add-phone-number.png
    :align: center
    :alt: Adding a new phone number to your app

Click through the steps adding your information. You have to verify your number
by receiving a security code and repeating it when asked.
After you successfully performed these steps, you are now good to go with
the :doc:`channel setup on Zammad side <setup>`.
