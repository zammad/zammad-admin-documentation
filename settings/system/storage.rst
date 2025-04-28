Storage
=======

.. include:: /settings/system/system-selfhosted.include.rst

Here you can define where Zammad stores attachments for tickets and the
knowledge base. By default, we're writing to the ``Database`` - you can switch
to ``Filesystem`` or ``Simple Storage (S3)`` at any time. In this case please
have a look on the following instructions.

If you have a busy Zammad instance, we strongly encourage you to use filesystem
storage instead of "Database".
This will greatly improve system performance (de-crease database load
and size).

Database
   This is the default storage method. The attachments are stored directly in
   the database. If your Zammad instance grows, we recommend one of the other
   methods to maintain performance.

Filesystem
   This storage method is recommended for all Zammad instances, especially
   for those with a higher load. If you choose filesystem, your files are
   written to ``/opt/zammad/storage/``.

   Moving attachments from "Database" to "Filesystem" can be run during
   production use. However, you should consider your framework conditions
   (e.g. bandwidth, system load in production) to define the right moment.

   .. note::

      **You noticed slow updates of Zammad?**

      While Zammad is beeing updated, it enforces a recursive "change owner"
      (chown) for this directory. For instances with many files this can
      be time consuming. To mitigate that you can move your files and create a
      symlink in ``/opt/zammad/storage/`` to the new directory. Of course you
      have to make sure on your own that the permissions are always correct.

Simple Storage (S3)
   To use the Simple Storage (S3), you have to provide some settings, which
   can't be accessed in the UI (see instructions below).

   .. warning:: ⚠️ Please note that the current implementation is in its early
      stages and can be modified in the future.

   The prerequisite is to have access to a S3-compatible storage and to have all
   necessary parameters available (which depends on your storage provider; if
   in doubt, please ask there for help).

   Steps to configure S3:

   1. Copy ``config/zammad/storage.yml.dist`` to ``config/zammad/storage.yml``
   2. Edit the copied file in one of the following ways:

     - Either provide your S3 configuration with one attribute per line like in
       the upper area of the file
     - Or provide your S3 configuration as an URL (which you can find at the
       end of the file). Note: you can also provide this URL as environment
       variable (:docs:`see system documentation </appendix/configure-env-vars.html#storage-options>`)
       without using this yml-file.
     - We recommend the deletion of the not used configuration style to avoid
       inconsistencies.

   3. Restart Zammad so the config file / environment variable is loaded
   4. Set the "Storage Method" in Zammad to ``Simple Storage (S3)`` in
      Settings > System > Storage and click on "Submit". After that, Zammad
      checks your configuration and the connection to the service and will raise
      an error message if something is wrong.


   A very simple storage configuration could look like this:

   .. code::

      s3:
         access_key_id: 'xxxxxxxx'
         secret_access_key: 'yyyyyyy'
         region: 's3-us-west-2'
         endpoint: 'https://zammad.s3.us-west-2.amazonaws.com'
         bucket: 'zammad'


   .. hint::

      If you use a non-AWS S3 setup (e.g. Backblaze), add the following
      parameters in case of problems:

      .. code::

         request_checksum_calculation: when_required
         response_checksum_validation: when_required

   .. tip::

      Before setting the storage method to ``Simple Storage (S3)`` (step 4),
      please make sure to have a working setup.

      You can verify this by running
      ``rails r 'Rails.logger = Logger.new(STDOUT); pp Store::Provider::S3.ping?'``
      in your Zammad directory. If everything is fine, you should see ``true``,
      else you should see ``false`` and a simple error message.

      If you installed Zammad through a package manager (rather than from source),
      replace ``rails r`` with ``zammad run rails r`` above.
      To learn more, see :docs:`Administration via Console </admin/console.html>`.

