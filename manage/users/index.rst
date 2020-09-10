Users
*****

This is the user-management-area. All users who have access to Zammad can be edited here.

There is an overview about all registered users in the system. That includes agents, admins and customer:

.. image:: /images/manage/Zammad_Helpdesk_-_Users-1.jpg

If nothing has been selected, as you can see on the last screen, all user groups are displayed. If you select one (or two) user groups, only the users that are assigned to this role are displayed, as you can see in the following picture:

.. image:: /images/manage/Zammad_Helpdesk_-_Users-2.jpg

Here, only the administrators are selected - there are two in this system.

Create and edit users
---------------------

By clicking the "new user" panel you create a new user for your system.

.. image:: /images/manage/Zammad_Helpdesk_-_Users-3.jpg

Existing users can be edited by clicking on the user you wish to edit. You can reach the following mask on both paths. In the upper part of the mask all personal details can be registered:

.. image:: /images/manage/Zammad_Helpdesk_-_Users-5.jpg

In the "Organization" field, the user can be directly assigned to a customer group / organization. Only existing organizations can be selected. Customers of the same organization can view each other items (if the organization is set as a "shared" organization).

You can also change the password to log in to Zammad.

Users can be set as a VIP (These users can be selected specifically for the SLA or other automatisms, in which these users must be distinguished from other users).

You can create further fields in the agent interface by choosing System --> Objects.

Any other relevant information about the user can be entered in the lower part of the edit mask (note). This information is only visible to agents:

.. image:: /images/manage/Zammad_Helpdesk_-_Users-6a.jpg


Import of users via CSV file
----------------------------

With the import action (since Zammad 2.5) you can download a sample CSV file and upload your own CSV file.

To reduce the error rate of unwanted mass changes, a test import is carried out first and a summary appears at the end. If you agree with the summary, the CSV import can be executed.

.. image:: /images/manage/Zammad_Helpdesk_-_Users-Import.jpg


.. _manage_user_rights:

The assignment of rights / Permissions
--------------------------------------

...can only be set here, via this mask!

First, you can set which role the user should have in the system. Does this user have administrative rights, is he/she an agent who processes tickets or a customer who only sees and processes his own tickets?

.. image:: /images/manage/Zammad_Helpdesk_-_Users-6b.jpg

If the current user is an agent, you can select this option to open further settings. Now it is possible to select which rights are assigned to the agent and in which group:

.. image:: /images/manage/Zammad_Helpdesk_-_Users-7.jpg


.. csv-table:: Understanding Permissions
   :header: "Permission", "Description"
   :widths: 10, 20

   "READ", "Read only access to the tickets and entries of this group."
   "CREATE", "Right to create tickets or entries in this group."
   "CHANGE", "Right to change the attributes of tickets, entries or areas that belong to this group."
   "OVERVIEW", "Right to see tickets in the overviews. A view of the ticket details is not possible."
   "FULL", "Right to create, read, change and see tickets in the overviews."

.. hint:: | **I can't assign an agent as Owner?!**
   | To assign an agent as Ticket-Owner, the agent needs **FULL** rights on the group, other wise this is not possible.

If a user gets no rights to one group, the system does not display a ticket or ticket notification to the user. This group, for which he has no rights, is also not displayed in the group selection.


View from user's perspective
----------------------------

It's also possible to show the view from a user's perspective - scroll over the action-column, like that:

.. image:: /images/manage/Zammad_Helpdesk_-_Users-4.jpg

This function can be used, for example, to test whether the rights assignment for the respective user have been set correctly - i. e. that this user only has access to the areas assigned to him/her.

Set a user active/ inactive
---------------------------

.. image:: /images/manage/Zammad_Helpdesk_-_Users-8.jpg

If a user is set to inactive, he/she can no longer log into the system. Other, active users will no longer see this user as a possible ticket owner.

.. hint:: Disabling a Customer does not deny emails from that customer!


.. note:: Every user needs their own e-mail address to log in to the system and to view and edit their tickets. Agents and Admin need the email address for registration only.
   The emails sent to the customers are written from the email-address set in the group settings. Your own e-mail address can be placed in the signature.
