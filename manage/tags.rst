Tags
====

Tags allow to categorize and mark tickets. Think of tags as some kind of labels
which can be attached to a ticket or a knowledge base answer. Manage tags in
Zammad's admin settings under *Manage > Tags* with the ``admin.tag`` permission.

All agents can tag tickets. You can find further information about tagging of
tickets in our
:user-docs:`user documentation </basics/service-ticket/settings/tags.html>`.
It is even possible to use an AI agent for ticket tagging. Check out the
:doc:`AI Agents section </ai/ai-agents>` for more information.

New Tags
--------

Allow or disable the creation of new tags by agents. If disabled and you want
to use tags in your instance, make sure to have a working set of tags available,
your agents can choose from.

Add Tags
--------

Use this field to add new tags. The field allows you to add more tags by
using :kbd:`enter` or :kbd:`tab`. Click the ``Add`` button to save them.
If new tags aren't allowed, this is the only way to add tags via UI.

Delete Tags
-----------

If you don't need a tag, delete it with a click on the trash icon in the **Action**
column.

Find Tagged Tickets
-------------------

You can find tickets based on their tags in different ways:

By providing an appropriate overview
   Create a new overview and select "Tag contains ..." as condition.
   You can find further information in :doc:`overviews`.

By a search-query
   Enter e.g.: ``tags:americano`` in the search and you will get all
   tickets that have been tagged accordingly.

   .. figure:: /images/manage/tags/tags-search.png
      :alt: Screenshot shows Zammad's search with a search string "tags:americano".

By clicking on the tag in the tag management
   In the tag management you can find an overview of existing tags used in the
   system (and a counter how often they are used):

   .. figure:: /images/manage/tags/tag-management.png
      :alt: Screenshot shows tag management settings.

   By clicking the blue counter, a search for this tag is pre-populated in the
   search bar. Select one of the tickets or get a complete overview of all
   tickets that have this tag attached by clicking the ``Show Search Details``.
