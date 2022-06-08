LDAP / Active Directory
=======================

Zammad comes with a powerful LDAP integration that allows you to have a single
source of truth. By this you reduce the number of login credentials your user
has to remember.

.. hint::

   The LDAP source is also a perfect candidate for Zammads
   `Kerberos Single Sign-On`_ but also works as addition to other
   :doc:`/settings/security/third-party`.

.. _Kerberos Single Sign-On:
   https://docs.zammad.org/en/latest/appendix/single-sign-on.html

.. FIGURE

Limitations
-----------

Before you continue, please note the following limitations.

   * Mapping / Synchronizing organizations is not possible

        .. tip::

           You may want to consider using domain based assignments to overcome
           this issue. Learn more on :doc:`/manage/organizations/index`.

   * Zammads LDAP sync is one way. Editing user settings or permissions may be
     overwritten upon the next sync depending on your configuration.
   * Nested groups are not supported.
   * Synchronizing user avatars from LDAP is not supported.
   * When a user originates from an LDAP server, Zammad will try to verify the
     login credentials against LDAP first - if this fails Zammad will check its
     local database.

        .. warning::

           Users can have local passwords even if they're LDAP users!
           You can learn more about user accounts in general on
           :doc:`/manage/users/index`.

   * When using several LDAP sources containing users with email addresses
     on different sources, the user in question will be updated with every
     source configured. *The last LDAP source will win.*

     This is subject to change with `Issue 4109`_ in the future.
   * Synchronization statistics currently affect *all* configured LDAP sources.
     This also applies for newly added or updated sources.

     This is subject to change with `Issue 4108`_ in the future.
   * Zammad currently has limited fallback server support. You can workaround
     this by providing several sources - however, ensure to have the exact same
     configuration on your fallback.

     This is subject to improve with `Issue 4107`_ in the future.

.. _Issue 4107: https://github.com/zammad/zammad/issues/4107
.. _Issue 4108: https://github.com/zammad/zammad/issues/4108
.. _Issue 4109: https://github.com/zammad/zammad/issues/4109



--------------------------------------------------------------------------------


To configure LDAP integration, simply go to System -> Integrations -> LDAP in the admin panel.
Press "change" and follow the wizard for adding the needed LDAP information to Zammad.
On the last step Zammad will ask you for your wanted LDAP mapping. By default, Zammad only Maps Login, First- and Lastname.
Technically you can map any LDAP object to a Zammad user object (this also works for Custom Objects!).

On this wizard step, you can also define the wanted LDAP-group-to-Zammad-role mapping.

If needed, you can also change the user filter for your LDAP query. The option "Users without assigned LDAP groups" will by default assign the *customer* role
(default sign-up role) to any LDAP user, that doesn't match to the above role mapping. After pressing Continue, Zammad will check if the configuration is okay.
You can then enable LDAP and start your first sync. The sync will then run hourly - if you need to change mappings, you can change the configuration at any time.

.. image:: /images/system/integrations/ldap/1.jpg

.. note:: You can use user filters to limit the search results Zammad gets. Also, you can hide deactivated Active Directory accounts (the users will be set to inactive within Zammad).
   You can find further information for Active Directory Filters at the Website from Microsoft_.

.. _Microsoft: https://blogs.msdn.microsoft.com/muaddib/2008/10/08/how-to-query-individual-properties-of-the-useraccountcontrol-active-directory-user-property-using-ldap/

After the sync has finished, you can find the new LDAP users under "Users". Zammad integrates them just normal users, the difference is the login name.

.. image:: /images/system/integrations/ldap/2.jpg
