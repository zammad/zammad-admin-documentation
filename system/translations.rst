Translations
************

Translations of Zammad are processed centrally in our
`Weblate instance <https://translations.zammad.org/>`_.
This allows non-developers to review and update translation texts of the
language they actually speak.

Your language is in an incomplete translation state or has typos? Please
consider helping us in sorting this out! All you need is either a GitHub account
or to register directly in our instance.

Did you know? This is also where the documentation translations are handled. 🤓

Have a look in our
:docs:`contribution section </contributing/start.html#translation>` in the
system documentation to get started!

--------------------------------------------------------------------------------

Apart from these system translations, there's still local translations you can
manage. This is relevant if you added custom objects that require translations
or even custom states and priorities.

.. figure:: /images/system/translations/translation-management.png
   :alt: Translation management screen within the admin menu
   :align: center

Updating Translations
---------------------

Because of how Zammad ships translations, the only way to update the system
translations is to update your Zammad installation. The benefit of this is that
you no longer need internet access during a Zammad upgrade as the package has
everything it requires already.

Translation of Custom Objects
-----------------------------

No problem at all! You can customize any translation locally, even if it is not
initially provided by the system.

Translation is supported for a broad number of features, including but not
limited to custom:

* Object Attributes
* Ticket Macros
* Ticket Overviews
* Ticket Priorities
* Ticket States

Customizing Translations
------------------------

Within the translation screen, simply click on the **New Translation** button.

.. figure:: /images/system/translations/new-translation-dialog.png
   :alt: New translation dialog
   :align: center

In the dialog you can immediately enter the exact translation source (if you
know it) and your custom translation text for it and click **Submit**.

Alternatively, try to search for translation suggestions in the list below.
Selecting an item from the list will pre-fill the translation source for you and
then you can just enter your custom translation.

The target language will always default to your current language selection. If
you need to translate for a different language, simply change the selection
before submitting.

All your custom translations will show up in the overview table when added. And
they will even persist across Zammad updates!

Reverting to Original Translations
++++++++++++++++++++++++++++++++++

If you want to revert a custom translation to original text, simply use the
appropriate action within the row of the overview table.

Depending on the type of the translation source, the action has a slightly
different name:

* **Reset** for customized system translations
* **Remove** for customized local translations

In both cases, the action will remove the customized translation after a
confirmation.

.. figure:: /images/system/translations/revert-custom-translation.png
   :alt: Screenshot showing the location of the Remove action
   :align: center

Inline Translations
+++++++++++++++++++

If you prefer a more hands-on approach, you can activate the inline or on-screen
translation feature by pressing ``ctrl`` + ``alt`` + ``t`` at any time and on
any screen.

All customizable translation texts will be highlighted for you on the screen.
Just click into the highlighted area and update the text in place.

.. figure:: /images/system/translations/inline-translations.png
   :alt: Inline translation mode activated for the Overview screen
   :align: center

When finished editing, simply press ``ctrl`` + ``alt`` + ``t`` again to
deactivate.

.. note::

   Even though it's available on any screen, the inline translation feature
   requires admin permissions. It works only for the current language selection.
   If you need to translate a different language, first change the language in
   your :user-docs:`profile settings </extras/profile-and-settings.html>`.
