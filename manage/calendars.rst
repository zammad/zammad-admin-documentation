Calendars
*********

A calendar is required to:

   * automate ticket escalations,
   * generate reports that only capture activity during business hours, or
   * set up time-sensitive triggers.

Define a "standard"-calendar which system-wide is valid. Only in the specified
business hours, escalation notifications are sent to agents.

If you have customers for which you have to comply with different customer
business hours, you can create several calendars. The allocation to the customer
tickets can be adjusted via the SLAs.


And this is what it looks like:

.. figure:: /images/manage/calendars/calendar-management.png

All created calendars are displayed in the overview.

New Calendar
   Here you can create a new calendar if agents or customers belong to another time zone.

Delete
   Just push the delete-button to delete this specific calendar - all SLAs
   assigned to this calendar are automatically assigned to the default calendar.

Set as Default
   Pressing this button sets this calendar as the default calendar for the
   entire system.

Edit
   Via this button you get to the edit-mask (same mask as in "New Calendar"):

.. figure:: /images/manage/calendars/editting-calendars.png

Determine a name, a time-zone, the business hours to be used for this
calendar and special holidays. In addition, you can subscribe to the iCalendar,
which will automatically load all holidays from Google (updated once a day) ...
and you can add a note.
