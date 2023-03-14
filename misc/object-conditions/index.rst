Object conditions
*****************

This page will help you to understand Zammad's object conditions better.

Limitations
-----------

Ticket conditions differ from function to function.
This affects the availability for certain attribute checks and the
expert mode (*AND / OR*). The following functions in Zammad are covered.

   * :doc:`/manage/overviews`
   * :doc:`/manage/slas/index`
   * :doc:`/manage/trigger`
   * :doc:`/manage/scheduler`
   * :doc:`/manage/report-profiles`
   * :ref:`Automatic ticket assignment <auto_assignment>`

All other functions that come with an object condition configuration may not
fully support all stated functions.

Some object scopes (e.g. article scope) are not available in all situations,
this is due to the nature of each independent functionality. Check the function
documentation page affected to learn more.

--------------------------------------------------------------------------------

Getting started
---------------

This guide is split into two major sections which depend on each other.

:doc:`/misc/object-conditions/basics`
   Learn how Zammad's basic conditions work to adapt to your environment.

:doc:`/misc/object-conditions/expert-mode`
   Learn how Zammad's expert mode for conditions allows you to create
   even more powerful conditions. *AND / OR* conditions have you covered!

.. toctree::
   :maxdepth: 1
   :hidden:

   /misc/object-conditions/basics
   /misc/object-conditions/expert-mode
