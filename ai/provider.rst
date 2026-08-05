Providers
=========

Zammad's AI features rely on one or more AI provider connections to
process requests. A *connection* is a named, credentialed handle to an
AI endpoint such as OpenAI, Anthropic, Ollama or Zammad AI itself. Each
feature can either share one of the connections or be routed to a
specific one.

Manage your connections under *AI > Providers*. The page requires the
``admin.ai_provider`` permission.

.. note:: Zammad's AI features are completely optional and require at
   least one configured provider connection before any AI request is
   made. If you don't want to see the AI section at all, read about
   :docs:`how to hide it in the system docs
   </admin/console/other-useful-commands.html#remove-ai-feature>`.

.. figure:: /images/ai/providers-list.png
   :alt: Screenshot shows the list of configured AI provider connections
   :align: center

   *Placeholder - replace with a screenshot of the AI > Providers list
   showing one connection flagged as default for chat, semantic search
   and image text recognition.*

Enable AI Features
------------------

A toggle at the top of the page turns all AI features on or off at
once. The toggle is the global kill switch: when disabled, no
connection is queried, regardless of which features are enabled or
how the defaults are set.

If no connection exists, the toggle is off. Add at least one
connection first, then enable it.

Connections List
----------------

The page shows a table of all configured connections. Each row displays
the connection's name, type, current health and the default badges it
carries:

Default
   The connection is used for chat completions when a feature has no
   per-feature routing entry.

Semantic search
   The connection is used for vector embeddings (semantic search).

Image text recognition
   The connection is used for optical character recognition (OCR).

A connection can carry one, two or all three badges at the same time,
so a single well-equipped provider can serve every AI purpose.

The action menu (︙) for each row offers:

Set as default
   Marks the connection as the default for chat completions.

Use for semantic search / Do not use for semantic search
   Marks the connection as the default for embeddings, or clears that
   flag. Only available for connections whose type supports embeddings.

Use for image text recognition / Do not use for image text recognition
   Marks the connection as the default for OCR, or clears that flag.

Delete
   Removes the connection. Not available for the Zammad AI connection
   on SaaS.

Add or Edit a Connection
------------------------

Click ``New Provider`` to add a connection, or click a row to edit an
existing one. The dialog lets you pick the connection's type and
fill in the credentials and models it needs.

.. figure:: /images/ai/provider-edit.png
   :alt: Screenshot shows the dialog for adding or editing a provider
         connection
   :align: center

   *Placeholder - replace with a screenshot of the edit dialog showing
   provider-specific fields like Token, Model, Embedding Model and
   OCR Model.*

Type
   Pick the AI backend. Available types:

   - Zammad AI
   - OpenAI
   - Ollama
   - Anthropic
   - Azure AI
   - Mistral AI
   - Custom (OpenAI compatible)

   Depending on the type you choose, Zammad shows different fields.
   Keep in mind that some providers require configuration on their
   side before you can connect (for example Azure AI). Refer to the
   provider's own documentation for those steps.

   .. note:: The provider you need isn't listed? We are going to add
      more over time. If you need a particular one or want to
      sponsor it, get in touch with our
      `sales department <https://zammad.com/en/company/contact>`_.

Name
   A human-readable label for the connection. The list, the action
   menus and the per-feature routing modal all use this name.

Token
   The API token issued by your provider. Don't confuse it with the
   tokens a large language model deals with when processing a
   request.

Model
   The model used for chat completions (for example
   ``gpt-4o-mini``). Leave empty to use the provider's default, shown
   as a placeholder.

Embedding Model
   The model used for vector embeddings in semantic search. Leave
   empty to fall back to the Model field. Not every provider supports
   embeddings; the field appears only for the ones that do.

OCR Model
   The model used for image text recognition. Leave empty to fall
   back to the Model field. Not every provider supports OCR; the
   field appears only for the ones that do.

URL
   The URL or IP address of the provider. Required for Ollama and
   OpenAI compatible providers.

URL (Completions)
   Azure AI only. The endpoint where the text generation model is
   available.

