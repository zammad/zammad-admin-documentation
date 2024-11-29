SAML
====

Introduction
------------

Connect your SAML (Security Assertion Markup Language) identity provider as a
single sign-on (SSO) method.

SAML is an open standard for SSO authentication (among other things).
Sign-ins are shared across multiple **service providers**
and managed by a central **identity provider** (IdP).

In this case, the service provider is Zammad,
and the IdP is a software service that you either host or subscribe to
(e.g. `Keycloak <https://www.keycloak.org/>`_,
`Redhat SSO Server <https://access.redhat.com/products/red-hat-single-sign-on>`_,
`ADFS <https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services>`_,
or `Okta <https://www.okta.com/>`_).

This guide assumes you are already using SAML within your organization
(i.e., that your IdP is fully set up).

Basic Configuration
-------------------

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

Configuration Guides
--------------------

You can find configuration guides for:

- :doc:`Keycloak <./saml/saml-keycloak>`
- :doc:`Microsoft SAML <./saml/saml-microsoft>`

If your are using another IdP, adapt it to your needs.

.. toctree::
   :maxdepth: 2
   :hidden:

   saml/saml-keycloak
   saml/saml-microsoft
