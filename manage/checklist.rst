Checklist
=========

General
-------

The checklist feature allows agents to keep track of the tasks to be completed.
It is activated by default and shows up in another tab in the right sidebar
in the ticket view (see :user-docs:`here </extras/checklist.html>` what it
looks like from agent's perspective).

.. figure:: /images/manage/checklist/checklist-settings.png
   :alt: Screenshot showing checklist feature in admin area.

Usage
-----

To activate/deactivate the feature, simply switch the toggle labeled with
"Enable Checklists" at the top of the page.

You can optionally create one or more templates with predefined checklist
items. For this, just click on the "New Checklist Template" button and define
the checklist name and items. After submitting the form, the template can be
used in tickets.

You can clone or delete a template by clicking on the ︙ button and selecting
the corresponding action.

To edit the template, simply click on the name of the template. This opens
a dialog where you can edit the checklist and the items (add, rename,
reorder, delete them) and set the entire template to active/inactive.

.. figure:: /images/manage/checklist/checklist-template-edit.png
   :alt: Screenshot showing the checklist template edit dialog.
   :align: center
   :scale: 70%

Remarks
-------

- It is only possible to add one checklist per ticket.
- There is no specific permission for the checklist feature. You can turn it off
  or on and provide optionally usable checklist templates.
- If the agent has access to the ticket, they will also have access to its
  checklist.
- If an agent only has reading permissions for this ticket, the checklist will
  be displayed in read-only mode.
- Customers have no access to the checklists at all and do not see them.
- An agent can always overwrite and adjust the checklist, it can even be
  deleted from the ticket. This applies also to checklists which are
  added in a ticket based on a checklist template.
- The checklist feature is currently a standalone feature. That means you can't
  access the items or state of the checkboxes from other places in Zammad like
  triggers or workflows.