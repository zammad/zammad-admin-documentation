Objects
*******

In Zammad you can add your own fields to tickets, users, organizations and even
groups (these are called "objects"). This can be useful if you need to add
further information to a ticket or any other object in Zammad and the
information doesn't fit in any existing field.

.. note::

   Try to avoid deleting attributes (and disable them instead) as Zammad might
   run into unexpected conditions if they are referenced somewhere.

.. image:: /images/system/objects/object-overview.png

Here's an overview of object attributes. On the upper right you can add new
attributes. By default, there will be no custom fields - standard attributes
will be grayed out, you can't delete or change those.
You can edit custom attributes (they are displayed in black font and have a
trash bin on the right side) just by clicking on them.

   .. note::

      Attributes you add to Zammad, no matter if they have default values or
      not, will not update existing information. This means a new ticket field
      technically will be empty unless you populate it.

      Especially in ticket scope this also means that newly added attributes
      will be indicated as "changed" to agents that view the ticket. This may
      interfere with Zammad's tabs behavior.

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /system/objects/types
   /system/objects/permissions

Ordering attributes
-------------------

Since Zammad introduced :doc:`/system/core-workflows` the need to have a
custom positioning for attributes has become more important than ever.

To adjust the position of such an attribute, simply click on the attribute
entry in question, scroll down and adjust the position number.

.. figure:: /images/system/objects/object-positioning.png
   :alt: Screenshot showing custom attribute entries ordered in between default ones

.. hint::

   In case two attributes have the same position value, Zammad will sort
   alphabetically by name automatically.

   | **Limitation**
   | Please note that you cannot change the positioning of default attributes
     at this time.

Updating database after adding or editing attributes
----------------------------------------------------

When adding or changing attributes, Zammad will not apply the changes instantly,
but instead shows you the changed attributes first.
If you're ready to go, just click on "Update database" to apply the changes
to Zammad. If you made a mistake or just want to discard your changes, click
"Discard changes".

.. warning::

   After applying the changes with "Update Database", a restart of Zammad
   is **mandatory**. If you don't perform it, you may experience unexpected
   behavior or even errors. You may want to do this kind of configuration
   during maintenance windows.

      .. figure:: /images/system/objects/update-database.png
         :align: center

         Changes on objects require you to update the database
         to apply these changes.

   .. tip:: **🤓 Service restarts can be automated**

      | Hosted environments automatically restart for you.
      | If you're using a self-hosted installation you can use
        :docs:`environment variables </appendix/configure-env-vars.html>`

System attributes
-----------------

Zammad comes with pre-configured attributes. Some of these currently do not
provide the possibility to edit them via UI (or at all).

This is not a bug but is to save you from possibly nuking Zammad.

   .. tip::

      There are technical exceptions which can be solved via console.
      This e.g. affects ticket states and priorities, see
      :docs:`console section </admin/console.html>`.

      💰 If you're a hosted customer, please contact your support for more. 💰
