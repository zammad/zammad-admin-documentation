Microsoft 365 Channels
======================

Connect a Microsoft 365 (formerly "Office 365") either via Microsoft's
:doc:`IMAP API <m365-imap/accounts>` or their
:doc:`Graph API <m365-graph/index>` to Zammad.

You can configure them in the admin panel under
*Channels > Microsoft 365 IMAP Email* or *Channels > Microsoft 365 Graph Email*,
depending on which you want to use.

.. note::

   - Microsoft 365 channels are a specialized kind of
     :doc:`email channel </channels/email/index>`.
   - This documentation part does not cover
     :doc:`user authentication </settings/security/third-party/microsoft>`.
   - If you're already familiar with email channels, you can skip most of the
     content below. However, you should have a look at how to connect Zammad
     with M365.

Connect Channel
   **Connect Zammad to your Microsoft 365 instance** so that it can watch your
   inbox, send auto-replies, and more.
   (Self-hosted users may have already completed this step during new system
   setup.)

   Make sure to investigate to which API you have to connect before starting and
   follow the corresponding link below:

   - :doc:`IMAP API <m365-imap/accounts>`
   - :doc:`Graph API <m365-graph/index>`

.. include:: /channels/email/index.rst
   :start-after: .. start-after-accounts
   :end-before: Extra Options for Self-Hosted Users

:doc:`🛟 Common M365 errors </channels/microsoft365/common-errors>`
   Here you can find common errors and how to fix them.

.. toctree::
   :hidden:

   m365-graph/index
   m365-imap/accounts
   filters
   signatures
   settings
   email-headers
   common-errors
