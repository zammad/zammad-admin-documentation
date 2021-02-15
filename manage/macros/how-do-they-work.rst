How do they work?
=================

Macros consist of **actions**. Thy allow you do run several actions 
on a specific or selection of tickets.

Macros can be restricted by groups to allow specific actions for specific user 
groups. In some situations macros might be the wrong choice, 
see :doc:`/manage/macros/limitations` for more information.

Actions
-------

When creating a macro, define your desired actions:

   .. figure:: /images/manage/macros/macro-actions.png
      :width: 80%
      :align: center
      :alt: Screenshot showing different possible actions for macros.

A macro can do the following things:

* Modify the ticket
   *e.g.,* Escalate its priority, close it, reassign it, rename it, add tags, etc.
* add internal or public notes to the ticket
   This allows you to help your agents with specific information if needed. 
   (e.g. automated changes a macro applied to the ticket)
* use relative time 
   (e.g. set a pending reminder of a ticket in 7 days)

Further Settings
----------------

:Once completed:
   This setting allows you decide how you want to proceed with the current 
   ticket tab. 

   .. note:: 

      Please see :doc:`/manage/macros/limitations` in this regard as well.

:Note:
   A note for you and your other administrators. 
   It's only shown within the configuration screen, rails console and API.

:Groups:
   Some macros may not make any sense outside of specific groups. 
   This setting allows you to select groups the Macro should be available in.

:Active:
   If deleting is not yet an option, you can also set Macros to inactive.

To Clone or Delete ...
----------------------

The macro overview screen allows you to either clone or delete the macro in 
question.

   .. figure:: /images/manage/macros/macro-clone-and-remove.gif
      :align: center
      :width: 80%
      :alt: Screencast showing the creation of a new macro via cloning and its removal

   .. tip::

      During cloning Zammad will allow you to configure your very new macro 
      right away. If you cancel the new dialog, no new Macro will be added.
