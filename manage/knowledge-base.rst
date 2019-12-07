Knowledge Base
**************

Publish your own library of FAQs, how-tos, internal SOPs and more with the
**knowledge base**.

.. figure:: /images/manage/knowledge-base-demo.png
   :alt: Sample Knowledge Base Index
   :align: center

   See a live demo at https://support.zammad.com/help.

.. hint:: This document describes how to ⚙ **configure** the knowledge base.

   For details on how to ✍️ **use and edit** it, please refer to the
   `Zammad Agent docs <https://user-docs.zammad.org/en/latest/extras/knowledge-base.html>`_.

   By default, only admin users are permitted to create, edit, and manage knowledge base articles.
   See :doc:`roles` for details on how to grant write access to agents or other users.

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
publish in:

.. figure:: /images/manage/knowledge-base-setup.png
   :alt: Knowledge Base: Initial setup
   :align: center

   You must choose at least one. (Don’t worry, you can always change them later!)

Read on for details about each section of the knowledge base configuration.

Theme
^^^^^

.. figure:: /images/manage/knowledge-base-theme.png
   :alt: Knowledge Base: Configure theme
   :align: center

   🎨 Customize the appearance of the knowledge base.

:Icon & Link Color: Applies to all **category & article** entries in
                    knowledge base menus, as well as hyperlinks in articles.

:Header Color:      Applies to the area surrounding the search bar.

:Icon Set:          Defines the selection of icons that may be used when
                    creating/editing categories.

                    Each category in the knowledge base *must* be given an icon.
                    Icons appear prominently in the main menu, like so:

                    .. figure:: /images/manage/knowledge-base-icons.png
                       :alt: Knowledge Base: Icons
                       :align: center

                    .. warning:: 🤦‍♀️ Re-assigning icons on all of your categories is tedious work.
                       It’s advisable to explore your options early
                       to avoid having to change your mind down the road.

Languages
^^^^^^^^^

.. figure:: /images/manage/knowledge-base-languages.png
   :alt: Knowledge Base: Configure languages
   :align: center

   🌍 Add or remove locales, or reassign the default.

The knowledge base will automatically display the language matching each visitor’s locale.
Visitors may always manually switch to another language via a dropdown menu in the footer.

The default locale is displayed when the visitor’s locale is not supported.

Articles that have not yet been translated into a given language will be hidden from that locale.

Public Menu
^^^^^^^^^^^

.. figure:: /images/manage/knowledge-base-public-menu.png
   :alt: Knowledge Base: Configure public menu
   :align: center

   🧭 Customize the nav menu that appears in the header of the knowledge base.


.. hint:: ``Target`` let's you decide if you want the link to be opened within a new
   browser tab upon click or not.

Use this section to unify the knowledge base with your own website’s main navigation.
Entries added here will appear in the knowledge base like so:

.. figure:: /images/manage/knowledge-base-public-menu-result.png
   :alt: Knowledge Base: Public menu
   :align: center

Custom URL
^^^^^^^^^^

.. note:: This feature is only available on **self-hosted** instances.

.. figure:: /images/manage/knowledge-base-custom-url.png
   :alt: Knowledge Base: Configure custom URL
   :align: center

   📍 Relocate the knowledge base to the URL of your choosing.

By default, the knowledge base will appear
at the same domain as your Zammad instance, under ``/help``.

If you wish to customize where it can be accessed,
enter your desired URL here and configure your web server as described
(instructions provided for Apache and NGINX only).

Delete
^^^^^^

.. figure:: /images/manage/knowledge-base-delete.png
   :alt: Knowledge Base: Delete knowledge base
   :align: center

   🗑️ Permanently delete the knowledge base and all the articles within it.

Use this panel to delete the knowledge base.
If you wish to unpublish it without deleting all its content,
simply disable it via the toggle button at the top of the window instead.
