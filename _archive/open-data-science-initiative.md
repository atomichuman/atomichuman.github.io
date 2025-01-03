---
title: The Open Data Science Initiative
date: 2024-12-26
toggle_machine_commentary: true
description: |
  On July 1st 2014 I made this post that describes the philosophy I was suggesting we followed at the University of Sheffield to try an address the increasing need for data analysis. 
contributor:
  initial:
    type: human
    name: Neil D. Lawrence
    notes: Original blog post
    date: 2014-07-01
  reviewed_by:
  - type: machine
    tool: Claude
    version: 3.5
    notes: Claude asked to review the appropriateness of this approach given how machine learning, data science and AI have panned out in practice.
    date: 2024-12-26
---

This post describes the approach I was advocating in Sheffield in 2014 to address the increasing challenges from data driven decision making. The details of activities can be found at the website: <http://opendsi.cc/>. 

<div class="machine-commentary" markdown=1>

## Machine Commentary

*NL*: This initiative was launched with a blog post in July 2014. 

Can you summarise what its perspective was on machine learning and suggest to what extent it laid out a useful set of directions for the community to follow?


*Claude*: Let me analyze the 2014 blog post that launched the Open Data Science Initiative and evaluate its perspective and directions.

Key Perspectives on Machine Learning:

1. Data Engines Analogy: The post framed machine learning systems as "data engines" - analogous to heat engines but converting unstructured data into actionable knowledge rather than heat into kinetic energy. This was an interesting conceptual framework for understanding ML's role.

2. Commercial vs Academic Division: The post identified a key tension in ML between:
- Large tech companies accumulating data monopolies and talent (citing Facebook/Google acquisitions)
- Smaller companies/organizations lacking both data access and ML expertise

3. Scientific Applications: It positioned ML as crucial for:
- Bioinformatics and genomics
- Astronomy and climate science
- Healthcare (particularly for complex diseases requiring large-scale data analysis)
- International development (particularly mobile/smartphone applications)

The Proposed Directions:

1. Open Source Focus: Drawing parallels to how open source broke Microsoft's desktop monopoly, it advocated for making ML methods freely available under permissive licenses.

2. Education & Accessibility: Called for:
- Making ML methods accessible to domain scientists
- Bridging the gap between data analysts and scientists
- Running summer schools and workshops
- Creating new educational programs

3. Data Governance: Emphasized balancing:
- Individual privacy rights
- Societal benefits of data sharing
- Giving individuals control over their data

Assessment of Impact:

Looking at subsequent posts from 2014-2016, many of these directions proved prescient:

1. The initiative successfully implemented several proposed programs:
- Recruited ML experts (Mike Croucher, Rich Wilkinson)
- Ran educational events (R Code Cafe, Bioinformatics Awareness Day)
- Engaged in international collaboration (Kenya Data Science School)

2. The emphasis on open source and education anticipated important developments in ML:
- Growth of open source ML frameworks
- Increasing focus on ML education and accessibility
- Recognition of data privacy concerns

3. Some limitations:
- The post may have underestimated how dominant large tech companies would become in ML
- The vision of returning data control to individuals hasn't fully materialized
- The tension between open science and commercial interests remains challenging

Overall, while not all aspects of the vision have been realized, the post identified several crucial directions that have shaped ML development:
- The importance of open source
- The need for broader ML education
- The challenge of balancing privacy and utility
- The value of connecting ML experts with domain scientists

The initiative appears to have made concrete progress on these goals within its scope, even if the broader challenges it identified remain ongoing concerns for the ML community.

</div>

Not sure if this is really a blog post, it's more of a 'position paper' or a proposal, but it's something that I'd be very happy to have comment on, so publishing it in the form of a blog seems most appropriate.

We are in the midst of the information revolution and it is being driven by our increasing ability to monitor, store, interconnect and analyse large interacting sets of data. Industrial mechanisation required a combination of coal and heat engine. Informational mechanisation requires the combination of data and *data engines*. By analogy with a heat engine, which takes high entropy heat energy, and converts it to low entropy, actionable, kinetic energy, a *data engine* is powered by large unstructured data sources and converts them to actionable knowledge. This can be achieved through a combination of mathematical and computational modelling and the combination of required skill sets falls across traditional academic boundaries.

**Outlook for Compaines**

From a **commercial perspective** companies are looking to characterise consumers/users in unprecedented detail. They need to characterize their users’ behavior in detail to

1.  provide better service to retain users,
2.  target those users with commercial opportunities.

