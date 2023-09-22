Basic object conditions
***********************

While this page mainly shows screenshots within Trigger configuration,
these information do apply for all supported configurations.

You will learn what condition options are available by type and how to use
them. If you need configuration samples, please refer to the documentation
page of the function (e.g. Triggers) you want to use.

Limitations
-----------

Please note that ticket conditions do not support the following:

   * regular expressions
   * case sensitive string conditions
   * Basic conditions do not support the same attribute to be selected more
     than once

   .. note::

      The *has changed* condition only is available for ticket attributes and
      does not affect:

         * ticket articles attributes
         * organization attributes
         * user attribtues
         * group attributes

How they work
-------------

Ticket conditions allow you to granulary define a set of attributes and ticket
situations to then do certain operations based on these conditions.

When using the basic mode of conditions, Zammad will match all conditions
as *AND* clause. This means that all configured conditions have to fit, if
one condition does not, the whole condition set won't fit.

If you want to use *AND / OR* conditions to cover even more complex conditions,
see :doc:`expert-mode`.

Object types and clauses
------------------------

Zammad offers many different :doc:`object </system/objects>` (attribute) types
which offer various options for matching your conditions. This doesn't just
apply to default objects Zammad comes with but also those that you add yourself.

Special fields
++++++++++++++

Some options or fields are not exactly attributes but functions Zammad offers
for your convenience.

Action *(Scope: Ticket, Ticket article)*
   .. hint:: This field is only available for Trigger conditions!

   .. container:: cfloat-left

      | How was the ticket in question touched?
      | Available matching: *is* or *is not*

   .. container:: cfloat-right

      Offered values (multiple choice):

      * | created
        | *The ticket has been created*
      * | updated
        | *The ticket has been updated with an article*
      * | merged into
        | *The source ticket of a ticket merge*
      * | received merge
        | *The destination ticket of a ticket merge*

   .. container:: cfloat-clear

      X

   .. container:: cfloat-left

      | How was the ticket article in question touched?
      | Available matching: *is* or *is not*

   .. container:: cfloat-right

      Available value:

      * | created
        | *The ticket article has been created*

   .. container:: cfloat-clear

      X

Customer *(Scope: Ticket)*
   .. hint::

      This field only affects the ticket customer which is set during ticket
      creation and can be changed manually by an agent.

   .. container:: cfloat-left

      | What ticket customer is affected (or not)?
      | Available matching: *is*, *is not* or *has changed*

   .. container:: cfloat-right

      Offered values (multiple choice):

      * | current user
        | *This is the user that caused the trigger run. If your agent or
          customer updates the ticket, this will be the user. If this was not
          a human interaction, Zammad will use the system user. This may have
          unexpected results!*
      * | specific user
        | *Select one or more customers*
      * | not set (not defined)

   .. container:: cfloat-clear

      X

Organization *(Scope: Ticket, Customer)*
   .. hint::

      This field only affects the ticket organization which is set during ticket
      creation and depends on the ticket customers organization.

   .. container:: cfloat-left

      | What ticket organization is affected (or not)?
      | Available matching: *is*, *is not* or *has changed*

   .. container:: cfloat-right

      Offered values (multiple choice):

      * | current user organization
        | *This is the users organization that caused the trigger run. If your
          agent or customer updates the ticket, this will be the organization.
          If this was not a human interaction, Zammad will use no organization.
          This may have unexpected results!*
      * | specific organization
        | *Select one or more organizations*
      * | not set (not defined)

   .. container:: cfloat-clear

      X

Group *(Scope: Ticket)*
   .. container:: cfloat-left

      | What ticket group is affected (or not)?
      | Available matching: *is*, *is not* or *has changed*

   .. container:: cfloat-right

      Offers all configured and active groups in Zammad.

   .. container:: cfloat-clear

      X

