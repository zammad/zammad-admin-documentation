Migrate from Email channel to Microsoft 365 channel
===================================================

Zammad provides a migration logic that allows you to migrate existing Microsoft
365 accounts from the Email channel to the Microsoft 365 channel.

.. note:: 🧐 **Zammad is expecting specific settings**

   In order for Zammad to display the migration option, it expects the
   channels hostname to be ``outlook.office365.com`` for IMAP and
   ``smtp.office365.com`` for SMTP.

The easiest way to start the migration is to :doc:`register-app` for your
Microsoft accounts before migrating. However, if you don't, Zammad will ask you
to provide your app credentials before allowing you to continue.

If you're ready to go, simply click on the *Migrate now!* button in the red
banner of the email channel in question. Zammad will redirect you to
Microsoft and request you to authenticate and consent to said account.

After you pressed next you'll be redirect to Zammads Microsoft 365 channel
overview. Your channel, if successful, is now migrated to an Microsoft 365
channel.

   .. figure:: /images/channels/microsoft365/accounts/migrate-email-channel-to-microsoft365.gif
      :alt: Migrate an existing email channel to Microsoft 365
      :scale: 90%
      :align: center

Rolling back the migration
--------------------------

In case something went wrong, Zammad allows you to roll back the migration
for up to 7 days. For this time period Zammad will remember your original
credentials and restore it if needed. These information will be removed
entirely after 7 days.

   .. figure:: /images/channels/microsoft365/accounts/managing-accounts/rollback-migration.png
      :alt: Migrate an existing email channel to Microsoft 365
      :scale: 90%
      :align: center
