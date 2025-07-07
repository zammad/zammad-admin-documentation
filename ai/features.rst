Features
========

Below you find the supported AI powered features of Zammad. Make sure to
configure a provider before activating a feature. Otherwise, a warning message
will tell you to do so.

.. note:: Currently, only one feature is available so far. This feature can be
   seen as the foundation for other useful features. Expect more to come soon!

Ticket Summary
--------------

Activating this feature generates summaries of tickets. This can be a huge
time saver when dealing with large tickets and/or many hand-overs between
agents.

By default, **Customer Intent** and **Conversation Summary** are enabled and
always active. You can choose to activate or deactivate **Open Questions** and
**Suggested Next Steps**, depending on what fits your needs.

Enabling the ticket summary feature triggers a request to the configured AI
service when an agent opens a ticket. Agents then see an indicator on the
**AI Summary**  sidebar tab which tells them that a summary is available.

.. hint:: If you use an own Ollama server as provider, make sure to have the
   ``llama3.2`` model available for this feature or specify an available model
   in the :ref:`provider configuration <ollama-provider>`.
