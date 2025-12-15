---
outline: deep
layout: doc
lastUpdated: true
---
# AI in Architecture Design

<div style="display: inline-flex;align-items: center;font-size: small;margin-top: 1em;">
<div>This is one of my course designs, licensed under </div>
<a style="margin-left: .2em;" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
<img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
</div>

## Overview

AI in Architecture Design is an advanced, design-centered course for senior undergraduate and graduate architecture students who want to deepen their understanding of how AI, especially modern machine learning and large language models, can shape contemporary design practice.

Across 12 weeks (1.5 hours per week, around 30 students), the course blends technical foundations, design applications, and critical reflection. You will experience:

- **Opening the Black Box of AI**: Understanding how AI tools work under the hood, not in full technical detail, but at a depth that empowers you to better choose and adapt AI tools for design in the future.

- **Problem-centric Learning**: Rather than learning isolated tools, you will explore how AI techniques bind to specific design problems, enabling you to transfer knowledge to your own projects.

- **Critical Techno-Realism**: The opportunities, limitations, and risks of AI-assisted design. You will engage with industry professionals and collaboratively investigate the future of the field: the labor landscape, education, ethics, and emerging markets.



## Target Audience

You might want to register this course if:

- You are a designer who is interested in AI and you want to further utilize them by understanding how they work from a deeper level.
- Or you want to conduct research in computer-aided design and you want to pick up the math/computer science knowledge that are **just** enough for designers.

You need to gain the following background knowledge before taking this course:
- Basic understanding of Python programming. Finish the "Learn the Basics" on https://www.learnpython.org/ or equivalent is sufficient.
- Math knowledge up to **high school level** is enough.
- Fundamental knowledge/experience of Rhino and Grasshopper.

You might want to register other courses if:
- You have zero programming knowledge -> Self-learn Python programming first.
- You have little experience of Rhino and Grasshopper -> Take "Computational Design Foundation" first.
- You have gained foundamental math/cs knowledge and want to fully focus on tech things: You might find this course is still design-centered. Selectively attending the course as audit students is a better option.

## Course Schedule

**Week 1 - Introduction**
- Go over the entire course and understand how it will be like.
- Students share their own problems/topics/interests to class.
- Students vote for the emphasis of the entire course, given the current syllabus.

**Week 2 - Find clues out of messy reality**

- Descriptive statistics, sampling, uncertainty
- Linear regression and other classical modeling methods
- Deep-learning perspective: latent space
- Demonstration: Architecture photo clustering.

**Week 3 - Find better design I**

- Search algorithms and their application: 
    - Global approach: Grid search, depth-first-search, A*
    - Local approach: Simulated Annealling, evolutionary methods (e.g. GA), swarm algorithms.
- Hands-on tutorial on genetic algorithm using [Wallacei](https://www.food4rhino.com/en/app/wallacei) in Grasshopper.

**Week 4 - Find better design II**

- Convex optimization: Analytical methods, gradient descent
- Surrogate models: Response surface, ML-based meta models
- Hands-on tutorial on RBFOpt algorithm using [Opossum](https://www.food4rhino.com/en/app/opossum-optimization-solver-surrogate-models) in Grasshopper.

**Week 5 - Generative Design I: Automation of Design**

- Rule-based generation: cellular automata, L-system.
- Hands-on tutorial on rule-based generation using [Rabbit](https://morphocode.com/rabbit/) in Grasshopper.

**Week 6 - Generative Design II: Sample from Data**

- Data-driven generation: VAE, CNN, GANs, Transformers, Flow Matching.
- Hands-on tutorial on image generation using ComfyUI.

**Week 7 - Generative Design III: Bridge Modalities**

- Generate with pretrained foundation models: LLMs, VLMs, Self-supervised models
- Hands-on tutorial on calling [LLM APIs](https://platform.openai.com/docs/api-reference/introduction) (e.g. GPTs, Claude) from Python to analyze and generate design content. Code templates will be provided.
- Demonstration: Visual scripting LLM agent platform.
- Quick review of [One Project](#one-project) milestones.

**Week 8 - "Future: treasure or trap?" Episode I**

- Invited Talk (40 mins + 10 mins QA): Professional designers/Start-up workers/related industry workers
- In-class research on the future of AI-assisted design (30 mins). See [One Discussion](#one-discussion) for details.

**Week 9 - "Future: treasure or trap?" Episode II**

- Invited Talk (40 mins + 10 mins QA): Professional designers/Start-up workers/related industry workers
- Proceed with in-class research.

**Week 10 - "Future: treasure or trap?" Episode III**

- Student round-table discussion. See [One Discussion](#one-discussion) for details.

**Week 11 & 12 - Group presentations and Discussion**
- See [One Project](#one-project) for details.

## Assignments & Grading

One project (70%) and one discussion (30%).

### One Project

You will demonstrate your learned skills in one of your design project/research by presenting it in the final weeks.

- You can pick any theme (statistics, optimization, generation) in this course and integrate it to your project.
- Your presentation will be 8 minutes, followed by 2-minute QA. You will focus more on the technical problem setting and your solutions, rather than a pure design perspective.
- You can make groups with size not larger than 4.

In Week 7, you will give a quick update on your progress (5 minutes per group), where you will explain your problem setting, potential data collection/preparation, and preliminary results.

During final presentation, the presentation group will receive technical correctness scores from lecturers (70%) and clarity scores from other students (30%).

### One Discussion

#### Episode I and II

You will work in groups to begin an in-class research project on the future of AI-assisted design.
Each group will choose one of the following perspectives and address its guiding questions:

**Perspective A: Research & Teaching: Frontiers in academia and industry** (design studios, startups, etc.) and changes in higher-education curricula.
Guiding questions:
- To what extent are academic research, higher education, and industry needs aligned?
- In what ways might AI benefit or harm architectural education?
- Will university lecturers still be necessary in the future?

**Perspective B: Market & Labor**
Public/private investment, business models, potential clients, labor processes, and individual impacts.
Guiding questions:
- How has AI changed the labor process in the design industry?
- What related startups exist? What are their focuses, client bases, and sources of investment or support?
- In what ways might AI benefit or harm the design industry?


The procedure will be:
- Form groups of up to 5 students, each choosing one perspective.
- Whole-class brainstorming (10 mins): how can we investigate this topic? What sources can we use? What is our framework?
- Group work: Begin collecting information and shaping your findings.
- Exiting update (10 mins): Each group gives a brief report on their progress at the end of each episode.

#### Episode III

The discussion for each perspective will unfold in three stages:
1. Group Presentations
   * Each group has **4 minutes** to present its findings.

2. Round-Table Discussion

   * All students participate in a free discussion.
   * Each student receives two time budgets:
     * **40 seconds of personal speaking time**, which they are encouraged to use fully.
     * **40 seconds of transferable time**, which they may give to other students at any point, in any fraction.
   * Time will be managed using small physical hourglasses to track speaking rights.

3. Group Summaries

   * Each group has **2 minutes** to summarize the discussion from their perspective.

4. Peer Evaluation

   * Students from the *other* perspective track evaluate each group’s performance and may award bonus points to outstanding individuals.

## Required Materials
- Computer with Internet access.

For hands-on tutorials, you will need:
- Rhino and Grasshopper installed.
- Large Language Model API service access.





