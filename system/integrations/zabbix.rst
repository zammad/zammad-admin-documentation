Zabbix Integration
==============


This guide describes how to integrate your Zabbix 5.0 installation with
Zammad using the Zabbix webhook feature. This guide will provide
instructions on setting up a media type, a user and an action in Zabbix.

Requirements
------------

-  Zammad with enabled HTTP Token Authentication
-  Zabbix version 5.0 or higher

Setting up a Zammad
-------------------

1. Enable **API Token Access** in Settings > System > API.

2. Create a **new user** for a Zabbix alerter with an **email address**
and create a personal user token with **ticket.agent** permissions.

Zabbix Webhook configuration
----------------------------

Create a global macro
~~~~~~~~~~~~~~~~~~~~~

1. Before setting up the **Webhook**, you need to setup the global macro
**{$ZABBIX.URL}**, which must contain the **URL** to the **Zabbix
frontend**.

2. In the **Administration** > **Media types** section, import the
`Template <https://git.zabbix.com/projects/ZBX/repos/zabbix/browse/templates/media/zammad/media_zammad.xml>`_

3. Open the added **Zammad** media type and set:

-  **zammad\_access\_token** to the your **Personal User Token**
-  **zammad\_url** to the **frontend URL** of your **Zammad**
   installation
-  **zammad\_customer** to your **Zammad user email**.
-  **zammad\_enable\_tags** to **true** or **false** to enable or
   disable trigger tags. **Important**: if you enable tag support, each
   tag is set with a separate request.

4. If you want to prioritize issues according to **severity** values in
Zabbix, you can define mapping parameters:

-  **severity\_<name>**: Zammad priority ID

6. Click the **Update** button to save the **Webhook** settings.

7. To receive notifications in **Zammad**, you need to create a **Zabbix
user** and add **Media** with the **Zammad** type.

For **Send to**: enter any text, as this value is not used, but is
required.



For more information, use the
`Zabbix <https://www.zabbix.com/documentation/current/manual/config/notifications>`__