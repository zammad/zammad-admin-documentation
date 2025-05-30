Group Settings
==============

Click on a group to edit it, or click on *New group* to create a new group.

.. figure:: /images/manage/groups/group-management.png
   :alt: Screenshot showing Zammad's group management

No matter if you're going to edit or create a new group, each group
comes with the following settings you can adjust as needed.

Please note that groups cannot be removed.

.. figure:: /images/manage/groups/group-settings.png
   :alt: Screenshot showing how a group configuration can look like.
   :width: 60%
   :align: center

   A sample configuration of a group.

Name
   This is the name your agents (and customers when using :doc:`/channels/web`)
   will see within the Zammad-UI.

Parent group
   You can define *another* group as a parent group here. This is useful if you
   want to create group hierarchies. In such a hierarchy (child/parent
   relation), the tree of the parent group is inherited to the child group. That
   means if you move a group which itself has child groups, the child groups
   are "moved" accordingly. However, there is no inheritance of membership or
   permissions. That means you can treat each group as an individual group -
   even if they have a child/parent relation.

   .. hint:: Zammad doesn't show you any child group of the currently selected
      group in the edit dialog. This would lead to a circular reference!

   Zammad supports 10 hierarchy levels for groups as a maximum.

Assignment timeout
   The time in minutes after which the ticket's ownership will revert back to
   *unassigned* after the assigned agent hasn't worked on the ticket.
   This timeout does *not* take any working hours in account.

Follow-up possible
   This option allows you to decide how Zammad should react if a customer
   replies to a closed ticket (no matter if by e.g. email or UI).

   yes
      The ticket will be reopened. This is the default value.

   do not reopen Ticket but create new Ticket
      The ticket will remain closed and Zammad will create a new ticket instead.
      The new ticket contains the customers reply only.

   do not reopen ticket after certain time but create new ticket
      The ticket can be reopened unless the specified number of days
      *after last ticket closure* has been exceeded. If the time limit is
      exceeded, Zammad will create a new ticket instead of reopening.

      Choosing this option will provide the option *Reopening time in days*
      which requires you to provide the number of days you want Zammad to
      wait until it creates new tickets.

Assign follow-ups
   This setting allows you to decide if, upon a reopen of a ticket, the last
   assigned owner should stay assigned or if Zammad should reset the owner to
   nobody.

   yes
      The ticket will remain with the last agent who owned it.
      This is the default value.
   no
      The owner assignment of the ticket will be removed.

Sending Email Address
   Select which sender's email address Zammad will use outbound for replying on
   a ticket in this group.

      .. note:: **You don't have an email address configured yet?**

         Please configure an email based channel before here

            * :doc:`Channels → Email </channels/email/index>`
            * :doc:`Channels → Microsoft 365 IMAP </channels/microsoft365/index>`
            * :doc:`Channels → Microsoft 365 Graph </channels/microsoft365-graph/index>`
            * :doc:`Channels → Google </channels/google/index>`

         and come back afterwards.

Signature
   Choose which :doc:`signature </channels/email/signatures>` to use when
   replying to tickets in this group. Leaving this option unset will send
   emails without any signature.

Shared Drafts
   Shared drafts allows your agents to share ticket drafts (for new and existing
   tickets) with their colleagues. By default this setting is enabled,
   disable it if you don't want your agents to use this function.

   Learn more about shared drafts
   :user-docs:`in our user documentation </extras/shared-drafts.html>`.

Note
   An internal note about the group that is only visible to people who can
   access the group management area.

Active
   Don't need the group anymore? If you can't or don't want to recycle (rename)
   the group, you can also set it to inactive. Agents will no longer be able to
   see or edit tickets in this group. However, customers can still interact
   with their existing tickets in an inactive group.

   .. tip::

      Want to handle tickets from an inactive group, which are updated by
      customers?

      You could e.g. create a trigger which moves them to another
      group when they got updated. Create this trigger before deactivating the
      group so it is selectable in the trigger configuration.

   .. warning::

      Please keep in mind that you still can route tickets into these groups.
      This is potentially dangerous, make sure the group is no longer part
      of email filters or a destination group.

