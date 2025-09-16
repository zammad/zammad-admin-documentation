GitLab
======

Use GitLab integration to track GitLab issues directly within Zammad tickets.
Add links to issues and get meta information like status (open/closed),
assignee, labels and more.

Please note that our GitLab integration does not support merge requests.

.. figure:: /images/system/integrations/gitlab/gitlab-integration-page.png
   :alt: Integration page for GitLab
   :align: center
   :width: 90%

Setup
-----

1. Create a new API token in GitLab. Zammad supports the usage of a
   `group access token <https://docs.gitlab.com/user/group/settings/group_access_tokens/>`_,
   a `project access token <https://docs.gitlab.com/user/project/settings/project_access_tokens/>`_
   and a `personal access token <https://docs.gitlab.com/user/profile/personal_access_tokens/>`_.
2. Add a name, set an expiration date and set the permission ``read_api``.
3. Enter your new API token in Zammad and enable the GitLab integration.
   Use the default API endpoint (``https://gitlab.com/api/graphql``)
   unless you're a self-hosted GitLab user.

.. hint:: 🔒 **If you wish to link issues on any private repos...**

   Your API token must belong to an account with access to those repos.

.. include:: /includes/ssl-verification-warning.rst

Once completed, a new GitLab issues tab will appear in the ticket pane. 🎉

Troubleshooting
---------------

Token verification is taking a long time
   Slight delays are normal (<2 min.), especially for systems under heavy load.

   Self-hosted administrators, please check your network settings
   to ensure that your Zammad server can reach ``gitlab.com``.

I reloaded the page and now the API token is gone
   This may indicate that Zammad is still verifying your API token.
   Try reloading the page again in a couple minutes.
