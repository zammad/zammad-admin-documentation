Placetel CTI
============

.. toctree::
   :hidden:

   provider-configurations/placetel

.. include:: /system/integrations/cti/includes/introduction.include.rst

Requirements
------------

Please provide the following requirements:

   * You need an administrative Placetel account for your organization.
   * Your Zammad instance must be allowed to communicate to external services.
   * Placetel must be able to reach your Zammad instance.

:doc:`provider-configurations/placetel`
   Learn how to configure Placetel to enable Zammad and Placetel to communicate
   with each other.

.. _placetel_settings:

Available settings
------------------

.. hint::

   Click the button next to the ``Placetel`` heading to activate or
   deactivate this function.

.. include:: /system/integrations/cti/includes/important-dont-forget-saving.include.rst

Endpoint Settings
   The here listed endpoint settings are relevant for the
   :doc:`integration configuration with Placetel <provider-configurations/placetel>`.

   Endpoint
      This endpoint will be required for the Zammad integration within the
      Placetel web interface.

   API Token
      You'll receive this token within the ``Web API`` menu.
      Make sure to copy this value, it's only shown once!

Call Settings
   Inbound
      .. include:: /system/integrations/cti/includes/inbound-calls.include.rst

      ..
         yes above and below looks odd but is required to allow including and
         page specific content. :-/

Other Settings
   .. include:: /system/integrations/cti/includes/other-settings-intro.include.rst

   .. include:: /system/integrations/cti/includes/records-caller-log.include.rst

Phone Extension to Agent Mapping
   .. include:: /system/integrations/cti/includes/extenion-to-agent-mapping.include.rst

   .. figure:: /images/system/integrations/cti/placetel/phone-extension-to-agent-mapping.png
      :alt: Screenshot showing sample user mappings in between Placetel and Zammad

   .. hint::

      You can find your agents Placetel username combination required within
      ⚙️ PBX → VoIP destinations. Within the "Advanced settings" section
      you're looking for "SIP user name" and "SIP server".

      Combine these two like so: ``<sip-user-name>@<sip-server>``.

      .. figure:: /images/system/integrations/cti/placetel/voip-credentials.png
         :alt: Sample VoIP credentials for a Placetel user

.. include:: /system/integrations/cti/includes/recent-logs.include.rst

.. include:: /system/integrations/cti/includes/troubleshooting.include.rst
