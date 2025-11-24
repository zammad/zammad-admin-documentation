Agent Permissions
=================

.. note::

   The permissions listed on this page grant access to features
   that have to be enabled or configured system-wide in the Admin Panel first.

.. figure:: /images/manage/roles/permissions-agent.png
   :alt: Agent permissions in the New Role dialog
   :align: center
   :scale: 80%

   Agent permissions are shown in the middle of the New Role dialog...

.. figure:: /images/manage/roles/sidebar.png
   :alt: Sidebar tabs: Overviews, Knowledge Base, Customer Chat, Phone
   :align: center

   ...and give users access to new sidebar tabs for communicating with
   customers.

.. _role-settings-group-access:

.. list-table::
   :widths: 20 30 50
   :header-rows: 1

   * - Permission name
     - Give access to
     - Note
   * - ``chat.agent``
     - :user-docs:`Customer Chat </extras/chat.html>`
     - Requires configuration of :doc:`Chat Channel </channels/chat>`
   * - ``cti.agent``
     - :user-docs:`Caller Log </extras/caller-log.html>`
     - Configuration of a CTI integration is required
   * - ``knowledge_base.editor``
     - Create/edit privileges
     - Editor permissions always include reader permissions.
   * - ``knowledge_base.reader``
     - Read privileges for internal content
     - | Public articles are always visible.
       | See :user-docs:`here </extras/knowledge-base.html#granular-category-permissions>`
         how to set up granular reader permissions for the knowledge base.
       | Keep in mind that this may be dangerous, as reader permission provides
       | access to internal answers!
   * - ``report``
     - :user-docs:`Reporting (user docs)</extras/reporting.html>`
     - | Make sure to **never** grant this permission to your customers
       | because it includes **all ticket and user information** across the
       | entire system! Consider setting up a new role for your admins or
       | supervisors and limit the access via :doc:`/manage/report-profiles` first.
   * - ``ticket.agent``
     - Access to overviews and tickets.
     - See notes below

.. note::

   🤔 **What about this table under the permissions tree?**

   .. figure:: /images/manage/roles/group-access-levels.png
      :alt: Group permission table in Edit Role dialog
      :align: center
      :scale: 60%

   Roles can also include
   :doc:`group permissions </manage/groups/access-levels>`!
   The group permission table is shown
   when there is **more than one active group** in the system and
   ``ticket.agent`` permission **is selected**.
