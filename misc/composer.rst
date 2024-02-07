Composer Settings
*****************

.. figure:: /images/misc/composer.png
   :align: center

   Use the Composer Settings to change the behavior of the new message editor.

.. note::

   These settings **apply on all tickets and to all users across the
   entire system**.

Note - default visibility (default: ``internal``)
   This setting decides what the default visbility of note articles is.
   This affects **only** notes (default article on ticket answering).
   The visibility of phone- and email article notes is not affected.

   .. image:: /images/misc/composer_default-visibility.png

Article - visibility confirmation dialog
   This setting allows administrators to enforce a confirmation dialog to
   agents when they're trying to change the article visibility from internal
   to public.

   This setting affects all article types within UI, no matter if the article
   exists already or it's still a writing draft.

   .. image:: /images/misc/article-visibility-confirmation-dialog.png

Email - subject field (default: ``no``)
   When setting this option to ``yes``, Zammad will also display the subject
   field when answering via email articles. It doesn't matter if you click
   on ``reply`` or switch to email article manually. In this case, the subject
   can differ between title and email.

   If set to ``no``, Zammad will automatically use the tickets title as subject.

Email - full quote (default: ``no``)
   Setting this option to ``yes`` will always add the content of the answered
   article as quotation below your signature.

   This does not affect the "mark and quote" functionality,
   if you mark a text with this setting enabled,
   we'll use the marked text as quote instead.

Email - quote header (default: ``yes``)
   If you don't want Zammad to add the date, time and name or the article you're
   quoting, set this to ``no``.

   Example: ``On Thursday, June 27, 2019, 3:37:11 PM, Jacob Smith wrote:``

Twitter - tweet initials (default: ``yes``)
   When set to yes, this will add ``/CM`` (first character of first- and
   last name) to the bottom of every tweet answer you create.
   This only affects tickets that come from the Twitter Channel.
