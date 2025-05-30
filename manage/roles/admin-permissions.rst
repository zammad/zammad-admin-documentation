Admin Permissions
=================

.. note::

   📁 **Permissions are namespaced**,
   which is sort of like having files inside of folders.

   The permissions listed on this page all belong to the ``admin`` namespace.
   You can select them individually,
   or you can just select ``admin`` to enable the whole bunch.

.. figure:: /images/manage/roles/permissions-admin.png
   :alt: Admin permissions in the New Role dialog
   :align: center
   :width: 80%

   Admin permissions are shown at the top of the New Role dialog...


.. figure:: /images/manage/roles/admin-settings.png
   :alt: Screenshot showing admin settings within Zammad.
   :align: center

   ...and give users access to the pages of the Admin Panel.


Please be aware that these permissions only grant access to the
**settings/configuration** in Zammad. If you want to grant agents access to
tickets, see :doc:`agent permissions <agent-permissions>` and
:doc:`group permissions <../groups/access-levels>`

.. list-table::
   :widths: 30 80 20
   :header-rows: 1

   * - Permission name
     - Give access to
     - Note
   * - ``admin.ai``
     - :doc:`AI > Provider </ai/provider>`
     -
   * - ``admin.ai_assistance_text_tools``
     - AI > Smart Assist Text Tools
     -
   * - ``admin.ai_assistance_ticket_summary``
     - :doc:`AI > Ticket Summary </ai/features>`
     -
   * - ``admin.api``
     - :docs:`System > API </api/intro.html>`
     -
   * - ``admin.branding``
     - :doc:`Settings > Branding </settings/branding>`
     -
   * - ``admin.calendar``
     - :doc:`Manage > Calendars </manage/calendars>`
     - Required for :doc:`/manage/slas/index`
   * - ``admin.channel_chat``
     - :doc:`Channels > Chat </channels/chat>`
     - Accessing chat for agents: ``chat.agent``
   * - ``admin.channel_email``
     - :doc:`Channels > Email </channels/email/index>`
     -
   * - ``admin.channel_facebook``
     - :doc:`Channels > Facebook </channels/facebook>`
     - Accessing Facebook tickets for agents: :doc:`/manage/groups/access-levels`
   * - ``admin.channel_formular``
     - :doc:`Channels > Form </channels/form>`
     -
   * - ``admin.channel_google``
     - :doc:`Channels > Google </channels/google/index>`
     -
   * - ``admin.channel_microsoft_graph``
     - :doc:`Channels > Microsoft 365 Graph Email </channels/microsoft365-graph/index>`
     -
   * - ``admin.channel_microsoft365``
     - :doc:`Channels > Microsoft 365 IMAP Email </channels/microsoft365/index>`
     -
   * - ``admin.channel_sms``
     - :doc:`Channels > SMS </channels/sms>`
     -
   * - ``admin.channel_telegram``
     - :doc:`Channels > Telegram </channels/telegram>`
     - Accessing Telegram tickets for agents: :doc:`/manage/groups/access-levels`
   * - ``admin.channel_twitter``
     - :doc:`Channels > Twitter </channels/twitter-x/twitter>`
     - Accessing Twitter/X tickets for agents: :doc:`/manage/groups/access-levels`
   * - ``admin.channel_web``
     - :doc:`Channels > Web </channels/web>`
     -
   * - ``admin.channel_whatsapp``
     - :doc:`Channels > Whatsapp </channels/whatsapp/index>`
     -
   * - ``admin.checklist``
     - :doc:`Manage > Checklist </manage/checklist>`
     -
   * - ``admin.core_workflows``
     - :doc:`System > Core Workflows </system/core-workflows>`
     -
   * - ``admin.data_privacy``
     - :doc:`System > Data Privacy </system/data-privacy>`
     - 🔥 Be careful, it allows users to permanently delete data on the system.
   * - ``admin.group``
     - :doc:`Manage > Groups </manage/groups/index>`
     -
   * - ``admin.integration``
     - :doc:`System > Integrations </system/integrations/index>`
     -
   * - ``admin.knowledge_base``
     - :doc:`Manage > Knowledge Base </manage/knowledge-base>`
     - | Accessing knowledge base to read/edit articles: ``knowledge_base.reader``
       | and ``knowledge_base.editor``
       | Make sure to double-check the answer's
         :user-docs:`visibility </extras/knowledge-base.html#editing-answers>`.
   * - ``admin.macro``
     - :doc:`Manage > Macros </manage/macros>`
     - In some cases, macros may also require ``admin.tag``
   * - ``admin.maintenance``
     - :doc:`System > Maintenance </system/maintenance>`
     -
   * - ``admin.monitoring``
     - :doc:`System > Monitoring </system/monitoring>`
     -
   * - ``admin.object``
     - :doc:`System > Objects </system/objects>`
     -
   * - ``admin.organization``
     - :doc:`Manage > Organizations </manage/organizations/index>`
     - | Agents can access existing organizations
       | from the search bar, even without this permission.
       | They can even edit an organization's name, domain, and notes!
   * - ``admin.overview``
     - :doc:`Manage > Overviews</manage/overviews>`
     -
   * - ``admin.package``
     - :doc:`System > Packages </system/packages>`
     -
   * - ``admin.public_links``
     - :doc:`Manage > Public Links </manage/public-links>`
     -
   * - ``admin.report_profile``
     - :doc:`Manage > Report Profiles </manage/report-profiles>`
     - Access to view reports: ``report``
   * - ``admin.role``
     - :doc:`Manage > Roles </manage/roles/index>`
     -
   * - ``admin.scheduler``
     - :doc:`Manage > Scheduler </manage/scheduler>`
     - For automation on tickets
   * - ``admin.security``
     - :doc:`Settings > Security </settings/security>`
     - Settings of Zammad. This also covers third party authentications.
   * - ``admin.session``
     - :doc:`System > Sessions </system/sessions>`
     -
   * - ``admin.sla``
     - :doc:`Manage > SLAs </manage/slas/index>`
     -
   * - ``admin.system``
     - :doc:`Settings > System </settings/system/index>`
     -
   * - ``admin.system_report``
     - :doc:`System > System Report </system/system-report>`
     -
   * - ``admin.tag``
     - :doc:`Manage > Tags </manage/tags>`
     -
   * - ``admin.template``
     - :doc:`Manage > Templates </manage/templates>`
     -
   * - ``admin.text_module``
     - :doc:`Manage > Text Modules </manage/text-modules>`
     -
   * - ``admin.ticket``
     - :doc:`Settings > Tickets </settings/ticket>`
     - Does not grant access to :doc:`/misc/composer`
   * - ``admin.ticket_auto_assignment``
     - :ref:`Settings > Ticket > Auto Assignment <auto_assignment>`
     -
   * - ``admin.ticket_duplicate_detection``
     - :ref:`Settings > Ticket > Duplicate Detection <duplicate_detection>`
     -
   * - ``admin.ticket_priority``
     - :ref:`System > Objects >Ticket Priority <ticket-priority-reference>`
     -
   * - ``admin.ticket_state``
     - :ref:`System > Objects >Ticket State <ticket-state-reference>`
     -
   * - ``admin.time_accounting``
     - :doc:`Manage > Time Accounting </manage/time-accounting>`
     - Also allows the export of timekeeping records.
   * - ``admin.translation``
     - :doc:`System > Translations </system/translations>`
     - Also enables inline translation
   * - ``admin.trigger``
     - :doc:`Manage > Triggers </manage/trigger>`
     -
   * - ``admin.user``
     - :doc:`Manage > Users </manage/users/index>`
     - | Independent from this permission, agents can create and edit
       | customers, but they can't modify permission etc.
       | 🏴‍☠️ This permission allows users to
        :ref:`hijack other user sessions <view-from-users-perspective>` .
   * - ``admin.webhook``
     - :doc:`Manage > Webhook </manage/webhook>`
     -