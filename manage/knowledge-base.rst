Knowledge Base
==============

Publish your own library of FAQs, how-tos, internal processes and more with the
**knowledge base**.

This document describes how to **configure** the knowledge base. For details
on how to **use and edit** it, please refer to the
:user-docs:`Zammad User Documentation </extras/knowledge-base.html>`.

.. figure:: /images/manage/knowledge-base/knowledge-base-demo.png
   :alt: Sample Knowledge Base Index
   :align: center

   See a live demo at https://support.zammad.com/help.

By default, only admin users are permitted to create, edit, and manage
knowledge base articles. See :doc:`roles/index` for details on how to
grant write access to agents or other users.

.. note:: The knowledge base will not appear in the main menu until it has been
   enabled in the admin panel.

Features
--------

* 🌍 Multi-language support
* 🙈 Visibility settings (**draft**, **staff-only**, or **public**)
* 🔍 Full text search
* 📅 Scheduled publishing
* 📎 File attachments
* 🔗 Wiki-style internal linking to both 💡 **KB answers** and 📋 **tickets**
* 🖼️ Rich text editor + embedded images

Setup
-----

To enable the knowledge base, first select the languages/locales you wish to
publish in and click on the **Create Knowledge Base** button.

.. figure:: /images/manage/knowledge-base/knowledge-base-setup.png
   :alt: Knowledge Base: Initial setup
   :align: center

   You must choose at least one.
   (Don't worry, you can always change them later!)

Read on for details about each section of the knowledge base configuration.

Theme
^^^^^

.. figure:: /images/manage/knowledge-base/knowledge-base-theme.png
   :alt: Knowledge Base: Configure theme
   :align: center

   Customize the appearance of the knowledge base.

:Icon & Link Color:
   Applies to all **category & article** entries in knowledge base menus,
   as well as hyperlinks in articles.

:Header Color:
   Applies to the area surrounding the search bar.

:Header Link Color:
   Defines the color of the header links to use.
   Make sure that this color has a proper contrast to *Header Color*.

:Show Feed Icon:
   You can enable Zammad to provide RSS feed URLs in both internal and public
   knowledge base. With this option being active, Zammad will provide you
   up to two RSS links:

      * a general RSS feed of the whole knowledge base (top level)
      * a category specific RSS feed of the category you're in
        (also applies to answers you're viewing)

   This setting by default is set to ``no``.

   .. hint::

      Your agents will receive special RSS feed URLs with **access tokens**.
      Agents can always renew these. Keep in mind that sharing these URLs
      with third parties may provide access to **internal** answers!

:Icon Set:
   Defines the selection of icons that may be used when creating/editing
   categories.

   Each category in the knowledge base *must* be given an icon.
   Icons appear prominently in the main menu, like so:

   .. figure:: /images/manage/knowledge-base/knowledge-base-icons.png
      :alt: Knowledge Base: Icons
      :align: center

   Re-assigning icons on all of your categories is tedious work.
   It's advisable to explore your options early to avoid having to change
   your mind down the road.

Languages
^^^^^^^^^

.. figure:: /images/manage/knowledge-base/knowledge-base-languages.png
   :alt: Knowledge Base: Configure languages
   :align: center

   Add or remove locales, or reassign the default.

The knowledge base will automatically display the language matching each
visitor's locale. Visitors may always manually switch to another language via
language selection menu in the header.

The default locale is displayed when the visitor's locale is not supported.

Articles which are not yet translated into a given language will be hidden
when the language is selected by the reader.

Public Menu
^^^^^^^^^^^

Use this section to unify the knowledge base with your own website's main
navigation. Entries added here will appear in the knowledge base like in the
following screenshot:

.. figure:: /images/manage/knowledge-base/knowledge-base-public-menu-result.png
   :alt: Knowledge Base: Public menu
   :align: center

Zammad will provide a list of the current set links per knowledge base language.
If you're missing a language, you'll have to add the language up front.

You can adjust every URL on language level.

.. figure:: /images/manage/knowledge-base/knowledge-base-public-menu.png
   :alt: Knowledge Base: Configure public menu
   :align: center

   Customize the navigation menu that appears in the header of your
   knowledge base.

Arranging URLs
   By clicking on "Edit", Zammad allows you to add, update, re-arrange or
   remove URLs from either your public header menu or public footer menu.

   Title
      This is the URL title that's being displayed to your users.

   URL
      The actual URL the user is going to open upon clicking.

   Target
      Allows you to tell your users browser to open the URL in a new tab.
      By default your user would leave the knowledge base page if not set.

   Delete
      If you tick the delete field, the URL will be removed from the menu upon
      pressing on the "Submit" button.

   Change URLs position
      Use ☰ to drag & drop the URLs in question to the new desired position.
      Your changes will be saved with pressing the "Submit" button.

Custom URL
^^^^^^^^^^

.. note:: This feature is only available on **self-hosted** instances.

.. figure:: /images/manage/knowledge-base/knowledge-base-custom-url.png
   :alt: Knowledge Base: Configure custom URL
   :align: center

   Relocate the knowledge base to the URL of your choosing.

By default, the knowledge base will appear at the same domain as your Zammad
instance, under ``/help``.

If you wish to customize where it can be accessed, enter your desired URL here
and configure your web server accordingly. Zammad provides a snippet for Apache
and Nginx webserver after clicking the **Web Server Configuration**.

You can find a tutorial about how to use a
:docs:`custom knowledge base URL in combination with Nginx proxy manger (NPM) </appendix/custom-kb-url.html>`
in the system documentation.

Delete
^^^^^^

.. figure:: /images/manage/knowledge-base/knowledge-base-delete.png
   :alt: Knowledge Base: Delete knowledge base
   :align: center

   Permanently delete the knowledge base and all the articles within it.

Use this panel to delete the knowledge base.
If you wish to unpublish it without deleting all of its content,
simply disable it via the toggle button at the top of the window instead.

Permissions
-----------

The general access to the knowledge base is managed via
``knowledge_base.reader`` and ``knowledge_base.editor`` permissions. You can
find more information about roles and permissions
:doc:`here <roles/index>`.

If you want to grant more granular permissions than the global read/edit
permissions (e.g. edit permissions only for specific parts of the knowledge
base), you can do so by following the steps below:

- First create the base structure of the knowledge base (if not already done)
- Create or choose one or more roles which should have granular permissions
- Grant the ``knowledge_base.reader`` permission to the desired role(s)
- Edit the permissions of each (sub-)category of the knowledge base
- Assign the role to one or more users who should be able to edit the knowledge
  base (partially)

.. note::

   - The permissions of a parent category are inherited to sub-categories.
   - The permission ``knowledge_base.reader`` can be widened or restricted in
     sub-categories.
   - The permission ``knowledge_base.editor`` **can't** be adjusted in
     sub-categories.
   - Have a look at the
     :user-docs:`knowledge base section </extras/knowledge-base.html>` in
     the user documentation where you can find more information about the usage.


