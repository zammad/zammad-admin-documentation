E-Mail
******

Accounts
----------
All system email addresses can be added in this menu item.
If you want to fetch emails via POP3 or IMAP you have to create a mail channel in here.

.. hint:: If you're using Office365- or Exchange-Mailboxes, please ensure that your Mailbox is not shared, but a normal mailbox account.

Just follow these steps:

- Click “New”
- Enter “Organization & Department Name”
- Enter “Email address”
- Enter “Password”
- Enter “Destination Group”

Zammad tries to detect the POP3, IMAP and SMTP server settings automatically. This should work most of the time. If it doesn’t work, use the “Experts” button to configure it yourself.

While creating a new e-mail account, it is possible to use the expert settings to determine whether the e-mails remain in the connected mailbox or whether they should be transferred completely into the Zammad in order to avoid duplicate processing of e-mails.

.. hint:: If you choose to fetch mails from another directory than your INBOX, ensure that Mails for Zammad are moved to that directory. 
  If you don't want this to happen automatically, at least do this manually during Zammads mail check (during channel creation as shown below).
  If Zammad can't find it's Test-E-Mails, it suspects there's an issue with your configuration which will deny you to finish the configuration.


1. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-Experts.jpg

2. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-KeepMessages.jpg


.. Note:: As soon as the email account is integrated and emails are imported, any notifications set via the trigger will be sent. It is therefore essential to check in advance that triggers with automatically generated messages are deactivated.


Further mail specific settings
------------------------------

Below you can find further settings that affect the way Zammad handles Email communication.

.. toctree::
   :maxdepth: 1

   channel-email/postmaster-filters
   channel-email/signatures
   channel-email/email_settings
   ticket/settings-in-tickets


Advanced E-Mail-Configuration
-----------------------------

The following options need console access to your Server that hosts Zammad.

.. toctree::
   :maxdepth: 1

   channel-email/fetchmail
   channel-email/sendmail
