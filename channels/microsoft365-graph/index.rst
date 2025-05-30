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

.. include:: ../../includes/m365-imap-graph.rst

.. note:: Microsoft 365 channels are a specialized kind of
   :doc:`📨 email channel </channels/email/index>`.

   If you're already familiar with email channels,
   you can skip most of this - but you should have a look at the **Accounts**
   section, which differs from a standard email setup.

.. include:: /channels/email/index.rst
   :start-after: .. start-after-migration
   :end-before: Extra Options for Self-Hosted Users

:doc:`🛟 Common M365 errors </channels/microsoft365/common-errors>`
   Here you can find common errors and how to fix them.