Group Permissions
=================

When assigning a group to an agent or a role, Zammad gives you fine-grained control
about the access levels:

.. figure:: /images/manage/groups/access-levels/access-table.png
   :alt: The group permission setting in the Edit User dialog
   :align: center
   :width: 80%

   Use the group permission table to grant per-group privileges.

The group permissions access levels are:

- **Read:** View, search for and find tickets.
- **Create:** Create new tickets and move existing tickets into the group.
- **Change:** Modify existing tickets.
- **Overview:** See tickets in overviews (but no ticket details).
- **Full:** All of the above and:

  - To be set as ticket owner.
  - Receive notifications for tickets.

Setting Permissions
-------------------

There are two ways to set the permission level for an agent:

1. User-based (directly in the :ref:`Edit User dialog <user-details-group-access>`):

   .. figure:: /images/manage/groups/access-levels/assign-group-access-per-user.png
      :alt: Screenshot showing the group assignment to a user in the user edit dialog.
      :align: center
      :width: 80%

      Simply set your permission levels right on the target user.

2. Role-based (by :ref:`editing a user role <role-settings-group-access>`):

   First, head over to :doc:`Roles </manage/roles/index>` to set up the
   permissions you want to assign.
   Example:

   .. figure:: /images/manage/roles/group-access-levels.png
      :alt: Group permissions table in edit role dialog
      :align: center
      :width: 80%

   Then you are good to go to assign the role to a user in the user edit
   dialog. Example:

   .. figure:: /images/manage/groups/access-levels/assign-group-roles-to-user.png
      :alt: Screenshot shows the role assignment in the user edit dialog
      :align: center
      :width: 80%

.. attention::
   Make sure to click on the ➕ *Add* button after assigning the last
   group. Otherwise, your last selection *will not* be saved.

.. note:: **We recommend choosing one or the other**;
   things can get confusing if you use both at the same time.

   So which one is right for you? *Whichever one is less work.*
   If you're trying to assign multiple agents
   to the same group with the same permissions,
   create a role for them to share - that's what roles are for!

.. hint::
   If you can't see the group permission table, make sure that you have
   selected the ``ticket.agent`` permission for the user or role.

Examples
--------

“The Standard Issue”
   .. figure:: /images/manage/groups/access-levels/full-rights.png
      :alt: The group permission table, checked "Full"
      :align: center
      :width: 80%

   When a system only has one group,
   this is the default permission level assigned to all agents.
   Unless you have special needs in mind, this is the way to go.

“The Supervisor”
   .. figure:: /images/manage/groups/access-levels/everything-but-full.png
      :alt: The group permission table, checked "Read", "Create", "Change", and "Overview
      :align: center
      :width: 80%

   Agents with all permissions except for “full” **cannot be assigned tickets**
   and don't receive notifications (unless they are subscribed to or mentioned
   in the ticket). Otherwise, their privileges are identical to
   agents with “full” access. Great for letting other people do the real work.

“The Meddler”
   .. figure:: /images/manage/groups/access-levels/read-change-and-overview.png
      :alt: The group permission table, checked "Read", "Change", and "Overview
      :align: center
      :width: 80%

   Agents with “read”, “change”, and “overview” access
   can do everything except create tickets or be assigned to them.
   Great for getting involved in other people's business.

“The Intern”
   .. figure:: /images/manage/groups/access-levels/create-only.png
      :alt: The group permission table, checked "Create"
      :align: center
      :width: 80%

   Agents with only “create” permission can do just that,
   and nothing else—once they hit **Save**, they'll never see that ticket again.
   Great for taking phone calls for someone more important than you.
