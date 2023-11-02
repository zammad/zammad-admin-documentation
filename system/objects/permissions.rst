Attribute permissions
*********************

.. figure:: /images/system/objects/permission-and-screen-overview.png
   :align: center

   Some of the possible permissions and screen options for object attributes.

Whenever needed you can restrict access to attributes based on the
:ref:`user permission <permission-guide>`
(``admin``, ``ticket.agent`` & ``ticket.customer``).

.. tip:: **🤓 This is not the only possibility to restrict access**

   You can always adjust below settings with :doc:`/system/core-workflows`.
   This also allows role based restriction.

.. note::

   In some situations, Zammad internally overrules your chosen settings for
   screen, requirement and permission. This affects situations where a field
   can't be set which would be required for the ticket creation.

   This currently affects:

      * merging
      * emails no matter of the originating channel (incoming)
      * :doc:`/channels/form` (incoming)
      * :doc:`/channels/facebook` (incoming)
      * :doc:`/channels/telegram` (incoming)
      * :doc:`/channels/twitter-x/twitter` (incoming)
      * SMS (incoming)

About screens
-------------

Zammad differentiates between several screens, you can use the object attribute
in.

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

Now that we know the different possible situations, let's talk about available
options.

shown
   Show (checked) or hide (unchecked) a field.

required
   Set a field to mandatory (checked). Forces users (via UI and API)
   to populate the field.
