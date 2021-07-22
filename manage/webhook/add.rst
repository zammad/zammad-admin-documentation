Adding webhooks
===============

Webhooks are defined globally.
This allows you to use one specific endpoint on several triggers or schedulers.
   
   .. warning:: **🦻 Zammad webhooks are specific**

      Keep in mind that the remote site has to be able to understand the
      webhook Zammad is sending! Simply throwing Zammad payloads at webhook
      endpoint may not have the desired result!

   .. figure:: /images/manage/webhook/webhook-add.png
      :alt: Modal showing webhook configuration
      :align: center
      :width: 90%

You can configure the following information to webhooks:

   Name (mandatory)
      This name will be displayed within trigger and scheduler selections.

   Endpoint (mandatory)
      Webhook endpoint Zammad sends its payload to.

      .. note::

         Zammad ignores basic authentication parameters.

   HMAC SHA1 Signature Token
      If set all sent webhooks contain a `x-hub-signature` header allowing
      the remote site to verify the request.

      .. note:: **🔐 Security note**

         This *does not* encrypt the payload. Use HTTPs connections to
         secure the communication. It contains a HMAC signature of the body
         of the webhook request

         `Learn more about HUB-Signatures
         <https://www.w3.org/TR/websub/#authenticated-content-distribution>`_

   SSL verify
      Defaults to ``yes`` - if you're using unsecure self signed certificates
      set this option to ``no``.

   Note
      If required you can leave useful information for other Zammad admins
      to understand the webhook in question better.

   Active
      If set to ``inactive`` you can no longer select the webhook within
      trigger or scheduler actions.

      .. warning::

         Setting webhooks to inactive that are used by triggers or schedulers
         will not run. If triggers or schedulers have other actions configured
         as well they'll still be executed.
