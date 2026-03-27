Calendars
=========

A calendar defines your business hours and holidays. You can even create multiple
calendars for different customers. To access the calendar settings under
*Manage > Calendars*, the permission ``admin.calendar`` is required.
A configured calendar is required for some features like
:doc:`slas`, time-sensitive automation with :doc:`triggers <trigger>` or
:doc:`scheduler jobs <scheduler>` and :doc:`reports <report-profiles>`.

You can define a default calendar and create specific calendars for customers.
The connection between customers and calendars are SLAs. In an SLA you
choose a calendar. Only your opening hours are counted towards an escalation.
The already created calendars are displayed in a card style and show the most
important information in the overview.

Manage Calendars
----------------

.. figure:: /images/manage/calendars/calendar-management.png
   :alt: Screenshot shows Zammad's calendar configuration.

New Calendar
   To create a new calendar, click the **New Calendar** button on the top right
   corner.

Delete
   Click the **Delete** button to delete a specific calendar. All SLAs
   assigned to this calendar are automatically assigned to the default calendar.
   You cannot delete the default calendar.

Set as Default
   Sets this calendar as the default general calendar. Deleting a calendar
   referenced by an SLA causes the system to apply the default calendar instead.

Edit
   The **Edit** button opens the edit dialog (same as for "New Calendar"). The
   specific configuration options are explained in the next section.

Configure Calendars
-------------------

.. figure:: /images/manage/calendars/editing-calendars.png
   :alt: Screenshot shows the calendar configuration dialog.

Name
   Name of the calendar. Add a descriptive name to easily identify the calendar.
   This is especially important if you have multiple calendars for different
   customers.

Time Zone
   Set the time zone for this calendar. This should either be the time zone
   of your business location or - in case of a calendar for SLAs - the time zone
   on which you agreed with your customer.

Business Hours
   Add your business hours by adding a start and end time for each time frame
   of a day. You can define different business hours for each day of the week.
   To reflect closing times during a day, add another time frame for the same
   day by clicking the ``+`` button at the bottom of the table (can be done
   multiple times). Make sure that your time frames do not overlap and that
   the end time is after the start time. Otherwise, a red frame will notify you
   that there is an error in your configuration.

Holidays iCalendar Feed
   Here you can subscribe to an iCalendar feed to automatically fetch holidays.
   Either choose **Subscribe to public holidays in** and select a country to
   automatically load the holidays for this country from Google.

   The other option **Subscribe to iCalendar feed** allows you to add a custom
   iCalendar feed URL.
   Both options allow you to add custom and/or additional holidays as well, see
   next section.

Holidays
   Add additional holidays or custom closing times here. After adding a date and
   an optional description, make sure to finally click the **+ Add** button to
   save the entry.

After you configured the calendar, click the **Submit** button to save it.
