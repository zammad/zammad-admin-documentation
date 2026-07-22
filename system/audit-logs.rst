Audit Logs
==========

The audit log records security-relevant changes in your Zammad instance: who
changed what and when. You can find it under *System > Audit Logs*. The
``admin.audit_log`` permission is required to access the audit log.

The audit log is read-only. It does not record day-to-day ticket updates. For
those, see the ticket history.

What Is Recorded
----------------

The audit log records the following events:

- Configuration changes in the admin area, including changes to groups, roles,
  permissions, overviews, triggers, schedulers, macros, templates, text
  modules, checklist templates, channels, postmaster filters, signatures, LDAP
  sources, webhooks, calendars, SLAs, time accounting, core workflows, object
  attributes, public links, report profiles, system settings, packages, AI
  agents, AI text tools, S/MIME, PGP and SSL certificates, knowledge bases and
  knowledge base languages.
- Changes to agent and administrator accounts, including password changes,
  activation and deactivation, role and group permission changes and
  two-factor authentication changes.
- Session takeover events when an administrator switches to another user's
  session and switches back.

Sensitive values are masked in audit log entries.

Viewing Audit Log Entries
-------------------------

The audit log is sorted by **Created at**, with the newest entries shown first.
Use the **Search for audit logs** bar to find entries. The list displays the
following information:

User
   The user who performed the action.

Action
   The action that was performed. Available actions include ``create``,
   ``update``, ``destroy``, ``switch to user`` and ``switch back to user``.

Object
   The type of object that was changed.

Object name
   The name of the object that was changed.

Source IP
   The IP address from which the action was performed.

Created at
   The date and time when the entry was created.

Click an entry to open a read-only dialog with a diff of the recorded changes.
For ``create``, ``update`` and ``destroy`` actions, the diff shows removed and
added values. Entries for created objects show the recorded values as added.
Entries for deleted objects show them as removed. Session takeover entries show
**No changes.** because they record the event rather than an object change.

Retention
---------

Zammad automatically removes audit log entries older than 12 months. This
retention period is not configurable. The cleanup runs once a day.
