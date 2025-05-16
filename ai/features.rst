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
service when an agent opens a ticket. Agents then see a banner below the ticket
articles which tells them that a summary is available. They can now simply
click the included button to jump to the **AI Summary** sidebar tab. The
banner can be hidden by agents. In case an agent wants to reactivate it,
this can be done in the user's profile settings under **Appearance**.

.. hint:: If you use an own Ollama server as provider, make sure to have the
   model ``llama3.2`` available for this feature.