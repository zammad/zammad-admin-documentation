Group Settings
==============

Click on a group to edit it, or click on *New group* to create a new group.

.. figure:: /images/manage/groups/group-management.png
   :alt: Screenshot showing Zammad's group management

No matter if you're going to edit or create a new group, each group
comes with the following settings you can adjust as needed.

Name
   This is the name your agents (and customers when using :doc:`/channels/web`)
   will see within the Zammad-UI.

Assignment timeout
   The time in minutes after which the ticket's ownership will revert back to
   *unassigned* after the assigned agent hasn't worked on the ticket.

      .. note::

         This timeout does not take any working hours in account.

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
      The ticket will remain to the last agent who owned it.
      This is the default value
   no
      The owner assignment of the ticket will be removed.

Email
   Select which sender's email address Zammad will use outbound for replying on
   a ticket in this group.

      .. note:: **You don't have an email address configured yet?**

         Please configure an email based channel before here

            * :doc:`Channels → Email </channels/email/index>`
            * :doc:`Channels → Microsoft 365 </channels/microsoft365/index>`
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
   Don't need the group any more? If you can't or don't want to recycle (rename)
   the group, you can also set it to inactive. Agents and customers will no
   longer be able to see the group and thus can't add, update or read it's
   tickets.

      .. note::

         As of now groups cannot be removed.

      .. warning::

         Please keep in mind that you still can route tickets into these groups.
         This is potentially dangerous, make sure the group is no longer part
         of email filters or a destination group.

.. figure:: /images/manage/groups/group-settings.png
   :alt: Screenshot showing how a group configuration can look like.
   :width: 90%
   :align: center

   A sample configuration of a group.
