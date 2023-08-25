:orphan:

Twitter/X note
==============
Updated: 08/2023

Baseline situation
******************

The Twitter integration implemented in Zammad provides the following
functionalities:

   * Search for definable terms and automatic ticket creation based on the 
     results
   * Live notifications for your own Twitter account (e.g. if you are mentioned
     in a tweet or receive direct messages), that will be transformed into tickets

Current situation
*****************

The adjustments made to the API at Twitter/X (introduction of v2) as well as the
restructuring of the access levels/pricing models (Free, Basic,
Pro - https://developer.twitter.com/en/products/twitter-api) mean that the
above-mentioned functionalities are no longer available in connection with old
"app registrations" at the present time. These changes are heavily discussed
in the Twitter community and cause discomfort.

In addition, we don't know if there will be another change on the part of
Twitter/X in the future that will further limit or even restore functionality.

Prerequisite for the continued operation of Twitter in Zammad
*************************************************************

Access to the "old" Twitter API v1.1 or the Account Activity API, which is
required for our functionalities, is now only available at the "Enterprise"
access level. According to Twitter, the monthly costs for this start at
42,000 USD.

Future
******

We sincerely regret the current situation, but unfortunately our hands are
tied. If there are no more changes to the Twitter API or access levels, we will
consider removing the Twitter integration with Zammad 7.0.
At the moment, we are also in the process of monitoring the market very closely
to see if there are any alternatives to Twitter/X that we can integrate into
Zammad, and if so, which ones.

As soon as we have news about this, we will inform you.

We understand that this news is unsatisfactory for you and would have preferred
more positive news. However, we would like to play with open cards at this
point and provide clarity.

:doc:`Back to Twitter/X Channel <./twitter>`.