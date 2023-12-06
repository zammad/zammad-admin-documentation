LDAP / Active Directory
=======================

Zammad comes with a powerful LDAP integration that allows you to have a single
source of truth. By this you reduce the number of login credentials your user
has to remember.

.. hint::

   The LDAP source is also a perfect candidate for Zammad's
   :docs:`Kerberos Single Sign-On </appendix/single-sign-on.html>` but also
   works as addition to other :doc:`/settings/security/third-party`.

.. figure:: /images/system/integrations/ldap/ldap-integration-management.png
   :width: 90%
   :align: center
   :alt: Zammands LDAP management page

.. toctree::
   :hidden:

   manage

📝 :doc:`manage`
   Add, modify, remove or re-arrange your LDAP-Sources as needed.

Limitations
-----------

Before you continue, please note the following limitations.

   * Mapping / Synchronizing organizations is not possible

        .. tip::

           You may want to consider using domain based assignments to overcome
           this issue. Learn more on :doc:`/manage/organizations/index`.

   * Zammad's LDAP sync is one way. Editing user settings or permissions may be
     overwritten upon the next sync depending on your configuration.
   * Nested groups are not supported.
   * Synchronizing user avatars from LDAP is not supported.
   * Unlike user filters, group filters cannot be changed.
   * When a user originates from an LDAP server, Zammad will try to verify the
     login credentials against LDAP first - if this fails Zammad will check its
     local database.

        .. warning::

           Users can have local passwords even if they're LDAP users!
           You can learn more about user accounts in general on
           :doc:`/manage/users/index`.

   * When several LDAP sources contain the same user (meaning the same email
     address), the user in question will be updated with every source
     configured. *The last LDAP source will win.*

     This is subject to change with
     `Issue 4109 <https://github.com/zammad/zammad/issues/4109>`_ in the future.
   * Synchronization statistics currently affect *all* configured LDAP sources.
     This also applies for newly added or updated sources.

     This is subject to change with
     `Issue 4108 <https://github.com/zammad/zammad/issues/4108>`_ in the future.
   * Zammad currently has limited fallback server support. You can workaround
     this by providing several sources - however, ensure to have the exact same
     configuration on your fallback.

     This is subject to improve with
     `Issue 4107 <https://github.com/zammad/zammad/issues/4107>`_ in the future.


Recent Logs
-----------

This section holds all requests Zammad handled for all LDAP sources.
These entries can either contain synchronization information or logins
(authentication attempts via Zammad's login interface).

By clicking on any request, Zammad will provide even more information.
The provided information can be useful when something does not work as expected.

.. note::

   Especially a LDAP synchronization can cause many log entries.
   The web interface will always limit the number of shown entries to the last
   50 entries.

.. figure:: /images/system/integrations/ldap/ldap-log-entries.gif
   :alt: Screencast showing LDAP integration log entries and a detail view on
         an entry.
