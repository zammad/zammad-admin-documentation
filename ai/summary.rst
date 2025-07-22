Ticket Summary
==============

Activating this feature generates summaries of tickets which are displayed in a
new ticket sidebar tab. This can be a huge time saver when dealing with large
tickets and/or many hand-overs between agents.

Make sure to configure a provider before activating the feature. Otherwise, a
warning message will tell you to do so.

.. figure:: /images/ai/summary-settings.png
   :alt: Screenshot shows AI ticket summary configuration
   :align: center
   :scale: 80%

If you activate this feature, **Customer Intent** and **Conversation Summary**
are enabled by default. You can choose to activate **Open Questions** and
**Suggested Next Steps**, depending if this is helpful in your use case.

Enabling the ticket summary feature triggers a request to the configured AI
service at the configured action (see below). After the summary is generated,
agents are notified by an indicator on the summary sidebar tab.

Decide when the summary is generated via **Generation** dropdown. Either on
opening the detail view or on clicking the summary sidebar tab.
The first mentioned option is more comfortable for agents, the latter saves
computing resources if the AI summary is not always viewed.

.. hint:: If you use an own Ollama server as provider, make sure to have the
   ``llama3.2`` model available for this feature or specify an available model
   in the :ref:`provider configuration <ollama-provider>`.
