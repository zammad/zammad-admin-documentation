Telegram
========

It's possible to put your Telegram bot communication into Zammad.
To do so, you need to follow these steps.

.. note::

   - Your Zammad instance needs to be publicly available via HTTPS (we use
     Telegram webhooks).
   - The attachment size is limited to 20MB by
     `Telegram's Bot API <https://core.telegram.org/bots/api#getfile>`_.

Register a Telegram Bot App
---------------------------

Register your Telegram bot via your Telegram client, see also
`here <https://core.telegram.org/bots#3-how-do-i-create-a-bot>`_.

Go to BotFather

.. image:: /images/channels/telegram/telegram_bot_start.png
   :alt: initial page

Register a new bot by using "/newbot" and define its name and username

.. image:: /images/channels/telegram/telegram_bot_name_and_username.png
   :alt: /newbot

When you're all done, you will get your Telegram bot API token

.. image:: /images/channels/telegram/telegram_bot_finish.png
   :alt: bot has been created

Configure Zammad as Telegram Bot
--------------------------------

Go to "Admin > Channels > Telegram" and click "Add Bot"

.. image:: /images/channels/telegram/telegram_admin_new.png
   :alt: Admin > Channels > Telegram

Enter your "API Token", your "welcome message" and set the incoming group.

.. image:: /images/channels/telegram/telegram_admin_new_done.png
   :alt: Telegram bot added

Done, your Zammad is now configured as a Telegram bot.

Start Using Your New Channel
----------------------------

Go to your Telegram client, search for your new Telegram bot and start writing
a message.

.. image:: /images/channels/telegram/telegram_client_search_bot.png
   :alt: search for bot

.. image:: /images/channels/telegram/telegram_client_start.png
   :alt: enter a new message

.. image:: /images/channels/telegram/telegram_client_start_with_first_message.png
   :alt: first message

After a few seconds a new message in Zammad appears.

.. image:: /images/channels/telegram/telegram_agent_new_message.png
   :alt: A new Ticket - the message - just reply

Just click on reply button (as you do it for emails) to send a reply.

.. image:: /images/channels/telegram/telegram_agent_reply.png
   :alt: Ticket reply

The message will appear in your Telegram client.

.. image:: /images/channels/telegram/telegram_client_start_with_messages.png
   :alt: enter a new message
