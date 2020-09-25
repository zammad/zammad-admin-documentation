Group Settings
==============

Click on a group to edit it, or click on *New group* to create a new group.

There you can edit the following settings:

- *Name*: choose a name for the group.

- *Assignment timeout*: the time in minutes after which the ticket's state will revert back to *unassigned* after the assigned agent hasn't worked on the ticket.

- *Follow up possible*: configure what happens when a customer replies to a closed ticket:

  - *yes*: the ticket will be reopened.
  - *do not reopen ticket but create new ticket*: the ticket will remain closed, and Zammad will instead create a new ticket for the customer's reply.

- *Assign follow ups*: configure whether a closed ticket that has been reopened due to a customer's reply should remain assigned to the last agent:

  - *yes*: the ticket will remain to the last agent who owned it.
  - *no*: Zammad will unassign the ticket.

- *Email*: choose which email address will be used as the sending address (`From` header) when agents reply to tickets in this group. Email addresses can be configured in Channels → Email → Accounts.

- *Signature*: choose which :doc:`signature </channels/email/signatures>` to use when replying to tickets in this group.

- *Note*: an internal note about the group that is only visible to people who can access the group management area.

- *Active*: choose whether the group is enabled or not. Groups cannot be deleted, they can only be set to inactive.

Eventually it should look something like this:

.. image:: /images/manage/Zammad_Helpdesk_-_Groups.jpg
