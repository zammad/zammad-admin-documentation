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

Changing avatars
----------------

Admins cannot change the avatar of a user or an organization from the
admin panel. Avatars are personal data: each user manages their own
avatar from their profile.

To change a user avatar, the user themselves must open their profile
settings by clicking on the avatar or initials in the top-right corner
and choosing ``Profile``. From there, the ``Avatar`` section lets the
user upload an image or capture one with their webcam.

There is no equivalent way to change an organization avatar manually.
Organization avatars are populated only by the
:doc:`Zammad Image Service </settings/system/services>` based on the
organization's domain.

.. warning::

   The ``View from user's perspective`` action in the user overview
   switches your session to the selected user. Because the avatar
   upload UI operates on the current session's user, an admin can
   upload an avatar while in this switched state. This is **not** a
   supported way to change another user's avatar and should not be
   used for that purpose. Always ask the user to upload their own
   avatar from their profile.

See also
--------

- :doc:`/settings/system/services` for the image service backend
  configuration.
