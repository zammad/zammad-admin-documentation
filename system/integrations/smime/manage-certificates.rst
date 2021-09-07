Manage Certificates
===================

S/MIME is **disabled by default**. Enable it to start adding certificates.

.. figure:: /images/system/integrations/smime/adding-certificate-and-private-key.gif
   :alt: Dialogue to add new certificates or private keys
   :align: center

   Manage certificates in the Admin Panel under **System > Integrations > S/MIME**.
   Certificates may be pasted in as plain text or uploaded from a file.

Add Certificate
   Import public-key certificates for both your own organization and your contacts.
   
   You can also add a bunch of certificates in one go by providing a single file
   with all relevant certificates.

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

      Please note that bulk imports of private keys are not possible.

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
