Dispatch Messages With Sendmail
*******************************

.. warning::

   For the initial setup of this you need administrative rights on the
   Zammad machine (console).

If you try to configure **only** an outgoing email account
(as in, you do not wish to set up an incoming IMAP/POP3 account at all),
you will find that it’s simply not possible via the email channel setup wizard.
Instead, you will have to create it via the CLI.

(The wizard is designed to provide an idiot-proof email configuration process
for the average, non-technical user,
so certain advanced options and use cases have been deliberately omitted.)

To configure Zammad to use sendmail, run the following command
(you can use rails r [...] if you installed Zammad from source)::

   zammad run rails r "Channel.create(area: 'Email::Account', options: { inbound: { adapter: 'null', options: {} }, outbound: { adapter: 'sendmail' } }, active: true, preferences: { editable: false }, updated_by_id: 1, created_by_id: 1)"

Now, you should see a new **Email Account** entry in the admin settings panel:

.. figure:: /images/channels/zammad_email_sendmail.png
   :alt: The new, outbound-only email channel appears in the admin settings
         email panel.
   :align: center

   Use the **Add** button under the **Email Address** heading to add new email
   addresses to send from.
