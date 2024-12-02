SAML
====

Introduction
------------

Connect your SAML (Security Assertion Markup Language) identity provider as a
single sign-on (SSO) method. SAML is an open standard for SSO authentication
(among other things). Sign-ins are shared across multiple **service providers**
and managed by a central **identity provider** (IdP).

In this case, the service provider is Zammad,
and the IdP is a software service that you either host or subscribe to
(e.g. `Keycloak <https://www.keycloak.org/>`_,
`Redhat SSO Server <https://access.redhat.com/products/red-hat-single-sign-on>`_,
`ADFS <https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services>`_,
or `Okta <https://www.okta.com/>`_).

This guide assumes you are already using SAML within your organization
(i.e. that your IdP is fully set up).

Basic Configuration
-------------------

This section describes the setup of an IdP in a general way. See
:ref:`saml-guides` for setup guides for Keycloak and Microsoft SAML.

Configure Your IdP
^^^^^^^^^^^^^^^^^^

Add Zammad as a Client/App
""""""""""""""""""""""""""

Import Zammad into your IdP using the XML configuration
found at ``https://your.zammad.domain/auth/saml/metadata``.

If your IdP doesn't support XML import, you will have to configure Zammad as a
new client/app manually using the above XML metadata file for reference.

For instance, when you see this tag:

.. code-block:: xml

   <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="http://your.zammad.domain/auth/saml/callback" index="0" isDefault="true"/>

Set the **Assertion Consumer Service Binding URL**
(sometimes also listed as **Valid Redirect URIs**)
to ``http://your.zammad.domain/auth/saml/callback``.

Set Up User Attribute Mapping
"""""""""""""""""""""""""""""

Zammad requests the following user attributes (or “properties”) from the IdP:

* Email address (``email``)
* Full name (``name``)
* Given name (``first_name``)
* Family name (``last_name``)

You may need to set up “mappers” (or “mappings”) to tell your IdP
how user attributes in SAML correspond to those in Zammad.
For a more detailed breakdown,
refer to the XML metadata file referenced in the previous section.

.. _saml-guides:

Configuration Guides
--------------------

You can find specific configuration guides for:

- :doc:`Keycloak <./saml/saml-keycloak>`
- :doc:`Microsoft SAML <./saml/saml-microsoft>`

If your are using another IdP, adapt it to your needs. For a description of the
fields in Zammad, read on below.

.. toctree::
   :maxdepth: 2
   :hidden:

   saml/saml-keycloak
   saml/saml-microsoft

.. _saml-zammad:

General Zammad Configuration
----------------------------

Enable SAML and enter your IdP's details in the Admin Panel under
**Settings > Security > Third Party Applications > Authentication via SAML**:

.. image:: /images/settings/security/third-party/saml/zammad_connect_saml_thirdparty_general.png
   :alt: Example configuration of SAML part 1
   :scale: 60%
   :align: center

Display name
   Allows you to define a custom button name for SAML. This helps your users
   to understand better what the button on the login page does.

   Defaults to ``SAML``.

IDP SSO target URL
   This is the target URL Zammad shall redirect to when the user presses
   the SAML button.

IDP single logout target URL
   This is the URL to which the single logout request and response should be
   sent.

IDP certificate
   The public certificate of your IDP for Zammad to verify during the callback
   phase.

IDP certificate fingerprint
   The fingerprint of your IDPs public certificate to verify during callback
   phase.

   .. note:: 🔏 **For the IdP certificate / certificate fingerprint:**

      Provide **only one or the other**—do not provide both!
      (Between the two, we recommend the signing certificate itself:
      fingerprints use SHA-1, which `has been broken for a while now
      <https://www.schneier.com/blog/archives/2005/02/sha1_broken.html>`_.)

      **Keycloak users:** Find your certificate in the Keycloak admin panel
      under **Realm Settings > Keys > Algorithm: RS256 > Certificate**.

Name identifier format
   This is the unique identifiers field type. Usually it should be
   ``urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress``.

   Zammad **expects an email address as unique identifier**!

UID attribute name
   Here you can define an attribute that uniquely identifies the user. If unset,
   the name identifier returned by the IDP is used.

.. image:: /images/settings/security/third-party/saml/zammad_connect_saml_thirdparty_security.png
   :alt: Example configuration of SAML part 2
   :scale: 60%
   :align: center

SSL verification
   Decide if the certificate for the connection to the IdP service
   has to be verified or not (default: ``yes``).

   .. include:: /includes/ssl-verification-warning.rst

Signing & Encrypting
   Define if you want to sign, encrypt, do both or nothing for the requests.

Certificate (PEM)
   Paste the public certificate of your Zammad SAML client, if you want to
   encrypt the requests.

   Make sure the certificate is:

   - already valid and not yet expired
   - no CA certificate
   - valid for signing and encrypting

Private key (PEM)
   Paste the private key of your Zammad SAML client here, if you want to sign
   the requests.

   Make sure the key is an RSA key with a length of at least 2048 bits.

Private key secret
   If your private key is secured with a secret, you can provide it here.

Your callback URL
   This URL is needed for your IdP configuration so it knows where to redirect
   to after successful authentication.

.. hint:: After saving your input by clicking on the "Submit" button, Zammad
   verifies the provided keys/certificates (e.g. if they are valid for
   signing/encrypting and if they aren't expired).


See :ref:`automatic account linking <automatic-account-linking>` for details on
how to link existing Zammad accounts to IdP accounts.

Troubleshooting
---------------

Automatic account linking doesn't work
   Have you double-checked your IdP's user attribute mapping configuration?
