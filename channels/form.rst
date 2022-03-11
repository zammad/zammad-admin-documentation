Forms
*****

.. hint::

   At the moment it is not possible to add more (or custom) fields to a
   Zammad Form.

.. note:: The form is currently limited to one form per instance.

Feedback or contact forms are quite often used on websites.
Usually they will generate an email which will be sent to somebody who forwards
it and so on. With Zammad it’s quite easy to integrate these forms into your
website and directly generate tickets with them. In just 2 minutes.

Go to "Admin -> Channels -> Form" and enable the switch for this feature.
Below you can adapt your form settings.

.. figure:: /images/channels/form/form-channel-management.png
   :alt: adapt your form settings

In preview mode you can test if the form fits your needs
(e. g. if it opens as modal dialog or if it's shown inline on the website).

.. figure:: /images/channels/form/form-channel-preview-your-configuration.png
   :alt: test it in preview mode

Just copy the JavaScript snippet and paste it into your website.
That's all. Just 2 minutes.

.. figure:: /images/channels/form/form-channel-requirements.png
   :alt: copy the JavaScript snippet and paste it into your website - done

Finally, the forms can look as follows:

.. figure:: /images/channels/form/form-channel-live-result-without-button.png
   :alt: example form as modal dialog

**Requirements**

Zammad form requires jQuery.
If you don't already use it on your website include it like this:

``<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>``

Potential Spam-Issue
--------------------

The Form function could be abused by sending a higher amount of
messages / tickets to your Zammad instance. If you do not use Zammad-Forms:
**disable** them.

But don't worry! Zammad does limit the maximum created tickets based on
different criteria. It also ensure that the email address being used is valid
(with MX-Check on the email’s domain).

.. list-table:: Form settings to limit Ticket-Creation
   :header-rows: 1
   :widths: 20, 10, 20

   * - Option
     - Default value
     - Description
   * - ``form_ticket_create_by_ip_per_hour``
     - ``20``
     - Limits Ticket-creation per IP and hour to 20 Tickets
   * - ``form_ticket_create_by_ip_per_day``
     - ``240``
     - Limits Ticket-creation per IP and day to 240 Tickets
   * - ``form_ticket_create_per_day``
     - ``5000``
     - Limits Ticket-creation for forms to 5000 Tickets per day


.. hint::

   | You can change the above default values, please keep in mind, that setting
     those values higher might lead to problems in term of created Tickets.
   | 
   | Please note that the following changes require console access to your hosts
     that runs Zammad.

**Change the Ticket-Creation per IP and hour to 10**::

   rails> Setting.set('form_ticket_create_by_ip_per_hour','10')

**Change the Ticket-Creation per IP and hour to 50**::

   rails> Setting.set('form_ticket_create_by_ip_per_day','50')

**Change the Ticket-Creation per day to 500**::

   rails> Setting.set('form_ticket_create_per_day','500')


Further options to make it harder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Another way to make it harder for bots to automate against your Zammad instance
is to change the location of ``form.js``
( ``/opt/zammad/assets/form/form.js`` ).

Please keep in mind if you change the location of ``form.js`` (by e.g. copying)
that you need to ensure that your ``form.js`` stays up to date if you update
Zammad.

Further more it's not recommended to delete form.js from it's location, but to
forbid the access to it with your web server configuration (if wanted).
