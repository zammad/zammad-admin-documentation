Password
********

This section allows you to define password requirements for the local user
accounts.

.. note::

   Zammad does **not** allow you to change your LDAP password, instead, it will
   set a password in its local database which might confuse your users. This
   will be addressed in the future by
   `#1169 <https://github.com/zammad/zammad/issues/1169>`_.

.. warning:: **💪 Exception for strong passwords 💪**

   Please note that below password policies *do not* affect administrators
   setting passwords on user accounts. While this seems strange and not safe
   we believe that an administrator knowing an user's password is insecure
   as well.

   The suggested workflow is either:

      * to use third party logins to not require local passwords at all
        **- or -**
      * to require your *user to reset the password* upon first login.

   This way administrators are not required to set a user's password at all!


Maximum failed logins
---------------------

You can choose a value between ``4`` and ``20``. This defines how often a login
to a user account may fail until Zammad will lock it.
Your users can always use the "forgot password" function to change their
password and unlock their account.

The default value is ``10``.

.. note::

   Beside changing the user's password, you can also unlock accounts via

      * :ref:`user management list <locked-user-accounts>`
      * :docs:`console </admin/console/working-on-users.html>`
      * :docs:`API </api/user.html>`

.. hint::

   Failed logins via LDAP no longer lock accounts.

2 lower case and 2 upper case characters
----------------------------------------

You can add complexity to passwords by enforcing at least 2 upper and lower
case characters.

The default value is ``no``.


Minimum length
--------------

This defines the minimum password length required for users to provide
(from ``4`` to ``20``).

The default value is ``6``.


Digit required
--------------

This enforces your users to use at least one digit within the password.

The default value is ``yes``.

Special character required
--------------------------

This setting allows you to improve your password quality even more by enforcing
the password to contain at least one special character.

The default value is ``no``.
