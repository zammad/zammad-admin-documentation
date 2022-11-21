Forms
*****

Feedback or contact forms are quite often used on websites.
Usually they will generate an email which will be sent to somebody who forwards
it and so on. With Zammad it’s quite easy to integrate these forms into your
website and directly generate tickets with them. In just 2 minutes.

.. figure:: /images/channels/form/form-channel-management.png
   :alt: Zammad form management page

Limitations
-----------

Please note the following limitations:

   * The fields provided by the form are limitted. You cannot add additional
     fields than the following:

     * Name
     * Email
     * Message
     * Attachment upload (optional)
     * Checkbox for custom agreement text (optional)

   * As of now only one dedicated form per instance is possible

Settings
--------

Zammad comes with limited settings for forms.

Active
   By default the form channel is *inactive*.
   Use the switch in front of "Form" to activate this channel.

   .. note::

      Forms will not be displayed on your website if the channel is not active.
      This does not affect the form preview on the channels setting page.

Group selection for ticket creation
   The group you set here defines where tickets should be created if they're
   supplied by Zammads web form.

Designer
--------

This section helps you to configure your form in the channels scope.
If you're happy with what you've chosen you're provided with the code you
need to copy to your website.

   .. warning::

      The designers changes *are not* stored anywhere in Zammad.
      This means that the provided source code needs to be copied every time
      you change settings here.

.. figure:: /images/channels/form/form-channel-designer.png
   :alt: Zammads form designer supports you with the initial configuration
         of your form.
   :width: 90%

So let's talk about the options the designer provides.

:Title of the form:
   Choose how the heading of the form should be called.
   This setting is only relevant if you choose to display the form title in the
   form.

   Default: ``Feedback Form``

:Name of form submit button:
   If Zammads default display name of the submit button does not fit, you can
   provide your own wording with this option. It's being used every time the
   form is being called.

:Message after sending form:
   After your user pressed the submit button, the user will be provided with
   a message containing the ticket number of the just created ticket.
   
   Default *after* sending a form will look like so:

   .. code-block:: text

      Thank you for your inquiry (#31015)!
      We'll contact you as soon as possible.

:Options:
   Zammad provides the following additional configuration options for your form.

   Enable debugging for Implementation
      This option activates detailed debug information in your browsers
      developer tools console.

      .. warning:: This option *should not* be active on productive forms!

   Show title in form
      This setting belongs to the setting ``Title of the form`` and will
      provide the form title within the form dialogue if selected.

   Start modal dialog for form
      If selected the form will be opened in a modal by clicking a button.
      Not selecting this option allows you to natively integrate the form within
      your website's body.

      This option is set by default.

      .. note::

         No matter what you select here, the form *is always* loaded completely
         if your user browses the page the form lies on.

   Don't load CSS for the form You need to generate your own CSS for the form.
      By default Zammads form comes with basic CSS. This may not fit your
      websites design or even interfere with it.

      Selecting this option allows you to freely design the form without having
      to overwrite existing directives.

   Add attachment option to upload
      Allows your user to upload **one attachment** to the form.
      
      .. note:: **🤓 Watch allowed attachment sizes here**

         This function *is not* limited technically. The only limitation that
         applies is your web servers upload limit.

         .. hint:: **SaaS only**

            If you're with Zammad hosted, attachments are limited by the
            package you've chosen.

   Add agreement text before submit
      If enabled will allow you define a text that the form will display
      together with a to tick box. This allows you to make your form conform
      to local laws, e.g. by providing data privacy notes that the user has
      to accept before submitting the form.

      .. figure:: /images/channels/form/form-channel_acceptance-setting.gif
         :alt: Screencast showing a sample on how to configure the agreement
               text setting

         Zammad provides a free text form with limited capabilities.
         Use the *🔗 Weblink* button to add links to marked text passages.

         This allows you to link to your e.g. data privacy or ToS information.

Preview
~~~~~~~

Below the form options, Zammad provides a preview section to visualize the
settings you've just chosen. By default you'll see a button named *Feedback*.

Clicking on the button will open the form modal.

   .. hint::

      If the form channel is set to active, you already are able to create
      tickets even from this preview mode.

.. figure:: /images/channels/form/form-channel-preview-your-configuration.png
   :alt: Screenshot showing the preview section for the just configured form
   :width: 85%

Requirements
------------

The requirement section provides you with everything you need in order to
apply Zammads web form to your website. It basically consists of two parts.

:Header section:
   The first code block provides you with Zammads current jQuery dependency.
   This script section usually belongs to your websites header section.

   .. note::

      The channel form suggests the following script tag which loads the
      javascript libary required **from an external site**. This may not
      suite your local requirements. You can use locally hosted jQuery version,
      **however** the version is fixed.

      ``<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>``

      .. warning::

         Do not mix jQuery versions - it's likely to break something.

:Body section:
   The second code block is the actual code required for your form to run.

   The first line containing ``id="zammad-feedback-form"`` highly depends on
   above selected settings. This part belongs into the place you actually
   want the form or form button to appear.

   The rest can either be placed at the same level or somewhere else on the
   same page.

   .. hint::

      This code block is updated automatically when changing settings in the
      designer above.

   .. note::

      Above statement *highly* depends on your website.
      As you're responsible for your own website, you're on your own
      figuring out where exactly to place what.

Take the Zammad website as an example, the embedded form version can look
like the following if you apply custom CSS to it.

.. figure:: /images/channels/form/form-channel-live-result-without-button.png
   :alt: Screenshot showing the zammad.com website with embedded web form
   :scale: 90%
   :align: center

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Another way to make it harder for bots to automate against your Zammad instance
is to change the location of ``form.js``
( ``/opt/zammad/assets/form/form.js`` ).

Please keep in mind if you change the location of ``form.js`` (by e.g. copying)
that you need to ensure that your ``form.js`` stays up to date if you update
Zammad.

Further more it's not recommended to delete form.js from it's location, but to
forbid the access to it with your web server configuration (if wanted).
