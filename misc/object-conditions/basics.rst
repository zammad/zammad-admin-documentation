Object Conditions
=================

Introduction
------------

This page describes the attribute checks you can execute for different object
attributes. You can use these checks in different places in Zammad like
:doc:`triggers </manage/trigger>` or defining
:doc:`overviews </manage/overviews>`. Please note that the available attributes
and the condition operators depend on the object and where you want to use it.

With these object attribute conditions you should be able to create quite
complex conditions. However, if you need to have additional AND/OR relations
for your conditions, have a look at the
:doc:`expert conditions </misc/object-conditions/expert-mode>` section, where
you can find a description how to use them.

Object Types
------------

Depending on the location and selected attribute, the object context may change.
The default basic objects in Zammad are:

- Ticket
- User
- Organization
- Group

Within these 4 objects, you can even create your
:doc:`own attributes </system/objects>` and use them for
conditions. However, there are more object types and special context depending
on the feature you want to create a condition:

- Article
- Customer
- Execution time
- Session

Attribute Types
---------------

Depending on the attribute type, you can choose
from different operators to execute checks and build your conditions.

Have a look below where you can find a table with special functions which you
can see as some kind of attribute type and a a listing of attribute types you
can use in conditions in Zammad.

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

Checks if a date is before or past (both absolute or relativ) a specific point
in time or time period. Relative operators allow you to define a time period in
seconds, minutes, hours, days, weeks, months or years.

Available operators for matching:

* | **before (absolute)**:
  | If the date field's value is before the configured date,
    the condition will be met.
* | **after (absolute)**:
  | If the date field's value is after the configured date,
    the condition will be met.
* | **before (relative)**:
  | Matches the date field's value if the value is before the current
    date minus the selected time period.
* | **after (relative)**:
  | Matches the date field's value if the value is after the current
    date plus the selected time period.
* | **within last (relative)**:
  | Matches the date field's value if the value is in between the current
    date and the current date minus the selected time period.
* | **within next (relative)**:
  | Matches the date field's value if the value is in between the current
    date and the current date plus the selected time period.
* | **till (relative)**:
  | Matches the date field's value if the value is before the current
    date plus the selected time period.
* | **from (relative)**:
  | Matches the date field's value if the value is after the current
    date minus the selected time period.
* | **has changed**:
  | The field has been changed during a ticket update.

To help you understand the time conditions of Zammad better, below diagram
might also be helpful to you.

.. include:: /misc/object-conditions/time-conditions-mermaid.include.rst

Date & Time Field
^^^^^^^^^^^^^^^^^

Checks if a date and time is before or past (both absolute or relativ) a
specific point in time or time period. Relative operators allow you to define
a time period in seconds, minutes, hours, days, weeks, months or years.

Available operators for matching:

* | **before (absolute)**:
  | If the date & time field's value is before the configured date and
    time, the condition will be met.
* | **after (absolute)**:
  | If the date & time field's value is after the configured date and
    time, the condition will be met.
* | **before (relative)**:
  | Matches the date & time field's value if the value is before the
    current date and time minus the selected time period.
* | **after (relative)**:
  | Matches the date & time field's value if the value is after the
    current date and time plus the selected time period.
* | **within last (relative)**:
  | Matches the date & time field's value if the value is in between the
    current time and the current time minus the selected time period.
* | **within next (relative)**:
  | Matches the date & time field's value if the value is in between the
    current time and the current time plus the selected time period.
* | **till (relative)**:
  | Matches the date & time field's value if the value is before the
    current date and time plus the selected time period.
* | **from (relative)**:
  | Matches the date & time field's value if the value is after the
    current date and time minus the selected time period.
* | **has changed**:
  | The field has been changed during a ticket update.
* | **has reached**:
  | Checks if the time set in this field was reached.
  | Only available for Pending time and
    Escalation time in Trigger conditions.
* | **has reached warning**:
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

* | **contains all**:
  | Matches if all given field values are selected.
* | **contains one**:
  | Matches if one specific given field value is selected.
* | **contains all not**:
  | Matches if all given field values are not selected.
* | **contains one not**:
  | Matches if one specific given field value is not selected.


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

* | **contains all**
  | Matches if all given field values are selected.
* | **contains one**
  | Matches if one specific given field value is selected.
* | **contains all not**
  | Matches if all given field values are not selected.
* | **contains one not**
  | Matches if one specific given field value is not selected.

Additional Information and Remarks
----------------------------------

General
^^^^^^^

Ticket context conditions do not support:
   * regular expressions
   * case sensitive string conditions
   * Basic conditions do not support the same attribute to be selected more
     than once

*has changed* conditions:
   Are only available for ticket attributes and don't affect:

   * Ticket articles attributes
   * Organization attributes
   * User attributes
   * Group attributes

Differences in input fields:
   Please note that the input field for tokens doesn't support the comma as
   separator (as in the input field for tags). If you use the comma in the
   token input field, the comma is included in you token.

   **Example**:

   .. figure:: /images/misc/object-conditions/operator-token-input.png
      :alt: Example of comma usage in token input field

      ``A`` added with enter/tab, ``B`` and ``C`` separated with comma 
      (resulting in one token).

.. _regex:

Regex
^^^^^

Regex support
   *matches regex* and *does not match regex* are supported only in
   Triggers, Time Accounting selector, Postmaster Filters, Automatic ticket
   assignment and Core Workflow.

"Old" style ``regex:...`` conditions
   If you update your Zammad from 6.0 or prior and you have already conditions
   with *contains* or *contains not* including a regex filter
   (i.e. ``regex:^(foo|bar)$``), Zammad tries to migrate them to the new
   *matches regex* and *does not match regex* operators.