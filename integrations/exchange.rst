Exchange
========

With our Exchange-Integration, you can easily use existing address books without having to update more than one source.

.. note:: The Exchange-Sync is one way: Exchange => Zammad. Changes to your users inside of Zammad might be overwritten by the Exchange Sync.


To configure Exchange-Integration, simply go to the Admin-Settings -> System -> Integrations -> Exchange.
Press "change" and follow the wizard for adding the needed Exchange-Information to Zammad.
On the last two step Zammad will ask you for the address book(s) and your wanted Attribute-Mapping. By default, Zammad only Maps E-Mail-Address, First- and Lastname.
Technically you can map any Exchange object to a Zammad User-Object (this also works for Custom Objects!).

.. note:: Please refrain from syncing all addresses, as the results may not be what you expect (Exchange collects huge amounts of addresses).
   A central address book of your company to sync makes more sense, as you can ensure that Zammad gets only the data you need and want.

After pressing Continue, Zammad will check if the configuration is okay.  You can then enable LDAP and start your first sync.
The sync will then run hourly - if you need to change mappings or the address book(s), you can change the configuration at any time.

.. image:: /images/system/exchange-1.jpg

After the sync has finished, you can find the new Exchange-Contacts under "Users". Zammad integrates them just normal users.

.. note:: In some cases you might see unique IDs as "Login" instead of the E-Mail-Address. This is normal and doesn't affect the login or E-Mail mapping for that entry.

.. image:: /images/system/exchange-2.jpg
