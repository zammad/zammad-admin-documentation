Limitations
===========

It's important to understand when a trigger can be used and when it's better
to use e.g. Zammad's :doc:`/manage/scheduler` or
:doc:`postmaster filters </channels/email/filters>`. 

Triggers will fire during the following conditions:

  * Creation of a ticket
  * Updating a ticket

  .. important::

    Update-based triggers will trigger, when conditions match and an article was created
    or an attribute of the trigger conditions has changed.
    
    E.g. A trigger which is listening on the priorities **1 low** will trigger if the 
    ticket was changed to **1 low** or got an new article in that priority state.

While the creation of tickets and triggering these actions is straight forward,
updated of tickets are a bit trickier. In terms of triggers, a ticket is only
updated if you press the update button on the lower right of a ticket. 
Adding tags to a ticket or switching articles visibility
**is no ticket update**.

Also keep in mind that we're always only working on the last article.
This means you can't trigger for past articles. 
Triggers always handle the current ticket attributes and the article
(if applicable) that cause the trigger to fire.

If your use case doesn't fit in above possibilities, you might want to have a
look at Zammad's :doc:`/manage/scheduler`.
