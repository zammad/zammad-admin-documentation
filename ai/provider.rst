Provider
========

Zammad offers AI-powered features to support your agents!
To use AI features in Zammad, you have to configure an AI provider which handles
the requests first. Add your provider in Zammad's admin settings under
*AI > Provider*. To access this page, the ``admin.ai_provider`` permission is
required.

Settings
--------

.. figure:: /images/ai/ai-provider.png
   :alt: Screenshot shows configuration of AI provider in Zammad
   :align: center
   :width: 60%

Provider
   You can choose from different supported providers:

   - Zammad AI
   - OpenAI
   - Ollama
   - Anthropic
   - Azure AI
   - Mistral AI
   - Custom (OpenAI Compatible)

   Depending on which provider you choose, Zammad displays different fields you
   can configure.

   .. note:: The AI service you have subscribed to is not available? This is just
      the first step. We are going to add more providers soon! If you want to
      support us or need the provider as soon as possible, just let our
      `sales department <https://zammad.com/en/company/contact>`_ know!

Token
   Add your API token which you got from your provider here. Don't confuse it
   with the tokens a large language model (LLM) is dealing with when processing
   a request.

URL
   Provide the URL or IP address of your provider. This is required for Ollama
   and OpenAI compatible providers.

URL (Completions)
   Only for Azure AI as provider. Add the endpoint where your text generation
   model is available.

Model
   Enter the exact name of the model here. This model has to be available on
   your provider's side. Leave it empty (if not mandatory) to use the default
   which is shown as a placeholder.

Recognize Image Text (OCR)
   Zammad allows you to use optical character recognition (OCR) to extract text
   from images. This can be useful if you often get error messages or other
   important information, which is only present in images.

   Simply switch the toggle on or off. Be aware that using this feature can
   cause a high consumption of tokens.

OCR Model
   Specify a model to use for the OCR feature. Leave it empty to use the default
   model of your provider.

   Note: the field is called **URL (OCR)** for Azure AI and expects a URL where
   the OCR model is available instead of a model itself.

After providing the information, make sure to click the ``Save`` button and
activate AI features.

Excursion
---------

In case you want to know more about Zammad AI or Ollama, read on here. Otherwise,
head over to :ref:`feedback-logs` or check out the AI-powered features and how
to use them.

.. _zammad-ai-provider:

Zammad AI
^^^^^^^^^

Using Zammad AI as a provider is the easiest way you can get started with
Zammad's AI features. It has some big advantages like:

- You don't have to take care of the setup of an AI system and its
  configuration.
- Hosted in the EU and compliant with GDPR.
- No configuration in Zammad needed (for SaaS customers) or only an API key
  required (for self-hosted customers).
- Your requests with sensitive information aren't used for training.
- If something isn't working as expected, you just have one place where you
  get support.

SaaS Customers
   Using Zammad AI requires a "V2" plan. Check your
   :doc:`subscription settings </system/subscription>` and consider to switch
   your plan. If a "V2" plan is active, you can buy AI calls for AI processing.
   After doing so, Zammad AI is automatically configured as AI provider and
   you can activate and configure AI features as you like. Check your remaining
   AI calls from time to time or activate the notification to be alerted when
   few calls remain.

Self-Hosted Customers
   Please `get in touch with our sales department <https://zammad.com/en/company/contact>`_
   to obtain a Zammad AI API key and to buy AI calls.
   After receiving your API key, simply add and save it. Then you are ready to
   activate and configure AI features as you like.

Ollama
^^^^^^

`Ollama <https://ollama.com/>`_ is an AI tool that allows you to set up your
own AI server on a machine you control. That means your data is not transferred
to a third party. Be aware that this only makes sense if you have a powerful
GPU in your system!

If you don't have an Ollama running already, their
`documentation <https://docs.ollama.com/>`_
is a good starting point. You can find the available models in
`Ollama's model library <https://ollama.com/library>`_ and useful information
and additional links in the
`Ollama Github repository <https://github.com/ollama/ollama>`_.

.. _feedback-logs:

Feedback & Logs
---------------

At the top of the settings page, you can switch to the **Feedback & Logs** tab.

.. figure:: /images/ai/provider-feedback-logs.png
   :alt: Screenshot shows AI provider settings with activated "Feedback & Logs" tab
   :align: center
   :width: 60%

Downloads
^^^^^^^^^

Your agents can provide feedback like thumbs up or down and leave a comment in
case they gave thumbs down. You can download this feedback as well as error
logs. Both downloads provide an Excel file (.xlsx) with the requested
information.

Recent Logs
^^^^^^^^^^^

Zammad shows the last requests and responses in the UI as well. So in case
something isn't working, have a look there. When you open an entry, you can
find the request as well as the response from your AI provider.
