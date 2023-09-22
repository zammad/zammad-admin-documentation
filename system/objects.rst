Objects
*******

In Zammad you can add your own fields to tickets, users, organizations and even
groups. This can be useful if you need to add further information to a ticket
that you don't want to have in a note (you'll find it easier).

.. note:: 

   Try to avoid deleting objects (and disable them instead) as Zammad might run
   into unexpected conditions if they are referenced somewhere.

.. image:: /images/system/objects/object-overview.png

Here's an overview of the objects. On the upper right you can add new
Attributes. By default, there will be no custom fields - standard objects
will be grayed out, you can't delete or change those.
Custom objects (will be displayed in black font and have a trash bin on
the right site to delete unnecessary objects.
By clicking on "custom objects" you can edit them to suit your needs.

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

Ordering objects
----------------

Since Zammad introduced :doc:`/system/core-workflows` the need to have a
custom positioning for objects has become more important than ever.

To adjust the position of an object, simply click on the object entry in
question, scroll down and adjust the position number.

.. figure:: /images/system/objects/object-positioning.png
   :alt: Screenshot showing object entries with a custom object ordered in between default objects

.. hint::

   In case two objects have the same position value, Zammad will sort
   alphabetically by name automatically.

   | **Limitation**
   | Please note that you cannot change the positioning of default objects
     at this time.

Updating database after adding or editing objects
-------------------------------------------------

When adding or changing objects, Zammad will not apply the changes instantly,
but instead shows you the changed objects first.
If you're ready to go, just click on "Update database" to apply the changes
to Zammad. If you made a mistake or just want to discard your changes, click
"Discard changes".

.. warning::

   After applying the object changes with "Update Database" a restart of Zammad
   is **mandatory**. If you don't perform it, you may experience unexpected
   behavior or even errors. You may want to do those kind of configurations
   during maintenance windows.

      .. figure:: /images/system/objects/update-database.png
         :align: center

         Changes on objects require you to update the database
         to apply these changes.

   .. tip:: **🤓 Service restarts can be automated**

      | Hosted environments automatically restart for you.
      | If you're using a self-hosted installation you can use
        :docs:`environment variables </appendix/configure-env-vars.html>`

System objects
--------------

Zammad comes with pre-configured objects. Some of these currently do not
provide the possibility to edit them via UI (or at all).

This is not a bug but is to save you from possibly nuking Zammad.

   .. tip::

      There are technical exceptions which can be solved via console.
      This e.g. affects ticket states and priorities, see
      :docs:`console section </admin/console.html>`.

      💰 If you're a hosted customer, please contact your support for more. 💰
