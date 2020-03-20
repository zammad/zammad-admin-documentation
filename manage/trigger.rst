Trigger
=======

.. toctree::
   :hidden:

   /manage/trigger/conditions-and-actions
   /manage/trigger/examples
   /manage/trigger/other-notifications

This page introduces triggers and helps you to understand their scope, 
what they can help you with and what you can't achieve.

  * :doc:`/manage/trigger/conditions-and-actions`
  * :doc:`/manage/trigger/examples`
  * :doc:`/manage/trigger/other-notifications`
  * :ref:`trigger-scope`
  * :ref:`trigger-default-configuration`
  * :ref:`trigger-how-they-work`

.. _trigger-scope:

Scope
-----

It's important to understand when a trigger can be used and when it's better to use e.g. Zammads :doc:`/manage/scheduler`. 

Triggers will fire during the following conditions:

  * Creation of a ticket
  * Updating a ticket

While the creation of tickets and triggering these actions is straight forward, updated of tickets are a bit trickier. 
In terms of triggers, a ticket is only updated if you press the update button on the lower right of a ticket. 
Adding tags to a ticket or switching articles visibility **is no ticket update**.

Also keep in mind that we're always only working on the last article. This means you can't trigger for past articles. 
Triggers always handle the current ticket attributes and the article (if applicable) that cause the trigger to fire.

If your use case doesn't fit in above possibilities, you might want to have a look at Zammads :doc:`/manage/scheduler`.

.. _trigger-default-configuration:

Default configuration
---------------------

.. Warning:: By default Zammad has an auto reply trigger activated. This trigger will reply to **all incoming emails** and reply to them!

By default, every time a customer creates a new ticket, they automatically 
receive a confirmation email to assure them that their issue has been received
successfully. This trigger can be deactivated at any time if needed.

Triggers are very flexible and can help to achieve various things. 
You may want to check out some of our :doc:`/manage/trigger/examples`.

.. _trigger-how-they-work:

How triggers work
-----------------

Triggers consist of two parts: **conditions** and **changes**. Conditions
answer the question, “when should this trigger fire?” Changes answer the
question, “what should happen when it does?”

Triggers are evaluated in alphabetical order, by **name.**
