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
the ticket because they could get overwritten, depending on the AI agent type.

.. figure:: /images/ai/ai-live-user.png
  :alt: Screenshot shows avatar of AI agent in the live user section in ticket detail's bottom bar
  :scale: 60%
  :align: center

  Avatar of an AI agent which shows up in the live user section.

Important Information
---------------------

- To configure AI agents, the ``admin.ai_agent`` permission is required
- The types of AI agents are limited to the available options.
- AI agents don't run on their own. They have to be invoked by a
  :doc:`trigger </manage/trigger>` or a
  :doc:`scheduler job </manage/scheduler>` with the action
  **AI** > **AI Agent**.
- If an AI agent applies changes to a ticket, you can find an entry in the
  ticket history with the name of the AI agent.

Manage AI Agents
----------------

.. figure:: /images/ai/manage-agents.png
  :alt: Screenshot shows AI agents management
  :align: center
  :scale: 80%

Create an AI agent by clicking the **New AI Agent** button in the top right
corner. This opens a wizard where you can choose the type of the agent and
additional settings based on the selected type, see :ref:`ai-agent-types` for
details. The action column with the ︙ button allows you to clone or delete an
AI agent. You can only delete AI agents which are not used in triggers and
schedulers. You can find this information in the two columns in the AI agent
table.

.. _ai-agent-types:

AI Agent Types
--------------

Ticket Group Dispatcher
^^^^^^^^^^^^^^^^^^^^^^^

This AI agent is capable of assigning tickets to different groups. It compares
the content of the ticket in question with your group names in Zammad. If a
suitable group can be found, it selects this group for the ticket. You can use
all of your groups or just specific ones by limiting it for the AI agent in the
configuration wizard.

.. hint:: If you limit the available groups for this agent, make sure to select
  at least two groups.

A useful trigger configuration for such AI agent could look like this:

- Activated by: **Action**
- Action execution: **Selective**
- Conditions for affected objects: **Action** *is* ``created``
- Execute changes on objects: **AI Agent** > Select your AI agent
