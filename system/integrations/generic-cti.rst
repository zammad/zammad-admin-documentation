CTI (generic)
=============

Zammad offers phone functionality for users with access to a CTI (computer telephony integration) system (available since version 2.6).


Using the CTI integration enables you to greet customers by name,  get their tickets up on the screen with a single click. Or, identify missed calls at a glance, and return calls right from within Zammad.
Manufacturers of telephone systems or developers can use this interface to connect their telephone system to Zammad.

What do I need to get started?
------------------------------

Zammad requires the following information to support the agent:

- individual call events (e.g., call incoming/answered/ended)
- caller ID data

To use the new CTI interface, your CTI system must transmit this information (and only this information) to Zammad via HTTP.

What can it do for me?
----------------------

***Inbound calls***
- Caller ID display: Open a caller’s customer profile with just one click
- Intelligent caller ID search: Automatically scans tickets for caller ID data (e.g., in email signatures) if customer account data is missing
- Caller overview: See a caller’s entire ticket history, or instantly create a new ticket
- Call journal: See all calls at a glance, along with their status (e.g., which ones require a call back?)
- Agent overview: See who’s currently on a call
- Selective call blocking [1]_
- Do-not-disturb mode [1]_


***Outbound calls***

- Direct dialing: Initiate calls from within Zammad [1]_
- Dynamic caller ID: Set your caller ID based on, e.g., the destination country of the call*

.. [1] requires PBX/telephone system support

.. image:: /images/system/integrations/generic-cti/1.jpg

.. image:: /images/system/integrations/generic-cti/2.jpg

More information can be found on our `CTI API intro <https://docs.zammad.org/en/latest/cti-api-intro.html>`_.
