Roles
*****

.. toctree::
   :hidden:

   admin-permissions
   agent-permissions
   group-permissions
   user-preference-permissions

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
   These permissions affect all administrative settings available for Zammads UI. 
   Granular settings for key users are possible to reduce work loads on admins.

      .. figure:: /images/manage/roles/admin-settings.png
         :alt: Screenshot showing admin settings within Zammad.
         :align: center
         :width: 80%

:doc:`🕵️ agent permissions <agent-permissions>`
   Agent permissions cover all areas that affect communication with customers. 
   Agents are the backbone of your customer support, even though every agent may have different fields to work on.

   :doc:`👪 group permissions <group-permissions>` depend on the agent permission. 
   You may not require them if you prefer to configure group permissions per :doc:`user </manage/users/index>`.

   .. figure:: /images/manage/roles/agents-paradise.png
      :alt: Screenshot showing the most relevant areas for agents: tickets, overviews, chat, knowledge base and caller log.
      :align: center
      :width: 80%

👤 customer permission
   The permission ``ticket.customer`` allows your customers to see their tickets when logged in to Zammad. 
   Removing this permission disables the "Overview" link within the UI, it does not disallow your customer 
   to login!

   .. hint:: **👀 Agents can be customers too!**

      Starting with Zammad 3.5 you can assign your agents with the customer role. 
      This enables access to tickets the agent is customer of. 
      The ticket view for these tickets behaves the same way like it does for your customers. 🙌

:doc:`🛠 user preference permissions <user-preference-permissions>`
   These permissions refer to `Profile Settings <https://user-docs.zammad.org/en/latest/extras/profile-and-settings.html>`_.

      .. figure:: /images/manage/roles/users-profile-settings.png
         :alt: Screenshot showing the profile settings.
         :align: center
         :width: 80%

Default at signup
-----------------

One of your roles has to be the "default role". 
This default role is used for accounts Zammad or one of your agents has to create during e.g. 
ticket creation. This role **should never** provide admin or agent permissions!

By default the role ``Customer`` is the default signup role.

For your overall overview Zammad provides a column in the role listing to tell you which role is the default right away.

.. image:: /images/manage/roles/default-role.png
