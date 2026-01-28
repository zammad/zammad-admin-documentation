Attribute types
***************

When adding a new object attribute, you can choose between the following
attribute types.

.. toctree::
   :hidden:

   Example external data source <external-data-source-example>

.. warning::

   You cannot change the attribute format / type as soon as it is applied.
   If you no longer need an object attribute, consider disabling it instead of
   removing.

.. note:: **What about the translation of my attributes?**

   For some attribute types you can decide if they should be translatable or not.
   To be precise, it works only for the selectable fields because the possible
   choices are known and limited. For the following attribute types, you can set
   the translatable flag:

      * *Boolean field*
      * *Single selection field*
      * *Multiple selection field*
      * *Single tree selection field*
      * *Multiple tree selection field*

   For these types, you can find an additional field *Translate field contents*:

   .. figure:: /images/system/objects/object-types-translatable.png
      :align: center
      :alt: Screenshot showing translatable attribute types
      :scale: 80%

      Screenshot with example of translatable attribute type

Boolean field
   Provides a drop-down field with display values for ``true`` and ``false``.
   Setting a default is mandatory.

   .. figure:: /images/system/objects/settings_boolean.png
      :alt: Available settings for Boolean fields

Date field
   Provides a date selection field. During object creation, it gets pre-filled
   with the current date and the specified difference/offset is applied.

   Default time diff (hours)
      Define the default time difference/offset (in hours) for pre-population
      of the field during object creation.

   .. figure:: /images/system/objects/settings_date.png
      :alt: Available settings for Date fields

Date & time field
   Provides a date and time selection field. During object creation, it gets
   pre-filled with the current date and time and the specified difference/offset
   is applied.

   Allow future
      | Allows dates and times in the future.
      | Default: ``yes``

   Allow past
      | Allows dates and times in the past.
      | Default: ``yes``

   Default time diff (minutes)
      Define the default time difference/offset (in minutes) for pre-population
      of the field during object creation.

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

   .. tip::

      Don't forget to press "➕ Add" after adding your values. Otherwise, you may
      lose a value.

   .. include:: /system/objects/includes/url-template-hint.include.rst

   .. figure:: /images/system/objects/settings_multiselect.png
      :alt: Available settings for Multiple selection fields

   .. include:: /system/objects/includes/reposition-values.include.rst

Single selection field
   Provides a drop-down field that allows selection of one value out of several.
   This field does allow setting a default value.

   .. tip::

      Don't forget to press "➕ Add" after adding your values. Otherwise, you may
      lose a value.


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
   Provides a select-like field with up to 6 layers of options. To restrict
   the selection of a value, uncheck the box in the "Active" column.
   This type does not allow setting a default value.

   .. include:: /system/objects/includes/reposition-treeselect-values.include.rst

   .. figure:: /images/system/objects/settings_treeselect.png
      :alt: Available settings for Tree Select fields

Multiple tree selection field
   Provides a multi-select field with up to 6 layers of options. To restrict
   the selection of a value, uncheck the box in the "Active" column.
   This type does not allow setting a default value.

   .. include:: /system/objects/includes/reposition-treeselect-values.include.rst

   .. figure:: /images/system/objects/settings_multitreeselect.png
      :alt: Available settings for Tree Select fields

