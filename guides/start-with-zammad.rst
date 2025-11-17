Start With Zammad
=================

This page covers a guide about how to configure basic settings in Zammad. To
find more details about the features and their configuration, have a look at
the navigation menu or follow the provided links.

What is Zammad?
---------------

Zammad is a ticketing and helpdesk software which helps you manage your
communication with customers and internal departments. Like a shared inbox
with superpowers. Even without advanced configuration, Zammad helps you working
much more structured and transparent and avoids duplicate work. If you deal with
third party communication with more than one person (which is not recommended,
though), Zammad is your go-to solution and improves your communication a lot.

Concept
-------

It is all about tickets. A ticket is a central entity which holds all information
of a customer request in one place. Such a ticket is created when someone
gets in touch with you by sending a message or manually by support agents when
they receive a call from a customer. A ticket includes every conversation part
as an article. 

Zammad can be invisible to customers and doesn't require your customers to use
the system at all (but they can, if you allow them to). You just connect a
communication channel and the customer requests are created as tickets in Zammad.

Your colleagues who work on tickets are called agents in Zammad. By default,
Zammad ships three roles. Two of them are for internal users (admin, agent).
When a new tickets gets created and the email address is not yet known to Zammad,
it automatically creates a user with the customer role, which is the third one.

The relation between users, roles and groups should be clear when you follow
this guide. However, you can find a visual representation in the following
image. If this is confusing for you currently, just ignore it and read on in
this page.

.. figure:: /images/guides/roles-permissions.svg

And just a note at this point so you are aware: Zammad allows you to automate
many tasks. Keywords are :doc:`/manage/trigger`, :doc:`/manage/scheduler` and
:doc:`/manage/macros`. However, we recommend to follow this guide first and
then do the advanced configuration.

Basic Setup
-----------

Follow the steps below for a simple setup of Zammad. You can add some
information via getting started wizard or skip the steps and configure it
afterwards.
The guide assumes your Zammad is not yet configured. In case you see the
getting started wizard, provide as much information as you desire or skip it
for a later configuration. See video of an example setup.

.. video:: /images/guides/gs-wizard.mp4
   :width: 100%

Company Details
^^^^^^^^^^^^^^^

The basic customizatio step in Zammad is to add your company name and your
logo. If not already set up, visit Zammad's admin settings and go to
*Settings > Branding* to adjust it. Additional information on this topic can
be found in the :doc:`branding settings section </settings/branding>`.

Create Groups
^^^^^^^^^^^^^

A group in Zammad typically represents a department of a company. You can define
which agent has access to which group and define permissions. A group can
have a specific email address and department name. Use the default shipped
**Users** group by renaming it. 
At this point, just add your groups and give them a fitting name. Create A
structure in case you need it by setting parent groups. It is totally fine to
stay with one group too, of course.

.. note::
   Video which covers the next 3 sections, including:
   
   - Assigned email address to group
   - Group / department name and email adress of group should be visible

Create or Modify Roles
^^^^^^^^^^^^^^^^^^^^^^

Zammad comes with three pre-defined :doc:`roles </manage/roles/index>` for
customers, agents and admins. A user can have one or more roles assigned. In a
role, you can define the application permissions (what areas/features are
accessible) as well as the access level to groups (read, create, change,
overview, full). These three roles should cover standard scenarios. In case you
wonder which additional roles could make sense, here are some examples:

- Team leader
- Reporting person
- Knowledgebase editor

You can assign application and group permissions to a specific user as well. In
case you expect more than one person with specific permissions, creating a role
may be a good idea.

Connect Email Accounts to Zammad
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Depending on your used email system, follow the actual guide for it:

- :doc:`Standard IMAP/SMTP </channels/email/index>`
- :doc:`M365 Graph </channels/microsoft365-graph/index>`
- :doc:`M365 IMAP </channels/microsoft365/index>`
- :doc:`Google Email </channels/google/index>`

After adding an email channel, create one or more signatures. You can use one
signature for many groups or create different signatures, depending on your
company's department structure.

Configure Groups
^^^^^^^^^^^^^^^^

After setting up an email based channel, we have to revisit the groups. Go to
*Manage > Groups*, select each group and set an outbound email adress as well
as a signature.

Create Agent Accounts
^^^^^^^^^^^^^^^^^^^^^

Create a :doc:`user </manage/users/index>` for each of your support agents by
going to the first steps section and use the
**Invite agents/colleagues to help working on tickets** function.
Make sure to assign the right role to each of the agents.
This step may send out invitation emails to your agents.

Further Steps
-------------

At this stage, you are ready to use Zammad in production and take advantage of
the collaboration and organization features. To customize it further,
follow the :doc:`additional customization guide <additional-customization>` or
read on in the specific documentation sections.
