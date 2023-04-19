Webhook Payload
===============

.. tip:: **🤓 A more personal payload...**

  Your Zammad instance also provides default payload as an example. This payload
  *does fit your installation* and provides your custom objects!

  .. figure:: /images/manage/webhook/webhook-sample-payload.png
      :alt: The webhook menu provides a payload for the particular instance in question.
      :align: center
      :width: 90%

Request headers
---------------

Zammad sends the following headers in each webhook POST request:

:``User-Agent``:        ``"Zammad User Agent"``
:``X-Zammad-Trigger``:  The name of the originating trigger
:``X-Zammad-Delivery``: A unique, random ID string
:``X-Hub-Signature``:   The SHA-1 hash of your HMAC-SHA1 signature token
                        (assuming you provided one when creating your trigger)

.. _webhook-payload-default:

Default JSON Payload
--------------------

When the webhook payload is not customized, requests will include default payload
depending on the webhook type.

Regular Webhooks (example)
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. container:: long-code-block

   .. code-block:: json

      {
        "ticket": {
          "article_count": 1,
          "article_ids": [
            104
          ],
          "create_article_sender": "Customer",
          "create_article_sender_id": 2,
          "create_article_type": "phone",
          "create_article_type_id": 5,
          "created_at": "2020-11-13T14:34:35.282Z",
          "created_by": {
            "active": true,
            "created_at": "2020-11-13T12:57:47.679Z",
            "created_by": "-",
            "created_by_id": 1,
            "email": "chris@chrispresso.com",
            "firstname": "Christopher",
            "id": 3,
            "image": "7a6a0d1d94ad2037153cf3a6c1b49a53",
            "lastname": "Miller",
            "login": "chris@chrispresso.com",
            "organization": "Chrispresso Inc.",
            "organization_id": 2,
            "out_of_office": false,
            "role_ids": [
              1,
              2
            ],
            "roles": [
              "Admin",
              "Agent"
            ],
            "updated_at": "2020-11-13T13:00:03.064Z",
            "updated_by": "chris@chrispresso.com",
            "updated_by_id": 3,
            "verified": false,
            "vip": false,
          },
          "created_by_id": 3,
          "customer": {
            "active": true,
            "address": "Bennelong Point\nSydney NSW 2000",
            "created_at": "2020-11-13T12:57:48.779Z",
            "created_by": "-",
            "created_by_id": 1,
            "email": "emily@example.com",
            "firstname": "Emily",
            "id": 8,
            "image": "99ba64a89f7783c099c304c9b00ff9e8",
            "lastname": "Adams",
            "login": "emily@example.com",
            "note": "did order café au lait, ask next time if the flavor was as expected",
            "organization": "Awesome Customer Inc.",
            "organization_id": 3,
            "out_of_office": false,
            "phone": "0061 2 1234 7777",
            "role_ids": [
              3
            ],
            "roles": [
              "Customer"
            ],
            "updated_at": "2020-11-13T14:34:37.366Z",
            "updated_by": "chris@chrispresso.com",
            "updated_by_id": 3,
            "verified": false,
            "vip": false,
          },
          "customer_id": 8,
          "group": {
            "active": true,
            "created_at": "2020-11-13T12:57:47.498Z",
            "created_by": "-",
            "created_by_id": 1,
            "follow_up_assignment": true,
            "follow_up_possible": "yes",
            "id": 3,
            "name": "Service Desk",
            "updated_at": "2020-11-13T12:57:48.044Z",
            "updated_by": "-",
            "updated_by_id": 1,
            "user_ids": [
              3,
              4,
              5
            ],
            "users": [
              "chris@chrispresso.com",
              "jacob@chrispresso.com",
              "emma@chrispresso.com"
            ]
          },
          "group_id": 3,
          "id": 81,
          "last_contact_at": "2020-11-13T14:34:35.318Z",
          "last_contact_customer_at": "2020-11-13T14:34:35.318Z",
          "number": "10081",
          "organization": {
            "active": true,
            "created_at": "2020-11-13T12:57:47.524Z",
            "created_by": "-",
            "created_by_id": 1,
            "domain_assignment": false,
            "id": 3,
            "member_ids": [
              8,
              6,
              7
            ],
            "members": [
              "emily@example.com",
              "anna@example.com",
              "samuel@example.com"
            ],
            "name": "Awesome Customer Inc.",
            "note": "Global distributor of communication and security products, electrical and electronic wire &amp; cable.",
            "shared": true,
            "updated_at": "2020-11-13T14:34:35.346Z",
            "updated_by": "-",
            "updated_by_id": 1
          },
          "organization_id": 3,
          "owner": {
            "active": true,
            "created_at": "2020-11-13T12:57:48.036Z",
            "created_by": "-",
            "created_by_id": 1,
            "email": "emma@chrispresso.com",
            "firstname": "Emma",
            "id": 5,
            "image": "b64fef91c29105b4a08a2a69be08eda3",
            "lastname": "Taylor",
            "login": "emma@chrispresso.com",
            "organization": "Chrispresso Inc.",
            "organization_id": 2,
            "out_of_office": false,
            "role_ids": [
              2
            ],
            "roles": [
              "Agent"
            ],
            "updated_at": "2020-11-13T12:57:48.072Z",
            "updated_by": "-",
            "updated_by_id": 1,
            "verified": false,
            "vip": false,
          },
          "owner_id": 5,
          "priority": {
            "active": true,
            "created_at": "2020-11-13T12:54:02.238Z",
            "created_by": "-",
            "created_by_id": 1,
            "default_create": true,
            "id": 2,
            "name": "2 normal",
            "updated_at": "2020-11-13T12:54:02.238Z",
            "updated_by": "-",
            "updated_by_id": 1
          },
          "priority_id": 2,
          "state": "open",
          "state_id": 2,
          "ticket_time_accounting": [],
          "ticket_time_accounting_ids": [],
          "title": "Webhook-Test",
          "updated_at": "2020-11-13T14:34:35.333Z",
          "updated_by": {
            "active": true,
            "created_at": "2020-11-13T12:57:47.679Z",
            "created_by": "-",
            "created_by_id": 1,
            "email": "chris@chrispresso.com",
            "firstname": "Christopher",
            "id": 3,
            "image": "7a6a0d1d94ad2037153cf3a6c1b49a53",
            "lastname": "Miller",
            "login": "chris@chrispresso.com",
            "organization": "Chrispresso Inc.",
            "organization_id": 2,
            "out_of_office": false,
            "role_ids": [
              1,
              2
            ],
            "roles": [
              "Admin",
              "Agent"
            ],
            "updated_at": "2020-11-13T13:00:03.064Z",
            "updated_by": "chris@chrispresso.com",
            "updated_by_id": 3,
            "verified": false,
            "vip": false,
          },
          "updated_by_id": 3
        },
        "article": {
          "attachments": [
            {
              "id": 174,
              "filename": "image1.jpeg",
              "size": "35574",
              "preferences": {
                "Content-Type": "image/jpeg",
                "Mime-Type": "image/jpeg",
                "Content-ID": "81.969520479@zammad.example.com",
                "Content-Disposition": "inline",
                "resizable": true,
                "content_preview": true
              },
              "url": "https://zammad.example.com/api/v1/ticket_attachment/81/104/174"
            }
          ],
          "body": "This is a simple Webhook Test.<div><br></div><div>\n<img style=\"max-width:100%;width: 849px;max-width: 100%;\" src=\"/api/v1/ticket_attachment/81/104/174?view=inline\"><br>\n</div>",
          "content_type": "text/html",
          "created_at": "2020-11-13T14:34:35.318Z",
          "created_by": {
            "active": true,
            "created_at": "2020-11-13T12:57:47.679Z",
            "created_by": "-",
            "created_by_id": 1,
            "email": "chris@chrispresso.com",
            "firstname": "Christopher",
            "id": 3,
            "image": "7a6a0d1d94ad2037153cf3a6c1b49a53",
            "lastname": "Miller",
            "login": "chris@chrispresso.com",
            "organization": "Chrispresso Inc.",
            "organization_id": 2,
            "out_of_office": false,
            "role_ids": [
              1,
              2
            ],
            "roles": [
              "Admin",
              "Agent"
            ],
            "updated_at": "2020-11-13T13:00:03.064Z",
            "updated_by": "chris@chrispresso.com",
            "updated_by_id": 3,
            "verified": false,
            "vip": false,
          },
          "created_by_id": 3,
          "from": "Emily Adams <emily@example.com>",
          "id": 104,
          "internal": false,
          "origin_by": "emily@example.com",
          "origin_by_id": 8,
          "sender": "Customer",
          "sender_id": 2,
          "ticket_id": 81,
          "to": "Service Desk",
          "type": "phone",
          "type_id": 5,
          "updated_at": "2020-11-13T14:34:35.318Z",
          "updated_by": {
            "active": true,
            "created_at": "2020-11-13T12:57:47.679Z",
            "created_by": "-",
            "created_by_id": 1,
            "email": "chris@chrispresso.com",
            "firstname": "Christopher",
            "id": 3,
            "image": "7a6a0d1d94ad2037153cf3a6c1b49a53",
            "karma_user_ids": [],
            "lastname": "Miller",
            "login": "chris@chrispresso.com",
            "organization": "Chrispresso Inc.",
            "organization_id": 2,
            "out_of_office": false,
            "role_ids": [
              1,
              2
            ],
            "roles": [
              "Admin",
              "Agent"
            ],
            "updated_at": "2020-11-13T13:00:03.064Z",
            "updated_by": "chris@chrispresso.com",
            "updated_by_id": 3,
            "verified": false,
            "vip": false,
          },
          "updated_by_id": 3,
          "accounted_time": 0
        }
      }

.. note::

   * For better readability, all empty and ``null`` values have been omitted from the
     sample payload above. That means the webhooks you receive
     *will include additional fields not shown here*.

   * Webhooks will also include fields for any relevant
     :doc:`custom objects </system/objects>` defined in your system.

   * Attachments are *not included*; links to attachments *are* (authentication required).

   * Linked tickets are *not included*.

   * None of the following **user attributes** are included:

     * ``last_login``
     * ``login_failed``
     * ``password``
     * ``preferences``
     * ``group_ids``
     * ``groups``
     * ``authorization_ids``
     * ``authorizations``

Pre-defined Webhooks
~~~~~~~~~~~~~~~~~~~~

Each pre-defined webhook template provides a special payload designed for a particular
service. See :doc:`/manage/webhook/examples` for more information.
