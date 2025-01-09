Microsoft 365 Graph Email
=========================

.. toctree::
   :hidden:

   accounts
   filters
   signatures
   settings
   email-headers
   common-errors

Connect a Microsoft 365 account (formerly "Office 365") via Graph API to Zammad.

.. figure:: /images/channels/microsoft365-graph/panel.png
   :alt: Email settings panel
   :align: center

.. note:: Microsoft 365 channels are a specialized kind of
   :doc:`📨 email channel </channels/email/index>`.

   This documentation part does not cover
   :doc:`🗝 user authentication </settings/security/third-party/microsoft>`.

   If you're already familiar with email channels,
   you can skip most of this - but **watch out for the “Accounts” section**,
   which has a few extra quirks due to Microsoft's strict security measures.

.. include:: /channels/email/index.rst
   :start-after: .. start-after-migration
   :end-before: Extra Options for Self-Hosted Users

:doc:`🛟 Common M365 errors </channels/microsoft365/common-errors>`
   Here you can find common errors and how to fix them.