SLA Example
-----------

This page contains some possible example configurations for a SLA we could think
of. SLAs in general are very flexible and powerful, below doesn't have to be
your standard!

.. hint::

   If they don't make sense to you, don't worry - just skip ahead to
   :doc:`how-do-they-work` to learn about all the options in detail,
   then come back here to see them in action.

All following SLAs have the same base configurations. They may not use all of
them in all samples.

   * **Groups**
      * Sales
      * Support
      * 2nd Level
   * **Attributes**
      * User / VIP (default, Boolean)
      * Organization / Support-Contract
        (Single selection field, ``None`` as default value)
   * **Calendar setting**
      The calendar is set to 8 hours per day, from Monday to Friday.

**1. Support contract levels and VIP customers**

   This approach uses a combination of contract levels (where any level except
   for none causes SLA escalations) and VIP customers that can have further
   priority.

   The configuration of these SLAs ensures that either fitting support contract
   levels trigger or the VIP state is being used. They're not overlapping.

   .. tabs::

      .. tab:: VIP customers

         SLA configuration checking if the customer is a VIP customer.

         .. figure:: /images/manage/slas/sample1-vip-customer.png
            :width: 60%
            :alt: Screenshot showing SLA configuration for VIP customers.

      .. tab:: Support contract levels

         The settings of each support contract level SLA basically are the same.
         The only setting that differs is the support contract level of each
         configuration and the SLA timings.

         For this reason we're showing the bronze level configuration as an
         example only.

         .. figure:: /images/manage/slas/sample1-sc-bronze.png
            :width: 60%
            :alt: Screenshot showing SLA configuration for support contract
                  level bronze.

   The result
      This approach causes the following SLA timings for each level:

      If the customer has no VIP state and the organization has a support level
         Bronze
            | First response time: ``6 hours``
            | Update time (for an agent to respond): ``6 hours``
            | Solution time: ``40 hours``

         Silver
            | First response time: ``4 hours``
            | Update time (for an agent to respond): ``4 hours``
            | Solution time: ``32 hours``

         Gold
            | First response time: ``2 hour``
            | Update time (for an agent to respond): ``2 hour``
            | Solution time: ``24 hours``

         None
            This setting has no SLA configuration. Tickets will not escalate.

      If the customer has the VIP state
         | First response time: ``1 hour``
         | Update time (for an agent to respond): ``1 hour``
         | Solution time: ``16 hours``

**2. VIP customers**

   .. tabs::

      .. tab:: non VIP customers

         SLA configuration checking if the customer is not a VIP customer.

         .. figure:: /images/manage/slas/sample2-no-vip-customer.png
            :width: 60%
            :alt: Screenshot showing SLA configuration for non-VIP customers.

      .. tab:: VIP customers

         SLA configuration checking if the customer is a VIP customer.

         .. figure:: /images/manage/slas/sample2-vip-customer.png
            :width: 60%
            :alt: Screenshot showing SLA configuration for VIP customers.

   The result
      If the customer has the VIP state
         | First response time: ``2 hour``
         | Update time (for an agent to respond): ``6 hours``
         | Solution time: ``16 hours``

      If the customer has no VIP state
         | First response time: ``8 hours``
         | Update time (for an agent to respond): ``16 hours``
         | Solution time: ``40 hours``
