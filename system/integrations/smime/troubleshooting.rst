Troubleshooting
===============

All of the system's latest S/MIME activity
is displayed in the **Recent Logs** section.

.. figure:: /images/system/integrations/smime/log.gif
   :alt: Sample entries of in- and outgoing S/MIME related emails.
   :align: center

   Logs report the status and details of all mail, both incoming and outgoing,
   that used signing/verification or encryption/decryption.

.. note:: This log does **not** include email
   sent by :doc:`triggers </manage/trigger>`
   or the :doc:`scheduler </manage/scheduler>`.
   For those, check your ``production.log``.

Common Issues
-------------

I received a signed/encrypted email before I set up S/MIME integration
   No problem.
   Once S/MIME has been enabled and the appropriate certificates have been added,
   agents will be prompted to retry verification/decryption on matching emails.

   .. figure:: /images/system/integrations/smime/troubleshooting-retry.png
      :alt: Screenshot of user prompt to retry decryption
      :scale: 70%
      :align: center

The 🔒 **Encrypt** button is disabled
   * Have you added the recipient's certificate?
   * Are you sure the recipient's certificate is valid?
   * Have you checked your ``production.log`` for more details?

   .. warning:: If encryption doesn't work in the composer, it won't work in
      :doc:`triggers </manage/trigger>` or the :doc:`scheduler </manage/scheduler>` either!

The ✅ **Sign** button is disabled
   * Have you added **both the certificate and private key** for your organization?
   * Does the email address on the certificate match the email address of the agent/group composing the email?

Error: “Fingerprint already taken”
   * Are you sure you haven't added this certificate already?

Error: “❌ invalid byte sequence in UTF-8”
   * Please ensure to provide PEM formatted certificate and keys.
   * Did you check if the provided file is a valid certificate or key?
