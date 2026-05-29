Integrations
============

Zammad offers many integrations that add additional features to your instance.
To configure them under *System > Integrations*, the permission
``admin.integration`` is required.

Integrations for Phone Systems
------------------------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   cti/generic
   cti/placetel
   cti/sipgate

.. hint::

   If your VoIP provider is not listed, it is possible that your provider
   supports Zammad by using the generic CTI integration. If you're unsure, ask
   your provider. If the provider doesn't support Zammad, consider creating a
   `feature request in the Zammad Community <https://community.zammad.org/c/stuff-you-like-zammad-to-have-feel-free-to-discuss-and-add-proposals/6>`_.

Integrations for Authentication and Customers
---------------------------------------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   clearbit
   exchange
   ldap/index
   pgp/index
   smime/index

Integrations for Monitoring Systems
-----------------------------------

.. note::

   - The documentation currently doesn't cover the following integrations:

     - Icinga
     - Monit
     - Nagios
   - For a guide about how to create tickets from Zabbix, head over to the
     :doc:`configuration guide </misc/zabbix>` outside of this integrations
     section.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   checkmk/index

Integrations for Issue Trackers
-------------------------------

.. toctree::
   :maxdepth: 1
   :titlesonly:

   github
   gitlab

Other Integrations
------------------

This section will hold any other integration that can't be grouped up (yet).

.. toctree::
   :maxdepth: 1
   :titlesonly:

   i-doit
   elasticsearch
