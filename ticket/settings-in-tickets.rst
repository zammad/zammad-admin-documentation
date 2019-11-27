.. _settings_in_tickets:

Settings within Tickets
***********************

.. Note:: The following options can only be seen and changed by a user with administrative rights (``permission.admin``).

The below mentioned settings can be set in *any* Ticket. 
Please keep in mind that these are global settings that affect all users. 
These settings *are not ticket specific*.

    .. image:: /images/settings/settings-in-tickets.jpg

Note - default visibility: Default value ``internal``
    This setting decides what the default visbility of note articles is. This affects **only** notes (default article on ticket answering).
    The visibility of phone- and Email article notes is not affected.

    .. image:: /images/settings/settings-in-tickets_default-visibility.jpg
E-Mail - subject field: Default value ``no``
    When setting this option to ``yes``, Zammad will also display the subject field when answering via Email articles. 
    It doesn't matter if you click on ``reply`` or switch to Email article manually.

    .. Warning:: Please note that if set to ``no``, Zammad will automatically use the tickets title as subject! 
      
      The subject can differ between title and mail subject if choosing ``yes``.

Email - full quote: Default value ``no``
    Setting this option to ``yes`` will always add the content of the answered article as quotation below your signature.

    .. Note:: This does not affect the "mark and quote" functionality, if you mark a text with this setting enabled, we'll use the marked text as quote instead.
Email - quote header: Default value ``yes``
    If you don't want Zammad to add the date, time and name or the article you're quoting, set this to ``no``.

    Example: ``On Thursday, June 27, 2019, 3:37:11 PM, Jacob Smith wrote:``
Twitter - tweet initials: Default value ``yes``
    When set to yes, this will add ``/CM`` (first character of first- and lastname) to the bottom of every tweet answer you create. 
    This only affects tickets that come from the Twitter Channel.

