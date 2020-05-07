Limitations
===========

It's important to understand when a trigger can be used and when it's better to use e.g. Zammads 
:doc:`/manage/scheduler` or `postmaster filter <https://admin-docs.zammad.org/en/latest/channels/email/filters.html>`_. 

Triggers will fire during the following conditions:

  * Creation of a ticket
  * Updating a ticket

While the creation of tickets and triggering these actions is straight forward, updated of tickets are a bit trickier. 
In terms of triggers, a ticket is only updated if you press the update button on the lower right of a ticket. 
Adding tags to a ticket or switching articles visibility **is no ticket update**.

Also keep in mind that we're always only working on the last article. This means you can't trigger for past articles. 
Triggers always handle the current ticket attributes and the article (if applicable) that cause the trigger to fire.

If your use case doesn't fit in above possibilities, you might want to have a look at Zammads :doc:`/manage/scheduler`.
