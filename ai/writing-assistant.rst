Writing Assistant
=================

Zammad's writing assistant tools allow agents to apply AI based changes to
their text before saving or sending it. You can access the settings in Zammad's
admin section under *AI > Writing Assistant*. Make sure to configure an
:doc:`AI provider <provider>` before activating the feature. Otherwise, a
warning message will tell you to do so. Activate the feature by turning on the
switch.

.. figure:: /images/ai/writing-assistant.png
   :alt: Screenshots shows writing assistant settings screen with available default tools

Manage Tools
------------

The main section of the screen holds a table where you can find all available
writing tools. The table includes the name of the tool, an optional description
in the **Note** column as well as an information about an optional limitation
to specific groups.

You can **Clone** or **Delete** existing tools via ︙ action menu. To edit a
tool, simply click on its row. To add a new one, click the
``New Writing Assistant Tool`` button in the header. Use cases for such
individual tools could be:

- Translation
- Apply company and/or sector specific wording
- Change the mood of the text
- Reduce or eliminate subjective or uninformative parts
- Combine different instructions in one tool

Configuration
-------------

Adding or editing a tool opens a dialog where you can configure it. If you
want to add a new tool, consider cloning an existing one to have a good starting
point. Read on for an explanation of each field.

Name
   Add a name for the write assistant tool. This is what your agents see when
   they access the write assistant tools.

Custom instructions
   Provide detailed instructions for the AI. This is a very important part of
   the configuration. They get included in the system prompt and tell the AI
   what to do with a given text. To get proper responses, the instructions
   should be constructed in a certain way:

   - They should be unambiguous and precise.
   - They can include one or more examples.
   - They should not include superfluous or redundant information.
   - They can specify an output format to keep the formatting and structure
     (namely HTML, see examples below).

   You can even use variables by typing ``::``. This triggers a list of
   available variables where you can choose from. By using a variable, you can
   include object specific information in the instructions.

   .. tip::

      To help you build good instructions, we collected a few snippets which
      may be helpful, depending on your use case. Pick fitting ones and include
      it in your custom instructions and/or consider cloning an existing text
      tool and adjust it.

      .. code-block:: text

        - Maintain the language of the given input text for the output.
        - Preserve all existing HTML markup without alteration.
        - Ensure the output is well-formatted, engaging, and free of errors.
        - Do not introduce new or unrelated ideas that change the original message.
        - Preserve all HTML tags (e.g. links, images) and formatting (e.g. bold, italic) whenever it makes sense.
        - Preserve all key information, main arguments, and important details.

Groups
   Define groups which can access the write assistance tool. If no  group is
   selected (moved on the left side by clicking on it), the tool is
   available for tickets in all groups.

   .. note:: Agents can access **all** writing assistance tools (including the
      restricted ones) during ticket creation as long as no group is selected.

Note
  Add a note about the write tool for other admins and explain what it it is
  for. This information gets displayed in the table of tools. It is **not**
  considered as context for the AI.

Active
   Set the write assistant tool to active or inactive.

After creating or editing, you should test if the result is as expected. In
case you are not happy, feel free to adjust the instructions until it fits your
expectations.

Usage for Agents
----------------

If enabled, agents have access to the default tools as well as the custom tools
which are available for the group or are not limited to any group. They simply
have to select the text they want to check/change and select the writing
assistant tool they want to use.
The :user-docs:`AI section in the user documentation </extras/ai-features.html>`
includes additional information.
