Facebook
********

.. hint:: Please note that this part of our documentation currently is outdated. We currently are working on solutions for this topic.

You can connect Facebook Accounts with Zammad. You need to connect your Zammad with Facebook first:

For this start at: https://developers.facebook.com/apps/

.. image:: /images/channels/FB_1.png

.. image:: /images/channels/FB_2.png

Click on “Create App ID" and enter app name

.. image:: /images/channels/FB_3.png

.. image:: /images/channels/FB_4.png

.. image:: /images/channels/FB_5.png

.. image:: /images/channels/FB_6.png

.. image:: /images/channels/FB_7.png

.. image:: /images/channels/FB_8.png

.. image:: /images/channels/FB_9.png

.. image:: /images/channels/FB_10.png

.. image:: /images/channels/FB_11.png


***Configure Zammad as Facebook app***

- Go to “Admin -> Channels -> Facebook”
- Click on “Connect Facebook App” and enter your “App ID”, “App Secret” and verify the “Callback URL”.

Done, your Zammad is configured as Facebook App now.


***Link your Facebook Page to your Zammad Facebook app***

Now you need to link your Facebook Page from which you want to get posts and send out comments.

Click on “Add Account”, then you will see the authorize app page of Facebook. Click on “authorize app”.

.. image:: /images/channels/FB_20.jpg

.. image:: /images/channels/FB_21.jpg

You will get redirected back to Zammad. Now you need to configure your search keys, where mentions should get routed.

.. image:: /images/channels/FB_22.jpg

After you are done, you will get an overview of all linked Facebook Accounts.

.. image:: /images/channels/FB_23.jpg


***Start using your new channel***

Start and write a post to your page, short time later you will have a new ticket in Zammad.

Just click on the reply button (as you do it for emails) to send a comment.
