Telegram
========

It's possible to put your Telegram bot communication into Zammad.
To do so, you need to follow the steps below.

.. note::

   - Your Zammad instance needs to be publicly available via HTTPS (usage of
     Telegram webhooks).
   - The attachment size is limited to 20MB by
     `Telegram's Bot API <https://core.telegram.org/bots/api#getfile>`_.

Register a Telegram Bot App
---------------------------

Register your Telegram bot via your Telegram client according to the steps
below. You can find additional information in
`Telegram's bot documentation <https://core.telegram.org/bots#3-how-do-i-create-a-bot>`_.

Go to BotFather
   .. image:: /images/channels/telegram/telegram_bot_start.png
      :alt: Screenshot shows initial BotFather chat in Telegram

Register a new bot
   Register a new bot by using ``/newbot`` and define its name and username.

   .. image:: /images/channels/telegram/telegram_bot_name_and_username.png
      :alt: Screenshot shows BotFather chat where a new bot is created

Get your API token
   When you're all done, you will get your Telegram bot API token

   .. image:: /images/channels/telegram/telegram_bot_finish.png
      :alt: Screenshot shows BotFather chat after creating the bot

Configure Zammad as Telegram Bot
--------------------------------

Go to *Channels > Telegram* in Zammad's settings and click ``Add Bot``. Enter
your API token, a welcome message and a goodbye message and choose a group in
which the tickets will be created.

.. image:: /images/channels/telegram/telegram-configuration.png
   :alt: Screenshot shows Zammad's Telegram configuration dialog
   :align: center

After successfully creating the bot by clicking the ``Submit`` button, you can
see your bot now in the channel detail section.

.. image:: /images/channels/telegram/telegram_created.png
   :alt: Screenshot shows existing Telegram bot in Zammad
   :align: center

That's all! Now you can start using the Telegram channel in Zammad.
