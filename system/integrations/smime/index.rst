S/MIME
======

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

.. toctree::
   :titlesonly:
   :caption: How does it work?

   prerequisites
   manage-certificates
   troubleshooting

Limitation
----------

Please note that Zammad by default distrust senders.
This means that you're always required to provide certificate data, no matter
if for signing or encrypting.

This is by design and can't be adjusted.

Default Behavior
----------------

The ticket composer will set all outgoing messages
to **signed and encrypted** by default
(assuming the required certificates exist).

These defaults can be modified on a per-group basis:

.. figure:: /images/system/integrations/smime/default-behaviour-on-per-group-basis.png
   :alt: Zammad allowing to choose the default behaviour on per group basis
   :scale: 50%
   :align: center

Of course, agents can always manually change these settings
on each email they send out.

Usage
-----

For more details on how S/MIME integration works in practice, see the
`user docs <https://user-docs.zammad.org/en/latest/extras/secure-email.html>`_.
