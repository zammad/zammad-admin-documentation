Knowledge Base Answer Generation
================================

This feature allows your agents to trigger the creation of an AI-based
knowledge base answer out of a ticket. For this, a configured
:doc:`/manage/knowledge-base` is required. You can access this feature in
Zammad's settings under *AI > KB Answer Generation* if you have the
``admin.ai_assistance_kb_answer_from_ticket_generation`` permission.

Agents can find the option in the ticket tab in the ticket detail view under
the **Related Answers** section and trigger it by clicking the
``Generate Related AI Answer`` button:

.. figure:: /images/ai/kb-answer-ticket-tab.png
   :alt: KB answer generation in ticket tab
   :align: center

The knowledge base answer then gets generated in a draft state and in the default language of
your knowledge base. It includes a note about checking AI generated content for accuracy and
an ``ai-generated`` tag. This makes sure the content is clearly marked as AI generated and
can be found easily for review. The generated answer is linked to the ticket it was created
from.
