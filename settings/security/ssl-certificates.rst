SSL Certificates
****************

Introduction
------------

Zammad offers the possibility to upload custom certificates and custom
Certificate Authority (CA) certificates. This can be useful if you want to
connect Zammad the secure way to other systems which are using custom
certificates.

An example usecase might be: You have an internal LDAP server that is not
accessible from the internet, and you want a SSL-encrypted connection, using a
custom certificate.

Prerequisites
-------------

You should have an existing custom certificate file and/or a custom CA
certificate file, which you want to add to Zammad. As filetype ``.crt`` is
supported and the certificate format has to be PEM (Base64 ASCII).

.. hint::

    When you import a custom CA certificate, all certificates generated with
    this are trusted. This can be useful if you have more than one
    system/certificate you want to connect to and the certificates are issued
    from the same custom CA.

Add a Certificate
-----------------

To add a custom certificate or a custom CA certificate, head over to the Admin
panel > Settings > Security > SSL Certificates. Here you can find a "Add SSL
Certificate" button. In the dialog you can either select a certificate file
or paste the content of the certificate:

.. figure:: /images/settings/security/ssl-add-certificate-dialog.png
    :align: center
    :scale: 60 %
    :alt: Screenshot showing certificate adding dialog

After selecting a file or pasting the content of the certificate, click on the
"Add" button to finally upload it to Zammad. Then, the certificates are
immediately effective, no restart or similar required.

.. note::

    Please note that only single certificate files are supported. That means if
    you want to import a certificate / CA certificate, it must contain **only
    one** certificate.

Certificate Overview
--------------------

After you added a certificate, you can see a table with information for each
added certificate:

.. figure:: /images/settings/security/ssl-certificate-table.png
    :align: center
    :scale: 80 %
    :alt: Screenshot showing table of added certificates

Here you can download the certificate or delete it, if you don't need it
anymore.

Deleting Certificates
---------------------

If you want to delete a specific certificate, you can do it by clicking on the
menu in the actions column and selecting delete:

.. figure:: /images/settings/security/ssl-delete-certificate.png
    :align: center
    :scale: 80 %
    :alt: Screenshot showing certificate deletion button

Downloading Certificates
------------------------

If you want to download your certificates, you can do this as well via
corresponding action buttons.

.. figure:: /images/settings/security/ssl-download-certificate.png
    :align: center
    :scale: 80 %
    :alt: Screenshot showing certificate download button