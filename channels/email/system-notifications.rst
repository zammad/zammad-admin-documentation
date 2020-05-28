System Notifications (E-Mail Channel)
-------------------------------------

.. note:: Hosted Setup users can't change either notification templates or the outgoing email address.
   This is because we have to ensure that those emails can always reach you, even if your mail server doesn't.

System notifications are used for all notifications that do either affect agents/admins or 
account related information. They'll proberbly affect your agents to 99% of the time - about 
1% your customers.

The following situations trigger system notifications:

   * password change request (All users)
   * login notifications on a new device (Admins & Agents)
   * login notifications from a new county (Admins & Agents)
   * new Tickets (Agents)
   * updates on a Ticket (Agents)
   * SLA based emails (Agents)
      * Ticket soon escalating warning (before the escalation)
      * Ticket has escalated (including daily reminders on this situation)
   * pending reminder reached (Agents)
   
   .. hint:: SLA and reminder based emails will be resent on a daily basis at midnight (UTC).
      This is to remind you on still open tickets that need your attention for as long as the Ticket hasn't 
      left said state.

In some situations you may want to change the way those notifications feel or look. You can find more 
information on this topic on :doc:`/manage/trigger/system-notifications`.

Updating your notification channel
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. hint:: **Where did the notification channel come from?**
   
   During the installation of Zammad (within the Getting started wizard) Zammad already asked you how you 
   want to send notifications. If you fast forwarded on this point that's no problem, below we'll tell you 
   how to fix that!
   
   .. figure:: /images/channels/email/getting-started_notification-channel.png
      :alt: The getting started wizard asking how one wants to sendout notifications
      :align: center

You can find the notification channel of Zammad *below* all email channels. 
If you want to update it or change the way how you send out notifications, just click on the *Edit* link.

   .. note:: You can only have one active notification channel. Zammad wouldn't be able to decide which email 
      address it should use in which situation. 

.. figure:: /images/channels/email/notifification-channel-on-channel-page.png
   :alt: Notification channel on the email channels page
   :align: center

Send mails via

   You can choose between ``local MTA`` or ``SMTP``. If you choose to use sendmail, you can just click 
   on *Continue* to finish the configuration.

   .. warning:: ⚠ Zammad does not check if your local MTA configuration is working. Using a local MTA thus 
      is for rather advanced users.

Host

   Define your email servers hostname or IP address

User *(optional)*

   If your email server requires authentication to send emails, set the username here.

   .. warning:: 🔍 Zammad will use the notification sender specified within the :doc:`/channels/email/settings`. 
      By default the notification sender will be the following address: ``noreply@{fqdn-of-your-zammad}``. 
      Ensure that this email address is correct or valid to be working on your email server.

Password *(optional)*

   If your email server required authentication, provide the accounts password here.

Port

   Define the port your server accepts SMTP connections to. 

   .. hint:: 🤓 You don't have to worry about encryption or not, Zammad will automatically find out if it can use SSL or StartTLS!

When you're ready to go click *Continue*. Zammad will now try to send an email and if successful close the dialogue.

.. figure:: /images/channels/email/notification-channel-getting-updated.png
   :alt: Notification channel configuration in Zammad
   :align: center