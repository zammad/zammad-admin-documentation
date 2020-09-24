Import users with CSV
*********************

Zammad provides a fast way to import your required users into Zammad.
Many tools provide exports as CSV.

.. figure:: /images/manage/users/import-user-data-with-csv.png
   :alt: Screenshot showing the import screen for user data
   :align: center

Get your sample
   If you don't know which attributes are available yet, a great starter is to download the example CSV file.
   This sample file contains a selection of actual users from your Zammad instance.

      .. note:: This is **not** a full user list.

   This CSV will contain all available user attributes together with data that is already provided.

Work out the data you will provide
   You can use above sample data to create the actual user list you want to import to Zammad.
   Attributes you don't need can safely be removed - just ensure the number of columns fits on every line.

   .. tip:: You can safely remove or leave the ``id`` column empty.

   .. hint:: **♻ If you want to update existing users**

      Ensure to provide either the users login or email address. These two fields are unique identifiers within Zammad.

   Below is a sample on show you can shorten your CSV content while still being functional.
   The payload will create or update two users. The user "Madeline Moore" will be created as inactive user.

   .. code-block:: none

      login,firstname,lastname,email,web,active
      jdoe,"John","Doe",jdoe@example.com,"https://zammad.com",true
      mmore,"Madeline","Moore",mmore@example.net,"",false

   .. note:: You'll have to provide at least ``firstname`` and ``lastname``.

(finally) importing the users
   Now that you have your user list ready, you can either paste the CSV file content into the text area or
   select the file in question for uploading to Zammad. If you have a lot of users to import, uploading the file
   might be the better approach.

   After clicking on ``Import`` Zammad will provide a short overview on how many users will be created or updated.

      .. figure:: /images/manage/users/import-summary-before-importing.png
         :alt: Screenshot showing an overview of the be created and changed users
         :align: center
         :width: 90%

   If everything looks good to you, click on ``Yes, start real import`` to import the user list.
   Depending on the size of your list this may take a moment. After wards you can safely close the dialogue.

   .. figure:: /images/manage/users/importing-users-via-csv.gif
      :alt: Screencast showing users being imported via CSV
      :align: center
