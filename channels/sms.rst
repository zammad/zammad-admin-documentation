SMS
***

SMS integration primarily lets you create tickets, add articles and respond to
tickets via SMS. It is also possible to send notifications, e.g. to agents.

You can configure SMS notifications in the channels section in the admin
interface at Channels -> SMS. 

Configure incoming SMS
----------------------

To process incoming SMS, message_bird and twilio are currently the only
supported providers. Setting up the channel requires your account SID and an
authentification token. You can find an example for the twilio configuration in
the following screenshots.

.. figure:: /images/channels/sms/sms_twilio1.png
   :alt: Twilio settings
   :align: center


Enter these in the Zammad admin interface at SMS accounts. 

.. figure:: /images/channels/sms/sms_channel_settings.png
   :alt: Channel settings SMS
   :align: center


Further options are to enter a sender number and selecting a destination group.
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
trigger or automation. Setup is done in the admin interface at Channels > SMS

As service providers, Massenversand, message_bird and twilio are supported.

Please specify the accound ID and a token here. Furthermore it is possible to
enter a phone number or name to be shown to the recipient. 

.. figure:: /images/channels/sms/sms_notification.png
   :alt: Notification settings
   :align: center

You can either save your configuration directly, or let your settings be 
checked by running a test in advance.

Now it's possible to send SMS notifications via trigger or automation. Setup
is analogue to setting up email notifications. Please note that user objects
belonging to the person you want to notify must contain a mobile phone number as
an attribute. If there is no phone number registered, no SMS is sent. 
