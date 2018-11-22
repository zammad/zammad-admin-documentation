Roles
*******

... are the aggregation of groups. These should represent the field of activity / functional description of the agent. A user can be active in several roles.

The assignment of rights directly via a group should be avoided when roles are used.

Admin
-------

An admin role can be given access to different areas in the admin interface. You can give someone full access to the admin area (Admin - Admin Interface = yes). However, it is also possible to distribute only access to some areas.
For example, you could choose someone as a "Text-Module-Coordinator" who is a normal agent, but coordinates all changes in this area. In this way the admin can be relieved.

You can give access to the following sections:

.. image:: images/manage/Zammad_Helpdesk_-_Roles_admin.jpg

Agent
-------

You can selectively give agents access to communication and reporting functions:

.. image:: images/manage/Zammad_Helpdesk_-_Roles3.jpg

In addition, access rights can be given to the individual groups:

.. image:: images/manage/Zammad_Helpdesk_-_Roles-2.jpg

**Common Use Cases:**

In the vast majority of cases, the agent role should simply be given the full permission:

.. image:: images/manage/permission-example-use-case-agent.jpg

This is the recommended default and should be used unless you have special requirements for the agent role.

Another common use case is the supervisor role, where the supervisor can freely view and modify tickets, just like an agent, but cannot be assigned as a ticket owner. This is done by selecting all four individual permissions:

.. image:: images/manage/permission-example-use-case-supervisor.jpg

**Understanding each Permission:**

**READ**
     Read only access to the tickets and entries of this group.

**CREATE**
     Right to create tickets or entries in this group.

**CHANGE**
     Right to change the attributes of tickets or entries or areas that belong to this group.

**OVERVIEW**
     Right to see tickets in the overviews. A view of the ticket details is not possible

**FULL**
     Right to create, read, change and see tickets in the overviews.


Here are a few examples of different combinations of rights:

.. image:: images/manage/permission-examples2.jpg


Customer
-------
Access to customer tickets based on current_user an organization
--> This checkbox gives the user access to his or her own tickets created in the ticket system. If the customer is a member of a "Shared Organization", he can also see those of the organization.


User preferences
-------

For each of both, agents and customers, you can define which areas are available in the user preferences:

.. image:: images/manage/Zammad_Helpdesk_-_Roles5.jpg

These settings refer to the personal settings that can be set here:

.. image:: images/manage/Zammad_Helpdesk_-_Roles8.jpg

hint
  If agents are not allowed to change their own passwords, no check mark must be set at "Password". In this case, only the admin can assign and change a password.


Default at signup
-------

One of the roles should be created as the "default role" (default at signup = yes). When someone registers in the system who has not yet been registered in the systems, this role is given to them.
This is usually the role "Customer". All other roles must be set to "no".

To keep an overall view of this, the field selection (yes/no) is displayed in a column in the role overview:

.. image:: images/manage/Zammad_Helpdesk_-_Roles7.jpg
