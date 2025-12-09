SAML with Microsoft 365
=======================

1. Register Zammad as an Application in Microsoft Entra ID
----------------------------------------------------------

- Log in to the Microsoft Entra admin center with administrative rights
- Navigate to "Identity" > "Applications" > "Enterprise Applications"
- Click "New Application" and select "Create your own application"
- Enter a name for the application, e.g. "Zammad SAML Integration"
- Choose "Integrate any other application you don't find in the gallery", then
  click "Create"

2. Configure SAML-based Single Sign-On (SSO)
--------------------------------------------

- After the application is created, go to its overview page
- Select "Single sign-on" from the left-hand menu
- Choose "SAML" as the sign-on method
- In the "Basic SAML Configuration" section, click "Edit":

  - Identifier (Entity ID): Use Zammad's Entity ID, which can be found at
    ``https://your.zammad.domain/auth/saml/metadata``
  - Reply URL (Assertion Consumer Service URL): Set it to
    ``https://your.zammad.domain/auth/saml/callback``

- Save the configuration

3. Configure User Attributes and Claims Mapping
-----------------------------------------------

In the "Attributes & Claims" section, click "Edit".
By default, some claims like User Principal Name, Email Address, First Name, and
Last Name are already configured.

.. figure:: /images/settings/security/third-party/saml/ms-saml-claims.png
   :alt: Screenshots showing "Attribute & Claims" configuration in Entra admin center
   :align: center

4. Download the SAML Certificate
--------------------------------

In the "SAML Signing Certificate" section, download the "Certificate (Base64)":

.. figure:: /images/settings/security/third-party/saml/ms-saml-export-certificate.png
   :align: center
   :alt: Screenshot showing the highlighted certificate export already


5. Configure Zammad
-------------------

- Log in to Zammad as an administrator
- Go to *Settings > Security > Third-party Applications > Authentication via SAML*
  in the admin settings.
- Provide the following information:

  - IDP SSO target URL: The Login URL from the Microsoft Entra Admin Center.
  - IDP single logout target URL: The Logout URL from the Microsoft Entra Admin
    Center.
  - Name Identifier Format: ``urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress``
  - SAML IdP Certificate: Upload the previously downloaded Base64 certificate.
  - Save the settings

6. Assign Users
---------------

In Microsoft Entra ID, assign the relevant users to the Zammad application to
grant them access.

.. hint::
  Read on at :ref:`saml-zammad` for a description of the specific fields in
  Zammad.