Translation Services
====================

The translation services integration allows you to connect to a translation
service provider so your agents can translate ticket articles into another
language. To enable and configure the service, go to *System > Integrations* and
click on the **Translation services** integration. This opens its configuration
with four tabs: Provider Settings, Ticket Articles, Logs and Feedback. The
Feedback tab requires the ``admin.ai_feedback_logs`` permission.

Provider Settings
-----------------

The integration supports three services: any of the configured AI providers,
DeepL and LibreTranslate.

- **AI provider**: choose from your already configured AI providers (see
  :doc:`/ai/provider`).
- **DeepL**: select an API plan and provide your API key.
- **LibreTranslate**: provide the URL of a reachable LibreTranslate instance
  (e.g. ``http://libretranslate:5000`` in the LibreTranslate Docker Compose
  scenario) and optionally an API key.

Saving the provider turns the integration on. However, agents can only translate
articles once you enable **Ticket articles translation** on the **Ticket
Articles** tab (see next section).

Ticket Articles
---------------

Ticket articles translation
   Enabling it lets your agents translate individual articles from the ticket
   detail view manually on demand. This can be useful if you have tickets in
   another language from time to time.

Allow translation of all articles at once
   Enabling it lets your agents translate all articles of a ticket in one go.
   To use it, an agent switches the toggle on in the language picker of the
   ticket detail view. The articles are then translated automatically as soon
   as the agent opens a ticket with articles in another language.

   You can restrict this to specific roles. If no role is selected, all agents
   may use it. Be aware that this can result in additional costs, depending on
   the configured service. This feature is useful for multi-language teams or
   multi-language customers.

Logs
----

The **Logs** tab shows HTTP log entries for the configured service. When an AI
provider is configured for the translation, the relevant entries appear in
:doc:`/ai/feedback-and-logs` instead.

Feedback
--------

Your agents can give feedback for the translation in the form of thumbs up or
thumbs down. When rating a translation with thumbs down, an optional comment
can be added. You can download this feedback as an Excel file by clicking the
``Download Feedback`` button.

Agents' Perspective
-------------------

Agents can choose a language from a language picker. By default, the picker
shows the agent's user interface language. If the service does not offer it,
Zammad falls back to the instance's default language and, after that, to
English.

In addition, agents can specify one or more languages they understand in their
personal profile settings. Articles in these languages aren't translated
automatically, unless an agent clicks the translate button in an article.
