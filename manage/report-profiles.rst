Report Profiles
***************

Report profiles are used to restrict / filter report-results. The idea of the
profiles is to limit the number of tickets and determine the type of tickets
you want to analyze. You can create any number of profiles in the Admin
Interface in the "Report Profile" area. The edit-mask looks like this:

.. figure:: /images/manage/report-profiles/profile-filtering-for-specific-organization-by-created-at-within-last-month.png

This example shows the statistics of all tickets of the organization
"Awesome Customer" that were created in the last month.

The filters can be combined with each other as desired. The filters build on
each other, which means that they are further restricted per additional
attribute.

All configured filters are displayed in the statistics area and you can switch
between them with one click:

.. figure:: /images/manage/report-profiles/switching-in-between-report-profiles.gif


Further information about the reporting:
----------------------------------------

The time period and time interval can be changed with one click
(the graphic adapts itself directly):

.. figure:: /images/manage/report-profiles/reporting-time-frame.png

You can filter the Create Channels (Phone, email, Twitter,...) and Communication
(Phone, email, Twitter,...) and select metrics (choose from the menu bar in the
upper left corner - currently Ticket Count, Create Channels, Communication).
Here are  all tickets with a certain metric of a profile evaluated.

.. figure:: /images/manage/report-profiles/reporting-change-graph-details.png

The list below the graphic shows the tickets that have been filtered out.
This can be downloaded as CSV and processed in a statistics program:

.. figure:: /images/manage/report-profiles/download-reporting-result-as-csv.png

.. TODO needs rework
   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst
