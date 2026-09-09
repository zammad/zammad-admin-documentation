Weibo
=====

Configure Weibo as an authentication provider so users can log in to Zammad
with their Weibo account. This provider is primarily relevant for instances
serving users in China.

.. warning::

   Zammad depends on the third-party ``omniauth-weibo-oauth2`` gem for this
   provider. Its latest release (0.5.3) predates recent Weibo platform
   changes, and Weibo's developer portal is available in Chinese only.
   Registering an app requires a Weibo developer account and is subject to
   app review by Weibo.

Register a Weibo App
--------------------

Register an app on `Weibo's developer platform
<https://open.weibo.com/>`_ (Chinese). Create the app, and add your callback
URL to the app's authorized redirect settings:

``https://zammad.example.com/auth/weibo/callback``

Replace ``zammad.example.com`` with the FQDN of your Zammad instance. You
can also copy the callback URL from the **Authentication via Weibo** section
in Zammad's admin settings.

Get Your App Credentials
^^^^^^^^^^^^^^^^^^^^^^^^

In your app settings, note down the **App Key** and **App Secret** that
Weibo assigns to your app.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via Weibo** section. Enter your **App ID** and
**App Secret**, enable the toggle, and click ``Submit``.

After submitting, the Weibo button appears on the login page and users can
log in with their Weibo account. On first login, Weibo asks them to
authorize the access.
