Web
===

Configure the ticket creation by your customers via web interface. To configure
it under *Channels > Web*, you need to have the ``admin.channel_web``
permission.

For a fine-grained control over the fields visible to customers, 
consider using :doc:`core workflows </system/core-workflows>`.

.. figure:: /images/channels/web/setting-overview_web-channel.png
   :alt: Screenshot shows the web channel settings page of Zammad

Enable Ticket Creation
----------------------

You can forbid customers to create tickets via the web interface. This will
remove the ``+`` button on the bottom of the primary navigation.
This does not forbid *updating* existing tickets via UI.

Default: **yes**

Group Selection for Ticket Creation
-----------------------------------

By default, your customers can create tickets in all groups.
As this may be unwanted, especially when having several support levels or
internal groups, you can select a set of groups you want to be selectable
by your customers. If you only select one group, the field is not displayed at
all.

This does not affect your agents. Agents are affected by
:doc:`/manage/groups/group-permissions`.

Default: unset

Tab Behavior After Ticket Creation
----------------------------------

This setting allows administrators to provide a default behavior after a ticket
update. Users can always override this behavior (see screenshot below). If your
user decides to select a different tab behavior on any ticket, this action will
be the new default behavior for that user. Zammad remembers the decision of the
user.

.. note:: This setting is also valid for agents. 

Default: **Stay on tab**

.. figure:: /images/channels/web/tab-behavior-ticket-zoom.png
   :alt: Screenshot shows ticket detail view with tab behavior menu
   :align: center
