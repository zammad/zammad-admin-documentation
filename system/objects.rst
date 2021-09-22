Objects
*******

In Zammad you can add your own fields to tickets, users, organizations and even
groups. This can be useful if you need to add further information to a ticket
that you don't want to have in a note (you'll find it easier).

.. note:: 

   Try to avoid deleting objects (rather disable them) as Zammad might run into
   unexpected conditions if they where referenced somewhere.

.. image:: /images/system/objects/object-overview.png

Here's an overview of the objects. On the upper right you can add new
Attributes (no 1). By default, there will be no custom fields - standard objects
(no 2) will be grayed out, you can't delete or change those.
Custom objects (no 3) will be displayed in black font and have a trash bin on
the right site to delete not needed objects.
By click on custom objects, you can edit them so they can suite your needs.

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /system/objects/types
   /system/objects/permissions

Updating database after adding or editing objects
-------------------------------------------------

When adding or changing objects, Zammad will not apply the changes instantly,
but instead shows you the changed objects first.
If you're ready to go, just click on "Update database" to apply the changes
to Zammad. If you made a mistake or just want to discard your changes, click
"Discard changes".

.. warning::

   After applying the object changes with "Update Database" a restart of Zammad
   is **mandatory**. If you don't you may experience unexpected behavior or
   even errors. You may want to do those kind of configurations during
   maintenance windows.

      .. figure:: /images/system/objects/update-database.png
         :align: center

         Changes on objects require you to update the database
         to apply these changes.

   .. tip:: **🤓 Service restarts can be automated**

      | Hosted environments automatically restart for you.
      | If you're using a self hosted installation you can use
        `environment variables`_

.. _environment variables:
   https://docs.zammad.org/en/latest/appendix/configure-env-vars.html

System objects
--------------

Zammad comes with pre shipped objects. Some of these currently do not
provide the possibility to edit them via UI (or at all).

This is not a bug but is to save you from possibly nuking Zammad.

   .. tip::

      There are technical exceptions which can be solved via console.
      This e.g. affects ticket states and priorities, see `console section`_.

      💰 If you're a hosted customer, please contact your support for more. 💰

.. _console section: https://docs.zammad.org/en/latest/admin/console.html
