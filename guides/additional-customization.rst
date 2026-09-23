Additional Customization
========================

We recommend following the :doc:`start-with-zammad` guide first. Once the
basic setup is in place, this page points you to customization options that
are commonly useful. Each topic links to the corresponding section of the
documentation.

Create Custom Fields
--------------------

Zammad lets you add new fields for different objects, such as tickets, users,
and groups. For example, add a ticket category field where your agents can
select from pre-defined categories. You can even make the field required to
provide a solid base for statistics. Head over to the
:doc:`object attributes page </system/objects>` for details.

Note: custom fields are available to self-hosted users and to SaaS customers on
a Professional plan or higher.

Add Text Modules
----------------

:doc:`Text modules </manage/text-modules>` are a nice time-saver for your
agents. If your agents answer similar questions over and over, or you want to
unify their answers, add text modules for that. Your agents can insert a
text module by typing :kbd:`:` :kbd:`:` in the editor, followed by the name
or a keyword of the text module. You can also use variables to automatically
include ticket- or customer-specific text such as the ticket title or
customer name. Type :kbd:`:` :kbd:`:` in the text module content editor to
search for available variables.

Use Checklist Feature
---------------------

Zammad's :doc:`checklist feature </manage/checklist>` lets you keep track of
certain tasks in a ticket. The feature allows you to create checklist
templates and add links to other tickets as checklist items. If an agent
tries to close a ticket that still has open checklist items, Zammad asks the
agent to confirm before closing it.

Set Up Automation
-----------------

There are different ways to automate things in Zammad, namely
:doc:`triggers </manage/trigger>`, :doc:`schedulers </manage/scheduler>`,
and :doc:`macros </manage/macros>`. In simple terms, a trigger runs on an
event, a scheduler job runs on a schedule, and a macro is executed manually
without any condition.

By default, there is already one active trigger that sends an auto-reply
email to customers after they contact you in a new support case. Disable it
if you don't want that.

Configure AI Features
---------------------

:doc:`AI agents </ai/ai-agents>` can work on specific routine tasks and
relieve your agents so they can concentrate on more important things. The
:doc:`ticket summary </ai/summary>` helps when dealing with large tickets or
many handovers between agents. The
:doc:`writing assistant </ai/writing-assistant>` helps your agents rephrase
answers in various ways.

No matter which AI feature you want to use, first configure an
:doc:`AI provider </ai/provider>` and then check out the respective AI feature
documentation.

Enable a Knowledge Base
-----------------------

A :doc:`knowledge base </manage/knowledge-base>` lets your customers answer
common questions on their own, before they ever open a ticket. It also
gives your agents a central place for organization and support knowledge, so
they don't have to dig through scattered documents. It allows them to answer
customer requests in a consistent manner.

Note: the knowledge base is available to self-hosted users and to SaaS customers
on a Professional plan or higher.

Next Steps
----------

Depending on your use case, you may want to customize Zammad further. The left
navigation menu covers all settings and features. Just browse through it or
directly jump to a specific feature to learn more.

Some examples of what you could look for next:

- To provide more ways for your customers to contact you, add additional
  channels like :doc:`/channels/whatsapp/index` and :doc:`/channels/sms`.
- To increase automation, create additional :doc:`triggers </manage/trigger>`,
  :doc:`scheduler jobs </manage/scheduler>` and :doc:`macros </manage/macros>`.
- Enable additional AI features to relieve your agents so they can focus on
  more important tasks.
- To bill the support you provide, use the
  :doc:`time accounting </manage/time-accounting>` feature.
- Add and customize your :doc:`overviews </manage/overviews>` for agents.
  This can be useful for team leaders as well as agents who deal with a specific
  subset of tickets.
- Don't forget to sign up for our
  `cloud services <https://zammad.com/en/pricing>`_ or get in touch with our
  `sales team <https://zammad.com/en/company/contact>`_ about a support
  contract for self-hosting Zammad.
