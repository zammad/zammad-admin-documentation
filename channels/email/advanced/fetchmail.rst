Watch Your Inbox With Fetchmail
===============================

Maybe you want to add emails via Fetchmail or Procmail to Zammad.

To get this to work you need to pipe your emails to rails.

.. note::

   If you installed Zammad through a package manager (rather than from source),
   replace ``rails r`` with ``zammad run rails r`` below.
   To learn more, see :docs:`Administration via Console </admin/console.html>`.

**Command line**::

   su - zammad
   cd /opt/zammad
   cat test/fixtures/mail1.box | rails r 'Channel::Driver::MailStdin.new(trusted: true)'


Fetchmail
---------

**Create .fetchmailrc**::

   su - zammad
   cd ~
   touch .fetchmailrc
   chmod 0600 .fetchmailrc


**vi .fetchmailrc**::

   #
   # zammad fetchmail config
   #
   poll your.mail.server protocol POP3 user USERNAME pass PASSWORD mda "rails r 'Channel::Driver::MailStdin.new(trusted: true)'"


That's it. Emails now will be directly piped into Zammad.



Using Procmail for Advanced Features Like Presorting
----------------------------------------------------

If you want to do some more with your emails, like presorting to a Zammad group
or filtering spam, you can use Procmail.

Fetchmail config looks slightly different.

**vi .fetchmailrc**::

   #
   # zammad fetchmail config
   #
   poll your.mail.server protocol POP3 user USERNAME pass PASSWORD mda /usr/bin/procmail is zammad here


**Create .procmailrc**::

   su - zammad
   cd ~
   touch .procmailrc

**vi .procmailrc**::

   # --
   # Pipe all emails into Zammad
   # --
   PATH=/opt/zammad/bin:/opt/zammad/vendor/bundle/bin:/sbin:/bin:/usr/sbin:/usr/bin:
   SYS_HOME="/home/zammad"
   RAILS_ENV=production
   GEM_PATH=/opt/zammad/vendor/bundle/ruby/2.4.1/
   LOGFILE="$SYS_HOME/procmail.log"
   #VERBOSE="on"

   :0 :
   | rails r 'Channel::Driver::MailStdin.new(trusted: true)'
