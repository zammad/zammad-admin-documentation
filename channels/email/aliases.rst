Aliases
-------

If you have several aliases for an email account, you'll need to specify them in Zammad. 
This allows you to use them with e.g. groups for outgoing communication.

In Zammad account aliases count as email address and can be added to existing accounts if needed.

.. warning:: ☣ Ensure that Zammad knows the email addresses you're using for receiving - if it doesn't, it might 
   recognize those addresses as customers. This is not a bug and can be fixed with adding missing email addresses. 

Add email addresses to existing accounts
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Adding new email addresses to an existing email channel is super easy. 
To do so, click *+ Add* on the channel of your choice. In the new dialogue, fill in the required fields.

   .. figure:: /images/channels/email/add-or-update-aliases.png
      :alt: Adding a new email address to existing channels
      :align: center

Display name

   The display name is a string that your customer will see when receiving the mail. 
   Zammad by default adds the agent name to that display name. You can change this within the 
   :doc:`/channels/email/settings` tab.

Email

   This is the email address you want to add. You can only specify one here.

      .. note:: Ensure that your email account is allowed to send via this email address.

Channel

   Zammad will automatically set the channel you're adding the mail address to. 
   This is the email account Zammad will use for sending out the emails with the above specified address.

Note *(optional)*

   You can optionally add a meaningful note for your self or fellow administrators. 
   This note only will be display within this dialogue (when editing for example), API or rails console.

If you're ready to go click on *Submit* to save your changes.

   .. figure:: /images/channels/email/updating-email-address.png
      :alt: Adding or updating email addresses in Zammad
      :align: center

Updating existing email addresses
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes requirenments on e.g. display names may change. 
For this reason you may want to update an existing email address. 
Choose a email address and click on *Edit* next to the entry.

   .. figure:: /images/channels/email/add-or-update-aliases.png
      :alt: Adding a new email address to existing channels
      :align: center

Zammad will display all possible options for that email address. 

   .. tip:: 🤓 You can also change the channel being responsible for that email address. 
      This allows you to change channels quickly or migrate existing addresses before removing the channel itself.

   .. figure:: /images/channels/email/updating-email-address.png
      :alt: Adding or updating email addresses in Zammad
      :align: center

Assigning not assioated email addresses
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When deleting email channels, Zammad will keep the email address itself. 
For your overview it will display all not associated email addresses above your configured email channels.

.. figure:: /images/channels/email/email-addresses-without-channel.png
   :alt: Zammad listing email addresses without associated channels
   :align: center

You can click on the email address to update it's channel to use. 
By doing this you can softly migrate email addresses to new email accounts with as little as possible downtime.

.. figure:: /images/channels/email/email-address-change-channel.png
   :alt: Changing the responsible channel for a email address
   :align: center

Removing email addresses
^^^^^^^^^^^^^^^^^^^^^^^^

After removing an email channel you may also want or have to remove the email addresses that were associated. 
To do so, just click on the ✖ in the listing of unassigned email addresses.

Doing so will permantently remove the email address from Zammads database.

   .. danger:: When deleting a email address, Zammad will **not warn** you, if it's configured in a group.
      Upon deleting an email address Zammad will remove the configured address from any group that's associated it! 
      This means that you potentially can no longer send emails from affected groups.

.. figure:: /images/channels/email/email-addresses-without-channel.png
   :alt: Zammad listing email addresses without associated channels
   :align: center