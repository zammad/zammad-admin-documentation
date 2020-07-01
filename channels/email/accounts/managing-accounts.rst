Managing Accounts
=================

Once an account has been added, use the Accounts panel to edit its configuration.

.. figure:: /images/channels/email/panel.png
   :alt: Existing accounts can be edited from the Accounts panel.
   :align: center

.. include:: managing-accounts.inbound-outbound.rst

Destination Group
   Click on the group name to reassign the account.

   .. figure:: /images/channels/email/change-destination-group-for-email-account.png
      :alt: Location of "Destination Group" setting for existing accounts
      :scale: 60%
      :align: center

   Only **active** groups will be displayed.

   Changing this setting will not reassign existing tickets to the new group.

   .. hint:: 📮 **Still can’t send outgoing email tickets?**
      Check your :doc:`group settings </manage/groups>`.

Email Address
   Use the **+ Add** or **Edit** buttons
   to set up secondary addresses on this account.

   See :doc:`secondary-addresses` for a detailed description of each option.

   .. figure:: /images/channels/email/add-or-update-addresses.png
      :alt: Location of email address add/edit buttons
      :scale: 60%
      :align: center

Enabled / Disabled
   Disabling an account temporarily prevents Zammad from importing its messages.

   This may be necessary during scheduled maintenance
   or when migrating your installation to a new host. 

   .. note:: 📮 Disabling an account disables *outgoing* messages for it, as well.

Delete
   Deleting an account removes its configuration from Zammad entirely.

   .. include:: managing-accounts.delete-note.rst
