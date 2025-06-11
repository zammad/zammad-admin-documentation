Composer Settings
=================

In the composer settings, you can adjust different settings regarding handling
of text and articles. Open the settings by clicking the cogwheel in the top
right corner of the ticket detail view.

.. note::

   - These settings **apply to all tickets and all users across the
     entire system**.
   - You can only see the icon and adjust the settings if you have admin
     permissions.

.. figure:: /images/misc/composer.png
   :align: center

Note - default visibility
   This setting decides what the default visibility of note articles is.
   This affects **only** notes (default article on ticket answering).
   The visibility of phone- and email article notes is not affected.

   Default: ``internal``

   .. image:: /images/misc/composer_default-visibility.png

Article - visibility confirmation dialog
   This setting allows administrators to enforce a confirmation dialog to
   agents when they're trying to change the article visibility from internal
   to public.

   This setting affects all article types within UI, no matter if the article
   exists already or it's still a writing draft.

   Default: ``no``

   .. image:: /images/misc/article-visibility-confirmation-dialog.png

Email - subject field
   When setting this option to ``yes``, Zammad will also display the subject
   field when answering via email articles. It doesn't matter if you click
   on ``reply`` or switch to email article manually. In this case, the subject
   can differ between title and email.

   If set to ``no``, Zammad will automatically use the tickets title as subject.

   Default: ``no``

Email - full quote
   Setting this option to ``yes`` will always add the content of the answered
   article as quotation below your signature.

   This does not affect the "mark and quote" functionality,
   if you mark a text with this setting enabled,
   we'll use the marked text as quote instead.

   Default: ``no``

Email - quote header
   If you don't want Zammad to add the date, time and name or the article you're
   quoting, set this to ``no``.

   Example: ``On Thursday, June 27, 2019, 3:37:11 PM, Jacob Smith wrote:``

   Default: ``yes``

Twitter - tweet initials
   When set to yes, this will add ``/CM`` (first character of first- and
   last name) to the bottom of every tweet answer you create.
   This only affects tickets that come from the Twitter Channel.

   Default: ``yes``
