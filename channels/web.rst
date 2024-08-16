Web
===

The web channel mainly affects your customers using the web interface.
These settings allow you to restrict your customers ticket creation.

If you even further want to configure what your customers can see and select,
you should have a look in our :doc:`/system/core-workflows` documentation.

.. figure:: /images/channels/web/setting-overview_web-channel.png
   :width: 90%
   :alt: The web channel settings page

Settings Affecting Your Customer
--------------------------------

Enable Ticket creation
   You can forbid customers to create tickets via the web interface.
   This will remove the "➕" button on the lower left.
   This does not forbid *updating* existing tickets via UI.

   Default: ``yes``

Group selection for Ticket creation
   By default, your customers can create tickets in all groups.
   As this may be unwanted, especially when having several support levels or
   internal groups, you can select a set of groups you want to be selectable
   by your customers.

   This does not affect your agents. Agents are affected by
   :doc:`/manage/groups/access-levels`.

   Default: (empty selection)


Global Settings Affecting *All* Users
-------------------------------------

Tab behavior after ticket creation
   This setting allows administrators to provide a default behavior of Zammad's
   tab *after* ticket update.

   Users can always overrule this behavior. If your user decides to select a
   different tab behavior on any ticket, this action will be the new default
   behavior for that user.

   Zammad remembers the decision of the user.

   Default: ``Stay on tab``

   .. figure:: /images/channels/web/tab-behavior-ticket-zoom.png
      :alt: Ticket zoom with tab behavior to choose for the user
