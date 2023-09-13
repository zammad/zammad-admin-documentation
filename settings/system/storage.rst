Storage
*******

.. include:: /settings/system/system-selfhosted.include.rst

Storage Mechanism
   This tells Zammad where to store attachments for tickets and knowledge base.

   By default we're writing to the ``Database`` - you can switch to
   ``Filesystem`` at any time. If you chose filesystem, your files are
   written to ``/opt/zammad/storage/``

   .. note::

      🤔 **But which one to use?**

      We strongly encourage you to use filesystem storage on busy instances.
      This will greatly improve system performance (de-crease database load
      and size).

      **You noticed slow updates of Zammad?**

      While Zammad is beeing updated, it enforces a recursive "change owner"
      (chown) for this directory. For instances with many files this can
      be time consuming. To mitigate that you can move your files and create a
      symlink in ``/opt/zammad/storage/`` to the new directory. Of course you
      have to make sure on your own that the permissions are always correct.

   .. tip::

      Moving attachments from Database to Filesystem can be run during
      production use.
