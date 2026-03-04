Gitlab
======

It is possible to create a quick login for your helpdesk via Gitlab.
To activate the quick login, you need to enable OAuth for Gitlab.

Register Gitlab App
-------------------

To register an app in Gitlab, open your profile and select applications.

As callback URL, enter ``https://zammad-fqdn/auth/gitlab/callback``
where ``zammad-fqdn`` has to be replaced with your Zammad FQDN. You can even
find and copy the callback URL from Zammad in the **Authentication via GitLab**
section.

.. image:: /images/settings/security/third-party/gitlab/zammad_connect_gitlab_thirdparty_gitlab.png
   :alt: Register OAuth app on gitlab instance

Just select *read_user* under scopes as in the screenshot and save it.

Configure Zammad as Gitlab App
------------------------------

Enter the **APP ID** and the **APP SECRET** from the Gitlab OAUTH Applications
Dashboard and your Gitlab-URL in the **SITE** field.

.. image:: /images/settings/security/third-party/gitlab/enable-authentication-via-gitlab-in-zammad.png
   :alt: Gitlab config in Zammad admin interface

After you configured the Gitlab credentials and activated the login method, you
should see a new icon on the login page.

.. image:: /images/settings/security/third-party/gitlab/zammad_connect_gitlab_thirdparty_login.png
   :alt: Gitlab logo on login page

If you click on the icon, you will be redirected to Gitlab and see something
similar to this:

.. image:: /images/settings/security/third-party/gitlab/zammad_connect_gitlab_thirdparty_gitlab_authorize.png
   :alt: Gitlab oauth page

After granting access, you will be redirected to your Zammad instance
and logged in.

Now you can link accounts via *Avatar > Profile > Link Accounts* or login
via Zammad login page.