Groups
******

This is the group management area. From here you can edit existing groups and add new groups.

What are groups?
----------------

Groups in Zammad are similar to working groups that deal with different topics within a company. For example, the tickets relevant to the sales department might be available in the *Sales* group, while the tickets for the support department might be available in the *Support* group. These are just examples; how you structure your groups is up to you.

Tickets enter Zammad through various channels (e.g. via email) and are then sorted into these groups. The tickets (cases) are thus made available to the agents responsible for the group. Each ticket can only belong to one group, and you can decide with a permission system what permissions your agents have in each group. For example, you might want set up a group *Management* for confidential tickets; with the permission system you can configure that only a few select agents will have access to these tickets.

For an additional way to categorize tickets, have a look at  :doc:`tags`.

Group settings
--------------

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

Permissions
-----------

The group's permissions for agents can be set up as follows:

1. directly via the user administration (Admin → Manage → Users), please see: :ref:`manage_user_rights`

or

2. With the permission setting via a role (Admin → Manage → Role), please see: :doc:`roles`

It is recommended to avoid using both configurations.



.. hint:: If the *Group* field does not appear in the ticket view, ensure that:

   * you have created more than one group
   * the current user has "change" permissions to more than one group

   This is necessary because Zammad automatically hides selection fields with only one option.