Owner *(Scope: Ticket)*
   .. container:: cfloat-left

      | What ticket owner is affected (or not)?
      | Available matching: *is*, *is not* or *has changed*

   .. container:: cfloat-right

      Offered values (multiple choice):

      * | current user
        | *This is the user that caused the trigger run. If your agent or
          customer updates the ticket, this will be the user. If this was not
          a human interaction, Zammad will use the system user. This may have
          unexpected results!*
      * | specific user
        | *Select one or more owners*
      * | not set (not defined)

   .. container:: cfloat-clear

      X

State *(Scope: Ticket)*
   .. warning::

         Zammad behaves inconsistent in between certain ticket condition
         dialogues - if you can see ticket states only in parts of the
         admin menu and not in the front-end, your state *is not visible*.

         :docs:`The system documentation </admin/console/working-on-tickets.html#make-new-states-available-to-ui>`
         has you covered.

   .. container:: cfloat-left

      | What ticket state is affected (or not)?
      | Available matching: *is*, *is not* or *has changed*

   .. container:: cfloat-right

      Offers all configured and *visible* ticket states in Zammad.

   .. container:: cfloat-clear

      X

Tags *(Scope: Ticket)*
   .. hint:: Additional tags can be present in the ticket without issues.

   .. container:: cfloat-left

      | What ticket tags are affected (or not)?
      | Available matching: *contains all*, *contains one*,
        *contains all not* or *contains one not*

   .. container:: cfloat-right

      Offered values (multiple choice):

      * | contains all
        | *Matches if all given tags are present on the ticket.*
      * | contains one
        | *Matches if one specific given tags is present on the ticket.*
      * | contains all not
        | *Matches if all given tags are not present on the ticket.*
      * | contains one not
        | *Matches if one specific given tags is not present on the ticket.*

   .. container:: cfloat-clear

      X

Subscribe *(Scope: Ticket)*
   .. hint:: This affects ticket subscriptions / mentions by and for agents.

   .. container:: cfloat-left

      | What ticket subscribers
        (:user-docs:`notifications </advanced/suggested-workflows.html#mentions-the-subscribe-button>`)
        are affected (or not)?
      | Available matching: *is* or *is not*

   .. container:: cfloat-right

      Offered values (multiple choice):

      * | current user
        | *This is the user that caused the trigger run.
          Only can affect agents.*
      * | specific user
        | *Affects one or more specific users that have subscribed to the
          ticket.*
      * | not set (not defined)

   .. container:: cfloat-clear

      X

Time Accounting *(Scope: Ticket article)*
   .. container:: cfloat-left

      | Is time accounted for an article?
      | Available matching: *is set* or *not set*

   .. container:: cfloat-right

      Allows you to check if time is accounted for an article.

   .. container:: cfloat-clear

      X

Type *(Scope: Ticket article)*
   .. tip:: **If you're unsure what article type you're looking for...**

      Click on a message to see detailed information about it.

      .. figure:: /images/misc/object-conditions/follow-up-message-details.gif
         :alt: Message details view

   .. container:: cfloat-left

      | What's the articles type (or not)?
      | Available matching: *is* or *is not*

   .. container:: cfloat-right

      Offers all available article types of your instance (e.g. *email*).

   .. container:: cfloat-clear

      X

Visibility *(Scope: Ticket article)*
   .. container:: cfloat-left

      | What's the articles visibility (or not)?
      | Available matching: *is* or *is not*

   .. container:: cfloat-right

      Allows you to check if the article in question is either internal or
      public.

   .. container:: cfloat-clear

      X

Sender *(Scope: Ticket article)*
   .. container:: cfloat-left

      | What user role does the sender of the article have (or not)?
      | Available matching: *is* or *is not*

   .. container:: cfloat-right

      Determine the sender of the message: System, Agent or Customer.

   .. container:: cfloat-clear

      X

