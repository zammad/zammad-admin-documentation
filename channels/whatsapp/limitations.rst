Limitations
===========

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
