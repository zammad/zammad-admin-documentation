API
===

Zammad comes with a REST API that allows external applications and scripts to
read and write data of your Zammad instance without using the web interface.
The API endpoints themselves are always available, the settings of this page
only decide how clients authenticate and whether the MCP server answers. The
``admin.api`` permission is required to access the page.

The endpoints and the data they expect are not described on this page. You can
find them in the :docs:`REST API documentation </api/intro.html>` of our system
documentation.

Zammad supports three ways for a client to authenticate against the REST API.
This overview only names them, the settings themselves are organized
differently: the first two methods are toggles on the *Token access* tab, the
third one belongs to the OAuth applications on the *OAuth* tab:

Personal access token
   A token a user creates in their own user profile. It can be limited to
   specific permissions and can have an expiration date. This is the
   recommended way for API access. Controlled by the **Token Access** toggle.

Username/email address and password
   The credentials are sent as HTTP basic authentication with every request.
   Needed for clients that only support basic authentication. Controlled by
   the **Password Access** toggle.

OAuth2 access token
   A token an application receives for a user after the user authorized the
   application. It is managed with the applications on the *OAuth* tab.
   Unlike the other two methods it has no toggle and cannot be switched off.

Token Access
------------

The first tab of the page is named *Token access*. It holds the toggles
described in the following three sections: direct authentication of the REST
API and the MCP server.

.. _system-api-token-access:

Token Access
^^^^^^^^^^^^

The **Token Access** toggle enables personal access tokens (HTTP token
authentication). It is active by default.

Every user with the ``user_preferences.access_token`` role permission
(:doc:`see the permission list </manage/roles/permissions>`) can create as many
tokens as needed in their own profile (*Avatar > Profile > Token Access*). When
creating a token, the user decides which permissions the token gets and can set
an expiration date. A token never carries more permissions than the user who
created it. Clients send the token as HTTP header:

.. code-block:: console

   $ curl -H "Authorization: Token <token>" https://<fqdn>/api/v1/groups

The example shown next to the toggle uses the **Fully Qualified Domain Name**
and the **HTTP type** from Zammad's :doc:`Base settings
</settings/system/base>`.

If you switch the toggle off, all existing personal access tokens stop working
immediately. The **Token Access** entry also disappears from the user profile,
which means nobody can create new tokens. OAuth2 access tokens are not
affected because Zammad handles them separately.

.. hint::

   Users have to create their own tokens. See the
   :user-docs:`user documentation </extras/user-menu-profile-settings.html>`
   for the user's point of view.

Password Access
^^^^^^^^^^^^^^^

The **Password Access** toggle allows clients to authenticate with the
username/email address and the password of a user (HTTP basic authentication).
It is active by default.

.. code-block:: console

   $ curl -u <email>:<password> https://<fqdn>/api/v1/groups

Basic authentication sends the credentials with every single request and it
cannot be combined with two-factor authentication: Zammad rejects such logins.
For the calendar subscription URLs (``/ical/...``) Zammad verifies the password
only, which is why calendar subscriptions work even for users with two-factor
authentication. We recommend switching the toggle off and using
:ref:`personal access tokens <system-api-token-access>` instead.

Switching the toggle off has two consequences:

- All API requests with basic authentication are rejected.
- The calendar subscription URLs in user profiles stop working, because
  calendar apps authenticate with basic authentication. Affected users get a
  warning on the calendar page of their profile and are asked to contact their
  administrator.

.. _system-api-mcp-server:

MCP Server
^^^^^^^^^^

Zammad answers the *Model Context Protocol* (MCP) on its own server, next to
the REST API. Through it, an AI client (a chat application or a coding tool,
for example) reads, finds, updates and creates tickets in your Zammad. Nothing
has to be installed or run in addition, the server is part of every
installation.

The **MCP server** toggle enables the server for the whole installation. It is
off by default. While it is off, Zammad refuses every request to the server,
whatever token the request carries.

The clients authenticate with personal access tokens, so the server works only
while :ref:`Token Access <system-api-token-access>` is enabled. A client can
do exactly what the token and its owner may do, nothing more: every tool
requires the ``ticket.agent`` permission. Users without agent permissions, such
as customers, get no tools. See the :user-docs:`user documentation
</extras/mcp-server.html>` for how a user connects a client.

When the toggle is on, the page shows the address of the server and an example
for connecting a client. Both use the **Fully Qualified Domain Name** and the
**HTTP type** from Zammad's :doc:`Base settings </settings/system/base>`.

Zammad answers only when a request addresses the **Fully Qualified Domain
Name**, the **Alternative fully qualified domain name** or a loopback address
(``localhost``, ``127.0.0.1``, ``::1``). Requests at another address fail, and
browser requests from other origins are refused to protect the server against
DNS rebinding.

Where the client can show it, Zammad asks the user to approve a message before
it reaches a customer. The request shows the complete text, the recipients and
the visibility (a form elicitation, as of MCP revision 2026-07-28), and Zammad
sends only once the user accepted there. A declined approval sends nothing, and
the client can then offer to save the text as the ticket's shared draft.

A client that cannot show the form falls back to its own approval of the tool
call, as a change over the REST API with the same token goes through without a
further approval. For two changes the user's yes in the conversation stands in
for the form: Zammad replaces a shared draft that is already there and closes a
ticket with an incomplete checklist only after the client asked and the user
agreed. Keep the approval of tool calls enabled in the client, because a client
that runs them without a prompt sends a message without any further question.

The client works with tools for reading and writing tickets, for searching
and for shared drafts and knowledge base answers. The complete list, with the
access of each tool and the limits that apply, is part of the system
documentation: :docs:`MCP tool reference </api/mcp.html>`.

OAuth
-----

The second tab of the page is named *OAuth*. An OAuth application is any
external software that wants to work with your Zammad data on behalf of a
user, e.g. a reporting tool or an integration you develop yourself. Zammad
acts as OAuth provider for it: the user logs into Zammad once and authorizes
the application, which then works with the REST API as that user and with
their permissions.

This is not a login method for Zammad itself. If you want your users to log
into Zammad through an external provider, see
:doc:`Third-Party Applications </settings/security/third-party>`.

Applications
^^^^^^^^^^^^

Create a new application with the ``New Application`` button. The dialog asks
for the following information:

Name
   The name of the application. It is only shown in this list, choose a name
   that tells your users what they authorize.

Callback URL
   The URL an application is redirected to after a user authorized it. Enter
   one URI per line if the application uses several URLs.

The list of existing applications shows the name, the callback URL and the
number of access tokens that were already created for the application. The
**View** and **Token** columns provide direct actions:

View
   Shows the **AppID** and the **Secret** of the application. An application
   needs both values to authenticate at Zammad.

Token
   Generates an access token for the application which belongs to your own user
   account. Zammad displays it in a dialog.

Creating an application does not grant it any access. A user still has to
authorize the application once, or you generate an access token with the
**Token** action.

Authorization URLs
^^^^^^^^^^^^^^^^^^

The bottom of the tab lists the two URLs of your instance that an application
uses during the authorization:

- ``<fqdn>/oauth/authorize``: the application sends the user there to request
  access for that user (**Requesting the Grant**).
- ``<fqdn>/oauth/token``: the application requests an access token there
  afterwards (**Getting an Access Token**).

.. hint::

   The :docs:`REST API documentation </api/intro.html>` explains how a client
   sends an OAuth2 access token with an API call.
