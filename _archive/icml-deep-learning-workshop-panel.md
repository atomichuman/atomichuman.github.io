---
title: Deep Learning Workshop Panel Discussion - ICML 2015
date: 2015-07-11
description: |
  On July 11th 2015 the two-day Deep Learning workshop at ICML ended with a panel session that is available on YouTube. I've processed the transcript from that panel to render the prose more flowing.

  <center>
  <iframe width="630" height="482" src="https://www.youtube.com/embed/EiStan9i8vA"</iframe>
  <i>Panel from ICML 2015 Deep Learning Workshop. Moderator: Max Welling
Panelists: Demis Hassabis, Yann LeCun, Yoshua Bengio, Kevin Murphy, Neil D. Lawrence, Juergen Schmidhuber.</i>
  </center>
contributor:
  initial:
    type: human
    name:  Demis Hassabis, Yann LeCun, Yoshua Bengio, Kevin Murphy, Neil D. Lawrence, Juergen Schmidhuber, Max Welling
    notes: Panel organised by Diederik Kingma and Kyunghyun Cho
  reviewed_by:
  - type: machine
    tool: Claude
    version: 3.5
    notes: Iteratively reviewed in (roughly) two minute segments by Claude and Neil.
    date: 2024-12-24
  - type: human
    person_id: Neil D. Lawrence
    notes: Iteratively reviewed by Claude and Neil re-listening to video.
    date: 2024-12-24
  - type: machine
    tool: Claude
    version: 3.5
    notes: Requested summary of panel.
    date: 2024-12-26
---

<div class="machine-commentary" markdown=1>

## Machine Commentary

*NL*: This panel occurred at ICML in July 2015 can you summarise what its perspective was on machine learning and suggest to what extent it laid out a useful set of directions for the community to follow?

*Claude*: Let me analyze this historically significant panel discussion from 2015 and assess its perspectives and predictions:

Key Themes and Predictions:

1. State of Deep Learning (2015):
- The panel recognized that deep learning had transformed computer vision and speech recognition
- They noted that NLP had not yet been "revolutionized" but predicted it would be (which proved accurate)
- They identified unsupervised learning as a major challenge (which remains relevant today)
- They emphasized the importance of developing systems with reasoning, planning, and episodic memory

2. Industry vs Academia:
- The panel pushed back against concerns about industry dominance
- They argued that computational advantages were temporary (2-year lead)
- They emphasized the importance of open research and publication
- Companies like Google, Facebook, and DeepMind were committed to publishing their research
- They noted that restricted access to data and compute could drive creative solutions

3. Technological Risks:
- The panel was notably skeptical of existential AI risk concerns
- They viewed concerns about superintelligence as premature
- They identified more immediate concerns about:
  - Privacy
  - Data monopolies
  - Social inequality
  - Technology-driven unemployment
  - The need for ethical deployment

Assessment of Their Predictions:

Many of their predictions proved prescient:
- The revolution in NLP did occur (with transformers)
- Industry-academia collaboration remained vital
- Compute access became more democratized through cloud services
- The immediate concerns they identified about privacy and data monopolies became major issues

However, some areas evolved differently:
- The optimism about solving unsupervised learning in its classical form was superseded by self-supervised learning
- The dismissal of AI risk concerns appears less certain given recent developments
- The vision of AI progress being gradual and predictable has been challenged by rapid breakthroughs

The panel laid out several useful directions:
1. Focus on fundamental algorithmic advances rather than just scaling
2. Emphasis on reproducible research and open science
3. Need for robust evaluation across different datasets
4. Importance of addressing practical applications like healthcare
5. Recognition of the need for privacy-preserving techniques

This panel captured a crucial moment in AI history - the early stages of the deep learning revolution - and while not all predictions proved accurate, it helped establish important principles about openness, collaboration, and responsible development that continue to influence the field.

Would you like me to expand on any of these aspects or explore other themes from the discussion?

*NL*: Can you capture each panelist's perspective with a quick summary.

*Claude*: Here's a summary of each panelist's distinct perspective from the 2015 discussion:

**Yoshua Bengio**
- Emphasized unsupervised learning as a crucial challenge
- Advocated for open review systems and transparency in research
- Focused on the untapped potential of NLP and language understanding
- Promoted rigorous scientific practices and sharing limitations of methods

**Yann LeCun**
- Strongly advocated for open research and code sharing
- Emphasized that industry labs need openness to maintain research quality
- Viewed technology transfer between academia and industry as complementary
- Dismissed AI risk concerns, emphasizing that machines won't inherently develop human-like drives

**Demis Hassabis**
- Focused on practical applications like healthcare and drug discovery
- Emphasized the need for fundamental algorithmic breakthroughs beyond just scaling
- Advocated for synthetic data as a solution for smaller labs
- Balanced view on AI safety - saw extreme concerns as overblown but believed some preparatory research was warranted

**Juergen Schmidhuber**
- Most optimistic about rapid AI progress
- Predicted human-level AI within the century
- Emphasized the importance of curiosity and active learning in AI systems
- Envisioned AI developing as an ecology of different specialized systems rather than a single superintelligence

**Neil Lawrence**
- Focused on practical concerns about data privacy and digital oligarchies
- Emphasized the importance of human-AI interaction and interface design
- Advocated for universities' unique role in handling sensitive data
- Stressed the need for updating rights and protections for the digital age

**Kevin Murphy**
- Emphasized the importance of reproducible research
- Focused on practical applications in healthcare and scientific discovery
- Advocated for testing systems across multiple datasets
- Highlighted the importance of learning from limited data like humans do

This panel represented a fascinating mix of perspectives from both industry and academia, with each panelist bringing unique insights while sharing common ground on issues like open research and the importance of responsible development.

</div>

## Introduction [0:00](https://www.youtube.com/watch?v=EiStan9i8vA)

**Max Welling**: Welcome everybody to the final event, the panel discussion. Let me introduce our distinguished panelists. Here on the left is Juergen Schmidhuber from IIA Switzerland, then we have Neil Lawrence from the University of Sheffield, next to that is Kevin Murphy from Google, then we have Yoshua Bengio from University of Montreal, Yann LeCun from Facebook and NYU, and Demis Hassabis from Google DeepMind.

