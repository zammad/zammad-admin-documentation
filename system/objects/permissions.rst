Object permissions
******************

.. figure:: /images/system/objects/permission-and-screen-overview.png
   :align: center

   Some of the possible permission and screen options for objects.

Whenever needed you can restrict access to objects based on the 
:ref:`user permission <permission-guide>`
(``admin``, ``ticket.agent`` & ``ticket.customer``).

.. tip:: **🤓 Below is not set in stone 🤓**

   You can always adjust below settings with :doc:`/system/core-workflows`.
   This also allows role based restriction. 👀

.. note::
   
   In some situations, Zammad internally overrules below screen, requirement and
   permission settings. This is because at some points you can't set fields
   which would mean we couldn't create the ticket.

   This currently affects:

      * merging
      * emails no matter of the originating channel (incoming)
      * :doc:`/channels/form` (incoming)
      * :doc:`/channels/facebook` (incoming)
      * :doc:`/channels/telegram` (incoming)
      * :doc:`/channels/twitter` (incoming)
      * SMS (incoming)

About screens
-------------

Zammad cares about the screen you're going to use the object in.

create
   Every time you use a creation dialogue for not yet existing data.

edit
   Every time you're editing existing data - viewing existing tickets counts
   as edit screen.

view
   Affects view screens of existing data like e.g. user profiles.

      .. note::

         This setting is available for the following object contexts:

            * User
            * Organization
            * Group

invite_customer & invite_agent
   Shown when using the invitation dialogue from "First Steps" in the dashboard.

About screen options
--------------------

Now that we know the different possible situations,
let's talk about available options.

shown
   Show or hide a field.

required
   Set a field to mandatory. Forces users (via UI and API)
   to populate the field.
