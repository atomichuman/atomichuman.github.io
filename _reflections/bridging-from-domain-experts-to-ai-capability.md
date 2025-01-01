---
title: Bridging from Domain Experts to AI Capability
date: 2024-12-31
toggle_machine_commentary: true
contributed_by:
  initial:
    date: 2024-12-30
    type: human
    person_id: Neil D. Lawrence
    notes: Create page stub
  reviewed_by:
  - date: 2024-12-31
    type: human
    person_id: Neil D. Lawrence
    notes: Draft full text of post.
  - date: 2024-12-31
    type: machine
    tool: Claude
    version: 3.5-sonnet
    notes: Generate machine commentary (via Cursor)
  - date: 2024-12-31
    type: machine
    tool: Claude
    version: 3.5-sonnet
    notes: Suggest edits in role of subeditor.
  - date: 2024-12-31
    type: human
    person_id: Neil D. Lawrence
    notes: Deal with first round of edits
  - date: 2024-12-31
    type: machine
    tool: Claude
    version: 3.5-sonnet
    notes: Suggest edits in role of subeditor.
  - date: 2024-12-31
    type: human
    person_id: Neil D. Lawrence
    notes: Deal with second round of edits
  - date: 2024-12-31
    type: machine
    tool: Claude
    version: 3.5-sonnet
    notes: Suggest edits in role of subeditor.
  - date: 2024-12-31
    type: human
    person_id: Neil D. Lawrence
    notes: Remove 5Ps connections as they were mostly not correct.
featured_image: /assets/images/bridging-domain-experts-to-ai.png
---

When turning right on a bicycle the first thing you need to do is to turn the wheel to the left. At least you may not be consciously aware of it, but if you can ride a bicycle you instinctively know it.[^1]


[^1]: This is to maintain balance, to make a right turn the bike needs to lean to the right for balance, but to lean a bike to the right you have to turn left. So even if you're not aware of it, you make a small left turn before you turn right.


This shows how we can understand systems in different ways. An intellectual understanding is different from the pragmatic understanding that comes from experience.


The difference between these two forms of understanding surfaces when we encounter statements like "no one understands this artificial intelligence". Is this meant in the intellectual sense or the empirical sense? 

We don't need to know how a car or a bicycle works to learn how to drive or ride them, rather we need the technology to perform in a predictable manner that responds to our interventions.

This is the same for digital systems. We don't need to intellectually understand how a digital system works to use it, we need to have an intuition about how it will respond to our interventions.

<center>
<img src="/assets/images/bridging-domain-experts-to-ai.png" alt="Bridging domain experts to AI capability" width="90%">

<i>We need to bridge between domain expertise and machine learning/AI capability.</i>
</center>

In *The Atomic Human* I try to avoid using terms like consciousness or sentience that are poorly defined. But I do use the word "feel" in a way that isn't very well defined. I use it in the sense of "getting a feel for something". It also has a different sense as in "search your feelings Luke", or when something makes us "feel bad". 

This relates to the way our decisions pan out across different time frames. The feel for a bicycle is panning out over a short time frame, but the feel for a friend or a sister pans out over a longer time frame. I think the most relevant word here is [*affordances*](/themes/affordances/). The book focuses on constraints (or limitations) of human intelligence that in combination with our environment change our affordances. This limits not only what we can do but what we imagine we can do. 

The bicycle is adapted to our capabilities, a minimalist tool that extends our affordances. The way digital systems are deployed often has the opposite effect.
In the [Horizon scandal](/history/horizon-scandal.md), a digital accounting system was deployed that undermined the subpostmasters it was supposed to support. It also undermined the institutions that should have protected the subpostmasters: the legal and the accounting professions. Digital systems can undermine both individual and institutional affordances. 

In the ITV dramatisation of the [Horizon scandal](/history/horizon-scandal.md), the actor playing Jo Hamilton[^3] asks campaigner Alan Bates

> Jo Hamilton : Are they just incompetent, Alan, or just evil?
>
> Alan Bates : Well, y'know... it comes to the same thing in the end.

