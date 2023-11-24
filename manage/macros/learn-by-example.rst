Macro Example
=============

To get you up and running quickly, here are some examples
of the kinds of one-click actions you can set up using macros.

.. hint::

   If they don't make sense to you, don't worry - just skip ahead to
   :doc:`/manage/macros/how-do-they-work`
   to learn about all the options in detail,
   then come back here to see them in action.

1. If you deal with a lot of spam, you could set up a macro that applies
   the following changes to a ticket:

   :State: closed
   :Tags:  add ``spam``
   :Owner: current user

   .. figure:: /images/manage/macros/macro-example-mark-ticket-as-spam.gif
      :align: center
      :width: 70%
      :alt: Screencast showing spam macro configuration and behavior

   .. tip:: 💡 Run this macro in a :doc:`/manage/scheduler`
      to periodically clean up unwanted tickets.

2. If you want to set a ticket's state to *pending reminder*, it's
   usually a two-step process - first select the state, then select a date.
   To always set a reminder for the same, fixed amount of time (say,
   seven days later), you can bundle the whole change into a macro:

   :Note:         "Postponing ticket for 7 days." (🔒 internal visibility only)
   :State:        pending reminder
   :Pending Till: relative / 7 / days
   :Owner:        current user

   .. figure:: /images/manage/macros/macro-example-postpone-ticket-for-7days.gif
      :align: center
      :width: 70%
      :alt: Screencast showing postpone macro configuration and behavior
