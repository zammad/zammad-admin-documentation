Elasticsearch (SaaS)
********************

The Elasticsearch integration allows you to create a read-only user to use
with your favorite reporting tool (e.g. like Grafana).

If you want to take full advantage of the Zammad reporting, have a look at our
:docs:`Grafana </appendix/reporting-tools-thirdparty/grafana.html>` setup page
as well.

.. warning:: **🚧 Hosted environment specific 🚧**

   This integration is only available for Hosted setups.
   In order to use Elasticsearch you'll need the **Plus** subscription.

   Self hosted users have all the control over their self hosted Elasticsearch
   instances.

.. figure:: /images/system/integrations/elasticsearch/elasticsearch-configuration.png
   :width: 70%
   :align: center
   :alt: Elasticsearch integration page on SaaS environments

Limitations
-----------

Please note the following limitations of Elasticsearch access on
hosted environments:

   * access to the Elasticsearch index is read-only access
   * currently you're limited to user only
   * Reporting tools that require to write into the indexes
     (like Kibana) are not supported
   * IP access restriction is currently not yet supported

Activating Elasticsearch access
-------------------------------

By default external access to your Elasticsearch index is not active.
You can enable the integration at any time if needed.

Please ensure to note down the password provided - you won't have access
to it afterwards.

.. figure:: /images/system/integrations/elasticsearch/activate-es-integration.gif
   :width: 85%
   :align: center
   :alt: Screencast showing activation of Elasticsearch integration

Connection Settings
-------------------

This section holds the most important general information for accessing your
Elasticsearch indexes - such as:

URL
   A unique subdomain that does not tell your real instance URL.

Software
   The major version of the search index being used.
   This is required by some Reporting tools like Grafana.

Authentication
   The authentication type being supported. ``Basic Authentication``

Available Indexes
-----------------

Within this section we're displaying the -in our opinion- most important
indexes for a Zammad instance.

.. tip::
   
   If you require all indexes or our listing is not good enough for you,
   point your browser to the URL we're providing and append
   ``/_aliases?pretty=true``. The result should look like so:
   ``https://<URL>.zammad.com/_aliases?pretty=true``.

   Your browser will automatically ask for your credentials - you'll then
   see something like this:

   .. code-block:: json

      {
         "XXXXXXXX" : {
            "aliases" : { }
         },
         "XXXXXXXX_cti_log" : {
            "aliases" : { }
         },
         "XXXXXXXX_knowledge_base_answer_translation" : {
            "aliases" : { }
         },
         "XXXXXXXX_ticket" : {
            "aliases" : { }
         },
         "XXXXXXXX_knowledge_base_category_translation" : {
            "aliases" : { }
         },
         "XXXXXXXX_knowledge_base_translation" : {
            "aliases" : { }
         },
         "XXXXXXXX_ticket_state" : {
            "aliases" : { }
         },
         "XXXXXXXX_user" : {
            "aliases" : { }
         },
         "XXXXXXXX_stats_store" : {
            "aliases" : { }
         },
         "XXXXXXXX_chat_session" : {
          "aliases" : { }
         },
         "XXXXXXXX_group" : {
          "aliases" : { }
         },
         "XXXXXXXX_ticket_priority" : {
            "aliases" : { }
         },
         "XXXXXXXX_organization" : {
            "aliases" : { }
         }
      }

Credentials
-----------

Within this section Zammad displays your available users.
The password is provided once (upon activation) and cannot be retrieved
after that.

   .. note:: **🔐 I need my Elasticsearch user password to be changed**

      Within the credentials table use the "Reset password" button to receive
      a brand new password for the account in question. This change is
      immediate, keep in mind that this may affect third party tools connected
      to your instance.

      🤓 *Above does not change indexes.*
