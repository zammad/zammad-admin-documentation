WhatsApp
========

.. toctree::
   :hidden:

   preparation

With the release of Zammad 6.3, you can now connect your Zammad with a
WhatsApp business account, allowing your customers to reach out to you through
WhatsApp.  🎉

If you already dived deep into this topic, you can head to the setup guide.
If not, we strongly encourage you to read the prerequisites and limitations
of this channel carefully.

To keep it clear, we created separate a sub-page for the necessary steps on
Meta's/WhatsApp's side.

Please be aware that the usage of **WhatsApp's cloud API** is mandatory to
connect WhatsApp to Zammad. You won't be able
to connect to WhatsApp in Zammad if you just use the WhatsApp Business *App*.
Have a look
`here <https://developers.facebook.com/docs/whatsapp/cloud-api?locale=en_US>`_
for further information about the Cloud API.

Prerequisites
-------------

You can find a guide for the required steps on our
:doc:`sub-page <preparation>`.
The following links are referring to the corresponding section on the sub-page
if you want to go to a specific step directly.

- Create a Meta developer account
- Create a Meta developer app
- Verify your Meta business account
- Add business manager contact information
- Create a WhatsApp Business app
- Assign a not yet used phone number (may not be used in a WhatsApp app already)
- Make sure your system is accessible from the internet because WhatsApp sends
  messages via webhooks to your system.
- Make sure to have properly setup your
  :doc:`FQDN in Settings > System </settings/system/base>`.


Limitations
-----------

There are a number of limitations which are defined by Meta/WhatsApp. We only
mention those that seem relevant to us. For further information, please have
a look at their documentation.

24 hours communication time window
   If a customer gets in touch with you via WhatsApp, a 24 hour window is
   opened. In this time window, you can (and should) answer the question of
   the customer. If the customer isn't replying, the conversation ends
   after 24 hours. You can't communicate with this customer via WhatsApp due to
   their policy.

   If the ticket can not be closed and to keep the conversation ongoing, we
   suggest to create a dedicated trigger for the WhatsApp channel. For example
   you could send a auto-generated message to the customer after 20 hours and
   ask to reply to your message to keep the conversation open.

Customer initiated communication only
   The WhatsApp channel only supports customer initiated communication.
   For business initiated communication, it would be necessary to create a
   message template which has to be checked by Meta first.

Supported media types
   Currently, only text messages, documents and videos are supported.

One phone number per app
   If you want to use more than one phone number, you have to create a business
   app for each number you want to use and add it as a separate channel in
   Zammad.

Setup
-----

First of all, make sure to meet the prerequisites and to read the
limitations.

Then head over to Zammad's admin panel to add the WhatsApp channel under
Channels > WhatsApp > Add Account and follow the steps which are described
below.

Step 1
^^^^^^

In the first step you have to provide credentials of your account/app:

.. figure:: /images/channels/whatsapp/setup-step-1.png
   :alt: Step 1 of adding a WhatsApp account
   :align: center
   :scale: 80%

WhatsApp Business Account ID
   Enter your WhatsApp Business Account ID. You can find it here XXXXXXXX.

Access Token
   Enter the access token from your app. You can find it here XXXXXXX.

App Secret
   Enter your app secret. You can find it in your WhatsApp business app
   settings.

After entering your data, click on next. In the background, Zammad tries
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
   Here you can define a message which is displayed to your customers
   when they are writing to you.

Goodbye Message
   Here you can define a message which is displayed when the conversation ends.

Target Group
   Here you can define the :doc:`group </manage/groups/index>` in which the
   ticket should be created.

After entering your data, click on submit. After this step, the WhatsApp channel
is technically created. However, there is another important step to take.

Step 3
^^^^^^

This third step is about telling WhatsApp, where they should send their data:

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
   You can find it in your App Dashboard under WhatsApp > Configuration >
   Webhook > Callback URL (see screenshot below). Paste it there.

Verify Token
   Copy this string via the button on the right side too. Enter it directly
   below the pasted Callback URL.

.. figure:: /images/channels/whatsapp/app-dashboard-configuration-webhook.png
   :alt: Configuration section in WhatsApp app dashboard

After finishing this step, you can click on the Finish button and you should
now be ready to receive Tickets from your WhatsApp channel!


