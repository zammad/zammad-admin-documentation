Trigger Examples
================

To get you up and running quickly, here are some examples
of the kinds of automation tasks you can set up with triggers.

To learn about triggers in detail, first go to
:doc:`/manage/trigger/how-do-they-work`.

1. Any time Jacob Smith creates a ticket, assign it to the Sales group:

   .. figure:: /images/manage/trigger/move-tickets-of-specific-customer-to-specific-group_with_locale.png
      :align: center
      :scale: 80%

2. Emma Taylor is responsible for all sales internally, so if a new ticket has
   the word "order" in the subject, assign it to her and make sure it's set
   with a high priority:

   .. figure:: /images/manage/trigger/trigger-based-prioritize-change_with_locale.png
      :align: center
      :scale: 80%

.. _trigger-example-3:

3. Send an auto-reply email to any customer who creates a ticket via web, if
   the detected language is English:

   .. figure:: /images/manage/trigger/trigger-based-auto-replies-on-follow-ups_with_locale.png
      :align: center
      :scale: 95%

.. note:: 📨 **Not all automated messages come from triggers!**

   For instance, when *agents* receive a system email
   about a newly created ticket,
   that's built into the system itself.
   If you need to customize those,
   you will have to
   :doc:`manually edit files on your server </manage/trigger/system-notifications>`.
