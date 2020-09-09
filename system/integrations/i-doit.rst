i-doit
======

`i-doit <https://www.i-doit.com/>`_ is an open-source
**configuration management database**—in other words,
a tool for keeping tabs on every single piece
of your physical and digital infrastructure,
from network equipment to virtual machines
on down to the faceplates on your rack shelves and more.

What’s that got to do with Zammad?
Well, if you used tickets to track issues with all that hardware,
you might start wishing there was a way they could talk to each other.

Zammad gives you two:

1. Add i-doit Links to Zammad Tickets
--------------------------------------

What users see
^^^^^^^^^^^^^^

.. figure:: /images/system/integrations/i-doit/ticket-pane-demo.gif
   :alt: i-doit integration in Zammad’s ticket pane
   :align: center

   The i-doit integration will appear under a new 🖨 tab in the ticket pane.

i-doit integration puts a new tab in Zammad’s ticket pane
where you can add links to existing i-doit devices
for easy reference.
(See our `user documentation <https://user-docs.zammad.org/en/latest/extras/i-doit-track-company-property.html>`_
to learn how it works in practice).

How to set it up
^^^^^^^^^^^^^^^^

.. note:: 🧩 **Requires i-doit’s**
   `API Add-on <https://www.i-doit.com/i-doit/add-ons/api-add-on/>`_.
   Use the following settings:

   Active
      Yes

   Enforce autentication by username and password
      No

To set it up, enable the integration in the Zammad admin panel
under **System > Integrations > i-doit**:

.. figure:: /images/system/integrations/i-doit/settings.png
   :alt: i-doit settings within the integration pages
   :align: center

API token*
   Found in the i-doit admin panel
   under **Interfaces / external data > JSON-RPC API > Common Settings**.

   .. figure:: /images/system/integrations/i-doit/api-configuration.png
      :alt: i-doit administration interface with API configuration
      :align: center
      :width: 80%

Endpoint*
   The root URL of your i-doit installation.

Client ID
   A unique name to identify Zammad within i-doit.

   (Zammad does not require you to enter a value here, but i-doit might!)

2. List / Create Zammad Tickets in i-doit
-----------------------------------------

What users see
^^^^^^^^^^^^^^

.. figure:: /images/system/integrations/i-doit/i-doit-demo.gif
   :alt: Zammad integration in i-doit’s device view
   :align: center

i-doit’s ticket system integration gives you a way to see
all the tickets for a given device without ever leaving i-doit.
(See our `user documentation <https://user-docs.zammad.org/en/latest/extras/i-doit-track-company-property.html>`_
to learn how it works in practice).

How to set it up
^^^^^^^^^^^^^^^^

Enable this integration in the i-doit admin panel
under **Interfaces / external data > Trouble Ticket System (TTS) > Configuration**:

.. figure:: /images/system/integrations/i-doit/trouble-ticket-system-configuration.png
   :alt: i-doit administration interface with TTS configuration
   :align: center
   :width: 80%

TTS-Type
   ``Zammad``

Username / Password
   Login credentials for a Zammad agent.

   .. note:: This agent must have **read permission**
      for all :doc:`groups </manage/groups>` that plan on using the i-doit integration.

      You may even wish to create a dedicated agent account just for this integration.
      (Otherwise, if the agent ever changes her password,
      you will have to remember to update it here.)

URL incl. protocol
   ``https://your.zammad.domain``
