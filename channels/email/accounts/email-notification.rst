Email Notification
==================

.. note:: The notification channel can only be configured
   on **self-hosted installations**.

   For more information, see :doc:`/manage/trigger/system-notifications`.

System notifications are automated emails
sent by Zammad for critical system events,
such as account changes or SLA violations.

Use the **Email Notification** panel to configure
how Zammad dispatches these notifications.

.. figure:: /images/channels/email/accounts-email-notification.gif
   :alt: Demonstration of email notification channel editing
   :align: center

Send mails via
   Choose from **SMTP** and **local MTA** (*e.g.,* Sendmail).

Host
   Your email server’s hostname or IP address (*e.g.,* ``smtp.gmail.com``).

User
   Your account login/username.

Password
   Your account password.

Port
   Your email server’s port (usu. ``587`` or ``465``).

   Zammad will detect and enable SSL/STARTTLS support automatically.

.. note:: 🤔 **This looks familiar... Where have I seen it before?**
   
   This configuration step was part of the Getting Started wizard:
   
   .. figure:: /images/channels/email/getting-started_notification-channel.png
      :alt: The getting started wizard asking how one wants to sendout notifications
      :align: center
