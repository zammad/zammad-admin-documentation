Avatars
=======

User avatars in Zammad can come from several sources. Whenever a new
avatar is fetched from any of them, the user's avatar is updated.
Already saved avatars are kept on the user, even if the configured
image service gets disabled afterwards.

Sources
-------

User avatars are populated from the following sources, in this order
of preference:

- OAuth login providers (e.g. Microsoft, Google, GitHub, Facebook,
  GitLab) supply the avatar URL on sign-in when the provider exposes
  one. Zammad stores this URL on the user and fetches the image.

- The :doc:`Zammad Image Service </settings/system/services>` is used
  as a fallback for users with a valid email address (e.g. matching a
  Gravatar entry). The service also looks up organization avatars
  based on their domain.

- Agents and customers can upload a custom avatar image from their user
  profile (click on *Avatar > Profile*).

- The :doc:`Clearbit integration </system/integrations/clearbit>` can
  enrich user records with avatar images alongside other profile data.

.. note::

   :doc:`LDAP/Active Directory </system/integrations/ldap/index>`
   does **not** synchronize user avatars. Avatars for LDAP-sourced
   users come from the sources listed above instead.

See also
--------

- :doc:`/settings/system/services` for the image service backend
  configuration.