External Data Source field
   Provides a searchable field which fetches data from an external system. This
   can be useful if you have data outside of Zammad and don't want to maintain
   both data sources.

   The feature works as follows:

   * Zammad sends a query with a search string (free text from agent or based
     on a variable) in a pre-defined format ("Search URL") to an external
     system.
   * This external system searches for matches and provides a response as a
     JSON structure to Zammad.
   * Zammad just looks for the defined list and value keys, reads the content
     and displays the value to the user. There is no search on Zammad side.

   .. warning::
      * The usage of a PostgreSQL database for Zammad is required. In any other
        case, Zammad will hide the external data source type and you are not
        able to use it. If you want to use this feature, consider to
        :docs:`migrate your database </appendix/migrate-to-postgresql.html>`.
      * Currently, only ``GET`` is supported as request method.
      * The data structure must be in JSON format and provide the objects in an
        array.
      * The endpoint for the external data source has to support search. On
        Zammad side, there is no search/logic implemented; however, you can
        define the output key and value based on the result(s) from the response
        (which provides already filtered content based on the search).
      * If you receive more results as expected, your external data source
        search may not work properly or the structure of the URL is not correct.
        You should get in touch with a responsible person from the external
        system.

   Please have a look
   :doc:`at our example </system/objects/external-data-source-example>`, where
   you can find a possible configuration for a public dummy endpoint.

   .. figure:: /images/system/objects/settings-eds.png
      :alt: Available settings for external data source fields
      :align: center
      :scale: 70 %

   Search URL
      Set your endpoint where Zammad fetches the data. Please make
      sure to include a valid search :doc:`variable </misc/variables>` as an
      URL parameter. Example for a free text search at user input:
      ``#{search.term}``

      If in doubt, ask the responsible person for the external data source how
      they expect the structure of the URL.

      .. note::
         Depending on your search variable, the preview might work or not. The
         reason is that the context might not be available and it is no bug.

         Please also make sure to use a variable which is available in your
         object context. For example you won't be able to search for a ticket
         in a user object context.


   SSL Verification
      Here you can switch the SSL verification to no.

      .. include:: /includes/ssl-verification-warning.rst

      If your external data source system is using self signed certificates,
      please have a look :doc:`here </settings/security/ssl-certificates>` for
      further information about how to handle them in Zammad, so you can
      keep the SSL verification activated.

   HTTP Authentication
      If your external data source requires an authentication, you can set it
      here. You can leave it empty or choose between *Basic Authentication* or
      *Authentication Token* (selecting one of the two methods leads to
      additional fields where you can enter your credentials/token).

   Search result list key
      Defines the level in the JSON structure which provides the list with
      search results. You can leave it empty, if the data is already
      provided as an array. If you have to go deeper in the
      structure, you can provide a path with ``.`` as separators, e.g.
      ``key.subkey.sub-sub-key``.

   Search result value key
      Defines the attribute in the structure in which your external data
      source provides the *value* for your data. An example would be a product
      *number*. If you have to go deeper in the structure, you can provide a
      path with ``.`` as separators, e.g. ``key.subkey.sub-sub-key``.

   Search result label key
      Defines the attribute in the structure in which your external data
      source provides the *label* for your data. An example would be a product
      *name*. If you have to go deeper in the structure, you can provide a path
      with ``.`` as separators, e.g. ``key.subkey.sub-sub-key``.

   Preview
      In the preview area, you can find the following items (depending on your
      configuration above):

      - **Error/hint message** (only if configuration is not complete): Zammad
        tells you, if there is a problem and what you should change in your
        configuration.
      - **Search field**: search for an existing attribute in the data source to
        get a preview. This is required for the fields below to show up.
      - **Search result response** (only if configuration is not complete): here
        you can find a syntax highlighted JSON preview of the response, based
        on the search term you entered.
      - **Search result list** (only if *search result list key* is properly
        set): output of the structure under the configured *search result list
        key*.
      - **Preview table** (when fully configured): Zammad shows you a table
        which includes the found items based on the search string (value, label
        and optional link). You can use this preview if you don't have the
        complete data structure of the external system in mind.

   An example of a configured external data source field from agent perspective:

   .. figure:: /images/system/objects/eds-usage-ticket.gif
      :alt: Screencast showing the search for a product in a ticket

.. _link-templates:

URL fields (Link-Template)
--------------------------

.. note::

   This function is restricted to Text, Select and External data source types
   only.

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

As an example, let's say you have an attribute called ``amazing_attribute`` and
you want to open a google search directly with the input from that field.

Providing the link-template field below allows you to do so:
``https://www.google.com/search?q=#{ticket.amazing_attribute}``

   .. tip::

      You can use any :doc:`Zammad variable </misc/variables>` as long as
      it's available in the moment you need it.

As a result, you are redirected to Google with a search for the value of the
attribute, if you click on the button in the ticket (as you can see in the
screencast above).
