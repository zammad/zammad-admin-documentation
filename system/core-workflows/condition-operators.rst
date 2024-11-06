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
     - Matches if a specified value is present.
   * - contains all
     - Matches if all of the specified values are present.
   * - contains all not
     - Matches if none of the specified values are present.
   * - contains not
     - Matches if a specified value is not present.
   * - contains one
     - Matches if one specified value is present.
   * - contains one not
     - Matches if one specified value is not present.
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


