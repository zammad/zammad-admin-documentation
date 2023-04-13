System Filters
**************

On this page you can find some filters that you won't find within the Zammad
UI. Those filters might come in handy as it can change Zammad's behavior.

.. note::

   Please note that this is not a full filters list, if you're missing filters,
   feel free to ask over at the `Community`_.

.. _Community: https://community.zammad.org

JIRA
====

Zammad will detect Service Now emails and assign them to existing tickets, if the following requirements are met:

   - Headers contain the ``X-ServiceNow-Generated`` header.
   - Subject does match the regex ``\s(INC\d+)\s`` e.g. ``INC678439``.

See `JIRA Mail Example`_ for comparison of your emails.

Service-Now
===========

Zammad will detect JIRA emails and assign them to existing tickets, if the following requirements are met:

   - Headers contain the ``X-JIRA-FingerPrint`` header.
   - Subject does match the regex ``\[JIRA\]\s\((\w+-\d+)\)`` e.g. ``[JIRA] (SYS-422)``.

See `Service-Now Mail Example`_ for comparison of your emails.

.. _JIRA Mail Example:
   https://github.com/zammad/zammad/blob/stable/test/data/mail/mail090.box

.. _Service-Now Mail Example:
   https://github.com/zammad/zammad/blob/stable/test/data/mail/mail103.box
