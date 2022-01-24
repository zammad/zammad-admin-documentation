Storage
*******

.. include:: /settings/system/system-selfhosted.include.rst

Storage Mechanism
   This tells Zammad where to store attachments for tickets and knowledge base.

   By default we're writing to the ``Database`` - you can switch to
   ``Filesystem`` at any time. If you chose filesystem, your files are
   written to ``/opt/zammad/storage/``

   .. note::

      We strongly encourage you to use filesystem storage on busy instances.
      This will greatly improve system performance (de-crease database load
      and size).

   .. tip::

      Moving attachments from Database to Filesystem can be run during
      production use.
