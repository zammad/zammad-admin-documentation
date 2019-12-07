Config
******

.. note:: If you're missing variables or are not sure if something is not working as expected, feel free to ask over at the `Community <https://community.zammad.org>`_.

Below you'll find config related variables.
These hold useful configuration information that you can use within e.g. triggers to show necessary information to your customer.

The below list gives you an example what kind of data you can expect, it's not intended to explain the data itself.

.. csv-table:: Config Variables
   :header: "name", "variable", "example"
   :widths: 20, 10, 20

   "Config > Fully Qualified Domain Name", "``#{config.fqdn}``", "``zammad.example.com``"
   "Config > Ticket Hook", "``#{config.ticket_hook}``", "``Ticket#``"
   "Config > HTTP type", "``#{config.http_type}``", "``https`` or ``http``"
   "Config > SystemID", "``#{config.system_id}``", "``31`` (value between 1 and 99)"
   "Config > Organization", "``#{config.organization}``", "``Zammad GmbH`` value set in `Branding <https://admin-docs.zammad.org/en/latest/settings-branding.html>`_"
   "Config > Product Name", "``#{config.product_name}``", "``Helpdesk`` value set in `Branding <https://admin-docs.zammad.org/en/latest/settings-branding.html>`_"
