Object types
************

When adding a new object, you can choose between the following object types.

Boolean
   Provides a drop-down field with display values for ``true`` and ``false``.
   Allows setting a default value.

   .. figure:: /images/system/objects/settings_boolean.png
      :alt: Available settings for Boolean fields

Date
   Provides a date picker field and does not allow default values.
   
   Default time diff (hours)
      This setting helps the user by highlighting the day from now plus the
      provided value. It does not pre-fill the field.

      .. note::

         Please note that this setting is currently affected by
         `bug 3763 <https://github.com/zammad/zammad/issues/3763>`_.

   .. figure:: /images/system/objects/settings_date.png
      :alt: Available settings for Date fields

Datetime
   Provides a date and time picker – does not allow default values

   Allow future
      | Forbid dates and times in the future.
      | Default: ``yes``

   Allow past
      | Forbid dates and times in the past.
      | Default: ``yes``

   Default time diff (minutes)
      This setting helps the user by highlighting the day from now plus the
      provided value. It does not pre-fill the field.

      .. note::

         Please note that this setting is currently affected by
         `bug 3763 <https://github.com/zammad/zammad/issues/3763>`_.

   .. figure:: /images/system/objects/settings_datetime.png
      :alt: Available settings for Date time fields

Integer
   Provides an input field that allows integer usage only.
   You may define a default value.
   
   Minimal
      The minimal value the field accepts.

   Maximal
      The maximum value the field accepts.

   .. figure:: /images/system/objects/settings_integer.png
      :alt: Available settings for Integer fields

Select
   Provides a drop-down field that allows selection of one value out of several.
   This field does allow setting a default value.

   .. tip::

      Adding values can be tricky for first timers, don't forget to press
      "➕ Add" after typing your values. Otherwise you may loose a value.

   .. hint::

      Select fields allow usage of
      :ref:`URL fields (Link Templates) <link-templates>`.

   .. figure:: /images/system/objects/settings_select.png
      :alt: Available settings for Select fields

Text
   Provides a text field (one line) and allows choosing a default value.

   Type
      Defines the type of the input field.
      This allows e.g. your browser to ensure that you provide the specific
      type.

      Currently available:

         * email
         * phone
         * text
         * url *(url fields disable link-template availability)*

   Maxlength
      you can pick the maximum length of the field.

   .. hint::

      Select fields allow usage of
      :ref:`URL fields (Link Templates) <link-templates>`.

   .. figure:: /images/system/objects/settings_text.png
      :alt: Available settings for Text fields

Tree Select
   Provides a select-like field with up to 6 layers of options.
   Does not allow setting a default value.

   .. figure:: /images/system/objects/settings_treeselect.png
      :alt: Available settings for Tree Select fields

.. warning:: 

   You cannot change the object format / type as soon as it is applied.
   If you no longer need an object, consider disabling it instead of removing.

.. _link-templates:

URL fields (Link-Template)
--------------------------

.. note:: 

   This function is restricted to Text and Select objects only.

Link-Templates are an amazing way to dynamically generate URLs.
They allow you to integrate other systems better without having to
manually copy data from Zammad if possible.

   .. note::

      Another great way of communicating with another system may be Zammad's
      :doc:`Webhooks </manage/webhook>`.

After filling a link-template enabled field, an URL icon will appear on its
right. Clicking on the icon opens a new tab.

   .. hint:: 

      Even though Zammad displays the link template within object edit and
      create screens, the function is optional. It's only active if you populate
      the field.

How does this work...?!
^^^^^^^^^^^^^^^^^^^^^^^

As an example, let's say you have an object called ``amazingobject`` - you want
to open a google search directly with the input from that field.

Providing below to the link-template field allows you to do so:
``https://www.google.com/search?q=#{ticket.amazingobject}``

   .. tip::

      You can use any :doc:`Zammad variable </system/variables>` as long as
      it's available in the moment you need it.

The result will look as follows.

.. figure:: /images/system/objects/link-template.gif
   :align: center

   The above screencast shows how the link template will perform after
   object creation.
