AI Agents
=========

To help your agents focussing more on important tasks, you can create AI agents
which can take over routine tasks. These AI agents are managed in Zammad's
admin settings under *AI > AI Agents*.

Important Information
---------------------

- To configure AI agents, the ``admin.ai_agent`` permission is required
- The types of AI agents are limited to the available options.
- An AI agent run has to be executed by a :doc:`trigger </manage/trigger>` or a
  :doc:`scheduler job </manage/scheduler>`.

Manage AI Agents
----------------

Create an AI agent by clicking the **New AI Agent** button in the top right
corner. This opens a wizard where you can choose the type of the agent and
additional settings based on the selected type. See :ref:`ai-agent-types` for
details.



Run AI Agents
-------------

AI agents don't run on their own. You must trigger an AI agent run by creating
a trigger or scheduler. Select the desired objects by defining a
condition and choose **AI Agent** as executable action. Choose the relevant
AI agent by its name. This will execute the AI agent when the condition matches.

.. _ai-agent-types:

AI Agent Types
--------------

Ticket Group Dispatcher
^^^^^^^^^^^^^^^^^^^^^^^

This AI agent is capable of dispatching tickets to different groups. It compares
the content of the ticket in question with your group names in Zammad. If a
suitable group can be found, it selects this group. You can use all of your
groups or just specific ones by limiting it for the AI agent in the
configuration wizard.




