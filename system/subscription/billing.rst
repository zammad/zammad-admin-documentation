Billing
=======

Within the billing tab you can control all billing relevant information
like invoices, billing address and the option to cancel your subscription.

Billing information
   All adjusted billing information below only affect future invoices.
   If your invoice was issued wrong, please contact `our sales team`_.

   .. _our sales team:
      https://zammad.com/en/company/contact

   Billing address
      Provide your company address here, make sure to include the companies name
      in case required. This address will be referenced on your invoice.

   VAT ID
      Provide your VAT ID here. If applicable your invoice will not contain
      german VAT. Please make sure to pay the VAT in your country as required.

   Billing Email Address
      Usually the instance owner (the person that registered the instance) will
      receive all emails including the invoices. In case you have your own
      billing department, you can provide their email address here.

      All billing relevant information will then be sent to this email address.

      .. hint::

         Invoices are sent as attachment (PDF) to this email address.

   Don't forget to press the *Submit* button after you changed above settings.

   .. figure:: /images/system/subscription/billing-information.png
      :alt: Screenshot showing options for billing information within the
            subscription menu

Payment history
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

Do you want to cancel your subscription?
   In case you no longer want to use Zammad's SaaS, you can cancel your
   subscription by using the red *Yes, please cancel my subscription* button.

   Your subscription will end the day after your trial or billing period ends.

   .. warning::

      We will remind you about your cancelled subscription several times up
      front. After the subscription ended all instance data will be removed.
      A restore *is not* possible after that point!

   .. figure:: /images/system/subscription/cancel-hosted-subscription.gif
      :alt: Screencast showing how to cancel a subscription

   .. hint:: **😖 Cancelled by accident?**

      You can always undo the cancellation via the
      *Yes, undo the cancellation of my subscription* button up to the last
      subscription day!

      .. figure:: /images/system/subscription/undo-cancellation.png
         :alt: Screenshot showing a red button to cancel the subscription
               cancellation
