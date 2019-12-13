Web
***

You can define whether a customer can create tickets via the web interface or not.
If they can you can furthermore define groups for which a customer can create tickets via web interface. "-" means all groups are available.

.. image:: /images/channels/zammad-web_configure-groups.jpg

That means for example: if you are working with a dispatcher, you could implement a group "Income" and only select this group here. Thus, all incoming tickets are routed to this group and can be dispached to other groups from here.

.. figure:: /images/channels/zammad-web_customer-creates-new-ticket.jpg
   :figclass: align-center

   In this example we selected "Sales" and "2nd Level" to be selectable for the customer.
