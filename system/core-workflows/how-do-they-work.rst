How do they work?
=================

Core Workflows are executed according to their priority.
If two workflows have the same priority, they are executed in alphabetical
order based on their **name**.

Because of the way Core Workflows work, all changes to attributes
are checked with the application server - please see :doc:`limitations`
for possible issues.

Below we're talking about settings that are important and not self-explanatory.

Object
------

Choose the object context you want to run the workflow in.
This will decide on your available conditions and actions.

.. tip::

   You will be able to use attributes that are related to the selection in
   your conditions.

   | This means:
   | Ticket objects also have access to the ticket customer.

Context
-------

Choose in which situation the workflow is applied.
Contexts can be combined to avoid duplicate workflows.

Creation mask
   If selected, your conditions and actions will affect all applicable creation
   masks.

Edit mask
   If selected, your conditions and actions will affect all applicable edit
   masks.

Conditions
----------

Zammad differentiates between selected and saved conditions.
These can be combined wherever needed.

   .. warning:: **⚠️ Restrict workflows to specific roles if needed!**

      By default and unless configured in conditions, workflow rules are
      executed for **all roles**. This also affects your customers!

Selected Conditions
   These conditions only match if a complying selection is made (e.g. choosing
   another group in the ticket without saving).
   This applies also for the the creation of items and temporarily saved values.

Saved Conditions
   These conditions only match if the selected values are stored in the
   database. It ignores the current value or selection of the field, as long as
   the changes are not saved (e.g. performing field operations for an existing
   ticket, which is viewed/opened by an agent).

      .. note::

         Keep in mind that the value has to be available in the situation
         where you need it. Otherwise the condition won't match.

         Example: you can't perform any actions with *saved condition* on a
         ticket in creation, because there are no saved values at that time.

Action
------

Which actions should we run on the relevant fields?
The possible actions depend on the object type. However, usually
you can at least change the visibility and whether the field is mandatory.

   .. note:: **🚧 Actions are not available for related context**

      Let's assume you are working in the ticket context.
      While you can have customer *conditions*, you *can't adjust* objects with
      actions in that scope.

      That's because this wouldn't have any impact on the ticket dialogue.
      Of course all ticket attributes (state, owner, ...) are available.

   .. warning::

      Please also have a look at our :doc:`limitations` to be safe
      from surprises.

Available Operators
^^^^^^^^^^^^^^^^^^^

.. note::

   The availability of operators depends on the object type and scope.

.. hint:: **🤔 Actions can cause confusion!**

   Please note that actions may or may not restrict API based access to
   attributes. We're displaying the following icons for your overview
   to understand these limits better:

   | |api| This icon indicates the action affects the API.
   | |ui| This icon indicates the action only affects the web interface.

show |ui|
   Display the chosen field. Allows setting of values.

hide |ui|
   Hide the chosen field. However, it technically still allows setting the
   field.

   .. warning::

      The field is **not** gone and still contains an existing value (if set)!
      Consider *remove* instead, if you want this field to be gone.

remove |ui|
   Entirely removes the field. The field value will not be evaluated.

set mandatory |ui| |api|
   Sets the field to mandatory.

set optional |ui| |api|
   Sets the field to optional.

add option |ui| |api|
   Allows adding options to tree selects or selects.

   .. note::

      You have to use the "remove option" before performing this action.
      It allows you to use *existing* configured values.

remove option |ui| |api|
   Allows removing options from tree selects or selects.

   .. note::

      It allows you to use *existing* configured values.

set fixed to |ui| |api|
   Reduces the available options by your selection.

   .. tip::

      This may reduce your workflows in terms of *add option* and
      *remove option*. 🤓

fill in |ui|
   Allows filling in of string and integer fields with your values.

fill in empty |ui|
   Allows filling in of string and integer fields with your values
   **if the field is empty**.

select |ui|
   Select a specific value within a select, tree select or boolean field.

auto select |ui|
   Helps users with tree select and select fields:

   If the field has only one option available for selection and no value yet,
   the value will be automatically set.

   .. warning::

      This option only works if you have one value and doesn't work if there is
      more than one option available.

set readonly |ui|
   Allows you to display an attribute as read only (which means no changes are
   possible).

unset readonly |ui|
   In case a workflow set the field in question to read only, you can undo this
   with option above.

.. |api| image:: /images/icons/api-symbol.png
   :height: 42px
   :width: 42px

.. |ui| image:: /images/icons/ui-symbol.png
   :height: 42px
   :width: 42px

Stop after match
----------------

Here you can decide if other workflows are executed after the current one.

If set to ``no`` (default), no further worflows will be executed after the
current one.

If set to ``yes``, further workflows will be executed if they match the
condition. In this case, it is possible that your actions from the current
workflow can be overwritten by another workflow.

Priority
--------

You can define the sequence, in which the workflows are executed. The default
value is ``500``.

The workflows are executed in ascending order by their priority. That means
lower values (e.g. ``100``) are executed before higher ones (e.g. ``999``).
