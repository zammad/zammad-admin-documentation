Security Keys
=============

The security keys method is a type of a two-factor authentication that uses Web
Authentication API in the browser for verifying user's identity. The user
can register multiple hardware or software security keys with their Zammad
account and then they can use it during the sign-in process.

How it works
------------

When logging in, the user is prompted to provide the same security key they
registered with their account, in addition to their password. This key acts as
the second factor of authentication, providing an extra layer of security.

.. figure:: /images/settings/security/two-factor/security-keys-safari.png
   :alt: Security Key dialog in Safari on macOS
   :align: center
   :width: 50%

The type of the key can range from hardware USB sticks to passkeys stored in
a device of user's choice. Which type can be used depends on the browser flavor
and the platform of the user.

Enabling the Security Keys method
---------------------------------

To enable the method, just toggle the switch on in the settings.

.. figure:: /images/settings/security/two-factor/security-keys-switch-setting.png
   :alt: Security Keys Switch in Settings
   :align: center

Now the users will be able to set up this two-factor authentication method for
their accounts via "Avatar -> Profile -> Password & Authentication". Once they
do, on next sign-in with password, they will be asked to provide the same
security key they registered during the setup.
