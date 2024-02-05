This option allows you to block specific incoming caller IDs.
It allows you to temporarily reject e.g. spam callers without having to
contact providers or PBX administrators.

Caller ID to block
   Provide caller IDs to block in ``E.164`` format.

   Your telephony system has to support this function.
   Zammad will send a ``reject`` response which will cause your telephony
   system to hang up the call. To callers this usually will feel like the line
   is busy.

Note
   Provide a meaningful note for your fellow administrators to remind
   yourself why you've chosen to block the number.
