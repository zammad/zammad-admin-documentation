Knowledge Base Assistant
========================

Zammad's knowledge base assistant helps your agents find existing knowledge base
answers for incoming tickets and draft new ones from the ticket content. The
feature is configured in Zammad's admin settings under
*AI > Knowledge Base Assistant* and requires the ``admin.ai_knowledge_base``
permission. Make sure to configure an :doc:`AI provider <provider>` with the
**Semantic search** capability before activating the feature. Otherwise, Zammad
shows a warning message.

The configuration page only appears when at least one knowledge base is
active in *Manage > Knowledge Base*.

.. figure:: /images/ai/knowledge-base-assistant.png
   :alt: Screenshot shows the Knowledge Base Assistant configuration screen
   :align: center

Configure it based on the explanation below and make sure to turn on the switch
at the top of the page afterwards.

.. _kb-assistant-configuration:

Configuration
-------------

To use a different provider for the knowledge base assistant than the default,
use the :ref:`per-feature provider configuration <per-feature-provider-config>`
via the ``Provider`` button at the top of this page.

The page shows two checkboxes and a configurable relevance score threshold.

Knowledge Base Answer Suggestions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When enabled, Zammad shows existing knowledge base answers whose content
matches the ticket in the **Related Knowledge** section of the ticket
sidebar. Answers are only shown when they are above the configured relevance
threshold.

Agents can open a suggested knowledge base answer directly. If the suggested
answer solves the problem, the agent can link the answer permanently.

.. warning::

   Agents should check the answer before sending the suggested article to the
   customer. Even a high relevance doesn't necessarily mean that it's content
   solves the customer's issue.

Knowledge Base Answer Generation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When enabled, the agent can ask the AI to draft a new knowledge base answer
from the ticket's content. If a related answer is detected, Zammad shows a
preview in a dialog and asks if the agent really wants to trigger the
generation of a new answer. The AI generated answer is linked to the ticket
then.

Important information:

- The knowledge base answer is generated as draft and doesn't get published
  automatically.
- The answer is generated in the default language of your knowledge base.
- The answer includes a note in the content and a tag (``ai-generated``)
  about the AI generation.
- A link to the answer is included in the ticket it was generated from.
- The AI request includes a list of the knowledge base categories for which
  the (human) agent has editor permissions. The AI then chooses one of these
  categories.

.. warning::

   Even though there are instructions to remove personal and customer
   specific information in the response, make sure your agents carefully
   review it before the answer gets used or even published.

.. _kb-assistant-relevance-threshold:

Relevance Score Threshold
^^^^^^^^^^^^^^^^^^^^^^^^^

Only knowledge base answers reaching this score are included in the list of
suggestions. The default is ``86 %``. Lower values show more unrelated
suggestions (and more false positives); higher values show only strong matches.

Usage for Agents
----------------

.. figure:: /images/ai/related-knowledge-ticket-sidebar.png
   :alt: Screenshot shows "Related knowledge" section in the ticket sidebar
   :align: center

When the feature is enabled, agents see related knowledge base answers in the
**Related Knowledge** section of the ticket sidebar. The draft-from-ticket
action is available whenever the agent has the ``knowledge_base.editor``
permission and an :doc:`AI provider <provider>` is configured. The
:user-docs:`knowledge base assistant section in the user documentation </extras/ai-features.html>`
includes additional information for your agents.
