Additional Customization
========================

You can find useful customization options on this page. They mainly refer to
the actual section in the documentation and should give you an idea what could
be useful.
It is recommended to follow the basic configuration of Zammad first, as
described in the :doc:`start-with-zammad` section.

Create Custom Field
-------------------

Zammad allows you to easily add new fields for different objects like tickets
users and groups. You want to have a ticket category field where your agents
can select from pre-defined categories? No problem! You can even set it to
required to have a proper base for statistics.

Head over to the :doc:`object attributes page </system/objects>` where it is
explained in detail.

.. or watch the video about how to create a mandatory category field for tickets.
.. ADD VIDEO HERE.

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

.. The following video shows three examples:

.. - An automatic deletion of old tickets and customers via scheduler
.. - An email rule (postmaster filter) for a specific customer
.. - A trigger to increase priority for tickets when a specific organization member
..   is involved.

.. ADD VIDEO HERE.

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

.. The video shows how to create a text module, including usage of variables and
.. how it works for agents when dealing with a ticket.

.. ADD VIDEO HERE.

Enable Checklist Feature
------------------------

Zammad's :doc:`checklist feature </manage/checklist>` allows you to keep track
of certain tasks in a ticket. The feature allows you to create checklist
templates and link to other tickets as checklist item too. In case an agent
wants to close a ticket which still has open checklist items, a dialog asks
if the agents really wants to close it.

.. See how to set it up, create a template and reference to another ticket in a
.. checklist item in the video.

.. ADD VIDEO HERE.

Add AI Agents
-------------

:doc:`AI agents </ai/ai-agents>` can work on specific routine tasks and relieve
your agents so they can concentrate on more important things. To break the
configuration down:

- Prerequisite: add an AI provider
- Create an AI agent with the type of task you want to delegate
- Call the AI agent in a trigger or scheduler job

.. The video shows an example of how to set up an AI agent which rewrites the
.. title of a ticket. A use case for this is when your customers often tend to use
.. generic titles (like "problem") or you receive tickets from a web form which
.. all have the same title.

.. ADD VIDEO HERE (created).

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
   - Use additional :doc:`AI features </ai/provider>` to relieve your agents so
     they can focus on more important tasks.

- In case you want to bill the support provided, use the
  :doc:`time accounting </manage/time-accounting>` feature
- Add and customize your :doc:`overviews </manage/overviews>` for agents. This
  is useful for team leaders or in case your needs are not covered by the
  default overviews.
- And don't forget to sign up for our
  `cloud services <https://zammad.com/en/pricing>`_ or get in touch with our
  `sales colleagues <https://zammad.com/en/pricing>`_ about a support contract
  for self-hosting Zammad.
