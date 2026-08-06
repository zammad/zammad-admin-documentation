Knowledge Base Assistant
========================

Zammad's knowledge base assistant helps your agents find existing knowledge
base answers for incoming tickets and — when no suitable answer exists yet —
draft a new one from the ticket content. The feature is configured in
Zammad's admin settings under *AI > Knowledge Base Assistant* and requires
the ``admin.ai_assistance_kb_answer_from_ticket_generation`` permission.
Make sure to configure an :doc:`AI provider <provider>` before activating
the feature. Otherwise, a warning message will tell you to do so.

Activate the feature by turning on the switch.

Feedback and logs are available under the *Feedback and Logs* tab of the
:doc:`AI provider <provider>` settings.

.. figure:: /images/ai/knowledge-base-assistant.png
   :alt: Screenshot shows the Knowledge Base Assistant configuration screen
   :align: center

How It Works
------------

The knowledge base assistant combines two complementary capabilities:

- **Related Knowledge Base Answers.** When an agent opens a ticket, Zammad
  uses vector search to surface existing knowledge base answers whose
  content matches the ticket. Suggestions show up in the *Related
  Knowledge* section of the ticket sidebar and let the agent open the
  answer, copy a link, or send the answer to the customer in one click.
  Up to three suggestions are shown at a time.
- **Knowledge Base Answer from Ticket.** When no suitable answer exists,
  the agent can ask the AI to draft a new knowledge base answer from the
  ticket's content. The draft opens in a side panel where the agent can
  review, edit, and publish it directly into your knowledge base.

Both capabilities require an :doc:`AI provider <provider>`. The related-
answers capability additionally requires the vector database (see the
prerequisites under :ref:`kb-assistant-configuration`).

.. _kb-assistant-configuration:

Configuration
-------------

Knowledge Base Answer from Ticket
   Enable or disable the AI generation of knowledge base answers from
   ticket content. When disabled, the *draft from ticket* action is not
   available to agents; related-answer suggestions are still served as
   long as the vector database is enabled.

- **AI provider.** The feature requires an :doc:`AI provider <provider>`
  configured and enabled. Without one, the settings page shows a warning.
- **Vector database.** Related-answer suggestions rely on Zammad's vector
  database (Elasticsearch as the vector store). The
  ``vectordb_enabled``, ``vectordb_knowledge_base_excluded_category_ids``,
  and ``vectordb_knowledge_base_chunking_strategy`` settings control which
  categories are indexed and how they are split into chunks.
- **Per-feature provider.** This page shows a ``Provider`` button in the
  page header. See :ref:`Configuring Provider per Feature
  <provider:per-feature-provider-config>` for how the button works. The
  provider choice only affects text generation (drafting a new answer);
  vector search always uses the provider that covers the semantic-search
  capability.

.. _kb-assistant-relevance-threshold:

Relevance Score Threshold
-------------------------

Related-answer suggestions are ranked by a relevance score between ``0``
and ``1`` that Elasticsearch computes from the cosine similarity between
the ticket's content and each knowledge base answer:

- A score close to ``1`` means a strong semantic match.
- A score close to ``0.5`` means the answer is unrelated to the ticket.
- A score close to ``0`` means the answer is the opposite of the ticket's
  content.

The default minimum score is ``0.81``. Suggestions below this threshold
are not shown. The threshold is tuned per Zammad release for the default
embedding model; if you change the embedding model on the AI provider, you
may want to re-tune the threshold to match the new model's similarity
distribution.

.. note::

   The relevance threshold is not configurable from the admin UI. If you
   need a different threshold, contact Zammad support or open a feature
   request. This section exists so admins understand why they sometimes
   see no suggestions on a ticket that "obviously" matches a knowledge
   base answer: the embedding model may be mapping the content to a score
   below ``0.81``.

Usage for Agents
----------------

If enabled and the prerequisites above are met, agents see related
knowledge base answers in the *Related Knowledge* section of the ticket
sidebar. When no fitting answer is shown, an action lets the agent draft
a new answer from the ticket's content. The
:user-docs:`knowledge base assistant section in the user documentation
</extras/ai-features.html>` includes additional information for your
agents.
