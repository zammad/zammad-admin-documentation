System Filters
==============

Zammad includes so-called system filters by default. They detect specific
information to guarantee the correct handling of emails and adjust some
information automatically, depending on the filter and your settings.
These filters are neither visible in the Zammad UI nor configurable at all, but
it is important to be aware of them, as they can affect the behavior of Zammad
when processing incoming emails. So this page has only informative character.

External Services
-----------------

These filters identify incoming emails from certain external services and extract
specific information to add them to tickets.

Service-Now
   Detects `Service-Now <https://www.servicenow.com/>`_ emails and can assign them
   to existing tickets based on the incident ID, if the following requirements
   are met:

   - Header contains ``X-ServiceNow-Generated``.
   - Subject matches regex ``\s(INC\d+)\s``, e.g. ``INC678439``.

   See `Service-Now email example <https://github.com/zammad/zammad/blob/stable/test/data/mail/mail090.box>`_
   for comparison of your emails.

JIRA
   Detects `JIRA <https://www.atlassian.com/software/jira>`_ emails and can assign
   them to existing tickets based on the issue ID, if the following
   requirements are met:

   - Header contains ``X-JIRA-FingerPrint``.
   - Subject matches regex ``\[JIRA\]\s\((\w+-\d+)\)``, e.g. ``[JIRA] (SYS-422)``.

   See `JIRA email example <https://github.com/zammad/zammad/blob/stable/test/data/mail/mail103.box>`_
   for comparison of your emails.

Icinga
   Detects `Icinga <http://www.icinga.org>`_ emails. When an email from Icinga
   is detected, the filter extracts monitoring information (e.g. host, service,
   state) from the email and adds it to the ticket. When the affected service is
   up again, the filter can automatically close the ticket, depending on your
   settings of the Icinga integration.

Nagios
   Detects `Nagios <http://www.nagios.org>`_ emails. When an email from Nagios
   is detected, the filter extracts monitoring information (e.g. host, service,
   state) from the email and adds it to the ticket. When the affected service is
   up again, the filter can automatically close the ticket, depending on your
   settings of the Nagios integration.

Checkmk
   Detects `Checkmk <https://checkmk.com/>`_ emails. When an email from Checkmk
   is detected, the filter extracts monitoring information (e.g. host, service,
   state) from the email and adds it to the ticket. When the affected service is
   up again, the filter can automatically close the ticket, depending on your
   settings of the Checkmk integration.

Monit
   Detects `Monit <https://mmonit.com/monit/>`_ emails. When an email from Monit
   is detected, the filter extracts monitoring information (e.g. host, service,
   state) from the email and adds it to the ticket. When the affected service is
   up again, the filter can automatically close the ticket, depending on your
   settings of the Monit integration.

Internal Email Handling
-----------------------

   Zammad's internal email processing also uses system filters, e.g. to
   check for a follow-up email or choose the correct customer. Some of these
   filters are configurable via Zammad's admin settings. The following titles
   include the complete filter name for easier reference. The execution order
   is based on the filter number prefix. Because some of the filters depend on the
   results of previous filters.

0000_postmaster_filter_trusted
   This filter removes ``X-Zammad`` headers from untrustworthy sources to prevent
   manipulation of the email processing. Check the trusted channel section
   in the :doc:`header based actions </channels/email/email-headers>`
   documentation for more information.

0001_postmaster_filter_secure_mailing
   Handles PGP and S/MIME emails.

0006_postmaster_filter_auto_response_check
   Checks if the email is an auto response. If yes, no auto reply
   from Zammad gets sent.

   These headers are checked:

   - ``list-unsubscribe``
   - ``x-loop``
   - ``precedence``
   - ``auto-submitted``
   - ``x-auto-response-suppress``
   - ``x-zammad-is-auto-response``

   If ``x-zammad-is-auto-response`` is present, further auto-response header
   checks are skipped.

0007_postmaster_filter_follow_up_check
   Identifies and routes follow-up emails based on the
   **Additional follow-up detection** in the
   :doc:`channel's settings <../settings>`.

0008_postmaster_filter_follow_up_merged
   Routes follow-up emails for merged tickets to the correct ticket.

0009_postmaster_filter_follow_up_assignment
   Sets the owner for follow-up emails based on the
   **Assign follow-ups** configuration of the
   :doc:`group's settings </manage/groups/settings>`.

0011_postmaster_sender_based_on_reply_to
   Sets the sender/from for the article based on the
   **Sender based on Reply-To header** configuration of the
   :doc:`channel's settings <../settings>`.

0014_postmaster_filter_own_notification_loop_detection
   Checks if the email is a self-created notification email, and ignores it in
   such cases to prevent email loops.

0015_postmaster_filter_identify_session_user
   Identifies a session user via ``x-zammad-session-user-id``. If none is
   provided or valid, it falls back to sender data and can create a user.
   This filter also makes sure that tickets which got forwarded from an agent's
   personal inboxes to the system show up as coming from the customers
   instead of the agent.

0018_postmaster_import_archive
   Handles the emails which are imported in
   :ref:`archive mode <archive-mode-email>`.

0030_postmaster_filter_out_of_office_check
   Identifies out-of-office auto-responder emails, assigns them to the correct
   ticket and keeps the current ticket state.

0200_postmaster_filter_follow_up_possible_check
   Handles the emails based on the **Follow-up possible** configuration of the
   :doc:`group's settings </manage/groups/settings>`.

0900_postmaster_filter_bounce_follow_up_check
   Identifies postmaster bounce notification emails and handles them as
   follow-up of the original tickets.

0950_postmaster_filter_bounce_delivery_permanent_failed
   Identifies postmaster bounce notification emails about permanent delivery
   failures and marks affected recipients with ``mail_delivery_failed`` in
   their user preferences to suppress future notifications.

0955_postmaster_filter_bounce_delivery_temporary_failed
   Identifies postmaster bounce notification emails about temporary delivery
   failures (delayed, retryable, status ``4.4.1``) and marks the email as
   out-of-office handling context.

1000_postmaster_filter_database_check
   Executes active custom email postmaster filters from the database and logs
   their processing.

5500_postmaster_internal_article_check
   Sets the articles visibility to internal if it is a reply to an internal
   article or the last outgoing email is internal.

6005_postmaster_filter_identify_group
   Sets ticket group by using explicit group headers first, then existing ticket
   context (ID/number), then mailbox/group mapping or fallback default group.

6105_postmaster_filter_sender_is_system_address
   Detects system or agent senders and sets the article sender role
   (``Agent`` or ``Customer``), depending on sender address, permissions,
   group access and ticket customer relation.

6500_postmaster_filter_identify_sender
   Checks if sender can be identified as Zammad user and optionally creates a
   new user.
