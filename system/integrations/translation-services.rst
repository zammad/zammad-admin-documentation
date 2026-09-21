Translation Services
====================

The *Translation services* integration allows agents to translate ticket
articles into their UI language or other languages of their choice.

A click on the integration under *Integrations > Translation services* opens
its configuration with three tabs: **Provider Settings**, **Ticket Articles**
and **Logs**.

.. note::

   The exact configuration options may evolve with upcoming releases.

Prerequisites
-------------

The integration supports three services: any of the configured AI providers,
DeepL and LibreTranslate. Depending on the service you choose, you need:

- **AI provider**: a configured AI provider connection (see
  :doc:`/ai/provider`).
- **DeepL**: an API key for the DeepL API (free or pro plan).
- **LibreTranslate**: a reachable LibreTranslate instance that provides its
  URL and, depending on its configuration, an API key (e.g. the
  ``add-libretranslate`` scenario of the Docker Compose stack).

Provider Settings
-----------------

Choose the translation service provider and provide its credentials:

- **AI provider**: select the provider connection used for translation.
- **DeepL**: select the **API plan** and provide your **API key**.
- **LibreTranslate**: provide the **URL** of your instance (e.g.
  ``http://libretranslate:5000``) and an **API key**, if your instance
  requires one.

Saving the provider turns the integration on. The flag can only be saved
while the provider configuration is complete.

Ticket Articles
---------------

Enable **Ticket articles translation** to let agents translate individual
articles from the ticket detail view.

**Allow global translation** and its role selector are places where admins
can allow specific roles to translate all articles at once. Be careful:
depending on the service, this can result in a large number of translation
calls and may incur additional costs.

.. note:: Translating all ticket articles at once is not implemented yet.

.. hint:: If the article language detection is disabled, Zammad warns about
   it on this screen. Enable it under *Settings > Ticket* to avoid
   translating articles that are already in the target language.

Logs
----

The logs tab shows HTTP log entries for the configured service. When the AI
provider is selected, the relevant entries appear in
:doc:`/ai/feedback-and-logs` instead.
