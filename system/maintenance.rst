Maintenance
***********

Zammad comes with a maintenance mode that you can use for e.g. updating
the instance or changing settings while restricting availability and functions.

Mode
   The mode setting allows you to enable or disable the maintenance mode.

   Defaults to *off*.

   The meintenance mode will restrict access to administrative roles only.
   This means agents and customers are logged off.

@Login
   This setting allows you to provide a login message within a green banner
   above the login screen.

   This setting by default is empty.

   .. image:: /images/maintenance/Login-1.jpg

Message
   Send an informative message to **all active sessions**.
   This comes handy to inform your agents e.g. about mayor outages or to
   force reloads after configuration changes.

   Title
      This is the messages title (slightly bigger than the normal message).

   Message
      The text you want to provide to your logged in sessions.

   Reload application
      Selecting this option will change the messages acceptance button from
      *Okay* (with nothing happening) to *Reload Application* which forces
      the application to reload.

   .. warning::

      If you have customers that are logged in to Zammad, they'll also be
      notified if they're active in that moment.

   .. image:: /images/maintenance/Login-2.jpg
