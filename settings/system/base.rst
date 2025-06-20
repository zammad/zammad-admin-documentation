Base
====

.. include:: /settings/system/system-selfhosted.include.rst

Fully Qualified Domain Name
   The URL of your Zammad installation.

   This setting is used within :doc:`/misc/variables` and notifications.

   .. include:: /settings/system/system-base.include.rst

HTTP type
   The HTTP type tells if your installation is accessible with transport layer
   security (``https``) or not (``http``).

   This setting is used within :doc:`/misc/variables` and notifications.

   .. include:: /settings/system/system-base.include.rst

SystemID
   This ID is being used within your ticket number.
   In case you're communicating with another ticket system with similar
   ticket number schemes this ID greatly reduces the risk of false follow ups.

   The SystemID is randomly selected upon installation of Zammad (``1-99``).

   .. warning::

      **Do not** change this setting in a productive system!
      Your Zammad installation may no longer recognize old ticket number based
      follow ups upon change!
