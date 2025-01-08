Common errors
=============

Here you can find some common errors in M365 context. Also have a look at
the general :doc:`M365 documentation </channels/microsoft365/index>` for the
configuration.

Incorrect Client ID
-------------------

JUST AN EXAMPLE, replace with error messages from app > assets > javascript > app > controllers > _channel > microsoft_graph...

**Error message:** AADSTS00016: Application with identifier
'xxxxxxxx' was not found in the directory 'MSFT'. This can happen if the
application has not been installed by the administrator of the tenant or
consented to by any user in the tenant. You may have sent your authentication
request to the wrong tenant.

.. figure:: /images/channels/microsoft365/errors/wrong-id.png
  :alt: Error message
  :scale: 90%
  :align: center

In this case, please compare whether the client ID created in Zammad
matches that in Azure for the Azure App.

The Client ID can be found in Zammad under
Settings > Channels > Microsoft 365 > App Configuration.
See :doc:`here </channels/microsoft365/accounts>` how to find the client
ID in Azure and where to copy it to in Zammad.
