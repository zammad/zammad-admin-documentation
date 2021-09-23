Prerequisites
=============

* A certificate *and* private key for your own organization

   (Use this to ✒️ **sign outgoing messages**
   and 🔓 **decrypt incoming messages**.)

* Certificates belonging your contacts, or their issuing certificate authority (CA)

   (Use these to ✅ **verify incoming message signatures**
   and 🔒 **encrypt outgoing messages**.)

.. note:: 🙋 **I’m new to S/MIME. Where can I get a certificate?**

   The easiest way to get certificates
   is to buy an annual subscription through a commercial CA, such as:

      * `Sectigo (formerly Comodo) <https://sectigo.com/signing-certificates/email-smime-certificate>`_
      * `Secorio <https://secorio.com/en/certificates/smime-email/>`_
      * `GlobalSign <https://shop.globalsign.com/en/secure-email>`_

   (Zammad is not affiliated with these CAs in any way.)

   You can also generate your own self-signed certificates,
   but the process is complicated
   and usually 🙅 **involves extra work for your contacts**.

   Bear in mind that 🤝 **S/MIME only works if the other party is using it, too.**

Limitations
-----------

Please note that Zammad will distrust senders by default.
This means that you're always required to provide certificate data, no matter
if for signing or encrypting.

This is by design and can't be adjusted.
