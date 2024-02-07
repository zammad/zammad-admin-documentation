GitHub
======

Use GitHub integration to track GitHub issues directly within Zammad tickets.
Add issue hyperlinks and get a live summary of metadata
like status (open/closed), assignee, labels, and more.

Please note that our GitHub integration does not support pull requests.

.. figure:: /images/system/integrations/github/github-integration-page.png
   :alt: Integration page for GitHub
   :align: center
   :width: 90%

Setup
-----

1. In your GitHub settings, create a new API token under
   **Developer settings > Personal access tokens > Generate new token**.
   Leave the **Scopes** section empty.

   .. figure:: /images/system/integrations/github/add-api-token-github.gif
      :alt: Screencast showing how to create a new API token
      :align: center
      :width: 90%

      Create a new API key with no scopes/privileges.

   .. hint:: 🔒 **Will this work for private repos?**

      No. To link private repo issues, **use the** ``repo`` **scope instead**.
      Bear in mind that the resulting token will have
      `lots of permissions that it doesn't actually need <https://docs.github.com/en/developers/apps/scopes-for-oauth-apps>`_,
      which presents a security risk if your token ever falls into the wrong
      hands.

      Unfortunately, because of how GitHub's OAuth token scopes are set up,
      this is the only way to link issues on private repos.

2. Enter your new API token in Zammad and enable GitHub integration.

   .. figure:: /images/system/integrations/github/configure-and-active-github-integration.gif
      :alt: Screencast showing how to configure Zammad's GitHub integration
      :align: center
      :width: 90%

   Use the default API endpoint (``https://api.github.com/graphql``)
   unless you're using GitHub Enterprise Server.

Once completed, a new GitHub issues tab will appear in the ticket pane. 🎉

Troubleshooting
---------------

Token verification is taking a long time
   Slight delays are normal (<2 min.), especially for systems under heavy load.

   Self-hosted administrators, please check your network settings
   to ensure that your Zammad server can reach ``api.github.com``.

I reloaded the page and now the API token is gone
   This may indicate that Zammad is still verifying your API token.
   Try reloading the page again in a couple minutes.
