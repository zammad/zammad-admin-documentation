Extra Configuration
-------------------

After adding an account, it will automatically appear within the email channel overview. 
At this point Zammad will allow you to adjust settings whenever needed depending on what you'll want to do.

Below we'll handle all email account based settings - if you want to learn more about handling email addresses, 
please have a look at the :doc:`aliases` section.

.. figure:: /images/channels/email/email-channel-overview.png
   :alt: Zammad list all configured email accounts at one place
   :align: center

Changing the destination group for new emails
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes plans change and you may want to change the default destination group of your email channel. 
You can change your destination group at any time - to do so, simply click on the group name if the channel 
you want to change. 

Zammad then will provide a new modal dialogue in which you can change the group to another one. 

.. note:: Zammad will only display active groups for selection.

.. hint:: Changing destination groups does not affect existing tickets, they'll remain in their original group.

.. figure:: /images/channels/email/change-destination-group-for-email-account.png
   :alt: Changing the destination group for an email account
   :align: center

Updating email account settings (Hostname, Password, ...)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Some situations require to update email account settings. Those include e.g. changing the password or using 
another mail host if required. 

To do so, Zammad provides you with *edit* links for inbound and outbound. 
The exact same wizard will be used for updating like upon adding the account. 
If something is unclear, you can safely scroll up and have a look. 💪

.. note:: If you edit "Inbound" , Zammad will also provide the "Outbound" configuration.
      If you just have to edit your Outbound configuration, you can safely just edit outbound.

.. hint:: In some situations your browser may "change" the password living in the password field. 
      To ensure Zammad won't fail authentication, it's the best to also insert the password of the email account.

.. figure:: /images/channels/email/updating-email-account.png
   :alt: Changing account information of an email channel
   :align: center

Disabling an email account
^^^^^^^^^^^^^^^^^^^^^^^^^^

If you temporarily don't need an account to be fetched, sometimes disabling the account is the better approach 
instead of deleting it. This is also a good idea during maintenance work or even migration Zammad to a new host. 

.. warning:: If you deactivate an email channel, all associated email addresses can no longer **send emails**.
   Zammad does not clear the email address from groups, but throw errors in the ticket if you still try to send a email.

Deleting an email account
^^^^^^^^^^^^^^^^^^^^^^^^^

If you no longer wish to use a specific email account with Zammad or maybe want to merge several email addresses to 
one single account, you can simply delete an existing channel. 

This will remove the channel configuration, but not email addresses. You will need to remove them in a second step. 
Zammad will display all not associated email addresses above your email accounts. 

.. hint:: For you overview we'll tell you how to re-assign email addresses on :doc:`aliases`.

.. figure:: /images/channels/email/email-addresses-without-channel.png
   :alt: email addresses without channels attached
   :align: center
