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

.. figure:: /images/settings/security/two-factor-recovery-codes-setting.png
   :alt: Enable Recovery Codes Setting
   :align: center

Recovery codes can only be used as a backup method. If enabled, they will be
automatically generated for the user once they set up their initial two-factor
authentication method.

The user will be asked to print out or save the generated recovery codes in a
safe place. Once used, a recovery code cannot be reused.

Users will also have an option to regenerate their recovery codes at any time,
which invalidates already existing recovery codes and provides them with a list
of fresh codes.

.. hint::
   After you enable this setting, when the user completes a setup of their
   initial two-factor authentication method, they will be presented with a list
   of recovery codes and instructed to save them for later use.

   .. figure:: /images/settings/security/two-factor-recovery-codes-modal.png
      :alt: Recovery Codes Generation Modal Dialog
      :align: center

Enforce the Set Up of the Two-Factor Authentication
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

Reset Two-Factor Authentication for a Specific User
---------------------------------------------------

In case an user isn't able to login anymore because of an inaccessible second
factor, you can reset the user's 2FA method.

To do this, go to the user management and search for the relevant user. After
you found the account, click the button in the action column and select
"Manage Two-Factor Authentication":

.. figure:: /images/settings/security/two-factor/user-action-context-menu.png
   :alt: Context menu in action column in user management
   :align: center

After selecting this, you can see a dialog where you can either reset one 2FA
method or reset all of the user's 2FA methods:

.. figure:: /images/settings/security/two-factor/dialog-managing-user-2fa.png
   :alt: Dialog for resetting user's 2FA method
   :align: center

Choose the fitting one, click on the corresponding "Remove ..." button and
confirm your action. The user now has to setup a new 2FA method, depending on
your 2FA configuration.