Knowledge Base Answer Generation
================================

To access this feature in Zammad's settings under *AI > KB Answer Generation*,
the permission ``admin.ai_assistance_kb_answer_from_ticket_generation`` is
required.

.. figure:: /images/ai/kb-answer-ticket-tab.png
   :alt: KB answer generation in ticket tab
   :align: center

If enabled, it allows your agents to trigger the creation of an AI-based
knowledge base answer out of a ticket. Therefore, a configured
:doc:`/manage/knowledge-base` is required. The knowledge base answer is
generated in a draft state and in the default language of your knowledge base.
It includes a note about checking AI generated content for accuracy and an
``ai-generated`` tag. This makes sure the content is marked as AI generated and
can be found easily for a recommended review. The generated answer is linked to
the ticket it was created from.