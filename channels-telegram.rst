Telegram
********

It's possible to put your Telegram bot communication into Zammad. To do so, you need to follow these steps.

.. note::
   Your Zammad instance needs to be publicly available via HTTPS (we use Telegram WebHooks).

.. Warning::
   Please note that due to technical API restrictions of Telegram, you can only receive messages with up to 20MB file size!

   If you want to learn more about this, please take a look at `Telegrams API-Documentation <https://core.telegram.org/bots/api#getfile>`_.


Register a Telegram bot app
===========================

Register your Telegram bot via your Telegram client, see also here: https://core.telegram.org/bots#3-how-do-i-create-a-bot

Go to BotFather

.. image:: images/channels/telegram_bot_start.png
   :alt: inital page

Register a new bot by using "/newbot" and define its name and username

.. image:: images/channels/telegram_bot_name_and_username.png
   :alt: /newbot

When you're all done, you will get your Telegram bot API token

.. image:: images/channels/telegram_bot_finish.png
   :alt: bot has been created


Configure Zammad as Telegram bot
================================

Go to "Admin -> Channels -> Telegram" and click "Add Bot"

.. image:: images/channels/telegram_admin_new.png
   :alt: Admin -> Channels -> Telegram

Enter your "API Token", your "welcome message" and set the incoming group.

.. image:: images/channels/telegram_admin_new_done.png
   :alt: Telegram bot added

Done, your Zammad is now configured as a Telegram bot.


Start using your new channel
============================

.. Note:: Please note that the maximum file size for Telegram-Bots is 20MB!
  Further information can be found in the `Telegram API-Reference <https://core.telegram.org/bots/api#getfile>`_.


Go to your Telegram client, search for your new Telegram bot and start writing a message.

.. image:: images/channels/telegram_client_search_bot.png
   :alt: search for bot

.. image:: images/channels/telegram_client_start.png
   :alt: enter a new message

.. image:: images/channels/telegram_client_start_with_first_message.png
   :alt: first message

After a few seconds a new message in Zammad appears.

.. image:: images/channels/telegram_agent_new_message.png
   :alt: A new Ticket - the message - just reply

Just click on reply button (as you do it for emails) to send a reply.

.. image:: images/channels/telegram_agent_reply.png
   :alt: Ticket reply

The message will appear in your Telegram client.

.. image:: images/channels/telegram_client_start_with_messages.png
   :alt: enter a new message
