Report-Profiles
***************

Report profiles are used to restrict / filter report-results. The idea of the profiles is to limit the number of tickets and determine the type of tickets you want to analyze.
You can create any number of profiles in the Admin Interface in the "Report Profile" area. The edit-mask looks like this:

.. image:: /images/manage/Zammad_Helpdesk_-_Report_Profile.jpg

This example shows the statistics of all tickets of the organization "Awesome Customer" that were created in the last month.

The filters can be combined with each other as desired. The filters build on each other, which means that they are further restricted per additional attribute.

All configured filters are displayed in the statistics area and you can switch between them with one click:

.. image:: /images/manage/Zammad_Helpdesk_-_Report_Profile2.jpg


Further information about the reporting:
----------------------------------------

The time period and time interval can be changed with one click (the graphic adapts itself directly):

.. image:: /images/manage/Zammad_Helpdesk_-_Reporting10.jpg

You can filter the Create Channels (Phone, Email, Twitter,...) and Communication (Phone, Email, Twitter,...) and select metrics (choose from the menu bar in the upper left corner - currently Ticket Count, Create Channels, Communication). Here are  all tickets with a certain metric of a profile evaluated.

.. image:: /images/manage/Zammad_Helpdesk_-_Reporting11.jpg

The list below the graphic shows the tickets that have been filtered out. This can be downloaded as CSV and processed in a statistics program:

.. image:: /images/manage/Zammad_Helpdesk_-_Reporting12.jpg
