Account Setup
=============

Setting up a new Google mail account? Here’s what all the settings do.

☠️ **But first, a word of warning!** The import process does things you might not expect:

.. warning:: 📮 **Zammad will send an auto-reply message
   to every email it imports.** (Including the old ones!)

   Make sure to :doc:`disable this behavior </manage/trigger>`
   prior adding an email account,
   and to turn it back on once all your messages have been imported.

.. hint:: 🗝 **Changing Google accounts passwords**

      Please note that changing the password of an google account causes Google to reset the 
      oAuth Tokens for the account. This means you'll have to re-add your account!

Preparation
-----------

Before you can add an Google mail account, have a look at :doc:`configure-app`. 
This has to be done once per Zammad instance.

Basic
-----

Click on **Add Account** in order to add new gmail accounts to Zammad. 
Google will ask for your consent and your google account you want to use.

.. figure:: /images/channels/google/add-gmail-account-to-zammad.gif
   :alt: Click on Add Account to add your Google account to Zammad
   :scale: 50%
   :align: center

.. note:: 🤓 **Things that don't appear within the wizard, but still are worth mentioning...**

   Organization & Department Name
      The display name used for outgoing email. Adding a new gmail account by default will 
      use Zammads :ref:`product name <zammad-product-name>` extended by ``Support``. (e.g. ``Zammad Helpdesk Support``). 

      Zammad will use Googles alias display names for any other email address other than the 
      accounts main email address.

      .. figure:: /images/channels/email/account-setup-org-dept-name.png
         :alt: Screenshot of customer inbox with email from "Chrispresso Sales"
         :scale: 40%
         :align: center

         A customer’s inbox with an auto-reply from **Chrispresso Sales**.

      If you add :doc:`multiple addresses <secondary-addresses>` to a single account,
      you can define a separate Organization & Department Name for each one.

      Email display names value can be
      :ref:`further customized in the Settings tab <email-settings-sender-format>`.

   Aliases
      If you added aliases to your gmail account, Zammad will automatically create 
      email addresses on the channel for these. This helps you to step in even faster. 

   Destination Group
      The :doc:`group </manage/groups>` that incoming mail will be assigned to.

      Use :doc:`filters </channels/email/filters>`
      for more fine-grained sorting of incoming email.

Account settings
----------------

.. figure:: /images/channels/google/gmail-account-settings.png
   :alt: Finishing account setup
   :align: center



As a final step, Zammad will ask for further options for your account. 
The channel remains **disabled** until you press **Submit**.

.. _gmail-experts-folder:

Folder
   Specify which folder to fetch from, or leave empty to fetch from ``INBOX``.

   If specifying a nested folder, be sure to use the full path.
   (Some systems use different **path separators**;
   *e.g.,* ``Inquiries/Tech-Support`` vs. ``Inquiries.Tech-Support``.
   Contact your email provider or system administrator if you don’t know.)

Keep messages on server
   Specify what happens to your emails after Zammad imports them:

   * ``no`` Zammad deletes all imported messages

   * ``yes`` Zammad marks imported messages as read

     (With this option, Zammad will only import unread messages.
     This means Zammad may miss messages if the mailbox is externally modified.)

   .. note:: 🤔 **Why does Zammad delete messages by default?**

      If you never clean out your inbox,
      it’ll eventually reach its storage limit,
      and your mail server will start **rejecting incoming messages**.
      Most Zammad users never even look at their inbox once it’s set up,
      so they rely on Zammad to keep it clean for them.

      If you choose **yes** here, remember that it’s your responsibility
      to clean out your inbox from time to time
      to keep it below its storage limit.

Troubleshooting
^^^^^^^^^^^^^^^

* :ref:`Is a custom incoming mail folder to blame? <gmail-experts-folder>`
