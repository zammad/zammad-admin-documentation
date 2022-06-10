Time Accounting
***************

If you want to know how much time you need for your each project or ticket,
enable time accounting (turn on the switch on the top left side of the page).

.. figure:: /images/manage/time-accounting/configuration-for-time-accounting.png
   :alt: Time accounting management page in Zammad

How it works
------------

Zammads time accounting uses ticket selectors (filters) to check if a ticket
is applicable for time accounting or not. If a ticket applies for accounting,
Zammad will request the agent to provide how much time was needed to process
the current ticket step.

   .. note::

      In order for Zammad to bring up the time accounting dialogue to an agent,
      the agent has to update the ticket together with any article type.
      The article part is mandatory.

      If a ticket no longer applies for time accounting, the already accounted
      time is not lost.

   .. tip::

      The selector applies to the current relevant ticket state, not the future
      state. That means if your agent is going to close a ticket but its state
      currently is open, your ticket selector has to apply to -at least- open
      tickets.

.. figure:: /images/manage/time-accounting/configuration-for-time-accounting.png
   :width: 90%
   :align: center
   :alt: Time accounting ticket selectors

Reviewing accounted time
------------------------

Below the selector configuration, Zammad provides "Overviews" which will contain
all accounted times for your tickets. Accounted times are displayed per years
month.

   .. hint::

      | Having tickets that are overlapping several months?
      | No problem! Zammad provides *time units* and *time units total* to allow
        partial billing.

Select the right month
   Usually you want to bill accounted time of other months than the current one.
   Just select the relevant year and month to receive the accounted times and
   ticket information

   .. figure:: /images/manage/time-accounting/time-accounting-month-selection.png
      :alt: Screenshot showing a selection for year and month on time accounting

Tickets and their accounted time
   Zammad allows you to receive the accounted information just like you need
   them. For this you currently have three options to view and also download
   the relevant data as CSV.

   To download the CSV data, use the arrow down ⇩ right next to each heading
   (e.g. "Ticket").

   .. hint::

      🤓 Of course you can also automate this with API calls.

   Ticket
      This filter contains all relevant tickets from the selected month.
      
      In this list you'll see the following ticket information:

         * Number
         * Title
         * Customer
         * Organization of customer (if applicable)
         * Currently assigned agent (ticket owner)
         * Time units accounted in the current month
         * Time units total (time accounted during ticket life)
         * Created at
         * Closed at (if applicable)

      .. hint::

         The CSV file of this filter provides all ticket meta information.

   Customer
      This provides you a per user filter on accounted time units.
      Each user has a total of time accounted in the current month (over all
      applicable tickets).

      In this list you'll see the following ticket information:

         * Customer
         * Organization of customer (if applicable)
         * Time units accounted in the current month

   Organization
      This provides a list of all organizations where customers have caused
      accounted time in that month.

      .. note::

         You can also see entries for customers that are part of an primary
         organization. Users without organization can be found in the Customer
         filter.

   .. figure:: /images/manage/time-accounting/download-accounted-times-as-csv.png
      :align: center
      :alt: Time accounting view with time accounted filters

      Each heading allows you to download the CSV versions of the provided
      view via the downwards arrow.
