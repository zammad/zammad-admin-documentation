i-doit
======

`i-doit <https://www.i-doit.com/>`_ is an open-source
CMDB (configuration management database). It manages information about your
physical and digital IT infrastructure. Linking it to Zammad adds context on
both sides: agents see which infrastructure a ticket is about, and people
working in i-doit see what has been reported about an object.

The integration has two independent parts, each configured on its own:

- The ticket sidebar in Zammad shows the i-doit objects linked to a ticket.
  You configure this in Zammad's admin settings.
- An object's page in i-doit shows the Zammad tickets linked to it. You
  configure this in i-doit.

You can use one part without the other. Zammad stores only the object IDs on
the ticket and reads the object data from i-doit each time the panel is shown.
A renamed object therefore appears under its new name and an object deleted in
i-doit drops off the list. Customers never see the panel, and an agent needs
update access to a ticket to change its links. How agents and i-doit users
work with both parts is described in the
:user-docs:`user documentation </extras/i-doit-track-company-property.html>`.

Configure Object Linking in Zammad
----------------------------------

The settings are under *System > Integrations > i-doit* and require the
``admin.integration`` permission. Use the switch at the top of the page to
enable the panel. Switching it off hides the panel but keeps the links stored
on existing tickets.

.. figure:: /images/system/integrations/i-doit/settings.png
   :alt: i-doit integration settings in Zammad's admin settings
   :align: center

Endpoint
   The root URL of your i-doit installation, including the protocol, e.g.
   ``https://idoit.example.com``. Zammad adds ``/src/jsonrpc.php`` to it.

API token
   The key from i-doit's JSON-RPC API settings.

Client ID
   Zammad stores this value but does not send it to i-doit, so it has no
   effect. Leave it empty.

SSL verification
   Decides whether Zammad verifies the certificate of your i-doit installation.
   Default value: ``yes``. If you use a custom certificate, add it to Zammad as
   described in :doc:`SSL certificates
   </settings/security/ssl-certificates>`.

   .. include:: /includes/ssl-verification-warning.rst

Zammad reads the objects through i-doit's JSON-RPC API, which ships as an
add-on and is not part of the i-doit Docker images. If the add-on is missing,
i-doit's API answers ``Api Module is not available.`` and Zammad cannot read
any objects. Activate the API and make sure that it does not enforce
authentication by username and password, so the API key alone is sufficient.
Which objects the key can read is defined by the rights of its user in i-doit.
Zammad itself offers every object type that i-doit returns.

Clicking ``Save`` verifies the connection by requesting i-doit's object types.
If i-doit doesn't answer, Zammad shows the reason instead of saving. The
**Recent Logs** table below the settings lists the requests Zammad sent to
i-doit, which helps to track down a failed connection.

Configure Ticket Linking in i-doit
----------------------------------

i-doit's trouble ticket system integration (TTS) shows the Zammad tickets that
are linked to an object on the object's page, so you can see what has been
reported about it without leaving i-doit. The list holds up to 10 tickets, and
each row links to the ticket in Zammad.

In i-doit, the settings are under *Administration > Import and interfaces >
Trouble Ticket System (TTS)*.

TTS-Type
   ``Zammad``

Username and Password
   Login credentials of a Zammad agent. i-doit searches Zammad's API with this
   account, and Zammad returns only the tickets this agent may read. The agent
   therefore needs read access to the groups whose tickets should show up on
   i-doit objects.

   Consider a dedicated agent for this purpose: if the password of the account
   changes, you have to update it here.

URL incl. protocol
   ``https://your.zammad.domain``

TLS-Certificate
   A certificate file from i-doit's file management that i-doit uses to verify
   Zammad's certificate. Leave it empty unless your Zammad installation uses a
   certificate that i-doit does not trust.

Request Tracker queues
   Belongs to the Request Tracker integration. i-doit shows the field for every
   TTS-Type, so leave it empty.
