Providers
=========

Zammad offers AI-powered features to support your agents! To use AI features in
Zammad, you must first configure and enable at least one AI provider. An AI
provider processes your AI requests and is required for any AI feature.
Add your providers in Zammad's admin settings under *AI > Providers* and make
sure to activate the toggle. Switching the toggle off stops all AI calls, even
if one or more providers are configured.

Accessing this page requires the ``admin.ai_provider`` permission.

.. figure:: /images/ai/providers-management.png
   :alt: Screenshot shows the list of configured AI providers
   :align: center

.. note:: Zammad's AI features are completely optional. If you don't want to see
   the AI section at all, read about :docs:`how to hide it in the system docs
   </admin/console/other-useful-commands.html#remove-ai-feature>`.

Managing Providers
------------------

The AI provider configuration page shows a table of all configured providers.
Each row has a status dot, the provider's name and type, and badges for any
special roles the provider currently has. The ︙ menu in the **Action** column
lets you change these roles or remove the provider. See :ref:`default-provider`
and :ref:`capabilities` for details. You can add one provider for all AI
features you want to enable, or add multiple to assign different providers to
individual features.

Add or Edit a Provider
^^^^^^^^^^^^^^^^^^^^^^

Click ``New Provider`` to add a new provider or click on a row to edit an
existing one. The dialog lets you pick the provider type and fill in the
credentials and models it needs. The fields shown depend on the provider you
choose, so switching the type updates the dialog on the fly.

.. figure:: /images/ai/provider-dialog.png
   :alt: Screenshot shows the dialog for adding or editing a provider
   :align: center

Type
   Pick the AI provider. Available options:

   - Zammad AI
   - OpenAI
   - Ollama
   - Anthropic
   - Azure AI
   - Mistral AI
   - Custom (OpenAI compatible)

   Different fields appear depending on the type. Some providers also require
   configuration on their side before you can connect (for example Azure AI).
   Refer to the provider's own documentation for those steps.

   .. note:: The provider you need isn't listed? We are going to add more over
      time. If you need a particular one or want to sponsor it, get in touch
      with our `sales department <https://zammad.com/en/company/contact>`_.

Name
   A human-readable label for the provider. This is what you see in the list
   and elsewhere in Zammad (for example when configuring a provider for a
   specific feature).

Token
   The API token issued by your provider. Don't confuse it with the tokens
   a large language model deals with when processing a request.

Model
   The base model used to generate text. The dropdown lists the models the
   provider offers. The default option shows the provider's recommended
   model; pick a different one if you prefer.

   .. tip:: Need different models for different features (for example a
      lightweight model for classification and a larger one for text
      generation)? Add the same provider type twice with a different model
      selected in each, then assign each connection to its feature via
      :ref:`per-feature-provider-config`.

Embedding Model
   The model used to vectorize text for semantic search. The dropdown lists
   the models the provider offers. The default option shows the provider's
   recommendation; pick a different one if you prefer. If the provider does
   not offer a matching model, enter its name manually. Required if you plan
   to assign the **Semantic search** capability to this connection (see
   :ref:`capabilities`). Not every provider supports semantic search; the
   field appears only for the ones that do.

   When you select or enter an embedding model for which Zammad cannot
   determine these values, you must also provide the following:

   **Embedding dimensions**
      The length of the vectors the embedding model produces.

   **Context window size**
      The number of input tokens the embedding model accepts at once.

OCR Model
   The model used to extract text from images. The dropdown lists the models
   the provider offers. The default option falls back to the **Model** field.
   Not every provider supports image text recognition; the field appears
   only for the ones that do.

URL
   The URL or IP address of the provider. Required for Ollama and
   OpenAI compatible providers.

URL (Completions)
   Azure AI only. The endpoint where the text generation model is available.

URL (OCR)
   Azure AI only. The endpoint where the OCR model is available.
   Leave empty to fall back to URL (Completions).

After filling in the fields, click ``Submit``. Zammad tests the configuration
before saving. If the test succeeds, the row's status dot starts orange until
the first successful request turns it green; see Status below for the colors.

Status
^^^^^^

The colored dot at the start of each row shows whether the provider has been
used successfully or whether it has issues:

Green
   The provider has been used and the last request succeeded. The tooltip
   shows the timestamp of the last status update.

Orange
   The provider is configured but has not been used yet. It turns green
   after the first successful request.

Red
   The last request to this provider failed. Hover the dot for the error
   message from the provider. The tooltip always shows the most recent
   error, so the timestamp belongs to the last failed request.

.. _default-provider:

Default Provider
^^^^^^^^^^^^^^^^

