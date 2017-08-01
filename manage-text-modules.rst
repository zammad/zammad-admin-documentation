Text Modules
************

Create text modules to spend less time writing responses. Text modules can include smart variables like the users name or email address.
Here you can add new text modules, delete or edit them.

Examples of snippets are:

Hello Mrs. #{ticket.customer.lastname},
Hello Mr. #{ticket.customer.lastname},
Hello #{ticket.customer.firstname},
My Name is #{user.firstname},
Of course you can also use multi line snippets.

Available objects are:

ticket (e. g. ticket.state, ticket.group)
ticket.customer (e. g. ticket.customer.firstname, ticket.customer.lastname)
ticket.owner (e. g. ticket.owner.firstname, ticket.owner.lastname)
ticket.organization (e. g. ticket.organization.name)
user (e. g. user.firstname, user.email)

To select placeholders from a list, just enter "::". The list can be searched with the arrow keys after inputting keywords.