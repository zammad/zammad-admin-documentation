Base
****

New User Accounts
-----------------

.. container:: cfloat-left

   Activated the `register as a new customer` function on the login page.
   If set to ``no`` only administrators or agents can create new accounts
   manually.

   Default setting: ``yes``

.. container:: cfloat-right

   .. figure:: /images/settings/security/login_new_user_accounts.png
      :alt: Figure showing activated "New User Accounts" setting
      :width: 60%
      :align: center

.. warning:: **😖 This setting may be confusing**
   
   Deactivation of above function **does not** deactivate automatic account
   creation! This means: If a user write e.g. an email to Zammad and has no
   account yet, Zammad will automatically create the account.

   User accounts are a direct dependency of tickets and thus technically
   mandatory.

Lost Password
-------------

.. container:: cfloat-left

   Activates the `lost password` function on the login page.
   If set to ``no`` only administrators may change the users password - users
   may update their own password if they're still logged in and they have the
   required :doc:`permission </manage/roles/user-preferences-permissions>`.

   Default setting: ``yes``

.. container:: cfloat-right

   .. figure:: /images/settings/security/login_lost_password.png
      :alt: Figure showing activated "Lost Password" setting
      :width: 60%
      :align: center

.. tip:: **😖 This function may confuse users**

   With third party authentications - but especially LDAP you may want to
   disable this function. Zammad **will not** change third party login
   passwords and instead set or change the local password!
