Manage LDAP-Sources
===================

.. hint::

   Please keep in mind all current limitations for the LDAP synchronization.
   This will help to understand scopes of the following operations better.

Add new source
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
      of your LDAP users in Zammad.

      This especially affects inactive users
         As every LDAP behaves differently on which attributes and how they are
         set, Zammad doesn't care about any flags.

         Users that no longer are returned by your LDAP source will
         automatically be set to inactive. Zammad assumes that the user was
         deactivated.

         Users will never be removed automatically!
         If you want to remove obsolete users, use :doc:`/system/data-privacy`.

      Active Directory admins
         Active Directories are quite specific on how to filter for active users
         only - please see the `Microsoft documentation <https://blogs.msdn.microsoft.com/muaddib/2008/10/08/how-to-query-individual-properties-of-the-useraccountcontrol-active-directory-user-property-using-ldap/>`_
         for more information.

   .. danger::

      *Do not* manually write paths of either LDAP attributes or groups.
      If Zammad does not display them, it either cannot find them or you have
      a lot of users that don't have the attributes populated.

      Zammad will always only return attributes that are filled - this reduces
      the returned list of attributes greatly.

   .. figure:: /images/system/integrations/ldap/ldap-add-new-source.png
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

Review or edit existing source
   Clicking on a LDAP source will provide a configuration and mapping overview.

   If needed you can then use the *Change* button to update either the name,
   active state or the whole configuration. If you're changing the whole
   configuration, the dialogue will be identical to the source creation.

   .. note::

      Did your LDAP server change? Different LDAP servers have different
      structures and default attributes. This causes the LDAP synchronization
      to likely fail. Consider removing the affected source and re-add it.

   .. figure:: /images/system/integrations/ldap/ldap-adjust-source.gif
      :alt: Screencast showing the update of the source name.

Re-arrange LDAP source's order
   You can change the synchronization order for each source at any time.
   Zammad will synchronize the sources from top to bottom.

   .. figure:: /images/system/integrations/ldap/ldap-change-source-order.gif
      :alt: Screencasting showing how to change the source order by using
            drag and drop.

Remove a source
   If you no longer need an LDAP source or simply want to start over,
   you can remove it at any time. This will not remove synchronized users,
   synchronized data or permissions.

   .. tip::

      Not sure if you'd need the source later on? Set the source to inactive
      instead of removing it - see *Review or edit existing source* for more.

   .. figure:: /images/system/integrations/ldap/ldap-remove-source.gif
      :alt: Screencast showing how to remove LDAP sources.
