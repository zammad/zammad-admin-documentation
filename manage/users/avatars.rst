Avatars
=======

User avatars in Zammad can come from several sources. Whenever a new
avatar is fetched from any of them, the user's avatar is updated.
Already saved avatars are kept on the user, even if the configured
image service gets disabled afterwards.

Sources
-------

User avatars can be populated from any of the following sources.
Whichever source last fetched an avatar for a user becomes the active
one. The following sources are available:

- OAuth login providers (e.g. Microsoft, Google, GitHub, Facebook,
  GitLab) supply the avatar URL on sign-in when the provider exposes
  one. Zammad stores this URL on the user and fetches the image.

- The :doc:`Zammad Image Service </settings/system/services>` is used
  as a fallback for users with a valid email address (e.g. matching a
  Gravatar entry). The service also looks up organization avatars
  based on their domain.

- Agents and customers can upload a custom avatar image from their
  user profile.

- The :doc:`Clearbit integration </system/integrations/clearbit>` can
  enrich user records with avatar images alongside other profile data.

.. note::

   :doc:`LDAP/Active Directory </system/integrations/ldap/index>`
   does **not** synchronize user avatars. Avatars for LDAP-sourced
   users come from the sources listed above instead.

Changing avatars
----------------

Admins cannot change the avatar of a user or an organization from the
admin panel.

To change their own avatar, a user must click on their avatar or
initials at the bottom of the navigation sidebar, choose ``Profile
settings`` and open the ``Avatar`` section to upload an image or
capture one with their webcam.

Organization avatars cannot be changed manually at all and are
populated only by the :doc:`Zammad Image Service
</settings/system/services>` based on the organization's domain.

See also
--------

- :doc:`/settings/system/services` for the image service backend
  configuration.
