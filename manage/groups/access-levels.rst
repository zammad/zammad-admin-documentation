Group Access Levels
===================

When assigning an agent to a :doc:`group </manage/groups/index>`,
Zammad gives you fine-grained control
over what actions that agent can perform within it:

.. figure:: /images/manage/groups/access-levels/access-table.png
   :alt: The group access level setting in the Edit User dialog
   :align: center
   :width: 80%

   Use the group access table to grant per-group privileges.

Within each group, the different access levels allow an agent to...

:READ:     ...view tickets
:CREATE:   ...create new tickets
:CHANGE:   ...modify existing tickets
:OVERVIEW: ...see ticket overviews (but not ticket details)
:FULL:     ...all of the above
           **and be assigned / receive notifications for tickets**

.. note:: 

   🔔 **Full group access also enables notifications for that group’s tickets.**

Setting Access Levels
---------------------

There are two ways to define an agent’s per-group access levels:

1. Directly, in the :ref:`Edit User dialog <user-details-group-access>`

   .. figure:: /images/manage/groups/access-levels/assign-group-access-per-user.gif
      :alt: Screencast showing a user being assigned specific group rights directly within the user.
      :align: center
      :width: 80%

      Simply set your access levels right on the target user.

2. Implicitly, by :ref:`editing a user’s roles <role-settings-group-access>`

   .. figure:: /images/manage/roles/group-access-levels.png
      :alt: Group access table in Edit Role dialog
      :align: center
      :width: 80%

      First, set your access levels on a role...

   .. figure:: /images/manage/groups/access-levels/assign-group-roles-to-user.gif
      :alt: Screencast showing a user receiving further roles
      :align: center
      :width: 80%

      ...then, add that role to the target user.

.. note:: ⚖️ **We recommend choosing one or the other**;
   things can get confusing if you use both at the same time.

   So which one is right for you? *Whichever one is less work.*
   If you’re trying to assign multiple agents
   to the same group with the same access levels,
   create a role for them to share—that’s what roles are for!

Examples
--------

“The Standard Issue”
   .. figure:: /images/manage/groups/access-levels/full-rights.png
      :alt: The group access table, checked "Full"
      :align: center
      :width: 50%

   When a system only has one group,
   this is the default access level assigned to all agents.
   Unless you have special needs in mind, this is the way to go.

“The Supervisor”
   .. figure:: /images/manage/groups/access-levels/everything-but-full.png
      :alt: The group access table, checked "Read", "Create", "Change", and "Overview
      :align: center
      :width: 50%

   Agents with all permissions except for “full” **cannot be assigned tickets**.
   Otherwise, their privileges are identical to agents with “full” access.
   Great for letting other people do the real work.

“The Meddler”
   .. figure:: /images/manage/groups/access-levels/read-change-and-overview.png
      :alt: The group access table, checked "Read", "Change", and "Overview
      :align: center
      :width: 50%

   Agents with “read”, “change”, and “overview” access
   can do everything except create tickets or be assigned to them.
   Great for getting involved in other people’s business.

“The Intern”
   .. figure:: /images/manage/groups/access-levels/create-only.png
      :alt: The group access table, checked "Create"
      :align: center
      :width: 50%

   Agents with only “create” access can do just that,
   and nothing else—once they hit **Save**, they’ll never see that ticket again.
   Great for taking phone calls for someone more important than you.
