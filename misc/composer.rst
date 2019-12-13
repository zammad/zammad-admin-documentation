Composer Settings
*****************

.. figure:: /images/misc/composer.jpg
   :align: center

   Use the Composer Settings to change the behavior of the new message editor.

.. note:: These settings **apply on all tickets and to all users across the entire system**.

Note - default visibility (default: ``internal``)
   This setting decides what the default visbility of note articles is. This affects **only** notes (default article on ticket answering).
   The visibility of phone- and Email article notes is not affected.

   .. image:: /images/misc/composer_default-visibility.jpg

Email - subject field (default: ``no``)
   When setting this option to ``yes``, Zammad will also display the subject field when answering via Email articles.
   It doesn't matter if you click on ``reply`` or switch to Email article manually.

   .. warning:: Please note that if set to ``no``, Zammad will automatically use the tickets title as subject!

      The subject can differ between title and mail subject if choosing ``yes``.

Email - full quote (default: ``no``)
   Setting this option to ``yes`` will always add the content of the answered article as quotation below your signature.

   .. note:: This does not affect the "mark and quote" functionality, if you mark a text with this setting enabled, we'll use the marked text as quote instead.

Email - quote header (default: ``yes``)
   If you don't want Zammad to add the date, time and name or the article you're quoting, set this to ``no``.

   Example: ``On Thursday, June 27, 2019, 3:37:11 PM, Jacob Smith wrote:``

Twitter - tweet initials (default: ``yes``)
   When set to yes, this will add ``/CM`` (first character of first- and lastname) to the bottom of every tweet answer you create.
   This only affects tickets that come from the Twitter Channel.
