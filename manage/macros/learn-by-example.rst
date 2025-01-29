Macro Example
=============

To get you up and running quickly, here are some examples
of the kinds of one-click actions you can set up using macros.

To learn about macros in detail, go to the section
:doc:`/manage/macros/how-do-they-work`.

1. If you deal with a lot of spam, you could set up a macro that applies
   the following changes to a ticket:

   :State: closed
   :Tags:  add ``spam``
   :Owner: current user

   .. figure:: /images/manage/macros/macro-example-mark-ticket-as-spam.png
      :align: center
      :width: 60%
      :alt: Screenshot showing spam macro configuration

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

   .. figure:: /images/manage/macros/macro-example-postpone-ticket-for-7days.png
      :align: center
      :width: 60%
      :alt: Screenshot showing postpone macro configuration
