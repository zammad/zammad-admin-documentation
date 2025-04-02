Secondary Addresses
===================

Secondary addresses (also known as *aliases*) allow you to send emails
with a different “From:” address than the one from the account.

You can add an additional email address by clicking the ``+ Add`` button in an
existing account configuration. This opens a dialog where you can add your
address:

.. figure:: /images/channels/email/accounts-addresses.png
   :alt: Screenshot shows adding a secondary address
   :align: center
   :scale: 70%

   Add a secondary address and configure a group to start sending emails with
   it.

.. include:: secondary-addresses.warning.rst

Your email provider may also be set up to *receive incoming messages*
for many addresses in the same mailbox.
If this is the case, be sure to add your alternate inbox addresses here.

Display Name
   The display name used for outgoing email.

   .. figure:: /images/channels/email/account-setup-org-dept-name.png
      :alt: Screenshot of customer inbox with email from "Chrispresso Sales"
      :scale: 40%
      :align: center

      A customer's inbox with an auto-reply from **Chrispresso Sales**.

   Email display names value can be
   :ref:`further customized in the Settings tab <email-settings-sender-format>`.

Email
   The alias address to send outgoing messages as.

Channel
   The email account to be used when sending outgoing messages from this alias.

Note
   Optional.
   Only visible from this dialog, the REST API, and the Rails console.
