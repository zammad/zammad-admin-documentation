Setup Placetel connection for Zammad
====================================

.. note::

   This configuration step requires a *full* administrative Placetel account.
   You may receive forbidden error messages with Placetel in case your
   permissions are not high enough.

The following actions can be configured via the `Placetel web interface`_.

.. _Placetel web interface: https://web.placetel.de

Step 1: Activate Zammad integration
   Within Integrations, scroll down to Partner integrations and select
   Zammad.

   You can alternatively filter by "Ticket Systems" to reduce
   the number of entries on the page. You'll still want to look for
   Partner integrations. 🤓

   Within the Zammad integration now press "Activate".
   A new tab ``API`` becomes available - open this tab.

   Now tick "Enable Call Control / Notify API" and paste the Placetel
   endpoint from your Zammad instance into the field "URL of your API endpoint".
   Save to apply the settings

   .. figure:: /images/system/integrations/cti/placetel/step1-activate-zammad-integration.gif
      :alt: Screencast showing how to activate the Zammad integration

Step 2: Generate API Token for Placetel
   Go back to the integrations page and scroll down to "Web API".
   Generate a new API token by using the "Create a new API token" button.

      .. note::

         If you already generated a token either use your existing token or
         reset it by using above mentioned button. Placetel will ask you to
         conform this reset.

         Please keep in mind that existing API scripts may no longer work
         due to token resets!

         Copy the provided API token and insert it into the "API Token" field
         within Zammads Placetel integration.

         Apply your changes by using the "Save" button on the bottom of the
         Placetel integration page and activate the Placetel integration.

   .. figure:: /images/system/integrations/cti/placetel/step2-create-api-token-for-zammad.gif
      :alt: Screencast showing how to retrieve an API token from Placetel for Zammad

Step 3: Restrict the numbers to notify on
   Having a lot of numbers that shouldn't be used for notifying Zammad?
   Within the the Integrations page of the Placetel web interface, go to
   "Notify API".

   Lower on the page Placetel allows you to restrict the numbers to notify on.
   You'll find this within the "External routing API" part.

   .. figure:: /images/system/integrations/cti/placetel/external-routing-api.png
      :alt: Screenshot showing a sample selection of phone numbers to use for the Placetels notify API

   .. hint::

      This menu point also provides a API request log from Placetel view.
      Just open "Recent responses of your API endpoint" to learn more.

      If you want to see Zammads perspective, use the "Recent Logs" part from
      within the Placetel integration page.

      .. figure:: /images/system/integrations/cti/placetel/recent-responses-of-your-api-endpoint.png
         :alt: Screenshot showing sample log entries for Placetels API calls to Zammad

Step 4 (optional): Further configurations for Placetel
   If needed, you can now configure Zammads Placetel integration in more detail.
   You can learn more about your options here:
   :ref:`Placetel integration settings <placetel_settings>`.
