Slack Notifications
===================

Follow the steps below to configure a webhook for receiving Zammad notifications
in a Slack channel.

Step 1 - Setup Incoming WebHooks App in your Slack Channel
----------------------------------------------------------

In your target Slack Channel, click on the channel name in the upper left part
of the screen to get to channel details.

.. figure:: /images/manage/webhook/webhook-slack-channel-details.png
   :alt: Accessing Channel Details in a Slack Channel
   :align: center

Switch to **Integrations** tab and click on **Add an App** button.

.. figure:: /images/manage/webhook/webhook-slack-channel-integrations.png
   :alt: Adding an App to Slack Channel
   :align: center

On the next screen, search for an app called *Incoming WebHooks* and click on
**Install** button next to it.

.. figure:: /images/manage/webhook/webhook-slack-channel-app-search.png
   :alt: Searching for Creating Incoming Webhook Connector
   :align: center

You will be redirected to Slack app website, where you can add the app.

Click on **Add to Slack** button.

.. figure:: /images/manage/webhook/webhook-slack-incoming-webhooks-add.png
   :alt: Adding Incoming WebHooks App to Slack
   :align: center
   :width: 80%

On the next screen, in **Post to Channel** choose your channel from the list
and click on **Add Incoming WebHooks integration** button.

.. figure:: /images/manage/webhook/webhook-slack-incoming-webhooks-post.png
   :alt: Configuring Post to Channel Settings of Incoming WebHooks App
   :align: center
   :width: 80%

In the final screen, scroll down to **Integration Settings**.

Make sure to copy **Webhook URL** to clipboard and save it for later. You can
do this in one click via the **Copy URL** link shown right below the field.

You can also fill **Customize Name** field with an appropriate username for the
incoming webhooks integration, as this will be used for all of the notification
messages in the channel.

Optionally, you can **Customize Icon** which will be used as the avatar.

.. figure:: /images/manage/webhook/webhook-slack-incoming-webhooks-integration.png
   :alt: Integration Settings of Incoming WebHooks App
   :align: center
   :width: 80%

Finally, save your app configuration by clicking **Save Settings**.

Step 2 - Add a Pre-defined Webhook in Zammad
--------------------------------------------

Go to :doc:`Webhook </manage/webhook/add>` management screen in your Zammad
instance and click on the arrow next to the green button in the upper right
corner. Choose **Pre-defined Webhook** from the dropdown menu.

.. figure:: /images/manage/webhook/webhook-new-buttons.png
   :alt: New Pre-defined Webhook button
   :align: center
   :width: 90%

In the subsequent modal dialog, select **Slack Notifications** as the
pre-defined webhook.

.. figure:: /images/manage/webhook/webhook-slack-webhook-pre-defined.png
   :alt: New Slack Notifications Pre-defined Webhook modal
   :align: center
   :width: 90%

Click **Next**.

In the new dialog, paste **Webhook URL** from Slack App into **Endpoint**
field.

.. figure:: /images/manage/webhook/webhook-slack-webhook-endpoint.png
   :alt: Configuring Slack Webhook endpoint
   :align: center
   :width: 90%

Finally, click on **Submit**.

Step 3 - Configuring a Trigger on Ticket Escalation Events
----------------------------------------------------------

As a last step, we will create a Trigger to post a notification to the Slack
channel whenever a ticket is escalated or reached escalation warning.

Go to :doc:`Trigger </manage/trigger>` management screen, and click on the
green **New Trigger** button.

First, provide a suitable **Name** for the trigger and select *Time event* for
**Activated by** field.

Then, switch on **Expert Mode** under **Conditions for affected objects** and
change the first condition group to *Match any (OR)*.

Next, change the initial condition attribute to *Escalation at* and set its
operator to *has reached*. Click on the plus button next to it to add another
attribute below. Change the new attribute also to *Escalation at* and set its
operator to *has reached warning*.

Under **Execute changes on objects**, change the initial attribute to
*Notification > Webhook* and select the Slack Notifications webhook from the
list.

.. figure:: /images/manage/webhook/webhook-slack-trigger-new.png
   :alt: Configuring Trigger for firing of Webhook
   :align: center
   :width: 90%

Finally, click on **Submit** and your webhook is ready for use!

Sample Slack Channel Notification
---------------------------------

From now on, whenever a ticket is escalated or has reached escalation warning in
your Zammad system, a suitable notification will be posted in the configured
Slack Channel. The notification will contain the link to the ticket, escalation
information and
:ref:`content of the last article <slack-removing-article-body>`.
It will also be `color coded`_ according to its latest state.

.. _color coded:
   https://user-docs.zammad.org/en/latest/basics/service-ticket/settings/state.html#state-colors

.. figure:: /images/manage/webhook/webhook-slack-sample-notification.png
   :alt: Sample Slack Channel Notification
   :align: center

.. _slack-removing-article-body:

Removing Article Content from the Slack Notification
----------------------------------------------------

If you are concerned about leaking sensitive article content via notifications,
there is a way to remove them by further customizing the webhook payload.

Find your webhook in the list on the management screen and click on it to edit
it.

Switch on **Custom Payload** and the code editor below will be shown,
pre-populated with the default payload.

Next, identify the line starting with ``"text": "...`` block in the JSON
structure.

.. figure:: /images/manage/webhook/webhook-slack-custom-payload.png
   :alt: Custom Payload for Slack Webhook
   :align: center
   :width: 80%

Scroll horizontally to the end of the line and select
``\n\n#{notification.body}`` part near the end. Be sure not to include the end
double quote with comma (``",``) in the rest of the line, since the new payload
must remain a valid JSON value.

.. figure:: /images/manage/webhook/webhook-slack-custom-payload-with-article-content.png
   :alt: Custom Payload with Article Content for Slack Webhook
   :align: center
   :width: 80%

Then, simply delete the selected code.

.. figure:: /images/manage/webhook/webhook-slack-custom-payload-wo-article-content.png
   :alt: Custom Payload w/o Article Content for Slack Webhook
   :align: center
   :width: 80%

Finally, click on **Submit** to save your webhook changes.

On the next invocation of the webhook, the notification will not include content
of the last article.
