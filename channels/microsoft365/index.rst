Microsoft 365
*************

.. toctree::
   :hidden:

   accounts
   filters
   signatures
   settings
   email-headers

Connect a Microsoft 365 account (formerly “Office 365”) to Zammad.

.. figure:: /images/channels/microsoft365/panel.png
   :alt: Email settings panel
   :align: center

.. note:: Microsoft 365 channels are a specialized kind of
   :doc:`📨 email channel </channels/email/index>`.

   This documentation part does not cover 
   :doc:`🗝 user authentication </settings/security/third-party/microsoft>`.

   If you’re already familiar with email channels,
   you can skip most of this—but **watch out for the “Accounts” section**,
   which has a few extra quirks due to Microsoft’s strict security measures.

.. warning:: **🛡️ Admin consent is not supported**

   Zammad requires the requested account permission at the time you add a new
   mailbox. This means that security functionalities like e.g. *Admin consent*
   are not supported!

   Ensure to disable admin consent for the mailboxes in question.

.. include:: /channels/email/index.rst
   :start-after: .. start-after-migration
   :end-before: Extra Options for Self-Hosted Users
