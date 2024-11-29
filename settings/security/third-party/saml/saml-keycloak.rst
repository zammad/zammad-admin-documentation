SAML with Keycloak
==================

Keycloak Configuration
----------------------

* **To add Zammad as a client,**
  save the XML configuration to disk
  (``https://your.zammad.domain/auth/saml/metadata``)
  and use **Clients > Clients list > Import client** in the Keycloak admin
  panel.

* To help Zammad **match its own user accounts to Keycloak users**,
  create a user attribute (or “property”) mapper. In **Clients list**, click on
  your newly created Client ID, choose the tab **Client scopes** and click on
  the link which refers to your Zammad instance. Choose
  **Add mapper > By configuration > User Property** and create a mapper with
  the following entries:

   .. list-table::

      * - **Name**
        - ``email``
      * - **Mapper Type**
        - ``User Property``
      * - **Property**
        - ``emailAddress``
      * - **SAML Attribute Name**
        - ``email``
      * - **SAML Attribute NameFormat**
        - ``basic``

  In the example above, we're telling Zammad that
  whenever it receives a SAML login request,
  it should take the ``email`` property from Keycloak,
  look for a Zammad user with the same ``email`` attribute,
  and create a new session for that user.

  If your Keycloak users' email addresses are stored on another property
  (*e.g.,* ``username``), adjust accordingly.

* Back in **Settings**, enter the Client ID
  (``https://your.zammad.domain/auth/saml/metadata``) in the field
  **Master SAML Processing URL**.

* You also need to enable **Sign assertions**.

Step 2: Configure Zammad
------------------------

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
   the SAML button. For Keycloak, this needs to look like https://your.domain/realms/your-realm/protocol/saml

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
