Trigger
=======

This page introduces triggers and helps you to understand their scope, 
what the can help you with and what you can't achieve.

Table of content
----------------

  * Scope
  * Default configuration
  * How triggers work
  * Conditions and actions
  * Examples
  * Other notifications

Scope
-----

Default configuration
---------------------

.. Warning:: By default Zammad has an auto reply trigger activated. This trigger will reply to **all incoming emails** and reply to them!

By default, every time a customer creates a new ticket, they automatically 
receive a confirmation email to assure them that their issue has been received
successfully. This trigger can be deactivated at any time if needed.

Triggers are very flexible and can help to achieve various things. 
You may want to check out some of our examples.

How Do They Work?
-----------------

Triggers consist of two parts: **conditions** and **changes**. Conditions
answer the question, “when should this trigger fire?” Changes answer the
question, “what should happen when it does?”

Triggers are evaluated in alphabetical order, by **name.**
