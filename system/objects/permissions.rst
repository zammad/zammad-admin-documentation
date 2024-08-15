Attribute Permissions
*********************

Introduction
------------

In the object attributes configuration you can set basic permissions based
on Zammad's :doc:`role architecture </manage/roles/index>`.

.. figure:: /images/system/objects/permission-and-screen-overview.png
   :align: center
   :alt: Screenshot shows object attribute permission table
   :scale: 60%

   Some of the possible permissions and screen options for a user object attribute.

In this attribute settings, you can:

- differentiate in which form specific fields have to be shown
- in which form fields are mandatory
- select for which roles it should apply

Based on the object context (ticket, agent, organization, user), the available
roles and screens are different. Be aware that these permission settings aren't affecting
the data creation via other channels than the UI.

If you want to have further customization possibilities, you should have a look
at the :doc:`core workflows </system/core-workflows>`.

Screens
-------

Zammad differentiates between several screens where object attributes can be
used. The selectable screens depend on the object context you are in, see
table below.

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

In the different screens, you can select "show" and "required" options.

- **shown:** Show (check) or hide (uncheck) a field.
- **required:** Set a field to mandatory (check). Forces users (via UI and API)
  to populate the field.


Example
-------

