Object Conditions
=================

Introduction
------------

This page describes the attribute checks you can execute for different object
attributes. You can use these checks in different places in Zammad like
:doc:`triggers </manage/trigger>` or defining
:doc:`overviews </manage/overviews>`. Please note that the available attributes
and the condition operators depend on the object context and where you want to
use it.

With these object attribute conditions you should be able to create quite
complex conditions. However, if you need to have additional AND/OR relations
for your conditions, have a look at the
:doc:`expert mode </misc/object-conditions/expert-mode>` section, where
you can find a description how to use it.

Object Types
------------

Depending on the location and selected attribute, the object context may change.
The default basic objects in Zammad are:

- Ticket
- User
- Organization
- Group

Within these 4 objects, you can even create your
:doc:`own custom attributes </system/objects>` and use them for
conditions. However, there are more object types and special context depending
on the feature you want to create a condition:

- Article
- Customer
- Execution time
- Session

Attribute Types
---------------

Depending on the attribute type, you can choose from different operators to
execute checks and build your conditions. Have a look below where you can find
a table with special functions followed by a listing of attribute types and
their operators.

Special Fields
^^^^^^^^^^^^^^

There are built in functions in Zammad which are selectable while creating or
editing a condition. Find them in the following table.

.. just edited already present functions. TODO: check and add missing ones.

.. list-table::
   :widths: auto
   :header-rows: 1

   * - Field
     - Context
     - Description
     - Operators
     - Offered values
   * - Action
     - Article,

       ticket
     - Checks performed action.

       Only available in triggers.
     - - is
       - is not
     - - created
       - updated
       - merged into
       - received merge
   * - Calendar
     - Execution

       time
     - Checks if event is in working time.

       Only available in triggers and scheduler.
     - - is in working time
       - is not in working time
     - Pre-defined calendars
   * - Customer
     - Ticket
     - Checks ticket customer.
     - - is
       - is not
       - has changed
     - - current user
       - specific user
       - not set
   * - Detected

       Language
     - Article
     - Checks the language of the article.
     - - is
       - is not
     - All languages which

       are supported by the

       language detection

       service.
   * - Existing

       members
     - Organization
     - Checks if organization

       has members.
     - - is
       - is not
     - - yes
       - no
   * - Existing

       tickets
     - Ticket

       customer/

       owner
     - Checks if tickets are assigned.

       Only available in scheduler.
     - - is
       - is not
     - - yes
       - no
   * - Group
     - Ticket
     - Checks affected group.
     - - is
       - is not
     - All configured and

       active groups.
   * - Organization
     - Ticket,

       customer
     - Checks affected organization.
     - - is
       - is not
     - - current user organization
       - specific organization
       - not set
   * - Owner
     - Ticket
     - Checks the owner.
     - - is
       - is not
     - - current user
       - specific user
       - not set (not defined)
   * - Sender
     - Article
     - Checks the type of sender.
     - - is
       - is not
     - - System
       - Agent
       - Customer
   * - State
     - Ticket
     - Checks ticket state.
     - - is
       - is not
     - All configured

       ticket states.
   * - Subscribe
     - Ticket
     - Checks if user is a

       ticket subscriber
     - - is
       - is not
     - - current user
       - specific user
       - not set (not defined)
   * - Tags
     - Ticket
     - Checks tags of a ticket.
     - - contains all
       - contains one
       - contains all not
       - contains one not
     - Text input field
   * - Time

       Accounting
     - Article
     - Checks if time is accounted.
     - - is set
       - not set
     - `-`
   * - Type
     - Article
     - Checks the type of the article.
     - - is
       - is not
     - All available

       article types.
   * - Visibility
     - Article
     - Checks the visibility

       of the article.
     - - is
       - is not
     - - internal
       - public

Text Field
^^^^^^^^^^

Checks if any field of type text contains a specific string.
The configured "Type" of input fields has no impact on the available options.

Available operators for matching:

- | **contains**: Matches if text contains a specific string.
- | **contains not**:
  | Matches if text does not contain a specific string.
- | **is any of**:
  | Matches if text is equal to any of given tokens.
- | **is none of**:
  | Matches if text is not equal to all of given tokens.
- | **starts with one of**:
  | Matches if text starts with one of given tokens.
- | **ends with one of**:
  | Matches if text ends with one of given tokens.
- | **matches regex**:
  | Evaluates if text matches provided regular expression
    (see also :ref:`remarks <regex>`).
- | **does not match regex**:
  | Evaluates if text does not match provided regular expression.

Textarea Field
^^^^^^^^^^^^^^

Checks if any field of type textarea contains a specific string.

Available operators for matching:

- **contains**
- **contains not**
- **has changed**

Boolean Field
^^^^^^^^^^^^^

Checks if any field of type boolean is true.

Available operators for matching:

- **is**
- **is not**
- **has changed**

Integer Field
^^^^^^^^^^^^^

Checks if any field of type integer has a specific value.

Available operators for matching:

- **is**
- **is not**
- **is less than**
- **is less than or equal to**
- **is greater than**
- **is greater than or equal to**
- **has changed**

