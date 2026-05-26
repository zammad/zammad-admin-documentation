Macros
======

Zammad's macro feature lets you pre-define ticket changes which can be applied
with just a click. So, when you or your agents apply the same changes to many
tickets over and over again, you can bundle those changes in a macro to apply
them by executing it. To add or edit macros in Zammad's admin settings under
*Manage > Macros*, you need the ``admin.macro`` permission.

.. figure:: /images/manage/macros/macro-selection-ticket-view.png
   :alt: Example macros within a ticket detail view.
   :align: center
   :width: 70%

   Choose from the macros **Close & Tag as Spam**, **Move to RMA**,
   and **Reply & Close & Tag as Banana**.

You can also apply macros in bulk (i.e. to many tickets all at once)
via the *Overviews* page:

.. figure:: /images/manage/macros/macro-bulk-operation-overview.png
   :alt: Example macros within an overview (bulk operation).
   :align: center
   :width: 70%

   Select your desired tickets, then click-and-drag
   to apply a macro to all of them.

You can create or edit macros on the Macros page of the admin panel:

.. figure:: /images/manage/macros/macro-overview.png
   :align: center
   :width: 80%
   :alt: Screenshot of "Macros" page in admin panel

.. toctree::
   :maxdepth: 1
   :caption: Learn more

   /manage/macros/learn-by-example
   /manage/macros/how-do-they-work
