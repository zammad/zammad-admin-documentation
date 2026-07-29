Start with Zammad
=================

This guide walks you through the basic configuration of a fresh Zammad
instance. If you don't have a Zammad instance yet, you can spin up a
`free 30-day trial <https://zammad.com/en/getting-started>`_ to follow
along. The navigation menu on the left mirrors the structure of the admin
settings in Zammad, so the same mental map applies in both places (the
**Misc** section at the end is the one exception, since it groups items
that don't belong under a single settings area).

Concept
-------

Zammad is a ticketing and helpdesk system that helps you manage communication
with customers and internal departments. Even without advanced configuration,
Zammad helps you work in a much more structured and transparent way and
avoids duplicate work.

It is all about tickets. A ticket is a central entity which holds all
information of a customer request in one place. A ticket is created when
someone gets in touch with you by sending a message, or manually by a support
agent when they receive a call from a customer. A ticket includes all
conversation parts as articles.

Zammad can be invisible to customers and doesn't require your customers to use
the system at all (but they can, if you allow them to). You just connect a
communication channel and the customer requests are created as tickets in
Zammad.

Because the ticket itself gathers everything related to a customer request,
multiple people can work on it without losing context, so side channels
(separate emails, chat threads, or phone calls) that split the information
across tools are not needed.

Your colleagues who work on tickets are called agents in Zammad. Zammad ships
three roles. Two of them are for internal users (admin, agent). When a new
ticket gets created and the email address is not yet known to Zammad, it
automatically creates a user with the customer role, which is the third one.

The diagram below shows how users, roles, and groups relate. Don't worry if it
isn't fully clear yet; the next sections walk through each piece.

.. figure:: /images/guides/roles-permissions.svg
   :alt: Diagram of the relation between users, roles, and groups in Zammad

   How users, roles, and groups relate in Zammad.

Basic Setup
-----------

The guide assumes your Zammad is not yet configured. If the getting-started
wizard appears, provide as much information as you like, or skip it and
configure things later.

Company Details
^^^^^^^^^^^^^^^

The basic customization step in Zammad is to add your company name and your
logo. If you haven't already set this in the getting-started wizard, open
the admin settings (click the cogwheel icon at the bottom of the primary
navigation on the left side) and go to *Settings > Branding* to adjust it.
See the :doc:`/settings/branding` page for details.

Create Groups
^^^^^^^^^^^^^

A group in Zammad typically represents a department of a company. You can
define which agents have access to which group and set permissions per group.
A group can also have a specific email address and department name. Start by
renaming the default **Users** group, then add additional groups as needed.
If you want a hierarchy, set parent groups accordingly. Staying with one
group is fine, too.

Create or Modify Roles
^^^^^^^^^^^^^^^^^^^^^^

Zammad comes with three pre-defined :doc:`roles </manage/roles/index>` for
customers, agents, and admins. A user can have one or more roles assigned.
A role defines the application permissions (which areas and features are
accessible) and the access level for each group (read, create, change,
overview, full).

These three roles cover most standard scenarios. If you need additional
roles, common examples are:

- Team leader
- Reporting person
- Knowledgebase editor

You can also assign application and group permissions directly to a specific
user. If more than one person needs the same permissions, prefer creating a
role.

Connect Email Accounts to Zammad
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Depending on your email system, follow the matching guide:

- :doc:`Standard IMAP/SMTP </channels/email/index>`
- :doc:`M365 Graph </channels/microsoft365-graph/index>`
- :doc:`M365 IMAP </channels/microsoft365/index>`
- :doc:`Google Email </channels/google/index>`

After adding an email channel, open the channel and go to the **Signatures**
tab to create one or more signatures. You can use one signature for many
groups or create different signatures depending on your company's department
structure.

Configure Groups
^^^^^^^^^^^^^^^^

After setting up an email-based channel, revisit your groups. Go to
*Manage > Groups*, open each group, and set an outbound email address.
Signatures are configured separately in the **Signatures** tab of the
email-based channel.

Create Agent Accounts
^^^^^^^^^^^^^^^^^^^^^

Create a :doc:`user </manage/users/index>` for each of your support agents
from the :doc:`First Steps </misc/first-steps>` section: select *Dashboard*
in the navigation, switch to the *First Steps* tab, and use the
**Invite agents/colleagues to help working on tickets** link. Assign
the correct role to each agent. This step sends invitation emails to your
agents.

Further Steps
-------------

At this stage you are ready to use Zammad in production. To customize
further, follow the :doc:`additional customization guide <additional-customization>`,
or browse the documentation for the area you want to adjust.