Date Field
^^^^^^^^^^

Checks if a date is before or past (both absolute or relative) a specific point
in time or time period. Relative operators allow you to define a time period in
seconds, minutes, hours, days, weeks, months or years.

Available operators for matching:

- | **before (absolute)**:
  | If the date field's value is before the configured date,
    the condition will be met.
- | **after (absolute)**:
  | If the date field's value is after the configured date,
    the condition will be met.
- | **before (relative)**:
  | Matches the date field's value if the value is before the current
    date minus the selected time period.
- | **after (relative)**:
  | Matches the date field's value if the value is after the current
    date plus the selected time period.
- | **within last (relative)**:
  | Matches the date field's value if the value is in between the current
    date and the current date minus the selected time period.
- | **within next (relative)**:
  | Matches the date field's value if the value is in between the current
    date and the current date plus the selected time period.
- | **till (relative)**:
  | Matches the date field's value if the value is before the current
    date plus the selected time period.
- | **from (relative)**:
  | Matches the date field's value if the value is after the current
    date minus the selected time period.
- | **has changed**:
  | The field has been changed during a ticket update.

To help you understand the time conditions of Zammad better, below diagram
might also be helpful to you.

.. include:: /misc/object-conditions/time-conditions-mermaid.include.rst

Date & Time Field
^^^^^^^^^^^^^^^^^

Checks if a date and time is before or past (both absolute or relative) a
specific point in time or time period. Relative operators allow you to define
a time period in seconds, minutes, hours, days, weeks, months or years.

Available operators for matching:

- | **before (absolute)**:
  | If the date & time field's value is before the configured date and
    time, the condition will be met.
- | **after (absolute)**:
  | If the date & time field's value is after the configured date and
    time, the condition will be met.
- | **before (relative)**:
  | Matches the date & time field's value if the value is before the
    current date and time minus the selected time period.
- | **after (relative)**:
  | Matches the date & time field's value if the value is after the
    current date and time plus the selected time period.
- | **within last (relative)**:
  | Matches the date & time field's value if the value is in between the
    current time and the current time minus the selected time period.
- | **within next (relative)**:
  | Matches the date & time field's value if the value is in between the
    current time and the current time plus the selected time period.
- | **till (relative)**:
  | Matches the date & time field's value if the value is before the
    current date and time plus the selected time period.
- | **from (relative)**:
  | Matches the date & time field's value if the value is after the
    current date and time minus the selected time period.
- | **has changed**:
  | The field has been changed during a ticket update.
- | **has reached**:
  | Checks if the time set in this field was reached.
  | Only available for Pending time and
    Escalation time in Trigger conditions.
- | **has reached warning**:
  | The time set in this field will be reached in less than 15 minutes.
  | Only available for Ticket's Escalation time in
    Trigger conditions.

Have a look at the diagram above. It applies also for date & time but you
additionally have hours and minutes on top to use.

Single Selection Field
^^^^^^^^^^^^^^^^^^^^^^

Checks if selected field values match the attribute value. It allows
you to select one or more values of the attribute in question.
Selecting more than one value in the condition will act like an "OR" clause.

Available operators for matching:

- **is**
- **is not**
- **has changed**

Multiple Selection Field
^^^^^^^^^^^^^^^^^^^^^^^^

Checks if selected field values match the attribute value(s).

Available operators for matching:

- | **contains all**:
  | Matches if **all** given field values are selected (AND logic).
- | **contains one**:
  | Matches if **at least one** of the given field values is selected
    (OR logic).
- | **contains all not**:
  | Matches if **not all** given field values are selected (at least one
    is missing). This means "not all of", not "none of".
- | **contains one not**:
  | Matches if **none** of the given field values are selected.
    This means "none of", not "not all of".

.. note::

   In :doc:`core workflows </system/core-workflows>`, these operators
   have different semantics. See
   :ref:`core workflow condition operators <core-workflow-condition-examples>`
   for details. Example scenarios for the operators described here can
   be found in :ref:`multi-select-operator-examples` below.


Single Tree Selection Field
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if a selected field value match the attribute value.
Selecting more than one value in the condition will act like an "OR" clause.

Available operators for matching:

- **is**
- **is not**
- **has changed**

Multiple Tree Selection Field
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Checks if selected field value(s) match the attribute value(s).

Available operators for matching:

- | **contains all**
  | Matches if **all** given field values are selected (AND logic).
- | **contains one**
  | Matches if **at least one** of the given field values is selected
    (OR logic).
- | **contains all not**
  | Matches if **not all** given field values are selected (at least one
    is missing). This means "not all of", not "none of".
- | **contains one not**
  | Matches if **none** of the given field values are selected.
    This means "none of", not "not all of".

Additional Information and Remarks
----------------------------------

General
^^^^^^^

Ticket context conditions do not support:
   - regular expressions
   - case sensitive string conditions
   - Basic conditions do not support the same attribute to be selected more
     than once

**has changed** conditions:
   Are only available for ticket attributes and don't affect:

   - Ticket articles attributes
   - Organization attributes
   - User attributes
   - Group attributes

