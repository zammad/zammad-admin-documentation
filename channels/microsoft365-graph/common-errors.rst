Common Errors
=============

Here you can find some common errors in M365 context. Also have a look at
the general
:doc:`M365 documentation </channels/microsoft365-graph/index>` for
the configuration and the
:doc:`common errors mentioned in the M365 IMAP channel <../microsoft365/common-errors>`, if
your error is not covered here.

.. hint::
  If you try to fix a problem, make sure to remove the account after the fix first
  and re-add it then again.

Problem with User Mailbox
-------------------------

``MailboxNotEnabledForRESTAPI``
  *The mailbox is either inactive, soft-deleted, or is hosted on-premise.*

Possible reasons:

- The user has no access to the mailbox.
- The account has no mailbox at all (user mailboxes).

Either grant the user access to the mailbox or assign them a license and create
a mailbox for this user.

Problem with User Permissions
-----------------------------

``ErrorItemNotFound``
  *The specified object was not found in the store., Default folder Root not found.*

Indicates that the user has no delegation permissions for the mailbox.
Make sure that the permissions are set correctly or consider using another
account.

Problem with Shared Mailbox
---------------------------

``ErrorInvalidUser``
  *The requested user '\*' is invalid.*

Possible reason could be that the shared mailbox you provided is wrong.
Check if the provided shared mailbox email address is correct.
