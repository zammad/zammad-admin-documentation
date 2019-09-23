Config (System-Variables)
************************

.. Note:: If you're missing variables or are not sure if something is not working as expected, feel free to ask over at the `Community <https://community.zammad.org>`_.

Below you'll find config related variables.
These hold useful configuration information that you can use within e.g. triggers to show necessary information to your customer.

.. csv-table:: Config System-Variables
   :header: "name", "variable", "example"
   :widths: 20, 10, 20

   "Config > Fully Qualified Domain Name", "``#{config.fqdn}``", ""
   "Config > Ticket Hook", "``#{config.ticket_hook}``", ""
   "Config > HTTP type", "``#{config.http_type}``", ""
   "Config > SystemID", "``#{config.system_id}``", ""
   "Config > Organization", "``#{config.organization}``", ""
   "Config > Product Name", "``#{config.product_name}``", ""


