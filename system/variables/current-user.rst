Current User
************

.. note:: If you're missing variables or are not sure if something is not working as expected, feel free to ask over at the `Community <https://community.zammad.org>`_.

Current user variables always return values of the current user that caused e.g. a trigger to run.

.. note:: Due to the above fact, these variables are often not (yet) set or available for usuage.

   In situations where e.g. schedulers or triggers run, this most likely is nothing you want to use.


.. csv-table:: Current User Variables
   :header: "name", "variable", "example"
   :widths: 20, 10, 20

   "Current User > Web", "``#{user.web}``", "``https://zammad.org`` or empty if not set"
   "Current User > VIP", "``#{user.vip}``", "``false`` or ``true``"
   "Current User > Updated by > Web", "``#{user.updated_by.web}``", "``https://zammad.org`` or empty if not set"
   "Current User > Updated by > VIP", "``#{user.updated_by.vip}``", "``false`` or ``true``"
   "Current User > Updated by > Phone", "``#{user.updated_by.phone}``", "``004930123456789`` or empty if not set"
   "Current User > Updated by > Note", "``#{user.updated_by.note}``", "``Some note to this user`` or empty if not set"
   "Current User > Updated by > Mobile", "``#{user.updated_by.mobile}``", "``0049176123456789`` or empty if not set"
   "Current User > Updated by > Login", "``#{user.updated_by.login}``", "``jdoe``"
   "Current User > Updated by > Lastname", "``#{user.updated_by.lastname}``", "``Doe`` or empty if not set"
   "Current User > Updated by > Firstname", "``#{user.updated_by.firstname}``", "``John`` or empty if not set"
   "Current User > Updated by > Fax", "``#{user.updated_by.fax}``", "``004930123464789`` or empty if not set"
   "Current User > Updated by > Email", "``#{user.updated_by.email}``", "``jdoe@customer.tld``"
   "Current User > Updated by > Department", "``#{user.updated_by.department}``", "``Sales`` or empty if not set"
   "Current User > Updated by > Address", "``#{user.updated_by.address}``", "``Some street 1, 12345 Berlin`` or empty if not set"
   "Current User > Updated at", "``#{user.updated_at}``", "``2019-10-07 16:25:00 UTC``"
   "Current User > Phone", "``#{user.phone}``", "``004930123456789`` or empty if not set"
   "Current User > Organization > Shared organization", "``#{user.organization.shared}``", "``true`` or ``false``"
   "Current User > Organization > Note", "``#{user.organization.note}``", "``A note to the organization of the user`` or empty if not set"
   "Current User > Organization > Name", "``#{user.organization.name}``", ""
   "Current User > Organization > Domain based assignment", "``#{user.organization.domain_assignment}``", ""
   "Current User > Organization > Domain", "``#{user.organization.domain}``", "``Zammad GmbH`` or empty if not set"
   "Current User > Note", "``#{user.note}``", "``Some note to this user`` or empty if not set"
   "Current User > Mobile", "``#{user.mobile}``", "``0049176123456789`` or empty if not set"
   "Current User > Login", "``#{user.login}``", "``jdoe``"
   "Current User > Lastname", "``#{user.lastname}``", "``Doe`` or empty if not set"
   "Current User > Firstname", "``#{user.firstname}``", "``John`` or empty if not set"
   "Current User > Fax", "``#{user.fax}``", "``004930123464789`` or empty if not set"
   "Current User > Email", "``#{user.email}``", "``jdoe@customer.tld``"
   "Current User > Department", "``#{user.department}``", "``Sales`` or empty if not set"
   "Current User > Created by > Web", "``#{user.created_by.web}``", "``https://zammad.org`` or empty if not set"
   "Current User > Created by > VIP", "``#{user.created_by.vip}``", "``true`` or ``false``"
   "Current User > Created by > Phone", "``#{user.created_by.phone}``", "``004930123456789`` or empty if not set"
   "Current User > Created by > Note", "``#{user.created_by.note}``", "``Some note to this user`` or empty if not set"
   "Current User > Created by > Mobile", "``#{user.created_by.mobile}``", "``0049176123456789`` or empty if not set"
   "Current User > Created by > Login", "``#{user.created_by.login}``", "``jdoe``"
   "Current User > Created by > Lastname", "``#{user.created_by.lastname}``", "``Doe`` or empty if not set"
   "Current User > Created by > Firstname", "``#{user.created_by.firstname}``", "``John`` or empty if not set"
   "Current User > Created by > Fax", "``#{user.created_by.fax}``", "``004930123464789`` or empty if not set"
   "Current User > Created by > Email", "``#{user.created_by.email}``", "``jdoe@customer.tld``"
   "Current User > Created by > Department", "``#{user.created_by.department}``", "``Sales`` or empty if not set"
   "Current User > Created by > Address", "``#{user.created_by.address}``", "``Some street 1, 12345 Berlin`` or empty if not set"
   "Current User > Created at", "``#{user.created_at}``", "``2019-10-07 16:25:00 UTC``"
   "Current User > Address", "``#{user.address}``", "``Some street 1, 12345 Berlin`` or empty if not set"
