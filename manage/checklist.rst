Checklist
=========

The checklist feature allows agents to keep track of the tasks to be completed.
It is activated by default and shows up in another tab in the right sidebar
in the ticket detail view (see :user-docs:`here </extras/checklist.html>` how it
looks like from agent's perspective). To manage the checklist feature in
Zammad's admin settings under *Manage > Checklists*, you need the
``admin.checklist`` permission.

.. figure:: /images/manage/checklist/checklist-settings.png
   :alt: Screenshot showing checklist feature in admin area.

Usage
-----

To activate/deactivate the feature, simply switch the toggle labeled with
**Enable Checklists** at the top of the page.

Optionally, you can create one or more templates with predefined checklist
items. To do so, click on the ``New Checklist Template`` button and define
the checklist name and items. After submitting the form, the template can be
used in tickets.

To clone or delete a template, use the ︙ button and select the corresponding
action. To edit the template, simply click on the name of the template. This
opens a dialog where you can edit the checklist and the items (add, rename,
reorder, delete them) and set the entire template to active/inactive.

.. figure:: /images/manage/checklist/checklist-template-edit.png
   :alt: Screenshot showing the checklist template edit dialog.
   :align: center
   :scale: 70%

Remarks
-------

- It is only possible to add one checklist per ticket.
- There is no specific agent permission for the checklist feature. You can turn
  it on or off and optionally provide checklist templates.
- If the agent has access to the ticket, they will also have access to its
  checklist.
- If an agent only has reading permissions for this ticket, the checklist will
  be displayed in read-only mode.
- Customers have no access to the checklists at all and can't see them.
- An agent can always overwrite and adjust the checklist, even a deletion is
  possible. This also applies to checklists which got added from a template.
- The checklist feature is currently a standalone feature. This means you can't
  access the items or state of the checkboxes from other places in Zammad like
  triggers or workflows.
