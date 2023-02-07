Templates
*********

Templates allow you to create tickets at a rapid speed by defining a
ticket template for recurring tickets.

   .. note:: **😖 Sounds familiar**

      Right! Prior Zammad 5.3 ticket templates where managed entirely within
      the ticket zoom.

      | This has changed:
      | Your agents by default no longer have permission to manage templates by
        default. However, they can always *load* existing templates into their
        new ticket dialogue.

.. figure:: /images/manage/templates/template-management.png
   :alt: Screenshot showing Zammad's (ticket) template management page
   :width: 90%

.. warning:: ⚠️ Limitation ahead

   Please note that ticket templates do not allow the use of variables.

Managing templates
------------------

:Adding new template:
   Use the *New Template* button to start creating a new template.

   Name
      Select a meaningful template name. This name will be shown to your agents
      during ticket creation (within *Select Template*).

   Actions
      Within actions, Zammad will provide all available ticket attributes.
      This allows you to create granular templates with the information you
      need.

   Active
      Set any currently active ticket template to ``inactive`` if you don't
      need it momentarily. This allows you to keep the template for e.g.
      seasonal reasons without providing it as an option to your agents.

   .. figure:: /images/manage/templates/adding-new-template.png
      :alt: Screenshot showing the template configuration

:Editing templates:
   If your template no longer fits your need or contains errors, simply
   click on the template name to edit it.

:Cloning templates:
   Zammad allows you to clone existing templates and continue your new
   template from there.

   To do so, use *⋮ Actions* of the desired template in your list and choose
   *Clone*. A new template modal will open with attributes prefilled.

:Removing templates:
   If you longer require a specific template, use *⋮ Actions* in the list and
   choose *Delete*.

   .. danger::

      Removals are permanent. ☠️
