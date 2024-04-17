WhatsApp
========

.. toctree::
   :hidden:

   preparation

With the release of Zammad 6.3, you can now connect your Zammad with a
WhatsApp Business account, allowing your customers to reach out to you through
WhatsApp. 🎉

If you already dived deep into this topic, you can head to the setup guide.
If not, we strongly encourage you to read the prerequisites and limitations
of this channel carefully and to follow our tutorial for preparing your
setup.

We tried to keep it clear and created a separate sub-page for the necessary
steps on Meta/WhatsApp side.

.. warning::
   Please be aware that the usage of **WhatsApp Cloud API** is mandatory to
   connect WhatsApp to Zammad. You won't be able
   to connect to WhatsApp in Zammad if you just use the WhatsApp Business *App*.
   Have a look
   `here <https://developers.facebook.com/docs/whatsapp/cloud-api>`_
   for further information about the Cloud API.

   There may be additional costs for you from Meta/WhatsApp side. 1000 service
   conversations per month are free. However, you should have a look at their
   `pricing page <https://developers.facebook.com/docs/whatsapp/pricing>`_ to
   be safe from surprises.

   Be aware that if you go through the whole process, it is very time consuming.
   You should have some time to follow our preparation guide.

.. _prerequisites:

Prerequisites
-------------

You can find a guide through the required steps on our
:doc:`sub-page <preparation>`.
It covers the following steps:

- Create a Meta Business account
- Create a Meta Developer account
- Create a Meta Developer app
- Add WhatsApp Product to your app
- Create a System User
- Configure your WhatsApp Business platform
- Assign an unused Phone Number

Additionally, you have to meet the following requirements:

- Make sure your system is accessible from the internet because WhatsApp sends
  messages via webhooks to your system.
- Make sure to have properly setup your
  :doc:`FQDN in Settings > System </settings/system/base>` (for the callback
  URL Meta will use to deliver new messages).

Limitations
-----------

There are a number of limitations for this channel. Read them carefully.

24-hour customer service window
   If a customer gets in touch with you via WhatsApp, a 24 hour window is
   opened. Within this time window you can freely answer the question of the
   customer. If the customer isn't replying, the service window will be
   automatically closed after 24 hours. You will not be able to communicate with
   this customer via WhatsApp due to their privacy policy and until a fresh
   reply is received from your customer after the service window expires.

   In case the ticket cannot be closed yet and in order to facilitate an ongoing
   conversation, automatic reminders will be sent to the customer asking them to
   reply and keep the service window open. They are sent 23 hours after a
   message is received, and can be optionally deactivated in the channel
   configuration.

Customer-initiated communication only
   The WhatsApp channel only supports customer initiated communication.
   For business-initiated communication, it would be necessary to create a
   message template which has to be verified by Meta first which is currently
   not supported by Zammad.

Supported media types
   Currently text messages, documents, images, audio, videos and stickers
   are supported.

One attachment per article
   Currently, it's only possible to attach one file per outgoing message.
   It has to be one of the supported media types (see above).

File size for attachments
   There are different maximum file sizes for different media types. To pick
   the most important ones:

   - audio: 16 MB
   - document: 100 MB
   - image: 5 MB
   - video: 16 MB
   - sticker: 100/500 KB (static/animated)

   To read more in detail, have a look at their `documentation of supported
   media types <https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#supported-media-types>`_.

One phone number per app
   If you want to use more than one phone number, you have to create a business
   app for each number you want to use and add it as a separate channel in
   Zammad.

Setup
-----

First of all, make sure to match the prerequisites and to read the limitations
above. If you did not setup your Meta Developer account, Meta Business account
and Meta Developer app, first go to our :doc:`preparation page <preparation>`
and come back here after finishing it.

Then head over to Zammad's admin panel to add the WhatsApp channel under
"Channels > WhatsApp > Add Account" and follow the steps which are described
below.

Step 1
^^^^^^

In the first step you have to provide credentials of your account/app:

.. figure:: /images/channels/whatsapp/setup-step-1.png
   :alt: Step 1 of adding a WhatsApp account
   :align: center
   :scale: 80%

