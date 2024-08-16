Migrate From Email Channel to Google Channel
============================================

Zammad provides a migration logic that allows you to migrate existing Google
accounts from an email channel into a Google channel.

.. note:: 🧐 **Zammad is expecting specific settings**

   In order for Zammad to display the migration option, it expects the channels
   hostname to be ``imap.gmail.com`` for IMAP and ``smtp.gmail.com`` for SMTP.

The easiest way to start the migration is to :doc:`register-app` for your
Google accounts before migrating. However, if you don't, Zammad will ask you
to provide your app credentials before allowing you to continue.

If you're ready to go, simply click on the *Migrate now!* button in the red
banner of the email channel in question. Zammad will redirect you to
Google and request you to authenticate and consent to said account.

After you pressed next you'll be redirect to Zammad's Google channel overview.
Your channel, if successful, is now migrated to an Google channel.

.. figure:: /images/channels/google/accounts/migrate-email-channel-to-google.gif
   :alt: Migrate an existing email channel to Google
   :align: center

Rolling Back the Migration
--------------------------

In case something went wrong, Zammad allows you to roll back the migration
for up to 7 days. For this time period Zammad will remember your original
credentials and restore it if needed. These information will be removed
entirely after 7 days.

   .. figure:: /images/channels/google/accounts/managing-accounts/rollback-migration.png
      :alt: Migrate an existing email channel to Google
      :scale: 90%
      :align: center
