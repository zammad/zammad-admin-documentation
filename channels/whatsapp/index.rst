WhatsApp
========

.. toctree::
   :hidden:

   preparation

With the release of Zammad 6.3, you can now connect your Zammad with a
WhatsApp business account, allowing your customers to reach out to you through
WhatsApp.  🎉

If you already dived into this topic, you can head to the setup guide.
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

.. note:: **One phone number per app**
   If you want to use more than one phone number, you have to create a business
   app for each number you want to use.

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

Setup
-----

First of all, make sure to meet the prerequisites and to read the
limitations.

Then head over to Zammad's admin panel to add the WhatsApp channel under
Channels > WhatsApp and follow the steps below.

.. figure:: /images/channels/whatsapp/admin-panel-whatsapp-add-account.png
   :alt: Admin panel shows dialog for adding a WhatsApp channel

Generating API Key
^^^^^^^^^^^^^^^^^^

Add API Key to Zammad
^^^^^^^^^^^^^^^^^^^^^