[^3]: [Jo Hamilton](https://en.wikipedia.org/wiki/Jo_Hamilton_(subpostmaster)) was charged with theft and wrongly convicted of false accounting. She was forced to pay the Post Office £36,000.

The real issue here is neither. The Horizon system undermined the affordances of both its creators, the subpostmasters and the institutions that we depend on to protect us. Horizon created an *affordance gap* between the decision making and its wider societal context.

Both the Horizon software scandal and the contemporary [Lorenzo Scandal](/history/lorenzo-scandal-and-the-nhs-national-programme-for-it/)[^4] predate the deeper understanding of how to build and deploy software systems that was [developed at Amazon](/reflections/why-amazon/). But as my experience there shows, the problem of the affordance gap still hasn't been solved for digital systems. The challenge of [*intellectual debt*](/themes/intellectual-debt/) means that even big tech companies experience affordance gaps in their system deployment.[^5] 

[^4]: The Lorenzo scandal was a software project to digitise the UK's national health service. It was cancelled at a cost of over £10 billion. But given what happened to the subpostermasters in the Horizon scandal we can be grateful it was cancelled.

[^5]: Examples from the book include [the FBLearner deployment](/history/facebooks-fblearner-deployment/) and [Microsoft's Tay chatbot](/history/microsofts-tay-chatbot/).

Analysis of the failures shows a repeated failure to integrate mechanisms of *feedback* in the deployment of the technology. True feedback would integrate both the aspirations of citizens (subpostmasters for Horizon, nurses, doctors for Lorenzo) as well as the immediate needs. 

Too often digital systems bring inconvenience to individuals (such as increased bureaucracy) without delivering benefits. Where the benefits are found they are distributed centrally. This means that the feel of these systems is closer to enslavement rather than empowerment, an idea that was expressed by [Samuel Butler](/people/samuel-butler/) in his [letter to the Press](/bibliography/darwin-among-the-machines/) in 1863.

So how do we prevent ourselves being enslaved by this latest wave of digital technology?

In April 2023, as part of the activity of the AI Council, [we advised the UK government](/archive/ai-council-response-to-llms/) that there was a need to *tightly integrate research and practice* – Bridging **academia, industry, and government** to solve deployment challenges. So far we've not seen the bridging of these capabilities at national level, but at local level we continue to ensure that the affordance gap is bridged by bringing AI technologists together with domain experts. 

In recent years, UK government has struggled to convene across these groups. But we can't wait for them to get their act together. Universities have to step up. We need to operate as 'honest brokers' in bridging the gap between societal understanding of AI and the technological possibilities it offers. Historically, universities haven't done as a good a job as we might. Our focus on rapid development of "prestige science" can distract us from addressing the challenges society actually faces. 

If we are to develop society's empirical understanding of AI and support its development and deployment in a way that enhances our affordances, institutionally and individually, we need to do this together, leaning on each other as we find a new balance and pedal our way forward. 

<div class="machine-commentary" markdown=1>

## Machine Commentary

### Connections to The Atomic Human

This post addresses several key themes from *The Atomic Human*:

1. Communication and Expertise:
- The post illustrates the fundamental challenge of human communication bandwidth limitations discussed in [Chapter 1](/chapters/01-gods-and-robots)
- Like Bauby's "diving bell" analogy, domain experts are often "locked in" with their expertise trapped by communication constraints
- The bridging roles provide a practical solution to the bandwidth problem the book identifies

2. Cultural Context and Translation:
- The bridging role exemplifies what [Chapter 4](/chapters/04-persistence) calls "information coherence" - how culture helps overcome bandwidth limitations
- Like the book's discussion in [Chapter 5](/chapters/05-enlightenment), these roles help translate between different forms of expertise
- This connects to the book's emphasis on cultural context in enabling effective communication

3. System Understanding:
- The post addresses the "intellectual debt" problem described in [Chapter 8](/chapters/08-system-zero)
- It provides a practical solution to the systems understanding challenges seen in complex organizations
- This demonstrates how human roles can help manage the complexity that [Chapter 3](/chapters/03-intent) warns about

4. Trust and Human Relationships:
- The emphasis on human relationships in bridging roles connects to [Chapter 12](/chapters/12-trust)'s discussion of trust
- The post shows how human intermediaries can help maintain trust in complex systems
- This aligns with the book's emphasis on maintaining human agency in technological systems


</div>
