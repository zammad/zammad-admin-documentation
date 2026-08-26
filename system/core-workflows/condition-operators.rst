Core Workflow Condition Operators
=================================

You might know that there is a separate section for explaining
:doc:`condition operators </misc/object-conditions/basics>`. Head over there
to see a detailed explanation of many conditions and operators.

Due to differences to other places in Zammad which are also using
conditions (e.g. triggers), you can find a dedicated description of
operators for core workflows below.

Be aware that the availability of the operators depends on the selected
attribute and its field type. Some of the operators may only be available for
system attributes (e.g. for "tags", "active").

.. list-table::
   :widths: 30 70
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
   * - contains all
     - Matches if **every** specified value is present
       in the field (AND logic).
   * - contains all not
     - Matches if **none** of the specified values are
       present in the field (no intersection). This means
       "contains none of", not "does not contain all of".
   * - contains not
     - Matches if the field contains at least one value
       that is **not** among the specified values. Also
       matches if the field is empty.
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

.. _core-workflow-condition-pitfalls:

Multi-Select Operator Examples
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The ``contains`` family of operators works on sets of values. To show
how each operator behaves, consider this scenario:

**Field values:** ``A, B, C`` (currently selected)
**Condition values:** ``A, B`` (specified in the workflow)

.. list-table::
   :widths: 30 25 45
   :header-rows: 1

   * - Operator
     - Matches?
     - Why
   * - ``contains``
     - yes
     - A is in both sets (OR logic)
   * - ``contains all``
     - yes
     - Both A and B are present (AND logic)
   * - ``contains one``
     - yes
     - Same as ``contains``
   * - ``contains not``
     - yes
     - C is not in {A, B}
   * - ``contains all not``
     - no
     - A is present, so there is an intersection
   * - ``contains one not``
     - no
     - Same as ``contains not``, but reversed

The tricky part: ``contains all not`` and ``contains not`` sound
similar but behave differently.

- ``contains not`` matches if the field has **any** value outside the
  condition set. Here, C is outside {A, B}, so it matches.
- ``contains all not`` matches if **no** value from the condition set
  is present. Here, A is present, so it does not match.

.. mermaid::

   graph TB
      subgraph field["Field: A, B, C"]
         both["A, B"]
         only_field["C"]
      end
      subgraph condition["Condition: A, B"]
         cond_a["A"]
         cond_b["B"]
      end
      both -.- cond_a
      both -.- cond_b
      only_field ---|"contains not: match<br/>C not in condition"| note1[" "]
      both ---|"contains all not: no match<br/>A is present"| note2[" "]

   style both fill:#bbf,stroke:#333
   style only_field fill:#bfb,stroke:#333
   style cond_a fill:#ff9,stroke:#333
   style cond_b fill:#ff9,stroke:#333
   style note1 fill:none,stroke:none
   style note2 fill:none,stroke:none

Now change the field to ``C, D`` (no overlap with condition ``A, B``):

- ``contains``: no match (no common values)
- ``contains all``: no match (no common values)
- ``contains not``: match (C and D are not in {A, B})
- ``contains all not``: match (no intersection at all)

This is the case where both "not" operators agree: when there is no
overlap, both ``contains not`` and ``contains all not`` match.

.. note::

   In triggers and overviews, ``contains all not`` has different
   semantics: it means "not all condition values are present" (at
   least one is missing), not "no intersection". See
   :doc:`object conditions </misc/object-conditions/basics>` for
   details.

