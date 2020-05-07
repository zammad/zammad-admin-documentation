Learn by example
================

To get you up and running quickly, here are some examples
of the kinds of automation tasks you can set up with triggers.

.. hint:: If they don't make sense to you, don't worry—just skip ahead to
   :doc:`/manage/trigger/how-do-they-work`
   to learn about all the options in detail,
   then come back here to see them in action.

1. Any time Jacob Smith creates a ticket, assign it to the Sales group:

   .. figure:: /images/manage/trigger/Zammad_Helpdesk_trigger-example1.png

2. Emma Taylor is responsible for all sales internally, so if a new ticket has
   the word “order” in the subject, assign it to her and make sure it’s set
   with a high priority:

   .. figure:: /images/manage/trigger/Zammad_Helpdesk_trigger-example2.png

3. Send an auto-reply email to *anyone* who responds to a ticket:

   .. figure:: /images/manage/trigger/Zammad_Helpdesk_trigger-example3.png

.. note:: 📨 **Not all automated messages come from triggers!**

   For instance, when *agents* receive a system email
   about a newly created ticket,
   that’s built into the system itself.
   If you need to customize those,
   you will have to :doc:`manually edit files on your server </manage/trigger/system-notifications>`.
