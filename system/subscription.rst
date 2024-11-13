Subscription (SaaS)
===================

The subscription settings page allows you to configure your instances
package and number of agents required.

.. warning:: **🚧 Hosted environment specific 🚧**

   This setting section is only available for Hosted setups.
   If you're looking for on premise support contracts, please see the
   `Zammad pricing page <https://zammad.com/en/pricing#selfhosted>`_.

Plan
----

Here you can set up everything affecting your instance subscription functions
like number of agents and package.

On top of the page you can find a subscription summary. You'll find the number
of used and available (booked) agent seats there. By using the *see more* link
you can also expand an agent list to see the currently configured active agents.
This list *does not* count accounts with admin permissions only.

.. figure:: /images/system/subscription/active-agent-list.png
   :alt: Within subscription you can always see how many agents are still
         available to add and who uses the seats.
   :align: center

Learn more on how to manage your agents in general
:doc:`here </manage/users/index>`.


Plan
^^^^

This section gives you an overview of the available plans and their
functions / limits. If you require a more detailed table, check our
`detailed pricing table <https://zammad.com/en/pricing/table>`_ for more.

Your selection in this step will decide on the base agent price
and e.g. agent limits that might apply in the summary step.

The green *Selected* button will also tell you what plan you're currently in.

.. hint::

   Trial instances are running at Professional with 3 agents.
   The plan cannot be changed during the trial for technical reasons,
   if you require more agents for testing, please contact
   `our sales team <https://zammad.com/en/company/contact>`_ with a
   reason for the raise request.

.. figure:: /images/system/subscription/plan-selection.png
   :alt: Screenshot showing three available packages for a hosted Zammad
         instance

At the bottom of this block you can find a summary where you can adjust the
settings of the previous selected plan.

.. note::

   Note that upgrading (more agents, higher package) is always
   possible, however, downgrading will only happen when your
   billing period renews.

   Upgrading resets your billing period and existing credit will be
   deducted from the new total.

Billing cycle
   You can choose between either monthly or yearly billing.
   The price per agent will be cheaper if you decide for yearly billing.

   If you're still trying out things and are unsure of the right
   package for your instance, you may want to choose monthly first and
   then upgrade to yearly when you're sure.

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

Billing Information
^^^^^^^^^^^^^^^^^^^

You can control all billing relevant information like invoices and the billing
address.

All adjusted billing information below only affect future invoices.
If your invoice was issued wrong, please contact
`our sales team <https://zammad.com/en/company/contact>`_.

Billing address
   Provide your company address here, make sure to include the name of the
   company in case required. This address will be referenced on your invoice.

VAT ID
   Provide your VAT ID here. If applicable your invoice will not contain
   German VAT. Please make sure to pay the VAT in your country as required.

Billing Email Address
   Usually the instance owner (the person that registered the instance) will
   receive all emails including the invoices. In case you have your own
   billing department, you can provide their email address here.

   All billing relevant information will then be sent to this email address.

   Invoices are sent as attachment (PDF) to this email address.

Don't forget to press the *Update billing information* button after you changed
above settings.

.. figure:: /images/system/subscription/billing-information.png
   :alt: Screenshot showing options for billing information within the
         subscription menu

Payment Method
^^^^^^^^^^^^^^

You can pay via credit card or SEPA mandate.

Credit card
   Simply follow the dialogue by clicking *authorize credit card* and confirm
   -if required by your bank- your consent to Zammad using your card for
   the payments.

SEPA Direct Debit
   Provide the requested information of the bank account holder and update
   if you're ready. You'll then receive an email with the SEPA mandate.

Technically there's also the possibility to pay via invoice, however - this
method only applies to a fairly low number of instances. Please contact
`our sales team <https://zammad.com/en/company/contact>`_ for more
information.

Cancel Subscription
^^^^^^^^^^^^^^^^^^^

Do you want to cancel your subscription?
In case you no longer want to use Zammad's SaaS, you can cancel your
subscription by using the red *Yes, please cancel my subscription* button.

To cancel the subscription, enter the FQDN of your Zammad instance and provide
a reason for your cancellation.

Your subscription will end the day after your trial or billing period ends.

.. figure:: /images/system/subscription/cancel-hosted-subscription.png
   :alt: Screenshot showing subscription cancellation dialog
   :scale: 60%
   :align: center

.. warning::

   We will remind you about your cancelled subscription several times up
   front. After the subscription ended all instance data will be removed.
   A restore *is not* possible after that point!

.. hint:: **😖 Cancelled by accident?**

   You can always undo the cancellation via the
   *Yes, undo the cancellation of my subscription* button up to the last
   subscription day!

   .. figure:: /images/system/subscription/undo-cancellation.png
      :alt: Screenshot showing a red button to cancel the subscription
            cancellation

Payment History
---------------

The payment history will display a history of all paid invoices.
At this point you can also download these in case you need them again.

.. note::

   You will only find *paid* invoices here.
   Invoices that are to be billed are not available before the payment
   is completed.

Date
   Date of the invoice creation.

Amount
   Invoice total including VAT if applicable.

Description
   Contains contract period (monthly or yearly) and hosted plan for the
   subscription period in question.

Payment method / Service period
   Used bank account or credit card as well as the subscription period the
   invoice is about.

   .. note::

      It might happen that the invoice date and subscription period differ.
      This is nothing to worry about, the subscription periods will be
      accounted later on.

Receipt
   Use the arrow to download the invoice in question. You can download all
   available invoices any time you need to here!

.. figure:: /images/system/subscription/payment-history.png
   :alt: Screenshot showing payment history of a hosted instance


FAQ
---

I set up a trial account but am missing functions to test
   The trial instance is running within the professional package
   allowing up to three agents.

Can I change package within the trial?
   No. As soon as the package is changed the subscription begins.

What happens to my trial instance after the trial period ended?
   Your instance will automatically be canceled for you.
   Please see *What happens to my instance after it has been canceled?*
   for more.

What happens to my instance after it has been canceled?
   That depends slightly on your instance state:

   Trial instance
      If you're still on trial, we will ice your instance and remind you once
      again about your instance. We then will wait some days and remove your
      instance from our system. This is the last time we will inform you by
      Email.

   Paid instance
      If you're a paying customer and canceled your subscription, the instance
      removal will take place the day after your last subscription day.

Can removed instances be restored?
   No. Once your instance has been removed, a restoration is not possible.
