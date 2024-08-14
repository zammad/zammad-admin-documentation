Attribute Permissions
*********************

Introduction
------------

The object attributes allow you to set permissions and to select when they
have to be shown and if they are required. Based on the object context (ticket,
agent, organization, user), you can find related permissions as you can see
in the description below.

If this is not what you are searching for or if you want to have further
customization possibilities, you should have a look at our
:doc:`core workflows section </system/core-workflows>`.

This section assumes that you are already aware of Zammad's
:doc:`role permissions </manage/roles/index>`.

.. note::

   In some situations, Zammad internally overrules your chosen settings for
   screen, requirement and permission. This affects situations where a field
   can't be set which would be required for the ticket creation.

   This currently affects:

      * merging
      * emails no matter of the originating channel (incoming)
      * :doc:`/channels/form` (incoming)
      * :doc:`/channels/facebook` (incoming)
      * :doc:`/channels/telegram` (incoming)
      * :doc:`/channels/twitter-x/twitter` (incoming)
      * SMS (incoming)

Screens
-------

Zammad differentiates between several screens where object attributes can be
used. You can find an example in the screenshot below:

.. figure:: /images/system/objects/permission-and-screen-overview.png
   :align: center

   Some of the possible permissions and screen options for object attributes.

The selectable screens depend on the object context you are in. See the table
below to have an overview.

.. list-table::
   :header-rows: 1
   :widths: 40, 40, 20

   * - Screen
     - Available for
     - Description
   * - create & create_middle
     - - ticket.customer
       - ticket.agent
       - admin.user
       - admin.organization
       - admin.group
     - Creation dialog for not yet existing data
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
     - - ticket.customer
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

shown
   Show (check) or hide (uncheck) a field.

required
   Set a field to mandatory (check). Forces users (via UI and API)
   to populate the field.
