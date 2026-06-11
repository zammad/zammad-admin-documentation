Trigger
=======

Triggers are one way to automate Zammad. You can create *if this then that*
rules by defining which tickets should get changed and which changes you want
to apply to them.

To manage triggers in Zammad's admin settings under *Manage > Trigger*, you
need the permission ``admin.trigger``.

Zammad ships one active trigger by default: an auto reply trigger which sends
an email to the customer after a new ticket is created. You can disable it,
modify it, or create new ones for all sorts of automation tasks.

.. note::

   - For time-based automation, use :doc:`scheduler jobs </manage/scheduler>`.
   - To execute pre-defined changes manually via the UI (without a condition),
     use :doc:`/manage/macros`.

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /manage/trigger/how-do-they-work
