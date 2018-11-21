placetel CTI
============

Starting with Zammad 2.8, we're supporting the CTI for placetel. For configuration, please go to the Admin-Settings -> Settings -> Integrations => Placetel.

Limitations
-----------

Please note, that it's not possible to log outbound calls.
This is due to a limitation of the placetel-API.


Getting needed information from placetel
----------------------------------------

Before starting with Zammad, you'll need to login to your placetel Account, go to Administration -> Settings.
Here you'll find the tab "External APIs" (open it). Activate "activate Call Control-/Notify-API" and enter the URL of the Zammad-API-Endpoint (can be found within the placetel-Integration page).
Further below you can tick the phone numbers you want Zammad to get notified on.

.. image :: /images/system/placetel-1.jpg

Now change to the API-tab and grab your API-Token. If you don't have an API-Token yet, you can simply create one.

.. image :: /images/system/placetel-2.jpg

Activating placetel-Integration within Zammad
---------------------------------------------

Enabling the Zammad placetel integration is really easy. Simply paste your API-Token into the text field, activate the integration and save your changes.
You're all set up! If needed, you can add Inbound caller IDs to a ignore list. If you do this, Zammad will not show any notifications from those numbers.

Further below on the same page you'll have a log of recent notifications that came to the API, in case you need to debug something.

.. image :: /images/system/placetel-3.jpg

As soon as you start calling (in and out) on activated numbers, you'll see them in your Caller log with their current state.

.. image :: /images/system/placetel-4.jpg