Limitations
===========

Triggers are one way of automated actions. In addition, there are also
:doc:`scheduler </manage/scheduler>` and
:doc:`postmaster filter </channels/email/filters>` based automation. Make sure
to have a look at those too. They can be more suitable, depending on your
use case.

Limitations of triggers:

- Triggers are executed when a ticket is updated via clicking the "Update"
  button. Changing a value without updating the ticket (e.g. setting a tag) does
  not lead to a trigger execution.
- If a trigger runs due to an an  added article, the context for the trigger
  is always this last article. Triggers aren't running based on older ticket
  states or articles.
- Related object attributes might not be available for performing changes.

