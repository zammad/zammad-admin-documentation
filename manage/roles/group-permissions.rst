Group permissions
-----------------

You can either provide granular or full group permissions. 
These permissions decide on how your agents can interact with the tickets of 
that group.

   .. note:: **⚠ Permissions also affect notifications!**

.. csv-table:: Understanding Permissions
   :header: "Permission", "Description"
   :widths: 10, 20

   "READ", "Read only access to the tickets and entries of this group."
   "CREATE", "Right to create tickets or entries in this group."
   "CHANGE", "Right to change the attributes of tickets, entries or areas that belong to this group."
   "OVERVIEW", "Right to see tickets in the overviews. A view of the ticket details is not possible."
   "FULL", "Right to create, read, change and see tickets in the overviews. Assign agent as ticket owner."

.. hint:: **😵 Can't assign an agent as ticket owner?!**
   
   In order to assign an agent as Ticket-Owner, the agent needs **FULL** rights on the group, other wise this is not possible.

In most cases, the permission ``full`` is the best choice for groups your agent mainly works in.

In the vast majority of cases, the agent role should simply be given the full permission:

.. image:: /images/manage/permission-example-use-case-agent.jpg

This is the recommended default and should be used unless you have special requirements for the agent role.

Another common use case is the supervisor role, where the supervisor can freely view and modify tickets, just like an agent, but cannot be assigned as a ticket owner. This is done by selecting all four individual permissions:

.. image:: /images/manage/permission-example-use-case-supervisor.jpg





Here are a few examples of different combinations of rights:

.. image:: /images/manage/permission-examples-comb1.jpg

This applies to group "Incoming" and allows the agent to read and edit its tickets. He can also search for those tickets and see them in overviews.
The agent **can't** create new tickets into the group "Incoming".

.. image:: /images/manage/permission-examples-comb2.jpg

This applies to group "Incoming" and allows the agent to create new tickets to the group. He can also see the tickets in overviews.
The agent can't read or edit tickets of this group (also Bulk actions do not work). Searching for tickets inside of "Incoming" is also not possible.

.. image:: /images/manage/permission-examples-comb3.jpg

The agent can read, search and edit tickets for the group "Incoming".
The tickets will not appear in the agent's overviews and the creation of new tickets doesn't work as well.