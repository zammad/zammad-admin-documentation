Knowledge Base Answer Generation
================================

This feature allows your agents to trigger the creation of an AI-based
knowledge base answer out of a ticket. This can be helpful to create knowledge
base content for common issues to help your agents answer future tickets more
efficiently and your customers to resolve their issues on their own.

To use this feature, a configured and enabled
:doc:`knowledge base </manage/knowledge-base>` and a configured and enabled
:doc:`AI provider </ai/provider>` are required. To enable this feature, go to
*AI > KB Answer Generation* in Zammad's admin settings. The permission
``admin.ai_assistance_kb_answer_from_ticket_generation`` is required to access
it.

Important information:

- The knowledge base answer is generated as draft and doesn't get published
  automatically.
- The answer is generated in the default language of your knowledge base.
- The answer includes a note in the content and a tag (``ai-generated``) about
  the AI generation.
- A link to the answer is included in the ticket it was generated from.
- The AI request includes a list of the knowledge base categories for which the
  (human) agent has editor permissions. The AI then chooses one of these
  categories.

.. warning::
   Even though there are instructions to remove personal and customer specific
   information in the response, make sure your agents carefully review it before
   the answer gets used or even published.

Agents can find the option in the ticket tab in the ticket detail view under
the **Related knowledge** section and trigger it by clicking the ``AI generate``
button.

.. figure:: /images/ai/kb-answer-ticket-tab.png
   :alt: KB answer generation in ticket tab
   :align: center
