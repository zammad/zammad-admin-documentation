Audit Logs
==========

The audit log records security-relevant changes in your Zammad instance: who
changed what and when. You can find it under *System > Audit Logs*. The
``admin.audit_log`` permission is required to access it.

The audit log is read-only. It does not record day-to-day ticket updates. For
those, see the ticket history.

What Is Recorded
----------------

The audit log records basically all actions where admin permissions are
required. No matter if a setting got adjusted or an object like a trigger got
touched.

Configuration adjustments and changes of data in the admin area:

- Groups, roles, and permissions
- Overviews, triggers, schedulers, macros, templates, text modules and checklist
  templates
- Channels, postmaster filters, signatures, LDAP sources and webhooks
- Calendars, SLAs, time accounting, core workflows, object attributes, public
  links and report profiles
- System settings and packages
- AI agents and AI text tools
- S/MIME, PGP and SSL certificates
- Knowledge bases and their languages

User account changes (only changes for agents and admins accounts are recorded):

- Password changes
- Activation and deactivation of accounts
- Added or removed roles and group permissions
- Two-factor authentication changes

Session events:

- Taking over another user's session via ``View from user's perspective`` and
  switching back

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
