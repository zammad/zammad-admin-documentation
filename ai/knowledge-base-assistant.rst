Knowledge Base Assistant
========================

Zammad's knowledge base assistant helps your agents find existing
knowledge base answers for incoming tickets and draft a new one from the
ticket content. The feature is configured in Zammad's admin settings
under *AI > Knowledge Base Assistant* and requires the
``admin.ai_knowledge_base`` permission. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise,
a warning message will tell you to do so.

The configuration page only appears when at least one knowledge base is
active in *Manage > Knowledge Base*. Without an active knowledge base,
the AI tools have nothing to search or draft from.

Activate the feature by turning on the switch.

.. figure:: /images/ai/knowledge-base-assistant.png
   :alt: Screenshot shows the Knowledge Base Assistant configuration screen
   :align: center

.. _kb-assistant-configuration:

Configuration
-------------

The page exposes two capability toggles and a relevance score threshold.

Knowledge Base Answer Suggestions
   Turn the related-answer suggestions on or off. When enabled, Zammad
   surfaces existing knowledge base answers whose content matches the
   ticket in the *Related Knowledge* section of the ticket sidebar, where
   the agent can open the answer, copy a link, or send it to the customer
   in one click.

Knowledge Base Answer Generation
   Turn the draft-from-ticket action on or off. When enabled, the agent
   can ask the AI to draft a new knowledge base answer from the ticket's
   content. The draft opens in a side panel where the agent can review,
   edit, and publish it directly into your knowledge base.

.. _kb-assistant-relevance-threshold:

Relevance Score Threshold
   Only knowledge base answers reaching this score are included in the
   list of suggestions. The default is ``81 %``. Lower values surface
   more suggestions (and more false positives); higher values surface
   only strong matches. Values near ``0 %`` indicate content that is the
   opposite of the ticket's, so a very low threshold can surface
   irrelevant answers.

Usage for Agents
----------------

**When the feature is enabled**, agents see related knowledge base
answers in the **Related Knowledge** section of the ticket sidebar. The
draft-from-ticket action is available whenever the agent has the
``knowledge_base.editor`` permission and an :doc:`AI provider
<provider>` is configured. The
:user-docs:`knowledge base assistant section in the user documentation
</extras/ai-features.html>` includes additional information for your
agents.
