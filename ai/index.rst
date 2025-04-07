Zammad AI
=========

.. note::
   - Zammad's AI features are currently limited to SaaS customers.
   - This page may change regularly.
   - Consider this page in Beta state.

Introduction
------------

Zammad offers AI powered features to support your agents! The
configuration is pretty easy so the entry barrier is low.

Read on how to configure it and which features are currently supported.

.. tip:: 🚀✨ **What's the easiest way to get AI features running?** 🚀✨

   Subscribe to a plan with Zammad AI, go to *AI > Provider* in the Zammad
   settings and choose `Zammad AI <#id7>`_. Enter the token you received and you
   can start using the `features <#features>`_ by simply enabling it.

.. figure:: /images/ai/ai-provider.png
   :alt: Screenshot shows configuration of AI provider in Zammad

Provider Configuration
----------------------

To use Zammad, you have to configure an AI provider which handles the requests.
You can configure it in Zammad's admin settings under *AI > Provider*.

The following providers are supported:

- :ref:`ollama-provider`
- :ref:`openai-provider`
- :ref:`zammad-ai-provider`

Click the one you want to use. This will jump directly to the corresponding
section below.

.. note:: The AI service you have subscribed to is not available? This is just
   the first step. We are going to add more providers soon! If you want to
   support us or need the provider as soon as possible, just let our
   `sales department <https://zammad.com/en/company/contact>`_ know!

.. _ollama-provider:

Ollama
^^^^^^

`Ollama <https://ollama.com/>`_ is an AI tool that allows you to set up your
own AI server on a machine you control. Be aware that this only makes sense if
you have a GPU in your system!

Using Ollama on an own server makes sure that your data is not transferred to
a third party.

When choosing Ollama as your AI provider, you just have to provide the IP/URL
of your instance with appended port number. After that, make sure to click
the ``Save`` button and read on in the `Features <#features>`_ section. If
you don't have an Ollama running already, their
`deployment guide <https://github.com/ollama/ollama/blob/main/docs/linux.md>`_
is a good starting point.

Depending on the feature you want to use, make sure the right model is
available. If you just installed Ollama, you can pull and run a model by
executing:

.. code-block:: sh

    ollama run llama3.2

You can find the available models in
`Ollama's model library <https://ollama.com/library>`_ and useful information
and additional links in the
`Ollama Github repository <https://github.com/ollama/ollama>`_.

.. _openai-provider:

OpenAI
^^^^^^

You probably already heard about `OpenAI <https://openai.com/>`_, haven't
you? To use their service as AI backend, choose them as AI provider and add
your token. After that, make sure to click the ``Save`` button and read on in
the `Features <#features>`_ section.

.. _zammad-ai-provider:

Zammad AI
^^^^^^^^^

.. tip:: Don't want to deal with all this stuff or just want to have a privacy
   respecting AI service? No problem! Get in touch with us to get your
   token and you are ready to start.

The usage of Zammad AI as a provider has some benefits:

- You don't have to care about the setup and configuration compared to your own
  setup.
- Your requests with sensitive information aren't used for training.
- If something isn't working as expected, you just have one place where you
  get support.

To configure it, simply choose **Zammad AI** as your provider and add your
token. After that, make sure to click the ``Save`` button and read on in
the `Features <#features>`_ section.

Features
--------

Below you find the supported AI powered features of Zammad. Make sure to
configure a provider before activating a feature. Otherwise, a warning message
will tell you to do so.

.. note:: Currently, only one feature is available yet. This feature can be seen
   as the foundation for other useful features. Expect more to come soon!

Ticket Summary
^^^^^^^^^^^^^^

Activating this feature generates summaries of tickets. This can be a huge
time saver when dealing with large tickets and/or many hand-overs between
agents.

By default, **Customer Intent** and **Conversation Summary** are enabled and
always active. You can choose to activate or deactivate **Open Questions** and
**Suggested Next Steps**, depending on what fits your needs.

Enabling the ticket summary feature triggers a request to the configured AI
service when an agent opens a ticket. Agents then see a banner below the ticket
articles which tells them that a summary is available. They can now simply
click the included button to jump to the **AI Summary** sidebar tab.

.. hint:: If you use an own Ollama server as provider, make sure to have the
   model ``llama3.2`` available for this feature.