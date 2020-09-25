Admin permissions
-----------------

You can set "admin" as permission which will include all of the below settings.
If needed, you can provide single admin permissions to specific agents to allow key user tasks
like updating :doc:`Text Modules </manage/text-modules>`.

.. figure:: /images/manage/roles/admin-settings.png
   :alt: Screenshot showing admin settings within Zammad.
   :align: center
   :width: 90%

``admin.api``
   This permission allows you to change API settings.

``admin.branding``
   Provides access to :doc:`Branding otpions </settings/branding>`.

``admin.calendar``
   Allows admins to configure :doc:`/manage/calendars` which are required for :doc:`/manage/slas`.

``admin.channel_chat``
   Provides access to the :doc:`chat configuration </channels/chat>` (scripts and chat topics).
   For agents to have access to the chat functionality, please see :doc:`agent-permissions`.

``admin.channel_email``
   Allows explicit access to the :doc:`email channel </channels/email/index>` and all its settings.

      .. warning:: 🐞 You currently can't restrict to the google channel only.
          See `Issue 3194 <https://github.com/zammad/zammad/issues/3194>`_ for more.

``admin.channel_facebook``
   Grants access to the :doc:`/channels/facebook` settings page.

      .. note:: Access to facebook based tickets depends on agents :doc:`/manage/groups/access-levels`.

``admin.channel_formular``
   Grants access to the :doc:`/channels/form` setting page.

``admin.channel_sms``
   Grants access to the SMS settings page.

``admin.channel_telegram``
   Grants access to the :doc:`/channels/telegram` settings page.

      .. note:: Access to telegram based tickets depends on agents :doc:`/manage/groups/access-levels`.

``admin.channel_twitter``
   Grants access to the :doc:`/channels/twitter` settings page.

      .. note:: Access to twitter based tickets depends on agents :doc:`/manage/groups/access-levels`.

``admin.channel_web``
   Grants access to the :doc:`/channels/web` settings page.

``admin.data_privacy``
   Provides permission to :doc:`/system/data-privacy`.

      .. warning:: ⚠ This allows removal of data and thus is a potential dangerous permission!

``admin.group``
   Allows users to add or change :doc:`/manage/groups/index` and their settings.

``admin.integration``
   This permission grants access **to all** available :doc:`/system/integrations`.

``admin.knowledge_base``
   Grants access to the base configuration of the :doc:`/manage/knowledge-base`.

      .. hint:: 🤓 The knowledge base access (read and edit) depends on :doc:`agent-permissions` and
         the `answer visibility <https://user-docs.zammad.org/en/latest/extras/knowledge-base.html#editing-answers>`_.

``admin.macro``
   Allows management of :doc:`/manage/macros`.

      .. note:: Macros may indirectly require access to :doc:`/manage/tags` in some situations.

``admin.maintenance``
   Grants access to :doc:`maintenance settings </system/maintenance>`.

``admin.monitoring``
   This permission access to Zammads :doc:`/system/monitoring` page.

``admin.object``
   Grants access to :doc:`object management </system/objects>`.

``admin.organization``
   Grants access the :doc:`organization management </manage/organizations>`.

      .. note:: Agents can always find and edit existing organizations.
         **Exception:** Agents can't set ``shared organization`` or ``domain based assignment``.

``admin.overview``
   Allows users to manage :doc:`/manage/overviews` for users.

``admin.package``
   Provides access to the :doc:`package management </system/packages>` for Zammad addons.

``admin.report_profile``
   Allows users to define :doc:`/manage/report-profiles` to enhance their Reports.

      .. hint:: 🤓 Report profiles are relevant for the Reporting.
         Access to the Reporting function depends on :doc:`agent-permissions`.

      ..tip:: This is a great permission for key users. 🚀

``admin.role``
   Grants access to :doc:`role management <index>`. 🧐

``admin.scheduler``
   Provides permission to configure :doc:`schedulers </manage/scheduler>` for automation on tickets.

``admin.security``
   Allows users to change the :doc:`/settings/security` settings of Zammad.
   This also covers third party authentications.

``admin.session``
   Grants access to :doc:`user sessions </system/sessions>`.

``admin.setting_system``
   Allows users to configure :doc:`basic system settings </settings/system>` of Zammad.

``admin.sla``
   This permission provides access to the :doc:`SLA configuration </manage/slas>`.

``admin.tag``
   Provides access to :doc:`/manage/tags`.

``admin.text_module``
   Allow users to configure :doc:`/manage/text-modules`.

      .. tip:: This is a great permission for key users. 🚀

``admin.ticket``
   Grants access to base settings for :doc:`Tickets </settings/ticket>`.

      .. note:: This permission doesn't have effect on :doc:`/misc/composer`.

``admin.time_accounting``
   Allows users to configure :doc:`/manage/time-accounting`.

      .. hint:: Also relevant for your accounting if you require to export time accouting information for invoicing.

``admin.translation``
   Grants access to :doc:`/system/translations`.
   This permission also allows users to use inline translation.

``admin.trigger``
   Allows users to configure :doc:`Triggers </manage/trigger>`.

``admin.user``
   Grants access to the :doc:`User management </manage/users/index>`.

      .. hint:: **👀 Agents aren't allowed everything**

         While agents can create and edit users, they can't do the following without this permission:

            * can't edit agent accounts
            * can't set roles or groups
            * can't set or change passwords for users

      .. warning:: **⚠ Users can act on behalf other users**

         This permission allows users to take over any user session.
         Also, these users can create tickets and articles *on behalf* other users!

         Zammad logs on behalf actions within its histories and allows revision of these actions.
