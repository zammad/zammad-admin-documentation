OpenID Connect
==============

Connect your OpenID provider (OP) as a single sign-on (SSO) method.

OpenID is an easy and safe way for people to reuse an existing account and user
profile from an OpenID provider.

.. hint:: The current implementation of OpenID Connect in Zammad is requiring
   OpenID Connect Discovery to simplify the configuration.

The relying party (RP) is Zammad and the OpenID provider is a software service
that you either host or subscribe to
(e.g. `Keycloak <https://www.keycloak.org/>`_).

This guide assumes you are already using OpenID Connect within your organization
(i.e. that your OP is fully set up).

.. warning:: The connection between Zammad and your OP has to be secure. Both
   systems must be reachable via HTTPS. Self-signed certificates are not
   supported.

.. hint:: Please note: Our instructions are based on connecting Zammad with
   Keycloak.

.. hint:: PKCE is currently only supporting SHA256 as code challenge method.

Step 1: Configure Your OP
--------------------------

Add a new Client
^^^^^^^^^^^^^^^^

Create a new client in your OP with the following settings:

General settings
 * Client type: OpenID Connect
 * Client ID: ``zammad`` (or any other name you prefer)

Capability config
 * Client authentication: Off
 * Authentication flow: Standard flow

Login settings
 * Valid redirect URIs: ``https://your.zammad.domain/auth/openid_connect/callback``
 * Valid post logout redirect URIs: ``https://your.zammad.domain/*``
 * Web origins: ``+``

In the **Logout settings** for the newly created client, set the
**Backchannel logout URL** to
``https://your.zammad.domain/auth/openid_connect/backchannel_logout`` and
switch on **Backchannel logout session required**.

If you would like to use [PKCE](https://oauth.net/2/pkce/), you need to switch to the **Advanced** tab and select **S256** in **Advanced settings* as the code challenge method for PKCE.

Step 2: Configure Zammad
------------------------

Enable OpenID Connect and enter your OP's details in the Admin Panel under
**Settings > Security > Third Party Applications > Authentication via OpenID
Connect**:

.. image:: /images/settings/security/third-party/openid-connect/zammad_connect_oidc_thirdparty_general.png
   :alt: Example configuration of OpenID Connect
   :scale: 60%
   :align: center

Display name
   Allows you to define a custom button name for OpenID Connect. This helps your
   users to understand better what the button on the login page does.

   Defaults to ``OpenID Connect``.

Identifier
   The client ID you defined in your OP.

Issuer
    The issuer URL of your OP. Used for discovery.

UID field
   Here you can define an attribute that uniquely identifies the user. If unset,
   ``sub`` is used.

Scopes
   The scopes that Zammad should request from the OP. Defaults to ``openid``,
   ``email`` and ``profile``.

PKCE
   Currently only SHA256 as code challenge method is supported.

See :ref:`automatic account linking <automatic-account-linking>` for details on
how to link existing Zammad accounts to OP accounts.
