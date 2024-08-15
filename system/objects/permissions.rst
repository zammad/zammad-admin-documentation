Attribute Permissions
*********************

Introduction
------------

In the object attributes configuration you can define if a field is shown
and if the input in the field is mandatory, separated by
different screens and for different
:doc:`roles/permissions </manage/roles/index>`.

.. figure:: /images/system/objects/permission-and-screen-overview.png
   :align: center
   :alt: Screenshot shows object attribute permission table
   :scale: 60%

   Some of the possible permissions and screen options for a user object attribute.

Based on the object context (ticket, agent, organization, user), the selectable
roles (to be precise: the required permissions) and screens differ. Be aware that
these settings aren't affecting data creation via other channels
than the UI.

If you want to have further customization possibilities, you should have a look
at the :doc:`core workflows </system/core-workflows>`.

Screens
-------

In the table below you can find an overview about the different
permissions and the available screens Zammad distinguishes between.

.. list-table::
   :header-rows: 1
   :widths: 40, 40, 20

   * - Screen
     - Available for
     - Description
   * - create
     - - admin.user
       - admin.organization
       - admin.group
     - Creation dialog for not yet existing data
   * - create_middle
     - - ticket.customer
       - ticket.agent
     - Ticket create dialog (middle section)
   * - edit
     - - ticket.customer
       - ticket.agent
       - admin.user
       - admin.organization
       - admin.group
     - Editing dialog for already existing data
   * - view
     - - ticket.customer
       - ticket.agent
       - admin.user
       - admin.organization
       - admin.group
     - View-only dialog for already existing data

       (e.g. user or organization from search)
   * - signup
     - ticket.customer
     - Sign-up screen for new customers
   * - invite_customer
     - - ticket.agent
       - ticket.customer
     - Customer invitation screen (from :doc:`First Steps </misc/first-steps>` area)
   * - invite_agent
     - admin.user
     - Agent invitation screen (from :doc:`First Steps </misc/first-steps>` area)


Screen Options
--------------

For the different screens you can select "show" and "required" options.

- **shown:** Show (check) or hide (uncheck) a field.
- **required:** Set a field to mandatory (check). Forces users (via UI and API)
  to populate the field.
