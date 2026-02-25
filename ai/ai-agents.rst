AI Agents
=========

To help your agents focusing on more important tasks, you can create AI agents
which can take over routine tasks. These AI agents are managed in Zammad's
admin settings under *AI > AI Agents*. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise, a
warning message will tell you to do so.

While an AI agent works on a ticket, an avatar is displayed in the
live user section in the bottom bar of the ticket detail view, see example
below. In such a short period of time, the agents should not apply changes to
the ticket because they could get overwritten.

.. figure:: /images/ai/ai-live-user.png
   :alt: Screenshot shows avatar of AI agent in the live user section in ticket detail's bottom bar
   :align: center

   Avatar of an AI agent which shows up in the live user section.

Important Information
---------------------

- To configure AI agents, the ``admin.ai_agent`` permission is required
- AI agents don't run on their own. They have to be invoked by a
  :doc:`trigger </manage/trigger>`, a :doc:`scheduler job </manage/scheduler>`
  or a :doc:`macro </manage/macros>` with the action **AI** > **AI Agent**.
- By creating a macro with an AI agent action, your agents can run it on demand.
- If an AI agent applies changes to a ticket, you can find an entry in the
  ticket history with the name of the AI agent.

Manage AI Agents
----------------

.. figure:: /images/ai/manage-agents.png
   :alt: Screenshot shows AI agents management
   :align: center

Create an AI agent by clicking the **New AI Agent** button in the top right
corner. This opens a wizard where you can choose the type of the agent and
additional settings based on the selected type, see :ref:`ai-agent-types` for
details. The action column with the ︙ button allows you to clone or delete an
AI agent. You can only delete AI agents which are not used in triggers,
scheduler jobs and macros. Check the **Used in** column and hover over an
entry to see where an AI agent is used.

.. _ai-agent-types:

AI Agent Types
--------------

Define your AI agents and use them afterwards in triggers, scheduler jobs or
macros. An example for a trigger configuration could look like this:

- Activated by: **Action**
- Action execution: **Selective**
- Conditions for affected objects: **Action** *is* ``created``
- Execute changes on objects: **AI Agent** > Select your AI agent

.. hint:: Depending on the agent type, you can limit the available options for
   the AI agents. If you do so, make sure to select at least two options the
   agent can choose from.

Ticket Categorizer
^^^^^^^^^^^^^^^^^^

This AI agent is capable of assigning categories to tickets. Because there is
no built in category field in Zammad, you first have to create a
:doc:`custom ticket attribute </system/objects>` in which you want to track the
ticket's category. The field type must be one of the select types.

The ticket categorizer AI agent uses the content of all articles and the title
to compare it with your category names. You can limit from which categories the
AI agent can choose from and define if multiple values are possible (if
using a multi-select field type) in the wizard. In case you limit the
categories, you can also provide a description for each category the AI agent
can choose from.

Ticket Group Dispatcher
^^^^^^^^^^^^^^^^^^^^^^^

This AI agent is capable of assigning tickets to different groups. It compares
the content of the ticket in question with your group names in Zammad. If a
suitable group can be found, it selects this group for the ticket. You can use
all of your groups or just specific ones by limiting it for the AI agent in the
configuration wizard.


Ticket Prioritizer
^^^^^^^^^^^^^^^^^^

This AI agent is capable of setting a ticket priority based on the title of the
ticket and the content of the last article. You can choose to use all priorities
or limit them to specific ones. In case you limit the priorities, you can also
provide a description for each priority the AI agent can choose from.

Ticket Title Rewriter
^^^^^^^^^^^^^^^^^^^^^

This AI agent is capable of rephrasing the ticket title based on the content of
the last article. The title is not considered by the agent and gets completely
rewritten. This can be useful if your customers often send requests with
unclear subjects or if you have a specific channel which only creates tickets
with generic titles (e.g. from a web form).
