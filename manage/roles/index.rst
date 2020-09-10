Roles
*****

.. toctree::
   :hidden:

   group-permissions

Roles are a great way to provide the exact same permissions to several users. 
Roles work best with automated user synchronisation like :doc:`/system/integrations/ldap`.

.. figure:: /images/manage/roles/role-overview.png
   :alt: Role overview within Zammads admin settings.
   :align: center
   :width: 90%

Parts of a roles
----------------

Depending on your use cases, the default roles may be sufficient. 

:doc:`🛡️ admin permissions <admin-permissions>`
   X

:doc:`🕵️ agent permissions <agent-permissions>`
   X

   :doc:`👪 group permissions <group-permissions>` depend on the agent permission. 
   You may not require them if you prefer to configure group permissions per :doc:`user </manage/users/index>`.

👤 customer permission
   The permission ``ticket.customer`` allows your customers to see their tickets when logged in to Zammad. 
   Removing this permission disables the "Overview" link within the UI, it does not disallow your customer 
   to login!

   .. hint:: **👀 Agents can be customers too!**

      Starting with Zammad 3.5 you can assign your agents with the customer role. 
      This enables access to tickets the agent is customer of. 
      The ticket view for these tickets behaves the same way like it does for your customers. 🙌

:doc:`🛠 user permissions <user-permissions>`
   X


The assignment of rights directly via a group should be avoided when roles are used.

Admin
-----

An admin role usually has access to the the admin interface, but you can either give someone full access to the admin area (Admin - Admin Interface = yes) or you can distribute access to some areas only.
For example, you could choose someone as a "Text-Module-Coordinator" who is a normal agent, but coordinates all changes in this area. In this way the admin can be relieved.

You can give access to the following sections:

.. image:: /images/manage/Zammad_Helpdesk_-_Roles_admin.jpg

Agent
-----

You can selectively give agents access to communication and reporting functions:

.. image:: /images/manage/Zammad_Helpdesk_-_Roles3.jpg

In addition, access rights can be given to the individual groups:

.. image:: /images/manage/Zammad_Helpdesk_-_Roles-2.jpg

PERMISSIONS


Customer
--------

Access to customer tickets based on current_user and organization
--> This checkbox gives the user access to his or her own tickets created in the ticket system. If the customer is a member of a "Shared Organization", he can also see the tickets of the shared organization.


User preferences
----------------

For each of both, agents and customers, you can define which areas are available in the user preferences:

.. image:: /images/manage/Zammad_Helpdesk_-_Roles5.jpg

These settings refer to the personal settings that can be set here:

.. image:: /images/manage/Zammad_Helpdesk_-_Roles8.jpg

.. hint:: If agents are not allowed to change their own passwords, you don't have to check "Password". In this case, only the admin can assign and change a password.


Default at signup
-----------------

One of your roles has to be the "default role". 
This default role is used for accounts Zammad or one of your agents has to create during e.g. 
ticket creation. This role **should never** provide admin or agent permissions!

By default the role ``Customer`` is the default signup role.

For your overall overview Zammad provides a column in the role listing to tell you which role is the default right away.

.. image:: /images/manage/roles/default-role.png
