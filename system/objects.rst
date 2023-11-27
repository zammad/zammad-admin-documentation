Objects
*******

In Zammad you can add your own fields to tickets, users, organizations and even
groups (these are called "objects"). This can be useful if you need to add
further information to a ticket or any other object in Zammad and the
information doesn't fit in any existing field.

.. note::

   Try to avoid deleting attributes (and disable them instead) as Zammad might
   run into unexpected conditions if they are referenced somewhere.

.. image:: /images/system/objects/object-overview.png

Here's an overview of object attributes. On the upper right you can add new
attributes. By default, there will be no custom fields - standard attributes
will be grayed out, you can't delete or change those.
You can edit custom attributes (they are displayed in black font and have a
trash bin on the right side) just by clicking on them.

   .. note::

      Attributes you add to Zammad, no matter if they have default values or
      not, will not update existing information. This means a new ticket field
      technically will be empty unless you populate it.

      Especially in ticket scope this also means that newly added attributes
      will be indicated as "changed" to agents that view the ticket. This may
      interfere with Zammad's tabs behavior.

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /system/objects/types
   /system/objects/permissions

Ordering attributes
-------------------

Since Zammad introduced :doc:`/system/core-workflows` the need to have a
custom positioning for attributes has become more important than ever.

To adjust the position of such an attribute, simply click on the attribute
entry in question, scroll down and adjust the position number.

.. figure:: /images/system/objects/object-positioning.png
   :alt: Screenshot showing custom attribute entries ordered in between default ones

.. hint::

   In case two attributes have the same position value, Zammad will sort
   alphabetically by name automatically.

   | **Limitation**
   | Please note that you cannot change the positioning of default attributes
     at this time.

Updating database after adding or editing attributes
----------------------------------------------------

When adding or changing attributes, Zammad will not apply the changes instantly,
but instead shows you the changed attributes first.
If you're ready to go, just click on "Update database" to apply the changes
to Zammad. If you made a mistake or just want to discard your changes, click
"Discard changes".

.. warning::

   After applying the changes with "Update Database", a restart of Zammad
   is **mandatory**. If you don't perform it, you may experience unexpected
   behavior or even errors. You may want to do this kind of configuration
   during maintenance windows.

      .. figure:: /images/system/objects/update-database.png
         :align: center

         Changes on objects require you to update the database
         to apply these changes.

   .. tip:: **🤓 Service restarts can be automated**

      | Hosted environments automatically restart for you.
      | If you're using a self-hosted installation you can use
        :docs:`environment variables </appendix/configure-env-vars.html>`

System attributes
-----------------

Zammad comes with pre-configured attributes. Some of them can't be edited via
UI (or at all). This is required for proper operation of Zammad and not a bug.

Ticket State
^^^^^^^^^^^^

If the pre-configured states aren't enough for you or you want to change
them, you can do so by clicking on the cogwheel icon in the state row in the
ticket tab:

.. figure:: /images/system/objects/ticket-state/highlighted-state-attribute.png
   :align: center
   :alt: Screenshot showing highlighted ticket state attribute

.. danger:: Be careful when changing pre-configured states. This can lead
   to unwanted behavior in some cases.

Handling of states
   In the state configuration screen, you can add new states, disable states or
   change states.

   .. figure:: /images/system/objects/ticket-state/table-ticket-states-default.png
      :align: center
      :scale: 80%
      :alt: Screenshot showing table of default ticket states

   To add a new state, click on the "New Ticket State" button in the top right
   corner. To change an existing state, simply click on the affected state. This
   opens an edit dialog.

   You can also clone a state or set them to "Default for new tickets" or
   "Default for follow-ups" by clicking on the ⁝ action button and select the
   desired function.

   *Default for new tickets* means that this state is used for every newly
   created ticket.

   *Default for follow-ups* means that this state is used if the ticket is
   re-opened after it was closed.

Ticket state in detail
   Below you can find a description for each field and option. Please head over
   to the :ref:`example <example-state>` to see the edit dialog.

   Name
      This is the name of the state and what you and your agents are seeing when
      choosing a state somewhere (e.g. in tickets, trigger configuration).

   .. Reference for linking from Zammad state edit/create modal

   .. _state-type-reference:

   Type
      There are different state types you can choose from. By default, Zammad
      comes with one state per state type.

        - **new**: for states for tickets that are new and it hasn't been
          worked on them
        - **open**: for states for tickets that are in progress and agents are
          working on them
        - **merged**: for states for tickets that are merged with other tickets
        - **pending reminder**: for states for tickets that are in progress and
          you want to set a reminder. (default example: *pending reminder*)
        - **pending action**: for states for tickets that are waiting for a
          specified time and then change their state (default example:
          *pending close*)
        - **closed**: for states for tickets that are finished and do not need
          to be processed further

      .. attention:: ⚠️ Choosing the correct state type is important! If you are
         in doubt, have a look on the default states and their types!

   Ignore escalation
      Here you can define whether tickets of this state will count to escalation
      time or not.

   Note
      You can create a note for the state to inform other admins about the
      state. This has no effect on tickets.

   Active
      Set the state to *active* or *inactive*.

      .. note:: it is technically possible to set all states to inactive. To
         keep Zammad working in such a case, the inactive flag of one of the
         states is ignored.

   .. _example-state:

Ticket state example
   Let's assume we want to create a new state which indicates that the
   ticket has to wait for a response of a third party (e.g. service contractor
   or manufacturer) and we want to to be able to set a reminder.

   First we give the new state a proper name. In this example we call it
   "waiting for manufacturer".

   As state type we choose "pending reminder". This indicates that the ticket is
   still open and we can set a reminder. This reminder can be useful if our
   manufacturer sometimes isn't responding or we want to remind him to give us
   an answer.

   We choose "no" for "ignore escalation" because we want to escalate the
   tickets even if we are waiting on the manufacturer's feedback.

   The **result** in the creation dialog will look like this:

   .. figure:: /images/system/objects/ticket-state/creation-dialog-ticket-state.png
      :alt: Screenshot showing ticket state creation dialog with example
      :scale: 80%
      :align: center

Ticket Priority
^^^^^^^^^^^^^^^

If the pre-configured priorities aren't enough for you or you want to change
them, you can do so by clicking on the cogwheel icon in the priority row in the
ticket tab:

.. figure:: /images/system/objects/ticket-priority/highlighted-priority-attribute.png
   :align: center
   :alt: Screenshot showing highlighted ticket priority attribute

Handling of priorities
   In the priority configuration screen, you can add new priorities, disable
   priorities or change priorities.

   .. figure:: /images/system/objects/ticket-priority/table-ticket-priorities-default.png
      :align: center
      :scale: 80%
      :alt: Screenshot showing table of default ticket priorities

   To add a new priority, click on the "New Priority" button in the top right
   corner. To change an existing priority, simply click on the affected
   priority. This opens an edit dialog.

   You can also clone a priority or set them to "Default for new tickets" by
   clicking on the ⁝ action button and select the desired function.

   *Default for new tickets* means that this priority is used for every newly
   created ticket.

Priorities in detail
   Below you can find a description for each field and option.

   Name
      This is the name of the priority and what you and your agents are seeing
      when choosing a priority somewhere (e.g. in tickets, trigger
      configuration).

   Highlight color
      Switch between *Low priority* (light blue), *High priority* (red) and -
      (default). This affects the displayed color for ticket titles in
      overviews.

      .. note:: The color options are currently limited to the mentioned
         options.

   Note
      You can create a note for the priority to inform other admins about the
      priority. This has no effect on tickets.

   Active
      Set the priority to *active* or *inactive*.
