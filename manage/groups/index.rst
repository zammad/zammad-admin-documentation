Groups
======

This is the group management area. From here you can edit existing groups and add new groups.

Groups in Zammad are similar to working groups that deal with different topics within a company. For example, the tickets relevant to the sales department might be available in the *Sales* group, while the tickets for the support department might be available in the *Support* group. These are just examples; how you structure your groups is up to you.

Tickets enter Zammad through various channels (e.g. via email) and are then sorted into these groups. The tickets (cases) are thus made available to the agents responsible for the group. Each ticket can only belong to one group, and you can decide via **access levels** (see below) what access your agents have in each group. For example, you might want set up a group *Management* for confidential tickets; with access levels, you can configure that only a few select agents will have access to these tickets.

For an additional way to categorize tickets, have a look at  :doc:`/manage/tags`.

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   settings
   access-levels

.. hint:: If the *Group* field does not appear in the ticket view, ensure that:

   * you have created more than one group
   * the current user has "change" permissions to more than one group

   This is necessary because Zammad automatically hides selection fields with only one option.
