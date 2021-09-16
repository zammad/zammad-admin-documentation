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

Some fields stay unavailable to customers
  For technical and security reasons some default fields (the greyed out ones
  you can't edit) stay unavailable for display and usage on customer
  permissions.

    .. hint::

      If you require your customers to change e.g. priorities, please
      consider using workarounds via :doc:`/system/objects` and
      :doc:`/manage/trigger`.

What is out of scope of Core Workflow...?
  There are some things that would count as workflow but are either done via
  :doc:`/manage/trigger`, :doc:`/manage/scheduler` or over the current top.

  Such as (but not limited to):

    * up- or downgrade permissions of users
    * affect article creation or listing
