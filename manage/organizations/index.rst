Organizations
=============

Depending on your organization’s IT capabilities,
organizations can be managed individually or in bulk.

.. figure:: /images/manage/organizations/general-view-of-a-busy-organization.png
   :alt: Creating and editing users directly in the Admin Panel
   :align: center
   :width: 80%

   The simplest way to manage organizations is directly in the Admin Panel.

Learn more about managing organizations...

.. toctree::
   :maxdepth: 1

   via the Admin Panel <via-the-admin-panel>
   via CSV import <via-csv-import>
   via REST API <https://docs.zammad.org/en/latest/api/intro.html>

.. note:: 😲 **Technical Limitations**

   * Organizations currently cannot be removed. The only exception
     is Zammads :doc:`/system/data-privacy` function.
   * Unlike users, agents cannot just create new organizations.
     Check the :doc:`permission reference </manage/roles/admin-permissions>`
     to learn more.
   * Because of how organization references work with users, external syncs
     like LDAP or Exchange *do not* support organization mapping.

        .. hint::

           This is relevant to you? Consider domain based assignments.

.. warning:: 🥵 **BIG organizations can cause performance issues**

   Organizations with many members can cause a fairly high system load in
   some situations. This especially affects organizations that run many
   updates or e.g. ticket creations on their members which causes overhead.

   Proceed with caution.

.. _organization-details-reference:

Reference Guide: Organization Details
-------------------------------------

Most of the attributes you can set on organizations are self-explanatory.
The ones that aren’t are described below.

.. figure:: /images/manage/organizations/administrative-changing-organization-settings.png
   :alt: The edit organization dialog, showing the various organization detail fields
   :align: center
   :width: 75%

   User details can be set in the **New/Edit Organization** dialog.

.. note:: 🕵️ **Admins aren’t the only ones who can change these settings.**

   In most cases, agents can, too (using the `ticket pane`_ or
   organization detail page).

   .. _ticket pane:
      https://user-docs.zammad.org/en/latest/extras/organizations.html

📢 shared Organization
   If you set this option to ``yes``, all organization members will be able
   to **view** and **update** tickets of their organizational members apart
   from their own.

   Setting this option to yes also provides access to overviews being
   available to shared organizations only. Learn more on
   :doc:`/manage/overviews`.

   The default value on creation dialogues is ``yes``.

   .. danger::

      This can cause serious issues if you have e.g.human resources working
      in the same Zammad instance. Shared organizations usually are relevant
      for Support companies with fairly big customers and support contingents.

   .. hint::

      Sharing organizations don't just affect customers, however, if you want to
      provide ticket access to agents, please see the :ref:`permission-guide`.

   .. figure:: /images/manage/organizations/user-view-of-shared-organization-tickets.png
      :width: 80%
      :align: center
      :alt: Screenshot showing "My Organization Tickets" overview with tickets
            belonging to all organization members

      Members of shared organization have access to organization based overviews

🗄️ Domain based assignment
   Activating domain based assignment will cause Zammad to automatically add
   newly created users to said organization. This can greatly reduce your
   maintenance effort and is seen as workaround for not being able to map
   organizations via LDAP.

   The default value on creation dialogues is ``no``

   .. note::

      Domain based assignment only works for *newly created* users and has no
      effect on existing users. 

🌐 Domain
   Add the email domain of the organization with this option. It's being used
   on user creation to determine the assignment. This option belongs to
   domain based assignment and is required if set to ``yes``.

   .. note::

      At the time Zammad allows *one* domain per organization. You may also want
      to ensure to not use free mailer domains like ``gmail.com`` for these
      assignments.

📑 Note
   Notes are visible to all staff members, **including agents**.

   .. hint:: 😵 **Are you using the Note field
      to keep track of your own “custom” organization attributes?**

      Wish you could add your own fields to the New/Edit Organization dialog?

      You can! To learn more, see :doc:`/system/objects`.

▶️ Active
   Disabling this flag is a soft alternative to deleting an organization.
   So what’s the difference?

   1. There is no way to restore a deleted organization;
      inactive organizations can be reactivated at any time.
      
   2. Inactive organizations still appear in search results:

      .. figure:: /images/manage/organizations/search-results-showing-organizations.png
         :alt: An inactive organization displayed in a quick search list
         :align: center

         A slashed-out 🏢 icon indicates an inactive organization.
         In other cases, inactive organizations are greyed out.
