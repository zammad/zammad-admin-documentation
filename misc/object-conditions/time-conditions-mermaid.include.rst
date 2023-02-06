.. mermaid::
   
   gantt
      title Date & Date Time condition timings
      dateFormat  DD.MM.YYYY
      axisFormat %d.%m.
      todayMarker off
      13.06. (now) :crit, milestone, 13.06.2023,0d
      section before<br>(absolute)
      11.06.       :beforeabs, 09.06.2023, 2d
      section after<br>(absolute)
      15.06.       :after withinnext, 2d
      section before<br>(relative)
      2 days       :09.06.2023, 2d
      section after<br>(relative)
      2 days       :after withinnext, 2d
      section within last<br>(relative)
      2 days       :withinlast, after beforeabs, 2d
      section within next<br>(relative)
      2 days       :withinnext, after withinlast, 2d
      section til<br>(relative)
      14.06.       :09.06.2023, 5d
      section from<br>(relative)
      11.06.       :after beforeabs, 5d
