.. _prerequisites-gmail:

Prerequisites for GMAIL
***********************

.. Note:: The following steps only affect you if 2-Step Verification. 
  If you want more information regarding this topic, please see `Googles answers to App Passwords <https://support.google.com/accounts/answer/185833>`_.
  
  The above answer page also contains informations about password changes, it's worth a check!


As Google raised the security to access their solutions (just like GMAIL), you'll need a app specific password now. 
Trying to authenticate with your Google password within Zammads E-Mail assistant will result in a failure.

.. figure:: /images/channels/gmail/zammad-gmail-error-with-correct-password.png
  :alt: Google denies password authentication with your Google account password.
  :align: center
  
  Google returns the above error when authenticating with your google account password. It also links an answer page on what you have to do. 
  The solution is to create an app password, below shows how.


To create an App Password, go to google.com and, if not done already, sign in with your Google account. 
When you're logged in, navigate to your `Google account <https://myaccount.google.com/>`_.

Go to "Security" on the left site and click on "App passwords" in the "Signing in to Google" area. 
You may need to re-authenticate and then will be forwarded to an overview of your app passwords.

.. figure:: /images/channels/gmail/zammad-google-account_goto-app-passwords.png
  :alt: Google account security page
  :align: center
  
  App passwords can be added and removed within the security area of your Google account.

On the App passwords page, on the lower part click on the "select app" dropdown and choose "other (custom name)". 
Now enter your desired name - this will help you later to recognize the app passwords. 
If needed, you can -at any time- delete passwords later on. If you're ready to go, press on generate to get your password. 

.. figure:: /images/channels/gmail/zammad-generate-google-app-password.gif
  :alt: Generating an app password for Zammad.
  :align: center
  
  Generating a new app password requires not many steps and improves your account security.

A new dialogue will open which contains the generated password. Just copy it and paste it into your Zammad installation. 
When you're done, don't forget to click on "Done". 

.. Note:: After pressing "Done", you'll need to re-generate a new password if you forget the old one.

.. figure:: /images/channels/gmail/zammad-google-account_generated-password.png
  :alt: Dialogue that shows the generated password
  :align: center
  
  With this password, you're now ready to :ref:`add-a-mail-account`!

