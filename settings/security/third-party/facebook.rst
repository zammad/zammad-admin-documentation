Facebook
========

Configure Facebook as an authentication provider so users can log in to
Zammad with their Facebook account. For details about app creation and
Facebook Login, see the `Meta app creation documentation
<https://developers.facebook.com/documentation/facebook-login/create-an-app>`_.

Register a Facebook App
-----------------------

Create the App
^^^^^^^^^^^^^^

Log in to the `Meta App Dashboard <https://developers.facebook.com/>`_ with
your Facebook account and register as a developer if you have no developer
account yet (see `Register as a Meta Developer
<https://developers.facebook.com/documentation/development/register>`_).
Then, create a `new app <https://developers.facebook.com/apps/creation/>`_ and
provide the following information:

**App details**
   Enter a name for your app, for example Zammad, and a contact email
   address.

**Use cases**
   Select **Authenticate and request data from users with Facebook Login**.
   This use case includes the ``public_profile`` permission which is
   required for the login to work.

**Business**
   You don't need a business portfolio for the login. Select **I don't want
   to connect a business portfolio yet**.

Add the Email Permission
^^^^^^^^^^^^^^^^^^^^^^^^

Zammad needs the ``email`` permission to match logins to existing accounts.

- Open your app in the dashboard and go to **Use cases** in the left-side
  menu.
- Click the **Authenticate and request data from users with Facebook
  Login** use case.
- Under **Permissions and features**, click ``Add`` next to **email**.

Provide the Callback URL
^^^^^^^^^^^^^^^^^^^^^^^^

Facebook redirects users to this URL after the login.

- In the use case, go to *Customize > Settings*.
- Under **Valid OAuth Redirect URIs**, enter
  ``https://zammad.example.com/auth/facebook/callback`` and replace
  ``zammad.example.com`` with the FQDN of your Zammad instance. You can also
  copy the callback URL from the **Authentication via Facebook** section in
  Zammad's admin settings.

Get Your App Credentials
^^^^^^^^^^^^^^^^^^^^^^^^

- Go to *App settings > Basic*.
- Note down the **App ID** and click ``Show`` next to **App secret** to
  note it down as well.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via Facebook** section. Enter your **App ID** and
**App Secret**, enable the toggle, and click ``Submit``.

After submitting, the Facebook button appears on the login page and users
can log in with their Facebook account.

.. note::

   New apps start in Development mode. In this mode only users with a role
   on the app, such as administrators, developers or testers, can log in.
   For everyone else to use the login, switch your app to **Live mode** in
   the dashboard toolbar. The ``public_profile`` and ``email`` permissions
   used by Zammad are automatically granted and don't require App Review.
