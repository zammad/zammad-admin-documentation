Password
********

This section allows you to define password requirements for the local user
accounts.

.. note:: 

   Zammad does **not** allow you to change your LDAP password, instead, it will
   set a password in it's local database which might confuse your users. This
   will be addressed in the future by
   `#1169 <https://github.com/zammad/zammad/issues/1169>`_ and
   `#2389 <https://github.com/zammad/zammad/issues/2389>`_.

.. warning:: **💪 Exception for strong passwords 💪**
   
   Please note that below password policies *do not* affect administrators
   setting passwords on user accounts. While this seems strange and not safe
   we believe that an administrator knowing an users passwords is insecure
   as well.

   The suggested workflow is either:

      * to use third party logins to not require local passwords at all
        **- or -**
      * to require your *user to reset the password* upon first login. 
   
   This way administrators are not required to set a users password at all!


Maximum failed logins
---------------------

You can choose a value between ``4`` and ``20``. This defines how often a login
to a user account may fail until Zammad will lock it. Please note that via UI
the only way to unlock a user account is to change the password (either as admin
or via password reset function (if enabled)).

The default value is ``10``.

.. note:: 

   You can also unlock an account via 
   `console <https://docs.zammad.org/en/latest/console/working-on-users.html>`_
   or `API <https://docs.zammad.org/en/latest/api-user.html>`_.


2 lower and 2 upper characters
------------------------------

You can add complexity into passwords by enforcing at least 2 upper and lower
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
