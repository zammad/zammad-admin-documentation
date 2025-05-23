SMS
===

SMS integration primarily lets you create tickets, add articles and respond to
tickets via SMS. It is also possible to send notifications, e.g. to agents.

You can configure the SMS channel in the admin interface under
*Channels > SMS*.

.. note::
   - MessageBird and Twilio are currently the only supported providers to
     process incoming messages.
   - Our configuration example below is based on Twilio.
   - This guide assumes you have a Twilio account with an assigned number which
     is capable of sending and receiving SMS.

Configure Twilio
----------------

- In the Zammad settings, go to *Channels > SMS* and click on the ``New`` button
- After selecting Twilio as provider, you can find your webhook URL in the
  **Webhook** field. Copy the complete URL and switch back to the Twilio
  console.
- Go to the `Twilio console <https://console.twilio.com>`_ and log in.
- Go to the configuration of your number you want to use with Zammad, switch to
  the **Configure** tab and scroll to **Messaging Configuration**.
- Paste it for the "A message comes in" event in the **URL** field and make sure
  to select ``HTTP POST`` as HTTP option as in the following screenshot:

.. figure:: /images/channels/sms/sms_twilio_config.png
   :alt: Twilio number configuration
   :align: center

Make sure to save the changes and go on with the next step.

Configure SMS Account
---------------------

To set up the channel, your account ID and the authentication token are
required. You can find them in Twilio's
`welcome screen <https://console.twilio.com/?frameUrl=/console>`_ for example.

.. figure:: /images/channels/sms/sms_twilio1.png
   :alt: Twilio settings
   :align: center

Copy and paste them into the corresponding fields in the SMS config dialog:

.. figure:: /images/channels/sms/sms_channel_settings.png
   :alt: Channel settings SMS
   :align: center

Additionally, you have to enter a sender number and select a destination group
which receives the tickets of this channel. The sender number is what is show
as sender to the customer. You can even add a name here.

You can now ``Test`` your configuration by clicking the button. After
successfully testing your configuration, save it by clicking the ``Submit``
button.

Communication via SMS is now available in Zammad.

Configure SMS Notifications
---------------------------

It's also possible to use the SMS channel to send notifications from the system
(e.g. from trigger or automation). To set it up, click on the ``New`` button
in the **SMS Notification** section.

.. note::
   - Supported providers: Massenversand, MessageBird and Twilio
   - Please note that users must have a mobile phone number to get notified by
     SMS. If there is no phone number assigned, no SMS will be sent.

The setup is the same as above: Select your provider, provide the details
(Account SID, token) and enter a sender number or name. After that, you can
test your configuration. If successful, save your changes by clicking the
``Submit`` button.

.. figure:: /images/channels/sms/sms_notification.png
   :alt: Notification settings
   :align: center

Now it's possible to send SMS notifications via trigger or automation. The setup
is done the same way as setting up
:doc:`email notifications </channels/email/accounts/email-notification>`.

