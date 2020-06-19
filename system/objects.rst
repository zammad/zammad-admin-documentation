Objects
*******

In Zammad you can add your own fields to tickets, users, organizations and even groups.
This can be useful if you need to add further information to a ticket that you don't want to have in a note (you'll find it easier).

.. note:: Try to avoid deleting objects (rather disable them) as Zammad might run into unexpected conditions if they where referenced somewhere.

.. image:: /images/system/objects/1.jpg

Here's an overview of the objects. On the upper right you can add new Attributes (no 1).
By default, there will be no custom fields - standard objects (no 2) will be grayed out, you can't delete or change those.
Custom objects (no 3) will be displayed in black font and have a trash bin on the right site to delete not needed objects.
By click on custom objects, you can edit them so they can suite your needs.


Object types
------------

.. hint:: Starting with Zammad 3.2 you can create dynamic URL-Fields for select and text attributes. See more below!

When adding a new object, you can choose between the following object types:


- Boolean
   - true or false, you can adjust the display for those keys and mark a default one.
- Date
   - enables you to use the date picker of Zammad.
   - you can allow / forbid the date chosen to be in the future and in past.
   - set the standard time difference in hours, which is entered as the default value if no value is defined.
- Date-time
   - enables you to use the date picker plus time selection of Zammad.
   - you can allow / forbid the date chosen to be in the future and in past.
   - set the default time difference in hours.
- Integer
   - you can set the default value of this field.
   - you can configure the minimum and maximum value that can be used.
- Select
   - you can add as many selections you need, you'll see the field as drop-down menu.
   - they key and display name can differ (display name can be translated if needed).
   - You can select a default value for this field, if you want to.
   - Allows you to define a URL if needed
- Text
   - you can enter a default value.
   - you can choose between the following types: email, phone, text, or URL.
   - you can pick the maximum length of the field.
   - Allows you to define a URL if needed
- Tree Select
   - this object enables you to use up to 6 sub keys.
   - you'll see this object as a kind of drop down menu.

.. note:: You cannot change the object format / type as soon as you applied it. If you don't further need an object, you can disable it.


URL fields (Link-Template)
--------------------------

.. note:: This option is available within Zammad 3.2 and later. This function is restricted to Text and Select objects only.

Link-Templates are an amazing way to dynamically generate URLs. This allows you to integrate other systems better, without having the need to
manually copy an URL! As soon as field is set and updated, a URL-Icon will appear, allowing you to open the link in a new tab.

.. hint:: Even though the Link-Template field shows up within the object edition, it is optional and not used if you don't fill in anything.

How does this work...?!
^^^^^^^^^^^^^^^^^^^^^^^

The Link-Template can consist of static and dynamic parts.
This means that you can, for exmaple, create a URL for a google search by defining the following:

``https://www.google.com/search?q=#{ticket.amazingobject}``

The above will create a google search link which will contain the search phrase (which is the objects value).
You can use any variable that's available within Zammad! This gives your great options within your structures!

Learn more about :doc:`/system/variables`.

.. figure:: /images/system/objects/link-template.gif
   :align: center

   The above screencast shows how the link template will perform after object creation.


Object permissions
------------------

When ever needed you can restrict access to objects for permission roles (agents and customer) and even set a object to be required.

- During Ticket Creation
   - show / hide the field.
   - make the field required (if needed).
- During Updating a Ticket
   - show / hide the field.
   - make the field required (if needed).

.. hint:: You can't change these settings for pre defined objects (as you can't edit them via UI). Please note that this currently works as designed.

.. figure:: /images/system/objects/2.jpg
   :align: center

   This is the object edit screen, it looks very similar to the creation screen and holds all object specific information.



Updating database after adding or editing objects
-------------------------------------------------

.. hint:: Zammad doesn't restart automatically and prompts you to restart? You may want to check `configure enviroment variables <https://docs.zammad.org/en/latest/appendix-configure-env-vars.html#configure-restart-command>`_ to solve this.

.. note:: If you're on a self hosted system, you might need console access to your Zammad-Server to restart the service.

When adding or changing objects, Zammad will not apply the changes isntantly, but instead shows you the changed objects first.
If you're ready to go, just click on "Update database" to apply the changes to Zammad.
If you made a mistake or just want to discard your changes, click "Discard changes".

.. figure:: /images/system/objects/update-database.jpg
   :align: center

   Changes on objects require you to update the database to apply these changes.
