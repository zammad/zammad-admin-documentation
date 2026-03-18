Subscription (SaaS)
===================

The subscription settings page allows you to configure everything around your
subscription. It is only visible for hosted SaaS customers. The
permission ``admin.package`` is required to access this page, which is only
available in SaaS environments.

Plan
----

Here you can see and adjust everything affecting your instance subscription
like the plan, the number of agents and and the billing cycle. You can also
find a summary of your current subscription at the top of the page. By using
the *see more* link you can expand an agent list to see the currently configured
active agents. This list *does not* count accounts with admin permissions only.
Learn more on how to manage your agents in general
:doc:`here </manage/users/index>`.

Plan
^^^^

This section gives you an overview of the available plans and their
functions / limits and to choose another plan. If you require a
more detailed table, check our
`pricing table <https://zammad.com/en/pricing/table>`_ for more information.
Your selection (green **Selected** button) in this step will decide on the base
agent price
and e.g. agent limits that might apply in the summary step.

.. hint::

   Trial instances are running on a *Professional v2* plan with 3 agents.
   The plan cannot be changed during the trial period for technical reasons.
   If you require more agents for testing, please contact
   `our sales team <https://zammad.com/en/company/contact>`_ and tell them
   what you want to do.

.. figure:: /images/system/subscription/plan-selection.png
   :alt: Screenshot showing three available packages for a hosted Zammad
         instance

At the bottom of this block you can find a summary where you can adjust the
settings of the previous selected plan.

.. note::

   Note that upgrading (more agents, higher package) is always possible.
   However, downgrading will only happen when your billing period renews.
   Upgrading resets your billing period and existing credit will be
   deducted from the new total.

Billing cycle
   You can choose between monthly or yearly billing period.
   The price per agent will be cheaper if you decide for yearly billing.
   If you're still trying out things and are unsure of the right
   package for your instance, you may want to choose monthly first and
   then upgrade to yearly when you're sure.

Plan: (Starter|Professional|Plus) V2 - Agents
   Choose the number of agents you require for your instance.
   Keep in mind that some plans have agent limits.
   Decreasing the number of agents to less than currently configured is not
   possible.

Total
   This will be the net total you're going to be billed.

By using the **Update subscription** button, the instance package is getting
adjusted immediately. If you didn't provide a payment method yet, Zammad
will request you to provide it at this point.

.. warning::

   In case you're still within the trial period, this means that the
   trial will be over immediately!
   Down- or upgrading during the trial period *is not* possible.

Zammad AI - API Call Credits
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you want to use Zammad's AI features, you can use Zammad AI as your
:doc:`AI provider </ai/provider>`. Initially, you have 500 AI calls to test the
feature for free. Re-charge them manually or automatically when 90 % of the
calls are used. One AI action like an AI agent run or an AI ticket summary uses
one AI call. To apply any kind of re-charge, a valid payment method is required.

Usage
   Shows the available API calls for Zammad AI and how much are already used up.

Re-Charge Settings
   - Enable or disable a notification when 80 % of AI calls are used.
   - Configure an automatic re-charge when 90 % of AI calls are used. Enter an
     amount between 400 and 500,000 AI calls for automatic re-charge and confirm
     with the **Update Re-charge settings** button. The costs per call and the
     sum based on your input are displayed next to the field.

One-Time Charge Settings
   Add an amount of AI calls for a one time charge. Enter an amount between 400
   and 500,000 AI calls for the one-time charge and confirm
   with the **One-Time Charge Settings** button. The costs per call and the
   sum based on your input are displayed next to the field.

Billing Information
^^^^^^^^^^^^^^^^^^^

You can control all billing relevant information like invoices and the billing
address. All adjusted billing information below only affect future invoices.
If your invoice was issued wrong, please contact
`our sales team <https://zammad.com/en/company/contact>`_.

Billing address
   Provide your company's address here, make sure to include the name of the
   company in case required. This address will be used in your invoice.

VAT ID
   Provide your VAT ID here. If applicable, your invoice will not contain
   German VAT. Please make sure to pay the VAT in your country as required.

Billing Email Address
   Usually the instance owner (the person who registered the instance) will
   receive all emails including the invoices. In case you have your own
   billing department, you can provide their email address here.

   All billing relevant information will then be sent to this email address.
   Invoices are sent as attachment (PDF) to this email address.

Don't forget to press the **Update billing information** button after you changed
above settings.

.. figure:: /images/system/subscription/billing-information.png
   :alt: Screenshot showing options for billing information within the
         subscription menu

Payment Method
^^^^^^^^^^^^^^

You can pay via credit card or SEPA mandate.

Credit card
   Simply follow the dialogue by clicking **authorize credit card** and confirm
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
subscription by using the red **Yes, please cancel my subscription** button.
Enter the FQDN of your Zammad instance and provide a reason for your
cancellation. Your subscription will end the day after your trial or billing
period ends.

.. figure:: /images/system/subscription/cancel-hosted-subscription.png
   :alt: Screenshot showing subscription cancellation dialog
   :scale: 60%
   :align: center

.. warning::

   We will remind you about your cancelled subscription several times before the
   subscription period ends. After the subscription ended, all instance data
   will be removed. A restore *is not* possible after that point!

.. hint:: **😖 Cancelled by accident?**

   You can always undo the cancellation via the
   **Yes, undo the cancellation of my subscription** button up to the last
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
   The trial instance is running on a professional plan allowing up to three
   agents.

Can I change the plan within the trial?
   No. As soon as the plan is changed, the subscription begins.

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
      email.

   Paid instance
      If you're a paying customer and canceled your subscription, the instance
      removal will take place the day after your last subscription day.

Can removed instances be restored?
   No. Once your instance has been removed, a restoration is not possible.
