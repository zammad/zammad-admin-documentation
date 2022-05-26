Plan
====

Subscription
   On the top of the subscription summary you'll find the number of used and
   available (booked) agent seats. By using the *see more* link you can also
   expand a agent list to see the currently configured, active agents.

      .. tip::

         You can learn more on how to manage your agents within
         :doc:`user management </manage/users/index>`.

         This list *does not* count accounts with admin permissions only.

   .. figure:: /images/system/subscription/active-agent-list.gif
      :alt: Within subscription you can always see how many agents are still
            available to add and who uses the seats.

Plan
   This section gives you an overview of the available plans and their
   functions / limits. If you require a more detailed table, check our
   `detailed pricing table`_ for more.

   Your selection in this step will decide on the base agent price
   and e.g. agent limits that might apply in the summary  step.

   The green *Selected* button will also tell you what plan you're currently in.

      .. hint::

         Trial instances are running at Professional with 3 agents.
         The plan cannot be changed during the trial for technical reasons,
         if you require more agents for testing, please contact
         `our sales team`_ with a reason for the raise request.

   .. figure:: /images/system/subscription/plan-selection.png
      :alt: Screenshot showing three available packages for a hosted Zammad
            instance

.. _detailed pricing table:
   https://zammad.com/en/pricing/table

Summary
   In this section you can adjust the settings of the previous selected plan.

   Billing cycle
      You can choose between either monthly or yearly billing.
      The price per agents will be cheaper if you decide for yearly billing.

         .. tip::

            If you're still trying out things and e.g. are unsure of the to
            right package for your instance, you may want to choose monthly
            first and then upgrade to yearly when you're sure.

         .. note::

            Note that upgrading (more agents, higher package) is always
            possible, however, downgrading will only happen when your
            billing period renews.

            Upgrading resets your billing period and existing credit will be
            deducted from the new total.

   Plan: (Starter|Professional|Plus) - Agents
      Choose the number of agents you require for your instance.

      Keep in mind that some packages may have agent limits.
      Depending on the previous chosen package, you won't be able to exceed
      specific agent numbers. Also note that setting less agents than currently
      configured is not possible.

   Total
      This will be the net total you're going to be billed.

   By using the *Update subscription* button, the instance package will be
   adjusted immediately. If you didn't provide a payment method yet, Zammad
   will request you to provide one at this point.  

      .. warning::

         In case you're still within the trial period, this means that the
         trial will be over immediately!

         Down- or upgrading during the trial period *is not* possible.

   .. figure:: /images/system/subscription/payment-summary.png
      :alt: Screenshot showing payment options and a pricing summary

Payment method
   You can pay via credit card or SEPA mandate.

   Credit card
      Simply follow the dialogue by clicking *authorize* and confirm
      -if required by your bank- your consent to Zammad using your card for
      the payments.

   SEPA
      Provide the requested information of the bank account holder and update
      if you're ready. You'll then receive an email with the SEPA mandate.

   Technically there's also the possibility to pay via invoice, however - this
   method only applies to fairly low number of instances. Please contact
   `our sales team`_ for more information.

.. _our sales team:
   https://zammad.com/en/company/contact
