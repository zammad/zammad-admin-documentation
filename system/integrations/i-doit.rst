i-doit
======

`i-doit <https://www.i-doit.com/>`_ is an open-source
CMDB (configuration management database) tool which is capable of managing
information about your physical and digital IT infrastructure.
If you use tickets to track issues with your IT components, you may want
to connect them with your CMDB. With Zammad, you can do that in two ways!

1. Add i-doit Links to Zammad Tickets
-------------------------------------

What Users See
^^^^^^^^^^^^^^

.. figure:: /images/system/integrations/i-doit/ticket-pane-demo.gif
   :alt: i-doit integration in Zammad's ticket pane
   :align: center

   The i-doit integration will appear under a new 🖨 tab in the ticket pane.

i-doit integration puts a new tab in Zammad's ticket pane where you can add
links to existing i-doit devices for easy reference.
(See our
:user-docs:`user documentation </extras/i-doit-track-company-property.html>` to
learn how it works in practice).

How to Set it Up
^^^^^^^^^^^^^^^^

It requires i-doit's
`API Add-on <https://www.i-doit.com/i-doit/add-ons/api-add-on/>`_. Make sure to
have it properly set up. Use the following setting:

   * Active: ``Yes``
   * Enforce authentication by username and password: ``No``

To set it up, enable the integration in the Zammad admin panel
under *System > Integrations > i-doit*:

.. figure:: /images/system/integrations/i-doit/settings.png
   :alt: i-doit settings within the integration pages
   :align: center

Endpoint
   The root URL of your i-doit installation.

API token
   Found in the i-doit admin panel
   under *Interfaces / external data > JSON-RPC API > Common Settings*.

   .. figure:: /images/system/integrations/i-doit/api-configuration.png
      :alt: i-doit administration interface with API configuration
      :align: center
      :width: 80%

Client ID
   A unique name to identify Zammad within i-doit.

   (Zammad does not require you to enter a value here, but i-doit might!)

SSL verification
   Here you can decide if the certificate of your i-doit system has to be
   verified or not. In case you are using custom certificates, please have
   a look at :doc:`how to add them to Zammad </settings/security/ssl-certificates>`.

   .. include:: /includes/ssl-verification-warning.rst

2. List / Create Zammad Tickets in i-doit
-----------------------------------------

What Users See
^^^^^^^^^^^^^^

.. figure:: /images/system/integrations/i-doit/i-doit-demo.gif
   :alt: Zammad integration in i-doit's device view
   :align: center

i-doit's ticket system integration gives you a way to see
all the tickets for a given device without ever leaving i-doit.
(See our
:user-docs:`user documentation </extras/i-doit-track-company-property.html>` to
learn how it works in practice).

How to Set it Up
^^^^^^^^^^^^^^^^

Enable this integration in the i-doit admin panel under
*Interfaces / external data > Trouble Ticket System (TTS) > Configuration*:

.. figure:: /images/system/integrations/i-doit/trouble-ticket-system-configuration.png
   :alt: i-doit administration interface with TTS configuration
   :align: center
   :width: 80%

TTS-Type
   ``Zammad``

Username / Password
   Login credentials for a Zammad agent.

   This agent must have **read permission** for all
   :doc:`groups </manage/groups/index>` that plan on using the i-doit
   integration.

   You may even wish to create a dedicated agent account just for this
   integration (otherwise, if the agent ever changes her password,
   you will have to remember to update it here).

URL incl. protocol
   ``https://your.zammad.domain``
