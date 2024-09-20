Google
======

.. toctree::
   :hidden:

   basic-setup
   filters
   signatures
   settings
   email-headers

Connect a Gmail or G Suite account to Zammad.

.. figure:: /images/channels/google/panel.png
   :alt: Google channel settings panel
   :align: center

.. note:: Google channels are a specialized kind of
   :doc:`📨 email channel </channels/email/index>`.

   If you're already familiar with email channels,
   you can skip most of this. However, you should have a look at the
   :doc:`./basic-setup` to get started.

:doc:`basic-setup`
   Connect Zammad to Google and add an account to fetch emails from.

   Self-hosted users may have already completed this step during new
   system setup.

:doc:`Filters <filters>`
   Make sure new tickets show up in the right place
   with automated, if-this-then-that rules for all incoming email.

:doc:`Signatures <signatures>`
   Customize signatures for all outgoing emails.

:doc:`Settings <settings>`
   Manage options like:

   * set the “From:” address on system notifications
   * raise the limit on attachment sizes
   * modify subject-line prefixes (*e.g.,* use “AW:” instead of “RE:”)

:doc:`Header based actions <email-headers>`
   Manipulate auto response behavior or incoming routing.

   .. warning:: 🤓 This is a very advanced topic.
