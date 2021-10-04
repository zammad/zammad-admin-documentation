Learn by example
================

This page provides some of the ideas we had for Core Workflows.
Of course you can build much more complex workflows.

.. hint::

   If they don’t make sense to you, don’t worry—just skip ahead to
   :doc:`how-do-they-work` to learn about all the options in detail,
   then come back here to see them in action.

All following workflows have the same base configurations.
The workflow may not use them all.

   * Groups
      * Sales
      * Support
      * 2nd Level
   * Attributes
      * Category (Tree-Select, not mandatory, agents only)
      * Approved (Boolean, not mandatory, not shown, ``false`` as default)
      * Operating System (Text, not mandatory, not shown)
      * Software used (Select, not mandatory, not shown)

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

      .. figure:: /images/system/core-workflows/examples/2_role-specific-approval-settingsl.png
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
