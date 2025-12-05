Provider
========

Introduction
------------

Zammad offers AI powered features to support your agents! The
configuration is pretty easy so the entry barrier is low.
Read on how to configure it and check which features are currently supported.

Provider Configuration
----------------------

To use AI feature in Zammad, you have to configure an AI provider which handles
the requests. You can configure it in Zammad's admin settings under
*AI > Provider*.

.. figure:: /images/ai/ai-provider.png
   :alt: Screenshot shows configuration of AI provider in Zammad
   :align: center

The following providers are supported:

- :ref:`anthropic-provider`
- :ref:`azure-provider`
- :ref:`ollama-provider`
- :ref:`openai-provider`
- :ref:`zammad-ai-provider`
- :ref:`openai-compatible-provider`

.. note:: The AI service you have subscribed to is not available? This is just
   the first step. We are going to add more providers soon! If you want to
   support us or need the provider as soon as possible, just let our
   `sales department <https://zammad.com/en/company/contact>`_ know!

.. _anthropic-provider:

Anthropic
^^^^^^^^^

To use Anthropic's service as AI backend, choose it as AI provider and add
your API token. After that, make sure to click the ``Save`` button and read on
in the desired feature's section. To use a specific model, add its name in the **Model**
field. Leave it empty to use the default which is shown as  placeholder in the
field.

.. _azure-provider:

Azure AI
^^^^^^^^

To use the Azure AI service as AI backend, choose it as AI provider and add
your URL as well as your API token. You get the URL after configuring the AI
service in Azure. After that, make sure to click the ``Save`` button and read on
in the desired feature's section.

.. _ollama-provider:

Ollama
^^^^^^

`Ollama <https://ollama.com/>`_ is an AI tool that allows you to set up your
own AI server on a machine you control. That means your data is not transferred
to a third party. Be aware that this only makes sense if you have a powerful
GPU in your system!

When choosing Ollama as your AI provider, you just have to provide the IP/URL
of your instance with appended port number. To use a specific model, add its
name in the **Model** field. Leave it empty to use the default which is shown as
placeholder in the field. In any case, the correct model has to be available.

If you don't have an Ollama running already, their
`deployment guide <https://github.com/ollama/ollama/blob/main/docs/linux.md>`_
is a good starting point. You can find the available models in
`Ollama's model library <https://ollama.com/library>`_ and useful information
and additional links in the
`Ollama Github repository <https://github.com/ollama/ollama>`_. If you just
installed Ollama, you can pull and run a model by executing:

.. code-block:: sh

    ollama run llama3.2

Make sure to click the ``Save`` button and read on in the desired feature's
section.

.. _openai-provider:

OpenAI
^^^^^^

You probably already heard about `OpenAI <https://openai.com/>`_, haven't
you? To use their service as AI backend, choose them as AI provider and add
your API token. To use a specific model, add its name in the **Model** field.
Leave it empty to use the default which is shown as placeholder in the field.

Make sure to click the ``Save`` button and read on in the desired feature's
section.

.. hint:: You can also use an
   :ref:`OpenAI compatible custom provider <openai-compatible-provider>`.

.. _zammad-ai-provider:

Zammad AI
^^^^^^^^^

.. note:: Zammad as AI provider is currently limited to specific customers for
   testing. If you're interested as well, please
   `let our sales department know <https://zammad.com/en/company/contact>`_.

The usage of Zammad AI as a provider has some benefits:

- You don't have to care about the setup and configuration compared to your own
  setup.
- Your requests with sensitive information aren't used for training.
- If something isn't working as expected, you just have one place where you
  get support.

To configure it, simply choose **Zammad AI** as your provider and add your
token. After that, make sure to click the ``Save`` button and read on in
the desired feature's section.

.. _openai-compatible-provider:

Custom (OpenAI Compatible)
^^^^^^^^^^^^^^^^^^^^^^^^^^

Use this option to connect to an OpenAI compatible provider. To use OpenAI
itself, choose :ref:`OpenAI as provider <openai-provider>` instead. Add a URL,
a token and a model you want to use. The model is mandatory and must match the
model name from your AI provider.

Make sure to click the ``Save`` button and read on in the desired feature's
section.
