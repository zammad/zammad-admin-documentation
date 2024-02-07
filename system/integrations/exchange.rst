Exchange
========

With Zammad's Exchange integration, you can easily use existing address books
without having to update more than one source.

However, you should refrain from syncing all addresses, as the results may not
be what you expect (Exchange collects huge amounts of addresses).
A central address book of your company to sync makes more sense, as you can
ensure that Zammad gets only the data you need and want.

.. warning::

   * **Exchange and LDAP:** The exchange sync can be overruled by Zammad's LDAP
     integration. If you have the same users in both sources, the LDAP version
     will always be Zammad's pick.
   * **One way sync:** the Exchange sync is one way. Exchange => Zammad.
     Changes to your users inside of Zammad might be overwritten by the
     Exchange sync.


To configure Exchange integration, simply go to the System > Integrations >
Exchange in the admin panel.
Press "change" and follow the wizard for adding the needed Exchange information
to Zammad.
On the last two steps Zammad will ask you for the address book(s) and your
desired attribute mapping. By default, Zammad only maps email address, first-
and lastname. Technically, you can map any Exchange object to a Zammad user
object (this also works for custom objects!).

.. warning::

   If the SSL verification fails while connecting to Exchange, Zammad will ask
   you to turn it off temporarily.

   Please be aware that **turning off SSL verification is a security risk**. It
   should only be used temporarily or for testing purposes. If turned off, there
   is no verification of the certificate, which means that every presented
   certificate will be accepted.

After pressing Continue, Zammad will check if the configuration is okay.
You can then enable Exchange and start your first sync.
The sync will then run hourly - if you need to change mappings or the address
book(s), you can change the configuration at any time.

.. image:: /images/system/integrations/exchange/1.jpg

After the sync has finished, you can find the new Exchange contacts under
"Users". Zammad integrates them just as normal users.

.. note::

   In some cases you might see unique IDs as "Login" instead of the email
   address. This is normal and doesn't affect the login or email mapping for
   that entry.

.. image:: /images/system/integrations/exchange/2.jpg
