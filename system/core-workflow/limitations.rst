Limitations
===========

Core Workflow does not replace Trigger
  Workflows manipulate behavior of fields, however, does not set values
  in fields because of actions.

API calls are only partly affected
  Some options affect UI only and thus do not restrict responses and calls.

  This affects the following actions:

    * select
    * auto select
    * show
    * hide

What is out of scope of Core Workflow...?
  There are some things that would count as workflow but are either done via
  :doc:`/manage/trigger`, :doc:`/manage/scheduler` or over the current top.

  Such as (but not limited to):

    * up- or downgrade permissions of users
    * affect article creation or listing
