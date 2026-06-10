S/MIME
======

S/MIME is one method for secure email communication in Zammad (in addition to
:doc:`../pgp/index`). It is the most widely-supported method for secure email
communication and allows you to exchange **signed** and **encrypted** messages
with others.

Signing
   is proof that a message hasn't been tampered with or sent by an
   impersonator. In other words, it guarantees the message **integrity** and
   **authenticity**.

Encryption
   scrambles a message so that it can only be unscrambled by the intended
   recipient. In other words, it guarantees **privacy** and **data security**.

Once S/MIME has been enabled via the toggle at the top, ``Encrypt`` and ``Sign``
buttons will appear in the ticket detail view when creating an email-based
article. For more details about how S/MIME works on the agent side, read the
:user-docs:`secure email section </extras/secure-email.html>` in the user
documentation.

Prerequisites
-------------

- A certificate and private key for your own organization to sign outgoing
  messages and decrypt incoming messages.
- Certificates belonging to your contacts or their issuing certificate
  authority (CA) to verify incoming message signatures and encrypt outgoing
  messages.
- The usage of any expired (``Not After``) or not yet valid (``Not Before``)
  certificate is not allowed for outgoing emails.

.. note:: **Where to get a certificate?** The easiest way to get certificates
   is to buy an annual subscription through a commercial CA, such as:

   - `Sectigo (formerly Comodo) <https://sectigo.com/signing-certificates/email-smime-certificate>`_
   - `Secorio <https://secorio.com/en/certificates/smime-email/>`_
   - `GlobalSign <https://shop.globalsign.com/en/secure-email>`_

   You can also generate your own self-signed certificates, but the process is
   complicated and usually involves extra work for your contacts.
   Bear in mind that S/MIME only works if the other party is using it, too.

Limitations
~~~~~~~~~~~

Please note that Zammad will distrust senders by default. This means that you're
always required to provide certificate data, no matter if for signing or
encrypting. This is by design and can't be adjusted.

Handling of Certificates
------------------------

When adding certificates and keys, Zammad validates them based on the
``X509v3`` extensions.

Add Certificates and Keys
~~~~~~~~~~~~~~~~~~~~~~~~~

Add Certificate
   Import public-key certificates for both your own organization and your
   contacts.

   You can also add a bunch of certificates in one go by providing a single file
   with all relevant certificates.

   .. warning:: **ALWAYS verify certificates in-person or over the phone!**

      The whole point of signatures is to alert you when someone is trying to
      pretend to be someone they're not. Never accept a certificate from someone
      online without verifying it first.

   .. note:: **What about trusted certificate authorities?**

      In some cases (e.g. when dealing with large enterprises), you may be given
      a certificate for an entire CA, rather than a single contact. Add it here
      to trust *all* certificates issued by that CA.

      Commercial CAs can usually be verified online. Zammad does not include a
      list of built-in, trusted CAs.

Add Private Key
   Once you've added a public-key certificate, you can import its matching
   private key.

   Private keys are for **your own organization only**; never ask your contacts
   for their private keys.

   .. figure:: /images/system/integrations/smime/private-key-indicator.png
      :alt: S/MIME integration showing configured certificates and possible issues with Logging
      :scale: 50%
      :align: center

      A note is displayed on certificates with a matching private key (see line 2).

   .. note:: **Certificates and private keys must be uploaded separately.**

      If your certificate and private key are bundled together in the same file
      or PEM block, import it twice (once using each button).

      Please note that bulk imports of private keys are not possible.

Certificate Validation
~~~~~~~~~~~~~~~~~~~~~~

Client certificate
   The following attributes are required:

   - Subject Alternative Name (at least one email address has to be present)
   - Key Usage (``Digital Signature`` and/or ``Key Encipherment``)
   - Public key algorithm (either ``RSA`` or ``EC``)

   The Extended Key Usage attribute is optional. If the certificate provides
   the named attribute, then it must contain the value ``E-mail Protection``.
   Any usable email address has to be prefixed with ``email:`` or ``rfc822:``.
   The named public key algorithms are mandatory for private keys as well.

CA certificate
   In the case of an uploaded CA certificate, providing the value ``CA:TRUE``
   in the attribute **Basic Constraints**, the previously mentioned attributes
   are not verified.

Download Certificate Data
~~~~~~~~~~~~~~~~~~~~~~~~~

You can download the previously provided certificates and private keys at any
time from your Zammad instance. Please note that passphrase-protected private
keys stay protected. When you download them, you have to know the passphrase to
use them after downloading.

Default Behavior
----------------

By default, Zammad tries to send all outgoing emails **signed and encrypted**,
if possible. This behavior can be adjusted on a per-group basis. You can choose
to sign only, encrypt only, both, or neither:

.. figure:: /images/system/integrations/smime/default-behaviour-on-per-group-basis.png
   :alt: Zammad allowing to choose the default behavior on per group basis
   :scale: 80%
   :align: center

Agents can always override these settings for each email they send out.

Troubleshooting
---------------

All of the system's latest S/MIME activity is displayed in the **Recent Logs**
section. The logs contain the status and details of all emails (both incoming
and outgoing), that used signing/verification or encryption/decryption.
This log does **not** include emails sent by
:doc:`triggers </manage/trigger>` or :doc:`scheduler jobs </manage/scheduler>`.
For those, check your ``production.log``.

Common Issues
~~~~~~~~~~~~~

I received a signed/encrypted email before I set up S/MIME integration
   No problem. Once S/MIME has been enabled and the appropriate certificates
   have been added, agents will be prompted to retry verification/decryption on
   matching emails.

   .. figure:: /images/system/integrations/smime/troubleshooting-retry.png
      :alt: Screenshot of user prompt to retry decryption
      :scale: 70%
      :align: center

The ``Encrypt`` button is disabled
   - Have you added the recipient's certificate?
   - Are you sure the recipient's certificate is valid?
   - Have you checked your ``production.log`` for more details?

   .. warning:: If encryption doesn't work for outgoing email articles, it
      won't work in :doc:`triggers </manage/trigger>` or
      :doc:`scheduler jobs </manage/scheduler>` either.

The ``Sign`` button is disabled
   - Have you added **both the certificate and private key** for your organization?
   - Does the email address on the certificate match the email address of the
     agent/group composing the email?

Error: "Fingerprint already taken"
   - Are you sure you haven't added this certificate already?

Error: "invalid byte sequence in UTF-8"
   - Please ensure to provide PEM formatted certificate and keys.
   - Did you check if the provided file is a valid certificate or key?
