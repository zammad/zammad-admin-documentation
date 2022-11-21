Setup Sipgate connection for Zammad
===================================

.. note::

   | Sipgate has no english web interface which is why this documentation page
     is mixing up languages badly.
   | Please also note that the availability of API addons highly depends on your
     package trier. Usage of sipgate.io packages *is not free*, please check
     their `pricing page`_ before!

.. _pricing page:
   https://www.sipgate.io/pricing

Step 1: Book sipgate.io package
   .. hint:: Skip to step 2 if you already have the package booked!

   Login to an administrative Sipgate account and navigate to
   ``Accountverwaltung``. You'll see several different options depending on
   your booked packages. Select ``Verträge & Produkte`` to continue.

   Scroll down to the section ``Zusätzliche Produkte buchen`` and look for
   ``sipgate.io`` - select this product by using the
   ``Produkte anzeigen``-Button.

   On the next page select either one of the ``sipgate.io`` packages or
   ``Push-API Package Free``. Follow the dialogue by booking the addon.
   You'll be returned to your contract overview and now should see the selected
   addon in your list.

      .. note::

         The availability for ``sipgate.io`` packages and their levels highly
         depends on the overall account type and product you've booked with
         Sipgate.

   .. figure:: /images/system/integrations/cti/sipgate/step1-book-sipgateIO-addon.gif
      :alt: Screencast showing the process on how to book the required sipgate.io addon

Step 2: Configure webhook for Zammad
   Within your ``Accountverwaltung`` navicate to your product ``sipgate.io``.
   In the newly opened tab, switch from "Clients" to "Webhooks" and paste
   the endpoint URLs from your Zammad instance like so:

      * Inbound endpoint to "Incoming"
      * Outbound endpoint to "Outgoing"

   .. note::

      Ensure to select at least one call group or phoneline within "Sources".
      Other wise Sipgate will not indicate any incoming or outgoing calls
      to Zammad.

   .. figure:: /images/system/integrations/cti/sipgate/step2-configure-sipgate-webhooks.gif
      :alt: Screencast showing how to add Zammad's endpoint URLs to sipgate.ios webhook configuration

Step 3: Restrict the numbers to notify on
   Having a lot of numbers that shouldn't be used for notifying Zammad?
   Within the Webhooks → URLs section of Sipgate you can select which *sources*
   Sipgate should notify Zammad about in- and outgoing calls.

   Use either specific phone lines or use the option
   "Use for all phonelines and groups" to notify Zammad about all existing
   lines of your Sipgate account.

   .. figure:: /images/system/integrations/cti/sipgate/restrict-notifying-numbers.png
      :alt: Screenshot showing a sample selection of phone numbers to use for the Sipgates webhooks API

   .. hint::

      This section also allows you to enable a Debug log.

      .. figure:: /images/system/integrations/cti/sipgate/enable-debug-log-sipgate.png
         :alt: Screenshot showing an enabled Debug log option

      After enabling you can use the Debug log section to see all sent webhook
      calls to Zammad. You'll also can see the response.

      .. figure:: /images/system/integrations/cti/sipgate/debug-log-details-sipgate.png
         :alt: Screenshot showing sample log entries for Sipgates webhook calls to Zammad

Step 4 (optional): Further configurations for Sipgate
   If needed, you can now configure Zammad's Sipgate integration in more detail.
   You can learn more about your options here:
   :ref:`Sipgate integration settings <sipgate_settings>`.
