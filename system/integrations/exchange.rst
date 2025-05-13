Exchange
========

With Zammad's Exchange integration, you can easily use existing address books
without having to update more than one source.

Introduction
^^^^^^^^^^^^

There are two ways you can connect to your Exchange service, depending on your
setup:

- Connect to a local Exchange server via :ref:`basic authentication <exchange-basic-auth>`
- Connect to a M365 Exchange server by using :ref:`OAuth authentication <exchange-oauth>`

.. tip::

   - You might not want to sync all addresses. The results may not be what you
     expect (because Exchange collects huge amounts of addresses).
   - You might want to sync a central address book of your company. By doing so,
     you can ensure that Zammad only gets the data you want.
   - It is not possible to sync the Global Address List (GAL) of your Exchange
     system with Zammad.
   - You can map any Exchange attribute to a Zammad user attribute (even
     :doc:`custom object attributes </../system/objects>`!).

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

Basic Authentication Setup
^^^^^^^^^^^^^^^^^^^^^^^^^^

In the Exchange integration screen, make sure **Basic Authentication** is
selected in the dropdown. Click on **Configure** which opens a dialog where you
have to provide the following information:

- **Endpoint**: The URL/IP of your Exchange server
- **User**: the user you want to use for the sync. Make sure that the user has
  appropriate permissions to the address book / folder you want to sync.
- **Password**: Password of the user.

.. warning::

   If the SSL verification fails while connecting to Exchange, Zammad will ask
   you to turn it off temporarily.

   Please be aware that **turning off SSL verification is a security risk**. It
   should only be used temporarily or for testing purposes. If turned off, there
   is no verification of the certificate, which means that every presented
   certificate will be accepted.

On the last two steps Zammad will ask you for the address book(s) and your
desired attribute mapping. By default, Zammad only maps email address, first-
and lastname.

After pressing Continue, Zammad will check if the configuration is okay.
You can then enable Exchange and start your first sync.

.. _exchange-oauth:

OAuth Setup
^^^^^^^^^^^

For the OAuth option, you first have to configure the connection to your
Exchange app and then add an account you want to use.

Configure App
"""""""""""""

- Create an app in Microsoft's
  `Entra admin center <https://entra.microsoft.com/#home>`_, if not already
  done.
- In addition to the mandatory information, provide a **Redirect URI**. You can
  copy it from Zammad's dialog which opens after clicking the **Connect Exchange
  App** button. Copy the URL from the **Your callback URL** field. Make sure your
  FQDN is correct, otherwise the setup might fail.
- Add the permissions to read address books / folders. The required permissions
  differ depending on your use case (sync users or contacts, from organization
  or only one account, etc.). ``Contacts.Read`` or ``Contacts.Read.Shared`` may
  be a good starting point. Have a look at
  Microsoft's `Graph permission reference <https://learn.microsoft.com/en-us/graph/permissions-reference>`_
  for more information.

Now you need to add some information from the app in Zammad:

- In the **Overview** tab in Entra, you can find the values for
  "Application (client) ID" and "Directory (tenant) ID". Copy and paste both
  into the corresponding fields in Zammad's app config dialog. If you don't have
  it open, click the **Connect Exchange App** button.
- You can create a secret in Entra in the **Certificates & secrets** tab. Select
  **New client secret**, add a name and choose an expiration time. You can find
  the created secret now in the **Value** column (**not** the Secret ID). Copy
  and paste it into the app configuration dialog in Zammad.
- Finally, click on **Submit** in the app configuration dialog in Zammad and
  go on with the next section.

.. figure:: /images/system/integrations/exchange/entra-app-overview.png
  :alt: Screenshot shows app overview in Microsoft's Entra admin center

.. figure:: /images/system/integrations/exchange/entra-app-secret.png
  :alt: Screenshot shows app secret in Microsoft's Entra admin center


Add Account
"""""""""""

After connecting to your app, simply click the **Add Account** button. You are
then redirected to a Microsoft log in page. Log in by providing credentials
of a user with proper permissions and confirm the requested permissions by
clicking the **Accept** button.

This redirects you back to Zammad where you can now configure the address
book(s) and how the users should be mapped.

.. _exchange-address-book-user:

Address Book and User Mapping
"""""""""""""""""""""""""""""

A click on **Configure** opens another configuration dialog. In the first step,
choose one or more folders from which users should get synced to Zammad.

In the second step, select which Exchange attribute should get mapped on
which Zammad attribute. It is recommended to map at least email address, first
and last name.

.. figure:: /images/system/integrations/exchange/mapping.png
  :alt: Screenshot shows Exchange mapping dialog in Zammad
  :scale: 70%
  :align: center

After configuring the mapping, confirm it with a click on the **Continue**
button. Zammad analyzes the configuration and the entries then and presents you
an overview of your configuration. Confirm it by selecting
**Save configuration**.

Additional information
^^^^^^^^^^^^^^^^^^^^^^

The sync runs hourly - if you need to change mappings or the address book(s),
you can change the configuration at any time by using the **Configure app**
button.

After the sync has finished, you can find the new Exchange contacts under
"Users". Zammad integrates them just as normal users.

.. note::

   In some cases you might see unique IDs as "Login" instead of the email
   address. This is normal and doesn't affect the login or email mapping for
   that entry.
