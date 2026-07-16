Services
========

Image Service
   Defines the backend for user and organization image lookups.
   The service is used to fetch user avatars based on the user's email
   address (e.g. matching a Gravatar entry). It is also used once during
   Zammad's setup wizard to fetch your company logo based on the domain of the
   email address you provided in the setup wizard.
   See :doc:`/manage/users/avatars` for an overview of all avatar
   sources and how the image service interacts with them.

   Make sure your on premise installation has ``HTTPS`` access to
   ``images.zammad.com``.

   Default: ``Zammad Image Service`` (active)

Geo Calendar Service
   Defines the backend for geo calendar lookups. Used for initial calendar
   setup. Make sure your on premise installation has ``HTTPS`` access to
   ``geo.zammad.com``.

   Default: ``Zammad GeoCalendar Service`` (active)

Geo IP Service
   Defines the backend for geo IP lookups. Shows also location of an IP address
   if an IP address is shown. Make sure your on premise installation has
   ``HTTPS`` access to ``geo.zammad.com``.

   Default: ``Zammad GeoIP Service`` (active)

Geo Location Service
   Defines the backend for geo location lookups to store geo locations for
   addresses.

   Default: ``OpenStreetMap (ODbL 1.0, http://osm.org/copyright)`` (active)

.. hint::

   You can find a detailed privacy information on what we store for how long on
   our :docs:`Privacy Appendix </appendix/privacy.html>` inside of our System
   Documentation.
