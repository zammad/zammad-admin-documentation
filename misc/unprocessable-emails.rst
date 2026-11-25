Unprocessable Emails
====================

Zammad turns incoming emails into tickets. When an email cannot be processed at
all, Zammad does not drop it. It creates a ticket titled
``Unprocessable email`` instead, so that the request stays visible and an
agent can pick it up.

Such a ticket carries the complete email as it arrived, plus a log of what went
wrong. That is what makes the ticket workable although Zammad could not read
the email.

Error Tickets
-------------

Zammad takes the title from the default language at the time the ticket is
created, so changing the default language later does not rename tickets that
already exist.

The ticket starts in the state that is set as the default for new tickets and is
assigned to the group of the email channel that fetched the mail. If that
channel has no group, Zammad uses the group that owns the recipient address of
the email, and falls back to the first active group.

The ticket carries a single internal note of the system account with two
attachments:

``unprocessable_email.eml``
   The raw email as it arrived.

``processing_log.txt``
   When processing failed and what Zammad reported about the failure. Comparing
   it with the raw email shows whether the email or Zammad is at fault.

The note itself is not rendered. The conversation shows a warning instead,
stating that the email could not be processed. The warning also offers the
``Download raw email`` and ``Download processing log`` buttons, which download
exactly those two attachments.

Common Reasons
--------------

Zammad creates an error ticket whenever processing fails. The usual causes are:

**Unreadable message**
   The email has no header field Zammad can read. This catches input that is
   not an email at all, for example plain text.

**Processing exceeds the time limit**
   Zammad stops processing a single email after three minutes. Big or unusual
   messages can exceed that.

**Unexpected processing error**
   Anything else that fails while Zammad reads the email. The processing log
   names what Zammad reported, which is what to hand to Zammad support when
   the email itself is fine.

Email Without a Usable Sender
-----------------------------

A broken sender does not produce an error ticket.

**Malformed sender address**
   Zammad creates the customer from the address it can read: the address
   becomes the customer's login, and the customer gets no email address.
   Nothing is sent to an address Zammad could not read, and later emails from
   the same sender land on that same customer.

**No sender at all**
   The ticket is created for the system account. It has no customer, and the
   customer column of an overview shows ``-`` instead of a name.

Handling an Error Ticket
------------------------

- Read the raw email to see who wrote and what the request was.
- Use **Change customer** to attach the ticket to the right customer, also when
  it has none yet, and continue working it like any other ticket.
- If the email makes no sense at all, read the processing log, then close or
  delete the ticket.
- Postmaster filters only run on email that Zammad could process, so a sender
  whose mail keeps failing cannot be caught by them. Block such a sender in the
  mailbox itself.

Reprocessing a Repaired Email
-----------------------------

Zammad has no way to reprocess an error ticket. The rake tasks for failed emails
only work on records from before 7.3, and an error ticket carries no such
record.

A repaired copy can still become a ticket: download the raw email, fix what made
it unreadable, and feed the file back into Zammad with the console command from
the :doc:`/channels/email/advanced/fetchmail` page. Zammad processes it like a
mail that arrives in the mailbox, which means a copy that is still broken
creates another error ticket. The first one stays behind, to be closed, merged
or deleted.

Monitoring
----------

Unprocessable emails no longer appear in the monitoring. Zammad recorded them
as failed emails and reported their count until 7.3. Records from before the
update survive and keep being reported until they are removed. The
:docs:`Administration via Console </admin/console/other-useful-commands.html>`
page describes how to reprocess such a record, which turns it into a ticket.