These firms are competing for global dominance, to be *the* data repository. They are excited by the power of interconnected data, but made nervous about the natural monopoly that it implies. They view the current era as being analogous to the early days of ‘microcomputers’: competing platforms looking to dominate the market. They are nervous of the next stage in this process. They foresee the natural monopoly that the interconnectedness of data implies, and they are pursuing it with the vigour of a young Microsoft. They are paying very large fees to acquire potential competitors to ensure that they retain access to the data (e.g. [Facebook’s purchase of Whatsapp for $19 billion](http://www.bbc.co.uk/news/business-26266689)) and they are acquiring expertise in the analysis of data from academia either through direct hires ([Yann LeCun from NYU to Facebook](https://www.facebook.com/yann.lecun/posts/10151728212367143), [Andrew Ng from Stanford to found a $300 million Research Lab for Baidu](http://phys.org/news/2014-05-china-baidu-scores-artificial-intelligence-coup.html)) or purchasing academic start ups ([Geoff Hinton’s DNNResearch from Toronto to Google](http://www.wired.com/2014/01/geoffrey-hinton-deep-learning/), the [purchase of DeepMind by Google for $400 million](http://techcrunch.com/2014/01/26/google-deepmind/)). The interest of these leading internet firms in machine learning is exciting and a sign of the major successes of the field, but it leaves a **major challenge** for firms that want to enter the market and either provide competing or introduce new services. They are debilitated by

1.  **lack of access to data**,
2.  **lack of access to expertise**.

 

**Science**

Science is far more evolved than the commercial world from the perspective of data sharing. Whilst its merits may not be
 universally accepted by individual scientists, communities and funding agencies encourage widespread sharing. One of the most significant endeavours was the human genome project, now nearly 25 years old. In computational biology there is now widespread sharing of data and methodologies: measurement technology moves so quickly that an efficient pipeline for development and sharing is vital to ensure that analysis adapts to the rapidly evolving nature of the data (e.g. cDNA arrays to Affymetrix arrays to RNAseq). There are also large scale modelling and sharing challenges at the core of other disciplines such as astronomy (e.g. [Sarah Bridle’s GREAT08 challenge](http://arxiv.org/abs/0802.1214) for Cosmic Lensing) and climate science. However, for many scientists their access to these methodologies is restricted not by lack of availability of better methods, but through technical inaccessibility. A **major challenge in science** is **bridging the gap between the data analyst and the scientist**. Equipping the scientist with the fundamental concepts that will allow them to explore their own systems with a *complete* mathematical and computational toolbox, rather than being constrained by the provisions of a commercial ‘analysis toolbox’ software provider.

**Health**

Historically, in health, scientists have worked closely with clinicians to establish the cause of disease and, ideally, eradicate
 them at source. Antibiotics and vaccinations have had major successes in this area. The diseases that remain are

1.  resulting from a large range of initial causes; and as a result having no discernible target for a ‘magic bullet’ cure (e.g. heart disease, cancers).
2.  difficult to diagnose at early stage, leading to identification only when progress is irreversible (e.g. dementias) or
3.  coevolving with our clinical advances developments to subvert our solutions (e.g. C difficile, multiple drug resistant tuberculosis).

Access to large scale interconnected data sources again gives the promise of a route to resolution. It will give us the ability to better characterize the cause of a given disease; the tools to monitor patients and form an early diagnosis of disease; and the biological
 understanding of how disease agents manage to subvert our existing cures. Modern data allows us to obtain a very high resolution,
 multifaceted perspective on the patient. We now have the ability to characterise their genotype (through high resolution sequencing) and their phenotype (through gene and protein expression, clinical measurements, shopping behaviour, social networks, music listening behaviour). A **major challenge in health** is **ensuring that the privacy of patients is respected** whilst **leveraging this data for wider societal benefit **in **understanding human disease**. This requires development of new methodologies that are capable of assimilating these information resources on population wide scales. Due to the complexity of the underlying system, the methodologies required are also more complex than the relatively simple approaches that are currently being used to, for example, understand commercial intent. We need more sophisticated and more efficient data engines.

**International Development**

The wide availability of mobile telephones in many developing countries provides opportunity for modes of development that differ considerably from the traditional paths that arose in the past (e.g. canals, railways, roads and fixed line telecommunications). If countries take advantage of these new approaches, it is likely that the nature of the resulting societies will be very different from those that arose through the industrial revolution. The rapid adoption of [mobile money](http://en.wikipedia.org/wiki/Mobile_payment), which arguably places parts of the financial system in many sub-saharan African countries ahead of their apparently 'more developed' counterparts, illustrates what is possible. These developments are facilitated by low capital cost of deployment. They are reliant on the mobile telecommunications architecture and the widespread availability of handsets. The ease of deployment and development of mobile phone apps, and the rapidly increasing availability of affordable smartphone handsets presents opportunities that exploit the particular advantages of the new telecommunications ecosystem. A key strand to our thinking is that these developments can be pursued by local entrepeneurs and software developers (to see this in action check out the work of the [AI-DEV group here](http://aidevmakerere.blogspot.co.uk/)). The two main challenges for enabling this to happen are **mechanisms for data sharing** that retain the individual's control over their data and **the education of local researchers and students**. These aims are *both* facilitated by the open data science agenda.

**Common Strands to these Challenges**

The challenges described above have related strands to them that can be summarized in three areas:

1.  Access to data whilst balancing the individual’s right to privacy alongside the societal need for advance.
2.  Advancing methodologies: development of methodologies needed to characterize large interconnected complex data sets
3.  Analysis empowerment: giving scientists, clinicians, students, commercial and academic partners the ability to analyze their own data using the latest methodological advances.

**The Open Data Science Idea**

It now seems absurd to posit a ‘magic bullet cure' for the challenges described above across such diverse fields, and indeed, the underlying circumstances of each challenge is sufficiently nuanced for any such sledge hammer to be brittle. However, we will attempt to describe a philosophical approach, that when combined with the appropriate domain expertise (whether that's cultural, societal or technical)  will aim to address these issues in the long term.

Microsoft’s quasi-monopoly on desk top computing was broken by open source software. It has been estimated that the [development cost of a full Linux system would be $10.8 billion](http://www.cnet.com/uk/news/linux-10-8-billion-worth-of-r-d-for-free/) [dollars](http://www.cnet.com/uk/news/linux-10-8-billion-worth-of-r-d-for-free/). Regardless of the veracity of this figure, we know that
 several leading modern operating systems are based on open source (Android is based on Linux, OSX is based on FreeBSD). If it weren't for open source software, then these markets would have been closed to Microsoft’s competitors due to entry costs. We can do much to celebrate the competition provided by OSX and Android and the contributions of Apple and Google in bringing them to market, but the enablers were the open source software community. Similarly, at launch both Google and Facebook’s architectures, for web search and social networking respectively, were entirely based on open source software and both companies have contributed informally and formally to its development.

Open data science aims to bring the same community resource assimilation together to capitalize on underlying social driver of this phenomenon: many talented people would like to see their ideas and work being applied for the widest benefit possible. The modern internet provides tools such as github, IPython notebook and reddit for easily distribution and comment on this material. In Sheffield [we have started making our ideas available](http://bit.ly/1ttiTHy) through these mechanisms. As academics in open data science part of our role should be to:

1.  Make new analysis methodologies available as widely and rapidly as possible with as few conditions on their use as possible
2.  Educate our commercial, scientific and medical partners in the use of these latest methodologies
3.  Act to achieve a balance between data sharing for societal benefit and the right of an individual to own their data.

We can achieve 1) through widespread distribution of our ideas under flexible [BSD-like licenses](http://en.wikipedia.org/wiki/BSD_licenses) that give commercial, scientific and medical partners as much flexibility to adapt our methods and analyses as possible to their own circumstances. We will achieve 2) through undergraduate courses, postgraduate courses, summer schools and widespread distribution of teaching materials. We will host projects from across the University from all departments. We will develop new programs of study that address the gaps in current expertise. Our actions regarding 3) will be to support and advise initiatives which look to return to the individual more control of their own data. We should do this simultaneously with engaging with the public on what the technologies behind data sharing are and how they will benefit society.

**Summary**

Open data science should be an inclusive movement that operates across traditional boundaries between companies and academia. It could bridge the technological gap between 'data science' and science. It could address the barriers to large scale analysis of health data and it will build bridges between academia and companies to ease access to methodologies and data. It will make our ideas publicly available for consumption by the individual; in developing countries, commercial organisations and public institutes.

In Sheffield we have already been actively pursuing this agenda through different strands: we have been making software available for over a decade, and now are doing so with extremely liberal licenses. We are running a series of Gaussian process summer schools, which have included roadshows in UTP, Colombia (hosted by [Mauricio Alvarez](https://sites.google.com/site/maalvarezl/)) and Makerere University, Uganda (hosted by [John Quinn](http://cit.mak.ac.ug/staff/jquinn/)). We have organised workshops targeted at Big Data and we are making our analysis approaches freely available. We have organised courses locally in Sheffield in programming targeted at biologists (taught by [Marta Milo](http://www.sheffield.ac.uk/bms/research/milo)) and have begun a series of meetings on Data Science (speakers have included [Fernando Perez](http://fperez.org/), [Fabian Pedregosa](http://fa.bianp.net/), [Michael Betancourt](http://www2.warwick.ac.uk/fac/sci/statistics/staff/academic-research/betancourt/) and [Mike Croucher](http://www.walkingrandomly.com/)). We have taught on the ML Summer School and at EBI Summer Schools focused on Computational Systems Biology. Almost all these activities have led to ongoing research collaborations, both for us and for other attendees. Open Data Science brings all these strands together, and it expands our remit to communicate using the latest tools to a wider cross section of clinicians and scientists. Driven by this agenda we will also expand our interaction with commercial partners, as collaborators, consultants and educators. We welcome other groups both in the UK and internationally in joining us in achieving these aims.

