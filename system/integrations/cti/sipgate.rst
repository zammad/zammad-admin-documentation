Sipgate (sipgate.io)
====================

.. toctree::
   :hidden:

   provider-configurations/sipgate

.. include:: /system/integrations/cti/includes/introduction.include.rst

Requirements
------------

Please provide the following requirements:

   * You need an administrative Sipgate account for your organization.
   * Zammad requires a ``sipgate.io`` addon from the feature store.
      * Please note that API calls are not free with Sipgate.
        Rates may apply and differ from account to account.
   * Your Zammad instance must be allowed to communicate to external services.
   * Sipgate must be able to reach your Zammad instance.

:doc:`provider-configurations/sipgate`
   Learn how to configure Sipgate to enable Zammad and Sipgate to communicate
   with each other.

.. _sipgate_settings:

Available settings
------------------

.. hint::

   Click the button next to the ``sipgate.io`` heading to activate or
   deactivate this function.

Endpoint Settings
   Below endpoint settings affect the
   :doc:`sipgate.io configuration <provider-configurations/sipgate>`.

   Inbound
      This endpoint is required for incoming call hooks.

   Outbound
      This endpoint is required for outgoing call hooks.

.. include:: /system/integrations/cti/includes/important-dont-forget-saving.include.rst

Call Settings
   Inbound
      .. include:: /system/integrations/cti/includes/inbound-calls.include.rst

      ..
         yes above and below looks odd but is required to allow including and
         page specific content. :-/

   .. include:: /system/integrations/cti/includes/outbound-calls.include.rst

Other Settings
   .. include:: /system/integrations/cti/includes/other-settings-intro.include.rst

   .. include:: /system/integrations/cti/includes/default-caller-id.include.rst

   .. include:: /system/integrations/cti/includes/records-caller-log.include.rst

Phone Extension to Agent Mapping
   .. include:: /system/integrations/cti/includes/extenion-to-agent-mapping.include.rst

   .. figure:: /images/system/integrations/cti/sipgate/phone-extension-to-agent-mapping.png
      :alt: Screenshot showing sample user mappings in between Sipgate and Zammad

   .. hint::

      You can find your agent's Sipgate username within
      ``Accountverwaltung → Benutzer``. You're looking for the SIP-ID.

      .. figure:: /images/system/integrations/cti/sipgate/voip-credentials.png
         :alt: Sample VoIP credentials for a Sipgate user

      .. note::

         Users with several devices also have several SIP-IDs.

.. include:: /system/integrations/cti/includes/recent-logs.include.rst
