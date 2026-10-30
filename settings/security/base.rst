Base
====

New User Accounts
-----------------

.. container:: cfloat-left

   Activates the **Register as a new customer** function on the login page.
   If set to ``no``, only administrators or agents can create new accounts
   manually.

   Default: ``yes``

.. container:: cfloat-right

   .. figure:: /images/settings/security/login_new_user_accounts.png
      :alt: Figure showing activated "New User Accounts" setting
      :width: 60%
      :align: center

Deactivation of above function **does not** deactivate automatic account
creation! This means: If a user writes e.g. an email to Zammad and has no
account yet, Zammad will automatically create the account.
User accounts are a direct dependency of tickets and thus technically
mandatory.

Lost Password
-------------

.. container:: cfloat-left

   Activates the **Forgot password?** and **You can request your password here.**
   function on the login page. If set to ``no``, only administrators may change
   the user's password - users may update their own password if they're still
   logged in and they have the required
   :doc:`permission </manage/roles/permissions>`.

   Default: ``yes``

.. container:: cfloat-right

   .. figure:: /images/settings/security/login_lost_password.png
      :alt: Figure showing activated "Lost Password" setting
      :width: 60%
      :align: center

.. tip::

   With third party authentications - but especially LDAP - you may want to
   disable this function. Zammad **will not** change third party login
   passwords and instead set or change the local password!

.. _security_password_login:

Password Login
--------------

.. container:: cfloat-left

   Username & password login is enabled by default. If you set it to ``no``,
   make sure to configure a :doc:`third-party` login. Otherwise, the login
   via username and password is still enabled. The login screen without
   username and password login can look like in the screenshot.

   Default: ``yes``

.. container:: cfloat-right

   .. figure:: /images/settings/security/login_deactivated_password_login.png
      :alt: Figure showing de-activated "Password Login" setting
      :width: 60%
      :align: center

.. hint::

   To help administrators to overcome login issues, Zammad automatically
   offers a password request for administrator users as you can see in the
   screenshot above. This allows you to adjust third-party applications, even
   if the login doesn't work. Open ``https://<your-zammad>/#admin_password_auth``
   directly, or use the **Request the password login here** link on the
   login screen. After entering your username or email address, Zammad sends
   a one-time login link to your email address, valid for one day. Opening
   the link shows the password login form, also when the automatic
   third-party login redirects the regular login screen.

.. _security_automatic_third_party_login:

Automatic Third-party Login
---------------------------

Activates the automatic redirect from the login screen to the sign-in page
of a :doc:`third-party <third-party>` provider. This works with every
provider Zammad offers, SAML, OpenID Connect and OAuth providers included.
Users get sent straight to the provider instead of seeing Zammad's login
screen and continue to the page they originally requested after signing
in, e.g. a ticket link from a notification email.

The redirect takes effect only when **Password Login** is deactivated and
exactly one third-party provider is enabled. Otherwise users sign in
through the login screen as usual. Zammad also holds the redirect back in
maintenance mode so administrators keep their way in. The same happens when
a sign-in attempt returns to Zammad without a session, and Zammad retries
the redirect after 60 seconds. With the redirect in place, the fallback
under :ref:`Password Login <security_password_login>` is still available:
the one-time login link from the email opens the password login form
without the redirect.

Default: ``no``

.. note::

   After a logout Zammad does not sign users back in automatically, even
   when their provider session is still valid. What happens next depends on
   the provider's logout support:

   **With logout support**
      Logging out of Zammad also ends the session at the provider (SAML
      with a single logout URL, OpenID Connect with an end session
      endpoint). The next visit shows the provider's own sign-in page.

   **Without logout support**
      The session at the provider stays valid. This is the case for all
      OAuth providers, e.g. Facebook, LinkedIn, GitHub, GitLab, Microsoft,
      Google or Weibo. Zammad then keeps showing its login screen and
      users sign in again with a click on the provider's button.

.. _security_session_timeout:

Session Timeout
---------------

All settings below by default are set to ``4 weeks``.
Session Timeout defines the life time of a users session.
As soon as it's reached, Zammad will automatically log off the
session in question.

Zammad takes the highest value assigned for the user based on the permissions.

#. ``admin``
#. ``ticket.agent``
#. ``ticket.customer``
#. ``default`` (fallback if user doesn't have above permissions set)

All settings act independently from each other allowing you to disable the
timeouts for e.g. admins, but not agents.

Example
   Let's suppose you configured the following session timeouts:

   - Default: 3 weeks
   - Admin: 2 weeks
   - Ticket.agent: 4 weeks
   - Ticket.customer: 1 week

   This results in the following situations:

   - A user with ``admin`` permission will have a timeout of 2 weeks
   - A user with ``admin`` and ``ticket.agent`` permissions will
     have a timeout of 2 weeks
   - A user with ``ticket.customer`` permission will have a timeout
     of 1 week
   - A user with neither ``admin``, ``ticket.agent`` nor
     ``ticket.customer`` permissions will have a timeout of 3 weeks
