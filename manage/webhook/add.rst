Adding Webhooks
===============

Webhooks are defined globally. This allows you to use one specific endpoint for
several triggers or schedulers.

.. warning:: **🦻 Default Zammad webhook payloads are specific**

   Keep in mind that the remote site has to be able to understand the default
   webhook payload Zammad is sending. Simply throwing the default payload at a
   webhook endpoint may not have the desired result!

   See `Custom Payload`_ for a way to customize webhook payloads.

To add a new regular webhook, use the big green **New Webhook** button.

.. figure:: /images/manage/webhook/webhook-add.png
   :alt: Modal showing webhook configuration
   :align: center
   :width: 90%

For a pre-defined webhook, click on the arrow button to the right and choose
**Pre-defined Webhook** from the dropdown menu.

.. figure:: /images/manage/webhook/webhook-new-buttons.png
   :alt: New Pre-defined Webhook button
   :align: center
   :width: 90%

Next, select the pre-defined webhook you want and click **Next**.

.. figure:: /images/manage/webhook/webhook-new-pre-defined-webhook.png
   :alt: New pre-defined webhook modal
   :align: center
   :width: 90%

.. warning:: **⚠️  Adding a new Webhook is not enough**

   You must in addition, add a :doc:`Trigger </manage/trigger>` or
   :doc:`Scheduler </manage/scheduler>` that references the Webhook!

You can configure the following information for webhooks:

   Name (mandatory)
      This name will be displayed within trigger and scheduler selections.

   Endpoint (mandatory)
      Webhook endpoint Zammad sends its payload to.

      .. note::

         Zammad ignores basic authentication parameters. See below how to
         configure :ref:`username <HTTP Basic Authentication Username>` and
         :ref:`password <HTTP Basic Authentication Password>` via separate
         fields.

   HMAC SHA1 Signature Token
      If set all sent webhooks contain a `x-hub-signature` header allowing
      the remote site to verify the request.

      .. note:: **🔐 Security note**

         This *does not* encrypt the payload. Use HTTPS connections to
         secure the communication. It contains a HMAC signature of the body
         of the webhook request

         `Learn more about HUB-Signatures
         <https://www.w3.org/TR/websub/#authenticated-content-distribution>`_

   SSL Verification
      Defaults to ``yes`` - if you're using unsecure self signed certificates
      set this option to ``no``.

   _`HTTP Basic Authentication Username`
      Set this if the endpoint requires HTTP basic authentication credentials.

   _`HTTP Basic Authentication Password`
      Set this if the endpoint requires HTTP basic authentication credentials.

   Pre-defined Webhook
      .. hint:: This field is only available for pre-defined webhooks!

      This field is always disabled in the UI and serves only as a reference
      to a pre-defined webhook. It is not possible to change it for existing
      webhooks.

      Depending on the pre-defined webhook type, additional fields may be
      rendered below this one. They can be used for additional customization of
      the webhook behavior.

      .. figure:: /images/manage/webhook/webhook-pre-defined-webhook-fields.png
         :alt: Additional pre-defined webhook fields

   _`Custom Payload`
      Defaults to off - webhook will always send :ref:`webhook-payload-default`
      to the target endpoint.

      When switched on, a code editor will be shown below, where you can
      configure custom payload for your webhook in JSON format. To insert
      supported :doc:`/system/variables` use ``::`` or ``#{``
      shortcuts for autocomplete.

      .. figure:: /images/manage/webhook/webhook-custom-payload.gif
         :alt: Custom payload code editor

      .. warning::

         Custom payload must be valid JSON syntax! Code editor will inform you
         via automated hints if there is an issue with the code. Also, it will
         not be possible to save an invalid JSON structure.

      .. hint::
         Pre-defined webhooks will always provide an initial custom payload,
         specific for the associated service.

   Note
      If required you can leave useful information for other Zammad admins
      to understand the webhook in question better.

   Active
      If set to ``inactive`` you can no longer select the webhook within
      trigger or scheduler actions.

      .. warning::

         Inactive webhooks used by triggers or schedulers will not be fired. If
         triggers or schedulers have other actions configured as well they will
         still be executed.
