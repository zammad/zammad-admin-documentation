Learn by Example
================

This page provides some basic examples for Core Workflows.
Of course you can build much more complex workflows if needed.

To learn about Core Workflows in detail, first go to :doc:`how-do-they-work`.

Group Based Examples
--------------------

All following workflows have the same base configurations.
The workflow may not use them all.

* Groups:

  * Sales
  * Support
  * 2nd Level
* Attributes:

  * Category (Single tree selection field, not mandatory, agents only)
  * Approved (Boolean field, not mandatory, not shown, ``false`` as default)
  * Operating System (Text field, not mandatory, not shown)
  * Software used (Single selection field, not mandatory, not shown)

1. Group specific values and fields
      This workflow set depends on the category field.
      It reduces the available set of values based on the group selected.

         .. tabs::

            .. tab:: Workflow 2nd Level group

               This reduces the category options to ``2nd Level/*``,
               ``Internal/*`` and ``Others``. It also sets further required
               fields to mandatory and visible.

               .. figure:: /images/system/core-workflows/examples/1_group-specific-fields-and-values_2nd-level.png
                  :alt: Sample workflow that shows specific values and fields for 2nd level
                  :width: 90%

            .. tab:: Workflow Support group

               This reduces the category options to ``Support/*``,
               ``Internal/*`` and ``Others``. It also sets further required
               fields to visible.

               .. figure:: /images/system/core-workflows/examples/1_group-specific-fields-and-values_support.png
                  :alt: Sample workflow that shows specific values and fields for support
                  :width: 90%

            .. tab:: Workflow Sales group

               This reduces the category options to ``Sales/*``,
               ``Internal/*`` and ``Others``.

               .. figure:: /images/system/core-workflows/examples/1_group-specific-fields-and-values_sales.png
                  :alt: Sample workflow that shows specific values and fields for sales
                  :width: 90%

         The Result
            This is what the agent would experience with the above
            workflows in place.

            .. figure:: /images/system/core-workflows/examples/1_group-specific-fields-and-values_result.gif
               :alt: Workflow shows objects and limits options based on selections on the group
               :width: 90%

2. Approval process
      In this case ``approved`` is visible to agents by default.
      For this workflow, an additional role ``Approval person`` is required
      (no further permissions).

      .. figure:: /images/system/core-workflows/examples/2_role-specific-approval-settings.png
         :alt: Sample workflow that restricts an approval attribute to specific roles
         :width: 90%

      .. tip::

         This workflow may work best in combination with a
         :doc:`trigger </manage/trigger>` but technically, this is not required.

         Select fields may be a better approach because they allow more
         values than just a simple ``true`` or ``false``.

      The result
         .. figure:: /images/system/core-workflows/examples/2_role-specific-approval-settingsl_result.gif
            :alt: Workflow fixes possible values of "Approved ?" to a specific selection depending on the users role
            :width: 90%

3. State dependent mandatory fields
      This workflow sets ``Category`` to mandatory if the agent wants to set the
      states ``closed`` or ``pending close`` to enforce categorization.

      .. figure:: /images/system/core-workflows/examples/3_state-dependent-mandatory-fields.png
         :alt: Sample workflow that sets fields to mandatory on specific states
         :width: 90%

      The result
         .. figure:: /images/system/core-workflows/examples/3_state-dependent-mandatory-fields_result.gif
            :alt: Workflow sets category field to mandatory upon choosing closed or pending close as state
            :width: 90%

Manual Ticket Handover Process
------------------------------

This example covers the handover of a ticket from one agent to another:

- When the ticket owner is modified, a new text field ("Handover") shows up
  for a comment
- This may only be visible when the owner is changed, therefore it has to
  be hidden in general
- The input in this handover text field is mandatory
- After submitting changes, the value of the handover field must be added as an
  note to the ticket (via trigger)

Hiding handover field
   .. figure:: /images/system/core-workflows/examples/example-handover-hide.png
      :alt: Hiding the handover field in core workflows
      :width: 90%

Showing handover field and setting it to mandatory
   .. figure:: /images/system/core-workflows/examples/example-handover-show.png
      :alt: Showing the handover field and set it as mandatory
      :width: 90%

Trigger writing handover input to a new article
   .. figure:: /images/system/core-workflows/examples/example-handover-trigger.png
      :alt: Write handover content to a new article
      :width: 90%

As a result, the ticket includes an article of the type note which includes
the predefined text and the handover comment.