WhatsApp Business Account ID
   Enter your WhatsApp Business Account ID. You can find it in your app
   under "WhatsApp > API Setup":

   .. figure:: /images/channels/whatsapp/business-account-id.png
     :alt: App dashboard with business account ID
     :align: center

Access Token
   Enter the access token from your app. You can create it in the
   `business settings <https://business.facebook.com/settings/system-users>`_
   under "System Users". The system user has to have "Admin access". Be aware
   that you have to copy the token, it is just displayed once!

   .. figure:: /images/channels/whatsapp/created-system-user.png
      :alt: Get your app token from the system user
      :align: center


   Choose your created app, an expiration date of the token (we recommend
   "Never") and the permissions ``whatsapp_business_management`` and
   ``whatsapp_business_messaging``:

   .. figure:: /images/channels/whatsapp/create-app-token.png
      :alt: Create your app token
      :align: center
      :scale: 60%

App Secret
   Enter your app secret. You can find it in your
   `app dashboard <https://developers.facebook.com/apps/>`_ under "App settings
   > Basic" by clicking on the "Show" button:

   .. figure:: /images/channels/whatsapp/app-secret.png
      :alt: App dashboard with app secret
      :scale: 60%


After entering your data, click on **Next**. In the background, Zammad tries
to fetch your assigned phone number, which you can select in the next step.

Step 2
^^^^^^

The second step is about your phone number and messaging details:

.. figure:: /images/channels/whatsapp/setup-step-2.png
   :alt: Step 2 of adding a WhatsApp account
   :align: center
   :scale: 80%

Phone Number
   Choose the phone number you want to use for the channel. Zammad should have
   fetched the numbers which are assigned to your business app. If not, your
   credentials from step 1 may be wrong.

Welcome Message
   Here you can define an optional text message which is automatically sent to
   your customers when the initial message is received.

Automatic Reminders
   Here you can control whether the automatic reminders about the customer
   service window are sent to the customer when the window is about to expire.

   For more information on 24-hour customer service windows, take a look at
   Meta's
   `conversation description <https://developers.facebook.com/docs/whatsapp/pricing#customer-service-windows>`_
   under "Customer Service Windows".

Target Group
   Here you can define the :doc:`group </manage/groups/index>` in which the
   ticket should be created.

After entering your data, click on **Submit**. After this step, the WhatsApp
channel is technically created. However, there is another important step to
take.

Step 3
^^^^^^

This third step is about telling WhatsApp where they should send their data:

.. warning:: If you don't follow the instructions properly, your
   account shows up but you aren't able to receive messages (because
   Meta/WhatsApp doesn't know where to send them)!

.. figure:: /images/channels/whatsapp/setup-step-3.png
   :alt: Step 3 of adding a WhatsApp account
   :align: center
   :scale: 80%

Callback URL
   Click on the copy icon on the right side and head over to your WhatsApp
   business app. Enter the copied URL in the corresponding field in your app.
   You can find it in your
   `"App Dashboard" <https://developers.facebook.com/apps/>`_ under
   "WhatsApp > Configuration > Webhook > Callback URL" (see screenshot below).
   Paste it there.

Verify Token
   Copy this string too. Enter it directly below the pasted Callback URL.

   .. figure:: /images/channels/whatsapp/app-dashboard-configuration-webhook.png
      :alt: Configuration section in WhatsApp app dashboard

   After entering your data, click on **Verify and save** which triggers a
   check if your system is accessible and configured correctly.

   .. figure:: /images/channels/whatsapp/verify-webhook.png
      :alt: Webhook dialog
      :align: center

Define webhook fields
   Finally, go to the field below in the app dashboard and select "Manage" in
   the "Webhook fields" section. This is needed that you'll get the message as
   content:

   .. figure:: /images/channels/whatsapp/webhook-fields.png
      :alt: Select webhook fields in app dashboard

   Subscribe to "messages" by clicking in the checkbox:

   .. figure:: /images/channels/whatsapp/select-webhook-fields.png
      :alt: Select "message" as webhook field
      :align: center
      :scale: 70%

   You should now see the selected "messages" under the "Webhook fields" caption
   as in the first screenshot.

After finishing this step, you can click on the **Finish** button in Zammad
and you should now be ready to receive tickets from your WhatsApp channel!
