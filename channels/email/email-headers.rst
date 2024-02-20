Header Based Actions
********************
.. header manipulation

With specific email headers, you can make Zammad performing different actions
depending on the content of the headers. So, if you create a new email (e.g.
from a form on your website) you can set these headers to perform actions
or to hand over special information like custom attributes.

.. danger:: **🛡 Trusted channels required 🛡**

   Below options are a potential risk with external communication and
   thus require channels being set to trusted explicitly. You can find
   instructions about how to set a channel to trusted at the end of this page.

.. tip::

   - Below headers are examples and in our opinion the most relevant ones.
     However, you can adjust mostly all article or ticket attributes including
     custom ones if you know the attribute's exact name. Have a look
     :doc:`here </system/objects>` to find the attribute names.
   - Header checks are case insensitive. However, values are case sensitive!

Auto responses
--------------

Normally, Zammad runs internal checks to see if an incoming email is an
automatic response. In such cases Zammad will not send trigger based responses.
You can override this with below headers:

``x-zammad-send-auto-response``
   Set to ``false`` to disable trigger based responses.
   If set to ``true`` Zammad will send a response.

   This option *does not* work if e.g. ``precedence: list`` is set
   unless you use below auto response header as well.

``x-zammad-is-auto-response``
   Providing this header allows you to tell Zammad that the mail in question
   is an auto generated response (``true``). This will cause email based
   triggers to be skipped.

   Set this header to ``false`` if you want to generate auto responses.

   This header allows you to overwrite auto detects for e.g.
   ``precedence: list``.

Ticket attributes
-----------------

Zammad allows you to use headers to manipulate ticket creations or follow ups.
The manipulation can be used instead of triggers. Triggers are considered
*after* header settings and thus can still override headers.

To differentiate between ticket creation and follow:

   * For creations use: ``X-Zammad-Ticket-{Attribute Name}``
   * For follow ups use: ``X-Zammad-Ticket-FollowUp-{Attribute Name}``

This allows you to ensure the changes are only applied in the
required situation.

.. tip::

   When using attributes that require date / time values, ensure to use
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


   | Pending states always require the ``pending_time`` attribute on top.
   | Example: ``X-Zammad-Ticket-Pending_Time: 2021-09-26T08:00:00+0200``

``X-Zammad-Customer-Email``
   | Manipulate the ticket customer - this can be a different user than the
     actual sender. Replying to the original sender is still possible.
   | Example: ``X-Zammad-Customer-Email: jdoe@example.com``

   This header is not available for follow ups.

``X-Zammad-Customer-Login``
   | Manipulate the ticket customer - this can be a different user than the
     actual sender. Replying to the original sender is still possible.
   | Example: ``X-Zammad-Customer-Login: jdoe``

   This header is not available for follow ups.

Article attributes
------------------

If needed Zammad allows you to manipulate attributes or states of fetched
email articles.

``X-Zammad-Article-Sender``
   | Manipulate the sender type (agent, customer or system)
   | Example: ``X-Zammad-Article-Sender: System``

   System Emails are indicated in a similar way as trigger-responses.
   Users can't see them natively and see only a indicator like that:

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
