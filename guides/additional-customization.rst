Additional Customization
========================

Once the basic setup is in place, this page points you at customization
options that are commonly useful. Each topic links to the corresponding
section of the documentation.

It is recommended to follow the :doc:`start-with-zammad` section first.

Create Custom Fields
--------------------

Zammad lets you add new fields for different objects, such as tickets, users,
and groups. For example, add a ticket category field where your agents can
select from pre-defined categories. You can even make the field required to
provide a solid base for statistics.

Head over to the :doc:`object attributes page </system/objects>` for
details.

Add Text Modules
----------------

:doc:`Text modules </manage/text-modules>` are a nice time saver for your
agents. If your agents answer similar questions over and over, or you want to
unify their answers, add text modules for that. Your agents can fetch a text
by typing :kbd:`:` :kbd:`:` in the editor, followed by the name or content
of the text module. You can also use variables to automatically include
ticket- or customer-specific text such as the ticket title or customer name.
Type :kbd:`:` :kbd:`:` in the text module content editor to search for
available variables.

Enable a Knowledge Base
-----------------------

A :doc:`knowledge base </manage/knowledge-base>` lets your customers solve
common questions on their own, before they ever open a ticket. It also
gives your agents a central place for company and support knowledge, so
they don't have to dig through scattered documents or recreate answers
from scratch. With shared articles, the wording stays consistent across
agents and channels.

Publish your first articles once you have a stable set of common questions
and answers, then keep them in sync with your products and policies.

Enable Checklist Feature
------------------------

Zammad's :doc:`checklist feature </manage/checklist>` lets you keep track of
certain tasks in a ticket. The feature allows you to create checklist
templates and link to other tickets as checklist items. If an agent tries to
close a ticket that still has open checklist items, Zammad asks the agent to
confirm before closing it.

Set Up Automation
-----------------

There are different ways to automate things in Zammad, namely
:doc:`triggers </manage/trigger>`, :doc:`schedulers </manage/scheduler>`,
and :doc:`macros </manage/macros>`. In simple terms, a trigger runs on an
event, a scheduler job runs on a schedule, and a macro is executed manually
without any condition.

By default, there is already one active trigger that sends an auto-reply
email to customers after they contact you in a new support case. In the
channel configuration you can also define which group specific messages are
dispatched to and which attributes you want to set for those tickets. See
the :doc:`Filter </channels/email/filters>` tab in the email-based channels.

Add AI Agents
-------------

:doc:`AI agents </ai/ai-agents>` can work on specific routine tasks and
relieve your agents so they can concentrate on more important things. The
configuration breaks down to:

- Prerequisite: add an AI provider
- Create an AI agent with the type of task you want to delegate
- Call the AI agent in a trigger or scheduler job

Next Steps
----------

Depending on your use case, you may want to adjust more things. The left
navigation menu provides a detailed explanation of all Zammad features.

- To provide more ways for your customers to contact you, add additional
  channels like :doc:`/channels/whatsapp/index` and :doc:`/channels/sms`.
- Leverage productivity by:

  - Automating additional things via :doc:`/manage/trigger`,
    :doc:`/manage/scheduler`, and :doc:`/manage/macros`.
  - Using additional :doc:`AI features </ai/provider>` to relieve your
    agents so they can focus on more important tasks.

- If you want to bill the support provided, use the
  :doc:`time accounting </manage/time-accounting>` feature.
- Add and customize your :doc:`overviews </manage/overviews>` for agents.
  This is useful for team leaders, or to extend the default overviews.
- And don't forget to sign up for our
  `cloud services <https://zammad.com/en/pricing>`_ or get in touch with our
  `sales colleagues <https://zammad.com/en/company/contact>`_ about a
  support contract for self-hosting Zammad.
