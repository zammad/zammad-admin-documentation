Users
=====

Depending on your organization's IT capabilities,
users can be managed individually or in bulk,
or even synchronized with third-party directory services.

.. figure:: /images/manage/users/managing-users-manually.png
   :alt: Creating and editing users directly in the Admin Panel
   :align: center
   :width: 60%

   The simplest way to manage users is directly in the Admin Panel.

Learn more about managing users...
   * :doc:`via the Admin Panel <via-the-admin-panel>`
   * :doc:`via CSV import <via-csv-import>`
   * :doc:`via LDAP/Active Directory integration </system/integrations/ldap/index>`
   * :doc:`via Exchange integration </system/integrations/exchange>`
   * :docs:`via REST API </api/intro.html>`

.. toctree::
   :maxdepth: 1
   :hidden:

   via-the-admin-panel
   via-csv-import

.. note:: 😲 **Customers get their own user accounts, too?**

   Yes! Unlike e.g. OTRS, Zammad needs to store accounts
   for *everyone* who communicates through the system.

   Why? It helps us do things like show all tickets from a certain customer.

   How? Zammad checks the sender of every incoming message
   at every inbox it monitors,
   and if it doesn't recognize the address,
   ✨ **poof**—new customer account!

   (Your customers never need to set a password.
   Of course, they can if they want to,
   but the account will be there even if they never use it.)

.. _user-details-reference:

Reference Guide: User Details
-----------------------------

Most of the attributes you can set on user accounts are self-explanatory.
The ones that aren't are described below.

.. figure:: /images/manage/users/user-details.png
   :alt: The edit user dialog, showing the various user detail fields
   :align: center
   :width: 60%

   User details can be set in the **New/Edit User** dialog.

.. note:: 🕵️ **Admins aren't the only ones who can change these settings.**

   In most cases, agents can, too
   (using the
   :user-docs:`new ticket dialog </basics/service-ticket/create.html>`,
   :user-docs:`search bar </basics/find-ticket/search.html>` or the
   :user-docs:`ticket pane </extras/customers.html>`).

👤 Login
   A user's email and login may differ, but
   **either one can be used to sign in.**

   .. note::

      .. figure:: /images/manage/users/user-details-login.png
         :alt: The user overview, showing logins in the first column
         :align: center

         User logins are **not** shown in the New/Edit User dialog,
         but they are visible from the user overview.

   This attribute **cannot** be set via the Admin Panel. Instead, use the
   :docs:`Zammad console </admin/console.html>`, the
   :docs:`REST API </api/intro.html>`, or :doc:`CSV import <via-csv-import>`.

🔑 Password
   Yes, administrators really do have the power to change other users' passwords.

   (Agents do not, though.)

🏢 Organization
   :doc:`/manage/organizations/index` are a way to group customers together
   (usually, members of the same company).
   This allows you to do things like view all tickets for that company
   or set up special :doc:`/manage/trigger` that fire only for those customers.

   .. hint:: 🚫 **You can't assign a customer
      to an organization that doesn't exist yet.**

      To add one, go to **Manage > Organizations** in the Admin Panel.

🏤 Secondary Organizations
   This option allows you to assign more organizations, in addition to the
   user's primary organization.

   Secondary organizations behave the same like the primary ones with one
   exception: Secondaries are not as highlighted like their primaries.

   .. hint::

      Listings for all organizational tickets are not affected by this.
      Zammad will mix primary and secondary organization tickets together.

   .. warning::

      While the number of secondary organizations is not limited directly,
      you may want to keep this to a reasonable number of organizations.

      30-40 organizations at maximum *should* be good enough.

👑 VIP
   This flag is a way for your team to indicate high-status customers.
   Just as with organizations,
   you can set up special :doc:`/manage/trigger`, :doc:`/manage/scheduler` jobs,
   :doc:`/manage/slas/index`, and :doc:`/manage/overviews` just for VIPs.

   .. figure:: /images/manage/users/vip-user-in-a-ticket.png
      :alt: Ticket view showing a VIP user's avatar with a crown on it
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
   So what's the difference?

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

Roles
   The :doc:`/manage/roles/index` define what users can do in the system.
   If you need to grant someone privileges to edit the knowledge base
   or access part of the admin panel, roles are the answer.

Group Permissions
   The :doc:`/manage/groups/access-levels` define which tickets
   an agent can work with.
   If an agent is not receiving notifications for incoming tickets
   or can't be assigned to a ticket, you should have a look on the group
   permissions.
   Please note that the visibility of the group permission table depends on the
   role selection. It only shows up, if the selected role has the
   ``ticket.agent`` permission.

   .. figure:: /images/manage/users/user-details-permissions.png
      :alt: Permissions in the edit user dialog
      :align: center
      :width: 70%

   **Top:** User's roles decide what kind of actions they can perform
   and which :doc:`groups </manage/groups/index>` they belong to.
   **Bottom:** Group assignments can alternately be set on a per-user basis.

   .. hint:: **🤔 Huh? I don't see the group access table...**

      The group access table is only visible in **agent profiles**,
      when there is **more than one active group** in the system.
