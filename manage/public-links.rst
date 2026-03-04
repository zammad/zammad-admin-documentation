Public Links
============

Public links allow you to provide important links at different places
within the UI of Zammad. This allows you not just to provide legal information
like e.g. data privacy or contact information. You can also provide further
useful links to other services if needed.

.. figure:: /images/manage/public-links/public-links-management.png
   :alt: Screenshot showing the public links management interface within
         the settings

.. _public_links_add_new:

Adding New Public Links
-----------------------

You can add new public links via the *New Public Link*  button on the upper
right. You'll see a new dialog where you can provide the following information:

Link
   This is the actual target page you're linking to. Zammad only allows URLs
   that start with either ``http://`` or ``https://``.

   .. important::

      Do not use data privacy and terms of service URLs of ``zammad.com``
      or ``zammad.org``. Every company handles it differently, so there is no
      standardized approach to data retention and other policies.
      This function was made to allow you to link to your *own resources*.

Title
   This is the regular text your user sees as the link text.
   You may want to keep the title as short as possible as it's displayed in
   the footer of the context you'll later select.

Description
   The description for URLs is an accessibility feature that helps users with
   screen readers to better understand the scope of the URL. It will also be shown
   by normal browsers when hovering over the link in question.

   Use this to describe the link.
   This value is *optional*.

Context
   The context setting allows you to choose one or several places where this link
   should be displayed. Depending on your choice, Zammad will then show the
   links on the relevant pages.

   You can currently select from:

      * Forgot Password Screen
      * Login Screen
      * Signup Screen

   To help you understand scopes better, here's the different scopes as a
   screenshot. Note that we intentionally did set all links for all contexts. 🤓

      .. tabs::

         .. tab:: Login Screen

            .. figure:: /images/manage/public-links/public-links_login-page.png
               :alt: Screenshot showing Zammad's forgot password page with custom
                     public links
               :height: 540px

         .. tab:: Forgot Password Screen

            .. figure:: /images/manage/public-links/public-links_forgot-password.png
               :alt: Screenshot showing Zammad's login page with custom public
                     links
               :height: 220px

         .. tab:: Signup Screen

            .. figure:: /images/manage/public-links/public-links_signup-page.png
               :alt: Screenshot showing Zammad's signup page with custom public links
               :height: 320px

Display in new tab
   This setting allows you to determine if the user's browser opens the URL in
   a new tab or within the existing tab.

   Default: ``yes``

.. _public_links_manage_existing:

Manage Existing Public Links
----------------------------

.. _public_links_rearrange:

Re-arrange Links
^^^^^^^^^^^^^^^^

By default Zammad sorts your public links in the order you've created them.
That may be a problem if you add a link later on. For this reason you can
easily change the link order by dragging them to another position by using
the ≣ handle.

These changes are applied immediately.

.. _public_links_actions:

Actions for Existing Links
^^^^^^^^^^^^^^^^^^^^^^^^^^

Updating existing entries
   Got a typo in your URL or title? Want to change the context the link is
   being shown on? No problem! Just click on the affected link title and adjust
   the entry as needed.

   You'll be given the same options as you have during the link creation.

Cloning & Removing
   If you want to add a new link that's very similar to an existing one, simply
   click on ⋮ and select *Clone*.

   Zammad will open a new public link dialog with the existing settings
   filled in.

   If you no longer need a public link, you can **remove** it by using ⋮ and
   selecting *Delete*. Zammad will ensure that you really want to remove the
   entry with a modal. Be aware that the deletion is **final**. There's no
   way to bring back removed public links.

   .. figure:: /images/manage/public-links/public-links-action-menu.png
      :alt: Screenshot showing the ⋮ action menu in public links
