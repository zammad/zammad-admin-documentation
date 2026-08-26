Core Workflow Condition Operators
=================================

You might know that there is a separate section for explaining
:doc:`condition operators </misc/object-conditions/basics>`. Head over there
to see a detailed explanation of many conditions and operators.

Due to differences from other places in Zammad which are also using
conditions (e.g. triggers), you can find a dedicated description of
operators for core workflows below.

Be aware that the availability of the operators depends on the selected
attribute and its field type. Some of the operators may only be available for
system attributes (e.g. for "tags", "active").

.. list-table::
   :class: wrapping-table
   :widths: 25 75
   :header-rows: 1

   * - Operator
     - Description
   * - after (absolute)
     - Matches if a date/time is after a specific point in time.
   * - after (relative)
     - Matches if a time span after a specified event has passed.
   * - before (absolute)
     - Matches if a date/time is before a specific point in time.
   * - before (relative)
     - Matches if a time span after a specified event has not passed.
   * - contains
     - Matches if **at least one** of the specified values
       is present in the field (OR logic).
   * - contains not
     - Matches if the field contains at least one value that
       is **not** among the specified values. Also matches
       if the field is empty.
   * - contains all
     - Matches if **every** specified value is present
       in the field (AND logic).
   * - contains all not
     - Matches if **none** of the specified values are
       present in the field. The field and the condition have
       no value in common: this means "contains none of", not "does not contain all of".

       In triggers and overviews, this operator means
       "not all of the specified values are present"
       instead. See the examples section below.
   * - contains one
     - Same as ``contains``. Matches if **at least one**
       of the specified values is present.
   * - contains one not
     - Same as ``contains not``. Matches if the field
       contains at least one value that is **not** among
       the specified values.
   * - does not match regex
     - Matches if content doesn't fit to regex rule.
   * - ends with
     - Matches if content ends with specified value.
   * - ends with one of
     - Matches if content ends with one of the specified values.
   * - from (relative)
     - Matches if date/time is after a period of time after an event.
   * - is
     - Matches if content is equal to a specified value.
   * - is any of
     - Matches if content is equal to any of specified values.
   * - is greater than
     - Matches if the value is greater than the specified value.
   * - is greater than or equal to
     - Matches if the value is greater than or equal to the specified value.
   * - is less than
     - Matches if the value is less than the specified value.
   * - is less than or equal to
     - Matches if the value is less than or equal to the specified value.
   * - is modified
     - Matches if content is modified.

       True from the moment of changing content until form submit.
   * - is modified to
     - Matches if content is modified to a specific value.

       True from the moment of changing content until form submit.
   * - is none of
     - Matches if content is none of any specified values.
   * - is not
     - Matches if content is not equal to a specified value.
   * - is set
     - Matches if content is present.
   * - just changed
     - Matches if content has changed.

       Only true for the moment of changing content until next form field action/click.
   * - just changed to
     - Matches if content has changed to a specified value.

       Only true for the moment of changing content until next form field action/click.
   * - matches regex
     - Matches if value fits to regex rule.
   * - not set
     - Matches if no content is present.
   * - starts with
     - Matches if content starts with specified value.
   * - starts with one of
     - Matches if content starts with one of the specified values.
   * - till (relative)
     - Matches if date/time is before a period of time before an event.
   * - today
     - Matches if date/time is today.
   * - within last (relative)
     - Matches if date/time content is within specified period of time before
       now.
   * - within next (relative)
     - Matches if date/time content is within specified period of time after
       now.

Multi-Select Operators
----------------------

The ``contains`` family of operators compares two sets of values: the values
currently in the field and the values specified in the condition. The diagrams
below show the condition values as an orange circle and the field values as a
blue circle.

.. _core-workflow-condition-examples:

Differences to Triggers and Overviews
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Be aware that these operators behave **differently** in other features that use
conditions (e.g. triggers and overviews). The most confusing difference: in core
workflows, ``contains all not`` means that no value matches at all, while in
triggers and overviews it means "not all values are present". The table below
compares both worlds side by side.

.. list-table::
   :class: wrapping-table
   :widths: 25 40 35
   :header-rows: 1

   * - Operator
     - Core workflows (this page)
     - Triggers, overviews, etc.
   * - contains
     - At least one value is present (OR logic).
     - Not available; ``contains one`` is the equivalent.
   * - contains one
     - Same as ``contains``.
     - At least one value is present (OR logic).
   * - contains all
     - Every value is present (AND logic).
     - Every value is present (AND logic).
   * - contains not
     - At least one field value is outside the condition,
       or the field is empty.
     - Not available for multi-select fields.
   * - contains one not
     - Same as ``contains not``.
     - The field has no value in common with the condition.
   * - contains all not
     - The field has no value in common with the condition.
     - Not all values are present (at least one is missing).

Example 1: Condition A, B - Field A, B, C
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
   * - contains
     - yes
     - ``A`` and ``B`` are in both sets (OR logic).
   * - contains one
     - yes
     - Same as ``contains``.
   * - contains all
     - yes
     - Both ``A`` and ``B`` are present (AND logic).
   * - contains not
     - yes
     - ``C`` is in the field but not in the condition.
   * - contains one not
     - yes
     - Same as ``contains not``.
   * - contains all not
     - no
     - ``A`` and ``B`` are present in the field.

Example 2: Condition A, B, C - Field C, D
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
   * - contains
     - yes
     - ``C`` is in both sets (OR logic).
   * - contains one
     - yes
     - Same as ``contains``.
   * - contains all
     - no
     - Only ``C`` of the three condition values is present.
   * - contains not
     - yes
     - ``D`` is in the field but not in the condition.
   * - contains one not
     - yes
     - Same as ``contains not``.
   * - contains all not
     - no
     - ``C`` is present in the field.

This partial overlap is where the two "all" operators part ways:
``contains all`` fails because one condition value is missing, while
``contains all not`` fails because a single common value is enough
to block it.

Example 3: Condition A, B - Field C, D
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
   * - contains
     - no
     - No value is in both sets.
   * - contains one
     - no
     - Same as ``contains``.
   * - contains all
     - no
     - Neither ``A`` nor ``B`` is present.
   * - contains not
     - yes
     - ``C`` and ``D`` are not in the condition.
   * - contains one not
     - yes
     - Same as ``contains not``.
   * - contains all not
     - yes
     - The field has no value in common with the condition.

This is the only example where ``contains all not`` matches.

Example 4: Condition A, B - Field is empty
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
   * - contains
     - no
     - No value is present.
   * - contains one
     - no
     - Same as ``contains``.
   * - contains all
     - no
     - No value is present.
   * - contains not
     - yes
     - An empty field matches.
   * - contains one not
     - yes
     - Same as ``contains not``.
   * - contains all not
     - yes
     - An empty field has no value in common with the condition.

Note that ``contains not`` and
``contains one not`` match an empty field, while ``contains`` and
``contains all`` do not. If you want to exclude specific values,
be aware that empty fields pass the condition.
