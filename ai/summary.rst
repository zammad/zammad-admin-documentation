Ticket Summary
==============

Activating this feature generates summaries of tickets which are displayed in a
new ticket sidebar tab. This can be a huge time saver when dealing with large
tickets and/or many hand-overs between agents.

Make sure to configure an :doc:`AI provider <provider>` before activating the
feature. Otherwise, a warning message will tell you to do so.

.. figure:: /images/ai/summary-settings.png
   :alt: Screenshot shows AI ticket summary configuration
   :align: center
   :scale: 80%

If you activate this feature, **Customer Intent** and **Conversation Summary**
are enabled by default. You can choose to activate **Open Questions**,
**Upcoming Events** and **Customer Sentiment**, depending on your use case.

Enabling the ticket summary feature triggers a request to the configured AI
service at the configured action (see below). After the summary is generated,
agents are notified by an indicator on the summary sidebar tab.

Decide when the summary is generated via **Generation** dropdown.
It is generated when the ticket got updated and an agent either opens the
ticket or opens the summary sidebar tab of the ticket.
The first mentioned option is more comfortable for agents, the latter saves
computing resources if the AI summary is not always viewed. If you want to have
a more granular control, you can override this setting for each group
individually in the :doc:`group management </manage/groups/index>`.

.. hint:: If you use an own Ollama server as provider, make sure to have the
   ``llama3.2`` model available for this feature or specify an available model
   in the :ref:`provider configuration <ollama-provider>`.
