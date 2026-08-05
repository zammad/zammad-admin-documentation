Providers
=========

Zammad's AI features rely on one or more AI provider connections. A
connection is a named, credentialed handle to one provider endpoint.
All features can use a default provider, or you can pick a specific
provider for a single feature.

Manage your connections under **AI > Providers**. The page requires
the ``admin.ai_provider`` permission.

.. figure:: /images/ai/providers-management.png
   :alt: Screenshot shows the list of configured AI provider connections
   :align: center

   The Providers list with one connection flagged as the default,
   with additional badges for semantic search and image text
   recognition.

.. note:: Zammad's AI features are completely optional and require at
   least one configured provider connection before any AI request is
   made. If you don't want to see the AI section at all, read about
   :docs:`how to hide it in the system docs
   </admin/console/other-useful-commands.html#remove-ai-feature>`.

Connections List
----------------

The page shows a table of all configured connections. Each row displays
the connection's name, the provider type and a status icon that shows
whether the connection has been used successfully:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Icon
     - Meaning
   * - Green
     - The connection has been used and the last request succeeded.
   * - Orange
     - The connection is configured but has not been used yet. It
       turns green after the first successful request.
   * - Red
     - The connection failed. Hover the icon for the error message
       from the provider.

The same row can carry up to three badges to mark it as the default
for a specific purpose:

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Badge
     - Purpose
   * - **Default**
     - Used for AI features that have no specific provider assigned.
   * - **Semantic search**
     - Used to turn text into numerical form (vector embeddings) so the
       knowledge base can find answers by meaning, not just keywords.
   * - **Image text recognition**
     - Used to extract text from images (OCR).

A connection can carry one, two or all three badges at the same time,
so a single well-equipped provider can serve every purpose.

The action menu (︙) for each row offers the following entries:

.. list-table::
   :widths: 40 60
   :header-rows: 1

   * - Action
     - Effect
   * - ``Set as default``
     - Marks the connection as the default for AI features.
   * - ``Use for semantic search`` / ``Do not use for semantic search``
     - Marks the connection as the default for semantic search, or
       clears that flag. Only available for providers that support
       it.
   * - ``Use for image text recognition`` /
       ``Do not use for image text recognition``
     - Marks the connection as the default for image text recognition, or
       clears that flag.
   * - ``Delete``
     - Removes the connection. Not available for the Zammad AI
       connection on SaaS.

Add or Edit a Connection
------------------------

Click ``New Provider`` to add a connection, or click a row to edit an
existing one. The dialog lets you pick the provider type and fill in
the credentials and models it needs. The fields shown depend on the
provider you choose, so switching the type updates the dialog on the
fly.

.. figure:: /images/ai/provider-dialog.png
   :alt: Screenshot shows the dialog for adding or editing a provider
         connection
   :align: center

   The dialog for a connection of type OpenAI, showing Token, Model,
   Embedding Model, OCR Model and URL fields.

Type
   Pick the AI provider. Available options:

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
   The model used to generate text. Leave empty to use the
   provider's default, shown as a placeholder.

Embedding Model
   The model used to turn text into numerical form for semantic
   search. Leave empty to fall back to the Model field. Not every
   provider supports semantic search; the field appears only for the
   ones that do.

OCR Model
   The model used to extract text from images. Leave empty to fall
   back to the Model field. Not every provider supports image text
   recognition; the field appears only for the ones that do.

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

After filling in the fields, click ``Submit``. Zammad tests the
connection against the provider before saving and shows the result as
the row's status icon. The icon starts orange until the first
successful request turns it green.

Defaults
--------

Each of the three purposes has exactly one default connection at a
time. When you mark a connection as the default for a purpose, Zammad
clears that flag from whichever connection held it before, so the new
default takes over immediately.

.. figure:: /images/ai/providers-management.png
   :alt: Screenshot shows the providers list with a connection flagged
         as the default for all three purposes
   :align: center

   A connection carrying all three default badges.

When you delete the last connection that holds a default, Zammad
promotes the oldest remaining connection that can serve that purpose
to default. For semantic search, the promotion picks only a
connection whose provider type actually supports it.

If no connection is flagged as the default for semantic search and a
feature needs it, Zammad shows a warning on the corresponding feature
page. Pick a connection that supports semantic search as the default
to clear the warning.

.. _per-feature-provider:

Per-Feature Routing
-------------------

The defaults cover most setups. For finer control, assign a specific
connection to individual features. Every AI feature page exposes a
``Provider`` button in the page header:

- **AI > Ticket Summary**
- **AI > Writing Assistant**
- **AI > AI Agents**
- **AI > KB Answer from Ticket**

Click the button to open a modal with a dropdown of all configured
connections. Pick a connection to route that feature to it, or pick
``Default provider(s)`` to clear any override and fall back to the
default.

.. figure:: /images/ai/provider-selection-ai-feature.png
   :alt: Screenshot shows the per-feature provider modal with a
         connection selected
   :align: center

   The Provider modal opened on a feature page, with a specific
   connection selected in the dropdown.

The choice only affects text generation. Semantic search always goes
to the semantic search default, and image text recognition always
goes to the image text recognition default (or the default provider
if no image text recognition default is set). The ``Provider`` button
is only visible to admins who also hold the ``admin.ai_provider``
permission, since routing touches the connections you set up on this
page.

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