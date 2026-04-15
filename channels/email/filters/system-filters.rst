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

Service-Now
^^^^^^^^^^^

Detects `Service-Now <https://www.servicenow.com/>`_ emails and assigns them to
existing tickets, if the following requirements are met:

- Headers contains a ``X-ServiceNow-Generated``.
- Subject matches regex ``\s(INC\d+)\s``, e.g. ``INC678439``.

See `Service-Now email example <https://github.com/zammad/zammad/blob/stable/test/data/mail/mail090.box>`_
for comparison of your emails.

JIRA
^^^^

Detects `JIRA <https://www.atlassian.com/software/jira>`_ emails and assigns
them to existing tickets, if the following requirements are met:

- Header contains ``X-JIRA-FingerPrint``.
- Subject matches regex ``\[JIRA\]\s\((\w+-\d+)\)``, e.g. ``[JIRA] (SYS-422)``.

See `JIRA email example <https://github.com/zammad/zammad/blob/stable/test/data/mail/mail103.box>`_
for comparison of your emails.

Icinga
^^^^^^

Detects `Icinga <http://www.icinga.org>`_ emails. When an email from Icinga is
detected, the filter extracts the host and service information from the email
and adds it to the ticket. When the the affected service is up again, the
filter can automatically close the ticket, depending on your settings of the
Icinga integration.

Nagios
^^^^^^

Detects `Nagios <http://www.nagios.org>`_ emails. When an email from Nagios is
detected, the filter extracts the host and service information from the email
and adds it to the ticket. When the the affected service is up again, the
filter can automatically close the ticket, depending on your settings of the
Nagios integration.

Checkmk
^^^^^^^

Detects `Checkmk <(https://checkmk.com/)>`_ emails. When an email from Checkmk
is detected, the filter extracts the host and service information from the email
and adds it to the ticket. When the the affected service is up again, the filter
can automatically close the ticket, depending on your settings of the Checkmk
integration.

Monit
^^^^^

Detects `Monit <https://mmonit.com/monit/>`_ emails. When an email from Monit
is detected, the filter extracts the host and service information from the email
and adds it to the ticket. When the the affected service is up again, the filter
can automatically close the ticket, depending on your settings of the Monit
integration.

Internal Email Handling
-----------------------

Zammad includes system filters to handle the internal email processing, e.g. to
check for a follow-up email or choose the correct customer. These filters are
mostly configurable via the admin settings in Zammad's UI.

.. Just adding a coarse general description of each of the system filters here. Otherwise, we are on a detail level like the code itself.

0000_postmaster_filter_trusted
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This filter removes ``X-Zammad`` headers from untrustworthy sources to prevent
manipulation of the email processing. Check the trusted channel section
in the :doc:`header based actions </channels/email/email-headers>`
documentation for more information.

0006_postmaster_filter_auto_response_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if the email is an auto response. If yes, no auto reply
from Zammad gets sent.

These headers are checked:

- ``list-unsubscribe``
- ``x-loop``
- ``precedence``
- ``auto-submitted``
- ``x-auto-response-suppress``
- ``x-zammad-is-auto-response``

0007_postmaster_filter_follow_up_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Identifies and routes follow-up emails based on the
**Additional follow-up detection** in the
:doc:`channel's settings <../settings>`.

0008_postmaster_filter_follow_up_merged
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Routes follow-up emails for merged tickets to the correct ticket.

0009_postmaster_filter_follow_up_assignment
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sets the owner for follow-up emails based on the
**Follow-up possible** configuration of the
:doc:`group's settings </manage/groups/settings>` .

0011_postmaster_sender_based_on_reply_to
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sets the sender/from for the article based on the
**Sender based on Reply-To header** configuration of the
:doc:`channel's settings <../settings>`.

0018_postmaster_import_archive
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Handles the emails which are imported in
:ref:`archive mode <archive-mode-email>`.

6105_postmaster_filter_sender_is_system_address
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if the email has been sent from Zammad's system email address
itself and sets the article sender and its role.

0014_postmaster_filter_own_notification_loop_detection
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if the email is a self-created notification email, and ignores it in such
cases to prevent email loops.

0015_postmaster_filter_identify_session_user
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if sender can be identified as Zammad user.

6500_postmaster_filter_identify_sender
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Identifies and optionally creates the sender.

state: Channel::Filter::IdentifySender


0001_postmaster_filter_secure_mailing
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter to handle secure mailing.

state: Channel::Filter::SecureMailing

0030_postmaster_filter_out_of_office_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter to identify out-of-office emails for follow-up
detection and keeping current ticket state.

state: Channel::Filter::OutOfOfficeCheck


0200_postmaster_filter_follow_up_possible_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Define postmaster filter to check if follow-ups get created (based on admin
settings).

state: Channel::Filter::FollowUpPossibleCheck

0900_postmaster_filter_bounce_follow_up_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter to identify postmaster bounces; and handles them as
follow-up of the original tickets.

state: Channel::Filter::BounceFollowUpCheck

0950_postmaster_filter_bounce_delivery_permanent_failed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter to identify postmaster bounces; and disables sending
notification if delivery fails permanently.

state: Channel::Filter::BounceDeliveryPermanentFailed

0955_postmaster_filter_bounce_delivery_temporary_failed
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter to identify postmaster bounces; and reopens tickets if
delivery fails permanently.

state: Channel::Filter::BounceDeliveryTemporaryFailed

1000_postmaster_filter_database_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter for filters managed via admin interface.

state: Channel::Filter::Database

5500_postmaster_internal_article_check
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter which sets the articles visibility to internal if it
is a rely to an internal article or the last outgoing email is internal.

state: Channel::Filter::InternalArticleCheck

6005_postmaster_filter_identify_group
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Defines postmaster filter to identify ticket group.

state: Channel::Filter::IdentifyGroup',