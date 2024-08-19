Monitoring
==========

.. note:: This function is only available in self hosted instances. If you
   use Zammad in our cloud, we are monitoring the system on our own and take
   steps to fix potential problems directly.

General
-------

On the monitoring page, you can see the current health state of Zammad under
"*Current Status*" at the bottom. This can be useful if you want to have a look
if everything is up and running.
As an example, you could have a look in the monitoring when you assume that
some emails aren't processed from Zammad.

.. note:: **Can't receive an email and the monitoring response is "healthy"?**

   Zammad will just inform you about unprocessable emails. This is not the case
   for oversized emails. You can adjust the maximum email size in
   :doc:`../channels/email/settings`.

Monitoring API
--------------

Beside the indication in the monitoring page, you can also use an external
monitoring tool to monitor Zammad's health. To request the health of Zammad,
you need to provide the API key (token) to the external monitoring tool.
You can copy the token from the "*Current Token*" field as well as the whole API
endpoint of your system ("*Health Check*" field), in which the API token is
already included.

.. figure:: /images/system/monitoring/monitoring-token-health-check.png
   :alt: Screenshot showing Current Token and Health Check
   :scale: 100%

   Screenshot showing Token and Health Check

In addition to that, you can reset the auto-generated token to make sure
that already configured monitoring systems won't work anymore. So, please use
this "*Reset*" button only if you know what you do!

Example Output
--------------

:No issues found:

   **Indicator in Zammad**:

   .. figure:: /images/system/monitoring/monitoring-no-issues-indicator.png
      :alt: Screenshot showing monitoring with no issues
      :scale: 70%

   **API response**::

      {"healthy"=>true, "message"=>"success"}

:Issues were found:

   **Indicator in Zammad**:

   .. figure:: /images/system/monitoring/monitoring-issues-indicator.png
      :alt: Screenshot showing monitoring with issues
      :scale: 70%

   **API response**::

      {"healthy":false,"message":"Channel: Twitter::Account in key:{\"id\"=\XXXXXXXXXXXXXXXXX, \"screen_name\"=\u003e\"Name\", \"name\"=\u003e\"Somewhat name\"}; Can't use stream for channel (42): #\u003cJSON::ParserError: 765: unexpected token at 'The Site Streams and User Streams endpoints have been turned off. Please migrate to alternate APIs. See https://t.co/usss'\u003e","issues":["Channel: Twitter::Account in key:{\"id\"=\XXXXXXX, \"screen_name\"=\u003e\"Name\", \"name\"=\u003e\"Somename\"}; Can't use stream for channel (42): #\u003cJSON::ParserError: 765: unexpected token at 'The Site Streams and User Streams endpoints have been turned off. Please migrate to alternate APIs. See https://t.co/usss'\u003e"],"actions":[]}
