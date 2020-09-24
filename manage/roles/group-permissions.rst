Group permissions
-----------------

You can either provide granular or full group permissions.
These permissions decide on how your agents can interact with the tickets of
that group.

   .. hint:: **🤔 Huh? I don’t see the group table...**

      You need more than one active group within Zammad to see group permissions.
      If you have one group only, all agents by default have access to that group.

   .. note:: **⚠ Permissions also affect notifications!**

.. csv-table:: Understanding Permissions
   :header: "Permission", "Description"
   :widths: 10, 20

   "READ", "Read only access to the tickets of this group. You can find tickets via search function."
   "CREATE", "Right to create tickets in this group."
   "CHANGE", "Right to change the attributes of tickets that belong to this group."
   "OVERVIEW", "Right to see tickets in the overviews. A view of the ticket details is not possible."
   "FULL", "Right to find, create, read, change and see tickets in the overviews. Assign agent as ticket owner."

.. hint:: **😵 Can't assign an agent as ticket owner?!**

   In order to assign an agent as Ticket-Owner, the agent needs **FULL** rights on the group, other wise this is not possible.

Examples and use cases
^^^^^^^^^^^^^^^^^^^^^^

.. figure:: /images/manage/group-permissions/full-rights.png
   :alt: The user gets full rights to a group.
   :align: center
   :width: 90%

In most cases, the permission ``full`` is the best choice for groups your agent mainly works in.
This provides the complete notification and ticket experience for the group in question.

   .. hint:: This is the default permission we'd suggest if you don't require further restrictions
      for the agent.

.. figure:: /images/manage/group-permissions/everything-but-full.png
   :alt: User has granular rights with everything but "full".
   :align: center
   :width: 90%

If you provide your agent with everything but ``full`` permission, the agent can no longer be owner of
a ticket in the group of question. All other ticket relevant tasks can still be full filled.

   .. hint:: This is the perfect permission for supervisors.

.. figure:: /images/manage/group-permissions/read-change-and-overview.png
   :alt: User is allowed to read, change and see tickets in overviews.
   :align: center
   :width: 90%

While your agent can't create new tickets with above permissions, the agent can still work on existing tickets.

.. figure:: /images/manage/group-permissions/create-and-overview.png
   :alt: The user is allowed to create new tickets and see them in an overview.
   :align: center
   :width: 90%

Above permissions allow the agent to create tickets in the group.
The agent also will see the tickets within overviews if applicable, but can't open or update the ticket.

.. figure:: /images/manage/group-permissions/read-and-change.png
   :alt: The user is allowed to read tickets and update them, but can't see them in overviews.
   :align: center
   :width: 90%

The agent can use the search function or direct links to tickets in question.
Tickets can get updated by the agent.

.. figure:: /images/manage/group-permissions/create-only.png
   :alt: Tickets can be created in the affected group, but not accessed further.
   :align: center
   :width: 90%

This allows your agent to create tickets for the group in question.
After ticket creation the agent has no further access to it.

   .. hint:: Perfect for situations an agent answers a phone call that can't be solved with the agents knowledge.
      Instead of asking your customer to call again, the agent can note down the call and what it's about.
      After creating the ticket in the correct group, a agent of the group can solve the case. 💪
