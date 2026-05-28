Base
====

The first two settings got automatically set by the *Getting Started wizard*.
Be aware that changing these settings also changes callback URLs for your
channels etc. It can even lead to being no longer able to login.

Fully Qualified Domain Name
   The URL of your Zammad installation.

   This value is used by :doc:`/misc/variables` and in notifications.

HTTP type
   The HTTP type tells if your installation is accessible with transport layer
   security (``https``) or not (``http``).

   This value is used by :doc:`/misc/variables` and in notifications.

SystemID
   This ID is being used within your ticket number.
   In case you're communicating with another ticket system with similar
   ticket number schemes, this ID greatly reduces the risk of false follow ups.

   The SystemID is randomly selected upon installation of Zammad (``1-99``).

   .. warning::

      **Do not** change this setting in a productive system!
      Your Zammad installation may no longer recognize old ticket number based
      follow ups upon change!
