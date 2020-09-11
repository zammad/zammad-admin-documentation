Agent permissions
-----------------

Agents are the backbone of every customer support. 
You can provide them with granular permissions on specific communication types.

.. figure:: /images/manage/roles/agents-paradise.png
   :alt: Screenshot showing the most relevant areas for agents: tickets, overviews, chat, knowledge base and caller log.
   :align: center
   :width: 90%

``chat.agent``
   This permission enables the "Customer Chat" link within the UI. 
   For an agent being able to effectively use this function, you'll also have to configure the :doc:`Chat Channel </channels/chat>`.

   You can find more information on the agents options 
   within the `user documentation <https://user-docs.zammad.org/en/latest/extras/chat.html>`_.

   .. figure:: /images/manage/roles/chatting-agent.png
      :alt: Screenshot showing active customer chats within the chat interface.
      :align: center
      :width: 80%

``cti.agent``
   Grants agents to see the global caller log. This enables additional *browser notifications* if enabled by agent.

   You can learn more about agents possibilities on 
   the `user documentation <https://user-docs.zammad.org/en/latest/extras/caller-log.html>`_.

   .. figure:: /images/manage/roles/caller-log.png
      :alt: Screenshot showing the caller log.
      :align: center
      :width: 80%

Knowledge Base permissions
   Either of both below permissions activate the internal :doc:`knowledge base </manage/knowledge-base>` for your agents. 
   Learn more about the possibilities you provide 
   with our `user documentation <https://user-docs.zammad.org/en/latest/extras/knowledge-base.html>`_.

   ``knowledge_base.editor``
      Granting editor permissions allows creation of new answers and categories within the knowledge base. 

   ``knowledge_base.reader``
      Granting reader permissions only allows your agents to view **internal** and **public** answers.

   .. figure:: /images/manage/roles/knowledge-base.png
      :alt: Screenshot showing the knowledge base to an agents with permissions.
      :align: center
      :width: 80%

``report``
   Allow your users to learn more about the teams performance and overall ticket stats. 

      .. hint:: This is rather a key user or supervisor permission.
   
   .. note:: This permission provides meta information of any ticket with fitting conditions. 
      Your user does not require ``ticket.agent`` permissions to see them!

   .. warning:: ⚠ Do not **ever** provide this permission to your customers! 
      Providing reporting access to your customers is a data breach and reveals **all ticket and user information!**

   .. figure:: /images/manage/roles/reporting.png
      :alt: Screenshot showing Zammads ticket reporting functionality.
      :align: center
      :width: 80%

``ticket.agent``
   This permission activates the Overview link which provides access to ticket overviews. 

      .. hint:: This permission is required in **every** role if it provides :doc:`group-permissions`. 
         This also applies to agents that have several of such roles - the permission does not stack!

      .. warning:: ⚠ You can't combine this permission with ``ticket.customer`` in the same role.
         Please provide your agent with the ``Customer`` role additionally if you want to provide them the 
         tickets they're customer in.

   .. figure:: /images/manage/roles/overviews.png
      :alt: Screenshot showing the "Overviews" link and some ticket overviews
      :align: center