Dashboard
=========

The dashboard is the page agents see after logging in. It shows statistic
widgets, the **First Steps** tab and the activity stream. Manage it in Zammad
under *Settings > Dashboard*. Make sure to have the permission
``admin.dashboard``.

You can turn off the whole dashboard or only some of its parts.

Turn Off the Dashboard
----------------------

Use the switch at the top of the page to turn the dashboard on or off. It is
turned on by default. While it is turned off:

- The dashboard disappears from the main menu and agents land on their ticket
  overviews after logging in.
- The keyboard shortcut for the dashboard is not available.
- Zammad does not record activities for the activity stream (see
  **Activity Stream** below).

While the dashboard is turned off, you can't change its views and widgets.
Turning it on again restores them as they were configured before.

Dashboard Views
---------------

**Activity Stream**
   Shows recent changes to tickets, users and organizations on the dashboard.
   Choose which activities agents see:

   - **All activities** (default): all activities the agent has access to.
   - **Own activities only**: only activities the agent caused themselves.
   - **Do not show activities**: the activity stream is hidden.

   While the activity stream is hidden, Zammad does not record any activities.
   If you show it again later, activities from that period are missing.

**First Steps**
   Shows the **First Steps** tab on the dashboard, which onboards new users
   with a step-by-step Zammad setup. See :doc:`/misc/first-steps` for its
   content. Turned on by default.

Dashboard Widgets
-----------------

Each checkbox shows or hides one statistic widget on the dashboard for all
agents. All widgets are turned on by default:

- **∅ Waiting time today**
- **Mood**
- **Channel Distribution**
- **Assigned**
- **My tickets in process**
- **Reopening rate**

The help text of each checkbox explains what the widget shows. Zammad
keeps calculating the statistics of hidden widgets, so they show current
values as soon as you turn them on again. Widgets added by add-ons don't
appear in this list and can't be hidden here.

If you turn off all views and widgets, the settings page shows a warning and
agents see an empty dashboard asking them to contact their administrator. If
you don't need the dashboard at all, turn it off instead.
