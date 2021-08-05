Email Header Auto Response
==========================

Normally the auto response email headers ``x-zammad-is-auto-response`` and ``x-zammad-send-auto-response`` will
be set with auto response check.
The standard email headers (e.g. ``precedence`` or ``x-auto-response-suppress``) for
this situtation will be used inside the check.

But it's also possible to add the both email headers ``x-zammad-is-auto-response`` and ``x-zammad-send-auto-response``
manually inside the email header. If the header already exists in the incoming email, the value will be used and the
check will be ignored.

Examples
--------

``x-zammad-send-auto-response: true``

``x-zammad-is-auto-response: true``

or

``x-zammad-send-auto-response: false``

``x-zammad-is-auto-response: false``
