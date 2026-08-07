Knowledge Base Assistant
========================

Zammad's knowledge base assistant helps your agents find existing
knowledge base answers for incoming tickets and draft a new one from the
ticket content. The feature is configured in Zammad's admin settings
under *AI > Knowledge Base Assistant* and requires the
``admin.ai_knowledge_base`` permission. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise,
a warning message will tell you to do so.

Activate the feature by turning on the switch.

The feature combines two complementary capabilities:

- **Related Knowledge Base Answers.** When an agent opens a ticket,
  Zammad surfaces existing knowledge base answers whose content matches
  the ticket. Suggestions show up in the *Related Knowledge* section of
  the ticket sidebar and let the agent open the answer, copy a link, or
  send the answer to the customer in one click.
- **Knowledge Base Answer from Ticket.** When no suitable answer exists,
  the agent can ask the AI to draft a new knowledge base answer from the
  ticket's content. The draft opens in a side panel where the agent can
  review, edit, and publish it directly into your knowledge base.

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
   ticket in the *Related Knowledge* section of the ticket sidebar.

Knowledge Base Answer Generation
   Turn the draft-from-ticket action on or off. When enabled, agents
   can ask the AI to draft a new knowledge base answer from the
   ticket's content. The draft opens in a side panel where the agent
   can review, edit, and publish it directly into your knowledge base.

.. _kb-assistant-relevance-threshold:

Relevance Score Threshold
^^^^^^^^^^^^^^^^^^^^^^^^^

Only knowledge base answers reaching this score are included in the list
of suggestions. The default is ``81 %``. Lower values surface more
suggestions (and more false positives); higher values surface only
strong matches.

.. note::

   The default is defined in
   ``Service::KnowledgeBase::Answer::SimilaritySearch::MINIMUM_SCORE``.
   Adjusting the field on this page changes the threshold Zammad uses at
   runtime; it does not modify source code.

Usage for Agents
----------------

When the feature is enabled, agents see related knowledge base answers
in the *Related Knowledge* section of the ticket sidebar. When no
fitting answer is shown, an action lets the agent draft a new answer
from the ticket's content. The
:user-docs:`knowledge base assistant section in the user documentation
</extras/ai-features.html>` includes additional information for your
agents.
