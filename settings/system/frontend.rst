Frontend
********
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
