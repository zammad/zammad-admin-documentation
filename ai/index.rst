Zammad AI
=========

.. note:: Zammad's AI features are currently limited to our SaaS customers.

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

- `Ollama <#ollama>`_
- `OpenAI <#openai>`_
- `Zammad AI <#id7>`_

Click the one you want to use. This will jump directly to the corresponding
section below.

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
`Ollama Github repository <https://ollama.com/library>`_.

OpenAI
^^^^^^

You probably already heard about `OpenAI <https://openai.com/>`_, haven't
you? To use their service as AI backend, choose them as AI provider and add
your token.

After that, make sure to click the ``Save`` button and read on in the
`Features <#features>`_ section

Zammad AI
^^^^^^^^^


Features
--------

Set the base for additional features.

If no provider configured, a warning message appears.

Ticket Summary
^^^^^^^^^^^^^^


