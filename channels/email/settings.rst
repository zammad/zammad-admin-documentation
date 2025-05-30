Settings
========

.. figure:: /images/channels/email/settings-menu.png
   :alt: Settings section in email channel

Below you can find the available email-related settings. Most of
these settings have default values which can be found here as well.

Some email-related settings are ticket-based settings, which is why
they can be found in the :doc:`/misc/composer`.

List of Settings
----------------

Notification Sender: Default value ``Notification Master <noreply@#{config.fqdn}>``
   This is the default sender address for Zammad that affects all mails but
   those generated because of replies (like triggers or agent-based mails).
   Your customers normally will not see this address. This email address does
   not need to receive and can't be assigned to a group.

   This address is relevant for agent notifications and password reset mails
   (also affects customers).

Additional follow-up detection: Default value ``Subject & References``
   Adjust how Zammad checks if an incoming email is a follow-up or not.
   If you disable all checks, Zammad only checks if a matching ticket hook &
   number is present in the subject.

   Subject & References
      Checks subject and message IDs of emails and searches for initial ticket
      articles with the same subject and message ID. When both are matching,
      it is considered as a follow-up.

   References
      Additionally checks if a message ID from email matches an existing
      article.

   Attachment
      Additionally checks attachments of emails. Useful if you often get
      emails forwarded as attachments and want to have them in existing tickets,
      if there is a reference included in an attached email.

   Body
      Additionally checks the body of emails. If there is a ticket
      identifier (ticket hook & number) in the body, it is considered as a
      follow-up. Useful if you want to add emails to existing tickets which
      are completely independent but talking about existing tickets
      including such a ticket reference.

   Please note that activating additional checks can lead to false detection.
   In production environments, you should change this setting very
   carefully and monitor the behavior afterwards.

Maximum Email Size: Default value ``10 MB``
   Defines the maximum allowed size of an email Zammad fetches. Zammad will
   not fetch larger emails (*including attachments!*).

Send postmaster mail if mail too large: Default value ``yes (enabled)``
   Option set to ``yes``
      This setting will cause Zammad to automatically reply to emails that
      exceed the above email size limit with a postmaster style email.
      It tells the sender that you have not received their email.

      Nevertheless, Zammad will remove the email from the mailbox (if enabled).

   Option set to ``no``
      If the option is set to no, Zammad will not reply to emails that are too
      big. Your customer will **not notice** that the email was too large!
      Instead, Zammad will use the monitoring endpoint to alert its
      administrators that it can't fetch a too large email.

      Learn more about :doc:`/system/monitoring`.

Sender based on Reply-To header: Default value ``not set (-)``
   This setting decides how Zammad should recognize its customers from emails
   that contain a ``Reply-To`` header. This comes in useful if you're working
   with contact forms that need to use reply to headers.

   Option set to ``Take reply-to header as sender/from of email.``
      This setting will overwrite the initial ``FROM`` to the value used in
      ``Reply-To`` completely.

   Option set to ``-`` or ``Take Reply-To header as sender/from of email and use the real name of origin from.``
      This setting will partially overwrite the initial ``FROM``.
      It uses the email address from the ``Reply-To`` header and uses the given
      name of the ``FROM`` header, if given.

Customer selection based on sender and receiver list: Default value ``yes``
   This option decides how Zammad should react if an agent sends an email to it.

   Option set to ``yes``
      The first user / email address from the recipient list will be used as
      the ticket customer.

   Option set to ``no``
      The agent will be set as ticket customer.

Block Notifications
   With the regex that can be defined here, you can ensure not to send any
   notifications to specific systems. By default this especially affects typical
   system addresses which can't receive emails anyway.

   The default value is:
   ``(mailer-daemon|postmaster|abuse|root|noreply|noreply.+?|no-reply|no-reply.+?)@.+?``

   .. _email-settings-sender-format:

Sender Format: Default value ``Agent Name + FromSeparator + System Address Display Name``
   This configures the display name used in the ``FROM`` header of mails
   Zammad sends.

   This does not affect notification mails (to agents) and password reset
   mails. Emails that are not sent by agents
   (e.g. trigger-based notifications) will always fallback to
   ``System Address Display Name`` if needed.

   Option set to ``Agent Name + FromSeparator + System Address Display Name``
      This will cause Zammad to set the ``FROM`` header to agent name and the
      channel's display name, divided by a separator (configured below).

      Example: ``Christopher Miller via Chrispresso Inc.``.

   Option set to ``System Address Display Name``
      This will cause Zammad to always use the display name of the used channel
      in the ``FROM`` header.

      Example: ``Chrispresso Inc.``

   Option set to ``Agent Name``
      Zammad will use the agent's name which is very personal.

      If you want to remove the ticket reference from the subject, you can learn
      more in :doc:`Settings > Ticket </settings/ticket>`.

Sender Format Separator: Default value ``via``
   This can be a string you can freely choose. It divides the agent's name
   and the display name of the channel whenever needed.

Ticket Subject Forward: Default value ``FWD``
   The above string will be used on the subject if you forward an email from
   Zammad.

   ``:`` will be automatically appended to the above string.

Ticket Subject Reply: Default value ``RE``
   The above string will be used on the subject if you reply to an email from
   Zammad.

   ``:`` will be automatically appended to the above string.

Ticket Subject Size: Default value ``110``
   This setting enforces a maximum length for subjects when replying.
   If the subject you're using for your reply is too long, Zammad will
   automatically truncate the length and insert ``[...]`` to show it has
   shortened the subject.

   This does *not* limit ticket titles within the UI, just the subjects
   when replying to an email.

   Example: ``RE: Test somew[...] [Ticket#123456]``

Enhanced Settings
-----------------

Some less relevant settings can be changed via rails console if needed.
As an example, Zammad allows you to send all outgoing communication to a BCC
address for archiving reasons if needed. You can find the needed commands
:docs:`within the advanced customization settings </admin/console/hidden-settings.html>`.
