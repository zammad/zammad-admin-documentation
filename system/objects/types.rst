Object types
************

When adding a new object, you can choose between the following object types.

.. warning::

   You cannot change the object format / type as soon as it is applied.
   If you no longer need an object, consider disabling it instead of removing.

.. note:: **What about the translation of my objects?**

   For some object types you can decide if they should be translatable or not.
   To be precise, it works only for the selectable fields because the possible
   choices are known and limited. For the following object types, you can set
   the translatable flag:

      * *Boolean field*
      * *Single selection field*
      * *Multiple selection field*
      * *Single tree selection field*
      * *Multiple tree selection field*

   For these types, you can find an additional field *Translate field contents*:

   .. figure:: /images/system/objects/object-types-translatable.png
      :align: center
      :alt: Screenshot showing translatable object types
      :scale: 80%

      Screenshot with example of translatable object type

Boolean field
   Provides a drop-down field with display values for ``true`` and ``false``.
   Allows setting a default value.

   .. figure:: /images/system/objects/settings_boolean.png
      :alt: Available settings for Boolean fields

Date field
   Provides a date picker field and does not allow default values.

   Default time diff (hours)
      This setting helps the user by highlighting the day from now plus the
      provided value. It *does not* pre-fill the field.

   .. figure:: /images/system/objects/settings_date.png
      :alt: Available settings for Date fields

Date & time field
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

   .. figure:: /images/system/objects/settings_datetime.png
      :alt: Available settings for Date & time fields

Integer field
   Provides an input field that allows integer usage only.
   You may define a default value. You cannot enforce comma separation.

   Minimal
      The minimal value the field accepts.

   Maximal
      The maximum value the field accepts.

   .. figure:: /images/system/objects/settings_integer.png
      :alt: Available settings for Integer fields

Multiple selection field
   Provides a selection field that allows the selection of one or more out
   of several. This field does allow setting a default value.

   .. include:: /system/objects/includes/adding-values-hint.include.rst

   .. include:: /system/objects/includes/url-template-hint.include.rst

   .. figure:: /images/system/objects/settings_multiselect.png
      :alt: Available settings for Multiple selection fields

   .. include:: /system/objects/includes/reposition-values.include.rst

Single selection field
   Provides a drop-down field that allows selection of one value out of several.
   This field does allow setting a default value.

   .. include:: /system/objects/includes/adding-values-hint.include.rst

   .. include:: /system/objects/includes/url-template-hint.include.rst

   .. figure:: /images/system/objects/settings_select.png
      :alt: Available settings for Single selection fields

   .. include:: /system/objects/includes/reposition-values.include.rst

Textarea field
   Provides a text area input field (multiple lines) and thus allows e.g.
   new lines. You can set a default field value.

      .. note::

         Please note that this field *does not* support text formatting
         or HTML content (rich text).

      .. warning:: **🥵 This field can consume a lot of visual space**

         Depending on where you use this field type, it may use a lot of visual
         space if you provide a lot of text. This may be an issue to work with.

   Default
      The here provided text will be shown within the text area field or new
      data sets.

   Maxlength
      | You can pick the maximum length of the field.
      | The default length of this object is ``500``.

   Rows
      | Change the number of rows to dislay so that you can use only the space
        you really need.
      | The default number of rows is ``4``.

   .. figure:: /images/system/objects/settings_textarea.png
      :alt: Available settings for Textarea fields

Text field
   Provides a text field (one line) and allows choosing a default value.

   Type
      Defines the type of the input field.
      This allows e.g. your browser to ensure that you provide the specific
      type.

      Currently available:

         * Email
         * Phone
         * Text
         * Url *(URL fields disable link-template availability)*

   Maxlength
      You can pick the maximum length of the field.

   .. include:: /system/objects/includes/url-template-hint.include.rst

   .. figure:: /images/system/objects/settings_text.png
      :alt: Available settings for Text fields

Single tree selection field
   Provides a select-like field with up to 6 layers of options.
   Does not allow setting a default value.

   .. include:: /system/objects/includes/reposition-treeselect-values.include.rst

   .. figure:: /images/system/objects/settings_treeselect.png
      :alt: Available settings for Tree Select fields

Multiple tree selection field
   Provides a select-like field with up to 6 layers of options allowing
   the selection of multiple values. Does not allow setting a default value.

   .. include:: /system/objects/includes/reposition-treeselect-values.include.rst

   .. figure:: /images/system/objects/settings_multitreeselect.png
      :alt: Available settings for Tree Select fields

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

What's the difference between URL and text fields with link template...?!
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Both fields have different use cases.
Use ``text`` type text fields when ever you have a *static* url that requires
dynamic parameters. If you require a drag & drop like field that you can put in
any URL, use ``URL`` type text fields.

The difference is easier to spot when comparing the fields directly,
below screencast shows the result - the dynamic approach uses existing values
in the moment of updating to built the URL - e.g.
``https://google.com/search?q=cookies`` - while the URL approach uses the
actual URL of the field - e.g. ``https://zammad.com``.

.. figure:: /images/system/objects/url-vs-text-type-text-fields.gif
   :alt: Screencast showing the differents in between URL and text type fields with actual values
   :width: 90%
   :align: center

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
