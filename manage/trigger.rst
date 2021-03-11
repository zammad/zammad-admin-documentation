Triggers
========

Use triggers to set up all kinds of 🎛️ **if-this-then-that** automation workflows.

.. hint:: For ⏳ **every-so-often** automation workflows,
   try :doc:`schedulers </manage/scheduler>` instead.

The first thing to know about triggers is that **you're already using them**.
From the moment you set up Zammad, it starts sending auto-replies
to all incoming emails. Recognize this line?

.. figure:: /images/manage/trigger-example01_ticket_zoom.png
   :alt: Screenshot of auto-reply notification in ticket view

It means that the ticket is from an incoming customer email,
and that the customer received this message in response:

.. figure:: /images/manage/trigger-example01_received_message.png
   :alt: Screenshot of auto-reply in customer’s inbox

This auto-reply message is a **trigger**.
You can disable it, modify it, or create new ones
for all sorts of automation tasks on the Trigger page of the admin panel:

.. figure:: /images/manage/trigger-example01_admin_panel.png
   :alt: Screenshot of “Triggers” page in admin panel

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /manage/trigger/learn-by-example
   /manage/trigger/how-do-they-work
   /manage/trigger/limitations
   /manage/trigger/system-notifications