[0:48](https://www.youtube.com/watch?v=EiStan9i8vA?t=46s) There's one rule of engagement for today which is that we'll be speaking about the future, and we're going to leave the ghost of deep learning past for another panel discussion.

[1:02](https://www.youtube.com/watch?v=EiStan9i8vA?t=62s) The questions are projected up here in case you forgot what they are. I actually sent the questions to them yesterday evening so they had some time to think about them. We'll spend about 15 minutes on each question. There are four questions, and if there's time left over after each 15 minutes, I'm going to ask the audience to think up some questions. You know when you have a question when your heart starts pounding really fast - that's the moment you know that you want to ask a question.

[1:43](https://www.youtube.com/watch?v=EiStan9i8vA?t=103s) I'm also going to randomize the order of who is going to answer the questions first, in order to remove any bias.

## Question One: Future Impact and Limitations [1:48](https://www.youtube.com/watch?v=EiStan9i8vA?t=108s)

**Max Welling**: Deep learning has transformed fields such as speech recognition, image analysis, and natural language processing. The question is: which fields and applications are next in line to be revolutionized by deep learning? And reversely, on what problems or data does deep learning not work so well? The first to answer that question is Yoshua Bengio - since he's looking at me, not quite random, but you know...

**Yoshua Bengio**: [2:22](https://www.youtube.com/watch?v=EiStan9i8vA?t=142s) Thank you Max, hello everyone. I don't think that natural language processing has been revolutionized in the way that speech and computer vision have been. But I think it's very likely that we'll see some of the biggest changes in that area. In particular, there's a lot of effort these days in the general direction of language understanding. 

[2:54](https://www.youtube.com/watch?v=EiStan9i8vA?t=174s) We've seen a lot of progress, for example, in machine translation, but I wouldn't call that a revolution. We've reached a state-of-the-art where we were very far from it just one year ago, but I think the best is still to come. So that's one area where I see more big changes ahead.

[3:17](https://www.youtube.com/watch?v=EiStan9i8vA?t=197s) Regarding the second question about what remains really challenging - something I keep saying over and over again, and other people as well - is unsupervised learning. We are spending a lot of energy on this and there's a good reason. It's because if we are able to make serious progress on this, I believe there could be very big payoffs for AI. Really having machines that understand a lot more about our world and are able to take advantage of the vast quantities of unlabeled data.

**Max Welling**: Let's move to the right in cyclic order. Yann?

**Yann LeCun**: [4:04](https://www.youtube.com/watch?v=EiStan9i8vA?t=244s) Well, I was going to say about the same thing. I don't think NLP has been revolutionized yet. It's pretty clear the progress is steep, so we're probably going to see this kind of announced revolution for NLP, but it hasn't quite happened. There are also a lot of pockets of applications in computer vision which have not really been explored very much. Things like medical image analysis - I think it's going to be a huge practical set of applications of deep learning that people haven't quite explored yet, with enormous societal consequences.

[4:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=285s) In terms of things that machines cannot do yet with deep learning, we don't really have a good handle on how to do unsupervised learning, but that's not really an application - it's more like a class of technique we're going to apply to something else, like video. Video is probably one area where unsupervised learning is really indispensable, and that might be a way to teach machines to have common sense.

[5:11](https://www.youtube.com/watch?v=EiStan9i8vA?t=311s) The other thing that we don't know how to do very well - and there is a lot of very interesting work going on in this area, in particular at DeepMind and Facebook and various other places - is sort of reasoning and being able to work with working memory. This means accumulating knowledge or facts in a sort of episodic memory system and then being able to do long chains of reasoning and planning on top of this - all the things that we expect robots or animals and humans to do. We don't yet do a particularly good job at this.

**Demis Hassabis**: [5:53](https://www.youtube.com/watch?v=EiStan9i8vA?t=353s) For the first part of the question, I think there are just so many areas and markets that are going to be revolutionized by deep learning in the next few years and other machine learning technologies. I know there are lots of people in the room working on things like drug discovery. We're really interested in healthcare applications, medical imaging being one of those. I know of friends of mine who are using these techniques in finance and hedge funds - I think that's going to be another revolution if you're so inclined.

[6:21](https://www.youtube.com/watch?v=EiStan9i8vA?t=381s) There's been a lot of Q&A dialogue work at various places including Facebook. Robotics and continuous control is another interesting area. Ian [Goodfellow] mentioned earlier in his talk about cybersecurity and fraud detection. Really, anywhere where there's sequential decision making to be done, especially when combined with reinforcement learning.

[6:46](https://www.youtube.com/watch?v=EiStan9i8vA?t=406s) For the second question, in terms of what we can't do at the moment - obviously I agree about unsupervised learning. Also the idea of having something like a hippocampal function to bring episodic memory and working memory into deep learning - that's something we're working very hard on with [neural Turing machines](https://arxiv.org/abs/1410.5401), and Facebook are working on as well. I think that's going to be huge.

[7:09](https://www.youtube.com/watch?v=EiStan9i8vA?t=429s) The other things that we think are really important that haven't been cracked yet are things like continual learning - that's the idea of doing one task after another task but then not forgetting and still being able to perform well on the original tasks. Even within the domain of Atari games that's pretty tricky. And then moving on even beyond that, things like transfer learning where you not only don't overwrite what you already know when you learn a new task, you actually bring to bear your previous knowledge in some useful appropriate way to the new task. So I think there are huge challenges ahead.

**Max Welling**: [7:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=465s) Thank you. Juergen.

**Juergen Schmidhuber**: [7:51](https://www.youtube.com/watch?v=EiStan9i8vA?t=471s) I agree with much of what my colleagues have said before. There are the kind of low-hanging fruit which are passive pattern recognition where through the progress in computation per dollar, which is still increasing by a factor of 100 per decade, the stuff that already works well is going to work 100 times as well. At the moment it seems like it scales linearly, and so not only vocabularies of that size but 100 times the size, video understanding, understanding how video relates to text that explains it - I would call that low-hanging fruit because it's kind of clear how that will be done, although faster computers and cheaper computers will be necessary to spread it widely.

[8:29](https://www.youtube.com/watch?v=EiStan9i8vA?t=509s) And then there's the really interesting stuff which is about reinforcement learning, where you really try to maximize your future expected reward, but then where you do the thing that little capuchin monkeys do already - namely plan hierarchically, reuse previously learned sub-programs. For example, up there in the tree there's this fruit, and you see how this little capuchin monkey knows that he first has to go to the base of the tree and then invoke this subprogram for climbing up the tree and do all these little things that we do so easily but our machines don't.

[9:12](https://www.youtube.com/watch?v=EiStan9i8vA?t=552s) And there are these excellent pattern recognizers which retrospectively decompose observed patterns into hierarchical modules. You look at LSTM networks that understand language and you see all kinds of high-level units that modularize this entire thing in a hierarchical fashion. What we don't have yet is similar things for planning in the future where you then have these obvious sub-goals that the little capuchin monkey has, and you see how it interacts with the world and does all these things that we humans do - we just do it on a grander scale.

[9:47](https://www.youtube.com/watch?v=EiStan9i8vA?t=587s) So I think within the next 10 years or so, not much longer, maybe just a few years, we will have something like an artificial animal-like intelligence - not necessarily connected to a real body because the mechatronics of real bodies we cannot really copy.

[10:07](https://www.youtube.com/watch?v=EiStan9i8vA?t=607s) I'm much more impressed by the physical hardware of monkeys than by their intellectual skills. But once we have one of these little guys in a simulation which is sufficiently complex - a simulated world with which you can interact, you can talk to the guy, he sees you, knows what you're doing, understands what you're doing and plans ahead to achieve its goals, whatever it is - we will have that I think in the next not so many years.

[10:36](https://www.youtube.com/watch?v=EiStan9i8vA?t=636s) And once we have a little capuchin monkey-like intelligence, then the step to the next step to human-level intelligence may not be so great because look at Evolution - it took billions of years to evolve a capuchin monkey but just a few millions years on top of that to have something like human-level intelligence.

**Max Welling**: [11:05](https://www.youtube.com/watch?v=EiStan9i8vA?t=665s) Okay Neil, go on...

**Neil Lawrence**: [11:10](https://www.youtube.com/watch?v=EiStan9i8vA?t=670s) Yeah, so I thought it was interesting that the three subjects that were mentioned - broadly speaking are three sort of sister fields: vision, speech, and natural language processing. They're in some sense already quite well-studied fields in themselves and there's a lot of data. They're also things that humans are really good at and computers traditionally bad at. So I think it's interesting that these three have been identified as the ones where deep learning is making a lot of progress.

[11:35](https://www.youtube.com/watch?v=EiStan9i8vA?t=695s) With regard to NLP, maybe it's not revolutionized it yet but NLP is kind of like a rabbit in the headlights waiting to be flattened by the deep learning steam train. Everything that's been mentioned, I thought that was very relevant and interesting, particularly with respect to reinforcement learning.

[11:46](https://www.youtube.com/watch?v=EiStan9i8vA?t=706s) It makes me think of an example Carl Rasmussen uses - he shows a chess board and says "When can computers play chess?" And of course you can what pieces to move far earlier than you can actually work out the motor planning and control to move the pieces. And I think it's fascinating that we're so far behind on what should be a relatively simple task such as motor control. You said we'll have the capuchin monkey working away but it won't be able to go anywhere. No climbing up trees! I mean, it's incredible when you look at what animals can do. 

[12:16](https://www.youtube.com/watch?v=EiStan9i8vA?t=744s) The domain I'm really excited about is health, as Demis mentioned. I think that's going to be a really, really important one. One thing I'm excited about there is moving into the domain where we're doing things that humans aren't good at. So we can do all these tasks, but we do it by looking at a lot less data. We need to be able to do things like look at entire population's health statistics and draw conclusions about how we should deploy treatments. This is something humans - we don't have systems at all demonstrating systems that can do that, whereas here we have demonstrator systems.

[12:54](https://www.youtube.com/watch?v=EiStan9i8vA?t=774s) And then I think a final thing that's really interesting is how we interface the results of the deep learning to humans. I think we're in a difficult area where when people look at what a computer says to them, it outputs something, they just assume it's right. They don't have the same sense with the computer of understanding its uncertainty, how it expresses itself, and why it's coming to a particular conclusion.

[13:19](https://www.youtube.com/watch?v=EiStan9i8vA?t=799s) I'm kind of really interested in this intermediate stage before we get very good AI where we're just using AI as an extension of ourselves - how we ensure that the conclusions are appropriately presented to human operators. 

**Yoshua Bengio**: [13:32](https://www.youtube.com/watch?v=EiStan9i8vA?t=812s) But do you feel that you understand how I came to my conclusions? 

**Kevin Murphy**: Your own conclusions even...

**Neil Lawrence**: [13:40](https://www.youtube.com/watch?v=EiStan9i8vA?t=820s) No.

**Yoshua Bengio**: That's what I thought.

**Neil Lawrence**: [13:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=826s) But I want the deep learning thing that's more like ... I was going to say more like my wife but that's probably a bad example ... more like someone I've known for a long time.

**Max Welling**: [13:51](https://www.youtube.com/watch?v=EiStan9i8vA?t=831s) Right. Kevin?

**Kevin Murphy**: [13:58](https://www.youtube.com/watch?v=EiStan9i8vA?t=838s) It's hard being last - everything's been said. I would certainly echo that health is waiting to be revolutionized. Medical image analysis and also reading all of these articles that appear in Nature and New England Journal of Medicine - there's a ridiculous rate of publications coming out that humans can't consume. This is in line with what Neil was saying.

[14:18](https://www.youtube.com/watch?v=EiStan9i8vA?t=858s) Then you get into this interesting territory - no one's mentioned combining all of this. You want to interpret your image in the context of the surrounding text and maybe clinical markers and of course background knowledge that you've acquired. In all of these domains but especially in medicine, you need to combine different modalities.

[14:36](https://www.youtube.com/watch?v=EiStan9i8vA?t=876s) Then, echoing the reinforcement learning theme, when the system can actually collect its own data and maybe create hypotheses and then go test them in the lab or do different tests on patients within the realms of ethics - it becomes a closed-loop system. Things can really take off, especially if it's done in simulation or an automated laboratory.

[14:58](https://www.youtube.com/watch?v=EiStan9i8vA?t=898s) I think science is going to be revolutionized by automated machines carrying out high-throughput hypothesis testing. But to make that happen we need algorithms that can come up with interesting hypotheses, preferably causal or mechanistic, which can then let the system determine if A is inducing or inhibiting B and design the right experiment.

[15:17](https://www.youtube.com/watch?v=EiStan9i8vA?t=917s) Right now I think we're picking up on a lot of correlation, as [Leon Bottou](https://leon.bottou.org/talks/2challenges) said this in his talk about the car in the pool - we learn from context that it doesn't look like a car because it's not on the road but it clearly is a car. So we haven't really got the essence of what makes something a car.

[15:32](https://www.youtube.com/watch?v=EiStan9i8vA?t=932s) Just a couple other examples - earlier today in this Workshop [Oriol Yinyals](https://www.youtube.com/watch?v=IpJczR53grA) gave a great talk about using RNNs to learn the traveling salesman problem and the convex hull of a set of points, but it didn't quite get the concept right. The traveling salesman solutions that it created - I don't want to pick on Oriol in particular, but just as an example - they would loop back on themselves. It didn't get the concept of a tour, which is that you visit every city once and only once, and then subject to that constraint you want to minimize the distance.

[16:00](https://www.youtube.com/watch?v=EiStan9i8vA?t=960s) That's sort of the basic essence of the problem that it didn't capture - it's sort of a logical constraint. Similarly, in the car in the swimming pool setting, there's sort of an essence of "car" which it still maintains even though it's out of context. So I think we're missing the fundamentals in some ways - we're picking the low-hanging fruit where the color or texture is correlated with the object, but we're missing the fact that the shape or its function is really what defines it. These are some of the problems that I think we haven't solved.

**Max Welling**: [16:27](https://www.youtube.com/watch?v=EiStan9i8vA?t=987s) Yeah, we're running a bit late but if you want to have a short sort of reply Juergen, but keep it short please.

**Juergen Schmidhuber**: [16:33](https://www.youtube.com/watch?v=EiStan9i8vA?t=993s) I'm trying to keep it short. I think it reflects on both what Yoshua said and what you just said - I think we do have a lot of good ideas about how to build this little capuchin monkey.

[16:39](https://www.youtube.com/watch?v=EiStan9i8vA?t=999s) You need a recurrent network which is a world model, a predictive world model. You need a recurrent network which is generating the action sequences leading to success. Part of the success is that you want to motivate the controller to improve the world model, which means that you have to motivate it to construct experiments that improve the understanding of the world in the world model.

[17:05](https://www.youtube.com/watch?v=EiStan9i8vA?t=1025s) The way to do it is you measure the learning progress of the world model and give that as a reward to the guy - to the recurrent network which is coming up with the experiments that lead to the data that has the property that you can still learn new insights about the world. You can find regularities in the world which you didn't know yet, and you can measure the insights, the depth of your insights by just looking at the compression progress which is then the reward for the guy who is inventing new experiments.

[17:31](https://www.youtube.com/watch?v=EiStan9i8vA?t=1051s) Although the basic ideas are a quarter of a century old - when we first published that - it's still, with the increased computational power, now becoming a possibility to really go forward there. So I think we are further along these lines than you maybe pessimistically estimate.

**Max Welling**: [17:37](https://www.youtube.com/watch?v=EiStan9i8vA?t=1057s) Okay so we probably should stop here. 

**Juergen Schmidhuber**: I was just in time. 

**Max Welling**: Yeah, there's a lot of things to be said I'm sure.

## Question Two: Companies, Compute and Data [17:51](https://www.youtube.com/watch?v=EiStan9i8vA?t=1071s)

Companies have access to more data and compute power than university labs. If data and compute power will dominate the performance of deep learning models, will there be a danger that companies will completely dominate this field? And if companies may not be able to disclose all details of their research and share their code, what is then the impact on reproducibility of research?

[18:18](https://www.youtube.com/watch?v=EiStan9i8vA?t=1098s) [Rodrigo Benenson](https://rodrigob.github.io/) wrote in a blog post imagining a future where Google, Facebook, Amazon etc. would sell pre-trained models to be consumed and fine-tuned by smaller entities. What is the panelist opinion of such worries and possible future scenarios? Is there anybody who wants to first respond to this?

All right, Yann, great.

**Yann LeCun**: [18:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=1125s) Right, well I'm kind of in the middle of this, having one and a half feet in industry and half a foot in academia. I think it takes a village to make science progress, and there are different types of ideas that come out of academia and industry because people work on different assumptions with different objective functions they're trying to maximize.

[19:00](https://www.youtube.com/watch?v=EiStan9i8vA?t=1140s) There is a very important role to play for academia certainly. I still see most of the sort of interesting basic ideas coming out of academia, not coming necessarily out of industry, although there's a lot of interesting things coming out of industry. There's a very bright future for academic research in this area.

[19:23](https://www.youtube.com/watch?v=EiStan9i8vA?t=1163s) Now there are certain things, particularly on the applied side, where indeed you need a big infrastructure to be able to do it, but the advantage you have with this infrastructure only lasts a very short time. The kind of infrastructure that we have at Facebook or Google or similar companies - universities will have this two years from now maybe. That means that a lot of those things kind of disseminate in the wider research community.

**Yann LeCun**: [19:55](https://www.youtube.com/watch?v=EiStan9i8vA?t=1195s) Now in terms of doing research in secret - it's certainly not the case. I can't speak for the other companies - certainly there are companies that are known to be very secret like Apple and Amazon - but at Facebook we pretty much publish everything we do. We distribute most of our code in open source. In fact, we even share open source code with DeepMind because we both work on the Torch platform.

[20:21](https://www.youtube.com/watch?v=EiStan9i8vA?t=1221s) The reason we are open is for at least three different main reasons. One is our research is better quality if we publish it. When you have a research lab that's isolated and works in secret, the quality of the research goes down by a lot, which is why military research sucks. So it has to be done in the open if you want it to be high quality.

[20:39](https://www.youtube.com/watch?v=EiStan9i8vA?t=1239s) Also, if you want to attract the best people in an industrial lab, you have to offer the possibility of publishing, otherwise the good people won't want to come. Third of all, companies like Facebook and Google view research as kind of a way to show themselves as leaders in a technology field or in science, and it's good for hiring people even outside of research in their company.

[21:11](https://www.youtube.com/watch?v=EiStan9i8vA?t=1271s) And thirdly, we want people to work on the stuff that students, people in academia, in other industry can build on top of things that we come up with, which is why we give our tools and our open source code, so that others can improve on it. These are perfect targets for hiring later or people to collaborate with and give money to in academia.

[21:30](https://www.youtube.com/watch?v=EiStan9i8vA?t=1290s) There is this kind of interesting dynamics for example between Facebook and DeepMind where we're sort of half a generation away from each other. One group publishes a paper, and then another group publishes a paper just a month later on the same topic with a slight improvement, and then the other one publishes again the same...

**Yoshua Bengio**: [21:46](https://www.youtube.com/watch?v=EiStan9i8vA?t=1306s) Or two days later.

[21:48](https://www.youtube.com/watch?v=EiStan9i8vA?t=1308s) Sometimes two days later yes that's happened. I think it's very vibrant - it makes the whole field progress faster. We don't care actually so much if Google uses the same techniques that we do. In fact, it's great. What we're interested in is making the whole field progress faster, and it progresses faster if the community is larger. That's why we do open research.

**Max Welling**: [22:14](https://www.youtube.com/watch?v=EiStan9i8vA?t=1334s) I propose yes, go yeah.

**Demis Hassabis**: [22:14](https://www.youtube.com/watch?v=EiStan9i8vA?t=1334s) So just to follow up on what Yann said - first of all, just like with Facebook, DeepMind and Google in general, we publish pretty much everything we do. I think I was counting - we've published like 40 papers I think in the last 18 months, so it's a lot of work out there.

[22:27](https://www.youtube.com/watch?v=EiStan9i8vA?t=1347s) Also we try and, where we can, release code and platforms to open source like the Atari stuff and DQN code. Obviously we work on Torch as well like the Facebook guys, so we share that neural network library. I think in general that's for all the reasons that Yann said - it's important that we do that as well and engage with the wider machine learning community, and in fact we have tons of collaborations with various academics in neuroscience and in machine learning.

[22:58](https://www.youtube.com/watch?v=EiStan9i8vA?t=1378s) One thing I would say though is that maybe I can give some insight into those of you who work for small companies or in smaller labs. When we were independent as DeepMind, one of the reasons we chose to work on games was - apart from a lot of us having backgrounds in games so we knew what games to choose and how to convert them into useful platforms - we chose them because we can create as much synthetic data as we'd like.

[23:17](https://www.youtube.com/watch?v=EiStan9i8vA?t=1397s) That's a very important point obviously if you're not at a big company - you can't access tons of customer data and things like that, which actually is harder than you might think even in a big company in fact, due to privacy and other things that are taken very seriously at Facebook and they are at Google.

[23:37](https://www.youtube.com/watch?v=EiStan9i8vA?t=1417s) So if you create synthetic data generators then you can get around a lot of the problem of not having enough data. The other thing I would say is that I believe there's going to be a lot of big algorithmic breakthroughs needed before we solve AI. I don't think it's going to be a matter of just purely scaling in terms of computation and data.

[23:56](https://www.youtube.com/watch?v=EiStan9i8vA?t=1436s) So I think if you are in academia or in a smaller company, I think it's important to pick the right problem. There are many, many open problems we just discussed in the first question. Pick the right ones that aren't necessarily just a question of getting large amounts of proprietary data or compute power.

[24:13](https://www.youtube.com/watch?v=EiStan9i8vA?t=1453s) Of course, having said that, compute power does help, and that's one of the reasons we decided to join forces with Google - so that we could access their obviously incredible cloud compute, and that has no doubt accelerated our overall research program.

[24:27](https://www.youtube.com/watch?v=EiStan9i8vA?t=1467s) But I think there were many complementary things that academia can do that industry isn't doing.

**Max Welling**: [24:39](https://www.youtube.com/watch?v=EiStan9i8vA?t=1479s) Right, thank you so much. Juergen?

**Juergen Schmidhuber**: [24:44](https://www.youtube.com/watch?v=EiStan9i8vA?t=1484s) It's my turn, yeah. I think in the long term, I'm not at all worried about a couple of monopolies taking over or something. I believe that in hindsight, the source code of AI - of this little capuchin monkey-like AI or something - will be so simple that even kids at school in high school will be able to understand it.

[25:06](https://www.youtube.com/watch?v=EiStan9i8vA?t=1506s) It will be out there and there will be a trillion copies out there and will be used for so many different purposes. It would be really strange to assume that it could stay in the hands of a few companies. I just think that is not believable and so I don't worry much about that.

**Neil Lawrence**: [25:31](https://www.youtube.com/watch?v=EiStan9i8vA?t=1531s) I think that in the future it's not a big problem. People sense these things are problems at the moment. I would characterize the companies mentioned there as quite fat companies in terms of having a lot of money - they're actually extremely atypical.

[25:44](https://www.youtube.com/watch?v=EiStan9i8vA?t=1544s) Most companies have a struggle with their data. I'd say that these three companies are what I would call "data from the ground up" - they're companies that understood the value of data from the start and built all their systems around it. There's masses of opportunity and money in going into companies that don't have that philosophy and trying to sort things out there, and actually there's many many challenges there.

[26:09](https://www.youtube.com/watch?v=EiStan9i8vA?t=1569s) I also think a long time ago, like when Microsoft Research first started up, people moved there - I was there for a year - and some people told me the reason they moved there was because they wanted the chance to work on real problems that made a difference. Microsoft was the place to do that because they had access to desktops and systems, and I think that made a lot of sense.

[26:26](https://www.youtube.com/watch?v=EiStan9i8vA?t=1586s) I kind of sometimes wonder like if I were to go to Google now and sort of say "hey, I'm going to improve your web search" - I'd be competing with Kevin and everyone at DeepMind. There's like more people in Google trying to solve these problems than there are outside, and actually the number of problems that are considered serious is fewer than there are problems in the entire world.

**Neil Lawrence**: [26:48](https://www.youtube.com/watch?v=EiStan9i8vA?t=1608s) The availability of data via the Internet means that you can almost, I would say, be more creative about how you're going to influence directions outside a company. Also this issue of privacy - I suspect certainly for the moment people would be more trusting of universities looking at certain types of data than companies, whatever the intentions of the companies are.

[27:07](https://www.youtube.com/watch?v=EiStan9i8vA?t=1627s) So there's a lot of freedom inside companies and you know I have to give a shout out to Amazon - they give us a large grant to work on the Amazon Cloud. Grants like that and support like that is a wonderful help for academic groups to get the compute resources.

**Kevin Murphy**: [27:24](https://www.youtube.com/watch?v=EiStan9i8vA?t=1644s) So I think this worry is definitely overemphasized. It's true at Google we have a large compute cluster but as researchers we share it with the advertising group and they get priority, so the edge that we have is very small and diminishing over time like Yann said.

[27:37](https://www.youtube.com/watch?v=EiStan9i8vA?t=1657s) You know, Amazon AWS is an amazing resource that's available to you all - it's extremely cheap for academics because it's subsidized. Microsoft and Google also have Cloud compute efforts and deep learning is just going to be commoditized just like scikit-learn - you know anyone can download it and run it on their laptop and then just deploy it on Amazon with a button press and it scales beautifully.

[27:54](https://www.youtube.com/watch?v=EiStan9i8vA?t=1674s) Deep learning will be like that within a year or so - it's just a software engineering exercise, at least for the supervised problems. I mean it's already like that. This last comment about pre-selling pre-trained models - yeah, it probably will happen, but how many people in the audience have downloaded a pre-trained ImageNet model and fine-tuned it on the dataset of interest? I mean this is what people do right now, and you can either get that pre-trained model from Berkeley or you can get it from Google or wherever.

[28:22](https://www.youtube.com/watch?v=EiStan9i8vA?t=1702s) So I don't see that's a problem. In terms of the edge in computing, I think it's smaller than believed, and then the edge in data I think is also smaller than believed because there is a lot of data but a lot of it we can't touch because it's personal or private. And then secondly it's not necessarily that diverse - I mean there are six billion people on the planet but there is a long tail of unique behaviors that you see.

[28:46](https://www.youtube.com/watch?v=EiStan9i8vA?t=1726s) But if you have access to massive data it sort of sometimes biases the way you think, and then you worry about well, you fit very large models which of course is good but then you forget problems like zero-shot learning and learning from very small sample sizes and learning very quickly in a new domain or a new language or whatever, which humans and other animals are excellent at. Babies just learn from tiny amounts of data compared to what we feed into our machines.

[29:04](https://www.youtube.com/watch?v=EiStan9i8vA?t=1744s) So you can be distracted by having too much data. I think being in academia, it's kind of like Russia in the space age - they didn't have access to as much electronic power as the US so they were very creative in squeezing their assembly code down and coming up maybe with better algorithms.

[29:27](https://www.youtube.com/watch?v=EiStan9i8vA?t=1767s) So sometimes paucity is an advantage.

**Yoshua Bengio**: [29:34](https://www.youtube.com/watch?v=EiStan9i8vA?t=1774s) Everything that has been said, I agree with. I like what Juergen said. One thing I'd like to add is that for academics there are a lot of opportunities with the data that is available out there. I mean the internet is an amazingly rich source of data, and especially if you care about unsupervised learning.

[29:53](https://www.youtube.com/watch?v=EiStan9i8vA?t=1793s) Well of course, for unsupervised learning there's this infinite amount of data available to you. For supervised learning the problem is a bit more difficult, but nonetheless many of the most interesting problems from a research point of view can be tackled. Problems not in the sense of applications, but like research challenges can be addressed by looking at not such a large scale of problems.

[30:16](https://www.youtube.com/watch?v=EiStan9i8vA?t=1816s) If you're trying to look at optimization issues, if you're trying to look at inference problems and so on - there's a lot of progress we've made in recent years that has been done with not so huge models. So I'd say we shouldn't worry too much. We can pick the problems for which we can find the data and they're really exciting and interesting.

**Max Welling**: [30:43](https://www.youtube.com/watch?v=EiStan9i8vA?t=1843s) All right, thanks. So let's just steam on with question three.

## Question Three: Hype and AI Winters [30:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=1843s)

So deep learning may have become overhyped and created a bubble where the expectations are higher than what can be delivered. Recent discussions on social media on renaming practices of existing models and [cheating on competitions](https://www.technologyreview.com/2015/06/04/72951/why-and-how-baidu-cheated-an-artificial-intelligence-test/) may be the early signs that the stakes have become very high.

[30:54](https://www.youtube.com/watch?v=EiStan9i8vA?t=1854s) Are we overhyping and how can we avoid that this will fire back on us like it did during the previous neural networks hype cycle? Is there anybody who'd like to start?

**Yann LeCun**: [31:14](https://www.youtube.com/watch?v=EiStan9i8vA?t=1874s) I already started last time. I've been actually writing quite extensively about this on Facebook, obviously a little bit on Google+ as well. Hype is very dangerous because hype killed AI multiple times in the past. The AI winters that we've been observing for different subfields of AI have been due to unmet expectations essentially.

[31:39](https://www.youtube.com/watch?v=EiStan9i8vA?t=1899s) It's mostly due to three kinds of people or three kinds of activities that sort of drive people who would otherwise be completely reasonable to make unreasonable claims. The first one is self-deluded academics who promise things that they obviously cannot deliver but somehow convince funding agencies that they can. The second one is founders of startups who have to promise the world to get enough funding for their startups. And then the third one is actually program managers in funding agencies promising to their management things that, you know, on behalf of the scientist that the scientist cannot deliver and then are kind of underlined to do it.

[32:24](https://www.youtube.com/watch?v=EiStan9i8vA?t=1944s) Those all things kind of create hype. And then the last aspect is the attention of the press. AI has attracted a huge amount of attention from the press recently - sometimes when there's a good piece of work that we're very proud of at Facebook, and Google does the same, where we make a press release, but that's relatively rare.

[32:43](https://www.youtube.com/watch?v=EiStan9i8vA?t=1963s) What's more frequent is that we put a paper on arXiv and it's picked up by Bloomberg, Wired magazine, whatever, without us doing anything - they just write about it. And sometimes they write that it's a breakthrough and we don't think it's a breakthrough, but they somehow present it as a breakthrough.

[33:00](https://www.youtube.com/watch?v=EiStan9i8vA?t=1980s) This is the kind of hype that's very, very dangerous. There's another kind of hype that's very dangerous and it's the one where the press is so clueless that they present as kind of AI revolution things that are pretty pedestrian by our standards. And it's very difficult to explain then to people in the press "You know, it's not what you think." These machines that do dialogues or these systems that generate images - they're not that intelligent after all.

[33:33](https://www.youtube.com/watch?v=EiStan9i8vA?t=2013s) So we've been thinking about this - some of us have been thinking about this collectively - how to fix the problem. The fact is we need to put our papers on arXiv as fast as possible because that's the way the field progresses quickly. I'm sure most of you have read many of the papers that were presented at this conference before coming here because they were on arXiv many months ago.

[33:50](https://www.youtube.com/watch?v=EiStan9i8vA?t=2030s) But the journalists have no way, and even the wider public has no way, of knowing whether a particular paper is good or not. So what we need is an [open review system](https://openreview.net/) such that people in the community etc. can write reviews for papers, make comments, and all of those reviews are possibly anonymous but are seen by the wider community - the research community as well as journalists. That will sort of help stem down the hype in some instances.

**Demis Hassabis**: [34:30](https://www.youtube.com/watch?v=EiStan9i8vA?t=2070s) I agree with what Yann said and I think that we have to be careful about overhyping the field, especially as it's such a hot topic right now, obviously not just in academia but also in venture capitalist and industry sort of circles.

[34:44](https://www.youtube.com/watch?v=EiStan9i8vA?t=2084s) It's very important that we keep grounded with the actual rigorous results that have been produced and don't try and overclaim certain results and things. Obviously openly publishing things with rigorous peer review helps with that. There are some companies that don't do that, some startups that don't do that, and that makes it harder to assess their claims.

[35:08](https://www.youtube.com/watch?v=EiStan9i8vA?t=2108s) I would say though that just the converse of it is of course there are all these AI winters - the two winters that have happened. I think we understand the causes of those better now, like why those algorithms didn't work or why they didn't scale, and obviously a lot of it was not having enough compute power.

[35:13](https://www.youtube.com/watch?v=EiStan9i8vA?t=2113s) But I think there's nothing wrong with aiming high, but making sure you're not claiming success or that isn't there, or over-promising. So I think aiming high is fine but making sure you stay rigorous with and not delude yourself in terms of what you're actually achieving.

**Neil Lawrence**: [35:47](https://www.youtube.com/watch?v=EiStan9i8vA?t=2147s) Oh well I'm happy to say something... 

**Max Welling**: Yes go ahead...

**Neil Lawrence**: I think that this is important. Sorry, I was getting confused - I missed the end of Demis's thing because my microphone went, so I might cover things you said again.

[35:58](https://www.youtube.com/watch?v=EiStan9i8vA?t=2158s) One thing I'd like to mention is [Talking Machines](https://www.thetalkingmachines.com/about-talking-machines) - Katie Gorman and Ryan Adams' podcast on machine learning. Absolutely fantastic stuff and really explaining to people what's going on, what the technologies are. I think this sort of engagement with the press from academics rather than journalists...

[36:11](https://www.youtube.com/watch?v=EiStan9i8vA?t=2171s) I mean, to be honest, the cheating thing - [I kind of really think the MIT Technology Review](https://theconversation.com/ai-cheating-scandal-makes-machine-learning-sound-like-a-sport-it-isnt-43132) were well out of order in terms of the first reporting of that and then the follow-up reporting. It was like [the same journalist that hyped the thing in the first place](https://www.technologyreview.com/2015/05/13/168197/baidus-artificial-intelligence-supercomputer-beats-google-at-image-recognition/). Now these journalists are supposed to do it - if we can't trust journalists then we have to do it ourselves and step in.

[36:28](https://www.youtube.com/watch?v=EiStan9i8vA?t=2188s) One of the things I've been trying to do is write posts which I think reflect a bit more what's going on. It's definitely - I mean we are probably overhyped. It's difficult to control and we just have to be very very aware of it, I think.

[36:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=2205s) And react against it. And perhaps prepare store coal for the next AI winter. I mean...

[36:57](https://www.youtube.com/watch?v=EiStan9i8vA?t=2217s) The other thing that I think we also have to do - you know it makes me feel a pressure to get on with these algorithms that I've been working on that I think will address some of these things. I hope we'll address or encourage other people to work together as a community to make sure we deliver as best we can.

**Max Welling**: [37:16](https://www.youtube.com/watch?v=EiStan9i8vA?t=2236s) Yeah, so since you're self-organizing now just go ahead whoever wants to talk.

**Juergen Schmidhuber**: [37:22](https://www.youtube.com/watch?v=EiStan9i8vA?t=2242s) I completely agree with what Yann said that in the past we often had a source of hype through people who in seeking funding ... I remember in the 60s there were these - I don't remember writing one of those because I was a baby back then - but there were [these grants where you said](https://en.wikipedia.org/wiki/Dartmouth_workshop) in the first half year we will do speech recognition and the second half year we will do the video recognition and then we will combine these two in the integration phase.

[37:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=2265s) And we will do all of this with a tiny fraction of a human brain power, which was really ambitious. And then of course from today's perspective we are in a better position because now we have computers that seem to approach human brain power or at least serious animals' brain power.

[38:04](https://www.youtube.com/watch?v=EiStan9i8vA?t=2284s) And now why am I convinced that we are not going to see another AI winter? Because at the moment it looks like the future of hardware will be very much neural network-like. And what is the future of hardware? It will be a compact volume of matter where there are many, many different processors connected through many short wires and few long wires.

[38:26](https://www.youtube.com/watch?v=EiStan9i8vA?t=2306s) So essentially something like a recurrent network, a recurrent network which obeys these constraints that physics dictates - which is there are certain speed limits, light speed in the extreme case, lower speed limits in the brain, and you want to minimize energy costs. And so you will end up with something like a recurrent network of a certain 3D structure.

[38:53](https://www.youtube.com/watch?v=EiStan9i8vA?t=2333s) Which means that all of what we are doing now with recurrent networks is going to be more and more important just because that's the future of hardware in general. And every single decade we are going to win another factor of 100 per dollar in just hardware terms, and lots of what we can do already now is just going to scale linearly. So it would be for me very difficult to see another neural network winter coming.

**Kevin Murphy**: [39:22](https://www.youtube.com/watch?v=EiStan9i8vA?t=2362s) So I wanted to actually ask Cho what he meant by the renaming practice. I guess it was referring to when you say your technique is called X and it's really equivalent to Y which was published a year ago, but it's with a slight epsilon and you gave it a radically new name. There was a specific paper he had in mind which I don't remember - probably for the better.

[39:42](https://www.youtube.com/watch?v=EiStan9i8vA?t=2382s) But you know, this is not new. I mean, I remember when [conditional random fields came out](https://www.cs.columbia.edu/~jebara/6772/papers/crf.pdf) 10 years ago - Pereira et al and McAllumm - and then a year later a paper came out called [discriminative random fields](https://link.springer.com/article/10.1007/s11263-006-7007-9) and the only difference was one was a 2D lattice and one was a 1D chain. It's exactly the same model other than that. Now of course that makes a big algorithmic difference in terms of computational complexity, but arguably it didn't need a new name.

[40:04](https://www.youtube.com/watch?v=EiStan9i8vA?t=2404s) People have been doing this all the time to try to get ahead, so I don't think that's new. And with cheating - okay, so Baidu did it, but students cheat all the time, right? We know that. So that's also not new - it's just human nature, I'm afraid.

[40:16](https://www.youtube.com/watch?v=EiStan9i8vA?t=2416s) I think the difference is sure, there's money on the line now and the press is watching, so that does raise the stakes in terms of hype. One advantage of being at a company is that you're expected to make stuff that actually works, and then you're supposed to launch it in front of hundreds of millions of users, and if it doesn't work, you'll find out.

[40:34](https://www.youtube.com/watch?v=EiStan9i8vA?t=2434s) And so it really stress tests - there's a lot of academic results where they test on one dataset and it works great on that one dataset and it fails miserably on another. There's [a great paper by Antonio Torralba and Alexei Efros called "A unbiased look at dataset bias"](https://people.csail.mit.edu/torralba/publications/datasets_cvpr11.pdf) where they show that you can get a model that works great on ImageNet and works terribly on Pascal VOC and vice versa.

[40:57](https://www.youtube.com/watch?v=EiStan9i8vA?t=2457s) So people are not doing a lot of this cross-dataset testing, and in the wild, if you launch a product in front of users, you don't get to control how it's used and people will really stress test your model. So I think that's keeping us honest, which is a good thing. Many academics who are working on these problems also want to see their systems being used in the real world because it's fun and impactful, but it's also a way of ensuring scientific honesty.

**Max Welling**: [41:20](https://www.youtube.com/watch?v=EiStan9i8vA?t=2480s) Okay, Yoshua.

**Yoshua Bengio**: [41:28](https://www.youtube.com/watch?v=EiStan9i8vA?t=2488s) I think a lot of good things have been said. I'd like us to return a little bit to some of the suggestions of what I'd say social engineering that Neil and Yann talked about. I think we should really put a bit of our minds on this - how do we get involved in sending the message, in self-discipline, in changing the way publications are put out and commented on and reviewed to encourage a more open, rigorous way of doing science.

[42:00](https://www.youtube.com/watch?v=EiStan9i8vA?t=2520s) I don't have the answers, but I think it's worth all of us thinking about it and making different experiments because we'll need to experiment. So I very much like Yann's idea - and I'm trying to promote it - [of an open review system](https://openreview.net/) where very quickly we can get feedback from researchers after papers have been posted. It could play a role that's similar to the traditional reviewing system but it could be much faster, much more open.

[42:30](https://www.youtube.com/watch?v=EiStan9i8vA?t=2550s) And one thing I'd like to see is people put comments that are non-anonymous. And I know there are - you want to have the choice of anonymous and non-anonymous comments, but the non-anonymous comments are interesting because when I write something on the web with my name on it, I have to be very careful about what I say because my reputation is at stake.

[42:49](https://www.youtube.com/watch?v=EiStan9i8vA?t=2569s) So I'm going to at the same time be more rigorous in what I write and I think that's missing in a lot of reviews. And also I'm going to have an incentive not only to do a good job but to actually do that job because I feel that it's like a little mini paper - this review or this comment I've made on the paper. I've thought about it, I have some maybe constructive criticism to make.

[43:16](https://www.youtube.com/watch?v=EiStan9i8vA?t=2596s) So this can inform others and make it much faster for us to know what are the interesting ideas floating around and increase not only the progress of science but also reduce some of the effects of hype that we're seeing today.

**Kevin Murphy**: [43:35](https://www.youtube.com/watch?v=EiStan9i8vA?t=2615s) I'd like to say one more thing I forgot to say earlier - reproducible research. I know Neil's fan of it, Yoshua is a fan of it. So you know, I mentioned if you're in a company, you've got consumers basically keeping you honest, but the other avenue which is available to everyone is to put your code on the web and then have a script that you can run. You know maybe it takes a week but it's running on the cloud or a pre-trained model and someone can actually validate your results and reproduce it.

[43:59](https://www.youtube.com/watch?v=EiStan9i8vA?t=2639s) It's a pain - I had to persuade students to do this in the past - but it's very helpful even to the person doing the research because then they can reproduce their own results $n$ months later when they've forgotten exactly how they did it. So it encourages a level of code health or cleanliness and just making things transparent.

[44:17](https://www.youtube.com/watch?v=EiStan9i8vA?t=2657s) And then it also enables other people to rerun it on new data. Of course there's no universal bullet - if your method just fails in another dataset doesn't mean you were dishonest or that you did a bad job, but showing failure cases is very enlightening.

[44:28](https://www.youtube.com/watch?v=EiStan9i8vA?t=2668s) In the computer vision community, it seems to be a trend these days where people show a few successes and they also show where it fails. I've seen that in a few talks at ICML but not as many as I would like. So I think revealing the failure cases of your model is the way to promote progress and to avoid overhype - people will realize okay, it's not going to work in scenario X because it was never trained, it's never seen data like that. So reproducible research, put your code on the web, document it, maybe use Coda lab - all of that.

**Yoshua Bengio**: [45:05](https://www.youtube.com/watch?v=EiStan9i8vA?t=2705s) So I want to remind all of us something that Leon Bottou talked about in his plenary talk the first day of the conference, where he suggested that maybe the editors of journals and the chairs of conferences request from their reviewers that they request from the authors that the papers contain a description of the limitations of the method that's fair and honest.

[45:30](https://www.youtube.com/watch?v=EiStan9i8vA?t=2730s) And that becomes - so that it becomes a habit to do exactly what Kevin is talking about, whereas right now of course there's a race to hide the things that we don't want the reviewers to see in case they might reject our paper, and this is very very bad for the whole community.

**Max Welling**: [45:49](https://www.youtube.com/watch?v=EiStan9i8vA?t=2749s) Yep, great. So this is my last question and since we're running a little bit out of time, let's not maybe dwell on it too long because it would be really nice if there's some questions from the audience as well, unless we can go overtime. I'm sure you'll be pretty tired after an hour of talking. So I'll just read it...

**Max Welling**: [46:08](https://www.youtube.com/watch?v=EiStan9i8vA?t=2768s) Famous scientists such as Stephen Hawking and captains of industry like Bill Gates and Elon Musk have repeatedly warned for the fact that AI may become dangerous for humanity within a few decades. Do you agree that the singularity is near and if so how would it look like? Will AI indeed outsmart us and become dangerous for humanity? What other perhaps more realistic dangers do you see coming from AI?

Yeah, go ahead.

**Kevin Murphy**: [46:32](https://www.youtube.com/watch?v=EiStan9i8vA?t=2792s) I'll start here. I think these fears are definitely overblown. There's a quote going around - it might be due to Andrew Ng originally - that [worrying about smart AI overtaking humanity and killing or not necessarily killing but taking over the world is like worrying about overpopulation on Mars](https://www.theregister.com/2015/03/19/andrew_ng_baidu_ai/). Okay, so maybe that's a possibility but it's so distant it's a distraction.

[46:51](https://www.youtube.com/watch?v=EiStan9i8vA?t=2811s) And the problem is not just that it's sort of a ridiculous thing to think about, but it's taking up bandwidth and mental cycles which could be spent on more realistic worries. So I'm much more concerned about climate change and inequality and unemployment induced from technology which seem much more likely to happen than these sort of very very speculative things.

[47:13](https://www.youtube.com/watch?v=EiStan9i8vA?t=2833s) I think it's a distraction and we should discourage discussion of it. So I should stop talking about it.

**Neil Lawrence**: [47:25](https://www.youtube.com/watch?v=EiStan9i8vA?t=2845s) So I think there's a worry that comes much before this - the amount of power we give... I've written about this - giving people technologies that can process an enormous amount of data. And if the data there's a sort of natural data monopoly which we've talked a little bit about, that leads to what I'd call a digital oligarchy where you've got people who have power over data they didn't even develop the algorithms themselves.

[47:43](https://www.youtube.com/watch?v=EiStan9i8vA?t=2863s) And they make large scale decisions and I think that's extremely dangerous and it will happen way before this. So if you look in history, I think you can find very few occasions when machines started killing millions of people. You can find very many occasions when, given a technological change, people killed many people or affected many people's lives for there worse.

[48:02](https://www.youtube.com/watch?v=EiStan9i8vA?t=2882s) There are many many hard-form, worn rights that date back - as I like to say, 250 years written down by a bunch of Englishmen living near Boston. And these rights are somehow... they're not being revisited in the digital age.

[48:24](https://www.youtube.com/watch?v=EiStan9i8vA?t=2904s) I think there are privacy issues. I think we should be looking at algorithms that are more privacy aware, starting work on that and worrying about those sort of things because those things will come to us before these problems. That would be my thing.

**Yann LeCun**: [48:40](https://www.youtube.com/watch?v=EiStan9i8vA?t=2920s) Yeah, I just want to say I agree with Kevin.

**Max Welling**: Great.

**Yoshua Bengio**: [48:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=2925s) I agree with Kevin.

**Demis Hassabis**: [48:47](https://www.youtube.com/watch?v=EiStan9i8vA?t=2927s) So yeah, I mean I think broadly speaking these things are massively overblown. I mean, I know Elon Musk quite well because he was an investor in DeepMind and actually I was the first person to sort of introduce him to the idea of AI, so maybe it's kind of partially my fault.

[49:04](https://www.youtube.com/watch?v=EiStan9i8vA?t=2944s) But I think with Elon and also Stephen Hawking - who I recently had the pleasure of meeting, he invited me up to Cambridge to talk about AI - you know, we ended up having like three hours of questions and it was a very interesting chat. I think at the end of it he was more reassured because the thing about these guys that are mostly talking in the press like Elon and Stephen Hawking - I think Steve Wozniak too - they are amazing obviously in their fields and incredible people, but they don't work on AI.

[49:33](https://www.youtube.com/watch?v=EiStan9i8vA?t=2973s) They don't work close to the engineering side of it so they don't see the everyday struggles. And I think they tend to read books like Nick Bostrom's book on *Superintelligence* and kind of get carried away with the sort of almost Sci-Fi scenarios in there that are many many decades away.

[49:50](https://www.youtube.com/watch?v=EiStan9i8vA?t=2990s) Having said that though, I do think there are some legitimate concerns about optimization systems in general that when they get hugely powerful - you know, how do we specify things for example like their value systems and their goals robustly and correctly specify them so they do the things that we want them to do.

[50:09](https://www.youtube.com/watch?v=EiStan9i8vA?t=3009s) I think that those kinds of questions, while the impact of that won't be for many decades, they're very tough questions. You know, it's tough or maybe tougher than getting than actually building AI. So I think that it is worth thinking about that at least and possibly having some academic work sponsored by what Elon's doing.

[50:28](https://www.youtube.com/watch?v=EiStan9i8vA?t=3028s) I think there's no harm in doing that even though it's taking some CPU cycles, human cycles away from other research. I think there's plenty of things, plenty of people working directly on AI research and machine learning, so I think having a few people - philosophers, mathematicians and other people, other disciplines - thinking about these issues is worthwhile so that we're ready in the decades to come for any challenges that come up.

**Yann LeCun**: [50:58](https://www.youtube.com/watch?v=EiStan9i8vA?t=3058s) So one thing that I've been - I mean I get asked this question from the press all the time and one thing I have to explain to people is that the only example of intelligent entity that we face is basically humans. And so we have a very hard time dissociating human intelligence from human qualities that machines don't necessarily have.

[51:19](https://www.youtube.com/watch?v=EiStan9i8vA?t=3079s) A lot of the bad things that humans do to each other are due to very sort of ingrained behaviors that were built into us by evolution so that we survive - things like the survival instinct and the desire to have access to resources so we don't starve, and desire to have some control over other people, etc., and jealousy and things of that type.

[51:45](https://www.youtube.com/watch?v=EiStan9i8vA?t=3105s) There's no reason that machines will have that and so there's no reason for them - unless we build those behaviors in them - that they will take over the world. And of course to people like us it might sound kind of trivial, but the public has a hard time visualizing this given all everything we see in science fiction movies and stuff like that.

**Yoshua Bengio**: [52:10](https://www.youtube.com/watch?v=EiStan9i8vA?t=3130s) Yeah, I agree with that. That's what I was going to say. I think we have a psychological bias that makes us see machines as if they were humans and it's just not reality.

**Max Welling**: [52:23](https://www.youtube.com/watch?v=EiStan9i8vA?t=3143s) Juergen, you want to say something?

**Juergen Schmidhuber**: [52:31](https://www.youtube.com/watch?v=EiStan9i8vA?t=3151s) Yeah, I guess... I don't like to call the singularity Singularity. I prefer the name Omega [Laughter] because that's what Teilhard de Chardin called it 100 years ago and also because it sounds much better than Singularity. Sounds a little bit like "Oh my god..." [Laughter]

[52:51](https://www.youtube.com/watch?v=EiStan9i8vA?t=3171s) Having said that, it seems still clear to me - and so maybe it's a little bit of a contrarian view here - that within this century we will have AIs much smarter than myself. I'm very unimpressed by my way of thinking. Most of the time I'm spending avoiding obstacles, always doing the same thing more or less every single day, sometimes rarely having a halfway reasonable idea.

[53:17](https://www.youtube.com/watch?v=EiStan9i8vA?t=3197s) But I'm very unimpressed by my own intellectual capacities and I don't see how the much faster computers of the future won't be at least a match for that and actually go far beyond that. So I'm a little bit less pessimistic or optimistic as my colleagues here - depends on the viewpoint.

[53:42](https://www.youtube.com/watch?v=EiStan9i8vA?t=3222s) However, to me it's also clear that we should not base our predictions on Arnold Schwarzenegger movies but instead take into account that there's a certain far future protection from these super smart AIs of the future - if there indeed will be any - through their lack of interest in us.

[54:03](https://www.youtube.com/watch?v=EiStan9i8vA?t=3243s) Because look at yourself - you are mostly interested in other beings with whom you can either collaborate with or compete with. Politicians are mostly interested in politicians, 10-year-old girls are mostly interested in other 10-year-old girls, frogs are mostly interested in frogs, and super smart AIs of the future will be mostly interested in other super smart AIs of the future.

**Neil Lawrence**: [54:35](https://www.youtube.com/watch?v=EiStan9i8vA?t=3275s) What about capuchin monkeys - won't we be their capuchin monkeys?

**Juergen Schmidhuber**: [54:40](https://www.youtube.com/watch?v=EiStan9i8vA?t=3280s) Capuchin monkeys are mostly interested in other capuchin monkeys and of course as soon as we have one artificial capuchin monkey sitting in a high definition physical simulation, we will have a friend for him and it will be a whole little society of capuchin monkeys and then will learn their social context and will know to hide their fruits from the other guys and so on.

[54:58](https://www.youtube.com/watch?v=EiStan9i8vA?t=3298s) So you will quickly have an ecology of smart and not so smart guys and so on, and in many ways it will be a very distributed system. And very soon we will have a situation which will maybe be much closer to the ecology, the biological ecology that we have today where there's not one super mind or whatever which is controlling everything.

[55:24](https://www.youtube.com/watch?v=EiStan9i8vA?t=3324s) No, instead we have millions of different niches which are filled by quite different little beings and the future of robotics and AIs will be just like that.

**Max Welling**: [55:39](https://www.youtube.com/watch?v=EiStan9i8vA?t=3339s) I think so. I think... so did you already say something Neil? Or can we move to the questions because I think we're running out of time and I think if some people have burning questions then it would be really nice to listen to them.

[55:50](https://www.youtube.com/watch?v=EiStan9i8vA?t=3350s) So if there are people who can hand out microphones...

[56:00](https://www.youtube.com/watch?v=EiStan9i8vA?t=3360s) Two okay. So you want to ask a question? Oh you want to hand out microphones. Okay, I'm out of the game now. No, you can just take another mic, your neighbor's microphone, no problem. We can do a... okay but now we still need the questions. We have the mic - oh there's a question right there.

**Questioner**: [56:27](https://www.youtube.com/watch?v=EiStan9i8vA?t=3387s) Hey guys, just wondering if you think we should be exploring the idea of artificial curiosity and artificial creativity a bit more, or is that not really an area of significant interest?

**Juergen Schmidhuber**: [56:47](https://www.youtube.com/watch?v=EiStan9i8vA?t=3407s) That may be a question to myself because this artificial curiosity thing is something that really has occupied me a lot in the past 25 years. And of course we want that, and so in that sense since we will also have these little curious artificial scientists who are going to devise their own little goals which will just lead them to better understand the world - this is what you want to see in an intelligent being.

[57:00](https://www.youtube.com/watch?v=EiStan9i8vA?t=3420s) So if you have a reasonably intelligent being then it's reasonably intelligent because it is curious, because it devises its own active experiments to understand how the world works. That's what little babies do, that's what 20 years later when they are not babies anymore scientists do when they are just creating bigger experiments like CERN to find some particle and whatever.

[57:36](https://www.youtube.com/watch?v=EiStan9i8vA?t=3456s) But this basic drive, this curiosity which in my point of view goes back at least 25 years - this will have to be in there. And so the future of unsupervised learning that Yoshua mentioned will actually be this active type of unsupervised learning where you not only find regularities in the data in the passive observed data that is now stored as your history - no, you will actively shape the data that is coming in just like a physicist actively shapes the data through his experiments.

[58:02](https://www.youtube.com/watch?v=EiStan9i8vA?t=3482s) And so artificial curiosity means just give a reward to the guy who is providing the experiments, who is inventing the experiments such that you can learn something about the world which you didn't know yet, such that you find regularities in the world which you didn't know yet. And you can measure the insights, the depth of your insights by just looking at the compression progress which is then the reward for the guy who is inventing new experiments.

[58:34](https://www.youtube.com/watch?v=EiStan9i8vA?t=3514s) Of course you want to have that in the future, it will be the future I would say, without that no true intelligence.

**Max Welling**: Thank you.

**Neil Lawrence**: [58:42](https://www.youtube.com/watch?v=EiStan9i8vA?t=3522s) I'm not going to disagree but can I give a different answer that doesn't have the same conclusion? I think understanding these things as aspects of human intelligence is very interesting because I think it's very important for the computer to communicate correctly with the human. So understanding in which ways we're curiosity driven and how we use it I think is great, but I would like to think that the curiosity that you're talking about emerges just from doing it the right way. 

[59:21](https://www.youtube.com/watch?v=EiStan9i8vA?t=3573s) If you say artificial curiosity it seems like your saying "Well let's put a subroutine in here that it should now be curious" and then the computer is curious. Which sounds like what people used to do. Whereas I think what we really want is algorithms where it's obvious that this is emergent. 

[59:42](https://www.youtube.com/watch?v=EiStan9i8vA?t=3594s) I think Zoubin has said quite often that artificial intelligence id a dumb term. Because it's just intelligence how can it be artificial? Like artificial flying, if its a plane that's artificial flying is what Zoubin says. That they have natural explore-exploit trade offs, it's principled and the curiosity is the explore. So I think Zoubin has said quite often artificial intelligence is a dumb term because it's just intelligence, how can it be artificial? Like artificial flying. If it's a plane that's artificial. 

[59:57](https://www.youtube.com/watch?v=EiStan9i8vA?t=3594s) So it's just intelligence and the same thing with curiosity. Curiosity may be emergent, but I think then there's another aspect to that which is understanding the ways in which humans are curious that could also be important for the interface.

**Max Welling**: Thank you.

**Kevin Murphy**: [1:00:12](https://www.youtube.com/watch?v=EiStan9i8vA?t=3612s) So there's a professor of psychology at UC Berkeley called Alison Gopnik who's written a great book called [The Scientist in the Crib](https://www.harpercollins.com/products/the-scientist-in-the-crib-alison-gopnikandrew-n-meltzoffpatricia-k-kuhl?variant=32207398207522) that elaborates on the thing that Juergen mentioned - that scientists are just doing what they were doing as babies and exploring and testing hypothesis.

[1:00:26](https://www.youtube.com/watch?v=EiStan9i8vA?t=3626s) She has a very pithy phrase to sort of justify why people do this - it's called "explanation as orgasm." It's a title of a paper she published and the editor wanted to bowdlerize the title because they thought it was inappropriate for an academic journal. But it really is pithy - the point is that you get reward for having explained the world. So you don't need to have an external reward - understanding is its own reward and that would, if that's part of your objective function, you'll get model building and exploratory behavior for free.

[1:00:51](https://www.youtube.com/watch?v=EiStan9i8vA?t=3651s) The other thing I wanted to say is going back to the earlier point of massive data - a lot of the data we have is extremely redundant and you know we do our SGD algorithms and you just keep saying the same thing again and again and you beat the computer upside the head with like a million images of car. And a kid will learn it you know with one or two shots but they're interesting views, right? They'll turn, they'll look from the side and they'll maybe, you know, the light will change or something.

[1:01:14](https://www.youtube.com/watch?v=EiStan9i8vA?t=3674s) So they're stat- they're looking at variations either self-induced or just naturally, but they're not just getting lots of very redundant samples. So I think we can improve statistical and data efficiency by building exploration as well.

**Max Welling**: [1:01:32](https://www.youtube.com/watch?v=EiStan9i8vA?t=3692s) Yeah okay, so I think there's another question there. Ah... thank you.

**Questioner**: [1:01:37](https://www.youtube.com/watch?v=EiStan9i8vA?t=3697s) I think this question for this very interesting discussion - there seems to be some consensus that we should be more afraid of people misusing this technology than of the computers going off autonomously and misusing it. Still, it's a real danger - people misusing it. Do we as a research community have a responsibility to prevent that or at least try to?

**Max Welling**: [1:02:01](https://www.youtube.com/watch?v=EiStan9i8vA?t=3721s) I'm sure somebody is dying to answer that.

**Yann LeCun**: [1:02:06](https://www.youtube.com/watch?v=EiStan9i8vA?t=3726s) I think I think we don't have the power - we have what the responsibility we have is to explain the science, the technology and the consequences to people, you know, the public at large, the decision makers, so that societies organize themselves to deal with it. So that's the duty we have - to explain to people really what this is about and what the potential benefits and dangers are, etc.

[1:02:27](https://www.youtube.com/watch?v=EiStan9i8vA?t=3747s) But we as a community don't have the power to tell societies what to do with our technology. It's never been the case.

**Max Welling**: [1:02:39](https://www.youtube.com/watch?v=EiStan9i8vA?t=3759s) Well, we could sort of refuse DARPA funding - that would be a clear statement.

**Yann LeCun**: [1:02:44](https://www.youtube.com/watch?v=EiStan9i8vA?t=3764s) Well okay, no - there's a clear statement which is that as long as the funding you get does not come with restrictions on publications, there's nothing wrong with it because you communicate what you ... the progress you made to the rest of the world and the rest of the world profits from it.

[1:03:03](https://www.youtube.com/watch?v=EiStan9i8vA?t=3783s) It's very rare that there are things that are done for nefarious purpose where you're allowed to publish. So that's where you put the limit - if someone gives you money but gives you restrictions on publications, then you should be worried.

**Neil Lawrence**: [1:03:21](https://www.youtube.com/watch?v=EiStan9i8vA?t=3801s) So I think there's two answers to your question - one is yes we do have a responsibility and the other is no we don't have a responsibility. I'm pretty certain that's all, but there's a bit more to it than that.

[1:03:32](https://www.youtube.com/watch?v=EiStan9i8vA?t=3812s) I agree with Yann to an extent - we can only persuade society to do what society wants, but on the other side we are the tool makers. So if we don't provide the tools that allow these things to be implemented safely, that protect individuals' privacy, then we're not allowing society to make the choice to go in those directions.

[1:03:44](https://www.youtube.com/watch?v=EiStan9i8vA?t=3824s) And when you look at the sort of dystopia-utopia type perspective, people will say look, there's all these problems with health, we can save all this money, let's use it, let's do it - and but it will go in without protections. So we're supposed to be the farsighted academics community for these things.

[1:04:02](https://www.youtube.com/watch?v=EiStan9i8vA?t=3842s) So I think we should be worrying about that and building that tool set. At the same time we can't fully control - we can just persuade and provide the tools and the environment.

**Max Welling**: [1:04:13](https://www.youtube.com/watch?v=EiStan9i8vA?t=3853s) All right so I want to mention that we are five minutes over time so I think it's wonderful, great and very interesting but you will have to decide whether it's going to be too much. So I'm going to do one more question and then I think we're done. So is there one?

**KyungHyun Cho**: [1:04:34](https://www.youtube.com/watch?v=EiStan9i8vA?t=3874s) I'll ask myself if it's okay. So actually it's going to be a bit directed to Demis, Yann and Kevin. For instance, DeepMind is working heavily on reinforcement learning and then let's say one day in several years your agent suddenly started talking to you with certain level of artificial intelligence or human level intelligence - would you make it public or would you keep it to yourself? So it goes to three of you actually, all of you yes.

**Demis Hassabis**: [1:05:05](https://www.youtube.com/watch?v=EiStan9i8vA?t=3905s) Well I mean it would partly depend on how it's doing that right? So we need to understand why that happened - wouldn't be a surprise to us. So I think there is a question of certainly until - for the next foreseeable future we'll be publishing and releasing everything we build.

[1:05:16](https://www.youtube.com/watch?v=EiStan9i8vA?t=3916s) As the systems become more integrated, there's sort of a large big system that has many many components, maybe it's being used commercially - you know, the capabilities get more and more advanced - then there are other considerations that have to come in like potentially people using, maybe we are using those technologies in a constrained way and ethical way.

[1:05:43](https://www.youtube.com/watch?v=EiStan9i8vA?t=3943s) But what happens if someone else uses it in a different way? So I think some of those issues will come in. I'm not sure if you're also getting at the question like would there be some rights of this - you know, what at a certain level of intelligence... I'm not sure if you're implying that as well, then would that be...

**Kyunghyun Cho**: [1:05:59](https://www.youtube.com/watch?v=EiStan9i8vA?t=3959s) Right, so in some sense I wanted to ask like who is to decide. So let's say if DeepMind builds something, would it be up to DeepMind to decide whether this one goes public or it's going to be going to stay here? If Microsoft came up with let's say Skype system that suddenly starts talking to you - you know, without thinking or without commenting - would it stay inside Microsoft and that decision be up to Microsoft for instance?

**Demis**: Well...

**Yann LeCun**: [1:06:31](https://www.youtube.com/watch?v=EiStan9i8vA?t=3991s) It's just not the way science works. You cannot have a secret that is - you know, once someone somewhere produces something, immediately there's 100 people who know that it's possible and they try to reproduce it and usually they reproduce it within a few months. So you cannot keep something like this secret for very long.

[1:06:43](https://www.youtube.com/watch?v=EiStan9i8vA?t=4003s) Second of all, companies don't have complete control over their employees. Employees circulate, they have interns, they have people who are - you know, interns are the pollinating bees of technology these days. So the technology like this cannot stay in a box for very long.

[1:07:05](https://www.youtube.com/watch?v=EiStan9i8vA?t=4025s) And conversely it's not like this kind of event can happen by accident or that anyone at Microsoft, DeepMind or Facebook or the rest of Google can go underground for five years and work on something that's completely different from everything else in the world and all of a sudden come up with something revolutionary. That just never ever happens except in Hollywood movies.

[1:07:26](https://www.youtube.com/watch?v=EiStan9i8vA?t=4046s) You know, that some guy in Alaska comes up with - you know, builds the robots and hardware and everything that takes over the world. No, that just doesn't happen in real life. If something like this pops up in DeepMind you'll pop up at Facebook within two months or something or vice versa right? If you do it first they'll do it next or one of these guys will do it right. So it's just - it's a community and we all build on each other's work and I don't see how that could possibly happen.

**Max Welling**: [1:07:56](https://www.youtube.com/watch?v=EiStan9i8vA?t=4076s) Okay so maybe we should...

**Kevin Murphy**: [1:08:02](https://www.youtube.com/watch?v=EiStan9i8vA?t=4082s) Can I since it was addressed to me... I don't really have much to add except the Hollywood reference in Alaska - there's actually - I watched a movie on the plane on the way over called Ex Machina and it's exactly that scenario and it's a terrible terrible movie.

**Yann LeCun**: [1:08:07](https://www.youtube.com/watch?v=EiStan9i8vA?t=4087s) That's what I was referring to. It's actually very nicely filmed and entertaining but the background...

**Kevin Murphy**: [1:08:14](https://www.youtube.com/watch?v=EiStan9i8vA?t=4094s) Artistically beautiful but a very bad plot and a bad premise ...

**Kyunghyun Cho**: [1:08:22](https://www.youtube.com/watch?v=EiStan9i8vA?t=4102s) Well thank you, I'm more relieved now.

**Max Welling**: [1:08:22](https://www.youtube.com/watch?v=EiStan9i8vA?t=4102s) Thanks. Okay so this will then end the panel discussion. I want to thank two groups of people - let's first thank our panelists... [Applause]

[1:08:35](https://www.youtube.com/watch?v=EiStan9i8vA?t=4115s) And then I also wanted to thank Diederik Kingma - if you want to come up here quickly show your face - and Kyunghyun Cho who did awesome work you know in organizing this workshop, two-day workshop. It was a lot of work so thank... [Applause]

[1:08:59](https://www.youtube.com/watch?v=EiStan9i8vA?t=4139s) All right and safe travels home.
