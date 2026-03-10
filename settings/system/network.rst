Network
=======

.. include:: /settings/system/system-selfhosted.include.rst

.. note::

   The proxy settings can only be saved after successfully testing
   the proxy connection.

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
   proxy server.

   Default: ``localhost,127.0.0.0,::1``

   .. hint:: In case you are using the default Docker Compose stack behind a
      proxy, make sure to add the Elasticsearch container to the exception list.
      The default container name is ``zammad-elasticsearch``.