LDAP / Active Directory
=======================

With our LDAP integration, you can easily use existing authentication systems without having to update more than one source.
Also, e.g. password policies are ensured by your LDAP source - Zammad will always contact your LDAP server for authentications.

.. note:: The LDAP sync is one way: LDAP => Zammad. Changes to your users inside of Zammad might be overwritten by the LDAP Sync.


To configure LDAP integration, simply go to System -> Integrations -> LDAP in the admin panel.
Press "change" and follow the wizard for adding the needed LDAP information to Zammad.
On the last step Zammad will ask you for your wanted LDAP mapping. By default, Zammad only Maps Login, First- and Lastname.
Technically you can map any LDAP object to a Zammad user object (this also works for Custom Objects!).

On this wizard step, you can also define the wanted LDAP-group-to-Zammad-role mapping.

.. note:: Please note that nested groups are currently not supported by Zammad.

If needed, you can also change the user filter for your LDAP query. The option "Users without assigned LDAP groups" will by default assign the *customer* role
(default sign-up role) to any LDAP user, that doesn't match to the above role mapping. After pressing Continue, Zammad will check if the configuration is okay.
You can then enable LDAP and start your first sync. The sync will then run hourly - if you need to change mappings, you can change the configuration at any time.

.. image:: /images/system/integrations/ldap/1.jpg

.. note:: You can use user filters to limit the search results Zammad gets. Also, you can hide deactivated Active Directory accounts (the users will be set to inactive within Zammad).
   You can find further information for Active Directory Filters at the Website from Microsoft_.

.. _Microsoft: https://blogs.msdn.microsoft.com/muaddib/2008/10/08/how-to-query-individual-properties-of-the-useraccountcontrol-active-directory-user-property-using-ldap/

After the sync has finished, you can find the new LDAP users under "Users". Zammad integrates them just normal users, the difference is the login name.

.. image:: /images/system/integrations/ldap/2.jpg
