Prerequisites
=============

* A certificate *and* private key for your own organization

   (Use this to ✒️ **sign outgoing messages**
   and 🔓 **decrypt incoming messages**.)

* Certificates belonging your contacts, or their issuing certificate authority (CA)

   (Use these to ✅ **verify incoming message signatures**
   and 🔒 **encrypt outgoing messages**.)

.. note:: 🙋 **I'm new to S/MIME. Where can I get a certificate?**

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

Certificate and private key checks on upload
--------------------------------------------

The certificate and public key validation is based on the ``X509v3``
extensions. 

Uploading a *client certificate*?
   The following attributes are required then:
    * Subject Alternative Name (at least one email address has to be present)
    * Key Usage (``Digital Signature`` and/or ``Key Encipherment``)
    * Public key algorithm (either ``RSA`` or ``EC``) 

   The Extended Key Usage attribute is optional. If the certificate provides
   the named attribute, than it must contain the value ``E-mail Protection``.

   Please note that any usable email adress has to be prefixed with ``email:``
   or ``rfc822:``.

   The named public key algorithms are mandatory for private keys as well.

Uploading a *CA certificate*?
   In the case of an uploaded CA certificate, providing the value ``CA:TRUE``
   in the attribute *Basic Contstraints*, the previously mentioned attributes
   are not verified.

In general, the usage of any expired (``Not After``) or 
not yet valid (``Not Before``) certificate is denied for outgoing emails.

.. code-block::
   :caption: Example certificate:

      ...
            Validity
                  Not Before: Aug  1 14:20:28 2023 GMT
                  Not After : Jul 31 14:20:28 2024 GMT
      ...
            X509v3 extensions:
                  X509v3 Basic Constraints:
                     CA:FALSE
                  X509v3 Key Usage:
                     Digital Signature, Non Repudiation, Key Encipherment
                  X509v3 Subject Key Identifier:
                     74:17:9D:7D:87:C4:1B:C9:7D:04:DD:37:63:C8:22:69:CA:55:FF:46
                  X509v3 Authority Key Identifier:
                     C2:A7:00:D8:F0:24:BF:E5:6F:57:CF:AB:4A:66:F8:61:78:FF:EF:28
                  X509v3 Subject Alternative Name:
                     email:alice@acme.corp
                  X509v3 Extended Key Usage:
                     E-mail Protection
      ...

Limitations
-----------

Please note that Zammad will distrust senders by default.
This means that you're always required to provide certificate data, no matter
if for signing or encrypting.

This is by design and can't be adjusted.
