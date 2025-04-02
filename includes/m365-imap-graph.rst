.. :orhpan:

.. hint::
   What is the difference between the
   :doc:`Graph-API- </channels/microsoft365-graph/index>` and
   :doc:`IMAP-based M365 channel </channels/microsoft365/index>`?

   The Graph-API variant has some advantages over the IMAP-based channel:

   - Shared mailboxes are implemented in a better way. By using them, you can
     save some license costs.
   - The selection of an inbox folder is implemented with a tree-select field in
     Zammad. So you can choose a folder from the fetched folder list, which is
     much less error-prone.
   - It is the future-proof way of connecting to your M365 environment.
   - It is more secure and scalable and offers a unified endpoint.

   So, if you are in doubt which one to use, we recommend using the Graph
   channel.