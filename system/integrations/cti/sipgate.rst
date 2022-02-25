Sipgate (sipgate.io)
====================

.. toctree::
   :hidden:

   provider-configurations/sipgate

.. include:: /system/integrations/cti/includes/introduction.include.rst

Requirements
------------

Please provide the following requirements:

   * You need an administrative sipgate account for your organization
   * Zammad requires a ``sipgate.io`` addon from the feature store
      * Please note that API calls are not free with sipgate.
        Rates may apply and differ from account to account.
   * Your Zammad instance must be allowed to communicate to external services
   * Sipgate must be able to reach your Zammad instance

:doc:`provider-configurations/sipgate`
   Learn how to configure sipgate to enable Zammad and sipgate to communicate
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

   .. figure:: /images/system/integrations/cti/placetel/phone-extension-to-agent-mapping.png
      :alt: Screenshot showing sample user mappings in between placetel and Zammad

   .. hint::

      You can find your agents placetel username combination required within
      ⚙️ PBX → VoIP destinations. Within the "Advanced settings" section
      you're looking for "SIP user name" and "SIP server".

      Combine these two like so: ``<sip-user-name>@<sip-server>``.

      .. figure:: /images/system/integrations/cti/placetel/voip-credentials.png
         :alt: Sample VoIP credentials for a placetel user

.. include:: /system/integrations/cti/includes/recent-logs.include.rst
