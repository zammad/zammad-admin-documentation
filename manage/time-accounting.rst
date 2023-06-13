Time Accounting
***************

If you want to know how much time you need for your each project or ticket,
enable the time accounting (turn on the switch on the top left side of the
page).

.. figure:: /images/manage/time-accounting/time-accounting-management.png
   :alt: Time Accounting Management Screen in Zammad

How it works
------------

Settings
~~~~~~~~

Zammad's time accounting uses ticket **Selector** (filter) to check if a ticket
is considered for the time accounting or not. If a ticket is applicable, Zammad
will request the agent to provide how much time was needed to process the
current ticket step.

   .. note::

      In order for Zammad to bring up the time accounting dialog to an agent,
      the agent has to update the ticket together with an article of any type.
      The article part is mandatory.

      However, the time accounting dialog is not mandatory and can be canceled
      by your agents if needed. You cannot enforce time accounting.

      If a ticket is no longer considered for the time accounting, the already
      accounted time will be preserved.

   .. tip::

      The selector applies to the ticket state before any attribute changes have
      been saved. That means if your agent is e.g. going to close a ticket
      alongside writing an article, the ticket selector has to match the ticket
      state before closing for the time accounting dialog to appear.

   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

.. figure:: /images/manage/time-accounting/time-accounting-selector.png
   :align: center
   :alt: Time Accounting Ticket Selector

By default, agents account time as a unitless numerical input. However, it is
possible to show a specific unit by configuring **Unit** setting, which provides
several options:

   no unit
      Default behavior, no unit is shown next to the time value.
   hour(s)
      Shows ``hour(s)`` as the unit next to the time value.
   quarter-hour(s)
      Shows ``quarter-hour(s)`` as the unit next to the time value.
   minute(s)
      Shows ``minute(s)`` as the unit next to the time value.
   custom unit
      Shows a custom unit that can be specified as free input.

.. figure:: /images/manage/time-accounting/time-accounting-unit.png
   :align: center
   :alt: Time Accounting Unit

.. warning::
   The configurable time accounting unit is used only for display!

   No numerical transformation will be applied to the values, the unit is merely
   used to indicate to the agents in which units their time is accounted. The
   original time values will be preserved.

   .. figure:: /images/manage/time-accounting/time-accounting-unit-recording.png
      :align: center
      :alt: Time Accounting Unit when Recording

Activity Types
~~~~~~~~~~~~~~

**Activity Types** can be used to group the different ticket time accounting
entries together. For example, entries that are relevant to a "Billing" type.

.. figure:: /images/manage/time-accounting/time-accounting-types.png
   :align: center
   :alt: Time Accounting Activity Types

When you enable the recording of the **Activity Type**, the agents will be able
to select a type from this list.

.. figure:: /images/manage/time-accounting/time-accounting-select-activity-type.png
   :align: center
   :alt: Time Accounting Activity Type Selection for Agents

Additionally, a column with an associated activity type will be rendered for an
entry in the **Activity** table under the **Accounted Time** tab.

You can manage available activity types in this screen like any other Zammad
object. Only active types will be available for the selection when recording new
times.

.. figure:: /images/manage/time-accounting/time-accounting-new-type.png
   :align: center
   :alt: New Time Accounting Activity Type Dialog

.. hint::
   | Activity types can be set as default, and in that case they will be
   | pre-selected for the agents when they are asked to account their time.
   | It is also possible to unset default activity type, in which case no type
   | will be pre-selected and the agents can make their choice.

Accounted Time
~~~~~~~~~~~~~~

Under the **Accounted Time** tab, Zammad provides a section for reviewing all
accounted times for your tickets. Accounted times are displayed per years and
months.

.. hint::

   | Having tickets that are overlapping several months?
   | No problem! Zammad provides *time units* and *time units total* to allow
     partial billing.

Select the right month
   Usually you want to bill accounted time of other months than the current one.
   Just select the relevant year and month to receive the accounted times and
   ticket information.

   .. figure:: /images/manage/time-accounting/time-accounting-month-selection.png
      :alt: Screenshot showing a selection for year and month on time accounting

Tickets and their accounted time
   Zammad allows you to receive the accounted information just like you need
   them. For this you currently have four options to review and also download
   the relevant data as CSV.

   To download the CSV data, use the download button right next to each heading
   (e.g. "Ticket").

   .. hint::

      🤓 Of course you can also automate this with API calls.

   .. hint::
      Only the first 20 entries are shown for each table. To see all of them,
      simply download the records in CSV.

   Activity
      This filter works similar to the ticket filter, with one exception:
      You'll find each *individual* time accounting step of your agents.
      This is what you'd also see in the ticket's history before Zammad 5.2.

      In this list you'll see the following ticket information:

         * Number
         * Title
         * Customer
         * Organization of customer (if applicable)
         * Agent that accounted the time
         * Time units accounted in the current activity
         * Activity type (if enabled)
         * Created at

   Ticket
      This filter contains all relevant tickets from the selected month.

      In this list you'll see the following ticket information:

         * Number
         * Title
         * Customer
         * Organization of customer (if applicable)
         * Agent currently assigned (ticket owner)
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

         You can also see entries for customers that are part of a primary
         organization. Users without am organization can be found in the
         Customer filter.

   .. figure:: /images/manage/time-accounting/time-accounting-download-accounted-times-as-csv.png
      :align: center
      :alt: Time accounting view with time accounted filters

      Each heading allows you to download the CSV versions of the provided
      view via the download button next to it.
