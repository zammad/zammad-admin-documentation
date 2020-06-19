Slack
=====

.. note:: In order to use this feature, please add a new Slack app to your Workspace. The App you need is called ``Incoming WebHooks`` .


Why do I need this feature?
^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you're already using Slack for your team communication, you'll love this feature!
Our Slack integration can push ticket notifications about the last ticket article based on the following events:

* on Ticket creation
* on Ticket updates
* on reached reminders
* a Ticket has escalated
* a Ticket is going to escalate

Zammad will provide the Ticket title, a direct link to the Ticket, the event type (creation, updated, escalation), the customer,
time and the last article that has triggered the notification. This will give you further options, as you can see e.g. escalating tickets
that are assigned to an agent that's e.g. absent. You can interact faster, as you might see problems earlier (or even before the problem gets one).

If needed and wanted, you can even discuss directly about the topic before sending an answer to the customer. Another possible use case
would be a agent monitoring new agents and their answers to tickets.


Configure the integration
^^^^^^^^^^^^^^^^^^^^^^^^^

First of all, please go to your slack workspace - go to administration => Manage Apps.
If you don't have an app yet, you can simply add a new one - just search for `` Incoming WebHooks`` and customize the app to your needs.
Choose (or create) the channel Zamma should post it's information to and press on "Add Incoming WebHooks integration".
If you're ready, copy the provided WebHook URL and go to your Zammad installation.

.. hint:: You need administrative rights on the Slack Workspace. The link to the app directory is normally ``https://[workspace-name].slack.com/apps`` .

.. image:: /images/system/integrations/slack/add-incoming-webhook.jpg

.. image:: /images/system/integrations/slack/incmoing-webhook-configuration.jpg

To configure the slack integration, log in to Zammad and go to Integrations (System) => Slack in the admin panel.
Here you can choose on what evens Zammad should post information about a ticket to your Slack channel.
Next you need to device what groups shall be affected by this, as anybody with access to that specific Slack channel can read at least parts of the ticket
this might be a privacy issue, if you select the wrong groups. The username is simply the name that Zammad uses as display name inside the Slack chat.
The channel defines the Slack channel the information is being posted in. As last option, you can set a custom icon for posting to slack.

When you're ready, just hit "Submit" and enable the integration. Zammad will now post new ticket information based on the trigger you chose.
Below the options you have the recent log that shows the latest requests to Slack for debugging if needed.

.. note:: If you leave the icon URL empty, Zammad will use the Zammad logo instead. The icon should be a square PNG file.

.. image:: /images/system/integrations/slack/configuration-in-zammad.jpg


The result
^^^^^^^^^^

The following figure shows how it will look if you choose to receive updates on created and updated tickets. On every post Zammad sends to the Slack channel, you can
create new threads to discuss about the new article.

.. image:: /images/system/integrations/slack/updates-on-created-and-updated-tickets.jpg

If you just want to keep track of soon escalating or already escalated tickets, it will look the the following figure. Zammad changes the color in front of the post
so you can easily see the state of the ticket.

.. image:: /images/system/integrations/slack/escalating-soon-and-escalated.jpg

If you change the state, Zammad will also put information on what state the ticket gets and (if pending state) the date until it pends.
You'll also recognize the color codes in front of posts on slack, as they are exact the same the ticket state colors you'll see in Zammad!

.. image:: /images/system/integrations/slack/different-visualized-states.jpg
