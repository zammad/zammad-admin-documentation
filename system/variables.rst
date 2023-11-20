Variables
*********

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

Wait, what about custom objects?
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

Using translated variables
--------------------------

If you want to use a translated variable in triggers or
schedulers, you can extend the placeholder like this:
``#{t(ticket.state.name)}``. The ``t`` tells Zammad to search for fitting
translated strings. The used output language is based on the system language of
Zammad which you can set in the admin panel under :doc:`/settings/branding`.

A possible use-case: you want to send your customers updates on tickets
via trigger or scheduler which should include the state of the ticket. Using the
default ``#{ticket.state.name}`` (without the translation flag ``t()``) would
lead to the output of the original (english) name of the state.