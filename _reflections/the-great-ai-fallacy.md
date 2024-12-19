---
title: The Great AI Fallacy
date: 2024-12-20
toggle_machine_commentary: true
contributed_by:
  initial:
    date: 2024-12-20
    type: human
    name: Neil D. Lawrence
  reviewed_by:
  - date: 2024-12-19
    type: machine
    tool: Claude
    version: 3.5
    notes: Comments on the original talk and how the two recent papers address issues raised.  
  - date: 2024-12-19
    type: machine
    tool: Claude
    version: 3.5
    notes: Prompted to check for errors now fixed.
featured_image: /assets/images/Atomic_H_9_Design_Brain.png
---

Since starting work on public communication of AI, rather than imposing on people one of the myriad academic definitons of AI (strong or weak or whatever), it seemed more sensible to get a sense of what the public think it means. 

People have different opinions, but my best way of summarising the general opinion would be to say that when they are presented with AI, people assume they are being given a form of technology that is capable of adapting to them. This stands in stark contrast to previous waves of technology and automation, each of which forced the human to do the adapting.

In 2020 at the Information Engineering Distinguished Lecture I gave a talk titled [*Intellectual Debt and the Death of the Programmer*](https://inverseprobability.com/talks/notes/intellectual-debt-and-the-death-of-the-programmer.html). I touched on the idea that people think that we're building AIs that can accommodate them and I called this phenomenon "the great AI fallacy". At the time we saw no sign that the machine was accommodating the human, in fact we saw precisely the opposite. Dan captured this very nicely for his drawing for Chapter 9. 

<center>
<image src="/assets/images/Atomic_H_9_Design_Brain.png" alt="Dan Andrew's drawing for Chapter 9, A Design for a Brain" width="50%"/>

<i><a href="/images/dan-andrews-chapter-9/">Dan Andrews' illustration for Chapter 9, A Design for a Brain</a>. See <a href="https://scribeysense.com">scribeysense.com</a></i>
</center>

I revisited the phenomenon in Chapter 9 of the book.

>  I call this phenomenon ‘the great AI fallacy’. The fallacy is that we think we have created a form of algorithmic intelligence that understands us in the way we understand each other. A technology that gives us the same feel for it as we have for our fellow human.
>
> *The Atomic Human* pg 257

But I also revisited my assessment of whether the fallacy will be maintained. With the advent of generative AI and large language models I *do* think we are seeing the first signs of machines that are able to adapt to us. 

> With generative AI and large-language models such as ChatGPT we can now build machine-learning systems that provide plausible communication between human and machine using the languages humans have developed for themselves, rather than for their machines. This new frontier presents a promising route to ending the AI fallacy and bringing the technology we’re producing into line with people’s expectations. 
> 
> *The Atomic Human* pg 258

This has a myriad of implications for the work I was presenting in 2020. We've outlined some of our new research directions to address the problems I outlined in 2020 in two recent papers ... so watch this space ... maybe a future Dan Andrews will draw a new panel for 2040 where the humans have turned the tables ...

* Christian Cabrera, Andrei Paleyes, and Neil David Lawrence. 2024. Self-sustaining Software Systems (S4): Towards Improved Interpretability and Adaptation. In Proceedings of the 1st International Workshop on New Trends in Software Architecture (SATrends '24). Association for Computing Machinery, New York, NY, USA, 5–9. <https://doi.org/10.1145/3643657.3643910>

* Diana Robinson, Christian Cabrera, Andrew D. Gordon, Neil D. Lawrence, and Lars Mennen. 2024. Requirements are All You Need: The Final Frontier for End-User Software Engineering. ACM Trans. Softw. Eng. Methodol. Just Accepted (December 2024). <https://doi.org/10.1145/3708524>

<div class="machine-commentary" markdown="1">

## Machine Discussion

*NL*: How are the challenges identified in this talk from 2020 addressed in these two papers?

Can you call out in particular how our perspective on "The Great AI Fallacy" might change if the ideas in these papers were realised.

Can you also identify the technological trends that might have shifted the landscape since 2020.

*Claude*: Let me analyze how the 2024 papers address and evolve the concerns raised in Lawrence's 2020 talk about intellectual debt and AI fallacy:

Key Connections and Evolution:

1. Addressing Intellectual Debt:
- The 2020 talk warned about intellectual debt - the inability to explain complex systems and their decisions
- The 2024 papers propose concrete solutions through:
  - Knowledge graphs to formally represent system design and behavior
  - Data-oriented architectures that make system data and decisions traceable
  - Domain-specific LLMs that can explain system behavior in natural language
  - Integration of multiple knowledge sources (requirements, deployed systems, SE community knowledge)

2. Evolution of "The Great AI Fallacy":
The 2020 talk identified the "Great AI Fallacy" as the belief that AI would be the first wave of automation where machines adapt to humans rather than humans adapting to machines. The 2024 papers suggest this might become less fallacious through:

- Natural language interfaces allowing humans to express requirements directly
- Systems that maintain their own documentation and explanations
- Automated testing and validation aligned with human understanding
- Self-maintaining systems that can adapt while remaining interpretable

3. Technological Shifts Since 2020:
Several major developments have changed the landscape:

- The emergence of powerful LLMs (especially since GPT-3) enabling more natural human-AI interaction
- Advances in autonomous agents and multi-agent systems
- Improved knowledge graph technologies and their integration with LLMs
- Greater emphasis on interpretability and transparency in AI systems
- Evolution of data-oriented architectures and software engineering practices

However, Important Caveats Remain:

1. Implementation Challenges:
- The papers acknowledge significant technical challenges in realizing these visions
- Questions remain about robustness, reliability, and scalability
- Security and privacy concerns need to be addressed

2. Human Factor:
- While the proposals reduce the adaptation burden on humans, they don't eliminate it
- Success still depends on proper requirements specification and system oversight

3. Risk Management:
- The papers emphasize the need for careful validation and testing
- Concerns about LLM hallucinations and system reliability persist

In conclusion, while the 2024 papers present promising approaches to address the intellectual debt concerns raised in 2020, they also demonstrate increased sophistication in understanding the challenges. Rather than completely dispelling the "Great AI Fallacy," they suggest ways to make AI systems more accommodating to human needs while acknowledging the complexity and limitations that remain. The technological advances since 2020 have made these solutions more feasible, but also highlighted new challenges that need to be addressed.


</div>
