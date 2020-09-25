Agent Permissions
=================

.. note:: The permissions listed on this page grant access to features
   that have to be enabled or configured system-wide in the Admin Panel first.

.. figure:: /images/manage/roles/permissions-agent.png
   :alt: Agent permissions in the New Role dialog
   :align: center
   :width: 80%

   Agent permissions are shown in the middle of the New Role dialog...

.. figure:: /images/manage/roles/sidebar.png
   :alt: Sidebar tabs: Overviews, Knowledge Base, Customer Chat, Phone
   :align: center

   ...and give users access to new sidebar tabs for communicating with customers.

:``chat.agent``:            :doc:`💬 Customer Chat </channels/chat>`
:``cti.agent``:             :doc:`📞 Phone </system/integrations/generic-cti>` integration
:``knowledge_base.editor``: :doc:`📕 Knowledge Base </manage/knowledge-base>` (create/edit privileges)
:``knowledge_base.reader``: :doc:`📕 Knowledge Base </manage/knowledge-base>` (read privileges for internal & public content)
:``report``:                :doc:`📈 Reporting </manage/report-profiles>`

                            .. warning:: 🙅 **Never grant this permission to your customers.**

                               Giving customers access to reporting constitutes a serious data breach,
                               as it includes **all ticket and user information across the entire system**!

                            .. note:: This permission is the exception to the rule on this page:

                               1. the feature it enables is not for communicating with customers;
                               2. the button appears at the *bottom* of the sidebar; and
                               3. it is typically reserved for admins and supervisors.

                            .. _role-settings-group-access:
:``ticket.agent``:          :doc:`🗒️ (Agent) Overviews </manage/overviews>`

                            .. note:: 🤔 **What’s this big table doing here in the middle of my permissions?**

                               .. figure:: /images/manage/roles/group-access-levels.png
                                  :alt: Group access table in Edit Role dialog
                                  :align: center

                                  The group access table is shown
                                  when there is **more than one active group** in the system.

                               Okay, so remember when we said that :ref:`“roles are just collections of permissions” <what-is-a-role>`?
                               That wasn’t *entirely* true—they can also be collections of **group access levels**.

                               To learn more, see :doc:`/manage/groups/access-levels`.

                            .. hint:: 🤓 **Point of technicality**

                               As of Zammad 3.5, you can assign both agent and customer roles to the same user—but
                               but you **can’t** assign both ``ticket.agent`` and ``ticket.customer`` *permissions* to the same *role!*

                               To make it work, you need two separate roles:
                               one with ``ticket.agent`` and the other with ``ticket.customer``.
