Ticket
******

.. note:: Additional settings for the ticket composer interface can be found in the :doc:`/misc/composer`.

Base
----

Ticket Hook (default: ``Ticket#``)
   The identifier for a ticket; *e.g.,* Ticket#, Call#, MyTicket#.

Ticket Hook Position (default: ``right``)
   With this setting you can decide (if) where to insert the ticket number.

   *Right*
      This setting will add the ticket reference on the right site of the subject.

      Example: ``Some Subject [Ticket#12345]``
   *Left*
      This setting will add the ticket reference on the left site of the subject.

      Example: ``[Ticket#12345] Some Subject``
   *None*
      This will completely remove ticket references from the subject.

   .. warning:: Please ensure to take a look at :doc:`/channels/email/settings` within the email channel to ensure you have at least one reference that helps Zammad to assign follow-ups correctly.

      Disabling this and not setting up any further follow up search will lead to unexpected results!

Ticket Last Contact Behaviour (default: ``Last customer contact (with consideration an agent has replied to it)``)
   This setting changes the way Zammad updates the ``Last Contact`` value of a ticket.
   This is fairly important for overviews and what you expect upon ticket updates of a customer.

   Last customer contact (with consideration an agent has replied to it)
      If this option is chosen, Zammad will update the last updated value just once if a customer replies.
      After that, Zammad will wait for an agent to react.

      This comes in handy if you want to work tickets in the order of their first update. This will not change ticket orders if customers decide to "bumb" the ticket affected.
   Last customer contact (without consideration an agent has replied to it)
      When setting this option, Zammad will always update the last updated value.
      This means that if ordering by ``Last Update``, ticket orders will change if customers "bump" the ticket.

   .. list-table::

      * - .. image:: /images/settings/Zammad_Helpdesk_-_Open.jpg
        - .. image:: /images/settings/Trigger-last-contact.jpg

      * - Last contact value used on :doc:`/manage/overviews`
        - Last contact value used on :doc:`/manage/trigger`


Number
------

Ticket Number Format (default: ``Increment (SystemID.Counter)``)
   This setting defines the way Zammads ticket number will look.
   Changing this setting in production will cause follow up detection to fail.

   Increment (SystemID.Counter)
      The increment value contains the SystemID (automatically generated during installation) and a increment which counts up with every new Ticket. The increment will automatically get another digit if needed.

      Examples: ``1010138``, ``1010139``
   Date (Year.Month.Day.SystemID.Counter)
      This version of the ticket number is fairly long. However, because it contains the date of ticket creation, it also allows you to see when the ticket has been created. You may feel familiar with this number format if you've worked with OTRS already.

      Examples: ``201206231010138``, ``201206231010139``

OPTIONS
   The below options allow you to further customize your ticket number. The availability of options differ depending of the chosen ticket number format above.

   Checksum (default: ``no``)
      If set to yes, we'll built a checksum to further "unique" the ticket number of your system. If you're dealing with many other ticket systems this might help to prevent false positive follow up detections on tickets.

      This will also add another digit to the ticket number.
   Min. size of Number (default: ``5``)
      This setting defines the minimum length of your ticket number. If your counter is not yet high enough, Zammad will fill the number with zeros to ensure the wanted length.

      Please note that the minimum length is ``3`` (SystemID + at least one digit if below 10). Also, if the length is no longer long enough, the number will automatically get one digit longer. Ticket-Numbers **do not overflow**, thus it's save to keep it at 5 or set it lower if wanted.

      .. note:: This option is only available if ticket number format is set to ``Increment``!


Auto-Assignment
---------------

In a larger Zammad environment, it happens that several agents open the same ticket at the same time. Although collision detection is then effective, the efficiency of processing can be increased by means of the automatic assignment of tickets when a ticket is opened.

   .. note:: Auto Assignment only kicks in if the ticket has no owner yet. By default the agent can always reset the ticket owner to ``-`` if needed.

The automatic assignment of tickets can be activated and configured in the admin area under within Settings -> Ticket -> Auto assignment.

If you want to use this function for only specific tickets, you can configure the conditions accordingly to meet your requirenment.
By default the condition affects all tickets with the state ``open``.

If you need to exclude users (e.g. a group leader), you can search and select the desired agents in the ``Exception Users`` list.

   .. note:: The search function in this area is only affective, if you have too many agents to display at once to help you with the configuration.
