Web
***

The web channel mainly affects your customers' using the web interface.
These settings allow you to restrict your customers ticket creation.

   .. tip::

      :doc:`/system/core-workflows` allow even further restrictions and
      actions if you need them. 🤓

.. figure:: /images/channels/web/setting-overview_web-channel.png
   :width: 90%
   :alt: The web channel settings page

Settings affecting your customer
--------------------------------

Enable Ticket creation
   You can forbid customers to create tickets via the web interface.
   This will remove the "➕" button on the lower left.

   Default: ``yes``

      .. note::

         This does not forbid updating existing tickets via UI.



Group selection for Ticket creation
   By default your customers may create tickets in all groups.
   As this may be an issue, especially when having several support levels or
   internal groups, you can always select a set of groups you want to be
   available.

   Default: ``-``

      .. note:: **🤓 This does not affect your agents**

         Agents are affected by :doc:`/manage/groups/access-levels`.

Global settings affecting *all* users
-------------------------------------

Tab behavior after ticket creation
   This setting allows administrators to provide a default behavior of Zammad's
   tab *after* ticket update.

   Default: ``Stay on tab``

      .. note:: **Users can always overrule**

         If your user decides to select a different tab behavior on any ticket,
         this action will be the new default behavior for that user.

         Zammad remembers the decision of the user. 💾

            .. figure:: /images/channels/web/tab-behavior-ticket-zoom.png
               :alt: Ticket zoom with tab behavior to choose for the user
