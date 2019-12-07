Clearbit
========

With our LDAP-Integration, you can easily enrich the information provided by Zammad.
If the customers or agents E-Mail-Address is known to Clearbit, it will share all information it has regarding the user with Zammad.
Those information can include the following:

  * Avatar
  * Address information
  * Website-Information
  * A BIO (as Note by default)

If needed, you can add further custom objects and add mappings to them, so the clearbit information can be filled within the database.
In general you can get any information from clearbit, as long as you have a mapping to an Zammad object.

.. |br| raw:: html

   <br />


.. Hint:: Clearbit does have a Mapping of fields like LDAP and Exchange have, but does not "win" against Zammad information. This means
          that if you have e.g. the lastname field filled in already and Clearbit has other information on that, it will not be updated.  |br|\  |br|\
          However: If let's say the lastname has been set by Clearbit and Zammad notices that the lastname on the Clearbit source has changed, Zammad
          will also update this value.


Configuration
-------------

The configuration of clearbit is really easy and done fast! Just login to your Clearbit-Account, go to "API" and copy the secret-API-Key.

.. image:: /images/system/clearbit-api-key.jpg

Now change to your Zammad instance, go to Admin-Settings -> Integrations (System) => Clearbit.
Paste your API-Key into the API-Key-Field and decide if Zammad should create unknown Organizations automatically, if the user does not have one
yet (and Clearbit knows it). The shared option decides if the new organizations Zammad creates with Clearbit should be shared ones.

.. Note:: If you're unsure what option to choose, better stick with "no". You can also learn more about Organizations_ .

.. _Organizations: ../manage-organizations.html

.. image:: /images/system/clearbit-configure-zammad.jpg

The Mapping option works similar to the mapping within the Exchange- and LDAP-Synch. You can add further mappings for e.g. custom fields if you need
more information that Clearbit can provide.

.. Note:: If you want to add more Clearbit fields and want to learn more about available fields on their API, you can take a look at their API-Documentation_ .

.. _API-Documentation: https://dashboard.clearbit.com/docs#enrichment-api

If you're happy with the above chosen Settings and your mapping, just save the changes and enable the Clearbit-Integration. Zammad will now start polling the Clearbit-API
as User contact you.

.. Note:: Zammad does not synchronize with Clearbit on a regular basis, but on demand if needed. This saves API-Calls.

.. image:: /images/system/clearbit-zammad-mapping.jpg

Below the Settings and Mappings, you'll find our Integration log. You can see what requests Zammad sent to Clearbit and also the APIs Response.

.. image:: /images/system/clearbit-zammad-log.jpg

By the way, you can also view the API-Log on the Clearbit-Website - the information seen is basically the same.

.. image:: /images/system/clearbit-api-log.jpg


Example when adding a user
--------------------------

To show you how fast information is added, we added a small Screencast below.
This shows the creation of the User Alex from Clearbit. As we already set the lastname of Alex to "X", Zammad did not update it. What Zammad did was
to add further information it received from Clearbit. Really cool, right?

.. image:: /images/system/clearbit-automatic-user-additions.gif
