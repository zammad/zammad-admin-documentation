S/MIME
======

.. note:: S/MIME integration has been introduced with Zammad 3.4.

What the S/MIME integration can do for you
------------------------------------------

The S/MIME integration allows you to ecrypt/decrypt and sign/verify mails. 
This documentation assumes that you already have S/MIME certificates, generation of these certificates is out of 
scope.

You can import certificates by

   * importing a complete ca (public certificate) to verify e.g. internal signed mails,
   * importing a public certificate and private key to sign outgoing mails for the mail address configured within 
     the certificate or
   * importing a public certificate of a specific user you've been provided to verify the mail content.

This integration **does not** come with automatic trusted CAs, as Zammad can't predict which user base is valid to you.

Where to get S/MIME certificates from?
--------------------------------------

You can get S/MIME certificates from different sources by

   * self-signing certificates with your own CA or
   * obtain (buy) public available certificates.

The biggest downside on self signed certificates is that your recipient can't verify your authenticity without 
importing *your* CA certificate. 

There are just a few providers that provide S/MIME certificates. Examples would be (not affiated):

   * Secerio
   * Comodo

How to configure the S/MIME integration?
----------------------------------------

.. note:: You can't add certificate and private key in one step. If you have a combined file containing both, just upload it 
   within certificate and private key context. Zammad will automatically extract the correct part it needs.

To configure and activate Zammads S/MIME integration, just navigate to Integrations → S/MIME. 
Here you can activate the S/MIME functionality itself. If activated, this will add new options to :doc:`/manage/trigger` and :doc:`/manage/scheduler` options. 
Also, your agents will now see a "sign" and "encrypt" button above article creation and within new ticket dialogues.

Zammad will display all configured certificates within the table. This allows you to see if an customer email address 
is already known, when the certificate became valid and when it will expire. 

If you added a private key, Zammad will provide a short information by adding "Including private key." below the certificate 
the private key belongs to.

Public certificate and private key are needed together for your sending channel. This allows you to sign and encrypt [#]_ emails within Zammad. The public certificate of a sender is required for Zammad to check the validy of the signature or decrypt a received message.

.. [#] Encryption of emails requires you to provide the recipients public certificate. You can only encrypt emails for *one recipient*.

.. figure:: /images/system/smime/smime-configuration.png
   :alt: S/MIME integration showing configured certificates and possible issues with Logging
   :align: center

Providing certificates and private keys
+++++++++++++++++++++++++++++++++++++++

.. note:: A private key is only required for Zammads email addresses. You'll never have to ask customers
   for their private key.

You can add new certificates and private keys via **Add Certificate** and **Add Private Key**. 
In order to add private keys for certificates, the certificate has to be available to Zammad beforehand. 

You can provide keys and certificates either by pasting the information in PEM format into the text field or 
by directly uploading the file itself.

.. tip:: You can provide a certificate and private key combined PEM. Zammad will recognize the context and 
   what part to take from the PEM.

.. note:: 🤓 **One more note on certificates and private keys**

   Certificate
      In order to validate signed emails from your customers, you'll need to add their certificate to Zammad. 
      If your customer is rather large or you're an internal IT department, you can also add a CA certificate to 
      verify all messages that have been signed with an certificate issued by that CA. 🙌

   Private keys
      Zammads needs private keys for signing outgoing mails only. 
      This means you'll only require the keys you (should) already have for the email accounts that you're 
      using with Zammad.

.. figure:: /images/system/smime/adding-certificate-and-private-key.gif
   :alt: Dialogue to add new certificates or private keys
   :align: center

.. hint:: Imported a certificate after receiving a mail?
   No problem, if the integration has been enabled, Zammad allows your 
   agent to re-check on failed verifications or decryptions!

To sign or encrypt by default or not to
+++++++++++++++++++++++++++++++++++++++

.. hint:: By default Zammad will always encrypt and sign an outgoing mail. Your agent has to disable it manually. 
   This is if suitable certificates are found. (`Addressing issues`_ might help you to understand scopes better)

In some situations you may not wish to encrypt or sign emails by default. 
Instead Zammad allows you to choose the default behavior on a per group basis.

   .. note:: Your agent can always enable signing or encrypting if technically possible.

.. figure:: /images/system/smime/default-behaviour-on-per-group-basis.png
   :alt: Zammad allowing to choose the default behaviour on per group basis
   :align: center

How to work with the S/MIME integration?
----------------------------------------

Working with S/MIME from agent point of view is out of scope of this documentation. 
However, you can find further information about this topic `here <https://user-docs.zammad.org/en/latest/advanced/security-and-encryption.html>`_.

Addressing issues
-----------------

This section can help you if you encounter issues while using S/MIME within Zammad.

Checking for issues with the integration
++++++++++++++++++++++++++++++++++++++++

Zammad comes with a log that shows if there were issues with in- or outgoing emails. 
This covers signing, signing verification, encryption and decryption.

.. figure:: /images/system/smime/smime-log.png
   :alt: Sample entries of in- and outgoing S/MIME related emails.
   :align: center

.. hint:: This log does not cover :doc:`/manage/trigger` or :doc:`/manage/scheduler` based emails!
   For those mails you'll need to have a look in your ``production.log`` for hints what went wrong.

Common Issues you might encounter
+++++++++++++++++++++++++++++++++

There are some cases that we can cover to at least help you into the right direction. 
If you're encountering an issue with the integration, the following list might help you.

I can see "Encrypt" and "Sign", however, can't click or activate these buttons.
   This might have three reasons:
   
   1. The mail address configured within the group your agent tries to sign the mail does not match the mail address 
      that's configured within your certificate.

         .. note:: This also affects :doc:`/manage/trigger` and :doc:`/manage/scheduler` if they're supposed to encrypt emails!
   2. While you've provided a certificate, it's missing the private key. Check the certificate list and search for the 
      string "Including private key.".
   3. You provided an invalid certificate that's not suitable for S/MIME.

I can activate "Sign", but can't use "Encrypt"?!
   In order to encrypt emails, you'll need the public certificate of your recipient. If Zammad doesn't know the 
   recipients certificate, it can't allow you to encrypt the email in question.

When adding a new certificate, I get the error `Fingerprint already taken`??
   This exception occurs if you already added a certificate with the same fingerprint. Ensure it's not already 
   present in your installation.

I did add a S/MIME certificate for a specific mail address but still can't encrypt it!
   Please have a look into your ``production.log`` which might hold further information about this issue. 
   If it doesn't, please ensure you're using a correct certificate. (attributes may be missing which can cause this issue)