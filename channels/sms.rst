SMS
***

SMS integration primarily lets you create tickets, add articles and respond to
tickets via SMS. It is also possible to send notifications, e.g. to agents.

You can configure SMS notifications in the admin interface under
**Channels > SMS**.

Configure incoming SMS
----------------------

MessageBird and Twilio are currently the only supported providers to process
incoming messages. Setting up the channel requires your account SID and an
authentication token. You can find an example for the Twilio configuration in
the following screenshots.

.. figure:: /images/channels/sms/sms_twilio1.png
   :alt: Twilio settings
   :align: center


Enter these in the Zammad admin interface at SMS accounts.

.. figure:: /images/channels/sms/sms_channel_settings.png
   :alt: Channel settings SMS
   :align: center


Further options are to enter a sender number and select a destination group.
The sender number is published when sending SMS from the ticket. Names
can also be entered. "Destination group" is relevant for incoming SMS
that can't be assigned to a specific ticket.

After setting it all up, an SMS article could look like this in the ticket view:

.. figure:: /images/channels/sms/sms_ticket_creation.png
   :alt: Channel settings SMS
   :align: center

Communication via SMS is available directly from inside Zammad.

Notifications via SMS
---------------------

It's also possible to receive notifications via SMS. These are messages sent by
trigger or automation. Setup is done in the admin interface at
**Channels > SMS**.

As service providers, Massenversand, MessageBird and Twilio are supported.

Please specify the account ID and a token here. Furthermore it is possible to
enter a phone number or name to be shown to the recipient.

.. figure:: /images/channels/sms/sms_notification.png
   :alt: Notification settings
   :align: center

You can either save your configuration directly, or let your settings be
checked by running a test in advance.

Now it's possible to send SMS notifications via trigger or automation. The setup
is done the same way as setting up
:doc:`email notifications </channels/email/accounts/email-notification>`.
Please note that the user object belonging to the person you want to notify must
contain a mobile phone number as an attribute. If there is no phone number
registered, no SMS will be sent.
