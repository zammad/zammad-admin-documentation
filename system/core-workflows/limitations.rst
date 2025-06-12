Limitations
===========

Core Workflows do not replace Triggers
   Workflows manipulate the behavior of fields. However, they do not set values
   in fields because of actions.

API calls are only partly affected
   Some options affect UI only and thus do not restrict responses and calls.

   This affects the following actions:

    * select
    * auto select
    * show
    * hide

Some fields stay unavailable to customers
   For technical and security reasons, some default fields (the pale ones
   you can't edit) stay unavailable for display and usage on customer
   permissions.

   If you require your customers to change e.g. priorities, please
   consider using workarounds via :doc:`/system/objects` and
   :doc:`/manage/trigger`.

Ticket title changes not supported in edit mask
   It is currently not possible to perform changes of the ticket title in the
   edit mask (e.g. renaming, set to read-only).

Ticket text changes not supported in edit mask
   It is currently not possible to perform changes of the ticket text in the
   edit mask (e.g. set to read-only).

What is out of scope of Core Workflows?
   There are some things that would count as workflow but are either done via
   :doc:`/manage/trigger` or :doc:`/manage/scheduler`.

   Such as (but not limited to):

    * up- or downgrade permissions of users
    * affecting article creation or listing
