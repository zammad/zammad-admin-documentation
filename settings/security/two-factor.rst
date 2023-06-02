Two-Factor Authentication
=========================

Two-factor authentication (2FA) enhances the security of Zammad accounts by
adding an extra layer of verification beyond a password. It requires users to
provide two different types of authentication factors, typically something they
know (like a password) and something they possess (like a mobile device or a
security token), to ensure that only authorized individuals can access the
account.

.. toctree::
   :caption: Two-factor Authentication Methods
   :maxdepth: 1

   two-factor/security-keys
   two-factor/authenticator-app

Enable Recovery Codes
---------------------

.. warning::
   Recovery codes cannot be used on their own, they can only be activated if at
   least one two-factor authentication method is enabled.

Recovery codes are one-time use security codes that can be used by the user if
they lose access to their other two-factor authentication methods.

Recovery codes can only be used as a backup method. If enabled, they will be
automatically generated for the user once they set up their first two-factor
authentication method.

The user will be asked to print our or save generated recovery codes in a safe
place. Once used, a recovery code can never be reused.

Users will also have an option to regenerate their recovery codes at any time,
which invalidates already existing recovery codes and provides them with fresh
tokens.

.. hint::
   After you enable this setting, when the user completes a setup of their first
   two-factor authentication method, they will be presented with a list of
   recovery codes and instructed to save them for later use.

   .. figure:: /images/settings/security/two-factor-recovery-codes-modal.png
      :alt: Recovery Codes Generation Modal Dialog
      :align: center

Enforce the set up of the two-factor authentication
---------------------------------------------------

.. warning::
   You must have at least one two-factor authentication method enabled for this
   setting to take effect.

In case you wish to require your users to set up at least one two-factor
authentication method for their account, you can do this by selecting specific
user roles the requirement applies to in **Enforced for user roles** setting.

.. figure:: /images/settings/security/two-factor-enforced-for-user-roles.png
   :alt: Enforced for User Roles Setting
   :align: center

.. hint::
   After you change this setting, if the user has one of the selected roles on
   their account, they will be forced to set up the two-factor authentication
   upon next sign in or application reload.

   A modal dialog with instructions will be shown, and they will not be able to
   do any work before they set up at least one two-factor method.

   .. figure:: /images/settings/security/two-factor-after-auth-modal.png
      :alt: Modal Dialog for Enforcing Two-Factor Authentication Set Up
      :align: center
