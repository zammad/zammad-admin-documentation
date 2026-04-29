Network
=======

.. include:: /settings/system/system-selfhosted.include.rst

.. note::

   The proxy settings can only be saved after successfully testing
   the proxy connection.

The proxy configuration is also possible via environment variables. Make sure
to also check the
:docs:`proxy section in the system documentation </appendix/proxy.html>` for
more information. Basically, you should use the GUI configuration for
connections from Zammad itself and environment variables to cover external
services and used gems.

Proxy Address
   Allows you to provide a proxy server if needed.
   This is relevant for network communication by Zammad.

   It **does not** affect the update process or Elasticsearch.

Username for proxy connection
   If your proxy server requires authentication, provide the username here.

Password for proxy connection
   If your proxy server requires authentication, provide the password here.

No proxy for the following hosts
   Exception list for hosts you can't or don't want to reach via
   proxy server. Supports wildcards (e.g. ``*.example.com``).

   Default: ``localhost,127.0.0.0,::1``

   .. hint:: In case you are using the default Docker Compose stack behind a
      proxy, make sure to add the Elasticsearch container to the exception list.
      The default container name is ``zammad-elasticsearch``.