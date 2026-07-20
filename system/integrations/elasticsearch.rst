Elasticsearch (SaaS)
====================

The Elasticsearch (SaaS) integration lets you query your instance's
search index directly with a reporting tool such as
:docs:`Grafana </appendix/reporting-tools-thirdparty/grafana.html>`.
You can find it under *System > Integrations > Elasticsearch*.

.. note::

   Only available for **SaaS** customers with a **Plus** or **Ultimate** plan.
   Self hosted customers already have full control over their own Elasticsearch
   instances and do not need this integration.

.. warning:: **The index contains all ticket and customer data. Keep the
   credentials secret!** The index includes ticket, user and
   organization records from your instance, including sensitive customer
   information. Anyone with the credentials can read them.

.. figure:: /images/system/integrations/elasticsearch/elasticsearch-configuration.png
   :width: 70%
   :align: center
   :alt: Elasticsearch integration page on SaaS environments

The integration has the following limitations:

- Access to the search index is read-only. That means reporting tools that need
  to write to the indexes (such as Kibana) are not supported.
- You can create credentials for one user only.
- The integration cannot be restricted to a specific IP allowlist.
  Suspicious access is blocked on the hosting side without any configuration
  required from you.

Enabling Access
---------------

External access to your instance's search index is disabled by default.
To enable it, simply activate the toggle on top of the page.
After some seconds, a one-time dialog with the Elasticsearch username and
password shows up. Note the password down, it is displayed only once.

The page also shows **Connection Settings**, **Available Indexes** and
**Credentials** sections. This is read-only information for your reference.
The only other interactive control is ``Reset password``. Doing so prompts you
for confirmation, then invalidates the current password and shows the new one
in a one-time dialog.

Browsing Indexes
----------------

The page's **Available Indexes** table lists five indexes that are most useful
for reporting, each shown with its full name including the per-instance index
prefix:

- ``<index-prefix>_production_ticket``
- ``<index-prefix>_production_chat_session``
- ``<index-prefix>_production_cti_log``
- ``<index-prefix>_production_user``
- ``<index-prefix>_production_organization``

To browse all available indexes, you can open the Elasticsearch URL in your web
browser with appended ``/_aliases?pretty=true`` (resulting in
``https://<your-es-url>/_aliases?pretty=true``). Enter the credentials shown
above and you will see a response listing all available aliases. The
structure looks like this:

.. code-block:: json

   {
      "XXXX_ticket": {
         "aliases": { }
      },
      "XXXX_user": {
         "aliases": { }
      }
   }

.. note:: Index names, field names and the alias list reflect
   Zammad's internal search-index schema. They may change between
   Zammad releases.
