Elasticsearch (SaaS)
====================

The Elasticsearch (SaaS) integration lets you query your instance's
search index directly with a reporting tool such as
:docs:`Grafana </appendix/reporting-tools-thirdparty/grafana.html>`.

.. note:: **Plan requirements**

   A Plus or Ultimate plan is required. Self hosted customers
   already have full control over their own Elasticsearch
   instances and do not need this integration.

.. warning:: **The index contains all ticket and customer data**

   Treat the credentials like any other administrator password.
   The Elasticsearch index holds every ticket, user and
   organization record in this instance, including customer
   information that may be sensitive. Anyone with the credentials
   can read them all.

.. figure:: /images/system/integrations/elasticsearch/elasticsearch-configuration.png
   :width: 70%
   :align: center
   :alt: Elasticsearch integration page on SaaS environments

The integration page has no other settings - it only lets you
toggle the access on or off. The connection details, indexes and
credentials listed on the page are read-only information for your
reference; the only interactive control is ``Reset password``.

The integration has the following limits worth knowing up front:

- Access is read-only.
- Reporting tools that need to write to the indices (such as
  Kibana) are not supported.
- The integration cannot be restricted to a specific IP allowlist.
  Suspicious access is blocked based on the IP addresses of
  connecting clients; the blocklist is managed on the hosting
  side.

Enabling Access
---------------

External access is disabled by default. To enable it:

1. Open **System > Integrations > Elasticsearch**.
2. Toggle the integration on.
3. Wait for a one-time dialog with the Elasticsearch username and
   password once provisioning completes.
4. Note the password down - it will not be shown again.

The **Credentials** section on the page then holds the username
permanently and a masked password. If you ever need a new
password, click ``Reset password`` in that row; a new password
appears in a one-time dialog. Update any third party tools that
connect with the old password before you forget it.

Browsing Indexes
----------------

The integration creates one Elasticsearch user per instance. The
page's **Available Indexes** table lists five indexes that are
most useful for reporting, each shown with its full name including
the per-instance index prefix:

- ``<index-prefix>_production_ticket``
- ``<index-prefix>_production_chat_session``
- ``<index-prefix>_production_cti_log``
- ``<index-prefix>_production_user``
- ``<index-prefix>_production_organization``

To enumerate every alias the user can see, append
``/_aliases?pretty=true`` to the Elasticsearch URL shown on the
integration page. The full URL looks like
``https://<your-es-url>/_aliases?pretty=true`` - your browser will
prompt for the credentials above. The response lists every alias
the user can see; the example shape is:

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
