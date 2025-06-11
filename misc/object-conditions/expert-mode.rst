Expert Mode
===========

.. note::
   - This function is only available in self hosted instances and for cloud
     users with a **Plus** package.
   - Up to three layers of conditions are supported.

Enabling the *expert mode* within your ticket conditions allows you to use
**AND / OR / NOT** operators for any supported method. You can decide which
workflow requires this enhanced configuration individually. This section expects
that you had a look at :doc:`basics` already.

Switching to Expert Mode
------------------------

You can enable or disable *expert mode* in any supported condition screen.
To do so, simply use the *expert mode* toggle on the lower right below the
*conditions for affected objects* area.

.. figure:: /images/misc/object-conditions/enable_expert-mode.gif
   :alt: Screencast showing expert mode being enabled in trigger dialog

Logic Block Conditions
----------------------

In Zammad's expert mode, you can establish relationships between conditions
using logical operators. These operators enable you to have one or several sets
of conditions that have to match your requirement.

Match all (AND)
   All conditions in this block will be matched with "AND".
   This requires all conditions to be met in order to be matched positive.

Match any (OR)
   Conditions in this block will be matched with "OR".
   This requires one or more conditions - but not all - to be met in order to
   be matched positive.

Match none (NOT)
   All conditions in this block will be matched with "NOT".
   To be matched positive, no condition may match.

See :ref:`evaluation order <evaluation-order>` to understand how Zammad
evaluates triggers in expert mode.

Adding Conditions and Logic Blocks
----------------------------------

By using the |subclause| icon you can add new logic blocks.
New blocks will be added below the object you're using the |subclause| icon on.

The level will be automatically set to a lower level than the object you're
using it on.

   .. figure:: /images/misc/object-conditions/adding-logic-blocks.gif
      :alt: Screencast showing new logic blocks being added
      :align: center


   The same behavior also applies to conditions *within* logic blocks!

   .. figure:: /images/misc/object-conditions/adding-conditions-to-blocks.gif
      :alt: Screencast showing new conditions being added to logic blocks
      :align: center

.. warning::

   Note that removing condition blocks removes **all blocks and conditions**
   with it!

.. |subclause| image:: /images/icons/subclause-64px.png
   :alt: Icon for adding a new subclause block
   :width: 16px

Re-arranging Conditions and Logic Blocks
----------------------------------------

Use the ≡ handle to drag conditions or logic blocks and drop them to the desired
position. Moving logic blocks will also move any condition and, if applicable,
logic blocks that are below it.

While you can adjust the order of conditions without any further logic
blocks, this won't have any consequences.

.. figure:: /images/misc/object-conditions/re-arranging-conditions.gif
   :alt: Screencast showing dragging and dropping conditions

.. _evaluation-order:

Evaluation Order
----------------

Here's a fairly complex diagram on how Zammad evaluates conditions and their
blocks.

.. mermaid::

   graph LR
      %% Hack for proper spacing,
      %% see https://github.com/mermaid-js/mermaid/issues/3779
      classDef addSpacing margin:0,padding:0,display:none;

   subgraph ConditionCollection["Condition collection"]
      TL["Top level (match AND)"]
      TLA(Condition 1-1)
      TLB(Condition 1-2)
      subgraph SecondLevelA["2nd level A (match OR)"]
         x[" "]:::addSpacing
         SLA1(Condition 2-1)
         SLA2(Condition 2-2)

         subgraph ThirdLevelA["3rd level A (NO match)"]
            TLA1(Condition 3-1)
            TLA2(Condition 3-2)
         end
         subgraph ThirdLevelB["3rd level B (match AND)"]
            TLB1(Condition 3-3)
            TLB2(Condition 3-4)
         end
      end
      subgraph SecondLevelB["2nd level B (match AND)"]
         SLB1(Condition 2-3)
         SLB2(Condition 2-4)
      end
   end

   subgraph MTLA["Evaluate 3rd level A"]
      direction LR

      MTLA1[3-1]
      MTLA2[3-2]
      MTLA1 -- AND --- MTLA2
   end

   subgraph MTLB["Evaluate 3rd level B"]
      direction LR
      MTLB1[3-3]
      MTLB2[3-4]
      MTLB1 -- AND --- MTLB2
   end

   subgraph MSLC["Evaluate 2nd level A"]
      direction TB
      MTLC1[2-1]
      MTLC2[2-2]
      MTLC3[Negated <br> Result 3rd level A]
      MTLC4[Result 3rd level B]
      MTLC1 -- OR --- MTLC2
      MTLC2 -- OR --- MTLC3
      MTLC3 -- OR --- MTLC4
   end

   subgraph MSLD["Evaluate 2nd level B"]
      direction LR
      MTLD1[2-3]
      MTLD2[2-4]
      MTLD1 -- AND --- MTLD2
   end

   subgraph MFLA["Evaluate Top level"]
      direction TB
      MFLA1[1-1]
      MFLA2[1-2]
      MFLA3[Result 2nd level A]
      MFLA4[Result 2nd level B]
      MFLA1 -- AND --- MFLA2
      MFLA2 -- AND --- MFLA3
      MFLA3 -- AND --- MFLA4
   end

   Finish["Condition result <br> (match / no match)"]

   TLA1 --> MTLA
   TLA2 --> MTLA
   TLB1 --> MTLB
   TLB2 --> MTLB
   MTLA ==> MSLC
   MTLB ==> MSLC
   SLA1 --> MSLC
   SLA2 --> MSLC
   SLB1 --> MSLD
   SLB2 --> MSLD
   TLA  --> MFLA
   TLB  --> MFLA
   MSLC ==> MFLA
   MSLD ==> MFLA
   MFLA ==> Finish
