Permissions
===========

Find a short description about the permissions in Zammad below. Be aware that
some of the features require activation and configuration before they are
usable. Even though the permissions are grouped by common use cases, you can
mix them as you like. Just make sure to maintain an overview over your
permissions.

Agent
-----

.. _role-settings-group-access:

.. list-table::
   :widths: 20 30 50
   :header-rows: 1

   * - Permission
     - Access To
     - Note
   * - ``chat.agent``
     - :user-docs:`Customer chat </extras/chat.html>`
     - Requires configuration of :doc:`chat channel </channels/chat>`.
   * - ``cti.agent``
     - :user-docs:`Caller log </extras/caller-log.html>`
     - Requires configuration of :doc:`CTI integration </system/integrations/cti/generic>`.
   * - ``ticket.agent``
     - | This is the main permission for agents
       | to access overviews and tickets
     - | When this permission is granted and more
       | than one group exists, the group permission
       | table appears to configure the :doc:`group access levels </manage/groups/access-levels>`.

Admin
-----

Please be aware that these permissions only grant access to the
settings/configuration in Zammad. If you want to grant agents access to
tickets, check the section above and learn more about
:doc:`group permissions <../groups/access-levels>`.

.. list-table::
   :widths: 30 80 20
   :header-rows: 1

   * - Permission
     - Access To
     - Note
   * - ``admin.ai_agent``
     - :doc:`AI > AI Agents </ai/ai-agents>`
     -
   * - ``admin.ai_assistance_text_tools``
     - :doc:`AI > Writing Assistant </ai/writing-assistant>`
     -
   * - ``admin.ai_assistance_ticket_summary``
     - :doc:`AI > Ticket Summary </ai/summary>`
     -
   * - ``admin.ai_provider``
     - :doc:`AI > Provider </ai/provider>`
     -
   * - ``admin.api``
     - :docs:`System > API </api/intro.html>`
     -
   * - ``admin.branding``
     - :doc:`Settings > Branding </settings/branding>`
     -
   * - ``admin.calendar``
     - :doc:`Manage > Calendars </manage/calendars>`
     - Required for :doc:`/manage/slas/index`.
   * - ``admin.channel_chat``
     - :doc:`Channels > Chat </channels/chat>`
     - | Configuration of chat channel.
       | Access for agents: ``chat.agent``.
   * - ``admin.channel_email``
     - :doc:`Channels > Email </channels/email/index>`
     -
   * - ``admin.channel_facebook``
     - :doc:`Channels > Facebook </channels/facebook>`
     -
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
     -
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
     - | Be careful, this allows users to permanently
       | delete data on the system.
   * - ``admin.group``
     - :doc:`Manage > Groups </manage/groups/index>`
     -
   * - ``admin.integration``
     - :doc:`System > Integrations </system/integrations/index>`
     -
   * - ``admin.knowledge_base``
     - :doc:`Manage > Knowledge Base </manage/knowledge-base>`
     - | Configure knowledge base. For viewing or creating
       | articles, ``knowledge_base.reader`` or
       | ``knowledge_base.editor`` are required.
   * - ``admin.macro``
     - :doc:`Manage > Macros </manage/macros>`
     - In some cases, macros may also require ``admin.tag``.
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
     - | Agents can access existing organizations from the
       | search bar, even without this permission. They can even
       | edit an organization's name, domain, and notes!
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
     -
   * - ``admin.security``
     - :doc:`Settings > Security </settings/security>`
     - This also includes third party authentications.
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
     - | Ticket settings. To access tickets for agents,
       | ``ticket.agent`` is required.
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
     - Also allows the export of accounted time records.
   * - ``admin.translation``
     - :doc:`System > Translations </system/translations>`
     - Also enables inline translation.
   * - ``admin.trigger``
     - :doc:`Manage > Triggers </manage/trigger>`
     -
   * - ``admin.user``
     - :doc:`Manage > Users </manage/users/index>`
     - | Agents can always create and edit customers, but they
       | can't modify permission etc.
       | Be aware that this permission allows users to
       | :ref:`hijack other user sessions <view-from-users-perspective>`.
   * - ``admin.webhook``
     - :doc:`Manage > Webhook </manage/webhook>`
     -

