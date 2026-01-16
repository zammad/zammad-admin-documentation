Channel Setup
=============

First of all, make sure to match the prerequisites and to read the
:doc:`limitations <limitations>`. If this is not the case, first go to the
:doc:`preparation page <preparation>` and come back after you followed the steps
there.

To set up the channel in Zammad, head over to the admin settings to add the
WhatsApp channel under *Channels > WhatsApp*, click on **Add Account** and
follow the steps below.

Step 1
------

Add your credentials of your account/app in Zammad. The dialog looks like this:

.. figure:: /images/channels/whatsapp/setup-step-1.png
   :alt: Step 1 of adding a WhatsApp account
   :align: center
   :scale: 80%

WhatsApp Business Account ID
   Configure your app on Meta's developer page and switch to **API Setup**.
   In case you have more than one phone number, make sure to
   select the right one before you copy the Business Account ID, because the ID
   is tied to the number.

   .. figure:: /images/channels/whatsapp/business-account-id.png
     :alt: App dashboard with business account ID
     :align: center

Access Token
   On the same **API Setup** page, you can generate a token. Follow the steps
   and confirm it so you finally see the token. Make sure to copy it directly
   because it gets displayed only once.

   .. figure:: /images/channels/whatsapp/config-use-case-api-setup.png
      :alt: App dashboard shows API configuration and highlighted token generation.
      :align: center

App Secret
   Enter your app secret. You can find it in your app configuration under
   *App settings > Basic*. Click the **Show** button to be able to copy it.

   .. figure:: /images/channels/whatsapp/app-secret.png
      :alt: App dashboard with app secret

After providing these three values, click on **Next** in Zammad. This performs
a check and fetches your assigned phone number. If everything is fine, the
dialog switches to the next step.

Step 2
------

The second step is about your phone number and messaging details:

.. figure:: /images/channels/whatsapp/setup-step-2.png
   :alt: Step 2 of adding a WhatsApp account
   :align: center
   :scale: 80%

Phone Number
   Choose the phone number you want to use for the channel. Zammad should have
   fetched the number which is assigned to your app. If not, your credentials
   from step 1 may be wrong.

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

Group
   Here you can define the :doc:`group </manage/groups/index>` in which the
   ticket should be created.

After you are configured everything, click on **Submit**. Now the
WhatsApp channel is technically created on Zammad side. However, you need to
take another important step to make it work.

Step 3
------

This third step is about telling WhatsApp where, how and what data to send.

.. warning:: If you don't follow the instructions properly, your
   account shows up but you aren't able to receive messages (because
   Meta/WhatsApp doesn't know where to send them)!

.. figure:: /images/channels/whatsapp/setup-step-3.png
   :alt: Step 3 of adding a WhatsApp account
   :align: center
   :width: 40%

Go to *Use cases > Configuration* and copy/paste the values from
**Callback URL** as well as **Verify Token** from Zammad. Confirm with
**Verify and save**.

.. figure:: /images/channels/whatsapp/app-dashboard-configuration-webhook.png
   :alt: Configuration section in WhatsApp app dashboard

Scroll down and switch on the toggle for ``messages`` under **Webhook fields**.

.. figure:: /images/channels/whatsapp/select-webhook-fields.png
   :alt: Select "message" as webhook field
   :align: center

After finishing this step, you can click on the **Finish** button in Zammad
and you should now be ready to receive tickets from your WhatsApp channel!
