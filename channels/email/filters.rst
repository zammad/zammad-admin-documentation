Filters
*******

.. toctree::
   :hidden:

   filters/system-filters

.. figure:: /images/channels/email/filters-page.png
   :alt: Account settings page
   :align: center

Postmaster filters allow you to match email headers
(e.g. ``From``, ``To``, ``Subject``, ``X-Spam-Flag`` etc.) and execute a set of
actions whenever Zammad's email parser encounters a matching email. The actions
will be applied to the ticket that is created or updated by this email.

Zammad comes with system filters as well. While you can't change them, it might
be useful for you what they actually do. Learn more on
:doc:`filters/system-filters`.

Different attributes of a filter can be combined with each other. Likewise,
the following operators can be combined. The supported matches are:

   * *contains*
   * *contains not*
   * *is any of*
   * *is none of*
   * *starts with one of*
   * *ends with one of*
   * *matches regex*
   * *does not match regex*

You can also have a look at the
:doc:`object conditions </misc/object-conditions/basics>` for text fields, where
you can find a description of how the operators are working.

.. note::

   The following attributes can only be defined by the filter when a ticket is
   **created**:

   * Group
   * State
   * Priority
   * Owner

   Zammad will **not overwrite** the value of these objects when a ticket
   is updated.

Here are some examples of what is possible with filters:

Automatically dispatch tickets into certain groups:
  For example, tickets from ``amazon.com`` could automatically be dispatched to
  the Purchasing group.

  | From: *matches regex:* ``(\.|@)amazon\.com``
  | Group: Purchasing

Automatically dispatch tickets to responsible staff based on organization name:
  | Organization: *starts with one of:* ``A`` ``B`` ``C``
  | Owner: Emily Adams

Automatically increase the priority of tickets from a VIP customer:
  | From: *contains:* ``ourvipcustomer@example.com``
  | Priority: 3 high

Automatically tag and close spam tickets that have been marked as spam by an external spam filter (e.g. SpamAssassin):
  | X-Spam-Flag: *contains:* ``YES``
  | Tag: add: ``spam``
  | State: closed

  .. note::

    Note that the State attribute only has an effect when the matching email
    results in a new ticket. It will add the tag though if it is missing, even
    if the mail is an update to an existing ticket.

If a filter is no longer needed, it can either be temporarily set inactive or
deleted directly.