Calendar *(Scope: Execution time)*
   .. hint:: This field is only available for Trigger and Scheduler conditions!

   .. container:: cfloat-left

      | Was the ticket touched within the calendar defined business time
        (or not)?
      | Available matching: *is in working time* or *is not in working time*

   .. container:: cfloat-right

      Allows selection of a pre-defined :doc:`calendars </manage/calendars>` to
      check whether the defined business hours are met. This allows time based
      events like out of business hours responses.

   .. container:: cfloat-clear

      X


Text field (input)
++++++++++++++++++

.. hint::

   The configured "Type" of input fields has no impact on the available options.

Check if any field of type text contains a specific string (or not)?

Available operators for matching:

   *contains*
      Matches if text contains a specific string.

   *contains not*
      Matches if text does not contain a specific string.

   *is any of*
      Matches if text is equal to any of given tokens.

   *is none of*
      Matches if text is not equal to all of given tokens.

   *starts with one of*
      Matches if text starts with one of given tokens.

   *ends with one of*
      Matches if text ends with one of given tokens.

   *matches regex*
      Evaluates if text matches provided regular expression.

   *does not match regex*
      Evaluates if text does not match provided regular expression.

.. hint::
   **Regex support**

   *matches regex* and *does not match regex* are supported only in
   Triggers, Time Accounting selector, Postmaster Filters, Automatic ticket
   assignment and Core Workflow.

.. hint::
   **What about my "old" style** ``regex:...`` **filters?**

   If you update your Zammad from 6.0 or prior and you have already conditions
   with *contains* or *contains not* including a regex filter
   (i.e. ``regex:^(foo|bar)$``), Zammad tries to migrate them to the new
   *matches regex* and *does not match regex* operators.

.. hint::
   **Differences in input fields**

   Please note, that the input field for tokens doesn't support the comma as
   separator (as in the input field for tags). If you use the comma in the
   token input field, the comma is included in you token.

   **Example**:

   .. figure:: /images/misc/object-conditions/operator-token-input.png
      :alt: Example of comma usage in token input field

      ``A`` added with enter/tab, ``B`` and ``C`` separated with comma 
      (resulting in one token).

Textarea field
++++++++++++++

| Check if any field of type textarea contains a specific string (or not)?
| Available matching: *contains*, *contains not* or *has changed*

Boolean field
+++++++++++++

| Check if any field of type boolean is true (or not)?
| Available matching: *is*, *is not* or *has changed*

Integer field
+++++++++++++

| Check if any field of type integer has a specific value (or not)?
| Available matching: *is*, *is not* or *has changed*

Date field
++++++++++

.. container:: cfloat-left

   | Check if the given date is past or relatively past a specific period?
   | Available matching:

      .. include:: /misc/object-conditions/datetime-conditions.include.rst

.. container:: cfloat-right

   Offered values and options:

      * | *before (absolute)*
        | *If the date field's value is before the configured date,
          the condition will be met.*
      * | *after (absolute)*
        | *If the date field's value is after the configured date,
          the condition will be met.*
      * | *before (relative)*
        | *Matches the date field's value if the value is before the current
          date minus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *after (relative)*
        | *Matches the date field's value if the value is after the current
          date plus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *within last (relative)*
        | *Matches the date field's value if the value is in between the current
          date and the current date minus the selected time period.*
      * | *within next (relative)*
        | *Matches the date field's value if the value is in between the current
          date and the current date plus the selected time period.*
      * | *till (relative)*
        | *Matches the date field's value if the value is before the current
          date plus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *from (relative)*
        | *Matches the date field's value if the value is after the current
          date minus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *has changed*
        | *The field has been changed during a ticket update.*

.. container:: cfloat-clear

   X

To help you understand the time conditions of Zammad better, below diagram
might also be helpful to you.

.. include:: /misc/object-conditions/time-conditions-mermaid.include.rst

Date & Time field
+++++++++++++++++

.. hint::

   An example for this field type are all default fields handling
   updated at, created at and closed at timings.

.. container:: cfloat-left

   | Check if the given date & time is past or relatively past a specific
     period?
   | Available matching:

      .. include:: /misc/object-conditions/datetime-conditions.include.rst

      * *has reached*
      * *has reached warning*

