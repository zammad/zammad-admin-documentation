GitLab
======

Use GitLab integration to track GitLab issues directly within Zammad tickets.
Add issue hyperlinks and get a live summary of metadata
like status (open/closed), assignee, labels, and more.

.. figure:: /images/system/integrations/gitlab/gitlab-integration-page.png
   :alt: Integration page for GitLab
   :align: center
   :width: 90%

.. note:: GitLab integration does not support merge requests.

Setup
-----

1. In your GitLab preferences, create a new API token under **Access Tokens**.

   Under **Select scopes**, choose ``read_api`` only.

   .. figure:: /images/system/integrations/gitlab/add-api-token-gitlab.gif
      :alt: Screencast showing how to create a new API token
      :align: center
      :width: 90%

   .. hint:: 🔒 **If you wish to link issues on any private repos...**

      Your API token must belong to an account with access to those repos.

2. Enter your new API token in Zammad and enable GitLab integration.

   .. figure:: /images/system/integrations/gitlab/configure-and-active-gitlab-integration.gif
      :alt: Screencast showing how to configure Zammad’s GitLab integration
      :align: center
      :width: 90%

   .. hint:: Leave the default API endpoint (``https://gitlab.com/api/graphql``) as-is
      unless you’re a self-hosted GitLab user.

Once completed, a new GitLab issues tab will appear in the ticket pane. 🎉

Troubleshooting
---------------

Token verification is taking a long time
   Slight delays are normal (<2 min.), especially for systems under heavy load.

   Self-hosted administrators, please check your network settings
   to ensure that your Zammad server can reach gitlab.com.

I reloaded the page and now the API token is gone
   This may indicate that Zammad is still verifying your API token.
   Try reloading the page again in a couple minutes.
