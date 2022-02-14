Sipgate
=======

.. note:: In order to use this feature, please go to the Feature Store in your sipgate account and activate ``sipgate.io``.
   This feature is available for all account types of sipgate, the store option might differ in name and API calls.

Knowing who's calling is quite important, if you want to bring your support to the next level!
Our integration for sipgate enables you to see whos calling who.
If you have a customer that wants to get connected to Emmily, you can even check if she's free in the caller log.

For configuration, please go to Settings -> Integrations -> sipgate in the admin panel.

Get your incoming and outgoing URL of your Zammad instance::

   Incoming: https://zammad.your.tld/api/v1/sipgate/in
   Outgoing: https://zammad.your.tld/api/v1/sipgate/out

You now need to visit the Console_ website from sipgate. Go to Webhooks -> URLs and enter your incoming and outgoing URLs there.
Further below you can also choose what extensions or groups should appear in your Zammad instance later.

.. _Console: https://console.sipgate.com/webhooks/urls

.. image:: /images/system/integrations/sipgate/1.jpg

Now you're all set to activate the sipgate integration within Zammad. If you want to, you can inbound and outbound caller IDs to block.
This ensures that you can concentrate on your work instead of answering unwanted calls all the time. Setting the default Caller ID is optional
and makes sense if you have several numbers. This ensures that your group number for e.g. support is always displayed so your agent don't get called back directly.

.. image:: /images/system/integrations/sipgate/2.jpg

You can now switch to your caller log. You'll see missed, in- and outgoing calls here. Pretty easy, right?

.. image:: /images/system/integrations/sipgate/3.jpg

Debug Log
---------

In case something doesn't work as expected or you're just curious, Zammad also offers a log of the last API calls on the integration page.
If you click on the request, a detailed view will open showing you the exact request.

.. image:: /images/system/integrations/sipgate/4.jpg
