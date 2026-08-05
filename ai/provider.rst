Providers
=========

An AI provider is needed for any AI feature in Zammad, and configuring one
is the first required step. The provider handles the actual AI calls for text
generation, semantic search and image text recognition. Add one provider for
all features, or several to assign different features to different providers.
Managing them under *AI > Providers* requires the ``admin.ai_provider``
permission. Switching the toggle at the top of the page to off stops all AI
calls, regardless of whether a provider is configured.

.. figure:: /images/ai/providers-management.png
   :alt: Screenshot shows the list of configured AI providers
   :align: center

.. note:: Zammad's AI features are completely optional. If you don't want to see
   the AI section at all, read about :docs:`how to hide it in the system docs
   </admin/console/other-useful-commands.html#remove-ai-feature>`.

Managing Providers
------------------

The settings page shows a table of all configured providers. Each row has a
status icon, the provider's name and type, and badges that mark the provider as
the default for a specific purpose. The ︙ menu in the **Action** column lets
you change the provider's defaults or remove it. See :ref:`defaults` for what
each badge means.

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
   The model used to generate text. The placeholder shows Zammad's built-in
   default for the chosen provider. Leave the field empty to use that default.

Embedding Model
   The model used to turn text into numerical form for semantic search. The
   placeholder shows Zammad's built-in default for the chosen provider. Leave
   the field empty to use it. Not every provider supports semantic search; the
   field appears only for the ones that do.

OCR Model
   The model used to extract text from images. Leave the field empty to fall
   back to the **Model** field. The placeholder shows Zammad's built-in
   default for the chosen provider. Not every provider supports image text
   recognition; the field appears only for the ones that do.

URL
   The URL or IP address of the provider. Required for Ollama and
   OpenAI compatible providers.

URL (Completions)
   Azure AI only. The endpoint where the text generation model is available.

URL (Embeddings)
   Azure AI only. The endpoint where the embedding model is available.

URL (OCR)
   Azure AI only. The endpoint where the OCR model is available.
   Leave empty to fall back to URL (Completions).

After filling in the fields, click ``Submit``. Zammad tests the configuration
before saving. If the test succeeds, the row's status dot starts orange until
the first successful request turns it green, see Status next.

Status
^^^^^^

The colored dot at the start of each row shows whether the provider has been
used successfully or has issues:

Green
   The provider has been used and the last request succeeded. Shows a tooltip
   with a timestamp of the last successful connection.

Orange
   The provider is configured but has not been used yet. It turns green
   after the first successful request.

Red
   The last request to this provider failed. Hover the dot for the error
   message from the provider, with a timestamp of the first occurrence.

Actions
^^^^^^^

The ︙ menu in the **Action** column offers the following actions:

Set as default
   Marks the provider as the default for AI features.

Use for semantic search / Do not use for semantic search
   Marks the provider as the default for semantic search, or clears that flag.
   Only available for providers that support it.

Use for image text recognition / Do not use for image text recognition
   Marks the provider as the default for image text recognition, or clears that
   flag.

Delete
   Removes the provider. Not available for the Zammad AI provider on SaaS.

.. _defaults:

Defaults
^^^^^^^^

Each of the three purposes can have one default provider at a time. You set
the defaults from the ︙ menu in the **Action** column. A provider can carry any
combination of the three badges, so a single well-equipped provider can serve
every purpose.

.. figure:: /images/ai/providers-management.png
   :alt: Screenshot shows the providers list with a provider flagged as the default for all three purposes
   :align: center

Default
   The provider used for AI features that have no specific provider assigned.

Semantic search
   The provider used to turn text into numerical form (vector embeddings)
   so the knowledge base can find answers by meaning, not just keywords.

Image text recognition
   The provider used to extract text from images (OCR). If no provider is
   flagged as the image text recognition default, the **Default** provider is
   used instead.

When you mark a provider as the default for a purpose, Zammad clears that
flag from whichever provider held it before, so the new default takes over
immediately.

When you delete the last provider that holds a default, Zammad promotes the
oldest remaining provider that can serve that purpose to default. For
semantic search, the promotion picks only a provider whose provider type
actually supports it.

If no provider is flagged as the default for semantic search and a feature
needs it, Zammad shows a warning on the corresponding feature page. Pick a
provider that supports semantic search as the default to clear the warning.

.. _per-feature-provider:

Provider Per Feature
--------------------

By default, all AI features use the provider marked as the default. For finer
control, you can pick a specific provider for individual features.

Every AI feature settings page exposes a ``Provider`` button in the page header.
It opens a modal with a dropdown of all configured providers. Pick a provider
to send that feature's text generation requests to it, or pick the **Default
(...)** entry to clear any override and fall back to the default.

.. figure:: /images/ai/provider-selection-ai-feature.png
   :alt: Screenshot shows the per-feature provider modal with a provider selected
   :align: center

The choice only affects text generation. Semantic search always goes to the
semantic search default, and image text recognition always goes to the image
text recognition default (or the default provider if no image text recognition
default is set). The ``Provider`` button is only visible to admins who also hold
the ``admin.ai_provider`` permission, since routing touches the providers you
set up on this page.

Excursion
---------

If you want to know more about Zammad AI or Ollama, read on here. Otherwise,
head over to :doc:`feedback-and-logs` or pick any of the AI feature pages from
the menu on the left.

.. _zammad-ai-provider:

Zammad AI
^^^^^^^^^

Using Zammad AI as a provider is the easiest way to get started with Zammad's
AI features. It has some big advantages:

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
you control, so your data is not transferred to a third party. That only
makes sense if you have a powerful GPU in your system!

If you don't have Ollama running yet, their
`documentation <https://docs.ollama.com/>`_ is a good starting point.
Available models are listed in `Ollama's model library
<https://ollama.com/library>`_, with useful information and additional links
in the `Ollama GitHub repository <https://github.com/ollama/ollama>`_.