Learn by Example
================

This page showcases some examples for core workflows. To learn about core
workflows in detail, first go to :doc:`how-do-they-work`.

Basics
------

All core workflow examples below are configured in the same system. Compared to
a fresh installation of Zammad, the system has some additional groups and some
custom object attributes you can find in the respective examples.
See these examples as inspiration and adapt the workflows to your processes.

Group Based Fields
------------------

Often, different teams (like sales, support, or 2nd level) need slightly
different workflows to handle tickets effectively. Group-based workflows allow
you to customize the ticket experience by defining the fields displayed, the
required input and the available options based on the group assigned to the
ticket.

Problem/scenario
   When a ticket is created in or moved to the ``2nd Level`` group, the category
   field must be limited, some fields have to be shown and specific fields
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
        - **Group** *is* ``2nd Level``
        -

      * - Saved conditions
        -
        - Not used because the UI has to change

          immediately when the group is set to 2nd Level.

      * - Action
        - - **Category** *show*
          - **Category** *set fixed to* ``2nd Level`` (and all sub categories)
          - **Operating System** and **Software used** *show*
          - **Operating System** and **Software used** *set mandatory*
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
        - **Role** *is not* ``Approval Person``
        - Checks if role is not ``Approval Person`` for unsaved

          changes in the ticket.

      * - Saved conditions
        - **Approved** *is not* ``yes``
        - Checks if the approval is not yet set to ``yes``.

      * - Action
        - **Approved** *set fixed to* ``no``
        - Prevents changes when above conditions are met.

Configuration in UI
   .. figure:: /images/system/core-workflows/examples/2_role-specific-approval-settings.png
      :alt: Sample workflow that restricts an approval attribute to specific roles
      :width: 70%

Enforcing Ticket Categorization
-------------------------------

To have convincing numbers for your statistic, it can be a good idea to enforce
certain attributes to be populated before the ticket can be closed.

Problem/scenario
   The ``Category`` field must be set to mandatory if an agent wants to set the
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
        - **State** *is* ``closed`` or ``pending close``
        - Selected condition because it has to be

          checked before changes are saved.

      * - Action
        - **Category** *set mandatory*
        -

Configuration in UI
   .. figure:: /images/system/core-workflows/examples/3_state-dependent-mandatory-fields.png
      :alt: Sample workflow that sets fields to mandatory on specific states
      :width: 70%


Ticket Handover Process
-----------------------

A handover from one agent to another might require more than just a change of
the owner. Depending on the issue or process, it can be very helpful that the
original agent leaves a small note so the new agent knows immediately what's the
reason for the handover and where to start.

Problem/scenario
   Agents must write a small comment when they want to change the ticket owner.
   There is a custom ticket attribute called ``Handover`` where a text can be
   inserted. This field is hidden by default (Workflow 1) and only shows up
   when the owner changes. Additionally, it must be set to mandatory in such a
   case (Workflow 2).

   Because the field is hidden after saving the change of the ticket owner, the
   text of the field has to be written to the ticket as an article by a trigger.
   Otherwise, the new agent would not see it at all.

Workflow configuration
   .. tabs::

      .. tab:: Workflow 1

         This workflow hides the field in general. Please note the lower
         priority which tells Zammad to execute this workflow first.

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
              - No condition needed, because it should

                always be hidden.

            * - Saved conditions
              -
              - No condition needed, because it should

                always be hidden.

            * - Action
              - **Handover** *hide*
              -

      .. tab:: Workflow 2

         This workflow shows the field and sets it as mandatory when another
         ticket owner is selected. This workflow has the default priority so
         it runs after Workflow 1.

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
              - **Owner** *is modified*
              - Selected condition because it has to be

                checked before changes are saved.

            * - Saved conditions
              -
              -

            * - Action
              - - **Handover** *show*
                - **Handover** *set mandatory*
              -

      .. tab:: Trigger

         As mentioned above, the content of the field has to be written as a
         ticket article by a trigger. An example configuration of such a trigger
         could look like this:

         - Condition: **Handover** *has changed*
         - Action: **Article** > **Note** with variable
           ``#{ticket.handover}`` in body

Configuration in UI
   .. tabs::

      .. tab:: Workflow 1

         .. figure:: /images/system/core-workflows/examples/example-handover-hide.png
            :alt: Hiding the handover field in core workflows
            :width: 70%

      .. tab:: Workflow 2

            .. figure:: /images/system/core-workflows/examples/example-handover-show.png
               :alt: Showing the handover field and set it as mandatory
               :width: 70%

      .. tab:: Trigger

            .. figure:: /images/system/core-workflows/examples/example-handover-trigger.png
               :alt: Write the content of the handover field to an article by a trigger
               :width: 70%

   As a result, the ticket includes an article of the type note which includes
   the predefined text and the handover comment.
