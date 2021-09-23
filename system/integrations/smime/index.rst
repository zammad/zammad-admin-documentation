S/MIME
======

.. toctree::
   :hidden:

   prerequisites
   manage-certificates
   troubleshooting

S/MIME is the most widely-supported method for secure email communication.
With S/MIME, you can exchange **signed** and **encrypted** messages with others.

Signing
   is proof that a message hasn’t been tampered with or sent by an impersonator.

   In other words, it guarantees a message’s **integrity** and **authenticity**.

Encryption
   scrambles a message so that it can only be unscrambled by the intended recipient.

   In other words, it guarantees **privacy** and **data security**.

.. figure:: /images/system/integrations/smime/usage-demo.gif
   :alt: Screencast demo of S/MIME features for both new tickets and replies
   :align: center

   Once S/MIME has been enabled, 🔒 **Encrypt** and ✅ **Sign** buttons will appear in the ticket composer.

:doc:`🔪 Prerequisites <prerequisites>`
   New to S/MIME? This section helps you to find certificate providers and
   points out Limitations.

:doc:`📝 Manage Certificates <manage-certificates>`
   Add and download certificates; configure group default behaviors.

:doc:`😦 Troubleshooting <troubleshooting>`
   Took a wrong turn? About recent logs and common issues.

Usage
-----

For more details on how S/MIME integration works in practice, see the
`user docs <https://user-docs.zammad.org/en/latest/extras/secure-email.html>`_.
