Audit Logs
==========

The audit log records security-relevant changes in your Zammad instance: who
changed what and when. You can find it under *System > Audit Logs*. The
``admin.audit_log`` permission is required to access it.

The audit log is read-only. It does not record day-to-day ticket updates. For
those, see the ticket history.

What Is Recorded
----------------

The audit log records events like:

- Configuration changes in the admin area, such as enabling or disabling
  features and creating, updating or deleting objects such as roles or triggers.
- Changes to agent and administrator accounts, including account creation and
  deletion, password changes and role assignments.
- Session takeover events when an administrator switches to another user's
  session and back using ``View from user's perspective``.

Click on the ``Description`` button for additional examples of recorded
items. Sensitive values are always masked in audit log entries.

Viewing Audit Log Entries
-------------------------

By default, the audit log is sorted by **Created at**, with the newest entries
shown first. The **Created at** timestamp indicates when the audit log entry
was created, not when the affected object was created. Click any column heading
to change the sort order. Use the **Search for audit logs** bar to find entries.
The list displays the following information:

User
   The user who performed the action.

Action
   The action that was performed. Available actions include **create**,
   **update**, **destroy** (delete), **switch to user** and
   **switch back to user**.

Object
   The type of object that was changed.

Object name
   The name of the object that was changed.

Source IP
   The IP address from which the action was performed.

Created at
   The date and time when the entry was created.

Clicking an entry opens a read-only dialog with the recorded changes. Lines
prefixed with ``-`` and highlighted in red show previous values. Lines prefixed
with ``+`` and highlighted in green show new values. Session takeover entries
show **No changes** because they record the event rather than an object change.

Retention
---------

Zammad automatically removes audit log entries older than 12 months. This
retention period is not configurable. The cleanup runs once a day.
