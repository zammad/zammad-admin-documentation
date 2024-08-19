Branding
========

.. _zammad-product-name:

Product Name
   Defines the name of the application, shown in the web interface,
   tabs and title bar of the web browser.

   Default value: ``Zammad Helpdesk``

Organization
   Will be shown in the app and is included in email footers.

Logo
   Defines the logo of the application, shown in the login page of Zammad.

   Ensure to hit the "Submit" button after uploading the logo.
   Otherwise your change will not be saved.

Locale
   Allows to set the default language of the Zammad instance.
   The here defined locale mostly acts as a fallback for:

      * user preferences (if Zammad can't detect the users locale)
      * CSV output (reporting, time accounting)
      * notifications

Timezone
   Define the timezone of your Zammad installation.

   This does not have any effect on timings for your agents or how
   Zammad stores date and time values.

   Changing this value has direct consequences on the following areas:

      * :doc:`/manage/scheduler` tasks
      * search indexing (and thus reporting)
      * notifications
      * calendar subscriptions
      * browser printing

   Please note that some of above are fallbacks in case Zammad
   could not detect the agents timezone correctly.

Pretty Date
   This setting allows you to define how Zammad should display time stamps
   within the interface to all users.

   This does not have any effect on how Zammad returns e.g. time values
   via variables.

   Choose in between the following options:
      relative
         This timestamp shows a relative time span until it switches to a date.
         Over time, it will change as follows:

            * just now
            * 5 minutes ago
            * 3 days 1 hour ago
            * ``03/04/2022``

         Hovering the timestamp helps, you'll always get a clean timestamp
         then.

      absolute
         This timestamp always includes the week day.
         For one week after creation, the timestamp will not contain the date
         itself: Thursday 18:35.

         After a week it will switch to: ``Friday 4. Mar 16:00``.

      timestamp
         This will cause Zammad to show a complete timestamp according to your
         locale defaults. For English this could be e.g. ``2022/12/03 2:40 pm``
         or for German e.g. ``12.03.2022 14:40``.

      Default setting: ``relative``.
