Chat
====

Introduction
------------

The chat feature in Zammad allows visitors of your website to initiate chats
with agents. You can find the settings in the admin panel under "Channels".

The feature is built to assist for proper customer support. And this is how it
works:

- The chat widget will only be displayed to customers, if at least one agent is
  available and has capacity.
- Agents can define how many simultaneous chat sessions they want to accept.
- An agent is set to inactive, if the agent doesn't accept new chat
  requests or is offline. Because of this, your agents can take breaks without
  having your customers to wait.
- You can define different topics for chats and agents can select for which
  topic they want to accept chat sessions.
- No automatic answer is send to the customer.
- Zammad sends an auto response as soon as the agents accepts the chat request.
  This message is configurable by each agent individually.
- Zammad will try to adapt your main website colors to the chat. You can also
  adjust the colors to customize it to your corporate design.

Configuration
-------------

General
^^^^^^^

The area for configuring the chat can be found in the admin panel under
**Channels > Chat**.

You can set up chats for different websites and edit them independently.
Use the "Topics" function if you need a separation or you have specialized
agents for different topics. Your agents can choose then for which topic they
want to accept chats.

.. image:: /images/channels/chat/channel-chat-1.png

The integrated designer helps the chat widget to adapt to the website color.
Zammad tries to fetch your website based on your FQDN. If this fails or you want
to override it, you can enter a URL manually and click on load.
You can get a preview for different devices by selecting the different preview
modes.

If you don't like the proposed design, you can manually adjust it. Adjust the
color and apply a flat design if needed.

.. image:: /images/channels/chat/channel-chat-2.png

Chat Restrictions
^^^^^^^^^^^^^^^^^

You offer a chat for your target group, but you don't want to activate chat for
certain IP addresses or countries? Then you have the possibility to block the
wished IP addresses and countries fast and easily via the chat configuration in
the admin panel. The configuration panel looks like this:

.. image:: /images/channels/chat/channel-chat-3.png

You can also find more information about the chat customization
in the admin area.

Website Implementation
----------------------

Requirements
^^^^^^^^^^^^

Zammad chat comes in two flavors: a version with and without jQuery. You can
choose which one you prefer by toggling the **With jQuery** switch that will
display the appropriate code snippet below.

For jQuery version, if you don't already use it on your website, make sure to
first include it like this:

.. code-block:: html

   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

You have two options to implement the chat on your website:

- Automatically show the chat (that's the default setting)
- or manually open the chat.

Usage
^^^^^

Insert the widget code into the source code of every page on which you want the
chat to be visible on. It should be placed at the end of the page's source code
before the ``</body>`` closing tag.

.. image:: /images/channels/chat/channel-chat-4.png

Result
^^^^^^

The final result will look like the following:

.. image:: /images/channels/chat/channel-chat-5.png


