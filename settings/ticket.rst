Ticket
======

Here you can adjust general ticket settings. Additional ones for the ticket
composer interface can be found in the :doc:`/misc/composer`.

Base
----

Ticket Hook (default: ``Ticket#``)
   The identifier for a ticket; *e.g.,* Ticket#, Call#, MyTicket#.

Ticket Hook Position (default: ``right``)
   With this setting you can decide (if) where to insert the ticket number.

   *Right*
      This setting will add the ticket reference on the right site of the
      subject.

      Example: ``Some Subject [Ticket#12345]``

   *Left*
      This setting will add the ticket reference on the left site of the
      subject.

      Example: ``[Ticket#12345] Some Subject``

   *None*
      This will completely remove ticket references from the subject.

   .. warning::

      Please ensure to take a look at :doc:`/channels/email/settings` within the
      email channel to ensure you have at least one reference that helps Zammad
      to assign follow-ups correctly.

      Disabling this and not setting up any further follow up search will lead
      to unexpected results!

Ticket Last Contact Behaviour (default: ``Use the start time of the last customer thread (which may consist of multiple articles).``)
   This setting changes the way Zammad updates the ``Last Contact`` value of a
   ticket. This is fairly important for overviews and what you expect upon
   ticket updates of a customer.

   Use the start time of the last customer thread (which may consist of multiple articles).
      If this option is chosen, Zammad will update the last updated value just
      once if a customer replies. After that, Zammad will wait for an agent to
      react.

      This comes in handy if you want to work tickets in the order of their
      first update. This will not change ticket orders if customers decide to
      "bump" the ticket affected.

   Use the time of the very last customer article.
      When setting this option, Zammad will always update the last updated
      value. This means that if ordering by ``Last Update``, ticket orders will
      change if customers "bump" the ticket.

   .. list-table::

      * - .. image:: /images/settings/Zammad_Helpdesk_-_Open.jpg
        - .. image:: /images/settings/Trigger-last-contact.jpg

      * - Last contact value used on :doc:`/manage/overviews`
        - Last contact value used on :doc:`/manage/trigger`

Ticket Organization Reassignment (default: ``Update the most recent tickets.``)
   This setting changes the way Zammad updates the organization field of the
   tickets whenever the primary organization of a user is changed.

   Update the most recent tickets.
      If this option is chosen, Zammad will update the 100 most recent tickets
      where the user is the ticket customer. The ticket organization field will
      be automatically set to the new primary organization of the user.

   Do not update any tickets.
      When choosing this option, Zammad will not update any tickets when the
      user's primary organization is changed.

      .. warning:: **Use with care!**

         Using this option may lead to inconsistencies in the system as the
         ticket organization may become decoupled from the ticket customer.

         However, you may use this option if you wish to maintain
         :ref:`the shared access <organization-details-reference>` to the ticket
         for all organization members of the original organization of the
         customer.

Number
------

Ticket Number Format (default: ``Increment (SystemID.Counter)``)
   This setting defines the way Zammad's ticket number will look.
   Changing this setting in production will cause follow up detection to fail.

   Increment (SystemID.Counter)
      The increment value contains the SystemID (automatically generated during
      installation) and a increment which counts up with every new Ticket.
      The increment will automatically get another digit if needed.

      Examples: ``1010138``, ``1010139``

   Date (Year.Month.Day.SystemID.Counter)
      This version of the ticket number is fairly long. However, because it
      contains the date of ticket creation, it also allows you to see when the
      ticket has been created. You may feel familiar with this number format if
      you've worked with OTRS already.

      Examples: ``201206231010138``, ``201206231010139``

OPTIONS
   The below options allow you to further customize your ticket number.
   The availability of options differ depending of the chosen ticket number
   format above.

   Checksum (default: ``no``)
      If set to yes, we'll built a checksum to further "unique" the ticket
      number of your system. If you're dealing with many other ticket systems
      this might help to prevent false positive follow up detection on tickets.

      This will also add another digit to the ticket number.

   Min. size of Number (default: ``5``)
      This setting defines the minimum length of your ticket number. If your
      counter is not yet high enough, Zammad will fill the number with zeros
      to ensure the wanted length.

      Please note that the minimum length is ``3`` (SystemID + at least one
      digit if below 10). Also, if the length is no longer long enough, the
      number will automatically get one digit longer. Ticket-Numbers
      **do not overflow**, thus it's save to keep it at 5 or set it lower if
      wanted.

      This option is only available if ticket number format is set to
      ``Increment``!


.. _auto_assignment:

Auto-Assignment
---------------

In a larger Zammad environment, it happens that several agents open the same
ticket at the same time. Although collision detection is then effective, the
efficiency of processing can be increased by means of the automatic assignment
of tickets when a ticket is opened.

The automatic assignment of tickets can be activated and configured in the admin
area under Settings > Ticket > Auto Assignment.

The auto assignment only works if the ticket has no owner yet. By
default, the agent can always reset the ticket owner to ``-`` if needed.

If you want to use this function for only specific tickets, you can configure
the conditions accordingly to meet your requirement.
By default the condition affects all tickets with the state ``open``.

   .. include:: /misc/object-conditions/conditioning-depth-hint.include.rst

If you need to exclude users (e.g. a group leader), you can search and select
the desired agents in the ``Exception Users`` list. The search function in this
area is only effective, if you have too many agents to display at once to help
you with the configuration.

Notifications
-------------

Default Notifications
   This setting allows you to configure the default ticket notifications that
   will be applied to all new agent users (incl. users who were just assigned
   agent role). Simply change the notification matrix to desired state and press
   **Save**.

   In case an agent already exists, their ticket notification preferences will
   be preserved. Optionally, you can also **Apply current defaults to all
   agents**.

   .. warning::

      * **Potential time-consuming action:**
        Applying default ticket notifications to all agent users may take some
        time to complete, be patient! The exact time will depend on the size of
        your system and the number of agents.
      * **Active agents only!**
        When current default ticket notifications are applied, only active agent
        users are considered. In case an agent is re-activated *after* this
        action, they will still have the old notification configuration.

   In case you want to go back to the initial state of ticket notifications, you
   can click on **Reset to default** button.

.. _duplicate_detection:

Duplicate Detection
-------------------

Detect Duplicate Ticket Creation
   This setting turns on the duplicate ticket detection mechanism during ticket
   creation. If similar tickets are found in the system, a suitable warning will
   be shown to the user trying to create a ticket.

   .. figure:: /images/settings/ticket/ticket-duplicate-detection-warning.png
      :align: center

      A Sample Duplicate Ticket Warning

   You can choose which ticket attributes will be matched by selecting them in
   **Attributes to compare** field. Only if the ticket attribute value provided
   by the user in the ticket create form is *equal* with the attribute in an
   existing ticket, the warning will be shown.

   **Warning title** and **Warning message** are configurable as well.

   You can limit the detection only to certain user roles. By default, only
   agents will see the warning.

   If you don't want to show the matched tickets as part of the warning, you can
   set **Show matching ticket(s) in the warning** setting to *no*.

   By default, **Permission level for looking up ticket** is set to *User*,
   which  means user permissions will be honored during sarch. The user will see
   the warning only if tickets they have access to are matched. Alternatively,
   you can set this setting to *System*, in which case the search will happen
   within *all* tickets in the system, regardless of user permissions.

   .. warning:: **🦺 Safety first!**

      Even if the permission level is set to *System*, the user will not be
      shown the tickets they don't have access to in the warning, even if they
      match.

      However, just the confirmation about the existence of the tickets in the
      system may be considered an unwanted information disclosure. Use this
      option carefully!

   Finally, you can configure between matching within **All tickets** or **Open
   tickets** only by setting **Match tickets in following states**. Depending on
   the current ticket state, a ticket may or not be matched.
