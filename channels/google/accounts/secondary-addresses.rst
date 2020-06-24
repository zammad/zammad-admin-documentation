Secondary Addresses
===================

Secondary addresses (also known as *aliases*) allow you to send emails
with a different “From:” address from the one on the account.

.. figure:: /images/channels/google/add-gmail-alias.gif
   :alt: Video demonstration of adding a secondary address and configuring a group to use it.
   :align: center

   Once you add a secondary address,
   you can configure a group to start sending emails with it.

.. warning:: 🧐 **Add your alias to your gmail account beforehand.**

   Google requires you to verify your alias. If you add aliases to Zammad that you may not 
   send from, Google does deny sending this email!

   .. hint:: **G-Suite users**

      G-Suite accounts can't just add aliases on their own - the admin has to add the alias to 
      the account. After that you can use the required alias.

Your email provider may also be set up to *receive incoming messages*
for many addresses in the same mailbox.
If this is the case, be sure to add your alternate inbox addresses here.

Display Name
   The display name used for outgoing email.

   .. figure:: /images/channels/email/account-setup-org-dept-name.png
      :alt: Screenshot of customer inbox with email from "Chrispresso Sales"
      :scale: 40%
      :align: center

      A customer’s inbox with an auto-reply from **Chrispresso Sales**.

   Email display names value can be
   :ref:`further customized in the Settings tab <email-settings-sender-format>`.

Email
   The alias address to send outgoing messages as.

Channel
   The email account to be used when sending outgoing messages from this alias.

Note
   Optional.
   Only visible from this dialog, the REST API, and the Rails console.
