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


Further useful settings
------------------------

Filters
+++++++

In some cases you might want to re-route or even ignore messages based on their meta information.
In these cases most of the times a Trigger is not optimal, because Zammad checks if a Trigger needs to be executed on every ticket update or creation. 
So in some cases you only want to run specific things during Ticket creation (if it comes via E-Mail) - for this, you might find :ref:`postmaster_filters` interesting.


Signatures
++++++++++

Sending a mail out without signature? Nah! Learn more about :ref:`signatures`.


- Automatically tag and close spam tickets that have been marked as spam by an external spam filter (e.g. SpamAssassin):


It should be borne in mind that the combined attributes build on each other. If a filter is no longer needed, it can either be temporarily set inactive or deleted directly.


Additional E-Mail Setting
-------------------------

Some E-Mail related settings can be changed within :ref:`settings_in_tickets`.


Advanced E-Mail-Configuration
-----------------------------

The following options need console access to your Server that hosts Zammad.

.. toctree::
   :maxdepth: 1

   channel-email/fetchmail
   channel-email/sendmail