User Preferences
----------------

.. list-table::
   :widths: 30 80 20
   :header-rows: 1

   * - Permission
     - Access To
     - Note
   * - ``user_preferences.access_token``
     - | Generate API tokens to control Zammad
       | via :docs:`REST API (system documentation) </api/intro.html>`.
     - | Generated tokens will never have more permissions
       | than the user that generated them.
   * - ``user_preferences.appearance``
     - Appearance configuration
     - | Users can switch between dark, light and
       | automatic mode.
   * - ``user_preferences.avatar``
     - Avatar settings
     - Allows users to add a custom avatar image.
   * - ``user_preferences.beta_ui_switch``
     - New UI
     - | Allows users to swith between old and new
       | UI via switch.
   * - ``user_preferences.calendar``
     - Configure the calendar feed
     -
   * - ``user_preferences.device``
     - Manage device login sessions
     - | Revoking this permission disables
       | “Login detected from a new location” emails.
       | To learn more, see :doc:`/manage/trigger/system-notifications`.
   * - ``user_preferences.language``
     - Configure the UI locale/language
     - Allows users to set their preferred language.
   * - ``user_preferences.linked_accounts``
     - Account linking
     - | Manually link accounts after signing in
       | with :doc:`third-party authentication </settings/security/third-party>`.
       | Note: If :ref:`automatic account linking <automatic-account-linking>` fails, this
       | is the only way users can utilize third-party logins.
   * - ``user_preferences.notifications``
     - | Configuration of ticket
       | notifications
     - | Agents only receive ticket notifications for
       | :doc:`groups they have “full” access to </manage/groups/access-levels>`.
       | Customers can't receive ticket notifications at all.
   * - ``user_preferences.out_of_office``
     - | Designate a substitute for
       | out-of-office hours
     - | This does **not** grant that person the permissions /
       | :doc:`group access levels </manage/groups/access-levels>` of the agent
       | they're replacing.
   * - ``user_preferences.overview_sorting``
     - | Allow users to define their own
       | overview order
     - | Optional permission; disabled by default.
       | The order your user chooses here cannot be
       | overwritten by admins. Renaming or resorting
       | overviews has no effect on custom orders.
   * - ``user_preferences.password``
     - Change account password
     - | Make sure to **revoke this permission** for all your users
       | when using a third-party identity server (like LDAP) as
       | your only allowed authentication method.
   * - | ``user_preferences.``
       | ``two_factor_authentication``
     - | Allow users to setup and configure
       | their two factor authentication
     - | :doc:`Two factor authentication </settings/security/two-factor>` has to be enabled
       | that users can setup and configure it.

Others
------

.. list-table::
   :widths: 30 80 20
   :header-rows: 1

   * - Permission
     - Access To
     - Note
   * - ``knowledge_base.editor``
     - Create/edit privileges
     - Editor permissions always include reader permissions.
   * - ``knowledge_base.reader``
     - Read privileges for internal content
     - | Public articles are always visible.
       | See :user-docs:`here </extras/knowledge-base.html#granular-category-permissions>`
         how to set up granular reader permissions for the
       | knowledge base. Keep in mind that this may be dangerous,
       | as reader permission provides access to internal answers!
   * - ``report``
     - :user-docs:`Reporting (user docs)</extras/reporting.html>`
     - | Make sure to **never** grant this permission to your customers
       | because it includes **all ticket and user information** across the
       | entire system! Consider setting up a new role for your admins or
       | supervisors and limit the access via :doc:`/manage/report-profiles` first.
   * - ``ticket.customer``
     - Allows a user to be set as customer of a ticket
     - | Without this permission, customers can't see the
       | **My Ticket** overview. But they can still log in
       | and open new tickets.