The **Default** provider serves every AI feature that has no specific provider
assigned. You set it from the ︙ menu in the **Action** column. A provider can
also carry capability badges, so a single well-equipped provider can cover
everything.

.. figure:: /images/ai/providers-management.png
   :alt: Screenshot shows the providers list with a provider flagged as the default for all three purposes
   :align: center

When you mark a provider as the default, Zammad clears that flag from
whichever provider held it before, so the new default takes over
immediately. The default provider always exists: when you delete the
provider that holds the flag, Zammad promotes the oldest remaining provider.

.. _capabilities:

Capabilities
^^^^^^^^^^^^

Semantic search and image text recognition (OCR) are capabilities. You assign
them from the ︙ menu in the **Action** column; the badges mark which provider
currently covers each capability.

Semantic search
   The provider used to turn text into numerical form (vector embeddings)
   so the knowledge base can find answers by meaning, not just keywords.

   If no provider covers semantic search and a feature needs it, Zammad
   shows a warning on the corresponding feature page. Assign semantic
   search to a provider that supports it **and that has an Embedding Model
   set** to clear the warning.

Image text recognition
   The provider used to extract text from images (OCR).

   This capability is optional. To save on AI-related costs, you can remove
   it from all providers entirely; features then simply skip the OCR step.

When you assign a capability to a provider, Zammad clears that assignment from
whichever provider held it before, so the new assignment takes over
immediately. Unlike the default provider, capabilities are not promoted:
when you delete the provider that covers a capability, the capability simply
stays unassigned.

Actions
^^^^^^^

The ︙ menu in the **Action** column offers the following actions:

Set as default
   Marks the provider as the default provider for AI features.

Use for semantic search / Do not use for semantic search
   Assigns the provider to the semantic search capability, or clears that
   assignment. Only available for providers that support it.

Use for image text recognition / Do not use for image text recognition
   Assigns the provider to the image text recognition capability, or clears
   that assignment.

Delete
   Removes the provider. Not available for the Zammad AI provider on SaaS.

.. _per-feature-provider-config:

Configuring Provider per Feature
--------------------------------

By default, all AI features use the provider marked as the default. For finer
control, you can pick a specific provider for individual features.

Every AI feature settings page shows a ``Provider`` button in the page header.
It opens a modal with a dropdown of all configured providers. Pick a provider
to send that feature's text generation requests to, or pick the **Default
(...)** entry to clear any override and fall back to the default.

.. figure:: /images/ai/provider-selection-ai-feature.png
   :alt: Screenshot shows the per-feature provider modal with a provider selected
   :align: center

The choice only affects text generation. Semantic search always goes to the
provider that covers the semantic search capability, and image text
recognition always goes to the provider that covers the image text
recognition capability. The ``Provider`` button is only visible to admins who
hold the ``admin.ai_provider`` permission, since routing touches the
providers you set up on this page.

Additional Provider Information
-------------------------------

If you want to know more about Zammad AI or Ollama, read on. Otherwise,
head over to :doc:`feedback-and-logs` or pick any of the AI feature pages from
the menu on the left.

.. _zammad-ai-provider:

Zammad AI
^^^^^^^^^

Using Zammad AI as a provider is the easiest way to get started with Zammad's
AI features. It has several key advantages:

- You don't have to set up an AI system or its configuration.
- Hosted in the EU and compliant with GDPR.
- No configuration in Zammad for SaaS customers, or just an API key
  for self-hosted customers.
- Requests with sensitive information aren't used for training.
- One place to go for support when something isn't working as
  expected.

SaaS Customers
   Using Zammad AI requires a "V2" plan. Check your
   :doc:`subscription settings </system/subscription>` and consider switching
   your plan. When a "V2" plan is active, you can buy AI calls for AI
   processing. A Zammad AI provider is added automatically and you can enable
   it as you like. Check your remaining AI calls from time to time or activate
   the notification to be alerted when few calls remain.

   On SaaS, the Zammad AI provider is provisioned by the platform and you
   cannot delete it or change its type.

Self-Hosted Customers
   Get in touch with our
   `sales department <https://zammad.com/en/company/contact>`_ to obtain a
   Zammad AI API key and to buy AI calls. After receiving your API key, add
   a new provider of type *Zammad AI* and save the key.

Ollama
^^^^^^

`Ollama <https://ollama.com/>`_ lets you run your own AI server on a machine
you control, so your data is not transferred to a third party. This approach only
makes sense if you have a powerful GPU in your system!

If you don't have Ollama running yet, their
`documentation <https://docs.ollama.com/>`_ is a good starting point.
Available models are listed in `Ollama's model library
<https://ollama.com/library>`_, with useful information and additional links
in the `Ollama GitHub repository <https://github.com/ollama/ollama>`_.