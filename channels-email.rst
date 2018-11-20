E-Mail
******

Accounts
----------
All system email addresses can be added in this menu item.
If you want to fetch emails via POP3 or IMAP you have to create a mail channel in here.

**If you're using a Office365 Mailbox, please ensure that it's a real usermailbox and not a shared mailbox!**

Just follow these steps:

- Click “New”
- Enter “Organization & Department Name”
- Enter “Email address”
- Enter “Password”
- Enter “Destination Group”

Zammad tries to detect the POP3, IMAP and SMTP server settings automatically. This should work most of the time. If it doesn’t, use the “Experts” button to configure it by yourself.

While creating a new e-mail account, it is possible to use the expert settings to determine whether the e-mails remain in the connected mailbox or whether they should be transferred completely into the Zammad in order to avoid duplicate processing of e-mails:

1. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-Experts.jpg

2. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-KeepMessages.jpg

Filters
-------
With Filters you can e.g. dispatch new Tickets into certain groups or set a certain priority for Tickets of an VIP customer. Different attributes of a filter can be combined with each other. Likewise, the following actions can be combined. It should be borne in mind that the combined attributes build on each other. If a filter is no longer needed, it can either be temporarily set inactive or deleted directly.


Signature
---------
You can create a separate signature for each group in Zammad. The individual signatures can be created and edited here:

.. image:: images/channels/Zammad_Helpdesk_-Signature.jpg

Afterwards, the existing (and active) signatures are available in the group editing mask:

.. image:: images/channels/Signature2.jpg

Each group can be assigned its own signature, but they can also all use the same signature. 

To individualize the signatures, it is possible to automatically loaded specific information into a signature via "Snippets". All information stored on the ticket, assigned customers or agents can be inserted. This makes it possible to design the signature individually. To load a list of possible snippets, press"::" (two colons) in the text field of the signature:

.. image:: images/channels/Signature3.jpg

Here is an example of a signature-setting and and how it might actually look like:

.. image:: images/channels/Signature4.jpg

Currently the snippets can only be loaded into already created tickets (status Zammad 2.5)


Additional E-Mail Setting
-------------------------

Since version Zammad 2.0 there are different ticket settings that can be made directly on the ticket. These settings are at the top of each ticket, to the right of the subject:

.. image:: images/manage/additional-email-settings.jpg

The following options can be set individually by each admin:

Note
     Default visibility: Is a note created in the standard system as internal or external? (this setting can be changed later on for each article)

E-mail subject
     If this setting is deactivated, the e-mail subject is regenerated based on the ticket subject. If you enter "yes", you can enter a separate subject for each article.

Email - full quote
     If this setting is activated, the content of all previous articles marked as external will be listed at the end of the new message.

Twitter initials
     Adding the sender's initials to the end of a tweet.


Advanced E-Mail-Configuration
-----------------------------

.. toctree::
   :maxdepth: 1

   channel-email/fetchmail
   channel-email/sendmail