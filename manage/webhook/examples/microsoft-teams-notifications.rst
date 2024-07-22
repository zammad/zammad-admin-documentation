Microsoft Teams Notifications
=============================

.. warning::

   Microsoft decided to retire
   `their Office 365 connectors <https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/>`_.
   The new way of connecting MS Teams with third party tools is via the
   `Workflow app in Teams <https://support.microsoft.com/en-us/office/browse-and-add-workflows-in-microsoft-teams-4998095c-8b72-4b0e-984c-f2ad39e6ba9a>`_.

   For the transition period, we decided to keep this guide as is. Make sure
   to follow Microsoft's guide as replacement for **Step 1** below, to
   connect Teams and Zammad via Workflow app.

   If you already use this webhook and *didn't customize* the payload, the new
   webhook is used automatically after updating Zammad. In this case you just
   need to change the connection in Teams. Otherwise you have to
   manually adjust it in Zammad, too. See
   :doc:`MS Teams webhooks </manage/webhook/examples/microsoft-teams-webhooks>`
   where you can find the old and new default ones in case you need it.

   To manage the connection in Zammad, you can go on with **step 2** on this
   page.

.. toctree::
   :hidden:

   /manage/webhook/examples/microsoft-teams-webhooks

Follow the steps below to configure a webhook for receiving Zammad notifications
in a Microsoft Teams channel.

Step 1 - Setup Incoming Webhook Connector in your Teams Channel
---------------------------------------------------------------

In your target Teams Channel, click on the overflow menu in the upper right
corner and choose **Connectors**.

.. figure:: /images/manage/webhook/webhook-teams-channel-connectors.png
   :alt: Connectors menu item in a Teams Channel
   :align: center

Find a connector named **Incoming Webhook** in the list and click on
**Configure** button next to it.

.. figure:: /images/manage/webhook/webhook-teams-incoming-webhook.png
   :alt: Incoming Webhook in the Connectors list
   :align: center

Provide an appropriate name for the incoming webhook connector, keeping in mind
this will be used as the name for all of the notification messages in the
channel.

Optionally, provide a custom image which will be used as the avatar.

.. figure:: /images/manage/webhook/webhook-teams-incoming-webhook-create.png
   :alt: Creating Incoming Webhook Connector
   :align: center

Click on **Create** and be patient.

Once created, make sure to copy *the webhook endpoint URL* to clipboard and save
it for later. You can do this in one click via the button shown right next to
the field.

.. figure:: /images/manage/webhook/webhook-teams-incoming-webhook-endpoint.png
   :alt: Copying Incoming Webhook Connector URL
   :align: center

Finally, close the connector configuration by clicking **Done**.

Step 2 - Add a Pre-defined Webhook in Zammad
--------------------------------------------

Go to :doc:`Webhook </manage/webhook/add>` management screen in your Zammad
instance and click on the arrow next to the green button in the upper right
corner. Choose **Pre-defined Webhook** from the dropdown menu.

.. figure:: /images/manage/webhook/webhook-new-buttons.png
   :alt: New Pre-defined Webhook button
   :align: center
   :width: 90%

In the subsequent modal dialog, select **Microsoft Teams Notifications** as the
pre-defined webhook.

.. figure:: /images/manage/webhook/webhook-teams-webhook-pre-defined.png
   :alt: New Microsoft Teams Notifications Pre-defined Webhook modal
   :align: center
   :width: 90%

Click **Next**.

In the new dialog, paste *the webhook endpoint URL* from Microsoft Teams into
**Endpoint** field.

.. figure:: /images/manage/webhook/webhook-teams-webhook-endpoint.png
   :alt: Configuring Microsoft Teams Webhook endpoint
   :align: center
   :width: 90%

Finally, click on **Submit**.

Step 3 - Configuring a Trigger for firing of the Webhook
--------------------------------------------------------

As a last step, you need to create a
:doc:`Trigger <generic-notifications-trigger>` for posting a notification to the
Microsoft Teams channel under certain conditions.

Once the trigger is in place, your webhook is ready for use!

Sample Teams Channel Notification
---------------------------------

From now on, whenever a ticket is created or updated in your Zammad system, a
suitable notification will be posted in the configured Teams Channel. The
notification will contain the link to the ticket, updated data and
:ref:`content of the last article <teams-removing-article-body>`. It will also
also be
:user-docs:`color coded </basics/service-ticket/settings/state.html#state-colors>`
according to its latest state.

.. figure:: /images/manage/webhook/webhook-teams-sample-notification.png
   :alt: Sample Teams Channel Notification
   :align: center

.. _teams-removing-article-body:

Removing Article Content from the Teams Notification
----------------------------------------------------

If you are concerned about leaking sensitive article content via notifications,
there is a way to remove them by further customizing the webhook payload.

Find your webhook in the list on the management screen and click on it to edit
it.

Switch on **Custom Payload** and the code editor below will be shown,
pre-populated with the default payload.

Next, identify ``{ "text": "#{notification.body}" }`` block in the JSON
structure and select it. Be sure to include the comma (``,``) in the preceding
line, since the new payload must remain a valid JSON value.

.. figure:: /images/manage/webhook/webhook-teams-custom-payload-with-article-content.png
   :alt: Custom Payload with Article Content
   :align: center
   :width: 80%

Then, simply delete the selected code block.

.. figure:: /images/manage/webhook/webhook-teams-custom-payload-wo-article-content.png
   :alt: Custom Payload w/o Article Content
   :align: center
   :width: 80%

Finally, click on **Submit** to save your webhook changes.

On the next invocation of the webhook, the notification will not include content
of the last article.
