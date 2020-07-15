i-doit
======

The i-doit integration is a great way to extend Zammad with further asset related information. 
Zammad and i-doit can work together to provide you the most important information no matter of your interface. 

.. figure:: /images/system/integrations/i-doit/settings.png
   :alt: i-doit settings within the integration pages
   :align: center

Configuration
-------------

You can configure i-doit and Zammad in two stages:

   * i-doit asset assignment within Zammad to tickets
   * ticket listing and creation of Zammad tickets via i-doit

Enable i-doit asset linking to tickets
++++++++++++++++++++++++++++++++++++++

.. note:: For the following steps you need to ensure that your i-doit installation has the the API Add-on 
   installed and activated.

In order to get the i-doit API-Key, login as administrator of i-doit and navigate to "⚙ Administration" on 
the upper right. Within "Interfaces / external data" → "JSON-RPC API" → "Common Settings" i-doit will provide 
your API key. Please also ensure that the API functionality is activated and 
"Enforce authentication by username and password" is disabled.

.. figure:: /images/system/integrations/i-doit/api-configuration.png
   :alt: i-doit administration interface with API configuration
   :align: center
   :width: 80%

Copy & paste your API key to the API token field within Zammad. 
Provide the root URL to your i-doit installation for the endpoint field. 
The client ID can be choosen freely and acts as help to identify which system used the key. 

As soon as you activate the integration, your agents will see a printer icon on the right site. 
You can find more information on that topic within the 
`user documentation <https://user-docs.zammad.org/en/latest/extras/i-doit-assets-on-tickets.html>`_.

   .. note:: New i-doit instances require you to set the Client ID!

Enable listing and creation of Zammad tickets via i-doit
++++++++++++++++++++++++++++++++++++++++++++++++++++++++

You can also enable i-doit to provide device specific ticket lists. This will boost your agents possibilities 
greatly, because they can see what has been going on with that specific asset without leaving i-doit!

To enable this functionality, login to i-doit as administrator and navigate to "⚙ Administration" on 
the upper right. Within "Interfaces / external data" → "Trouble Ticket System (TTS)" → "Configuration" 
i-doit allows you to activate the function.

For TTS-Type select "Zammad" and "URL incl. protocol" will be the root url to your Zammad installation. 
Please note that the user you use for listing those tickets in i-doit technically requires at least read permission 
on all required groups assets may be used. 

   .. note:: You may want to use a service account for this, because other wise you'd have to ensure that the password 
      provided here is always correct.

You can find more information on the usuage of this functionality on our 
`user documentation <https://user-docs.zammad.org/en/latest/extras/i-doit-assets-on-tickets.html>`_.

.. figure:: /images/system/integrations/i-doit/trouble-ticket-system-configuration.png
   :alt: i-doit administration interface with TTS configuration
   :align: center
   :width: 80%