Knowledge Base Assistant
========================

Zammad's knowledge base assistant helps your agents find existing knowledge
base answers for incoming tickets and draft a new one from the ticket
content. The feature is configured in Zammad's admin settings under
*AI > Knowledge Base Assistant* and requires the
``admin.ai_knowledge_base`` permission. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise, a
warning message will tell you to do so.

Feedback and logs are available under the *Feedback and Logs* tab of the
:doc:`AI provider <provider>` settings.

.. figure:: /images/ai/knowledge-base-assistant.png
   :alt: Screenshot shows the Knowledge Base Assistant configuration screen
   :align: center

.. _kb-assistant-configuration:

Configuration
-------------

The feature combines two complementary capabilities:

- **Related Knowledge Base Answers.** When an agent opens a ticket, Zammad
  surfaces existing knowledge base answers whose content matches the
  ticket. Suggestions show up in the *Related Knowledge* section of the
  ticket sidebar and let the agent open the answer, copy a link, or send
  the answer to the customer in one click.
- **Knowledge Base Answer from Ticket.** When no suitable answer exists,
  the agent can ask the AI to draft a new knowledge base answer from the
  ticket's content. The draft opens in a side panel where the agent can
  review, edit, and publish it directly into your knowledge base.

Activate the feature by turning on the switch.

Knowledge Base Answer Generation
   Enable or disable the AI generation of knowledge base answers from
   ticket content. When disabled, the *draft from ticket* action is not
   available to agents; related-answer suggestions are still served.

.. _kb-assistant-relevance-threshold:

Relevance Score Threshold
-------------------------

Related-answer suggestions are ranked by a relevance score. The score
ranges between ``0`` and ``1``: a value around ``0.5`` indicates an
unrelated answer, and a value of ``0`` indicates an answer whose content
is opposite to the ticket's. The page displays the threshold as a
percentage (``0`` to ``100``); the underlying value is the same number
divided by ``100``. Only answers reaching the configured threshold are
included in the list of suggestions.

The default threshold is ``81`` (``0.81`` in the underlying scale). Tune
it from this page to match the embedding model and the quality bar that
fits your knowledge base. Lower values surface more suggestions (and
more false positives); higher values surface only strong matches.

.. note::

   The default value (``0.81``) is defined in
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
