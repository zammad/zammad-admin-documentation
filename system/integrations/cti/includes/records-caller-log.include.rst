Shown records in caller log
   Allows you to set the number of shown caller log entries for all users.
   You can choose from the following values:

      * 60 (default)
      * 120
      * 180
      * 240
      * 300

   .. warning:: **🥵 Potential performance issue**

      Setting this setting higher than 60 may cause serious performance issues
      on very busy instances. Keep in mind that this setting causes Zammad to
      poll and send up to 300 records to *all active agent sessions* in very
      short time periods.
