S/MIME
======

New in version 3.4, Zammad supports S/MIME for high-security email communication. 

.. figure:: /images/system/integrations/smime/usage-demo.gif
   :alt: Screencast demo of S/MIME features for both new tickets and replies
   :align: center

   Once S/MIME has been enabled, 🔒 **Encrypt** and ✅ **Sign** buttons will appear in the ticket composer.

What is S/MIME?
---------------

S/MIME is the most widely-supported method for secure email communication.
With S/MIME, you can exchange **signed** and **encrypted** messages with others.

Signing
   is proof that a message hasn’t been tampered with or sent by an impersonator.

   In other words, it guarantees a message’s **integrity** and **authenticity**.

Encryption
   scrambles a message so that it can only be unscrambled by the intended recipient.

   In other words, it guarantees **privacy** and **data security**.

Prerequisites
-------------

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

Setup
-----

S/MIME is **disabled by default**. Enable it to start adding certificates.

.. figure:: /images/system/integrations/smime/adding-certificate-and-private-key.gif
   :alt: Dialogue to add new certificates or private keys
   :align: center

   Manage certificates in the Admin Panel under **System > Integrations > S/MIME**.
   Certificates may be pasted in as plain text or uploaded from a file.

Add Certificate
   Import public-key certificates for both your own organization and your contacts.

   .. warning:: 🕵️ **ALWAYS verify certificates in-person or over the phone!**

      The whole point of signatures is to alert you
      when someone is trying to pretend to be someone they’re not.
      Never accept a certificate from someone online without verifying it first.

   .. note:: 📇 **What about trusted certificate authorities?**

      In some cases (*e.g.,* when dealing with large enterprises),
      you may be given a certificate for an entire CA,
      rather than a single contact.
      Add it here to trust *all* certificates issued by that CA.

      Commercial CAs can usually be verified online.
      Zammad does not include a list of built-in, trusted CAs.

Add Private Key
   Once you’ve added a public-key certificate,
   you can import its matching private key.

   Private keys are for **your own organization only**;
   never ask your contacts for their private keys.

   .. figure:: /images/system/integrations/smime/private-key-indicator.png
      :alt: S/MIME integration showing configured certificates and possible issues with Logging
      :scale: 50%
      :align: center

      A note is displayed on certificates with a matching private key (see line 2).

   .. note:: 📤 **Certificates and private keys must be uploaded separately.**

      If your certificate and private key are bundled together
      in the same file or PEM block, import it twice (once using each button).

Default Behavior
^^^^^^^^^^^^^^^^

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

Recent Logs
^^^^^^^^^^^

All of the system’s latest S/MIME activity
is displayed in the **Recent Logs** section.

.. figure:: /images/system/integrations/smime/log.gif
   :alt: Sample entries of in- and outgoing S/MIME related emails.
   :align: center

   Logs report the status and details of all mail, both incoming and outgoing,
   that used signing/verification or encryption/decryption.

.. note:: This log does **not** include email
   sent by :doc:`triggers </manage/trigger>`
   or the :doc:`scheduler </manage/scheduler>`.
   For those, check your ``production.log``.

Usage
-----

For more details on how S/MIME integration works in practice, see the
`user docs <https://user-docs.zammad.org/en/latest/extras/secure-email.html>`_.

Troubleshooting
---------------

I received a signed/encrypted email before I set up S/MIME integration
   No problem.
   Once S/MIME has been enabled and the appropriate certificates have been added,
   agents will be prompted to retry verification/decryption on matching emails.

   .. figure:: /images/system/integrations/smime/troubleshooting-retry.png
      :alt: Screenshot of user prompt to retry decryption
      :scale: 50%
      :align: center

The 🔒 **Encrypt** button is disabled
   * Have you added the recipient’s certificate?
   * Are you sure the recipient’s certificate is valid?
   * Have you checked your ``production.log`` for more details?

   .. warning:: If encryption doesn’t work in the composer, it won’t work in
      :doc:`triggers </manage/trigger>` or the :doc:`scheduler </manage/scheduler>` either!

The ✅ **Sign** button is disabled
   * Have you added **both the certificate and private key** for your organization?
   * Does the email address on the certificate match the email address of the agent/group composing the email?

Error: “Fingerprint already taken”
   * Are you sure you haven’t added this certificate already?

Error: “❌ invalid byte sequence in UTF-8”
   * Please ensure to provide PEM formatted certificate and keys.
   * Did you check if the provided file is a valid certificate or key?
