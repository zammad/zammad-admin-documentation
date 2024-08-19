Managing Organizations via the Admin Panel
==========================================

The “Organizations” panel provides tools to manually manage organization
entries. See :ref:`organization-details-reference` for help with the
New/Edit Organization dialog.

👥 Creating and editing users
   .. figure:: /images/manage/organizations/add-new-organization-dialog.gif
      :alt: Screencast showing an organization being created.
      :align: center

      Click the **New Organization** button to open the New Organization dialog,
      or click on an existing organization to edit.

🗑️ Deleting organizations
   Organizations currently can only be removed via data privacy by deleting
   the last organization member and then choose ``yes`` for
   *Delete organization?*.

   .. figure:: /images/manage/organizations/delete-organization-with-last-member.gif
      :alt: Screencast showing an organization being selected for deletion with
            its last organizational member.
      :align: center

      Use the ⋮ **Actions** menu to open the **Delete User** dialog.

   .. warning:: 💥 **Deleting a customer destroys all their associated tickets!**

      To learn more, see :doc:`/system/data-privacy`.

   .. hint::

      Technically organization removal is possible via
      :docs:`Zammad's API </api/organization.html>`, however, this only works in
      very specific situations. You may want to stick to data privacy as of now.
