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

This integration **does not** come with automatic trusted CAs, as Zammad can't predict which use base is valid to you.

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

How to work with the S/MIME integration?
----------------------------------------
