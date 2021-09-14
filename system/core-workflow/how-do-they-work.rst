How do they work?
=================

Core Workflows are evaluated by priority.
If 2 workflows have the same priority by alphabetical order by **name**.
Triggers are evaluated in alphabetical order, by **name.**

Because of the way Core Workflow works all changes to attributes
are checked with the application server – please see :doc:`limitations`
for possible issues.

Below we're talking about settings that have an impact and are not self
explanatory.

Object
------

Choose the object context you want to run the workflow in.
This will decide on your available conditions and actions.

.. tip::

   You will be able to use objects that are in relation to your selection in
   your conditions.
   
   | This means:
   | Ticket objects also have access to the ticket customer.

Context
-------

Choose in which situation the workflow is applied.
Actions can be combined to reduces workflows.

Creation Mask
   When selected your conditions and actions will affect all applicable creation
   masks.

Edit Mask
   When selected your conditions and actions will affect all applicable edit
   masks.

Conditions
----------

Zammad decides in between selected and saved conditions.
These can be combined where ever needed.

   .. tip:: **🤓 Combining conditions allows OR selections**

      However, note that each condition type counts as *and* selector
      and can't overrule the other condition type.

      Every attribute can be used once per condition type.

   .. warning:: **⚠ Restrict on role basis if needed ⚠**

      By default, unless configured in conditions, workflow rules are
      evaluated for **all roles**. This also affects your customers! 🙀

Selected Conditions
   These conditions only match if they're active in selection.
   This applies for drafts (active selection) and currently saved values.

Saved Conditions
   These conditions only apply if they're saved within the database no matter
   of the current value or selection of the field.

      .. note::

         Keep in mind that the value has to be available in the situation
         you need it. Otherwise the condition won't match.

Action
------

Which actions should we run on the relevant fields?
The possible actions depend on the object type, however, usually
you can at least change the visibility and if the field is mandatory.

   .. note:: **🚧 Actions are not available for relations**

      Let's say you're working in ticket context.
      While you can have customer conditions, you can't adjust objects with
      actions in that scope.

      That's because this wouldn't have any impact on the ticket dialogue.
      All ticket attributes (state, owner, ...) are available.

   .. warning::

      Please also have a look at our :doc:`limitations` to be safe
      from surprises.

Available Operators
^^^^^^^^^^^^^^^^^^^

.. note::

   The availability of available operators depends on the object type and scope.

show
   Display the field in question in UI. Allows setting of values.

hide
   Hide the field in question from UI, however, still allows setting the field.

      .. warning::

         The field is **not** gone and still contains any value it provides!
         You may want to consider *remove* instead.

remove
   Entirely removes the field from UI and API.
   The field value cannot be changed / set.

      .. warning::

         This fields value is being unset in case it's set!
         You may want to consider *hide* instead.

set mandatory
   Sets the field to mandatory for UI and API use.

set optional
   Sets the field to optional for UI and API use.

add option
   Allows adding options to tree selects or selects. (UI & API)

      .. note::

         This requires options to be hidden before hand (remove option).
         It allows to use *existing* configured values.

remove option
   Allows removing options from tree selects or selects. (UI & API)

      .. note::

         It allows to use *existing* configured values.

set fixed to
   Reduces the available options by your selection. (UI & API)

      .. tip::

         This may indirectly reduce your workflows in terms of
         *add option* and *remove option*. 🤓

fill in
   Allows population of string and integer fields with your value for UI.

fill empty
   Allows population of string and integer fields with your value
   **if the field is empty** for UI.   

select
   Select a specific value within a select, tree select or boolean field
   within UI.

auto select
   | Helps the user on tree selects and select fields:
   | If the field has one option to select only and has no value yet, the
     value is automatically set. This applies to the UI only.

   .. warning::

      This option only works if you have one value and acts passive with more
      options.

Stop after match
----------------

Stop evaluation of other, following workflows that would match other wise.

Default: ``no``

Priority
--------

By adjusting the priority you decide when a workflow is checked on.
Priorities are sorted descending – this means that a workflow matching
can stop matching in specific situations.

Default: ``500``
