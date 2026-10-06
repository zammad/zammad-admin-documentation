API
===

Zammad comes with a REST API that allows external applications and scripts to
read and write data of your Zammad instance without using the web interface.
The API endpoints themselves are always available, the settings on this tab
only decide how clients authenticate. The tab *System > API* has two jobs: it
decides which authentication methods Zammad accepts for API requests and it
manages the applications that use Zammad as an OAuth provider. The
``admin.api`` permission is required to access the tab.

The endpoints and the data they expect are not described on this page. You can
find them in the :docs:`REST API documentation </api/intro.html>` of our system
documentation.

Authentication Methods
----------------------

Zammad supports three ways for a client to authenticate against the API. The
first two are toggles on this page, the third one comes with the OAuth
applications further down:

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
   application. It is managed with the applications further down on this page.
   Unlike the other two methods it has no toggle and cannot be switched off.

.. _system-api-token-access:

Token Access
------------

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
---------------

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

Applications
------------

The lower part of the page manages OAuth applications. An OAuth application is
any external software that wants to work with your Zammad data on behalf of a
user, e.g. a reporting tool or an integration you develop yourself. Zammad acts
as OAuth provider for it: the user logs into Zammad once and authorizes the
application, which then works with the REST API as that user and with their
permissions.

This is not a login method for Zammad itself. If you want your users to log
into Zammad through an external provider, see
:doc:`Third-Party Applications </settings/security/third-party>`.

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
**Token** action. The bottom of the page lists the two URLs of your instance
that an application uses during the authorization:

- ``<fqdn>/oauth/authorize``: the application sends the user there to request
  access for that user (**Requesting the Grant**).
- ``<fqdn>/oauth/token``: the application requests an access token there
  afterwards (**Getting an Access Token**).

.. hint::

   The :docs:`REST API documentation </api/intro.html>` explains how a client
   sends an OAuth2 access token with an API call.
