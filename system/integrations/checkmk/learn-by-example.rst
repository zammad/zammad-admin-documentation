Learn by example
================

.. Note:: 🤓 **About this page**
   
   The attributes usually have two possible ways to adjust values. 
   We provide generic examples on how you could use these attributes via curl.

   All information that can be set by you are written in ``{}`` - you can freely set them, as long 
   as they're technically possible in the application scope. 🙌

   .. hint:: The following examples only refer to existing ticket attributes in default installations. 
      If you created a :doc:`custom ticket object </system/objects>`, you can reference it by its name.
   
      .. figure:: /images/system/integrations/checkmk/finding-object-names.png
         :alt: The object manager provides available object names
         :align: center
         :width: 80%

.. warning:: ⚠ Assigning values that are not available can cause Zammad to still create the ticket with default 
   values. In some cases however this will lead to an error and the ticket not being created!

Priority
   Change the priority of the ticket to a priority other than the default priority of Zammad.

      * Named way  ``priority=1 low``
      * Reference way ``priority_id=1``

   .. code-block:: sh

      # Set a different Priority than the default priority of Zammad either by it's name or ID
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "priority_id={priority-name}" {your-checkmk-callback-url}
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "priority_id={priority-id}" {your-checkmk-callback-url}

Group
   The default group of your Checkmk integratrion sometimes isn't the right one? No problem!

      * Named way ``group=Service Desk``
      * Reference way ``group_id=3``
   
   .. code-block:: sh

      # Set a different group other than configured in Checkmk - either by it's name or ID
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "group={group-name}" {your-checkmk-callback-url}
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "group_id={group-id}" {your-checkmk-callback-url}

Owner
   If you have a responsible person for a specific host or customer, you can assign the ticket to a specific agent if needed. 
   This works for either the agents mail address or user id.

      * Named way ``owner=agent@example.net``
      * Reference way ``owner_id=3``
   
   .. code-block:: sh

      # Set a owner right on creation - either by it's name or ID
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "owner={agents-email-address}" {your-checkmk-callback-url}
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "owner_id={agents-user-id}" {your-checkmk-callback-url}

State
   You can set a specific state id to create the ticket with another state than it usually would (new).
   
      * Reference way ``state_id=2``
   
   .. code-block:: sh

      # Set a specific state other than the Zammad default
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "state_id={id-of-state}" {your-checkmk-callback-url}

Note
   You can set a ticket note which is only available via API or rails console.

   .. code-block:: sh

      # Set a specific state other than the Zammad default
      $ curl -X POST -F "event_id={eventid}" -F "host={host}" -F "service={service}" -F "state={state}" -F "text={text}" -F "note={note-text}" {your-checkmk-callback-url}

.. note:: There are some attributes that are set by Zammad as system and can't be manipulated. 
   The following attributes are known to be such attributes. 

      * title
      * id
      * ticket number
      * customer / customer_id
      * created_by_id
      * updated_by_id