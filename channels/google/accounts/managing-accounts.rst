Managing Accounts
=================

Once an account has been added, use the Accounts panel to edit its configuration.

.. figure:: /images/channels/google/panel.png
   :alt: Existing accounts can be edited from the Accounts panel.
   :align: center

Destination Group
   Click on the group name to reassign the account.

   .. figure:: /images/channels/google/change-destination-group-for-gmail-account.png
      :alt: Location of "Destination Group" setting for existing accounts
      :scale: 60%
      :align: center

   Only **active** groups will be displayed.

   Changing this setting will not reassign existing tickets to the new group.

   .. hint:: 📮 **Still can’t send outgoing email tickets?**
      Check your :doc:`group settings </manage/groups>`.

Mail Server Settings
   Click **Edit** on inbound/outbound account details
   to change your server configuration.

   See :ref:`New Account Settings <gmail-experts-folder>`
   for a detailed description of each option.

   .. figure:: /images/channels/google/updating-gmail-account.png
      :alt: Location of account details settings for existing accounts
      :scale: 60%
      :align: center

   .. note:: ⌨️ In some browsers, you may have to manually re-enter your password.

Email Address
   Use the **+ Add** or **Edit** buttons
   to set up secondary addresses on this account.

   See :doc:`secondary-addresses` for a detailed description of each option.

   .. figure:: /images/channels/google/add-or-update-addresses.png
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

   .. note:: ⚠ **No Additional Steps Required**

      Unlike the Email channel, Zammad removes your configured email addresses 
      together with your account if you delete it.

      Groups need an assigned an address to send outgoing emails.
      If you delete a group’s assigned address, agents belonging to 
      that group won’t be able to send emails until you assign it a new one.
