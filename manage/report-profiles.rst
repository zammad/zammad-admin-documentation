Report Profiles and Reporting
*****************************

.. Reporting included here because it fits more to the administrator role than
.. the user role. /rsc

The reporting is useful to view statistics, get an overview of the number of
tickets (e.g. tickets of a specific customer) and to download ticket data from
Zammad. In the following section you will find a description of how to create
and change report profiles. In another section you can find information
on basic usage of the reporting UI itself. If the reporting options in Zammad
are not enough for you, we added a section about external reporting tools, you
can use.

To create and edit report profiles, ``admin.report_profile`` permissions are
required. To use the reporting itself, ``report`` permission is required.

.. warning:: ⚠️ Be aware that granting users the ``reporting`` permission may
    leak information. On the one hand, users could see ticket metadata that they
    do not actually have access to. On the other hand, a possibly large scale of
    ticket information can easily be downloaded as a spreadsheet.

Create and edit profiles
------------------------

Report profiles are used to filter report results. The idea of the
profiles is to limit the number of tickets and determine the type of tickets
you want to analyze. You can create any number of profiles in the admin
interface in the "Report Profile" area. You can filter the tickets as in other
places in Zammad based on different conditions.

.. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

The edit dialog looks like this:

.. figure:: /images/manage/report-profiles/profile-filtering-for-specific-organization-by-created-at-within-last-month.png
    :alt: Screenshot shows creation of report profile

This example shows the statistics of all tickets of the organization
"Awesome Customer" that were created in the last month.

All configured report profiles are displayed in the reporting area and you can
switch between them with one click. Have a look in the next section to learn
some basics about the usage of the reporting.

Using the reporting
-------------------

You can find the reporting section in the bottom left corner in Zammad next to
the avatar icon or your initials:

.. figure:: /images/manage/report-profiles/menu-bar-reporting.png
    :alt: Menu bar with highlighted reporting

If you can't see the reporting button, you should check the permissions.

The reporting screen is separated in different sections, which we describe
below:

.. figure:: /images/manage/report-profiles/reporting-sections.png
    :alt: Screenshot showing different sections in the reporting screen

1. **Additional filtering** based on the selected profile (see 2). You can
   filter by status ("Ticket Count"), "Creation Channels" and "Communication"
   types based on your channels.
2. **Profile switcher**: here you can easily switch between the different
   profiles, which were created in the admin panel under "Report Profiles".
   The shown tickets and numbers are always limited to the current profile,
   you have selected here.
3. **Time intervall/period switcher** and **graph** area: here you can define
   the intervall you want to see (e.g. "Month") as well as the time period (e.g.
   "Jul").
4. **Preview and download** section: here you can find a preview of tickets and
   a download button based on the report profile and your filtering. The
   download feature provides the the tickets in a ``.xlsx`` spreadsheet.

   .. note:: The ticket preview and download button are only showing up if you
    selected a filter based on "Ticket Count" (see 1).

    Due to technical reasons, the download is limited to 6.000 entries.

.. https://github.com/zammad/zammad/issues/2433

External reporting tools
------------------------

If the integrated reporting is not enough for you, you can even use third
party tools like Grafana! Please have a look at
:docs:`Reporting Tools </appendix/reporting-tools-thirdparty.html>` in the
system documentation, where you can find more information.
