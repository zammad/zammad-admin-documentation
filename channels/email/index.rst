Email
*****

.. toctree::
   :hidden:

   accounts
   filters
   signatures
   settings

Control how Zammad **sends and receives email**.

.. hint:: **Using Gmail / G Suite?**
   Set up a :doc:`Google channel </channels/google/index>` instead.

.. figure:: /images/channels/email/panel.png
   :alt: Email settings panel
   :align: center

:doc:`👥 Accounts <accounts>`
   **Connect Zammad to your email provider**
   so that it can watch your inbox, send auto-replies, and more.

   (Self-hosted users may have already completed this step
   during new system setup.)

:doc:`🗂️ Filters <filters>`
   **Make sure new tickets show up in the right place**
   with automated, if-this-then-that rules for all incoming email.

:doc:`📜  Signatures <signatures>`
   Customize signatures for all outgoing email.

:doc:`⚙️  Settings <settings>`
   Manage options like: 

   * set the “From:” address on auto-replies
   * raise the limit on attachment sizes
   * modify subject-line prefixes (*e.g.,* use “AW:” instead of “RE:”)

   .. hint:: Want to **manually edit email subjects**
      or **always copy parent messages into your replies**?

      Check the ✍️ :doc:`/misc/composer`.

Extra Options for Self-Hosted Users
-----------------------------------

If you’re too cool for POP3/IMAP/SMTP...

.. toctree::
   :maxdepth: 1

   advanced/fetchmail
   advanced/sendmail
