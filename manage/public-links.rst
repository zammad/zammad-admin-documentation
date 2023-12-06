Public Links
************

Public links allow you to provide important links at different places
within the UI of Zammad. This allows you not just to provide legal information
like e.g. data privacy or contact information. You can also provide further
useful links to other services if needed.

.. figure:: /images/manage/public-links/public-links-management.png
   :alt: Screenshot showing the public links management interface within
         the settings

See here:
   * :ref:`public_links_add_new`
   * :ref:`public_links_manage_existing`

      * :ref:`public_links_rearrange`
      * :ref:`public_links_actions` (Cloning & Removing)

--------------------------------------------------------------------------------

.. _public_links_add_new:

Adding new public links
-----------------------

You can add new public links via the *New Public Link*  button on the upper
right. You'll see a new dialogue that consists of the following information.

Link
   This is the actual target page you're linking to.

   .. note::

      Zammad only allows URLs that start with either
      ``http://`` or ``https://``.

   .. important::

      You may not use data privacy and terms of service URLs of ``zammad.com``
      nor ``zammad.org``.

      Why?
         Every instance is special on its own. Every hosting is different,
         data retention and other things do not fit as every company using
         Zammad handles these matters differently.

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

        .. note::

           This context *does not* affect the :ref:`security_password_login`
           function.

      * Login Screen
      * Signup Screen

   To help you understand scopes better, here's the different scopes as a
   screenshot. Note that we intentionally did set all links for all contexts. 🤓

      .. tabs::

         .. tab:: Forgot Password Screen

            .. figure:: /images/manage/public-links/public-links_login-page.png
               :alt: Screenshot showing Zammad's forgot password page with custom
                     public links
               :height: 540px

         .. tab:: Login Screen

            .. figure:: /images/manage/public-links/public-links_forgot-password.png
               :alt: Screenshot showing Zammad's login page with custom public
                     links
               :height: 220px

         .. tab:: Signup Screen

            .. figure:: /images/manage/public-links/public-links_signup-page.png
               :alt: Screenshot showing Zammad's signup page with custom public links
               :height: 320px

Display in new tab
   This setting allows you to determine if Zammad should tell the browser
   to either open the URL in a new tab or within the existing tab.

   | Opening URLs in the same tab may cause inconvenience to the user.
   | Default: ``yes``

.. _public_links_manage_existing:

Manage existing public links
----------------------------

.. _public_links_rearrange:

Re-arrange links
~~~~~~~~~~~~~~~~

By default Zammad sorts your public links in the order you've created them.
That may be a problem if you add a link later on. For this reason you can
easily change the link order by dragging them to another position.

These changes are affective immediately.

.. figure:: /images/manage/public-links/public-links_rearrange-links.gif
   :alt: Screencast showing re-arranging public links by using drag & drop

.. _public_links_actions:

Actions for existing links
~~~~~~~~~~~~~~~~~~~~~~~~~~

Updating existing entries
   Got a typo in your URL or title? Want to change the context the link is
   being shown on? No problem! Just click on the affected link title and adjust
   the entry as needed.

   You'll be given the same options as you have during the link creation.

Cloning
   If you want to add a new link that's very similar to an existing one, simply
   click on ⋮ and select *Clone*.

   Zammad will open a new public link dialogue with the existing settings
   filled in.

   .. figure:: /images/manage/public-links/public-links_clone-links.gif
      :alt: Screencast showing the public link cloning via ⋮ Actions → Clone

Removing
   If you no longer require a public link, you can remove it by using ⋮ and
   selecting *Delete*. Zammad will ensure that you really want to remove the
   entry with a modal.

   .. danger::

      Deleting is **final**. There's no way to bring back removed public links.

   .. figure:: /images/manage/public-links/public-links_delete-links.gif
      :alt: Screencast showing the public link removal via ⋮ Actions → Delete
