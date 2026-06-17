Ticket Summary
==============

Activating this feature generates summaries of tickets which are displayed in a
new ticket sidebar tab. This can be a huge time saver when dealing with large
tickets and/or many hand-overs between agents. To configure it under
*AI > Ticket Summary*, the permission ``admin.ai_assistance_ticket_summary`` is
required. Make sure to configure an :doc:`AI provider <provider>` before
you activate the feature. Otherwise, a warning message will tell you to do so.
Agents get notified for a new AI summary by a pulsing dot as indicator on the
summary sidebar tab.

.. figure:: /images/ai/summary-settings.png
   :alt: Screenshot shows AI ticket summary configuration
   :align: center

.. hint:: If you use an own Ollama server as provider, make sure to have the
   ``llama3.2`` model available for this feature or specify an available model
   in the :doc:`provider configuration <provider>`.

Summary Services
----------------

Configure what the summary should include. After activating the feature,
**Customer Intent** and **Conversation Summary** are enabled by default. You can
choose to activate **Open Questions**, **Upcoming Events** and
**Customer Sentiment**, depending on your use case.

Summary Generation
------------------

In general, the ticket summary is only triggered if the ticket got updated since
the last summary generation. You can choose the timing of the generation or hide
the sidebar tab at all via the dropdown:

On ticket detail opening
   The summary is generated when an agent opens the ticket. This can be more
   comfortable for agents as the summary is already present or at least
   triggered when the agent wants to read it.

On ticket summary sidebar activation
   This option can save computing resources if the AI summary is not always
   viewed. However, it can happen that an agent has to wait for the summary
   to be generated, depending on the ticket size and the resources.

Hide ticket summary sidebar
   This hides the summary sidebar tab at all. This option can be useful if
   you want to enable the summary for specific groups only. Check the
   :doc:`group settings </manage/groups/settings>` section about where to
   configure the summary for each group individually.
