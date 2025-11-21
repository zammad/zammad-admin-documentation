Add Checklist to Tickets
========================

Follow the steps below to add a checklist from a template to all tickets after
they get created.

Create a Token
--------------

Create a personal access token in the account you want to use to create the
checklists in the tickets. Make sure the account has appropriate permissions.
To create the token, go to the
:user-docs:`profile settings (user docs) </extras/profile-and-settings.html>`
by clicking on the avatar image (either image or initials) on the left bottom
corner and select **Token Access**. Make sure that the token has
``ticket.agent`` permission and the user is able to change tickets in the
groups you want to add the checklist to tickets.

Add Webhook
-----------

Create a new webhook with the following configuration:

- Endpoint: ``https://{your.domain.tld}/api/v1/checklists`` (replace the value
  in {} with the domain of your Zammad)
- Request method: ``POST``
- Authentication: **Bearer Token**
- Bearer token: paste the token you created before
- Custom payload: activate it and add the following snippet. Make sure
  to replace the value ``1`` for ``template_id`` with the ID of your checklist
  template.

.. code-block:: json

   {
      "ticket_id": "#{ticket.id}",
      "template_id": 1
   }

Create Trigger
--------------

Configure a trigger which fires the webhook after ticket creation. In case
you want to additionally narrow the condition down, just enhance the example
(e.g. by checking the group of a ticket or limit it for specific ticket titles).
Have a look at the :doc:`example configuration <generic-notifications-trigger>`.
For the scenario to add a checklist to every ticket after creation, the
condition could look like this:

- Activated by: Action
- Action execution: Selective
- Condidions for affected objects: **Action** > *is* > created
