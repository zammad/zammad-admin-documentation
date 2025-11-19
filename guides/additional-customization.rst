Additional Customization
========================

You can find useful customization options on this page. They mainly refer to
the actual section in the documentation and should give you an idea what could
be useful.
It is recommended to follow the basic configuration of Zammad first, as
described in the :doc:`start-with-zammad` section.

Set Up Automation
-----------------

There are different ways in Zammad how to automate things. Namely
:doc:`triggers </manage/trigger>`, :doc:`schedulers </manage/scheduler>` and
:doc:`macros </manage/macros>`. In simple terms, the execution of a trigger is
action based, the execution of a scheduler job is time based and the execution
of a macro is done manually (without a condition).

By default, there is already one active trigger which sends out auto-reply
emails to customers after they contacted you in a new support case. You can even
define in the channel configuration, to which group specific messages should be
dispatched to and what attributes you want to set for those tickets. You can
find it in the :doc:`Filter </channels/email/filters>` tab in the email based
channels.

The following video shows three examples:

- An automatic deletion of old tickets and customers via scheduler
- An email rule (postmaster filter) for a specific customer
- A trigger to increase priority for tickets when a specific organization member
  is involved.

ADD VIDEO HERE (created).

Add Text Modules
----------------

:doc:`Text modules </manage/text-modules>` are a nice time saver for your agents.
In case they answer similar questions over and over again and/or you want to
unify their answers, add text modules for that. Your agents can then fetch a
text by typing :kbd:`:` :kbd:`:` in the editor, followed by the name or content
of the text module. You can even use variables to automatically include ticket-
or customer specific text like ticket title or customer name. Just type
:kbd:`:` :kbd:`:` in the text module content editor to search for available
variables.

ADD VIDEO HERE (created).

Adjust and Add Overviews
------------------------

TODO

An :doc:`overview </manage/overviews>` is basically a list of tickets with
common attributes. You can edit the built-in overviews and create new ones.
An overview shows matching tickets based on the defined condition.
It allows agents to find and track tickets which they have to work on and/or are
not yet resolved.

ADD VIDEO HERE.

Enable Checklist Feature
------------------------

Zammad's :doc:`checklist feature </manage/checklist>` allows you to keep track
of certain tasks in a ticket. The feature allows you to create checklist
templates and link to other tickets as checklist item too.

ADD VIDEO HERE (created).

Add AI Agents
-------------

TODO.

ADD VIDEO HERE.

Next Steps
----------

Depending on your use case, you might want to adjust more things. Have a look
at the left navigation menu where you can find a detailled explanation of
all features in Zammad.

- To provide more ways for your customers to contact you, add additional
  channels like :doc:`/channels/whatsapp/index` and :doc:`/channels/sms`.
- Leverage productivity by:

   - Automate additional things via :doc:`/manage/trigger`,
     :doc:`/manage/scheduler` and :doc:`/manage/macros`
   - Use :doc:`AI features </ai/provider>` to relieve your agents so they can
     focus on more important tasks.

- In case you want to bill the support provided, use the
  :doc:`time accounting </manage/time-accounting>` feature
- Add your own custom fields for users or tickets where you can add needed
  information. You can do so in the :doc:`object attributes </system/objects>`
  section in Zammad.
- And don't forget to sign up for our
  `cloud services <https://zammad.com/en/pricing>`_ or get in touch with our
  `sales colleagues <https://zammad.com/en/pricing>`_ about a support contract
  for self-hosting Zammad.
