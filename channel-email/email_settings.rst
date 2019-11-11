.. _email_settings:

Settings
********

Below you can find the currently available Email related settings. Most of these settings have default values which can be found in this list as well.

.. Note:: Some E-Mail related settings are ticket based settings, which is why they can be found on :ref:`settings_in_tickets`.

List of Settings
----------------

Notification Sender: Default value ``Notification Master <noreply@#{config.fqdn}>``
    This is the default sender address for Zammad that affects all mails but those generated because of replies (like triggers or agent based mails).
    Your customers normally will not see this address. This E-Mail-Address does not need to receive and can't bne assigned to a group.

    .. Note:: This address is relevant for agent notifications and password reset mails (also affects customers).
Additional follow-up detection
    In some situations the normal follow-up detection is not enough. This might be due to missing references in the subject (the ticket hook and number).
    These options can help to recognize follow-ups to existing tickets.

    .. Note:: Please note that searching in attachment and body might lead to false follow-up detections.
Maximum Email Size: Default value ``10 MB``
    This one is pretty obvious: It defines the maximum allowed size of a Email Zammad will fetch. 
    Zammad will not fetch Mails that are bigger than this option.

    .. Note:: Starting with Zammad 3.2 Zammad can provide postmaster mails (see "Send postmaster mail if mail too large" below).

    .. Hint:: This technically also affects attachments for articles.
Send postmaster mail if mail too large: Default value ``yes (enabled) `` on fresh installations and ``no (disabled)`` on upgrade installations
    .. Note:: This option is only available with Zammad 3.2 and later. Upgraded installations will, by default, have the value set to ``no (disabled``).

    Option set to yes
        This setting will cause Zammad to automatically reply to mails that exceed the above mail size limit with a postmaster style mail. 
        This will help your user to understand that his mail did not arrive and won't be reviewed by you.

        .. Note:: Zammad will still download and remove (if enabled) the mail from the mailbox. Instead of importing it to the database, it will save the affected mail to ``/opt/zammad/tmp/oversized_mail/``.
    Option set to no
        If the option is set to no, Zammad will not reply to mails that are too big. Your customer will **not notice** that the mail was too large! 
        Instead, Zammad will use the monitoring endpoint to alert its administrators that it can't fetch a too large mail.

        Learn more about :ref:`system_monitoring`.
Sender based on Reply-To header: Default ``not set (-)``
    x

Enhanced settings
----------------------

