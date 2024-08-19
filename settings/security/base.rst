Base
====

New User Accounts
-----------------

.. container:: cfloat-left

   Activates the `register as a new customer` function on the login page.
   If set to ``no`` only administrators or agents can create new accounts
   manually.

   Default setting: ``yes``

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

   Activates the `lost password` function on the login page.
   If set to ``no`` only administrators may change the user's password - users
   may update their own password if they're still logged in and they have the
   required :doc:`permission </manage/roles/user-preferences-permissions>`.

   Default setting: ``yes``

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

   Activates the username & password login by default and if no third-party
   login is activated. Disabling password login on the Zammad login page only
   takes effect if you enable any :doc:`third-party`.

   See :doc:`third-party` for supported third-party logins.

   Default setting: ``yes``

.. container:: cfloat-right

   .. figure:: /images/settings/security/login_deactivated_password_login.png
      :alt: Figure showing de-activated "Password Login" setting
      :width: 60%
      :align: center

.. hint::

   To help administrators to overcome "login issues", Zammad automatically
   offers a password request for administrator users. This allows you to adjust
   Third-Party applications even if the login does no longer work!

.. _security_session_timeout:

Session Timeout
---------------

All settings below by default are set to ``4 weeks``.
Session Timeout defines the life time of a users session.
As soon as it's reached, Zammad will automatically log off the
session in question.

Zammad takes the highest value set assigned for the user based on
the permissions.

   #. ``admin``
   #. ``ticket.agent``
   #. ``ticket.customer``
   #. ``default`` (fallback if user doesn't have above permissions set)

All settings act independently from each other allowing you to disable the
timeouts for e.g. admins, but not agents.

Example
   Let's suppose you configured the following session timeouts
      * default: 3 weeks
      * admin: 2 weeks
      * ticket.agent: 4 weeks
      * ticket.customer: 1 week

   This results in the following situations
      - a user with ``admin`` permission will have a timeout of 2 weeks
      - a user with ``admin`` and ``ticket.agent`` permissions will
        have a timeout of 2 weeks
      - a user with ``ticket.customer`` permission will have a timeout
        of 1 week
      - a user with neither ``admin``, ``ticket.agent`` nor
        ``ticket.customer`` permissions will have a timeout of 3 weeks
