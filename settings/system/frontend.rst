Frontend
========
.. _core-workflow-ajax-mode:

Core Workflow Ajax Mode
   This setting allows administrators to enforce :doc:`/system/core-workflows`
   to use Ajax-Calls instead of web sockets. You'll usually only need this if
   you experience serious issues as noted below.

   .. hint:: **🤓 Possible (technical) reasons**

      In some cases, your network structure (e.g. firewalls, proxies)
      may disconnect long web socket connections. This leads to
      select fields staying empty (e.g. owner selection *after* selecting
      your group) or fields not shown / hidden (e.g. when switching to
      or from pending states, the "pending till" field not showing / hiding).

      Please keep in mind that the Ajax fallback may cause serious
      pressure on your application server. If you have the choice stick to
      web sockets.

   Default: ``no`` (inactive)

Show calendar weeks in the picker of date/datetime fields
   With this setting you can instruct Zammad to provide week number display
   globally for all users. Calendar with week number display are usually used
   in business sectors and may not be relevant for everyone.

   This setting affects *all areas* - you'll also see week numbers in the
   admin panel for e.g. triggers and macros.

   Default: ``no`` (not shown)

   Here's the difference:
      .. container:: cfloat-left

         .. figure:: /images/settings/system/frontend-datepicker-no-weeknumbers.png
            :alt: Screenshot showing Zammad's date picker (in the default way)
            :align: center

            Set to ``no``

      .. container:: cfloat-right

         .. figure:: /images/settings/system/frontend-datepicker-with-weeknumbers.png
            :alt: Screenshot showing Zammad's date picker with
                  week numbers enabled
            :align: center

            Set to ``yes``

      .. container:: cfloat-clear

         X
