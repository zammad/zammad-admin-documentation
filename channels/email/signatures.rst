Signatures
**********

.. figure:: /images/channels/email/signatures-page.png
   :alt: Account settings page
   :align: center

You can create a separate signature for each group in Zammad. The individual signatures can be created and edited here:

.. image:: /images/channels/Zammad_Helpdesk_-Signature.jpg

Afterwards, the existing (and active) signatures are available in the group editing mask:

.. image:: /images/channels/Signature2.jpg

Each group can be assigned its own signature, but they can also all use the same signature.


Dynamic Signatures
++++++++++++++++++

To individualize the signatures, it is possible to automatically load specific information into a signature via :doc:`/system/variables`. All information stored on the ticket, assigned customers or agents can be inserted. This makes it possible to design the signature individually. To load a list of available variables, enter two colons (``::``) into the *Text* box of the signature editor.

.. hint:: Please keep in mind that specific information might not be available during ticket creation. The best example here is the ticket number / id. Specific information are created with submitting the ticket and thus are not available before submitting.


.. image:: /images/channels/Signature3.jpg

Here is an example of a signature with variables and the result when you write a mail:

.. image:: /images/channels/Signature4.jpg
