Agent Permissions
=================

.. note::

   The permissions listed on this page grant access to features
   that have to be enabled or configured system-wide in the Admin Panel first.

.. figure:: /images/manage/roles/permissions-agent.png
   :alt: Agent permissions in the New Role dialog
   :align: center
   :scale: 70%

   Agent permissions are shown in the middle of the New Role dialog...

.. figure:: /images/manage/roles/sidebar.png
   :alt: Sidebar tabs: Overviews, Knowledge Base, Customer Chat, Phone
   :align: center

   ...and give users access to new sidebar tabs for communicating with
   customers.

.. _role-settings-group-access:

.. list-table::
   :widths: 30 80 20
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
     - :doc:`Reporting </manage/report-profiles>`
     - | Make sure to never grant this permission to your customers!
       | Giving customers access to reporting constitutes a serious data breach, as
       | it includes **all ticket and user information across the entire system**!
       | Please also note:
       |   1. the feature it enables is not for communicating with customers;
       |   2. the button appears at the *bottom* of the sidebar; and
       |   3. it is typically reserved for admins and supervisors.
   * - ``ticket.agent``
     - :user-docs:`(Agent) Overviews </basics/find-ticket/browse.html>`
     - See notes below

.. note::

   🤔 **What about this table under the permissions tree?**

   .. figure:: /images/manage/roles/group-access-levels.png
      :alt: Group permission table in Edit Role dialog
      :align: center
      :scale: 40%

   Roles can also include
   :doc:`group permissions </manage/groups/access-levels>`!
   The group permission table is shown
   when there is **more than one active group** in the system and
   ``ticket.agent`` permission **is selected**.

.. hint::

   You can assign both agent and customer roles to the same user — but you
   **can't** assign both ``ticket.agent`` and ``ticket.customer``
   *permissions* to the same *role!*

   To make it work, you need two separate roles:
   one with ``ticket.agent`` and the other with ``ticket.customer``.
