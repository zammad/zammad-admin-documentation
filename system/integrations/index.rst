Integrations
============

Zammad offers numerous integrations that add rich features to your instance.

Integrations for Phone Systems
------------------------------

.. hint::

   Your VoIP provider or telephony system is not listed?
   Possibly your provider supports Zammad by using the generic CTI - if you're
   unsure ask your provider.

   Provider does not support Zammad?
   Consider creating a
   `feature request in the Zammad Community <https://community.zammad.org/c/stuff-you-like-zammad-to-have-feel-free-to-discuss-and-add-proposals/6>`_.

.. toctree::
   :maxdepth: 1
   :titlesonly:

   cti/generic
   cti/placetel
   cti/sipgate

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

   slack
   i-doit
   elasticsearch
