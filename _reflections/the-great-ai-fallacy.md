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
  - date: 2024-12-20
    type: machine
    tool: Claude
    version: 3.5
    notes: Updated machine conversation with third relevant paper.  
featured_image: /assets/images/Atomic_H_9_Design_Brain.png
---

Yann's [Facebook AI lab launch](/reflections/facebook-ai-lab-launch/) triggered me to think about what what artificial intelligence means. It also triggered me to engage more with public dialogue around AI. I wrote one of my first articles about the launch for [The Conversation](https://theconversation.com/are-you-an-expert-in-machine-learning-facebook-is-hiring-21439). 

Rather than imposing on people one of the myriad academic definitons of AI (strong or weak or whatever), it seemed more sensible to get a sense of what the public think it means. 

People have different opinions, but my best way of summarising the general opinion would be to say that when they are presented with AI, people assume they are being given a form of technology that is capable of adapting to them. This stands in stark contrast to previous waves of technology and automation, each of which forced the human to do the adapting.

In 2020 at the Information Engineering Distinguished Lecture I gave a talk[^1] titled [*Intellectual Debt and the Death of the Programmer*](https://inverseprobability.com/talks/notes/intellectual-debt-and-the-death-of-the-programmer.html). I touched on the idea that people think that we're building AIs that can accommodate them and I called this phenomenon "the great AI fallacy". At the time we saw no sign that the machine was accommodating the human, in fact we saw precisely the opposite. Dan captured this very nicely for his drawing for Chapter 9. 

[^1]: The talk outlined my research programme for the next five years. Main funding has been provided a UKRI Senior AI Fellowship. We [refer to the project as AutoAI](https://mlatcl.github.io/projects/autoai.html) and you can [find the strategic research agenda for it here](https://mlatcl.github.io/publications/machine-learning-from-innovation-to-deployment-a-strategic-research-agenda-for-autoai.html). 

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

This has a myriad of implications for the challenges I was presenting in 2020. We've outlined some of our new research directions to address them in some of our papers ... so watch this space ... maybe a future Dan Andrews will draw a new panel for 2040 where the humans have turned the tables ...

* Christian Cabrera, Andrei Paleyes, and Neil D. Lawrence. 2024. Self-sustaining Software Systems (S4): Towards Improved Interpretability and Adaptation. In Proceedings of the 1st International Workshop on New Trends in Software Architecture (SATrends '24). Association for Computing Machinery, New York, NY, USA, 5–9. <https://doi.org/10.1145/3643657.3643910>

* Diana Robinson, Christian Cabrera, Andrew D. Gordon, Neil D. Lawrence, and Lars Mennen. 2024. Requirements are All You Need: The Final Frontier for End-User Software Engineering. ACM Trans. Softw. Eng. Methodol. Just Accepted (December 2024). <https://doi.org/10.1145/3708524>

* Christian Cabrera, Viviana Bastidas, Jennifer Schooling, and Neil D. Lawrence. 2024. The Systems Engineering Approach in Times of Large Language Models. 58th Hawaii International Conference on System Sciences (HICSS-58). <https://doi.org/10.48550/arXiv.2411.09050>
    


<div class="machine-commentary" markdown="1">

## Machine Discussion

*NL*: How are the challenges identified in this talk from 2020 addressed in these three papers?

Can you call out in particular how our perspective on "The Great AI Fallacy" might change if the ideas in these papers were realised.

Can you also identify the technological trends that might have shifted the landscape since 2020.

*Claude*: Let me analyze how the challenges and concerns raised in Neil Lawrence's 2020 talk about "The Great AI Fallacy" relate to and potentially evolve through the ideas presented in these three more recent papers.

The Great AI Fallacy identified in the 2020 talk was the implicit promise that AI would be the first wave of automation where machines adapt to humans, rather than humans adapting to machines. The talk warned that without significant changes to how we design and deploy these systems, we risked being "enslaved by super-ignorance" rather than super-intelligence.

Key shifts and developments evident in the 2023-2024 papers:

1. Systems Engineering Evolution
- The systems engineering paper acknowledges the fundamental challenges Lawrence identified around intellectual debt and system complexity, but proposes concrete frameworks for addressing them through systems engineering principles
- Rather than focusing just on individual model interpretability, it promotes holistic system views and knowledge integration across different perspectives
- This represents a shift from seeing AI components as black boxes to treating them as parts of interpretable socio-technical systems

2. Self-Sustaining Software Systems (S4)
- The S4 concept directly tackles Lawrence's concerns about intellectual debt by proposing knowledge loops between requirements, deployed systems, and engineering knowledge
- It suggests ways to make systems self-documenting and self-maintaining while remaining under meaningful human oversight
- This provides a potential path to systems that can adapt to humans while remaining comprehensible and controllable

3. End-User Software Engineering
- The requirements-driven end-user engineering paper envisions empowering users to directly shape AI systems through natural requirements
- This could help address Lawrence's concern about systems being imposed on users without understanding their needs
- However, it maintains focus on human agency and oversight rather than fully autonomous adaptation

Technological Shifts Since 2020:
1. The emergence of Large Language Models as general-purpose interfaces has created new possibilities for human-AI interaction and system documentation
2. Advances in automated code generation and system synthesis have made some of the proposed approaches more feasible
3. Greater recognition of socio-technical system complexity has led to more sophisticated frameworks for managing it

The "Great AI Fallacy" Assessment:
While these papers provide more sophisticated frameworks for human-AI collaboration, they don't fully invalidate Lawrence's core concern. Instead, they suggest a middle path:
- Rather than machines simply adapting to humans or humans adapting to machines, they propose structured ways for humans and machines to co-evolve while maintaining human agency
- They acknowledge the complexity challenges but offer concrete approaches to managing them rather than assuming they'll resolve automatically
- The focus shifts from pure automation to augmented human capability with maintainable oversight

However, many of the fundamental challenges Lawrence identified around intellectual debt and system complexity remain relevant. The papers propose frameworks to address them but successful implementation still requires significant changes to how we approach software development and deployment.

</div>
