Sessions
********

Sessions management allows reviewing currently known user sessions and allows
to end these.

.. TODO: .. image:: /

.. hint::

   This page indirectly is affected by :ref:`security_session_timeout`
   configurations from security settings.

Zammad will provide the following information:
   
   User
      The user account this session entry belongs to. It can be normal if a user
      has several sessions in the list. This can be due to changed browser
      information or if you use e.g. single sign on methods where the user does
      not use the log off button.

   Browser
      The browser agent communicated to Zammad.

   Location
      The anticipated location based on the users IP address. Depending on the
      IP address the result shown may differ. This option depends on
      :doc:`/settings/system/services`.

      The following information can be shown:

      IP address
         Either if you set *Geo IP services* to inactive or you're using
         internal IP address which do not provide location information.

      Country (or Country + City)
         If *Geo IP services* is enabled only. Depends on how detailed the
         available IP address information are.

         .. note::

            Depending on how long the address is assigned to a specific country
            the result may differ. Results can be inaccurate - this technically
            is not an error.

   Age
      Provides the time when the session initially has been created.

   Update
      Provides the time the user last used this session to open Zammad.
      This timestamp is only updated if the user e.g. reloads, not during
      normal work on tickets.

      .. hint::

         This timestamp is being used for the session timeout.

   Action
      Use the delete button to remove a single session on behalf of your user.
