Translations
************

Translations of Zammad are processed centrally on our
`Weblate instance <https://translations.zammad.org/>`_.
This allows non development people to review and update translation strings of
the language they actually speak.

Your language is in an incomplete translation state or has typos?
Please consider helping us sorting this out! All you need is either a GitHub
account or register directly on our instance.

Did you know? This is also where documentation translations are handled. 🤓

Have a look in our
:docs:`contribution section </contributing/start.html#translation>` in the
system documentation to get started!

--------------------------------------------------------------------------------

Apart from these centralized translations, there's still local translations
you can manage. This is relevant if you added custom objects that require
translations or even states.

.. warning::

   You can no longer synchronize these translations upstream like prior
   Zammad 5.1.

.. figure:: /images/system/translations/translation-management.png
   :alt: Translation management page within the admin menu

How do I get the most recent translations?
------------------------------------------

Because of how Zammad ships translations, the only way to update the
central translations is to update your Zammad installation. The benefit of
this is that you no longer need internet access during a Zammad upgrade as
the package has everything it requires already.

But... I have custom objects?!
------------------------------

No problem at all! If you can't find the strings of your objects already within
the translation list, please ensure to
:docs:`add the translation strings </admin/console/other-useful-commands.html#add-translation>`
to your installation.

Now you can translate your objects as needed.

So how does this local translation work?
----------------------------------------

Within the translation menu, look up the string you're searching for and update
its target as designed. As soon as you leave the target input field, the change
will be saved. Your changes are even update safe!

Such locally translated strings are slightly highlighted and come with a "Reset"
action. Due to caching you may have to reload your browser session to see the
changes.

The translation strings shown by Zammad are always those of the
profile language you've chosen. If you need to translate a different language,
change the language in your
:user-docs:`profile settings </extras/profile-and-settings.html>` up front.

.. figure:: /images/system/translations/changed-local-translation.png
   :alt: Screenshot showing an adjusted translation locally

Reverting to original translations
++++++++++++++++++++++++++++++++++

If you want to reset all translation changes on your instance, use the
red "Reset" button on the upper right of the translation management.

In case you just intend to reset a specific translation, lookup the
translation string and use the "reset" action.

.. figure:: /images/system/translations/resetting-local-translations.png
   :alt: Screenshot showing reset button highlighted
