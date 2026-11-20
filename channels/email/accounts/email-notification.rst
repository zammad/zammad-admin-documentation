Email Notification
==================

.. note:: The notification channel can only be configured
   on **self-hosted installations**.

   For more information, see :doc:`/misc/system-notifications`.

System notifications are automated emails
sent by Zammad for critical system events,
such as account changes or SLA violations.

Use the **Email Notification** panel to configure
how Zammad dispatches these notifications.

.. figure:: /images/channels/email/accounts-email-notification.png
   :alt: Screenshots shows email notification channel editing
   :scale: 70%
   :align: center

Send mails via
   Choose from **SMTP** and **local MTA** (e.g. Sendmail).

Host
   Your email server's hostname or IP address (e.g. ``smtp.gmail.com``).

User
   Your account login/username.

   .. hint:: The “From:” address on system notifications can be configured under
      :doc:`Channels > Email > Settings > Notification Sender <../settings>`.

Password
   Your account password.

Port
   Your email server's port (usually ``587`` or ``465``).

   Zammad will detect and enable SSL/STARTTLS support automatically.

Verification
------------

Before the configuration is saved, Zammad sends a test email through your
server to ``verify-external-smtp-sending@discard.zammad.org``, which discards
the test email right away. The configuration is saved only if your server
accepts this email. If the server can't be reached, the login fails or the
email is refused, you see the reply of your server and nothing is saved.

.. _email-notification-internal-only:

Internal-Only Email Servers
---------------------------

Some email servers only deliver to recipients inside your organization, for
example Microsoft 365 High Volume Email (HVE) accounts or a relay which is
restricted to your own domains. Such a server refuses the test email to the
external address, although host, port and login are correct.

If your server was reached and the login worked, but the test email was
refused, Zammad shows the reply of your server and asks:
**Does this email server only deliver to internal recipients?**

Answer with **Yes** to verify the server with a recipient of your choice:

Custom verification email
   The address the test email is sent to instead. It is pre-filled with your
   own email address and can be changed to any address your server delivers
   to. The address is used for this check only and is not stored.

The configuration is saved only if your server accepts the email to this
address. If it is refused as well, you see the reply of your server again and
nothing is saved. There is no way to save a notification channel without an
accepted test email.

A notification channel verified this way is saved as internal-only. The
**Email Notification** panel shows this as **Internal email server: yes**. A
server which passed the usual check has no such line.

.. warning:: An internal-only email server may fail to deliver password reset,
   new device and similar system emails to recipients outside your
   organization, for example to customers who log in to Zammad. Zammad neither
   sends these emails through another server nor holds them back: if your
   server refuses a recipient, the email is not delivered.

   Only use an internal-only email server if everybody who needs these emails
   has an address your server delivers to.

.. note:: 🤔 **This looks familiar... Where have I seen it before?**

   This configuration step was part of the Getting Started wizard:

   .. figure:: /images/channels/email/getting-started_notification-channel.png
      :alt: The getting started wizard asking how one wants to send out
            notifications
      :align: center

   The wizard, also the guided setup of the new desktop view, verifies your
   server in the same way and asks the same question for an internal-only
   email server.
