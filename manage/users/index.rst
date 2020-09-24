Users
*****

The user management allows you to add new users or edit existing ones.
If needed you can also restrict the users listed by role or searching.

.. figure:: /images/manage/users/user-management.png
    :alt: Screenshot showing the user management of Zammad
    :align: center

What is a user in terms of Zammad?
==================================

Unlike other tools like e.g. OTRS not just your agents and admins have an account.
Technically your customer does as well - here's why:

   In order to provide advanced features like listing all customers tickets Zammad requires references.
   These are bound to a user account which can have different permissions.
   This also allows you to change permissions of a user without loosing information.

   .. note:: Zammad will always create a new user account as customer (by default) in case you receive
      a message from a unknown user. During this process Zammad will try to recognize the first and lastname.

   .. hint:: Users are available in Zammad globally. They're not bound to specific groups!

Manage your users
=================

.. toctree::
   :hidden:

   manage-via-ui
   manage-via-import
   LDAP (integration) </system/integrations/ldap>
   Exchange (integration) </system/integrations/exchange>
   API <https://docs.zammad.org/en/latest/api/intro.html>

:doc:`by using the UI <manage-via-ui>`
   The simplest way is to use Zammads UI to update or create users.
   You can do so by using the user management.

      .. note:: **🕵️ Agents can also create and edit users**

         Even without access to the user management, Zammad allows user creation within the
         `ticket creation dialogue <https://user-docs.zammad.org/en/latest/basics/service-ticket/create.html>`_.
         Agents can also update customer users by using the search function or directly
         `within a ticket <https://user-docs.zammad.org/en/latest/extras/customers.html>`_.

   .. figure:: /images/manage/users/editing-and-adding-users-via-ui.gif
      :alt: Screencast showing a user being updated and one being created.
      :align: center
      :width: 80%

:doc:`by using CSV imports <manage-via-import>`
   You can use the "Import" button to download a sample CSV or upload a ready to go one.

   .. figure:: /images/manage/users/importing-users-via-csv.gif
      :alt: Screencast showing users being imported via CSV
      :align: center
      :width: 80%

by using synchronisation
   Currently you can either use :doc:`LDAP </system/integrations/ldap>` or
   :doc:`Exchange address books </system/integrations/exchange>`.
   When using LDAP, you don't require local passwords.

The techy way 🤓
   If above options are not the right ones for you, you can also use
   `Zammads API <https://docs.zammad.org/en/latest/api/intro.html>`_.
   It allows you to automate things entirely if required. 🚀

Inactive users
++++++++++++++

Users set to inactive can no longer login to Zammad. If the affected user is an agent,
agents no longer can set this user as ticket owner. You can use this option to keep ticket data.

.. note:: ℹ Disabling a Customer does not deny emails from that customer!

Your agents can still search for inactive users.
Inactive users will be greyed out - on screens with user selections, Zammad will clearly state
if a user is inactive.

   .. figure:: /images/manage/users/customer-search-returns-inactive-user.png
      :alt: Screencast showing a ticket creation screen with a user search returning an inactive user.
      :align: center

.. _manage-user-rights:

Assigning permissions to users
==============================

.. toctree::
   :hidden:

   Roles </manage/roles/index>
   Group permissions on the user </manage/users/group-permissions>

As soon as you have more than one :doc:`group </manage/groups>` within Zammad,
you'll need to assign your agents the permissions to access them.

:doc:`Assign roles to users </manage/roles/index>`
   Roles can provide more than just permissions to specific groups.
   A big benefit in using roles is less administration and ensuring that all users within
   e.g. a department have the same rights.

   .. figure:: /images/manage/users/assign-group-roles-to-user.gif
      :alt: Screencast showing a user receiving further roles
      :align: center
      :width: 80%

:doc:`Directly assign group permissions on a user <group-permissions>`
   If you don't have too many agents to administer, roles may be a slight overkill.
   Instead you can also assign permissions to groups directly on the user in question.

      .. note:: In order to Zammad provide the group selection, you also need to provide a role with ``ticket.agent`` permission.
         By default the role ``Agent`` typically provides this permission!

   .. figure:: /images/manage/users/assign-group-permissions-directly-to-user.gif
      :alt: Screencast showing a user being assigned specific group rights directly within the user.
      :align: center
      :width: 80%

.. hint:: You can use Zammads LDAP mapping to map roles to existing groups in your LDAP.
   This reduces your administration tasks within Zammad and doesn't require to touch every user in question. 😎
