Writing Assistant
=================

Zammad's writing assistant tools allow agents to apply AI based changes to
their text before saving or sending it. You can access the settings in Zammad's
admin section under *AI > Writing Assistant*. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise, a
warning message will tell you to do so. Activate the feature by turning on the
switch.

Manage Tools
------------

You can find a table with all available writing tools. You can **Clone** or
**Delete** them via ︙ action menu. To apply changes to an existing text tool,
simply click on the row to open the dialog, adjust it and save your changes by
clicking the ``Submit`` button. To set a writing assistant tool to **inactive**,
set the **Active** attribute accordingly.

Create or Edit Tools
--------------------

Zammad ships some writing assistant tools by default. These are useful for a
general writing assistance. By default, their availability is not limited to
groups. To adjust this, open it by clicking its row and select the groups for
which it should be available.

.. note:: Agents can access **all** writing assistance tools (including the
  restricted ones) during ticket creation as long as no group is selected.

You can even add your own custom write assistance tools by providing
instructions for the AI about how to check or perform changes to a given text.
Use cases for such individual tools could be:

- Apply branch specific wording
- Apply company specific wording
- Change the mood of the text
- Reduce or eliminate subjective or uninformative parts
- Combine different instructions in one tool

To add a new one, click the ``New Writing Assistant Tool`` button in the header.
To change an existing one, simply click on its row. This opens a dialog where
you have to add or edit some information:

- **Name**: Add a name for the write assistance tool. This is what your agents
  see when they access the write assistant tools.
- **Custom instructions**: Here you have to provide the instructions for the AI.
  To get proper responses, the instructions should be constructed in a certain
  way:

   - They should be unambiguous and precise.
   - They can include one or more examples.
   - They should not include superfluous or redundant information.
- **Groups**: Define groups which can access the write assistance tool. If no
  group is selected (moved on the left side by clicking on it), the tool is
  available for tickets in all groups.
- **Note**: Add a note about the write tool for other admins. This field is
  **not** considered as context for the AI.
- **Active**: Set the write tool to active or inactive.

Note that the **Custom instructions** are a very important part of the
configuration. They get included in the system prompt and tell the AI what
to do with a given text.

After creating or editing, you should test if the result is as expected. In
case you are not happy, feel free to adjust the instructions until it fits your
expectations.

Usage for Agents
----------------

If enabled, agents have access to the default tools as well as the custom tools
which are available in the group or are not limited to any group. They simply
have to select the text they want to check/change and select the writing
assistant tool they want to use.
The :user-docs:`AI section in the user documentation </extras/ai-features.html>`
includes additional information.