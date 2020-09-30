Users
=====

Depending on your organization’s IT capabilities,
users can be managed individually or in bulk,
or even synchronized with third-party directory services.

.. figure:: /images/manage/users/managing-users-manually.gif
   :alt: Creating and editing users directly in the Admin Panel
   :align: center
   :width: 80%

   The simplest way to manage users is directly in the Admin Panel.

Learn more about managing users...

.. toctree::
   :maxdepth: 1

   via the Admin Panel <via-the-admin-panel>
   via CSV import <via-csv-import>
   via LDAP/Active Directory integration </system/integrations/ldap>
   via Exchange integration </system/integrations/exchange>
   via REST API <https://docs.zammad.org/en/latest/api/intro.html>

.. note:: 😲 **Customers get their own user accounts, too?**

   Yes! Unlike OTRS, Zammad needs to store accounts
   for *everyone* who communicates through the system.

   Why? It helps us do things like show all tickets from a certain customer.

   How? Zammad checks the sender of every incoming message
   at every inbox it monitors,
   and if it doesn’t recognize the address,
   ✨ **poof**—new customer account!

   (Your customers never need to set a password.
   Of course, they can if they want to,
   but the account will be there even if they never use it.)

.. _user-details-reference:

Reference Guide: User Details
-----------------------------

Most of the attributes you can set on user accounts are self-explanatory.
The ones that aren’t are described below.

.. figure:: /images/manage/users/user-details.png
   :alt: The edit user dialog, showing the various user detail fields
   :align: center
   :width: 60%

   User details can be set in the **New/Edit User** dialog.

.. note:: 🕵️ **Admins aren’t the only ones who can change these settings.**

   In most cases, agents can, too
   (using the `new ticket dialog`_, search function or the `ticket pane`_).

   .. _new ticket dialog: https://user-docs.zammad.org/en/latest/basics/service-ticket/create.html
   .. _ticket pane: https://user-docs.zammad.org/en/latest/extras/customers.html

👤 Login
   A user’s email and login may differ, but
   **either one can be used to sign in.**

   .. note::

      .. figure:: /images/manage/users/user-details-login.png
         :alt: The user overview, showing logins in the first column
         :align: center

         User logins are **not** shown in the New/Edit User dialog,
         but they are visible from the user overview.

   This attribute **cannot** be set via the Admin Panel. Instead, use
   the `Zammad console <https://docs.zammad.org/en/latest/admin/console.html>`_,
   the `REST API <https://docs.zammad.org/en/latest/api/intro.html>`_, or
   :doc:`CSV import <via-csv-import>`.

🔑 Password
   Yes, administrators really do have the power to change other users’ passwords.

   (Agents do not, though.)

🏢 Organization
   :doc:`/manage/organizations` are a way to group customers together
   (usually, members of the same company).
   This allows you to do things like view all tickets for that company
   or set up special :doc:`/manage/trigger` that fire only for those customers.

   .. hint:: 🚫 **You can’t assign a customer
      to an organization that doesn’t exist yet.**

      To add one, go to **Manage > Organizations** in the Admin Panel.

👑 VIP
   This flag is a way for your team to indicate high-status customers.
   Just as with organizations,
   you can set up special :doc:`/manage/trigger`, :doc:`/manage/scheduler` jobs,
   :doc:`/manage/slas`, and :doc:`/manage/overviews` just for VIPs.

   .. figure:: /images/manage/users/vip-user-in-a-ticket.png
      :alt: Ticket view showing a VIP user’s avatar with a crown on it
      :align: center
      :width: 90%

      VIPs are displayed with a crown above their avatars.

📑 Note
   Notes are visible to all staff members, **including agents**.

   .. hint:: 😵 **Are you using the Note field
      to keep track of your own “custom” user attributes?**

      Wish you could add your own fields to the New/Edit User dialog?

      You can! To learn more, see :doc:`/system/objects`.

▶️ Active
   Disabling this flag is a soft alternative to deleting a user.
   So what’s the difference?

   1. There is no way to restore a deleted user;
      inactive users can be reactivated at any time.
      
   2. When a user is deleted, all their associated tickets are lost, as well;
      deactivating a user keeps all associated tickets intact.

   3. Inactive users still appear in search results:

      .. figure:: /images/manage/users/customer-search-returns-inactive-user.png
         :alt: An inactive user displayed in a customer search list
         :align: center

         A slashed-out 👤 icon indicates an inactive user.
         In other cases, inactive users are greyed out.

         .. _user-details-group-access:

🔓 Permissions
   Under this heading, you can manage two separate (but related) user details:

   1. :doc:`/manage/roles/index` dictate what users can do in the system.
      If you need to grant someone privileges to edit the knowledge base
      or access part of the admin panel, roles are the answer.

   2. :doc:`/manage/groups/access-levels` dictate which tickets
      an agent can work with.
      If someone’s not receiving notifications for incoming tickets
      or can’t be assigned a ticket,
      group access levels are likely to blame.

   .. figure:: /images/manage/users/user-details-permissions.png
      :alt: Permissions in the edit user dialog
      :align: center
      :width: 70%

      **Top:** A user’s roles decide what kinds of actions they can perform
      and which :doc:`groups </manage/groups/index>` they belong to.
      **Bottom:** Group assignments can alternately be set on a per-user basis.

   .. hint:: **🤔 Huh? I don’t see the group access table...**

      The group access table is only visible in **agent profiles**,
      when there is **more than one active group** in the system.
