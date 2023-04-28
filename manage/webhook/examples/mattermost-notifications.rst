Mattermost Notifications
========================

Follow the steps below to configure a webhook for receiving Zammad notifications
in a Mattermost channel.

Step 1 - Setup Incoming Webhooks Integration for your Mattermost Channel
------------------------------------------------------------------------

In your Mattermost top-left corner product menu, choose **Integrations**.

.. figure:: /images/manage/webhook/webhook-mattermost-integrations.png
   :alt: Integrations menu item in Mattermost
   :align: center

Click on **Incoming Webhooks** integration button.

.. figure:: /images/manage/webhook/webhook-mattermost-incoming-webhooks.png
   :alt: Incoming Webhooks in Mattermost Integratons
   :align: center

Click on **Add Incoming Webhook** button.

.. figure:: /images/manage/webhook/webhook-mattermost-add-incoming-webhook.png
   :alt: Add Incoming Webhook button
   :align: center

Provide an appropriate **Title** and **Description** for the incoming webhook,
and choose a target **Channel** for the notification messages.

Optionally, you may choose to check **Lock to this channel** to limit
notifications to a single Mattermost channel. If unset, it will be possible to
configure the target channel from Zammad side as well.

.. figure:: /images/manage/webhook/webhook-mattermost-incoming-webhook-setup.png
   :alt: Incoming Webhook Setup
   :align: center

Click on **Save** button.

Once created, make sure to copy *the webhook endpoint URL* to clipboard and save
it for later. You can do this in one click via the button shown right next to
the field.

.. figure:: /images/manage/webhook/webhook-mattermost-incoming-webhook-url.png
   :alt: Copying Incoming Webhook URL
   :align: center

Finally, close the incoming webhook setup by clicking **Done**.

Step 2 - Add a Pre-defined Webhook in Zammad
--------------------------------------------

Go to :doc:`Webhook </manage/webhook/add>` management screen in your Zammad
instance and click on the arrow next to the green button in the upper right
corner. Choose **Pre-defined Webhook** from the dropdown menu.

.. figure:: /images/manage/webhook/webhook-new-buttons.png
   :alt: New Pre-defined Webhook button
   :align: center
   :width: 90%

In the subsequent modal dialog, select **Mattermost Notifications** as the
pre-defined webhook.

.. figure:: /images/manage/webhook/webhook-mattermost-webhook-pre-defined.png
   :alt: New Mattermost Notifications Pre-defined Webhook modal
   :align: center
   :width: 90%

Click **Next**.

In the new dialog, paste *the webhook endpoint URL* from Mattermost into
**Endpoint** field.

Optionally, you can set **Messaging Username** which will be used to post the
Zammad notifications. Default value is *zammad*.

Optionally, you can also set **Messaging Channel**, if you would like to post
to a different target channel than configured in the Mattermost incoming
webhook.

.. figure:: /images/manage/webhook/webhook-mattermost-webhook-endpoint.png
   :alt: Configuring Mattermost Webhook endpoint
   :align: center
   :width: 90%

Finally, click on **Submit**.

Step 3 - Configuring a Trigger on Ticket Create/Update Actions
--------------------------------------------------------------

As a last step, we will create a Trigger to post a notification to the
Mattermost channel whenever a ticket is created or updated.

Go to :doc:`Trigger </manage/trigger>` management screen, and click on the green
**New Trigger** button.

First, provide a suitable **Name** for the trigger and select *Always* for
**Action Execution** mode.

Then, switch on **Expert Mode** under **Conditions for affected objects** and
change the first condition group to *Match any (OR)*.

Next, change the initial condition attribute to *Action*. Click on the plus
button next to it to add another *Action* attribute below. Change the value of
the new attribute to *updated*.

Under **Execute changes on objects**, change the initial attribute to
*Notification > Webhook* and select the Mattermost Notifications webhook from
the list.

.. figure:: /images/manage/webhook/webhook-mattermost-trigger-new.png
   :alt: Configuring Trigger for firing of Webhook
   :align: center
   :width: 90%

Finally, click on **Submit** and your webhook is ready for use!

Sample Mattermost Channel Notification
--------------------------------------

From now on, whenever a ticket is created or updated in your Zammad system, a
suitable notification will be posted in the configured Mattermost Channel. The
notification will contain the link to the ticket, updated data and
:ref:`content of the last article <mattermost-removing-article-body>`. It will
also be `color coded`_ according to its latest state.

.. _color coded:
   https://user-docs.zammad.org/en/latest/basics/service-ticket/settings/state.html#state-colors

.. figure:: /images/manage/webhook/webhook-mattermost-sample-notification.png
   :alt: Sample Mattermost Channel Notification
   :align: center

.. _mattermost-removing-article-body:

Removing Article Content from the Mattermost Notification
---------------------------------------------------------

If you are concerned about leaking sensitive article content via notifications,
there is a way to remove them by further customizing the webhook payload.

Find your webhook in the list on the management screen and click on it to edit
it.

Switch on **Custom Payload** and the code editor below will be shown,
pre-populated with the default payload.

Next, identify the line starting with ``"text": "...`` block in the JSON
structure.

.. figure:: /images/manage/webhook/webhook-mattermost-rocket-chat-custom-payload.png
   :alt: Custom Payload for Mattermost Webhook
   :align: center
   :width: 80%

Scroll horizontally to the end of the line and select
``\n\n#{notification.body}`` part near the end. Be sure not to include the end
double quote with comma (``",``) in the rest of the line, since the new payload
must remain a valid JSON value.

.. figure:: /images/manage/webhook/webhook-mattermost-rocket-chat-custom-payload-with-article-content.png
   :alt: Custom Payload with Article Content for Mattermost Webhook
   :align: center
   :width: 80%

Then, simply delete the selected code.

.. figure:: /images/manage/webhook/webhook-mattermost-rocket-chat-custom-payload-wo-article-content.png
   :alt: Custom Payload w/o Article Content for Mattermost Webhook
   :align: center
   :width: 80%

Finally, click on **Submit** to save your webhook changes.

On the next invocation of the webhook, the notification will not include content
of the last article.
