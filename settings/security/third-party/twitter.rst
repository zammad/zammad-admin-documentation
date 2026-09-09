Twitter
=======

Configure Twitter as an authentication provider so users can log in to
Zammad with their Twitter account.

.. warning::

   X (formerly Twitter) recommends OAuth 2.0 for new apps. Zammad uses the
   legacy OAuth 1.0a flow (Sign in with X) for this login provider. New X
   apps are created in the `X Developer Console <https://console.x.com>`_,
   and X restricts or charges for API access depending on your tier. If you
   don't already have an X app with API Key and Secret credentials, check
   the current X developer documentation before investing time in this
   provider.

Register a Twitter App
----------------------

Create the App
^^^^^^^^^^^^^^

Log in to the `X Developer Console <https://console.x.com>`_ (or the app
dashboard on `developer.x.com <https://developer.x.com>`_ for apps created
before the console migration) with your X account and create a new app.
Provide a name, a description and your use case.

Provide the Callback URL
^^^^^^^^^^^^^^^^^^^^^^^^

X redirects users to this URL after the login. Add it to your app's callback
URL allowlist in the developer settings:

``https://zammad.example.com/auth/twitter/callback``

Replace ``zammad.example.com`` with the FQDN of your Zammad instance. You
can also copy the callback URL from the **Authentication via Twitter**
section in Zammad's admin settings.

Get Your App Credentials
^^^^^^^^^^^^^^^^^^^^^^^^

In your app's **Keys and tokens** section, generate the **API Key and
Secret** (formerly Consumer Key and Secret) for OAuth 1.0a. Note both down.

No additional permissions are needed for the login. The read, write and
Direct Message permissions you may find in the app settings are not used by
this authentication provider.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via Twitter** section. Enter your **Twitter Key** and
**Twitter Secret**, enable the toggle, and click ``Submit``.

After submitting, the Twitter button appears on the login page and users can
log in with their Twitter account. On first login, X asks them to authorize
the access.
