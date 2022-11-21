Roles
=====

If you’re already using Zammad,
you’ll know that users can be **admins**, **agents**, or **customers**.
These are Zammad’s built-in roles, and they’re the tip of the iceberg
of its powerful, flexible, and fine-grained permission system.

.. figure:: /images/manage/roles/role-overview.png
   :alt: Role overview within Zammad's admin settings.
   :align: center
   :width: 90%

   Assign user privileges in the Admin Panel, under **Manage > Roles**.

.. note:: 👀 Users can have both “agent” and “customer” roles at the same time!

   Why would you want this?
   Agents get :doc:`overviews </manage/overviews>`
   of all the tickets they’re *assigned to* (among other things),
   while customers get an overview of all the tickets they’ve *opened*.
   But some teams use Zammad for both internal and public communication,
   so their agents need both.

   Having both roles also changes what you see in the ticket view,
   depending on whether you’re the “customer” or not.

.. tip:: 💡 **LDAP/Active Directory users:**

   Syncing your LDAP “groups” to Zammad roles
   can make access management *way* easier.
   To learn more, see :doc:`/system/integrations/ldap/index`.

.. _what-is-a-role:

What Is a Role?
---------------

**tl;dr** Some users can do things others can’t (like close a ticket).
Users have roles, roles have permissions,
and permissions are what make those actions possible.

So what exactly are permissions, then?

.. figure:: /images/manage/roles/permissions-admin.png
   :alt: List of permissions in the New Role dialog
   :align: center
   :width: 80%

   The ``admin.calendar`` permission gives you access
   to the **Manage > Calendars** admin panel.

Simply put, permissions are names for all the different things
users might want to do throughout the system, such as:

:``chat.agent``: respond to live chat messages
:``ticket.agent``: update tickets
:``admin.user``: access the **Manage > Users** admin panel
:``knowledge_base.editor``: create/edit knowledge base articles

Zammad has dozens of these permissions,
which is a lot to keep track of.
So instead of saying “This user has permissions A, B, and C”,
Zammad says “The *agent role* has permissions A, B, and C,
and this user is an agent.”

This makes creating user accounts for new agents a whole lot simpler,
and it also makes it easier to invent a new permission D
and say “All existing agents can do *that* now, too.”

In short, roles are just collections of permissions that you can give to a user.
The built-in admin, agent, and customer roles are enough for many teams,
but Zammad gives you the freedom to custom-build your own.

And to do that, you’ll need to know what each permission does.

.. _permission-guide:

Reference Guide: Permissions
----------------------------

.. toctree::
   :hidden:

   admin-permissions
   agent-permissions
   user-preferences-permissions

Broadly speaking, there are four types of permissions:

:doc:`🛡️ Admin <admin-permissions>`
   for access to each page of the Admin Panel

:doc:`🕵️ Agent <agent-permissions>`
   for access to customer communications

👤 Customer
   Without the ``ticket.customer`` permission,
   customers can’t see the **My Ticket** overview—but
   they can still log in and open new tickets!

:doc:`🎛️ User Preferences <user-preferences-permissions>`
   for access to your own `user profile <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_

.. note:: 📁 **Permissions are namespaced**,
   which is sort of like having files inside of folders.

   These permissions:

   * ``admin.api``
   * ``admin.branding``
   * ``admin.calendar``
   * ``admin.channel_chat``
   * ``admin.channel_email``
   * ...and 30+ more

   all belong to the ``admin`` namespace.
   You can select them individually,
   or you can just select ``admin`` to enable the whole bunch.

Role Details
------------

Default at signup
   Every new user must be assigned at least one role upon creation.
   This attribute decides which role to give new users by default
   (which usually happens when creating a new ticket for a new customer).

   .. figure:: /images/manage/roles/default-role.png
      :alt: Role overview in the admin panel, showing default role
      :align: center

      The default role is identified in the overview
      of the **Manage > Roles** admin panel.

   .. warning:: 🙅 **Default roles should never provide admin/agent permissions.**