URL (Embeddings)
   Azure AI only. The endpoint where the embedding model is
   available.

URL (OCR)
   Azure AI only. The endpoint where the OCR model is available.
   Leave empty to fall back to URL (Completions).

After filling in the fields, click ``Save``. Zammad tests the
connection against the provider before saving and stores the outcome
as the row's health badge.

Defaults
--------

Each of the three purposes (chat, semantic search, image text
recognition) has exactly one default connection at a time. When you
mark a connection as the default for a purpose, Zammad clears that
flag from whichever connection held it before, so the new default
takes over immediately.

When you delete the last connection that holds a default, Zammad
promotes the oldest remaining connection that can serve that purpose
to default. For semantic search, the promotion picks only a
connection whose type actually supports embeddings.

If no connection is flagged as the default for semantic search and a
feature needs embeddings, Zammad shows a warning on the corresponding
feature page. Pick a connection that supports embeddings as the
semantic search default to clear the warning.

.. _per-feature-provider:

Per-Feature Routing
-------------------

The defaults cover most setups. For finer control, route individual
features to a specific connection. Every AI feature page exposes a
**Provider** button in the page header:

- *AI > Ticket Summary*
- *AI > Writing Assistant*
- *AI > AI Agents*
- *AI > KB Answer from Ticket*

Click the button to open a modal with a dropdown of all configured
connections. Pick a connection to route that feature to it, or pick
``Default provider(s)`` to clear any override and fall back to the
chat default.

.. figure:: /images/ai/feature-provider-modal.png
   :alt: Screenshot shows the per-feature provider modal with a
         connection selected
   :align: center

   *Placeholder - replace with a screenshot of the Provider modal
   opened on a feature page.*

A feature's routing entry only affects chat completions. Embeddings
always go to the semantic search default, and OCR always goes to the
image text recognition default (or the chat default if no OCR default
is set). The **Provider** button is only visible to admins who also
hold the ``admin.ai_provider`` permission, since routing touches the
connections you set up on this page.

Excursion
---------

If you want to know more about Zammad AI or Ollama, read on here.
Otherwise, head over to :doc:`feedback-and-logs` or check out the
AI-powered features and how to use them:

- :doc:`Ticket Summary <summary>`
- :doc:`Writing Assistant <writing-assistant>`
- :doc:`AI Agents <ai-agents>`

.. _zammad-ai-provider:

Zammad AI
^^^^^^^^^

Using Zammad AI as a provider is the easiest way to get started with
Zammad's AI features. It has some big advantages:

- You don't have to set up an AI system or its configuration.
- Hosted in the EU and compliant with GDPR.
- No configuration in Zammad for SaaS customers, or just an API key
  for self-hosted customers.
- Requests with sensitive information aren't used for training.
- One place to go for support when something isn't working as
  expected.

SaaS Customers
   Using Zammad AI requires a "V2" plan. Check your
   :doc:`subscription settings </system/subscription>` and consider
   switching your plan. When a "V2" plan is active, you can buy AI
   calls for AI processing. Zammad AI is then added as a provider
   connection automatically and you can enable it as you like. Check
   your remaining AI calls from time to time or activate the
   notification to be alerted when few calls remain.

   On SaaS, the Zammad AI connection is provisioned by the platform
   and you cannot delete it or change its type.

Self-Hosted Customers
   Get in touch with our
   `sales department <https://zammad.com/en/company/contact>`_ to
   obtain a Zammad AI API key and to buy AI calls. After receiving
   your API key, add a new provider connection of type *Zammad AI*
   and save the key.

Ollama
^^^^^^

`Ollama <https://ollama.com/>`_ lets you run your own AI server on a
machine you control, so your data is not transferred to a third
party. That only makes sense if you have a powerful GPU in your
system!

If you don't have Ollama running yet, their
`documentation <https://docs.ollama.com/>`_ is a good starting point.
Available models are listed in
`Ollama's model library <https://ollama.com/library>`_, with useful
information and additional links in the
`Ollama GitHub repository <https://github.com/ollama/ollama>`_.