Variables
=========

.. note:: Please note that this is just an overview of available variables.
   It might be incomplete or variables might not be available within some
   functions. If you're missing variables or are not sure if something is not
   working as expected, feel free to ask over at the
   `Community <https://community.zammad.org>`_.

Variables can be called by typing ``::`` (just like text modules in the
frontend), as long as you're in a supported text field within the backend.
Zammad will display all variables being available within this context and
replace it to the variable as soon as you selected an entry.

.. hint:: You have an empty field which you referenced and it appears as ``-``?
   That's currently working as designed - you might want to ensure that these
   fields always have a value.

Variable Categories
-------------------

.. toctree::
   :maxdepth: 1

   variables/config
   variables/current-user
   variables/article
   variables/ticket

Wait, What About Custom Objects?
--------------------------------

Good point! Of course, we can't predict what objects you might create, but we
can give you a hint on how to put the puzzle together to get your custom values.

For this, we'll talk about the inner part of the variable (so everything
within ``#{}``), please put the outer part around to have a valid variable.
The first part of the variable name consist of the object type. Currently
these are:

* Ticket (``ticket``)
* User (``user``)
* Organization (``organization``)
* Group (``group``)

The second part is the name of the object. This is the name you define during
object creation and can be found within the object menu at any time.
The first and second part of a variable is divided by a point,
e.g.: ``ticket.number`` which will in total be ``#{ticket.number}``.

Now, in some situations it's possible that you'll need to use a third part.
The best example for such a situation would be a ``select`` or ``tree-select``
field which will by default return the key value, not it's display name.
For this, just extend your variable with ``.value``. This will result in
``#{ticket.select.value}``.

.. _variable_localization:

Using Translated Variables
--------------------------

If you want to use a translated variable in triggers or
schedulers, you can extend the placeholder like this:
``#{t(ticket.state.name)}``. The ``t`` tells Zammad to search for fitting
translated strings. The used output language is based on the system language of
Zammad which you can set in the admin panel under :doc:`/settings/branding` or
based on the selected locale in the trigger/scheduler edit dialog.

A possible use-case: you want to send your customers updates on tickets
via trigger or scheduler which should include the state of the ticket. Using the
default ``#{ticket.state.name}`` (without the translation flag ``t()``) would
lead to the output of the original (english) name of the state.

Date and Time Formatting
------------------------

The system (trigger/scheduler selected) locale and timezone predefines a default format of date and timestamp. This format is customizable by using the ``dt()`` method.

The method arguments are as follows:

1. The date or timestamp variable you want to format.
2. The output format string.
3. The timezone to apply (optional).

| **Example:**
|    ``#{dt(ticket.updated_at, "%A %Y-%m-%d %H:%M in the office", "Europe/Berlin")}``
|    Monday, 2024-03-18 15:31 in the office

.. hint:: If you want to use our example, make sure to paste the
  string above without formatting (``CTRL+Shift+v``), otherwise it
  won't work.

The following table lists available format directives:

.. list-table::
   :widths: 15 30 55
   :header-rows: 1

   * - Parameter
     - Description
     - Note
   * - ``%Y``
     - Year with 4 digits
     - Use ``%y`` for year with 2 digits
   * - ``%m``
     - Month of year (as number with zero-padding)
     - Use ``%-m`` for month without zero-padding
   * - ``%d``
     - Day of month (as number with zero-padding)
     - Use ``%e`` for day without zero-padding
   * - ``%H``
     - Hour of day in 24h notation with zero-padding
     - Use ``%k`` for hour without zero-padding
   * - ``%I``
     - Hour of day in 12h notation with zero-padding
     - Use ``%l`` for hour without zero-padding and ``%p`` / ``%P`` for meridian indicator
   * - ``%M``
     - Minute of hour
     -
   * - ``%S``
     - Second of Minute
     -
   * - ``%A``
     - Weekday name
     - Use ``%a`` for abbreviated name or ``%^A`` for uppercase name
   * - ``%B``
     - Month name
     - Use ``%b`` for abbreviated name
   * - ``%U``
     - Week number of current year
     - Use ``%W`` for a different calculation method

.. tip::
   We support the known format directives for
   the Ruby built-in method ``strftime`` of the ``DateTime`` class.
   For more information, see `here <https://apidock.com/ruby/DateTime/strftime>`_.
