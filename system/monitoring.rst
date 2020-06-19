Monitoring
**********

**Please note:** This is only available in self hosted instances, as we're monitoring hosted instances and fix problems.

On the monitoring page you can see the current health state of Zammad.
This can be useful if you for example have the feeling that you don't receive emails anymore, you can take a look here before logging onto your Server.

Besides the optical state of an event, you can also reset the access token for this module and get the monitoring URL for a monitoring system of your choice.

Example output to this can be:

Everything is OK (refer to image 2 for interface example)::

   {"healthy"=>true, "message"=>"success", "token"=>"2432XXXXXXXXXXXXXXXXXXXXXX1761"}

Zammad has issue (whatever nature, refer to image 2 for interface example)::

   {"healthy":false,"message":"Channel: Twitter::Account in key:{\"id\"=\XXXXXXXXXXXXXXXXX, \"screen_name\"=\u003e\"Name\", \"name\"=\u003e\"Somewhat name\"}; Can't use stream for channel (42): #\u003cJSON::ParserError: 765: unexpected token at 'The Site Streams and User Streams endpoints have been turned off. Please migrate to alternate APIs. See https://t.co/usss'\u003e","issues":["Channel: Twitter::Account in key:{\"id\"=\XXXXXXX, \"screen_name\"=\u003e\"Name\", \"name\"=\u003e\"Somename\"}; Can't use stream for channel (42): #\u003cJSON::ParserError: 765: unexpected token at 'The Site Streams and User Streams endpoints have been turned off. Please migrate to alternate APIs. See https://t.co/usss'\u003e"],"actions":[],"token":"OgitXXXXXXXXXXXXXXXXXXXXXXNxo4ptCoQ"}

.. image:: /images/system/monitoring/1.jpg
.. image:: /images/system/monitoring/2.jpg
