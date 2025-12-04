Roles
=====

Roles are a crucial part of Zammad's permission system. They determine what
users can do within the application and can also contain group permissions.
You can manage roles in Zammad's settings under *Manage > Roles*.
This page gives you an explanation of what roles and permissions are. You can
find details about each permission in a :doc:`separate sub page <permissions>`.

Basics
------

A role is the place where you define permissions. Each user has an assigned role
and inherits the permissions of this role. The permissions define what a user is
allowed to do and which parts and features of Zammad are accessible for them.
Zammad ships with three roles by default: **Admin**, **Agent** and **Customer**.
You can adjust these roles or create new ones to fit your company's needs. In
case you are using LDAP/Active Directory, you can even sync your existing groups
to Zammad with the :doc:`LDAP integration </system/integrations/ldap/index>`.

This makes creating user accounts for new agents much simpler because you just
have to assign the correct role instead of configuring permissions and group
access for each user individually. Examples of some important permissions are:

* ``ticket.agent``: allows a user to work on tickets
* ``admin.user``: allows to manage users in Zammad's admin settings
* ``knowledge_base.editor``: allows a user to create/edit knowledge base
  articles
* ``user_preferences``: allows a user to change their own profile setting

To adjust a permission of a role, simply click on it. To create a new role, use
the **New Role** button in the top right corner. In both cases, a dialog opens
where you can configure it.

.. _permission-guide:

Permissions
-----------

.. toctree::
   :hidden:

   permissions

You can configure the permissions in the configuration dialog of a role by
checking or unchecking the relevant boxes. The admin and user preferences
permissions are hierarchical, so you can grant all by checking the parent
(e.g. ``admin``).

Details about each permission are described in a separate
:doc:`permission sub page <permissions>`, split by common use cases.

.. note:: Users can have multiple roles assigned!
   An agent can also be a customer or could have admin permissions as a team
   leader, for example. If an agent is customer and the ticket is in a group
   where the agent doesn't have at least reading permissions, the ticket only
   shows a reduced customer view for this agent.

Group Permissions
-----------------

In addition to the feature permissions, **agent** roles can also contain group
permissions. This means that you can define to which groups agents
with this role have access to. To see the group permission table, the role
must include the agent permission and more than one group has to exist in your
system.

You can also set the group permissions for each user individually in the user
settings. However, this comes with the downside that you have to configure this
for each user. Please have a look at the
:doc:`group permission section </manage/groups/access-levels>` for details.


Additional Settings
-------------------

Default at Signup
   Define if the role is assigned to new users by default by setting
   it to ``yes``. Typically, new users which are created automatically are
   customers. Unless you have a specific use case, you should only set this for
   a customer role without additional permissions. Otherwise, new users would
   get access to features and data they shouldn't have access to.

Note
   Add a note to the role. This note is used as explanation in the add/edit user
   dialog.

Active
   Roles can't be deleted, only set to inactive. If you do so, all users lose
   the permissions of this role. If this inactive role is the only one of a
   user, this account will not be able to do anything in Zammad. The login will
   be still possible.
