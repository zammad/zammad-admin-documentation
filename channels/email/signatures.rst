Signatures
==========

.. figure:: /images/channels/email/signatures-page.png
   :alt: Account settings page
   :align: center

General
-------

You can create a separate signature for each group in Zammad.
The individual signatures can be created and edited here.

Afterwards, the existing (and active) signatures are available in the group
editing mask:

.. figure:: /images/channels/email/signature-setting-group.png

Each group can be assigned its own signature, but they can also all use the
same signature.

Dynamic Signatures
------------------

To individualize the signatures, it is possible to automatically load specific
information into a signature via :doc:`/misc/variables`. All information
stored on the ticket, assigned customers or agents can be inserted.
This makes it possible to design the signature individually.
To load a list of available variables, enter two colons
(``::``) into the *Text* box of the signature editor.

.. figure:: /images/channels/email/adding-variables-to-signatures.png
   :alt: Screenshot shows signature editor with highlighted variable usage
   :scale: 70%
   :align: center

.. hint::

   Please keep in mind that specific information might not be available during
   ticket creation. The best example here is the ticket number. It gets created
   with submitting the ticket form and thus is not available before.

Here is an example of a signature with variables and the result when you
write a mail:

.. figure:: /images/channels/email/signature-variables-being-replaced-in-ticket-zoom.png
