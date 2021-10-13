Frontend
********

Send client stats
   Send client stats/error message to central server to improve the usability.

   Default: ``no`` (inactive)

   .. danger::

      This sends logging to our central logging server.
      Log files of Zammad can contain *very sensitive* data like email addresses
      and other. **Do not** enable this option unless we're asking you to.

Client storage
   Use client storage to cache data to enhance performance of application.

   Default: ``no`` (inactive)
