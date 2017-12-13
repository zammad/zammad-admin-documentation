Overviews
*********

You can provide overviews to your agents and customers. They can be used as a kind of worklist of tasks that the agent is supposed to work off.
You can also create individual reports for individual agents or agent groups.

In the Overview Management Area you can add new overviews, edit or delete them.

The following attributes can be set when creating an overview:


**AVALABLE FOR A SPECIFIC ROLE / AVAILABLE FOR CERTAIN USERS:**

.. image:: images/manage/Zammad_Helpdesk_-_Overviews.jpg

hint
    roles are assigned to users, per default there are agents, admins and customers.
    `<http://zammad-admin-documentation.readthedocs.io/en/latest/manage-roles.html>`_

With these settings you can choose whether to make the overviews available to an entire group of people (by selecting the role) or to specific users. The entries in both fields apply. This means that you can also select individual users in addition to sharing the overview for all role members.


**ONLY AVAILABLE FOR USERS/CUSTOMER WITH SHARED ORGANIZATIONS:**

.. image:: images/manage/Zammad_Helpdesk_-_Overviews2.jpg

 hint
   shared oranization = that's a setting in the organizations-management

   `<http://zammad-admin-documentation.readthedocs.io/en/latest/manage-organizations.html>`_

 This is only important if the available role is Customer. When deciding whether yes or no is selected, it must be considered to what extent this makes sense - For example, if a customer sees only his own tickets, many views are usually not necessary.



**AVAILABLE FOR USERS WHICH ARE REPLACEMENTS FOR OTHER USERS:**

.. image:: images/manage/Zammad_Helpdesk_-_Overviews3.jpg

This selection refers to the setting in the user preferences (profile-pic in the left corner --> profile -->) "out of office". If this option is checked, this selection is only displayed if someone has been entered as a substitution.

For example:
  Agent A is on vacation and Agent B will take care of his tickets. Then an overview can be set up, which only shows Agent B all new tickets from Agent A for this period of time, without having to search for them separately.


**CONDITIONS FOR SHOWN TICKETS:**

.. image:: images/manage/Zammad_Helpdesk_-_Overviews4.jpg

What conditions should the listed tickets contain? (=it is like a filter) You can add more than one condition. In the preview you have the possibility to double check if your entry of the conditions makes sense by directly displaying tickets that match your filtering.


**ATTRIBUTES:**

.. image:: images/manage/Zammad_Helpdesk_-_Unassigned___Open.jpg

Which attributes shall be shown in the overview? (=column headers)

With this setting you can select the headlines of your overview. Depending on which information is important in this selection, it can be displayed individually. For this example "Unassigned and open" the overview would look like this:

.. image:: images/manage/Zammad_Helpdesk_-_Overviews4.jpg

These settings can also be adjusted individually by each agent at a later time (In the overview, top right: Options).


**ORDER / DIRECTION / GROUP BY / ACTIVE:**

.. image:: images/manage/Zammad_Helpdesk_-_Overviews6.jpg

- order: In which order should the tickets be displayed? (Sorted by the attributes)

- direction: The direction of the order

- group by: Should the tickets be displayed again grouped by a specific attribute within the list?

- active: Set them active or inactive
