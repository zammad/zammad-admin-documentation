Learn by Example
================

This page showcases some examples for core workflows. To learn about core
workflows in detail, first go to :doc:`how-do-they-work`.

Basics
------

All workflow examples are configured in the same system. Compared to a fresh
installation of Zammad, the system has the following object attributes
configured:

* Groups:

  * Sales
  * Support
  * 2nd Level

* Custom object attributes:

  * Category (single tree selection field, not mandatory, agents only)
  * Approved (boolean field, not mandatory, not shown, ``false`` as default)
  * Operating System (text field, not mandatory, not shown)
  * Software used (single selection field, not mandatory, not shown)

Group Based Workflow
--------------------

Often, different teams (like sales, support, or 2nd level) need slightly
different workflows to handle tickets effectively. Group-based workflows allow
you to customize the ticket experience by defining the fields displayed, the
required input and the available options based on the group assigned to the
ticket.

Problem/scenario
   When a ticket is created in or moved to the ``2nd Level`` group, the category
   field must be limited, some fields have to be shown and it specific fields
   are mandatory to have all relevant information for the 2nd level support
   present in the ticket.

Workflow configuration
   .. list-table::
      :widths: 20,50,30
      :header-rows: 1

      * - Area
        - Configuration
        - Note

      * - Object
        - Ticket
        -

      * - Context
        - - Creation mask
          - Edit mask
        -

      * - Selected conditions
        - Group *is* ``2nd Level``
        -

      * - Saved conditions
        -
        - Not used because the UI has to change

          immediately when the group is set to 2nd Level.

      * - Action
        - - ``Category`` *show*
          - ``Category`` *set fixed to* ``2nd Level`` (and all sub categories)
          - ``Operating System`` and ``Software used`` *show*
          - ``Operating System`` and ``Software used`` *set mandatory*
        -

Configuration in UI
   .. figure:: /images/system/core-workflows/examples/1_group-specific-fields-and-values_2nd-level.png
      :alt: Sample workflow that shows specific values and fields for 2nd level
      :width: 70%

Approval Process
----------------

In many organizations, an approval is required to initiate subsequent processes.
This approval is usually limited to a specific group of people to ensure that
all requirements for the subsequent process are fulfilled.

Problem/scenario
   The approval of a customer issue can only be done by users with the role
   ``Approval Person``. As long as this approval has not been done, the value
   must be set fixed to  ``no``, unless the approval person views the ticket.

   Based on the approval state, additional automation processes can be
   established (e.g. a trigger to raise the priority or assign a specific agent).

Workflow configuration
   .. list-table::
      :widths: 20,50,30
      :header-rows: 1

      * - Area
        - Configuration
        - Note

      * - Object
        - Ticket
        -

      * - Context
        - - Creation mask
          - Edit mask
        -

      * - Selected conditions
        - Role *is not* ``Approval Person``
        - Checks if role is not ``Approval Person`` for unsaved

          changes in the ticket.

      * - Saved conditions
        - ``Approved`` *is not* ``yes``
        - Checks if the approval is not yet set to ``yes``.

      * - Action
        - ``Approved`` *set fixed to* ``no``
        - Prevents changes when above conditions are met.

Configuration in UI
   .. figure:: /images/system/core-workflows/examples/2_role-specific-approval-settings.png
      :alt: Sample workflow that restricts an approval attribute to specific roles
      :width: 70%

State Dependent Mandatory Fields
--------------------------------

Problem/scenario
   This workflow sets ``Category`` to mandatory if the agent wants to set the
   states ``closed`` or ``pending close`` to enforce categorization.


Workflow configuration
   .. list-table::
      :widths: 20,50,30
      :header-rows: 1

      * - Area
        - Configuration
        - Note

      * - Object
        - Ticket
        -

      * - Context
        - - Creation mask
          - Edit mask
        -

      * - Selected conditions
        - 
        - 

      * - Saved conditions
        - 
        - 

      * - Action
        - 
        - 

Configuration in UI
   .. figure:: /images/system/core-workflows/examples/3_state-dependent-mandatory-fields.png
      :alt: Sample workflow that sets fields to mandatory on specific states
      :width: 70%


Manual Ticket Handover Process
------------------------------


Problem/scenario
   This example covers the handover of a ticket from one agent to another:

   - When the ticket owner is modified, a new text field ("Handover") shows up
     for a comment
   - This may only be visible when the owner is changed, therefore it has to
     be hidden in general
   - The input in this handover text field is mandatory
   - After submitting changes, the value of the handover field must be added as
     a note to the ticket (via trigger)


Workflow configuration
   .. list-table::
      :widths: 20,50,30
      :header-rows: 1

      * - Area
        - Configuration
        - Note

      * - Object
        - Ticket
        -

      * - Context
        - - Creation mask
          - Edit mask
        -

      * - Selected conditions
        - 
        - 

      * - Saved conditions
        - 
        - 

      * - Action
        - 
        - 

Configuration in UI
   .. tabs::

      .. tab:: Hide handover field

         .. figure:: /images/system/core-workflows/examples/example-handover-hide.png
            :alt: Hiding the handover field in core workflows
            :width: 70%

      .. tab:: Show handover field and set it to mandatory

            .. figure:: /images/system/core-workflows/examples/example-handover-show.png
               :alt: Showing the handover field and set it as mandatory
               :width: 70%

      .. tab:: Additional trigger creating a new article

            .. figure:: /images/system/core-workflows/examples/example-handover-trigger.png
               :alt: Write handover content to a new article
               :width: 70%

As a result, the ticket includes an article of the type note which includes
the predefined text and the handover comment.
