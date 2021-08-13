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
case characters. The default value is ``no``.


Minimum length
--------------

This defines the minimum password length required (from ``4`` to ``20``). 
he default value is ``6``.


Digit required
--------------

This enforces your users to at least use one digit with his password.
The default value is ``yes``.
