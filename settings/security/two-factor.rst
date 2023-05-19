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

   two-factor/authenticator-app

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
