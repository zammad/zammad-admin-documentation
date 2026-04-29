Network
=======

.. include:: /settings/system/system-selfhosted.include.rst

This page covers the proxy configuration in Zammad via GUI. As an alternative,
the proxy configuration is also possible via environment variables. You can find
more information about that in the
:docs:`proxy section of the system documentation </appendix/proxy.html>`.

.. csv-table:: Proxy configuration comparison
   :header: "", "GUI configuration", "Environment variable"
   :widths: 40, 30, 30

   "Host OS access required",                   "No",  "Yes"
   "Automatically excluded loopback addresses", "Yes", "No"
   "Configuration check",                       "Yes", "Manually via test script"
   "Exceptions (see note below)",               "Yes", "No"

.. note:: The following features/services are not affected by the GUI proxy
   configuration:

   - WhatsApp
   - Massenversand
   - Zendesk Migrator
   - Elasticsearch plugin installation (ES < 8)
   - Zammad update process

   If you use one of these features/services and want to route their traffic
   through a proxy, you need to provide the proxy configuration via environment
   variables.

Find the individual settings you can configure below. Be aware that the proxy
settings can only be saved after successfully testing proxy connection. To do
so, click the ``Test Connection`` button after providing the required
information. Zammad then shows you if the test was successful or not. If the
test was successful, make sure to click the ``Submit`` button to save the
configuration.

Proxy Address
   Allows you to provide a proxy server if needed.
   This is relevant for network communication by Zammad.

   It **does not** affect the update process or Elasticsearch.

Username for proxy connection
   If your proxy server requires authentication, provide the username here.

Password for proxy connection
   If your proxy server requires authentication, provide the password of the
   user here.

No proxy for the following hosts
   Exception list for hosts you can't or don't want to reach via proxy server.
   It supports wildcards (e.g. ``*.example.com``). Connections to loopback
   addresses are always excepted when configuring the proxy via UI.

   .. hint:: In case you are using the default Docker Compose stack behind a
      proxy, make sure to add the Elasticsearch container to the exception list.
      The default container name is ``zammad-elasticsearch``.