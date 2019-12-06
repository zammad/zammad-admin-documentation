E-Mail
******

Accounts
----------
All system email addresses can be added in this menu item.
If you want to fetch emails via POP3 or IMAP you have to create a mail channel in here.

.. hint:: If you're using Office365- or Exchange-Mailboxes, please ensure that your Mailbox is not shared, but a normal mailbox account.

.. note:: **Special instructions for two-factor authentication (2FA):**

   If your email provider requires you to enter a one-time passcode (sent via SMS) when logging in, you’ll have to generate an **app password** to use with Zammad.

   .. toctree::
      :maxdepth: 1
     
      channel-email/2fa-gmail


.. _add-a-mail-account:

Add a mail account
^^^^^^^^^^^^^^^^^^

Just follow these steps:

- Click “New”
- Enter “Organization & Department Name”
- Enter “Email address”
- Enter “Password”
- Enter “Destination Group”

Zammad tries to detect the POP3, IMAP and SMTP server settings automatically. This should work most of the time. If it doesn’t work, use the “Experts” button to configure it yourself.

.. hint:: 🚯 By default, Zammad will **remove emails from your inbox after importing them**.

   If you want Zammad to leave the contents of your inbox untouched, use the *Keep Messages on Server* option in the *Experts* configuration view.

.. hint:: 📥 **If configuring Zammad to retrieve mail from a folder other than your inbox...**

   During the account setup process, Zammad will verify your credentials by sending you an email from your own account, and then monitoring the folder you selected to confirm that it was delivered successfully.

   Account setup will not succeed until this test message appears in the incoming mail folder you specified. If you don’t have filters set up to move Zammad’s test message there automatically, be sure to move it there yourself.

1. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-Experts.jpg

2. step:

.. image:: images/channels/Zammad_Helpdesk_-_channel-Email-KeepMessages.jpg


.. warning:: Be sure to **disable all auto-reply triggers** whenever adding a new email account. Zammad will begin importing emails shortly after the account has been added, and incoming messages will cause any active triggers to fire.

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
