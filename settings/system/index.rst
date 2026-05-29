System
======

To configure system related settings under *Settings > System*, the
permission ``admin.system`` is required. The configuration in Zammad is split
into tabs. This is reflected in this documentation by having a sub-page for
each of the tabs:

.. toctree::
   :maxdepth: 1

   /settings/system/base
   /settings/system/services
   /settings/system/storage
   /settings/system/network
   /settings/system/frontend

.. note:: SaaS customers of Zammad only have access to **Services** and
   **Frontend**. The other settings aren't accessible because we're handling
   these for you to ensure service stability.

Additionally, there are console based settings which aren't accessible from
Zammad's UI. Although they are meant for special use cases, they could be
helpful. You can find them in our
:docs:`advanced customization section in the system documentation </admin/console/hidden-settings.html>`.
