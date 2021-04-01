GitHub
======

Use GitHub integration to track GitHub issues directly within Zammad tickets.
Add issue hyperlinks and get a live summary of metadata
like status (open/closed), assignee, labels, and more.

.. figure:: /images/system/integrations/github/github-integration-page.png
   :alt: Integration page for GitHub
   :align: center
   :width: 90%

.. note:: GitHub integration does not support pull requests.

Setup
-----

1. In your GitHub settings, create a new API token under
   **Developer settings > Personal access tokens > Generate new token**.

   Under **Select scopes**, choose ``public_repo`` only.

   .. figure:: /images/system/integrations/github/add-api-token-github.gif
      :alt: Screencast showing how to create a new API token
      :align: center
      :width: 90%

      Create a new API key with ``public_repo`` privileges.

   .. hint:: 🔒 **If you wish to link issues on any private repos...**

      1. Use the ``repo`` parent scope instead.
      2. Your API token must belong to an account with access to those repos.

2. Enter your new API token in Zammad and enable GitHub integration.

   .. figure:: /images/system/integrations/github/configure-and-active-github-integration.gif
      :alt: Screencast showing how to configure Zammad’s GitHub integration
      :align: center
      :width: 90%

   .. hint:: Leave the default API endpoint (``https://api.github.com/graphql``) as-is
      unless you’re using GitHub Enterprise Server.

Once completed, a new GitHub issues tab will appear in the ticket pane. 🎉

Troubleshooting
---------------

Token verification is taking a long time
   Slight delays are normal (<2 min.), especially for systems under heavy load.

   Self-hosted administrators, please check your network settings
   to ensure that your Zammad server can reach api.github.com.

I reloaded the page and now the API token is gone
   This may indicate that Zammad is still verifying your API token.
   Try reloading the page again in a couple minutes.
