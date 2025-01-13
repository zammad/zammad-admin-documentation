Email
=====

.. toctree::
   :hidden:

   accounts
   filters
   signatures
   settings
   email-headers

Control how Zammad **sends and receives email**.

.. hint::

   **Using Gmail / G Suite?**
      Set up a :doc:`Google channel </channels/google/index>` instead.

   **Using Microsoft 365?**
      Set up a :doc:`Microsoft 365 channel </channels/microsoft365/index>`
      instead.

.. figure:: /images/channels/email/panel.png
   :alt: Email settings panel
   :align: center

🚛 Migrate existing email channel to "XOAUTH" channel
   At this moment Zammad supports XOAUTH for the following providers:

      * :ref:`Google Email <migrate-channel>`
      * :doc:`Microsoft 365 IMAP Email </channels/microsoft365/accounts/migrate-from-email-channel>` (formerly Office 365)

   .. note::

      Microsoft 365 *Graph* Email supports XOAUTH as well, but currently there
      is no migration option. Instead, you have to remove the existing and
      :doc:`add the new channel manually </channels/microsoft365-graph/accounts/>`.

   .. start-after-migration

:doc:`👥 Accounts <accounts>`
   **Connect Zammad to your email provider**
   so that it can watch your inbox, send auto-replies, and more.

   (Self-hosted users may have already completed this step
   during new system setup.)

   .. start-after-accounts

:doc:`🗂️ Filters <filters>`
   **Make sure new tickets show up in the right place**
   with automated, if-this-then-that rules for all incoming email.

:doc:`📜  Signatures <signatures>`
   Customize signatures for all outgoing email.

:doc:`⚙️  Settings <settings>`
   Manage options like:

   * set the “From:” address on system notifications
   * raise the limit on attachment sizes
   * modify subject-line prefixes (*e.g.,* use “AW:” instead of “RE:”)

   .. hint:: Want to **manually edit email subjects**
      or **always copy parent messages into your replies**?

      Check the ✍️ :doc:`/misc/composer`.

:doc:`📇 Header based actions <email-headers>`
   Manipulate auto response behavior or incoming routing.

   .. warning:: 🤓 This is a very advanced topic.

Extra Options for Self-Hosted Users
-----------------------------------

If you're too cool for POP3/IMAP/SMTP...

.. toctree::
   :maxdepth: 1

   advanced/fetchmail
   advanced/sendmail
