export const posts = [

 // PROGRAMMING
 // Design
 // Politics
    {
        id: 1,
        title: "Vue 2.7 'Naruto' Released",
        summary: "Today we are happy to announce that Vue 2.7 Naruto has been released!",
        content: `In UMD and CJS builds, these APIs are exposed as properties on the global Vue object
        When bundling with CJS builds externalized, bundlers should be able to handle ESM interop when externalizing CJS builds.
        Behavior Differences from Vue 3
        The Composition API is backported using Vue 2's getter/setter-based reactivity system to ensure browser compatibility. This means there are some important behavior differences from Vue 3's proxy-based system:
        All Vue 2 change detection caveats still apply.
        reactive(), ref(), and shallowReactive() will directly convert original objects instead of creating proxies. This means:        
        Avoid using arrays as root values in reactive() because without property access the array's mutation won't be tracked (this will result in a warning).
        Reactivity APIs ignore properties with symbol keys. 
        In addition, the following features are explicitly NOT ported:
        ❌ createApp() (Vue 2 doesn't have isolated app scope)
        ❌ Top-level await in <script setup> (Vue 2 does not support async component initialization)
        ❌ TypeScript syntax in template expressions (incompatible w/ Vue 2 parser)
        ❌ Reactivity transform (still experimental)
        ❌ expose option is not supported for options components (but defineExpose() is supported in <script setup>).`,
        category: "Programmning",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*vFC8tDUGLlXIiqT7ymf3xg.png"
    },
    {
        id: 2,
        title: "React vs Angular vs Vue.js — What to choose in 2021?",
        summary: "Today we are going to choose",
        content: `Introduction
        JavaScript frameworks are developing at an extremely fast pace, meaning that today we have frequently updated versions of Angular, React.js and another player on this market — Vue.js. Let’s have a look at the demand represented in Google Trends for the last 5 years. The blue, red, and yellow lines represent Angular, React, and Vue.js respectively.

        It can be seen from the chart that during 2014–2015 there was a small difference between the number of React and Angular inquiries. Then, we see that deviation between them increased for some short period. From the middle of 2017, these requests balanced and React started to grow and reach closer to Angular’s demand. The Vue.js framework was still not popular very much, but it was slightly increasing its presence on the market of frameworks, showing a potential for further growth. In the last years, Angular and React almost balanced, meaning that they are the most usable frontend frameworks on the market.
        
        Overall, React and Angular develop organically with relatively the same dynamics. If we try to forecast the demand for these frontend frameworks, then we can see a positive tendency for React while Angular has a bit of a declining one. Vue.js is still not clear, but according to its specific convenient structure, it’s going to grow as well, maybe just a bit less than main frameworks.
        
        We also analyzed the number of open positions worldwide that require a specific knowledge of a certain framework. As a source, we looked at Indeed.com and got the following distribution according to more than 60,000 job offers.`,
        category: "Programmning",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/0*W1rclsivkgw746u-.png"
    },
    {
        id: 3,
        title: "Learning Python Is Like Falling in Love at First Sight",
        summary: "What makes learning Python so exciting",
        content: `What is Python?
        You’ve probably heard of Python, but do you know what it is?
        
        Python is a high-level, general-purpose programming language, meaning that it’s designed to be easy for humans to read and write and used by people of all skill levels and backgrounds.
        
        You can use this object-oriented programming (OOP) language in many applications, from web development to scientific computing; from data analysis to GUI (Graphical User Interface) creation. Python is also used for machine learning projects because of its flexibility.
        
        Python has been around since 1991. It was created by Guido van Rossum, who named it after the British comedy series “Monty Python’s Flying Circus.”
        
        Greatly inspired by the ABC programming language, Python has become one of the most popular programming languages in use today; there are currently millions of websites that run on Python code. Some of the most popular platforms worldwide use it to power their back ends.
        
        Let’s see how learning to code is almost like falling in love for many people who try it out.`,
        category: "Programmning",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*1JKANXCEN84YOF200heMuQ.jpeg"
    },
    {
        id: 4,
        title: "The Purpose Behind Programming Personal Projects",
        summary: "Sometimes to make money, but for some other reasons as well.",
        content: `Individuals who go into Computer Science or Software Engineering might be motivated by a plethora of different reasons. For example, some might be motivated purely by money whereas others might be motivated by passion or motivated by intellectual challenges. Taking this into account, one’s opinion on personal projects (I.E. Projects that need not relate to work) might differ. This means that some might consider them to be a waste of time whereas others might enjoy coding in their free time. Nevertheless, I think that there are plenty of good reasons why an individual should participate in some personal coding projects outside of work.

        Here are but a few.
        
        Learn a new Language, IDE, or Concept
        An individual writing something down in a notebook.
        Photo by lilartsy on Unsplash
        A programmer might decide that they wish to learn something new (E.G., a new language, a new concept or fiddle around with a new IDE) and this isn’t directly related to their current job. To accomplish this, one of the best ways is to have personal projects with something to accomplish and the need to problem solve in a manner unfamiliar.
        
        To use myself as an example, before I knew anything at all about Machine Learning or Artificial Intelligence, I had a desire to understand how Computers could be told to make decisions on their own. Without a good idea of where to start, I decided to use the kids game of Tic Tac Toe.`,
        category: "Programmning",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/0*bSKASulLZfgrfPCk"
    },
    {
        id: 5,
        title: "The Winter Inflation Storm Is Coming",
        summary: "Today we are going to choose",
        content: `Introduction
        Various economic indicators are showing that the coming winter will be marked by much higher inflation rates in western society. This will cause massive disruptions to everyday life because for the past decades, western society has experienced relatively low inflation rates. However, energy prices and fuel costs continue going up, which will not only make it more difficult to keep your home comfortable but it will also make it hard for businesses to operate. The coming inflation storm will be one of the greatest financial crises in modern history. The surprising fact to many is that consumer prices have only begun going up, the trillions of dollars that the federal reserve made, are still being absorbed in the markets.`,
        category: "Politics",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*5rkXKrfxbBvVPlk7l4QmXA.jpeg"
    },

    {
        id: 6,
        title: "Whatever Happened To Cleopatra And Caesar’s Child?",
        summary: "The Roman Pharaoh that never was",
        content: `Introduction
        JavaScript frameworks are developing at an extremely fast pace, meaning that today we have frequently updated versions of Angular, React.js and another player on this market — Vue.js. Let’s have a look at the demand represented in Google Trends for the last 5 years. The blue, red, and yellow lines represent Angular, React, and Vue.js respectively.

        It can be seen from the chart that during 2014–2015 there was a small difference between the number of React and Angular inquiries. Then, we see that deviation between them increased for some short period. From the middle of 2017, these requests balanced and React started to grow and reach closer to Angular’s demand. The Vue.js framework was still not popular very much, but it was slightly increasing its presence on the market of frameworks, showing a potential for further growth. In the last years, Angular and React almost balanced, meaning that they are the most usable frontend frameworks on the market.
        
        Overall, React and Angular develop organically with relatively the same dynamics. If we try to forecast the demand for these frontend frameworks, then we can see a positive tendency for React while Angular has a bit of a declining one. Vue.js is still not clear, but according to its specific convenient structure, it’s going to grow as well, maybe just a bit less than main frameworks.
        
        We also analyzed the number of open positions worldwide that require a specific knowledge of a certain framework. As a source, we looked at Indeed.com and got the following distribution according to more than 60,000 job offers.`,
        category: "Politics",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/547/1*yBRlzJUzQpePEGHl8r3CVw.jpeg"
    },
    {
        id: 7,
        title: "Design better data tables",
        summary: "The ingredients of a successful data table UI",
        content: `Data is useless without the ability to visualize and act on it. The success of future industries will combine advanced data collection with better user experience, and the data table comprises much of this user experience.

        Good data tables allow users to scan, analyze, compare, filter, sort, and manipulate information to derive insights and commit actions. This article presents a list of design structures, interaction patterns, and techniques to help you design better data tables.`,
        category: "Design",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*xhD2-Xa-jn1ve-jT0PLKTw.jpeg"
    },

    {
        id: 8,
        title: "Design better data tables",
        summary: "The ingredients of a successful data table UI",
        content: `Data is useless without the ability to visualize and act on it. The success of future industries will combine advanced data collection with better user experience, and the data table comprises much of this user experience.

        Good data tables allow users to scan, analyze, compare, filter, sort, and manipulate information to derive insights and commit actions. This article presents a list of design structures, interaction patterns, and techniques to help you design better data tables.`,
        category: "Design",
        author: "Rachid",
        date: "27/08/2022",
        image: "https://miro.medium.com/max/700/1*xhD2-Xa-jn1ve-jT0PLKTw.jpeg"
    },




]