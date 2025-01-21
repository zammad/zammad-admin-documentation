
.. figure:: /images/channels/email/account-setup-archive-import.png
   :alt: Archive Mode dialog during email account setup
   :align: center
   :scale: 100%

   How should old emails be imported?

During the process of setting up an email based channel, Zammad checks if emails
are present in the inbox. If Zammad detects at least one email, the archive
mode dialog is triggered and the archive mode is turned on by default.
This dialog is also present if you edit an existing email based channel.
The archive mode lets you:

- Set an archive **cut-off time**, which means: older emails are imported in
  archive mode, newer ones as standard tickets (including auto-reply messages
  and in state "new").
- Select a **target state** for the archived emails: in most cases you might
  want to import these archived emails in "closed" state. However, if your
  use case is different, you can choose another one which fits for you.

By archiving emails, their creation date and time is preserved and no automatic
actions (e.g. trigger with auto-reply) will take place. If imported
as regular tickets, the date and time is always the time of the import.

To import all emails and convert them into new tickets, just turn the
archive mode toggle off.

.. danger::
   If you turn of the archive mode, Zammad treats **all emails** (even old ones)
   as if they had been sent today. This means senders will receive
   auto-replies and tickets are created with state "new" for each message.

If you want to differentiate even more, you have to do it manually and
disable things like :doc:`triggers </manage/trigger>` before adding an email
account, depending on your use case.

