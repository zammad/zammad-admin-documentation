AI Agents
=========

To help your agents focussing on more important tasks, you can create AI agents
which can take over routine tasks. These AI agents are managed in Zammad's
admin settings under *AI > AI Agents*.

Important Information
---------------------

- To configure AI agents, the ``admin.ai_agent`` permission is required
- The types of AI agents are limited to the available options.
- AI agents don't run on their own. They have to be executed by a
  :doc:`trigger </manage/trigger>` or a
  :doc:`scheduler job </manage/scheduler>` by the action **AI** > **AI Agent**.

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
suitable group can be found, it selects this group. You can use all of your
groups or just specific ones by limiting it for the AI agent in the
configuration wizard.

A useful trigger configuration of such an AI agent could look like this:

- Activated by: **Action**
- Action execution: **Selective**
- Conditions for affected objects: **Action** *is* ``created``
- Execute changes on objects: **AI Agent** > Select your AI agent
