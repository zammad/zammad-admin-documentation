Agent Permissions
=================

.. note::

   The permissions listed on this page grant access to features
   that have to be enabled or configured system-wide in the Admin Panel first.

.. container:: cfloat-left

   .. figure:: /images/manage/roles/permissions-agent.png
      :alt: Agent permissions in the New Role dialog
      :align: center
      :width: 80%

      Agent permissions are shown in the middle of the New Role dialog...

.. container:: cfloat-right

   .. figure:: /images/manage/roles/sidebar.png
      :alt: Sidebar tabs: Overviews, Knowledge Base, Customer Chat, Phone
      :align: center

      ...and give users access to new sidebar tabs for communicating with
      customers.

.. container:: cfloat-clear

   x

:``chat.agent``:
   :user-docs:`💬 Customer Chat </extras/chat.html>`

   .. hint:: 🤓 Requires configuration of :doc:`Chat Channel </channels/chat>`

:``cti.agent``:
   Provides access to :user-docs:`📞 Caller Log </extras/caller-log.html>`

   .. hint:: 🤓 Requires configuration of either integrations

      * :doc:`Generic CTI </system/integrations/cti/generic>`
      * :doc:`placetel </system/integrations/cti/placetel>`
      * :doc:`sipgate </system/integrations/cti/sipgate>`

:knowledge_base:
   :user-docs:`📕 Knowledge Base </extras/knowledge-base.html>`

   :``knowledge_base.editor``:
      create/edit privileges

      .. hint:: Editor permissions always include reader permissions.

   :``knowledge_base.reader``:
      read privileges for internal content

      .. hint::

         Public articles are always visible.

      .. tip::

         Zammad supports
         :user-docs:`granular permissions on knowledge base categories </extras/knowledge-base.html#granular-category-permissions>`.

         This function allows *agents with editor* permissions to restrict
         specific internal categories & answers to chosen roles.

         In order to allow your agents to set granular role permissions,
         the roles in question require at least reader permission for the
         knowledge base.

      .. danger::

         Keep in mind that this may be dangerous, as reader permission
         provides access to internal answers!

:``report``:
   :doc:`📈 Reporting </manage/report-profiles>`

   .. warning:: 🙅 **Never grant this permission to your customers.**

      Giving customers access to reporting constitutes a serious data breach, as
      it includes **all ticket and user information across the entire system**!

   .. note:: This permission is the exception to the rule on this page:

      1. the feature it enables is not for communicating with customers;
      2. the button appears at the *bottom* of the sidebar; and
      3. it is typically reserved for admins and supervisors.

   .. _role-settings-group-access:
:``ticket.agent``:
   :user-docs:`🗒️ (Agent) Overviews </basics/find-ticket/browse.html>`

   .. note::

      🤔 **What's this table doing here under the permissions tree?**

      .. figure:: /images/manage/roles/group-access-levels.png
         :alt: Group permission table in Edit Role dialog
         :align: center

         The group permission table is shown
         when there is **more than one active group** in the system and
         ``ticket.agent`` permission **is selected**.

      Okay, so remember when we said that
      :ref:`“roles are just collections of permissions” <what-is-a-role>`?
      That wasn't *entirely* true—they can also be collections of
      **group permissions**.

      To learn more, see :doc:`/manage/groups/access-levels`.

   .. hint:: 🤓 **Point of technicality**

      You can assign both agent and customer roles to the same user — but you
      **can't** assign both ``ticket.agent`` and ``ticket.customer``
      *permissions* to the same *role!*

      To make it work, you need two separate roles:
      one with ``ticket.agent`` and the other with ``ticket.customer``.
