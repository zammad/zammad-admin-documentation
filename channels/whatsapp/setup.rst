Setup
=====

First of all, make sure to match the prerequisites and to read the limitations
above. If you did not setup your Meta Developer account, Meta Business account
and Meta Developer app, first go to our :doc:`preparation page <preparation>`
and come back here after finishing it.

Then head over to Zammad's admin panel to add the WhatsApp channel under
"Channels > WhatsApp > Add Account" and follow the steps which are described
below.

Step 1
------

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
------

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

Reminder Message
   If you want to use a custom reminder message before the 24-hour customer
   service window closes, you can insert it here. Leave it empty to stay with
   the default message.

Target Group
   Here you can define the :doc:`group </manage/groups/index>` in which the
   ticket should be created.

After entering your data, click on **Submit**. After this step, the WhatsApp
channel is technically created. However, there is another important step to
take.

Step 3
------

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
