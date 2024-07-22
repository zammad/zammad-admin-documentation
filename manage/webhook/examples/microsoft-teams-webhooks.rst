Microsoft Teams Webhook Payloads
================================

Microsoft is retiring their Office 365 connectors in favor of connecting
third-party tools via their Workflows. Because of that, the pre-defined
webhook in Zammad was changed. In case you need the old or new default payload,
you can find them below.

Payload for Office Connectors (old)
-----------------------------------

.. code-block:: JSON

   {
      "@type": "MessageCard",
      "@context": "http://schema.org/extensions",
      "themeColor": "#{ticket.current_state_color}",
      "title": "#{ticket.title}",
      "text": "#{notification.message}",
      "sections": [
          {
          "text": "#{notification.changes}"
          },
          {
          "text": "#{notification.body}"
          }
      ],
      "potentialAction": [
          {
          "targets": [
              {
              "os": "default",
              "uri": "#{notification.link}"
              }
          ],
          "@type": "OpenUri",
          "name": "Ticket##{ticket.number}"
          }
      ]
   }

Payload for Workflows (new)
---------------------------

.. code-block:: JSON

   {
     "type": "message",
     "attachments": [
       {
         "contentType": "application/vnd.microsoft.card.adaptive",
         "contentUrl": null,
         "content": {
           "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
           "type": "AdaptiveCard",
           "version": "1.0",
           "body": [
             {
               "type": "TextBlock",
               "text": "#{ticket.title}",
               "color": "#{ticket.current_state_color}",
               "weight": "bolder",
               "size": "large",
               "wrap": true
             },
             {
               "type": "TextBlock",
               "text": "#{notification.changes}",
               "wrap": true
             },
             {
               "type": "TextBlock",
               "text": "#{notification.body}",
               "wrap": true
             },
             {
               "type": "ActionSet",
               "actions": [
                 {
                   "type": "Action.OpenUrl",
                   "title": "#{config.ticket_hook}#{ticket.number}",
                   "url": "#{notification.link}"
                 }
               ]
             }
           ]
         }
       }
     ]
   }
