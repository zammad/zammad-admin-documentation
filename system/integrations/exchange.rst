Exchange
========

With Zammad's Exchange integration, you can easily use existing address books
without having to update more than one source.

Introduction
^^^^^^^^^^^^

There are two ways you can connect to your Exchange service, depending on your
setup:

- Connect to a local Exchange server via :ref:`Basic Authentication <exchange-basic-auth>`
- Connect to a M365 Exchange server by using :ref:`OAuth authentication <exchange-oauth>`

.. tip::

   - You might not want to sync all addresses. The results may not be what you
     expect (because Exchange collects huge amounts of addresses).
   - You might want to sync a central address book of your company. By doing so,
     you can ensure that Zammad only gets the data you want.
   - It is not possible to sync the Global Address List (GAL) of your Exchange
     system with Zammad.

.. warning::

   * **Exchange and LDAP:** The exchange sync can be overruled by Zammad's LDAP
     integration. If you have the same users in both sources, the LDAP version
     will always be Zammad's pick.
   * **One way sync:** the Exchange sync is one way. Exchange => Zammad.
     Changes to your users inside of Zammad might be overwritten by the
     Exchange sync.

To configure the Exchange integration, go to the *System > Integrations >
Exchange* in the admin panel.
Depending on your setup, continue either with the configuration for the basic
authentication in the next section or head over to the
:ref:`OAuth section <exchange-oauth>`.

.. _exchange-basic-auth:

Basic Authentication
^^^^^^^^^^^^^^^^^^^^

In the Exchange integration screen, make sure **Basic Authentication** is
selected in the dropdown. Click on ``Configure`` which opens a dialog where you
have to provide the following information:

- Endpoint
- User
- Password

.. warning::

   If the SSL verification fails while connecting to Exchange, Zammad will ask
   you to turn it off temporarily.

   Please be aware that **turning off SSL verification is a security risk**. It
   should only be used temporarily or for testing purposes. If turned off, there
   is no verification of the certificate, which means that every presented
   certificate will be accepted.

Read on in the :ref:`additional information <exchange-additional-information>`
section.

.. _exchange-oauth:

OAuth Authentication
^^^^^^^^^^^^^^^^^^^^

- Connect Exchange App
- Add Account
- Configure

.. _exchange-additional-information:

Additional Information
^^^^^^^^^^^^^^^^^^^^^^

On the last two steps Zammad will ask you for the address book(s) and your
desired attribute mapping. By default, Zammad only maps email address, first-
and lastname. Technically, you can map any Exchange object to a Zammad user
object (this also works for custom objects!).


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