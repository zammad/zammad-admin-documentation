Email header manipulation
*************************

Email header manipulation allows you to re-route or adjust tickets apart from
filters or triggers. Like an API call, but with emails.

Header checks are case insensitive.

.. danger:: **🛡 Trusted channels required 🛡**

   Below options are a potential risk with external communication and
   thus require channels being set to trusted explicitly. You can find
   instructions about how to set a channel to trusted at the end of this page.

.. tip::

   Below headers are examples and –in our opinion– the most relevant ones.
   However: You can adjust mostly any article or ticket attribute (yes, custom
   ones as well) if you know the attribute's exact name.

   The name column within :doc:`object's management </system/objects>` provides
   easy access to objects attribute names. 🤓

Trigger auto responses
----------------------

Normally Zammad runs internal checks to see if an email is an automatic
response. In these cases Zammad will not send trigger based responses.

There may be use cases where this behavior may be in your way,
below options allow you to overcome this issue.

   .. note::

      In some cases combining below headers is crucial.
      This is intentional but may be confusing.

``x-zammad-send-auto-response``
   Set to ``false`` to disable trigger based responses.
   If set to ``true`` Zammad will send a response.

      .. hint::

         This option *does not* work if e.g. ``precedence: list`` is set
         unless you use below auto response header as well.

``x-zammad-is-auto-response``
   Providing this header allows you to tell Zammad that the mail in question
   is an auto generated response (``true``). This will cause email based
   triggers to be skipped.

   Set this header to ``false`` if you want to generate auto responses.

      .. tip::

         This header allows you to overwrite auto detects for e.g.
         ``precedence: list``.

Ticket attributes
-----------------

Zammad allows you to use headers to manipulate ticket creations or follow ups.
The manipulation can be used instead of triggers. Triggers are considered
*after* header settings and thus can still overrule.

   .. note:: **🔎 Zammad differentiates between ticket creation and follow up**

      | For creations use: ``X-Zammad-Ticket-{Attribute Name}``
      | For follow ups use: ``X-Zammad-Ticket-FollowUp-{Attribute Name}``

      This allows you to ensure the changes are only applied in the
      required situation.

   .. warning:: **🧐 About values**

      * While headers are not case sensitive, values like e.g. priority names
        are case censitive: ``1 low`` will work, but ``1 lOw`` will not!
      * When using attributes that require date / time values, ensure to use
        Time Zoned Times. e.g. for 28th September 2021 on 8 am CEST, either use:

            * ``2021-09-28T08:00:00+0200``
            * ``2021-09-28T08:00:00+02:00``
            * ``2021-09-28T06:00:00.000Z``

``X-Zammad-Ticket-Priority`` & ``X-Zammad-Ticket-FollowUp-Priority``
   | Allows you to adjust a ticket's priority.
   | Example: ``X-Zammad-Ticket-Priority: 1 low``

``X-Zammad-Ticket-Group`` & ``X-Zammad-Ticket-FollowUp-Group``
   | Allows you interfere with regular channel routing of the ticket.
   | Example: ``X-Zammad-Ticket-Group: Sales``

``X-Zammad-Ticket-Owner`` & ``X-Zammad-Ticket-FollowUp-Owner``
   | Directly assign or change the ticket owner. Valid values are either
     ``login`` or ``Email``
   | Example: ``X-Zammad-Ticket-Owner: jdoe``

``X-Zammad-Ticket-State`` & ``X-Zammad-Ticket-FollowUp-State``
   | Set a specific ticket state.
   | Example: ``X-Zammad-Ticket-State: closed``

      .. note::

         | Pending states always require the ``pending_time`` attribute on top. 
         | Like so: 
           ``X-Zammad-Ticket-Pending_Time: 2021-09-26T08:00:00+0200``

``X-Zammad-Customer-Email``
   | Manipulate the ticket customer - this can be a different user than the
     actual sender. Replying to the original sender is still possible.
   | Example: ``X-Zammad-Customer-Email: jdoe@example.com``

      .. note::

         This header is not available for follow ups.

``X-Zammad-Customer-Login``
   | Manipulate the ticket customer - this can be a different user than the
     actual sender. Replying to the original sender is still possible.
   | Example: ``X-Zammad-Customer-Login: jdoe``

      .. note::

         This header is not available for follow ups.

Article attributes
------------------

If needed Zammad allows you to manipulate attributes or states of fetched
email articles.

``X-Zammad-Article-Sender``
   | Manipulate the sender type (Agent, Customer, or System)
   | Example: ``X-Zammad-Article-Sender: System``

      .. warning::

         System Emails are indicated in a similar way as trigger-response
         like entries Users can't see them natively.

         .. figure:: /images/channels/email/headers/email-header-as-system.png
            :alt: Received mail as article sender system
            :width: 75%

``X-Zammad-Article-Type``
   | Change the article type of your incoming mail. This requires you to know
     which article types are available in your system.
   | Example: ``X-Zammad-Article-Type: phone``

      .. warning::

         This header can cause *serious issues* in your instance and may
         lead to unexpected behavior. Only use with absolute care!

``X-Zammad-Article-Internal``
   | Manipulate the default article visibility.
   | Example: ``X-Zammad-Article-Internal: true``

``X-Zammad-Ignore``
   | Tell Zammad to silently drop the Email.
   | Example: ``X-Zammad-Ignore: true``

Trusted Channel
---------------
.. note:: **🚧 Self Hosted only 🚧**

   Below settings are only available to self hosted users.

.. danger::
   ⚠️ As stated above, this is dangerous and can lead to unexpected behavior in
   the communication with external parties. Only follow the instructions below,
   if you know what you are doing.

Setting a channel to ``trusted`` can ony be done via
:docs:`console </admin/console.html>`. In the rails console, execute the
following commands:

| List all channels in Zammad:

.. code-block:: ruby

   >> Channel.all

Look for the ``id`` of the channel, you want to set to ``trusted``.

Select your identified channel (replace the 99 with the correct id):

.. code-block:: ruby

   >> channel = Channel.find(99)

Show the currently activated options of the selected channel:

.. code-block:: ruby

   >> options = channel[:options]

Add the ``"trusted"=>true`` flag for the inbound part of the channel:

.. code-block:: ruby

   >> options[:inbound][:trusted] = true

Save your changes:

.. code-block:: ruby

   >> channel.save!
