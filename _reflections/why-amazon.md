---
title: Why Amazon?
date: 2024-12-29
toggle_machine_commentary: true
contributed_by:
  initial:
    date: 2024-12-28
    type: human
    person_id: Neil D. Lawrence
    notes: Stub for page.
  reviewed_by:
  - date: 2024-12-29
    type: human
    person_id: Neil D. Lawrence
	notes: First full draft of post.
  - type: machine
    tool: DALL-E
    version: 3.0
    notes: Illustration of a DevOps team attempting to fix a complex software system in the form of an Amazon truck with complex maintenance manuals. 
featured_image: /assets/images/DALLE-2024-12-29-092138-a-satirical-cartoon-picturing-amazon-as-a-broken-down-vehicle-in-a-repair-garage-the-vehicle-resembles-a-hybrid-between-a-massive-delivery-truck-and.webp
---

In 2016 machine learning was being widely deployed by industry, and one of my main concerns was the emergence of a *digital oligarchy*. I'd seen my African colleagues start construct a [ground up initiative Data Science Africa](/initiatives/data-science-africa-ii) and was advocating for what I called [Open Data Science](/archive/open-data-science-initiative/).

Given all that it seems a strange move to up sticks, leave academia, and join Amazon.

The challenge was best described by a question from an attendee at DSA in Arusha, 2017, Ronald Katamba. He was developing a health monitoring system for cattle and explained that he didn't feel it was a problem to create the device to place on the cattle, he also wasn't worried about doing the data analysis, but what he wanted to understand was how to get the data from the cattle to the computer where the analysis was performed.

This was the same gap I'd also perceived in the ecosystem, researchers were quite able to build there own devices, or code apps on mobile phones. They were also finding it easy to assimilate the latest deep learning methods in their analysis pipelines. And they were much more advanced than other machine learning researchers in engaging with end users. But the challenge of managing a deployed software system at scale was a recurring one.

To me it felt like if anyone was to have the answers, it would be Amazon. 

An important characteristic of all the systems we saw at DSA is that they were moving data from the physical world to the machines for monitoring, analysis and decision making. Whether it was data from cattle, from cassava plants, or from health centres. This brings challenges that aren't there when the data is generated and acted on in the same system. 

It's the interface that in *Being Digital* Nicolas Negroponte described as *bits and atoms*. When information moves between the virtual and physical worlds. One example being Amazon's supply chain, but other examples being found in all the challenges researchers were looking at in deploying data science in the African context.

My hope was that I would learn the lessons of how to manage this interface at Amazon and then share them more widely with my colleagues. But while Amazon arguably manages this interface better than any other company, the answer I found was that they don't know how to do it. Or more precisely they don't know how to automate it.

I've often argued that in terms of money spent the Amazon supply chain is the world's largest intelligence. The demand for goods in the supply chain is forecast from customer data, the supply portfolio from historic supplier data and the goods are automatically purchased and deployed across Amazon fulfilment centres using a combination of machine learning and operations management models (specifically an evolution of the [Newsvendor model](https://en.wikipedia.org/wiki/Newsvendor_model)). But when I was there this "automatic" supply chain had over 1,000 software engineers and technical staff managing it. The team grew even more when I left. 

The challenge comes because under a service oriented architecture, the number of people grows linearly with the number of services created? What is a service oriented architecture? It's famously described in Bezos's "API Mandate". A memo by Jeff Bezos from 2002 that triggered the company's corporate infrastructure to be aligned with its information infrastructure. Each team in Amazon's supply chain owned a service, and that service (for example the buying system that operated the Newsvendor problem) could be accessed by other teams through an API (a software interface) that the team provided. But as the software gets more complex and more services are introduced. In the supply chain optimisation team this meant both the corporate structure and the software structure grew large and unwieldy.

One strategic focus at Amazon was to work out ways of reducing the personnel burden of these large systems, the approach I proposed was "service of services" idea, where instead of one team owning each service, services would be standardised in such a way that software engineering teams could support multiple services in production. However, this would require a change in the way software was built. 

This new approach to software, what we refer to as "data oriented architectures" has become the focus of my research since then. The aim is to build software systems that are self-sustaining. That do not require hordes of software engineers in production. 

<center>

<img src="/assets/images/DALLE-2024-12-29-092138-a-satirical-cartoon-picturing-amazon-as-a-broken-down-vehicle-in-a-repair-garage-the-vehicle-resembles-a-hybrid-between-a-massive-delivery-truck-and.webp" alt="Satirical cartoon of an Amazon Ops team inspecting the supply chain software in an effort to try and solve a problem." width="70%">

<i>Fixing software problems in a complex system can leave a lot of people scratching heads. For large software systems only few companies can affort access to the software engineers needed.</i> 

</center>

It is common to talk about data or compute or machine learning capabilities as approaches large companies have to defend their market position. These companies call these defenses "moats". All of these moats are harmful to our wider ability to assimilate these technologies in areas such as health, education, social care. These are the wicked problems. But the maintenance of large software systems, what hidden moat that defense that prevents smaller more agile companies disrupting their business. It is the [challenge of intellectual debt](/reflections/the-great-ai-fallacy/) and solving it would unlock access to digital solutions not just for my colleagues on the African continent, but across the wider domains of wicked problems.

What is clear is that large tech companies do not have the answers for solving these problems, and further it is not in their interests to develop those answers. Because by building software systems that are more maintainable they undermine their own dominant positions. As my colleagues at Data Science Africa repeatedly show, there is no individual technical challenge that is insurmountable for a smart and motivated individual with the right support. What is missing is the ecosystem of software engineers to deploy and maintain these systems at scale. But it is not just missing for colleagues inUganda and Kenya, but for colleagues in the schools and hospitals.
