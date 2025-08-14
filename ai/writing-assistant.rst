Writing Assistant
=================

Zammad's writing assistant tools allow agents to apply AI based changes to
their text before saving or sending it. You can access the settings in Zammad's
admin section under *AI > Writing Assistant*. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise, a
warning message will tell you to do so.

Default Tools
-------------

Zammad ships some default tools:

- Improve writing
- Fix spelling and grammar
- Expand
- Simplify

These are useful basic tools for all agents. This is why they are not
customizable and deletable. If you enable the feature by turning the
**Writing Assistant** toggle on, these default tools are available to all
agents.

Note that these built-in tools can benefit from optimizations which can be
shipped by an update of Zammad.

Add Custom Tools
----------------

You can add your own custom write tools by providing instructions for the AI
about how to check or perform changes to a given text. Use cases for such
individual tools could be:

- Apply branch specific wording
- Apply company specific wording
- Change the mood of the text
- Reduce or eliminate subjective or uninformative parts
- Combine different instructions in one tool

Click the ``New Writing Assistant Tool`` button in the header. This opens a
dialog where you have to provide some information:

- **Name**: Add a name for the write tool. This is what your agents see when they
  access the write assistant tools.
- **Custom instructions**: Here you have to provide the instructions for the AI.
  To get proper responses, the instructions should be constructed in a certain
  way:

   - They should be unambiguous and precise.
   - They can include one or more examples.
   - They should not include superfluous or redundant information.
- **Groups**: Define groups which can access the write tool.
- **Note**: Add a note about the write tool for other admins. This field is
  **not** considered as context for the AI.
- **Active**: Set the write tool to active or inactive.

Note that the **Custom instructions** are a very important part of the
configuration. They get included in the system prompt and tell the AI what
to do with a given text.

After saving your writing tool, you should test if the result is as expected. In
case you are not happy, feel free to adjust the instructions until it fits your
expectations.

Manage Text Tools
-----------------

In case you already added at least one text tool, you can see a table with
all your custom text tools. You can **Clone** or **Delete** them via ︙ action
menu. To apply changes to an existing text tool, simply click on the row to
open the dialog, adjust it and save your changes by clicking the ``Submit``
button. To set a text tool to **inactive**, set the **Active** attribute to this
value.

Usage for Agents
----------------

If enabled, agents have access to the default tools as well as the custom tools
which are available in the group. They simply have to select the text they want
to check/change and select the writing assistant tool they want to use.
The :user-docs:`AI section in the user documentation </extras/ai-features.html>`
includes additional information.