.. container:: cfloat-right

   Offered values and options:

      * | *before (absolute)*
        | *If the date & time field's value is before the configured date and
          time, the condition will be met.*
      * | *after (absolute)*
        | *If the date & time field's value is after the configured date and
          time, the condition will be met.*
      * | *before (relative)*
        | *Matches the date & time field's value if the value is before the
          current date and time minus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *after (relative)*
        | *Matches the date & time field's value if the value is after the
          current date and time plus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *within last (relative)*
        | *Matches the date & time field's value if the value is in between the
          current time and the current time minus the selected time period.*
      * | *within next (relative)*
        | *Matches the date & time field's value if the value is in between the
          current time and the current time plus the selected time period.*
      * | *till (relative)*
        | *Matches the date & time field's value if the value is before the
          current date and time plus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *from (relative)*
        | *Matches the date & time field's value if the value is after the
          current date and time minus the selected time period.*
        |
        | *You can choose from Minute(s), Hour(s), Day(s), Week(s), Month(s) and
          Year(s).*
      * | *has changed*
        | *The field has been changed during a ticket update.*
      * | *has reached*
        | **This option is only available for Ticket's Pending time and
          Escalation time in Trigger conditions!**
        | *The time set in this field was reached*
      * | *has reached warning*
        | **This option is only available for Ticket's Escalation time in
          Trigger conditions!**
        | *The time set in this field will be reached in less than 15 minutes*

.. container:: cfloat-clear

   X

To help you understand the time conditions of Zammad better, below diagram
might also be helpful to you. Below is a carbon copy of the date variant and
applies exactly the same just you having hours and minutes on top to use.

.. include:: /misc/object-conditions/time-conditions-mermaid.include.rst

Single selection field
++++++++++++++++++++++

.. container:: cfloat-left

   | Checks selected field values to match actual attribute value (or not).
   | Available matching: *is*, *is not* or *has changed*

.. container:: cfloat-right

   Allows you to select one or more values of the attribute in question.
   Selecting more than one value in the condition will act like an "OR" clause.

.. container:: cfloat-clear

      X

Multiple selection field
++++++++++++++++++++++++

.. container:: cfloat-left

   | What field's values are affected (or not)?
   | Available matching: *contains all*, *contains one*,
     *contains all not* or *contains one not*

.. container:: cfloat-right

   Offered values (multiple choice):

   * | contains all
     | *Matches if all given field values are selected.*
   * | contains one
     | *Matches if one specific given field value is selected.*
   * | contains all not
     | *Matches if all given field values are not selected.*
   * | contains one not
     | *Matches if one specific given field value is not selected.*

.. container:: cfloat-clear

   X

Single tree selection field
+++++++++++++++++++++++++++

.. note::

   This attribute type technically allows several layers of values.
   You cannot match a parent layer to match all of it's childs.

.. container:: cfloat-left

   | Checks selected field values to match actual attribute value (or not).
   | Available matching: *is*, *is not* or *has changed*

.. container:: cfloat-right

   Allows you to select one or more values of the attribute in question.
   Selecting more than one value in the condition will act like an "OR" clause.

.. container:: cfloat-clear

      X

Multiple tree selection field
+++++++++++++++++++++++++++++

.. note::

   This attribute type technically allows several layers of values.
   You cannot match a parent layer to match all of it's childs.

.. container:: cfloat-left

   | What field's values are affected (or not)?
   | Available matching: *contains all*, *contains one*,
     *contains all not* or *contains one not*

.. container:: cfloat-right

   Offered values (multiple choice):

   * | contains all
     | *Matches if all given field values are selected.*
   * | contains one
     | *Matches if one specific given field value is selected.*
   * | contains all not
     | *Matches if all given field values are not selected.*
   * | contains one not
     | *Matches if one specific given field value is not selected.*

.. container:: cfloat-clear

   X
