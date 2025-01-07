Common errors
=============

Here you can find some common errors in M365 context. Also have a look at
the general :doc:`M365 documentation </channels/microsoft365/index>` for the
configuration.

Incorrect Client ID
-------------------

**Error message:** AADSTS00016: Application with identifier
'xxxxxxxx' was not found in the directory 'MSFT'. This can happen if the
application has not been installed by the administrator of the tenant or
consented to by any user in the tenant. You may have sent your authentication
request to the wrong tenant.

.. figure:: /images/channels/microsoft365/errors/wrong-id.png
  :alt: Error message
  :scale: 90%
  :align: center

In this case, please compare whether the client ID created in Zammad
matches that in Azure for the Azure App.

The Client ID can be found in Zammad under
Settings > Channels > Microsoft 365 > App Configuration.
See :doc:`here </channels/microsoft365/m365-imap/accounts>` how to find the client
ID in Azure and where to copy it to in Zammad.

Wrong or Expired Client Secret
------------------------------

**Error message:** 500: We're sorry, but something went wrong.

.. figure:: /images/channels/microsoft365/errors/zammad_error_500.png
  :alt: Error message
  :scale: 90%
  :align: center

This error occurs when the client uses an incorrect or expired client secret.

.. warning:: **Important notice:**
  We never ask the client for the client secret as this can potentially be a
  security risk. We ask the customer to create a new client secret and copy the
  value and not the ID to Zammad.

See :doc:`here </channels/microsoft365/m365-imap/accounts>` for more information.

Wrong Tenant
------------

**Error message:** AADSTS0023: Specified tenant identifier 'xxxxxxxx' is
neither a valid DNS name, nor a valid external domain.

.. figure:: /images/channels/microsoft365/errors/wrong-tenant.png
  :alt: Error message
  :scale: 90%
  :align: center

If a wrong tenant is used in Zammad or the email account is not a member of
the tenant created in Zammad, this error message occurs.

In this case, please check if the tenant is entered correctly in
Zammad, or remove the tenant completely.

.. warning:: **Important notice:**
  Once the tenant is completely removed, all email accounts can be created in
  Zammad regardless of which tenant the email account is a member of.

Request Admin Consent
---------------------

**Prompt:** approval required

.. figure:: /images/channels/microsoft365/errors/admin-request.png
  :alt: Error message
  :scale: 90%
  :align: center

This message occurs when the admin tries to create an email account in Zammad
that has not yet received approval from the Azure global admin.

In our documentation,
:doc:`step-by-step instructions </channels/microsoft365/m365-imap/accounts/account-setup>`
can be found on how to request admin consent from Zammad.

.. note::
  The request for the admin consent can be bypassed by assigning the admin
  consent in Azure to the App.

  Home > App Registration > Manage > API Permission > Grant admin consent for
  "MSFT".

Missing Permissions for the Azure User
--------------------------------------

**Error message:** Can't use Channel:Driver::SMTPAuthentificationError:Net::SMTPAuthentificationError

.. figure:: /images/channels/microsoft365/errors/smtp-error-settings.png
  :alt: Error message
  :scale: 60%
  :align: center

  Error message in the M365 channel settings

or

.. figure:: /images/channels/microsoft365/errors/smtp-error-ticket.png
  :alt: Error message
  :scale: 90%
  :align: center

  Error message in the ticket

This error occurs when the admin wants to create an email account in Zammad
whose user does not have permission for SMTP authentication to the mail server.
Please check the following two most common problems in this case.


Private Email Account
^^^^^^^^^^^^^^^^^^^^^

If it is a private email account, the admin must grant the SMTP authentication
permission to the user of the inbox. The permission is provided at
https://admin.microsoft.com.

Add the SMTP authentication permission under
Users > Active Users > click on the User > Email > Manage Email Apps.

.. figure:: /images/channels/microsoft365/errors/mail-permissions.png
  :alt: Error message
  :scale: 90%
  :align: center


Shared Inbox
^^^^^^^^^^^^

If it is a shared inbox, you can try to enable the SMTP Authentication
(``SmtpClientAuthenticationDisabled``) in the Azure shell. This isn't a Zammad
problem, so we can only help to a limited extent here.

To enable the SMTP Authentication, use the following commands:

If not installed::

   Import-Module ExchangeOnlineManagement

Log in to Exchange using Powershell::

   Connect-ExchangeOnline

Switching on the SMTP authentication for a mailbox - also possible with a
shared mailbox::

   Set-CASMailbox -Identity name@domain.net -SmtpClientAuthenticationDisabled $false


Retrieval of Email Failed
-------------------------

**Error message:** Retrieval using the IMAP4 protocol failed for the following
message: [...]

This can be caused by Microsoft Defender for Office 365 when Zammad fetches an
email while its attachment is still being checked.

To avoid this, you should change the
`Safe Attachments unknown malware response <https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about?view=o365-worldwide#safe-attachments-policy-settings>`_
from "Dynamic Delivery" to something else fitting your needs (e.g. "Block") for
your Office 365 instance.


Authentication Unsuccessful
---------------------------

**Error message:** 535 5.7.3 Authentication unsuccessful

.. note:: This error message can have different reasons. See description below
  for one of them.

Microsoft allows sign-in and authentication using the primary email address.
While this works for fetching emails, SMTP authentication may not work in this
case.

Try to delete the MS account and recreate it using your username.
In Zammad, manually change the email address to the username. Then you should
be able to send and receive emails again.
