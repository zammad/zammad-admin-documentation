Knowledge Base Assistant
========================

Zammad's knowledge base assistant helps your agents find existing knowledge
base answers for incoming tickets and draft a new one from the ticket content.
The feature is configured in Zammad's admin settings under
*AI > Knowledge Base Assistant* and requires the
``admin.ai_assistance_kb_answer_from_ticket_generation`` permission. Make
sure to configure an :doc:`AI provider <provider>` before activating the
feature. Otherwise, a warning message will tell you to do so.

Feedback and logs are available under the *Feedback and Logs* tab of the
:doc:`AI provider <provider>` settings.

.. figure:: /images/ai/knowledge-base-assistant.png
   :alt: Screenshot shows the Knowledge Base Assistant configuration screen
   :align: center

Requirements
------------

- **AI provider.** The feature requires an :doc:`AI provider <provider>`
  configured and enabled. Without one, the settings page shows a warning.
- **Vector database.** Related-answer suggestions rely on the vector
  database (Elasticsearch, used as the vector store). Activate the vector
  database under *Settings > System > Vector DB* and review the related
  settings before enabling the knowledge base assistant:

  - **Vector DB** - global on/off switch for the vector database.
  - **Vector DB Knowledge Base Excluded Categories** - knowledge base
    categories that should **not** be indexed. Sub-categories of an
    excluded category are excluded as well. Leave empty to index every
    category.
  - **Vector DB Knowledge Base Chunking Strategy** - how answers are
    split into chunks before they are indexed (recursive hierarchical
    or sentence-based chunking).

- **Per-feature provider.** This page shows a ``Provider`` button in the
  page header for routing text-generation requests to a specific
  provider. See :ref:`Configuring Provider per Feature
  <provider:per-feature-provider-config>` for how the button works.

Configuration
-------------

The feature combines two complementary capabilities:

- **Related Knowledge Base Answers.** When an agent opens a ticket, Zammad
  surfaces existing knowledge base answers whose content matches the
  ticket. Suggestions show up in the *Related Knowledge* section of the
  ticket sidebar and let the agent open the answer, copy a link, or
  send the answer to the customer in one click.
- **Knowledge Base Answer from Ticket.** When no suitable answer exists,
  the agent can ask the AI to draft a new knowledge base answer from
  the ticket's content. The draft opens in a side panel where the agent
  can review, edit, and publish it directly into your knowledge base.

Activate the feature by turning on the switch.

AI Knowledge Base Answer from Ticket
   Enable or disable the AI generation of knowledge base answers from
   ticket content. When disabled, the *draft from ticket* action is not
   available to agents; related-answer suggestions are still served as
   long as the vector database is enabled.

Relevance Score Threshold
-------------------------

Related-answer suggestions are ranked by a relevance score between ``0``
and ``1`` that Elasticsearch computes from the cosine similarity between
the ticket's content and each knowledge base answer. Suggestions below
the configured threshold are not shown.

The default threshold is ``0.81``. Tune it from this page to match the
embedding model and the quality bar that fits your knowledge base.
Lower values surface more suggestions (and more false positives);
higher values surface only strong matches.

Usage for Agents
----------------

If enabled and the requirements above are met, agents see related
knowledge base answers in the *Related Knowledge* section of the ticket
sidebar. When no fitting answer is shown, an action lets the agent draft
a new answer from the ticket's content. The
:user-docs:`knowledge base assistant section in the user documentation
</extras/ai-features.html>` includes additional information for your
agents.