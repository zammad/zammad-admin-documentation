Maintenance
===========

Zammad comes with a maintenance mode that you can use for e.g. updating
the instance or changing settings while restricting availability and functions.

Mode
   The mode setting allows you to enable or disable the maintenance mode.

   Defaults to *off*.

   The maintenance mode will restrict access to administrative roles only.
   This means agents and customers are logged off.

@Login
   This setting allows you to provide a login message within a green banner
   above the login screen. Click into the green banner in the settings page
   to adjust your message. To activate the message, activate the *@Login*
   setting.

   .. figure:: /images/system/maintenance/login-message-setting.png
      :alt: Screenshot showing the default login message within the
            settings page

Message
   Send an informative message to **all active sessions**.
   This comes handy to inform your agents e.g. about mayor outages or to
   force reloads after configuration changes.

   Title
      This is the messages title (slightly bigger than the normal message).

   Message
      The text you want to provide to your logged in sessions.

   Reload application
      Selecting this option will change the message acceptance button from
      *Close* (with nothing happening) to *Continue session*, which forces
      the application to reload.

   .. warning::

      If you have customers that are logged in to Zammad, they'll also be
      notified if they're active in that moment.

   .. tabs::

      .. tab:: Example without reload application

         .. container:: cfloat-left

            Message setting within Zammad's admin settings without ticket reload
            application setting.

            .. figure:: /images/system/maintenance/maintenance-message-without-reload-application.png
               :alt: Screenshot showing the send message settings without ticket
                     reload application set

         .. container:: cfloat-right

            The modal all other active sessions will see upon pressing
            *Send to clients*.

            .. figure:: /images/system/maintenance/message-without-reload-application.png
               :alt: Screenshot showing modal caused by maintenance's message
                     without reload application ticket

         .. container:: cfloat-clear

            X

      .. tab:: Example with reload application

         .. container:: cfloat-left

            Message setting within Zammad's admin settings with ticket reload
            application setting.

            .. figure:: /images/system/maintenance/maintenance-message-without-reload-application.png
               :alt: Screenshot showing the send message settings with ticket
                     reload application set

         .. container:: cfloat-right

            The modal all other active sessions will see upon pressing
            *Send to clients*.

            .. figure:: /images/system/maintenance/message-with-reload-application.png
               :alt: Screenshot showing modal caused by maintenance's message
                     with reload application ticket

         .. container:: cfloat-clear

            X
