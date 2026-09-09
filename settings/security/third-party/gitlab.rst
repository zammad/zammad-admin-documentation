GitLab
======

Configure GitLab as an authentication provider so users can log in to Zammad
with their GitLab account. This works with GitLab.com and with self-hosted
GitLab instances. For details about OAuth applications, see the `GitLab
documentation
<https://docs.gitlab.com/integration/oauth_provider/>`_.

Register a GitLab App
---------------------

Create the Application
^^^^^^^^^^^^^^^^^^^^^^

In GitLab, select your avatar and go to *Edit profile > Access >
Applications*, then select ``Add new application``. Provide the following
information:

**Name**
   Enter a name for your application, for example Zammad.

**Redirect URI**
   Enter ``https://zammad.domain.tld/auth/gitlab/callback`` and replace
   ``zammad.domain.tld`` with the FQDN of your Zammad instance. You can also
   copy the callback URL from the **Authentication via GitLab** section in
   Zammad's admin settings.

**Scopes**
   Select **read_user**. Zammad only needs read access to the user's
   profile data, which includes the email address used to match logins to
   existing accounts.

Finally, select ``Save application``.

Get Your App Credentials
^^^^^^^^^^^^^^^^^^^^^^^^

After saving, GitLab displays the **Application ID** and the **Secret**.
Note both down. The secret is shown only once, but you can generate a new
one with ``Renew secret`` at any time. You can retrieve the values later in
this **Applications** screen.

Configure Zammad
----------------

Navigate to *Settings > Security > Third-party Applications* and scroll to
the **Authentication via GitLab** section. Enter your **App ID**,
**App Secret**, and your GitLab URL in the **Site** field, enable the
toggle, and click ``Submit``.

After submitting, the GitLab button appears on the login page and users can
log in with their GitLab account. On first login, GitLab asks them to
authorize the access.
