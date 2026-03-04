LDAP / Active Directory
=======================

Zammad comes with a powerful LDAP integration that allows you to have a single
source of truth. Using this integration reduces the number of login credentials
your users have to remember.

.. hint::

   The LDAP source is also a perfect candidate for Zammad's
   :docs:`Kerberos Single Sign-On </appendix/single-sign-on.html>` but also
   works as addition to other :doc:`/settings/security/third-party`.

.. figure:: /images/system/integrations/ldap/ldap-integration-management.png
   :width: 90%
   :align: center
   :alt: Screenshot shows Zammad's LDAP settings.

Limitations
-----------

Before you continue, please note the following limitations:

* Mapping / synchronizing organizations is not possible

  .. tip::
     You may want to consider using domain based assignments to overcome
     this issue. Learn more on :doc:`/manage/organizations/index`.

* Zammad's LDAP sync is one way. Edited user settings or permissions may be
  overwritten upon the next sync depending on your configuration.
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
  configured. The **last** LDAP source will win. See
  `Issue 4109 <https://github.com/zammad/zammad/issues/4109>`_ for more
  details.
* Synchronization statistics currently affect *all* configured LDAP sources.
  This also applies for newly added or updated sources. See
  `Issue 4108 <https://github.com/zammad/zammad/issues/4108>`_ for more
  details.
* Zammad currently has limited fallback server support. You can workaround
  this by providing several sources - however, ensure to have the exact same
  configuration on your fallback. See
  `Issue 4107 <https://github.com/zammad/zammad/issues/4107>`_ for more
  information.

Manage LDAP-Sources
-------------------

Add a New Source
^^^^^^^^^^^^^^^^

Using the *New Source* button allows you to add new LDAP sources to your
installation. You're not limited in the number of sources, however, keep
in mind that many sources will also take more time to synchronize.

You can choose between different encryption types, namely *SSL* and
*STARTTLS* or none of them ("*No SSL*"). If you choose *SSL* or *STARTTLS*,
Zammad will display an additional *SSL verification* option that allows you
to disable the verification, e.g. for self-signed SSL certificates.
You can also tell Zammad to use a different port by
appending ``:<port number>`` to your hostname/IP.

.. figure:: /images/system/integrations/ldap/ldap-new-source-conf.png
   :alt: Screenshot of configuring a new LDAP source with SSL encryption and SSL verification
   :align: center
   :scale: 80 %

   New Source with SSL transport security enabled and certificate verification

.. tip::

   Using a user filter can be a good idea if you only require a small subset
   of your LDAP users in Zammad. Because Active Directories are quite
   specific on how to filter for active users only, please see
   `Microsoft's documentation <https://blogs.msdn.microsoft.com/muaddib/2008/10/08/how-to-query-individual-properties-of-the-useraccountcontrol-active-directory-user-property-using-ldap/>`_
   for more information.

   - As every LDAP behaves differently on which attributes and how they are
     set, Zammad doesn't care about any flags.
   - Users that no longer are returned by your LDAP source will
     automatically be set to inactive. Zammad assumes that the user was
     deactivated.
   - Users will never be removed automatically!
     If you want to remove obsolete users, use :doc:`/system/data-privacy`.

.. danger::

   *Do not* manually write paths of either LDAP attributes or groups.
   If Zammad does not display them, it either cannot find them or you have
   a lot of users that don't have the attributes populated.

   Zammad will always only return attributes that are filled - this reduces
   the returned list of attributes greatly.

.. figure:: /images/system/integrations/ldap/ldap-add-new-source.png
   :scale: 60%
   :align: center
   :alt: Screenshot showing adding of a new sample LDAP source

.. note::

   If your LDAP system doesn't allow anonymous bind, Zammad detects it and
   provides you an editable "Base DN" *text* field instead of a prefilled
   *select* field.

.. hint::

   In case your LDAP groups follow a hierarchy, you can choose to assign
   Zammad roles to all members of nested groups.

   Simply set *Include nested* dropdown to *Yes* and all members of child
   groups will be considered for the role assignment.

   .. figure:: /images/system/integrations/ldap/ldap-add-new-source.png
      :alt: Screenshot showing the nested groups option for the role assignment
      :scale: 60%
      :align: center

Review or Edit Existing Source
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Clicking on a LDAP source will provide a configuration and mapping overview.

If needed you can then use the *Change* button to update either the name,
active state or the whole configuration. If you're changing the whole
configuration, the dialogue will be identical to the source creation.

.. note::

   Did your LDAP server change? Different LDAP servers have different
   structures and default attributes. This causes the LDAP synchronization
   to likely fail. Consider removing the affected source and re-add it.

Change Order of LDAP Sources
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can change the synchronization order for each source at any time.
Zammad will synchronize the sources from top to bottom. To change the order,
simply drag & drop the sources with the ≣ handle.

Remove a Source
^^^^^^^^^^^^^^^

If you no longer need an LDAP source or simply want to start over,
you can remove it at any time. This will not remove synchronized users,
synchronized data or permissions.

If you are not sure if you'd need the source later on, set it to inactive
instead.

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
