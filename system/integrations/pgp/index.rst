PGP
===

Introduction
------------

Pretty Good Privacy (PGP) is another method for secure email communication.
With PGP, you can exchange **signed** and **encrypted** messages with others.

Signing
   is a proof that a message hasn't been manipulated on its way.

   In other words, it guarantees message **integrity** and **authenticity**.

Encryption
   scrambles a message so that it can only be unscrambled by the intended
   recipient.

   In other words, it guarantees message **privacy** and **data security**.

.. figure:: /images/system/integrations/pgp/pgp_ticket_creation.png
   :alt: Screenshot of ticket creation with encrypt and sign buttons
   :align: center

   Once PGP has been enabled, 🔒 **Encrypt** and ✅ **Sign** buttons will
   appear in the ticket composer.

.. note:: **Sign button not visible?**

   Please note that the signing of emails is based on the outgoing email
   account. That means you have to choose a group with a sender email account,
   which has a private key assigned.

Handling of keys
----------------
To use the PGP function, you have to enable the integration (PGP) by switching
the toggle to *enabled*.

You can add keys by clicking the *add key* button. The keys can be imported
from a file or you can paste the content of the key in the text box.

.. note:: **Which keys do I have to import?**

   For **signing** *outgoing* emails, you have to import the private key of
   your Zammad email account.

   For **encrypting** *outgoing* emails, you have to import the public key of
   the customer's email account.

   For **verifying the signature** of signed *incoming* emails, you have to
   import the public key of the customer.

   For **decrypting** of encrypted *incoming* emails, you have to import the
   private key of your Zammad email account.

Import keys from a file
```````````````````````
You can import keys from a file in the section **Upload key**:

.. figure:: /images/system/integrations/pgp/import_key.png
   :alt: Screenshot of adding a key via file
   :align: center

**Supported file formats:** ASCII-armor as well as binary GPG format
(basically any GPG supported key format) is supported here.

Import keys by pasting the content
``````````````````````````````````
You can also paste the key's content in the section **paste key**:

.. figure:: /images/system/integrations/pgp/paste_key.png
   :alt: Screenshot of adding a key via pasting
   :align: center

**Supported format:** Please note that only ASCII-armor is supported here.

Deleting keys
`````````````
If you want to delete a specific key, you can do it by clicking on the menu in
the *actions* column and select **delete**:

.. figure:: /images/system/integrations/pgp/delete_key.png
   :alt: Screenshot of deleting a key
   :align: center


Downloading keys
````````````````
If you want to download your keys, you can do this as well via corresponding
action buttons. Depending on the key, you can choose wether you want to
download the private or the public key.


Default behavior
----------------
Here you can adjust on per group basis, if *sign* and *encryption* is on or off
by default. Please be aware, that agents can always override the setting for
each individual article.

.. figure:: /images/system/integrations/pgp/group_default.png
   :alt: Adjusting default behavior on per group basis
   :align: center


Recent logs
-----------
Here you can see the last actions regarding signing and encryption and if they
were succesful.


Troubleshooting
---------------

**Sign button is not visible, but keys are imported.**
   * Did you choose a group in the ticket?
   * Did you import a private key for the email adress, which is used for
     outgoing emails in the group?

**How to obtain keys?**
   You can create them yourself! There are some good tutorials on the web on
   how to create them. Providing keys to Zammad is a prerequisite to use the
   PGP feature.

**It says a passphrase is needed, but I haven't got one.**
   If the key is secured with a passphrase, you have to provide it for the
   import in Zammad. It is possible that keys may have an empty passphrase.
   However, this is *not* recommended.

**How do my customers get my new key?**
   You have to provide your **public** key in advance.
   Your customer also has to configure PGP in their email workflow and import
   your public key. The other way round, you have to get the public key of your
   customer and have to import it to Zammad.