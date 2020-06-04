Filters
*******

.. figure:: /images/channels/email/filters-page.png
   :alt: Account settings page
   :align: center

Postmaster filters allow you to match email headers (e.g. ``From``, ``To``, ``Subject``, ``X-Spam-Flag`` etc.) and execute a set of actions whenever Zammad's email parser encounters a matching email. The actions will be applied to the ticket that is created or updated by this email. Here are some examples of what is possible with filters:

- Automatically dispatch tickets into certain groups:

  For example, tickets from ``amazon.com`` could automatically be dispatched to the Purchasing group.

  | From: contains: ``regex:(\.|@)amazon\.com``
  | Group: Purchasing

  .. note:: Note that the Group action only has an effect when the matching email results in a new ticket. Zammad will not change the group of existing tickets.

- Automatically increase the priority of tickets from a VIP customer:

  | From: contains: ``ourvipcustomer@example.com``
  | Priority: 3 high

  .. note:: Note that the Priority action only has an effect when the matching email results in a new ticket. Zammad will not change the priority of existing tickets.

- Automatically tag and close spam tickets that have been marked as spam by an external spam filter (e.g. SpamAssassin):

  | X-Spam-Flag: contains: ``YES``
  | Tag: add: ``spam``
  | State: closed

  .. note:: Note that the State action only has an effect when the matching email results in a new ticket. Zammad will not change the state of existing tickets. It will add the tag though if it missing, even if the mail is an update to an existing ticket.

The following actions are only effective when creating tickets: Group, State, Priority, Owner.

Different attributes of a filter can be combined with each other. Likewise, the following actions can be combined. The supported matches are "contains" and "contains not"; for advanced matching, you can use regular expressions by prefixing the string with ``regex:``.

Note that Zammad matches against the full header, e.g. for a mail with "``From: Display Name <display.name@example.com>``", the ``From`` condition will test against "``Display Name <display.name@example.com>``". This is especially important when using anchored regular expressions; ``regex:^display\.name@example.com$`` would not match this mail!

It should be borne in mind that the combined attributes build on each other. If a filter is no longer needed, it can either be temporarily set inactive or deleted directly.
