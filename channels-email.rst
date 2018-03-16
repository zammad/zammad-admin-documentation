E-Mail
******

Accounts
----------
All system email addresses can be added in this menu item.
If you want to fetch emails via POP3 or IMAP you have to create a mail channel in here.

Just follow these steps:

- Click “New”
- Enter “Organization & Department Name”
- Enter “Email address”
- Enter “Password”
- Enter “Destination Group”

Zammad trys to detect the POP3, IMAP and SMTP server settings automatically. This should work most of the time. If it doesn’t, use the “Experts” button to configure it by yourself.

While creating a new e-mail account, it is possible to use the expert settings to determine whether the e-mails remain in the connected mailbox or whether they should be transferred completely into the Zammad in order to avoid duplicate processing of e-mails:

1. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-Experts.jpg

2. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-KeepMessages.jpg

Filter
----------
With Filters you can e.g. dispatch new Tickets into certain groups or set a certain priority for Tickets of an VIP customer. Different attributes of a filter can be combined with each other. Likewise, the following actions can be combined. It should be borne in mind that the combined attributes build on each other. If a filter is no longer needed, it can either be temporarily set inactive or deleted directly.


Additional E-Mail Setting
=====================
Since version Zammad 2.0 there are different ticket settings that can be made directly on the ticket. These settings are at the top of each ticket, to the right of the subject:

.. image:: images/channels/additional-email-settings.jpf

The following options can be set individually for each admin:

Note
     Default visibility: Is a note created in the standard system as internal or external? (this setting can be changed later on for each article)

E-mail subject
     If this setting is deactivated, the e-mail subject is regenerated based on the ticket subject. If you enter "yes", you can enter a separate subject for each article.

Email - full quote
     If this setting is activated, the content of all previous articles marked as external will be listed at the end of the new message.

Twitter initials
     Adding the sender's initials to the end of a tweet.
