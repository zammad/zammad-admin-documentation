
.. figure:: /images/channels/email/account-setup-archive-import.png
   :alt: Archive Mode dialog during email account setup
   :align: center
   :width: 50%

   How should old emails be imported?

During the import process, Zammad treats **all emails** (even old ones)
by default as if they had been sent today. This means senders will receive
auto-replies and tickets are created with state "new" for each message.

You can adjust this behavior by turning on the archive mode toggle. This dialog
is only shown while adding an account and if there is at least one email in the
inbox or if you edit this channel. With this activated toggle, you can:

- Set an archive **cut-off time**, which means: older emails are imported in
  archive mode, newer ones as standard tickets (including auto-reply messages
  and in state "new").
- Select a **target state** for the archived emails: in most cases you might
  want to import these archived emails in "closed" state. However, if your
  use case is different, you can choose another one which fits for you.

If you want to differentiate even more, you have to do it manually and
disable things like :doc:`triggers </manage/trigger>` before adding an email
account, depending on your use case.

To import all emails and convert them into new tickets, just leave the
archive mode toggle disabled.
