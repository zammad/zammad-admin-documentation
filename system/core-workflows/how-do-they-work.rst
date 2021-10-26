How do they work?
=================

Core Workflows are evaluated by priority.
If 2 workflows have the same priority by alphabetical order by **name**.
Workflows are evaluated in alphabetical order, by **name.**

Because of the way Core Workflows works all changes to attributes
are checked with the application server – please see :doc:`limitations`
for possible issues.

Below we're talking about settings that have an impact and are not
self-explanatory.

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
Contexts can be combined to reduce workflows.

Creation Mask
   Once selected your conditions and actions will affect all applicable creation
   masks.

Edit Mask
   Once selected your conditions and actions will affect all applicable edit
   masks.

Conditions
----------

Zammad decides in between selected and saved conditions.
These can be combined wherever needed.

   .. tip:: **🤓 Combining conditions allows "OR"-selections**

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
   These conditions only apply if they're saved within the database regardless
   of the current value or selection of the field.

      .. note::

         Keep in mind that the value has to be available in the situation
         where you need it. Otherwise the condition won't match.

Action
------

Which actions should we run on the relevant fields?
The possible actions depend on the object type, however, usually
you can at least change the visibility and whether the field is mandatory.

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

   The availability of operators depends on the object type and scope.

.. hint:: **🧐 Actions can cause confusion**

   | Please note that actions may or may not restrict API based access to
     attributes. We're displaying the following icons for your overview
     to understand these limits better. 👀
   | |api| This icon indicates the action affects the API.
   | |ui| This icon indicates the action only affects the web interface.

show |ui|
   Display the field in question. Allows setting of values.

hide |ui|
   Hide the field in question however,
   technically still allows setting the field.

      .. warning::

         The field is **not** gone and still contains any value it provides!
         You may want to consider *remove* instead.

remove |ui| 
   Entirely removes the field. The field value will no get evaluated.

set mandatory |ui| |api|
   Sets the field to mandatory.

set optional |ui| |api|
   Sets the field to optional.

add option |ui| |api|
   Allows adding options to tree selects or selects.

      .. note::

         This requires options to be hidden beforehand (remove option).
         It allows to use *existing* configured values.

remove option |ui| |api|
   Allows removing options from tree selects or selects.

      .. note::

         It allows to use *existing* configured values.

set fixed to |ui| |api|
   Reduces the available options by your selection.

      .. tip::

         This may indirectly reduce your workflows in terms of
         *add option* and *remove option*. 🤓

fill in |ui|
   Allows population of string and integer fields with your value.

fill empty |ui|
   Allows population of string and integer fields with your value
   **if the field is empty**.   

select |ui|
   Select a specific value within a select, tree select or boolean fields.

auto select |ui|
   | Helps the user on tree selects and select fields:
   | If the field has one option to select only and has no value yet, the
     value is automatically set.

   .. warning::

      This option only works if you have one value and acts passively with more
      options.

set readonly |ui|
   Allows you to display an attribute as read only.

unset readonly |ui|
   In case a workflow set the field in question to read only, you can
   undo this with above option.

.. |api| image:: /images/icons/api-symbol.png
   :height: 42px
   :width: 42px

.. |ui| image:: /images/icons/ui-symbol.png
   :height: 42px
   :width: 42px

Stop after match
----------------

Stop evaluation of other, following workflows that would match otherwise.

Default: ``no``

Priority
--------

You decide at which point your workflow is evaluated.
Priorities are sorted descending – this means that a workflow matching
can stop matching in specific situations.

Default: ``500``