Differences in input fields:
   Please note that the input field for tokens doesn't support the comma as
   separator (as in the input field for tags). If you use the comma in the
   token input field, the comma is included in you token.

   **Example**:

   .. figure:: /images/misc/object-conditions/operator-token-input.png
      :alt: Example of comma usage in token input field

      ``A`` added with enter/tab, ``B`` and ``C`` separated with comma 
      (resulting in one token).

.. _multi-select-operator-examples:

Multi-Select Operator Examples
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``contains`` family of operators for multi-select fields compares
two sets of values: the values currently in the field and the values
specified in the condition. The diagrams below show the condition
values as an orange circle and the field values as a blue circle.

Be aware that these operators behave **differently** in
:doc:`core workflows </system/core-workflows>`. See
:ref:`core workflow condition operators <core-workflow-condition-examples>`
for a side by side comparison.

Example 1: Condition A, B - Field A, B, C
"""""""""""""""""""""""""""""""""""""""""

In this scenario, the field holds the values A, B and C,
while the condition asks for the values A and B.

.. figure:: /images/system/core-workflows/contains-operators-overlap.svg
   :alt: Venn diagram of condition values A, B and field values A, B, C. A and B are in both circles, C only in the field circle.

   Condition values ``A, B`` overlap with field values ``A, B, C``.

.. list-table::
   :class: wrapping-table
   :widths: 30 20 50
   :header-rows: 1

   * - Operator
     - Matches?
     - Why
   * - contains one
     - yes
     - ``A`` and ``B`` are in both sets (OR logic).
   * - contains all
     - yes
     - Both ``A`` and ``B`` are present (AND logic).
   * - contains all not
     - no
     - All condition values are present in the field.
   * - contains one not
     - no
     - The field has values in common with the condition.

Example 2: Condition A, B, C - Field C, D
"""""""""""""""""""""""""""""""""""""""""

In this scenario, the field holds the values C and D. The condition
value C is present in the field, while A and B are not.

.. figure:: /images/system/core-workflows/contains-operators-partial-overlap.svg
   :alt: Venn diagram of condition values A, B, C and field values C, D.
         Only C is in both circles.

   Condition values ``A, B, C`` partially overlap with
   field values ``C, D``.

.. list-table::
   :class: wrapping-table
   :widths: 30 20 50
   :header-rows: 1

   * - Operator
     - Matches?
     - Why
   * - contains one
     - yes
     - ``C`` is in both sets (OR logic).
   * - contains all
     - no
     - Only ``C`` of the three condition values is present.
   * - contains all not
     - yes
     - ``A`` and ``B`` are missing from the field.
   * - contains one not
     - no
     - ``C`` is in both the field and the condition.

This partial overlap is where the two "not" operators part ways:
``contains all not`` matches because a single condition value is
missing, while ``contains one not`` does not match because the one
common value is enough to block it.

Example 3: Condition A, B - Field C, D
""""""""""""""""""""""""""""""""""""""

In this scenario, the field holds the values C and D, which
have nothing in common with the condition values A and B.

.. figure:: /images/system/core-workflows/contains-operators-disjoint.svg
   :alt: Venn diagram of condition values A, B and field values C, D. The two circles do not overlap.

   Condition values ``A, B`` have no overlap with field values ``C, D``.

.. list-table::
   :class: wrapping-table
   :widths: 30 20 50
   :header-rows: 1

   * - Operator
     - Matches?
     - Why
   * - contains one
     - no
     - No value is in both sets.
   * - contains all
     - no
     - Neither ``A`` nor ``B`` is present.
   * - contains all not
     - yes
     - ``A`` and ``B`` are missing from the field.
   * - contains one not
     - yes
     - The field has no value in common with the condition.

Example 4: Condition A, B - Field is empty
""""""""""""""""""""""""""""""""""""""""""

In this scenario, the field holds no values at all, while
the condition asks for the values A and B.

.. figure:: /images/system/core-workflows/contains-operators-empty-field.svg
   :alt: Venn diagram of condition values A, B and an empty field. The two circles do not overlap.

   The field holds no values at all.

.. list-table::
   :class: wrapping-table
   :widths: 30 20 50
   :header-rows: 1

   * - Operator
     - Matches?
     - Why
   * - contains one
     - no
     - No value is present.
   * - contains all
     - no
     - No value is present.
   * - contains all not
     - yes
     - No condition value is present in the field.
   * - contains one not
     - yes
     - The field has no value in common with the condition.

.. _regex:

Regex
^^^^^

Regex support
   **matches regex** and **does not match regex** are supported only in
   Triggers, Time Accounting selector, Postmaster Filters, Automatic ticket
   assignment and Core Workflow.

"Old" style ``regex:...`` conditions
   If you update your Zammad from 6.0 or prior and you have already conditions
   with **contains** or **contains not** including a regex filter
   (i.e. ``regex:^(foo|bar)$``), Zammad tries to migrate them to the new
   **matches regex** and **does not match regex** operators.