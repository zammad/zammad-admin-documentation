Report Profiles
===============

The reporting is useful to view statistics, get an overview of the number of
tickets (e.g. tickets of a specific customer) and to download ticket data from
Zammad. In the following section you will find instructions about how to create
and change report profiles. You can find an explanation about how to use the
reporting in the
:user-docs:`reporting section of the user documentation </extras/reporting>`.
If the reporting in Zammad is not enough for you, you can even connect
third-party reporting tools like Grafana to Zammad.

To create and edit report profiles, ``admin.report_profile`` permission is
required. To use the reporting itself, ``report`` permission is required.

.. warning:: ⚠️ Be aware that granting users the ``reporting`` permission may
    leak information. On the one hand, users could see ticket metadata that they
    do not actually have access to. On the other hand, a possibly large scale of
    ticket information can easily be downloaded as a spreadsheet.

Create and Edit Profiles
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
"Awesome Customer Inc." that were created in the last month.

All configured report profiles are displayed in the reporting area and you can
switch between them with one click. Have a look at the next section to learn
some basics about the usage of the reporting.

Use the Reporting
-----------------

You can find the reporting section in the bottom left corner in Zammad next to
the avatar icon or your initials:

.. figure:: /images/manage/report-profiles/menu-bar-reporting.png
    :alt: Menu bar with highlighted reporting

If you can't see the reporting button, you should check the permissions.

Have a look at the
:user-docs:`reporting section of the user documentation </extras/reporting>`
for more information about the usage.

External Reporting Tools
------------------------

If the integrated reporting is not enough for you, you can even use third
party tools like Grafana! Please have a look at
:docs:`Reporting Tools </appendix/reporting-tools-thirdparty.html>` in the
system documentation, where you can find more information.
