Admin Permissions
=================

.. note:: 📁 **Permissions are namespaced**,
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
   :width: 80%

   ...and give users access to the pages of the Admin Panel.

:``admin.api``:              `System > API <https://docs.zammad.org/en/latest/api-intro.html>`_
:``admin.branding``:         :doc:`Settings > Branding </settings/branding>`
:``admin.calendar``:         :doc:`Manage > Calendars </manage/calendars>`
                             (required for :doc:`/manage/slas`)
:``admin.channel_chat``:     :doc:`Channels > Chat </channels/chat>`

                             .. hint:: 🤓 **Trying to grant access to send messages in live chats?**

                                Use ``chat.agent`` instead.
:``admin.channel_email``:    :doc:`Channels > Email </channels/email/index>`

                             .. note:: There is no specific permission for the Google channel yet.
                                This is an `open feature request <https://github.com/zammad/zammad/issues/3194>`_.
:``admin.channel_facebook``: :doc:`Channels > Facebook </channels/facebook>`

                             .. hint:: 🤓 **Trying to grant access to view/update tickets from Facebook?**

                                That’s in :doc:`/manage/groups/access-levels`.
:``admin.channel_formular``: :doc:`Channels > Form </channels/form>`
:``admin.channel_sms``:      Channels > SMS
:``admin.channel_telegram``: :doc:`Channels > Telegram </channels/telegram>`

                             .. hint:: 🤓 **Trying to grant access to view/update tickets from Telegram?**

                                That’s in :doc:`/manage/groups/access-levels`.
:``admin.channel_twitter``:  :doc:`Channels > Twitter </channels/twitter>`

                             .. hint:: 🤓 **Trying to grant access to view/update tickets from Twitter?**

                                That’s in :doc:`/manage/groups/access-levels`.
:``admin.channel_web``:      :doc:`Channels > Web </channels/web>`
:``admin.data_privacy``:     :doc:`System > Data Privacy </system/data-privacy>`

                             .. danger:: 🔥 This permission allows users to permanently delete data on the system. Proceed with caution!
:``admin.group``:            :doc:`Manage > Groups </manage/groups/index>`
:``admin.integration``:      :doc:`System > Integrations </system/integrations>`
:``admin.knowledge_base``:   :doc:`Manage > Knowledge Base </manage/knowledge-base>`

                             .. hint:: 🤓 **Trying to grant access to read/edit knowledge base articles?**

                                Use ``knowledge_base.reader`` and ``knowledge_base.editor`` instead,
                                and double-check the answer’s `visibility <https://user-docs.zammad.org/en/latest/extras/knowledge-base.html#editing-answers>`_.
:``admin.macro``:            :doc:`Manage > Macros </manage/macros>`

                             .. note:: In some cases, macros may also require ``admin.tag``.
:``admin.maintenance``:      :doc:`System > Maintenance </system/maintenance>`
:``admin.monitoring``:       :doc:`System > Monitoring </system/monitoring>`
:``admin.object``:           :doc:`System > Objects </system/objects>`
:``admin.organization``:     :doc:`Manage > Organizations </manage/organizations>`

                             .. note:: Agents can access existing organizations
                                from the search bar, even without this permission.
                                They can even edit an organization’s name, domain, and notes!
:``admin.overview``:         :doc:`Manage > Overviews</manage/overviews>`
:``admin.package``:          :doc:`System > Packages </system/packages>`
:``admin.report_profile``:   :doc:`Manage > Report Profiles </manage/report-profiles>`

                             .. hint:: 🤓 **Trying to grant access to view reports?**

                                Use ``report`` instead.
:``admin.role``:             :doc:`Manage > Roles </manage/roles/index>`. 🧐
:``admin.scheduler``:        :doc:`Manage > Scheduler </manage/scheduler>` for automation on tickets
:``admin.security``:         :doc:`Settings > Security </settings/security>` settings of Zammad
                             This also covers third party authentications.
:``admin.session``:          :doc:`System > Sessions </system/sessions>`
:``admin.setting_system``:   :doc:`Settings > System </settings/system>` of Zammad
:``admin.sla``:              :doc:`Manage > SLAs </manage/slas>`
:``admin.tag``:              :doc:`Manage > Tags </manage/tags>`
:``admin.text_module``:      :doc:`Manage > Text Modules </manage/text-modules>`
:``admin.ticket``:           :doc:`Settings > Tickets </settings/ticket>` (does not grant access to :doc:`/misc/composer`)
:``admin.time_accounting``:  :doc:`Manage > Time Accounting </manage/time-accounting>`

                             .. hint:: This permission may be useful for accounting personnel
                                if they need to be able to export timekeeping records.
:``admin.translation``:      :doc:`System > Translations </system/translations>` (also enables inline translation)
:``admin.trigger``:          :doc:`Manage > Triggers </manage/trigger>`
:``admin.user``:             :doc:`Manage > Users </manage/users/index>`

                             .. note:: 🤔 **I thought agents could already manage user accounts?**

                                Agents can create and edit **customers**, but they can’t:

                                * modify anyone’s permissions (roles or groups)
                                * modify anyone’s passwords
                                * edit other agents’ accounts

                             .. danger:: 🏴‍☠️ **This permission allows users to hijack other user sessions.**

                                To learn more, see :ref:`Taking over a user’s session <view-from-users-perspective>`.
