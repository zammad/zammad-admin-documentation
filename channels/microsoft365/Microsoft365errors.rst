Microsoft common errors
=======================

**The documentation is your friend** 😊:

https://admin-docs.zammad.org/en/latest/channels/microsoft365/index.html

Incorrect client ID
-------------------

**#Error message:**

AADSTS00016: Application with identifier 'xxxxxxxx' was not found in the directory 'MSFT'. 
This can happen if the application has not been installed by the administrator of the tenant or consented to by any user in the tenant. 
You may have sent your authentication request to the wrong tenant. 

.. figure:: Dokumentation\build\_static\image\Micro1.png
  :alt: Error message
  :scale: 90%
  :align: center

In this case, we want to compare whether the client ID created in Zammad matches that in Azure for the Azure APP.

The Client ID can be found in Zammad under Admin > Channels > Microsoft 365 > APP Configuration. 
Here in our documentation, there is a GIF where to find the Client ID in Azure and where to copy it to in Zammad:

https://admin-docs.zammad.org/en/latest/channels/microsoft365/accounts.html

Wrong or expired client secret
------------------------------

**#Error message:**

500: We're sorry, but something went wrong. 

**(image)**
	  
This error occurs when the client uses an incorrect or expired client secret.

**Important notice:**

We never ask the client for the client secret as this can potentially be a security risk. 
We ask the customer to create a new client secret and copy the value and not the ID to Zammad.

There is also a GIF for this in our documentation:

https://admin-docs.zammad.org/en/latest/channels/microsoft365/accounts.html

Wrong tenant
------------

**#Error message:**

AADSTS0023: Specified tenant identifier 'xxxxxxxx' is neither a valid DNS name, nor a valid external domain.

**(image)**
	  
If a wrong tennant is used in Zammad, or the email account is not a member of the tennant created in Zammad, this error message occurs.

In this case we would like to check if the tennant is entered correctly in Zammad, or remove the tennant complete.

**Important notice:**

Once Tennant is completely removed, all email accounts can be created in Zammad regardless of which Tennant the email account is a member of.

Request admin consent
---------------------

**Notice:**

approval required

**(image)**
	  
This message occurs when the admin tries to create an email account in Zammad that has not yet received approval from the Azure Global Admin.

In our documentation step-by-step instructions can be found on how to request admin consent from Zammad.

https://admin-docs.zammad.org/en/latest/channels/microsoft365/accounts/account-setup.html

**A notice:**

The request for the admin consent can be bypassed by assigning the admin consent in Azure to the APP.

Home > APP Registration > Manage > API Permission > Grant admin consent for "MSFT".

Request admin consent
---------------------

**#Report:**

approval required

**(image)**
	  
This message occurs when the admin tries to create an email account in Zammad that has not yet received approval from the Azure Global Admin.

In our documentation step-by-step instructions can be found on how to request admin consent from Zammad.

https://admin-docs.zammad.org/en/latest/channels/microsoft365/accounts/account-setup.html

**A notice:**

The request for the admin consent can be bypassed by assigning the admin consent in Azure to the APP.

Home > APP Registration > Manage > API Permission > Grant admin consent for "MSFT".

Missing permissions for the Azure user
--------------------------------------

**#Error message:**

Can't use Chanel:Driver::SMTPAuthentificationError:
Net::SMTPAuthentificationErr

**(image)**
	  
or

**(image)**
	  
This error occurs when the admin wants to create an email account in Zammad whose user does not have permission for SMTP authentication to the mail server.

**Private email account**

In this case, the admin must grant the SMTP authentication permission to the user of the inbox.

Permission is provided at https://admin.microsoft.com

Users > Active Users > click Users > Email > Manage Email APPs
Add SMTP authentication permission here.

**(image)** 

**Shared Inbox**

This isn't a Zammad problem, so we can only help to a limited extent here.
by enabling SmtpClientAuthenticationDisabled in Azure Shell.

# if not installed
Import-Module ExchangeOnlineManagement

# Log in to Exchange using Powershell 
Connect-ExchangeOnline

#Switching on the SMTP authentication for a mailbox - also possible with a shared mailbox
Set-CASMailbox -Identity
markusshared@mailbox.net
-SmtpClientAuthenticationDisabled $false  
