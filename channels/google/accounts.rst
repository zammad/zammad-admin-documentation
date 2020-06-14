Accounts
********

.. toctree::
   :hidden:

   accounts/configure-app
   accounts/account-setup
   accounts/secondary-addresses
   accounts/managing-accounts

🚛 Migrating existing accounts
   As google has postponed switching to xAuth we decided to not yet show migration warnings. 
   We will provide an easy migration button in future Zammad versions - you'll have enough time to 
   switch without issues!

   .. hint:: Currently it's necessary to **Delete** accounts from your Email channel before adding 
      the gmail account within the Google channel. If you have a lot of aliases, this might be very 
      inconvienent for you.

:doc:`accounts/account-setup`
   Use the **Add Account** dialog to connect your account.

   .. figure:: /images/channels/google/add-gmail-account-to-zammad.gif
      :alt: Adding your gmail account to Zammad
      :scale: 60%
      :align: center

:doc:`accounts/secondary-addresses`
   Send and receive email at **additional email addresses**,
   all through the same mailbox/account.

   .. figure:: /images/channels/google/add-gmail-alias.gif
      :alt: Adding new aliases to your gmail account in Zammad
      :scale: 60%
      :align: center

:doc:`accounts/managing-accounts`
   Edit the configuration of existing accounts in the **Accounts Panel**.

   .. figure:: /images/channels/google/panel.png
      :alt: Existing accounts can be edited from the Accounts panel.
      :scale: 60%
      :align: center

.. note:: 🤔 **Huh?! No notification channel for Google??**

   Zammad currently doesn't provide a notification channel for gmail accounts, we suggest using the 
   :doc:`regular email channel </channels/email/accounts/email-notification>` for notification channels. 
   This also reduces the risk to hit `Google's sending limits <https://support.google.com/a/answer/166852?hl=en>`_.
