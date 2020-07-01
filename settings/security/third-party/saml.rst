SAML
====

It is possible to create a quick login for your helpdesk via SAML for Enterprise SSO integrations.

**Prerequisites:**
   A working SAML Identity Provider (IdP) such as Keycloak, Redhat SSO Server, ADFS, Okta, etc.

**Please Note:**
   Testing has confirmed working deployment with Keycloak 7.0.0. But should also work with any standard SAML compliant IdP.

   Configuring the upstream SAML IdP is outside the scope of Zammad documentation.

Configure SAML in Zammad
------------------------

- Navigate to "Admin -> Security -> Third Party Applications -> Authentication via SAML"
- Click the on/off slider to "On"

Define the fields per your upstream IdP documentation, some known working Keycloak IdP values are provided for reference.

**IDP SSO target URL:**

``https://keycloakFQDN/auth/realms/master/protocol/saml``

.. note:: This will vary according to your IdP documentation


**IDP certificate:** (base64 encoded Public Cert from the SAML IdP)::

   MIIDazCCAlOgAwIBAgIUFIWdqF4bXK5ajmxEyNJ03uK+5UQwDQYJKoZIhvcNAQELBQAwRTELMAkGA1UEBhMCVVMxEzARBgNVBAgMClNvbWUtU3RhdGUxITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDAeFw0xOTA5MDQxNjMxNDlaFw0xOTEwMDQxNjMxNDlaMEUxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCYbCP4kxftE00X/jtZ057eJLfWbkKaNonbUNyvURL9+1CY8Vg4y5941qZQ+Wib6Em+2TzCVCg4v/6oOAgFtnQApd+h8J+PgQ1iDj369oOhI7I0AwU37fNkGWrQWZi6GqV5xWlApb+3dwY2ag9dKF41n+lf0eFzWXGIaYPRMq3tVt9oz0Jxosuz/aYX2ktEydQTSBng+smUq5vdlnRTqKKu3MFCeDVqb6f9FtXz7xKV/bwcMepz0eOw8TKjfWK3Y4OFKjfHhHFG+ii8eNOFmmHn767K96819v86ehUDpY/h+lKnrnxjv/115Uu0zrB2OAfjvcQZNmfnA/rKL7UjsGl3AgMBAAGjUzBRMB0GA1UdDgQWBBRnqILKxsNGS4iX79uTcjXBBm75XTAfBgNVHSMEGDAWgBRnqILKxsNGS4iX79uTcjXBBm75XTAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQBRST4IB5O67j9ziSIzaJhhzKzu7QWWeSVcLECyfJ5iik0BMvcC3YB4rSoHo4nWgCCb+EGIaqpotXV5dK2zfCHe85bQCrc5xFZmiKCmN2iLvkF3xc9twlw8yvxSBLO6rqceVNlwJwVVsW/63v3+GXEXm0y9yPYjyr6e/VE6AxAv650dccMThxL/5ZQyceE9qSNMPk2C6kiBTv/ZKosCratsiGOWok56WyCzJyag4I93IEiFRaZlWvtJMDBXYAbgPalwm9MPoU70n6K8Bf8L+Tekt6v1ny8Iv14Whb6l5XMr/r4cqwv2DNwq1xMh59WITgdJwUNB5uLLldm40RRBJtb0

.. note::
   - The above certificate is just an example, you should use a proper certificate from your IdP!
   - Note that this is generally NOT the same cert used by TLS in the HTTPS connection to the IdP.


- In Keycloak, this certificate can be found by going to:
- Keycloak Admin: Realm settings -> keys -> RSA -> "certifcate" popup
- Paste as a single line string with no line breaks.
- Do not set this option at all if using the "certificate fingerprint" for cert validation.

**IDP certificate fingerprint:**
Optionally use the fingerprint instead of the certificate itself for cert validation.
Because sha1 is used for the fingerprint, this option is not preferred.
Do not set this option at all if using the "certificate" field above.

**Name Identifier Format:**

``urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress``


Configured example:

.. image:: /images/settings/security/third-party/saml/zammad_connect_saml_thirdparty.png
   :alt: Zammad SAML Example


Configure the SAML IdP
----------------------

If your IdP supports xml import or auto xml metadata retrieval, use this URL:
``https://zammadFQDN/auth/saml/metadata``

For Keycloak IdP, save the contents of that metadata file as "metadata.xml" and then log into Keyclaok and import it as a new Client.

Keycloak sends the "Username" in whatever format your users are stored in. The tested SAML instance used email address for the "username", but Zammad also needs to see an "email" attribute to correctly automap to existing users.
In Keycloak, we can create a "Mapper" for the newly imported Zammad client.

Goto -> Keycloak Admin -> Clients -> ``https://zammadFQDN/auth/saml/metadata`` -> Mappers -> Create

.. code-block:: html

   Name: ZammadEmail
   Mapper Type: User Attribute
   User Attribute: emailAddress
   SAML Attribute Name: email
   SAML Attribute NameFormat: Basic

Keycloak needs to know the redirect location in advance for security:
Goto -> Keycloak Admin -> Clients -> ``https://zammadFQDN/auth/saml/metadata``

**Valid Redirect URIs:**

``https://zammadFQDN/auth/saml/callback``

For other IdP systems, you can configure things manually.
Zammad is using POST Bindings for the Assertion Consumer Service (ACS)


**ASC POST Binding URL:**

``https://zammadFQDN/auth/saml/callback``

Zammad requests these attributes from the SAML IdP, these are not configurable. Each attribute should map to the correct SAML attribute via "Mappers" as needed, or equivalent mapping paradigm in other IdP systems.
The specific attributes to map vary widely between SAML IdP systems, this requested attribute list can help align the SAML provided attributes with what Zammad expects to see.

.. code-block:: html

   RequestedAttribute FriendlyName="Email address" Name="email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"
   RequestedAttribute FriendlyName="Full name" Name="name" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"
   RequestedAttribute FriendlyName="Given name" Name="first_name" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"
   RequestedAttribute FriendlyName="Family name" Name="last_name" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" isRequired="false"


Now, you should be able to link accounts in the Profile Panel under *Linked Accounts*, or log in via the Zammad login page. Alternately, you can enable :ref:`automatic account linking <automatic_account_linking>` for existing user accounts.
