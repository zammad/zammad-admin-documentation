Additional Customization
========================

You can find useful customization options on this page. They mainly refer to
the actual section in the documentation and should give you an idea what could
be useful.
It is recommended to follow the basic configuration of Zammad first, as
described in the :doc:`start-with-zammad` section.

Automation for Incoming Messages
--------------------------------

There are different ways in Zammad how to automate things. Namely
:doc:`triggers </manage/trigger>`, :doc:`schedulers </manage/scheduler>` and
:doc:`macros </manage/macros>`. In simple terms, the execution of a trigger is
action based, the execution of a scheduler job is time based and the execution
of a macro is done manually (without a condition).

By default, there is already one active trigger which sends out auto-reply
emails to customers after they contacted you in a new support case. You can even
define in the channel configuration, to which group specific messages should be
dispatched to and what attributes you want to set for those tickets. You can
find it in the **Filter** tab in the email based channels.

Add Text Modules
----------------

Text modules/templates are a nice time saver for your agents. In case they
answer similar questions over and over again and/or you want to unify their
answers, add text modules for that. Your agents can then fetch a text by
typing :kbd:`@` :kbd:`@` in the editor, followed by the name or content of the
text module.

Adjust and Add Overviews
------------------------


Enable Checklist Feature
------------------------

For a quick start, watch the video about enabling the checklist feature and
adding a default checklist.

ADD VIDEO HERE.

And here is an explanation in text form.


Add AI Agents
-------------

ADD VIDEO HERE.

Next Steps
----------

Depending on your use case, you might want to adjust more things. Have a look
at the left navigation menu where you can find a detailled explanation of
more all features in Zammad.

- To provide more ways for your customers to contact you, add additional
  channels like :doc:`/channels/whatsapp/index` and :doc:`/channels/sms`.
- Leverage productivity by:

   - Automate additional things via :doc:`/manage/trigger`,
     :doc:`/manage/scheduler` and :doc:`/manage/macros`
   - Use :doc:`AI features </ai/provider>` to relieve your agents so they can
     focus on more important tasks.

- In case you want to bill the support provided, use the
  :doc:`time accounting </manage/time-accounting>` feature
- Add your own custom fields for users or tickets where you can add needed
  information. You can do so in the :doc:`object attributes </system/objects>`
  section in Zammad.
