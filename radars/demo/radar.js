var radar = [
    {
        "id": 1,
        "title": "TechRadar",
        "description": "Information technology is a constantly as well as rapidly changing area where new technologies and trends raise and fall, sometimes faster than we can adopt them. The it-e TechRadar is meant to give you a kind of orientation in this permanent changing environment. It should answer the question of what could be the next big topic and what technologies to keep your hands off. It's not meant to guide you to the one and only tool which solves your problem on your project.<p/>See it as a source of inspiration - it lists tools and frameworks we think it's worth to invest in.",
        "arcDistanceInPixel": 80,
        "arcs": [
            {
                "id": 1,
                "title": "Adopt",
                "description": "Technologies listed within this ring can and even should be used prominently. We as a company have plenty of experience and based on that there is no risk in using these technologies in production or on new projects. As <a href='http://www.thoughtworks.com' target='_blank'>thoughtworks</a> has stated it - as close to a <i>no brainer</i> as possible",
                "order": 1
            },
            {
                "id": 2,
                "title": "Trial",
                "description": "These spots have left the assess category behind and are now <i>mature</i> enough to be piloted on a <i>low risk</i> project to leave the TechLab world behind and enter the <i>real life</i>. TechLabs can show the benefits and the potential of new technologies, but they often miss out to reveal the limitations. Solving real problems can fill this niche.",
                "order": 2
            },
            {
                "id": 3,
                "title": "Assess",
                "description": "As the name suggests - technologies within that ring are worth having a closer look at. We should become acquainted with those tools/technologies in order to get a concrete idea about their potential impact on our business and our customers. Spikes or TechLabs should be an ideal way to get more familiar with them.",
                "order": 3
            },
            {
                "id": 4,
                "title": "Hold",
                "description": "This ring hosts technologies which are too new and unknown to be assessed. Therefor we cannot recommend those technologies to be used in our/your customer projects. But they are in the radar so we should get more insight and definitely play around with 'em.",
                "order": 4
            }
        ],
        "quadrants": [
            {
                "id": 1,
                "title": "Techniques",
                "upperAngle": 180,
                "lowerAngle": 90,
                "color": "#CCC18B",
                "spotColor": "#8caa4c"
            },
            {
                "id": 2,
                "title": "Platforms",
                "upperAngle": 270,
                "lowerAngle": 180,
                "color": "#EBB35F",
                "spotColor": "#ea9b25"

            },
            {
                "id": 3,
                "title": "Tools",
                "upperAngle": 90,
                "lowerAngle": 0,
                "color": "#A8B4C3",
                "spotColor": "#5183c1"
            },
            {
                "id": 4,
                "title": "Languages and Frameworks",
                "upperAngle": 360,
                "lowerAngle": 270,
                "color": "#CFBCC4",
                "spotColor": "#ce84a3"

            }
        ],
        "spots": [
            {
                "id": 5,
                "title": "Continuous Delivery",
                "url": "",
                "placements": [
                    {
                        "popularity": 57,
                        "description": "Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software with greater speed and frequency. The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 155,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 8,
                "title": "TDD",
                "url": "",
                "placements": [
                    {
                        "id": 8,
                        "popularity": 50,
                        "description": "Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements.\n\nAmerican software engineer Kent Beck, who is credited with having developed or \"rediscovered\" the technique, stated in 2003 that TDD encourages simple designs and inspires confidence.\n\nTest-driven development is related to the test-first programming concepts of extreme programming, begun in 1999, but more recently has created more general interest in its own right.\n\nProgrammers also apply the concept to improving and debugging legacy code developed with older techniques.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 135,
                            "radius": 35
                        }
                    },
                    {
                        "id": 27,
                        "popularity": 7,
                        "description": "Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements.\n\nAmerican software engineer Kent Beck, who is credited with having developed or \"rediscovered\" the technique, stated in 2003 that TDD encourages simple designs and inspires confidence.\n\nTest-driven development is related to the test-first programming concepts of extreme programming, begun in 1999, but more recently has created more general interest in its own right.\n\nProgrammers also apply the concept to improving and debugging legacy code developed with older techniques.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 155,
                            "radius": 280
                        }
                    }
                ]
            },
            {
                "id": 10,
                "title": "Microservices",
                "url": "",
                "placements": [
                    {
                        "id": 10,
                        "popularity": 27,
                        "description": "A 'microservice' is a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight. The benefit of decomposing an application into different smaller services is that it improves modularity and makes the application easier to understand, develop, test, and more resilient to architecture erosion. It parallelizes development by enabling small autonomous teams to develop, deploy and scale their respective services independently. It also allows the architecture of an individual service to emerge through continuous refactoring. Microservices-based architectures enable continuous delivery and deployment.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 160,
                            "radius": 105
                        }
                    },
                    {
                        "id": 4,
                        "popularity": 22,
                        "description": "A 'microservice' is a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight. The benefit of decomposing an application into different smaller services is that it improves modularity and makes the application easier to understand, develop, test, and more resilient to architecture erosion. It parallelizes development by enabling small autonomous teams to develop, deploy and scale their respective services independently. It also allows the architecture of an individual service to emerge through continuous refactoring. Microservices-based architectures enable continuous delivery and deployment.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 130,
                            "radius": 60
                        }
                    },
                    {
                        "id": 19,
                        "popularity": 1,
                        "description": "A 'microservice' is a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight. The benefit of decomposing an application into different smaller services is that it improves modularity and makes the application easier to understand, develop, test, and more resilient to architecture erosion. It parallelizes development by enabling small autonomous teams to develop, deploy and scale their respective services independently. It also allows the architecture of an individual service to emerge through continuous refactoring. Microservices-based architectures enable continuous delivery and deployment.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 145,
                            "radius": 185
                        }
                    },
                    {
                        "id": 28,
                        "popularity": 1,
                        "description": "A 'microservice' is a software development technique—a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight. The benefit of decomposing an application into different smaller services is that it improves modularity and makes the application easier to understand, develop, test, and more resilient to architecture erosion. It parallelizes development by enabling small autonomous teams to develop, deploy and scale their respective services independently. It also allows the architecture of an individual service to emerge through continuous refactoring. Microservices-based architectures enable continuous delivery and deployment.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 145,
                            "radius": 290
                        }
                    }
                ]
            },
            {
                "id": 31,
                "title": "Waterfall",
                "url": "",
                "placements": [
                    {
                        "popularity": 26,
                        "description": "The waterfall model is a relatively linear sequential design approach for certain areas of engineering design. In software development, it tends to be among the less iterative and flexible approaches, as progress flows in largely one direction (\"downwards\" like a waterfall) through the phases of conception, initiation, analysis, design, construction, testing, deployment and maintenance.\n\nThe waterfall development model originated in the manufacturing and construction industries; where the highly structured physical environments meant that design changes became prohibitively expensive much sooner in the development process. When first adopted for software development, there were no recognized alternatives for knowledge-based creative work",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 135,
                            "radius": 290
                        }
                    }
                ]
            },
            {
                "id": 1,
                "title": "Devops",
                "url": "",
                "placements": [
                    {
                        "popularity": 23,
                        "description": "DevOps (a clipped compound of \"development\" and \"operations\") is a software engineering culture and practice that aims at unifying software development (Dev) and software operation (Ops). The main characteristic of the DevOps movement is to strongly advocate automation and monitoring at all steps of software construction, from integration, testing, releasing to deployment and infrastructure management. DevOps aims at shorter development cycles, increased deployment frequency, and more dependable releases, in close alignment with business objectives",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 100,
                            "radius": 75
                        }
                    }
                ]
            },
            {
                "id": 17,
                "title": "Self managing teams",
                "url": "https://smallbusiness.chron.com/examples-selfmanagement-teams-31133.html",
                "placements": [
                    {
                        "popularity": 26,
                        "description": "A self-management team is a group of workers assigned to perform a specific job for a company. Instead of loosely connected workers performing separate tasks, a self-management team performs a defined set of interrelated tasks and has the autonomy to make most critical decisions about the work. Companies use self-management teams to improve productivity, quality and cost-management. Examples of self-management teams are found in many work groups and collaborative teams",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 105,
                            "radius": 125
                        }
                    },
                    {
                        "id": 26,
                        "popularity": 15,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 125,
                            "radius": 280
                        }
                    }
                ]
            },
            {
                "id": 21,
                "title": "Serverless",
                "url": "https://serverless.com/",
                "placements": [
                    {
                        "id": 21,
                        "popularity": 15,
                        "description": "Serverless infrastructure is a new type of cloud infrastructure that auto-scales and charges you only when it's used.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 135,
                            "radius": 185
                        }
                    },
                    {
                        "id": 6,
                        "popularity": 7,
                        "description": "Serverless infrastructure is a new type of cloud infrastructure that auto-scales and charges you only when it's used.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 170,
                            "radius": 60
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "Service Mocking",
                "url": "",
                "placements": [
                    {
                        "popularity": 12,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 115,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 9,
                "title": "Pair programming",
                "url": "",
                "placements": [
                    {
                        "popularity": 10,
                        "description": "Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.\n\nWhile reviewing, the observer also considers the \"strategic\" direction of the work, coming up with ideas for improvements and likely future problems to address. This is intended to free the driver to focus all of their attention on the \"tactical\" aspects of completing the current task, using the observer as a safety net and guide.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 105,
                            "radius": 45
                        }
                    }
                ]
            },
            {
                "id": 7,
                "title": "Six hour workday",
                "url": "",
                "placements": [
                    {
                        "id": 7,
                        "popularity": 10,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 150,
                            "radius": 55
                        }
                    },
                    {
                        "id": 24,
                        "popularity": 7,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 155,
                            "radius": 220
                        }
                    },
                    {
                        "id": 18,
                        "popularity": 5,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 145,
                            "radius": 115
                        }
                    }
                ]
            },
            {
                "id": 22,
                "title": "Micro frontends",
                "url": "https://micro-frontends.org/",
                "placements": [
                    {
                        "popularity": 9,
                        "description": "The idea behind Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 105,
                            "radius": 195
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Styled-components",
                "url": "https://www.styled-components.com/docs",
                "placements": [
                    {
                        "popularity": 6,
                        "description": "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 165,
                            "radius": 35
                        }
                    }
                ]
            },
            {
                "id": 14,
                "title": "Clean Architecture",
                "url": "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
                "placements": [
                    {
                        "popularity": 6,
                        "description": "Clean Architecture: A Craftsman's Guide to Software Structure and Design (Robert C. Martin Series). The universial guide to creating software",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 135,
                            "radius": 105
                        }
                    }
                ]
            },
            {
                "id": 11,
                "title": "BigData",
                "url": "",
                "placements": [
                    {
                        "popularity": 6,
                        "description": "Big data is data sets that are so big and complex that traditional data-processing application software are inadequate to deal with them. Big data challenges include capturing data, data storage, data analysis, search, sharing, transfer, visualization, querying, updating, information privacy and data source.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 160,
                            "radius": 135
                        }
                    }
                ]
            },
            {
                "id": 29,
                "title": "Building from scratch",
                "url": "",
                "placements": [
                    {
                        "popularity": 6,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 105,
                            "radius": 300
                        }
                    }
                ]
            },
            {
                "id": 16,
                "title": "Pomodoro",
                "url": "",
                "placements": [
                    {
                        "popularity": 4,
                        "description": "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are named pomodoros, the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.\n\nThe technique has been widely popularized by dozens of apps and websites providing timers and instructions. Closely related to concepts such as timeboxing and iterative and incremental development used in software design, the method has been adopted in pair programming contexts",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 105,
                            "radius": 105
                        }
                    }
                ]
            },
            {
                "id": 13,
                "title": "Chaos engineering",
                "url": "https://principlesofchaos.org/",
                "placements": [
                    {
                        "popularity": 4,
                        "description": "Chaos Engineering is the discipline of experimenting on a distributed system\nin order to build confidence in the system’s capability\nto withstand turbulent conditions in production.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 120,
                            "radius": 125
                        }
                    }
                ]
            },
            {
                "id": 23,
                "title": "four hour workday",
                "url": "",
                "placements": [
                    {
                        "popularity": 3,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 135,
                            "radius": 225
                        }
                    }
                ]
            },
            {
                "id": 20,
                "title": "Monolith",
                "url": "",
                "placements": [
                    {
                        "popularity": 2,
                        "description": "In software engineering, a monolithic application describes a single-tiered software application in which the user interface and data access code are combined into a single program from a single platform.\n\nA monolithic application is self-contained, and independent from other computing applications. The design philosophy is that the application is responsible not just for a particular task, but can perform every step needed to complete a particular function. Today, some personal finance applications are monolithic in the sense that they help the user carry out a complete task, end to end, and are \"private data silos\" rather than parts of a larger system of applications that work together. Some word processors are monolithic applications. These applications are sometimes associated with mainframe computers.\n\nIn software engineering, a monolithic application describes a software application which is designed without modularity. Modularity is desirable, in general, as it supports reuse of parts of the application logic and also facilitates maintenance by allowing repair or replacement of parts of the application without requiring wholesale replacement.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 115,
                            "radius": 185
                        }
                    }
                ]
            },
            {
                "id": 30,
                "title": "Talking",
                "url": "",
                "placements": [
                    {
                        "popularity": 2,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 115,
                            "radius": 300
                        }
                    }
                ]
            },
            {
                "id": 25,
                "title": "Riskiest assumption to test (RAT)",
                "url": "",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 115,
                            "radius": 220
                        }
                    }
                ]
            },
            {
                "id": 15,
                "title": "Bash automation",
                "url": "",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 125,
                            "radius": 105
                        }
                    }
                ]
            },
            {
                "id": 18,
                "title": "IntelliJ IDEA",
                "url": "https://www.jetbrains.com/idea/",
                "placements": [
                    {
                        "popularity": 84,
                        "description": "IntelliJ IDEA is a Java integrated development environment (IDE) for developing computer software. It is developed by JetBrains (formerly known as IntelliJ), and is available as an Apache 2 Licensed community edition, and in a proprietary commercial edition. Both can be used for commercial development.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 36,
                            "radius": 62
                        }
                    }
                ]
            },
            {
                "id": 13,
                "title": "Gradle",
                "url": "https://gradle.org/",
                "placements": [
                    {
                        "popularity": 52,
                        "description": "Gradle is an open-source build automation system that builds upon the concepts of Apache Ant and Apache Maven and introduces a Groovy-based domain-specific language (DSL) instead of the XML form used by Apache Maven for declaring the project configuration. Gradle uses a directed acyclic graph (\"DAG\") to determine the order in which tasks can be run.\n\nGradle was designed for multi-project builds, which can grow to be quite large. It supports incremental builds by intelligently determining which parts of the build tree are up to date; any task dependent only on those parts does not need to be re-executed.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 45,
                            "radius": 35
                        }
                    }
                ]
            },
            {
                "id": 5,
                "title": "Maven",
                "url": "https://maven.apache.org/",
                "placements": [
                    {
                        "id": 5,
                        "popularity": 42,
                        "description": "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 77,
                            "radius": 39
                        }
                    },
                    {
                        "id": 30,
                        "popularity": 7,
                        "description": "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 50,
                            "radius": 275
                        }
                    }
                ]
            },
            {
                "id": 6,
                "title": "JRebel",
                "url": "https://zeroturnaround.com/software/jrebel/",
                "placements": [
                    {
                        "popularity": 42,
                        "description": "JRebel fast tracks Java application development by skipping the time consuming build and redeploy steps in the development process. JRebel makes developers more productive since they can view code changes in real time.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 60,
                            "radius": 61
                        }
                    }
                ]
            },
            {
                "id": 19,
                "title": "Jenkins",
                "url": "https://jenkins.io/",
                "placements": [
                    {
                        "popularity": 24,
                        "description": "Jenkins is an open source automation server written in Java. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat. It supports version control tools, including AccuRev, CVS, Subversion, Git, Mercurial, Perforce, ClearCase and RTC, and can execute Apache Ant, Apache Maven and sbt based projects as well as arbitrary shell scripts and Windows batch commands. The creator of Jenkins is Kohsuke Kawaguchi. Released under the MIT License, Jenkins is free software.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 50,
                            "radius": 47
                        }
                    }
                ]
            },
            {
                "id": 31,
                "title": "Apache Ant",
                "url": "https://ant.apache.org/",
                "placements": [
                    {
                        "popularity": 21,
                        "description": "Apache Ant is a software tool for automating software build processes, which originated from the Apache Tomcat project in early 2000. It was a replacement for the Make build tool of Unix, and was created due to a number of problems with Unix's make. It is similar to Make but is implemented using the Java language, requires the Java platform, and is best suited to building Java projects.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 62,
                            "radius": 290
                        }
                    }
                ]
            },
            {
                "id": 34,
                "title": "Oracle",
                "url": "",
                "placements": [
                    {
                        "id": 34,
                        "popularity": 20,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 65,
                            "radius": 260
                        }
                    },
                    {
                        "id": 1,
                        "popularity": 5,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 47,
                            "radius": 60
                        }
                    }
                ]
            },
            {
                "id": 14,
                "title": "Mockito",
                "url": "https://site.mockito.org/",
                "placements": [
                    {
                        "popularity": 17,
                        "description": "The framework allows the creation of test double objects (mock objects) in automated unit tests for the purpose of test-driven development (TDD) or behavior-driven development (BDD).",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 8,
                            "radius": 80
                        }
                    }
                ]
            },
            {
                "id": 28,
                "title": "Eclipse",
                "url": "https://www.eclipse.org/",
                "placements": [
                    {
                        "id": 28,
                        "popularity": 14,
                        "description": "Eclipse is an integrated development environment (IDE) used in computer programming, and is the most widely used Java IDE.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 20,
                            "radius": 270
                        }
                    },
                    {
                        "id": 16,
                        "popularity": 6,
                        "description": "Eclipse is an integrated development environment (IDE) used in computer programming, and is the most widely used Java IDE.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 40,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 8,
                "title": "XRebel",
                "url": "https://zeroturnaround.com/software/xrebel/",
                "placements": [
                    {
                        "popularity": 13,
                        "description": "XRebel provides real time feedback on application performance in local development so bugs can be debugged and resolved faster.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 70,
                            "radius": 77
                        }
                    }
                ]
            },
            {
                "id": 15,
                "title": "Elastic",
                "url": "https://www.elastic.co/",
                "placements": [
                    {
                        "popularity": 13,
                        "description": "Elasticsearch is a search engine based on Lucene. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. Elasticsearch is developed in Java and is released as open source under the terms of the Apache License.Elasticsearch can be used to search all kinds of documents. It provides scalable search, has near real-time search, and supports multitenancy. \"Elasticsearch is distributed, which means that indices can be divided into shards and each shard can have zero or more replicas. Each node hosts one or more shards, and acts as a coordinator to delegate operations to the correct shard(s). Rebalancing and routing are done automatically\". Related data is often stored in the same index, which consists of one or more primary shards, and zero or more replica shards. Once an index has been created, the number of primary shards cannot be changed.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 50,
                            "radius": 75
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Ansible",
                "url": "https://www.ansible.com/",
                "placements": [
                    {
                        "id": 3,
                        "popularity": 13,
                        "description": "Ansible is an open source software that automates software provisioning, configuration management, and application deployment.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 28,
                            "radius": 50
                        }
                    },
                    {
                        "id": 26,
                        "popularity": 3,
                        "description": "Ansible is an open source software that automates software provisioning, configuration management, and application deployment.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 50,
                            "radius": 195
                        }
                    }
                ]
            },
            {
                "id": 2,
                "title": "ESLint",
                "url": "https://eslint.org/",
                "placements": [
                    {
                        "popularity": 11,
                        "description": "ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 10,
                            "radius": 64
                        }
                    }
                ]
            },
            {
                "id": 33,
                "title": "JDeveloper",
                "url": "https://www.oracle.com/technetwork/developer-tools/jdev/overview/index.html",
                "placements": [
                    {
                        "popularity": 10,
                        "description": "JDeveloper is a freeware IDE supplied by Oracle Corporation. It offers features for development in Java, XML, SQL and PL/SQL, HTML, JavaScript, BPEL and PHP. JDeveloper covers the full development lifecycle from design through coding, debugging, optimization and profiling to deploying.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 75,
                            "radius": 260
                        }
                    }
                ]
            },
            {
                "id": 10,
                "title": "Yam",
                "url": "",
                "placements": [
                    {
                        "popularity": 8,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 32,
                            "radius": 77
                        }
                    }
                ]
            },
            {
                "id": 11,
                "title": "WireMock",
                "url": "http://wiremock.org/",
                "placements": [
                    {
                        "popularity": 8,
                        "description": "WireMock is a simulator for HTTP-based APIs. Some might consider it a service virtualization tool or a mock server.\n\nIt enables you to stay productive when an API you depend on doesn't exist or isn't complete. It supports testing of edge cases and failure modes that the real API won't reliably produce. And because it's fast it can reduce your build time from hours down to minutes.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 82,
                            "radius": 78
                        }
                    }
                ]
            },
            {
                "id": 29,
                "title": "NetBeans",
                "url": "https://netbeans.org/",
                "placements": [
                    {
                        "popularity": 8,
                        "description": "NetBeans is an integrated development environment (IDE) for Java. NetBeans allows applications to be developed from a set of modular software components called modules. NetBeans runs on Microsoft Windows, macOS, Linux and Solaris. In addition to Java development, it has extensions for other languages like PHP, C, C++, HTML5,, and Javascript. Applications based on NetBeans, including the NetBeans IDE, can be extended by third party developers.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 30,
                            "radius": 275
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "TSLint",
                "url": "https://palantir.github.io/tslint/",
                "placements": [
                    {
                        "popularity": 6,
                        "description": "TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 80,
                            "radius": 23
                        }
                    }
                ]
            },
            {
                "id": 7,
                "title": "JMeter",
                "url": "https://jmeter.apache.org/",
                "placements": [
                    {
                        "popularity": 5,
                        "description": "The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 78,
                            "radius": 53
                        }
                    }
                ]
            },
            {
                "id": 23,
                "title": "AppDynamics",
                "url": "https://www.appdynamics.com/",
                "placements": [
                    {
                        "popularity": 5,
                        "description": "AppDynamics is a application performance management (APM) and IT operations analytics (ITOA) company based in San Francisco. The company focuses on managing the performance and availability of applications across cloud computing environments as well as inside the data center",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 40,
                            "radius": 125
                        }
                    }
                ]
            },
            {
                "id": 12,
                "title": "Plumbr",
                "url": "https://plumbr.io/",
                "placements": [
                    {
                        "popularity": 5,
                        "description": "Plumbr monitors customers' JVM applications for memory leaks, garbage collection pauses and locked threads. Plumbr problem detection algorithms are based on analysis of performance data of thousands of JVMs.\n\nPlumbr consists of an agent and a portal. Plumbr Agent is attached to JVM and sends memory usage and garbage collection information to Plumbr Portal. On Plumbr Portal one can see information such as heap and permgen memory usage, garbage collection pauses' and lock contention duration. Clients that can't send data to third parties can order a self-hosted portal and have full solution in-house.\n\nIn case of incidents Plumbr provides its users with information on problem severity, problem's root cause location in source code or JVM configuration and lists steps needed to take to remediate the problem.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 80,
                            "radius": 65
                        }
                    }
                ]
            },
            {
                "id": 20,
                "title": "Overcommit",
                "url": "https://github.com/brigade/overcommit",
                "placements": [
                    {
                        "popularity": 4,
                        "description": "A fully configurable and extendable Git hook manager",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 50,
                            "radius": 105
                        }
                    }
                ]
            },
            {
                "id": 24,
                "title": "Yarn",
                "url": "https://yarnpkg.com/",
                "placements": [
                    {
                        "popularity": 4,
                        "description": "Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.\n\nYarn allows you to use other developers’ solutions to different problems, making it easier for you to develop your software. If you have problems, you can report issues or contribute back, and when the problem is fixed, you can use Yarn to keep it all up to date.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 30,
                            "radius": 135
                        }
                    }
                ]
            },
            {
                "id": 21,
                "title": "GitLab CI",
                "url": "https://about.gitlab.com/features/gitlab-ci-cd/",
                "placements": [
                    {
                        "popularity": 4,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 60,
                            "radius": 115
                        }
                    }
                ]
            },
            {
                "id": 27,
                "title": "Birt",
                "url": "http://www.eclipse.org/birt/",
                "placements": [
                    {
                        "popularity": 2,
                        "description": "The Business Intelligence and Reporting Tools (BIRT) Project is an open source software project that provides reporting and business intelligence capabilities for rich client and web applications, especially those based on Java and Java EE. BIRT is a top-level software project within the Eclipse Foundation, an independent not-for-profit consortium of software industry vendors and an open source community.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 40,
                            "radius": 260
                        }
                    }
                ]
            },
            {
                "id": 25,
                "title": "Rancher",
                "url": "https://rancher.com/",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "Kubernetes is a powerful engine for running containers. With Rancher 2.0, manage all Kubernetes distros, all clusters, on all clouds. One sleek vehicle for a powerful engine.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 60,
                            "radius": 175
                        }
                    }
                ]
            },
            {
                "id": 5,
                "title": "Docker",
                "url": "https://www.docker.com/",
                "placements": [
                    {
                        "id": 5,
                        "popularity": 67,
                        "description": "Docker is a computer program that performs operating-system-level virtualization, also known as \"containerization\". It was first released in 2013 and is developed by Docker, Inc.\n\nDocker is used to run software packages called \"containers\". In a typical example use case, one container runs a web server and web application, while a second container runs a database server that is used by the web application.[citation needed] Containers are isolated from each other and bundle their own tools, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and are thus more lightweight than virtual machines. Containers are created from \"images\" that specify their precise contents. Images are often created by combining and modifying standard images downloaded from repositories.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 240,
                            "radius": 15
                        }
                    },
                    {
                        "id": 10,
                        "popularity": 21,
                        "description": "Docker is a computer program that performs operating-system-level virtualization, also known as \"containerization\". It was first released in 2013 and is developed by Docker, Inc.\n\nDocker is used to run software packages called \"containers\". In a typical example use case, one container runs a web server and web application, while a second container runs a database server that is used by the web application.[citation needed] Containers are isolated from each other and bundle their own tools, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and are thus more lightweight than virtual machines. Containers are created from \"images\" that specify their precise contents. Images are often created by combining and modifying standard images downloaded from repositories.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 195,
                            "radius": 120
                        }
                    }
                ]
            },
            {
                "id": 9,
                "title": "Kubernetes",
                "url": "https://kubernetes.io/",
                "placements": [
                    {
                        "popularity": 32,
                        "description": "Kubernetes is an open-source container-orchestration system for automating deployment, scaling and management of containerized applications. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation. It aims to provide a \"platform for automating deployment, scaling, and operations of application containers across clusters of hosts.\" It works with a range of container tools, including Docker.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 205,
                            "radius": 30
                        }
                    }
                ]
            },
            {
                "id": 6,
                "title": "AWS",
                "url": "https://aws.amazon.com/",
                "placements": [
                    {
                        "popularity": 29,
                        "description": "Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis. The technology allows subscribers to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's version of virtual computers emulate most of the attributes of a real computer including hardware (CPU(s) & GPU(s) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, CRM, etc. Each AWS system also virtualizes its console I/O (keyboard, display, and mouse), allowing AWS subscribers to connect to their AWS system using a modern browser. The browser acts as a window into the virtual computer, letting subscribers log-in, configure and use their virtual systems just as they would a real physical computer. They can choose to deploy their AWS systems to provide internet-based services for themselves and their customers.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 190,
                            "radius": 50
                        }
                    }
                ]
            },
            {
                "id": 17,
                "title": "Liferay",
                "url": "https://www.liferay.com/",
                "placements": [
                    {
                        "popularity": 16,
                        "description": "Liferay, Inc., is an open-source company that provides free documentation and paid professional service to users of its software. Mainly focused on enterprise portal technology, the company has its headquarters in Diamond Bar, California, United States.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 245,
                            "radius": 275
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Kafka",
                "url": "https://kafka.apache.org/",
                "placements": [
                    {
                        "popularity": 10,
                        "description": "Apache Kafka is an open-source stream-processing software platform developed by the Apache Software Foundation, written in Scala and Java. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds. Its storage layer is essentially a \"massively scalable pub/sub message queue designed as a distributed transaction log,\" making it highly valuable for enterprise infrastructures to process streaming data. Additionally, Kafka connects to external systems (for data import/export) via Kafka Connect and provides Kafka Streams, a Java stream processing library.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 240,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 7,
                "title": "Docker Swarm",
                "url": "https://docs.docker.com/engine/swarm/",
                "placements": [
                    {
                        "popularity": 10,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 190,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 8,
                "title": "Ethereum",
                "url": "https://www.ethereum.org/",
                "placements": [
                    {
                        "popularity": 5,
                        "description": "Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract (scripting) functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 260,
                            "radius": 60
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "Google Cloud",
                "url": "https://cloud.google.com/",
                "placements": [
                    {
                        "popularity": 5,
                        "description": "Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube. Alongside a set of management tools, it provides a series of modular cloud services including computing, data storage, data analytics and machine learning. Registration requires a credit card or bank account details.\n\nGoogle Cloud Platform provides Infrastructure as a Service, Platform as a Service, and Serverless Computing environments.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 230,
                            "radius": 40
                        }
                    }
                ]
            },
            {
                "id": 15,
                "title": "Auth0",
                "url": "https://auth0.com/",
                "placements": [
                    {
                        "popularity": 3,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 215,
                            "radius": 110
                        }
                    }
                ]
            },
            {
                "id": 13,
                "title": "Electron",
                "url": "https://electronjs.org/",
                "placements": [
                    {
                        "popularity": 2,
                        "description": "The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium and is used by the Atom editor and many other apps.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 260,
                            "radius": 132
                        }
                    }
                ]
            },
            {
                "id": 11,
                "title": "Pilw.io",
                "url": "https://pilw.io/",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 250,
                            "radius": 120
                        }
                    }
                ]
            },
            {
                "id": 12,
                "title": "Tron",
                "url": "https://tron.network/",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "TRON is an ambitious project dedicated to the establishment of a truly decentralized Internet and its infrastructure.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 230,
                            "radius": 122
                        }
                    }
                ]
            },
            {
                "id": 14,
                "title": "Redis",
                "url": "https://redis.io/",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "Redis (Remote Dictionary Server) is an open-source in-memory database project implementing a distributed, in-memory key-value store with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, hyperloglogs, bitmaps and spatial indexes. The project is mainly developed by Salvatore Sanfilippo and is currently sponsored by Redis Labs",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 210,
                            "radius": 132
                        }
                    }
                ]
            },
            {
                "id": 16,
                "title": "Azure Stack",
                "url": "https://azure.microsoft.com/en-us/",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through a global network of Microsoft-managed data centers. It provides software as a service (SaaS), platform as a service (PaaS) and infrastructure as a service (IaaS) and supports many different programming languages, tools and frameworks, including both Microsoft-specific and third-party software and systems.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 205,
                            "radius": 200
                        }
                    }
                ]
            },
            {
                "id": 8,
                "title": "React",
                "url": "https://reactjs.org/",
                "placements": [
                    {
                        "popularity": 41,
                        "description": "In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.\n\nReact can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 278,
                            "radius": 65
                        }
                    }
                ]
            },
            {
                "id": 10,
                "title": "Kotlin",
                "url": "https://kotlinlang.org/",
                "placements": [
                    {
                        "id": 10,
                        "popularity": 40,
                        "description": "Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure. Its primary development is from a team of JetBrains programmers based in Saint Petersburg, Russia. While the syntax is not compatible with Java, the JVM implementation of the Kotlin standard library is designed to interoperate with Java code and is reliant on Java code from the existing Java Class Library, such as the collections framework. Kotlin uses aggressive type inference to determine the type of values and expressions for which type has been left unstated. This reduces language verbosity relative to Java, which demands often entirely redundant type specifications prior to version 10.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 345,
                            "radius": 25
                        }
                    },
                    {
                        "id": 27,
                        "popularity": 12,
                        "description": "Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure. Its primary development is from a team of JetBrains programmers based in Saint Petersburg, Russia. While the syntax is not compatible with Java, the JVM implementation of the Kotlin standard library is designed to interoperate with Java code and is reliant on Java code from the existing Java Class Library, such as the collections framework. Kotlin uses aggressive type inference to determine the type of values and expressions for which type has been left unstated. This reduces language verbosity relative to Java, which demands often entirely redundant type specifications prior to version 10.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 310,
                            "radius": 195
                        }
                    }
                ]
            },
            {
                "id": 7,
                "title": "TypeScript",
                "url": "https://www.typescriptlang.org/",
                "placements": [
                    {
                        "id": 7,
                        "popularity": 35,
                        "description": "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.\n\nTypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.\n\nTypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 292,
                            "radius": 75
                        }
                    },
                    {
                        "id": 21,
                        "popularity": 15,
                        "description": "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.\n\nTypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.\n\nTypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 310,
                            "radius": 130
                        }
                    },
                    {
                        "id": 35,
                        "popularity": 5,
                        "description": "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.\n\nTypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution.\n\nTypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 330,
                            "radius": 265
                        }
                    }
                ]
            },
            {
                "id": 6,
                "title": "Vue.js",
                "url": "https://vuejs.org/",
                "placements": [
                    {
                        "popularity": 20,
                        "description": "Vue.js is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is simplified with Vue because it is designed to be incrementally adoptable. Vue can also function as a web application framework capable of powering advanced single-page applications.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 305,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 9,
                "title": "Angular",
                "url": "https://angular.io/",
                "placements": [
                    {
                        "popularity": 17,
                        "description": "Angular (commonly referred to as \"Angular 2+\" or \"Angular v2 and above\") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 285,
                            "radius": 52
                        }
                    }
                ]
            },
            {
                "id": 1,
                "title": "JavaEE",
                "url": "https://www.oracle.com/technetwork/java/javaee/overview/index.html",
                "placements": [
                    {
                        "popularity": 17,
                        "description": "A Java EE application or a Java Platform, Enterprise Edition application is any deployable unit of Java EE functionality. This can be a single Java EE module or a group of modules packaged into an EAR file along with a Java EE application deployment descriptor. Java EE applications are typically engineered to be distributed across multiple computing tiers.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 35
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "Redux",
                "url": "https://redux.js.org/",
                "placements": [
                    {
                        "popularity": 12,
                        "description": "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 317,
                            "radius": 75
                        }
                    }
                ]
            },
            {
                "id": 18,
                "title": "AssertJ",
                "url": "http://joel-costigliola.github.io/assertj/",
                "placements": [
                    {
                        "popularity": 12,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 50
                        }
                    }
                ]
            },
            {
                "id": 14,
                "title": "Lombok",
                "url": "https://projectlombok.org/",
                "placements": [
                    {
                        "popularity": 10,
                        "description": "Java annotation library which helps to reduce boilerplate code and code faster",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 55
                        }
                    }
                ]
            },
            {
                "id": 32,
                "title": "Vaadin",
                "url": "https://vaadin.com/",
                "placements": [
                    {
                        "id": 32,
                        "popularity": 10,
                        "description": "Vaadin is an open-source platform for web application development. The Vaadin platform includes a set of web components, a Java web framework, and a set of tools and application starters. Its flagship product, Vaadin Flow (previously Vaadin Framework) allows the implementation of HTML5 web user interfaces using the Java Programming Language.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 265
                        }
                    },
                    {
                        "id": 19,
                        "popularity": 7,
                        "description": "Vaadin is an open-source platform for web application development. The Vaadin platform includes a set of web components, a Java web framework, and a set of tools and application starters. Its flagship product, Vaadin Flow (previously Vaadin Framework) allows the implementation of HTML5 web user interfaces using the Java Programming Language.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 100
                        }
                    }
                ]
            },
            {
                "id": 17,
                "title": "JOOQ",
                "url": "https://www.jooq.org/",
                "placements": [
                    {
                        "id": 17,
                        "popularity": 8,
                        "description": "Java Object Oriented Querying, commonly known as jOOQ, is a light database-mapping software library in Java that implements the active record pattern. Its purpose is to be both relational and object oriented by providing a domain-specific language to construct queries from classes generated from a database schema.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 340,
                            "radius": 44
                        }
                    },
                    {
                        "id": 26,
                        "popularity": 1,
                        "description": "Java Object Oriented Querying, commonly known as jOOQ, is a light database-mapping software library in Java that implements the active record pattern. Its purpose is to be both relational and object oriented by providing a domain-specific language to construct queries from classes generated from a database schema.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 145
                        }
                    }
                ]
            },
            {
                "id": 37,
                "title": "CoffeeScript",
                "url": "https://coffeescript.org/",
                "placements": [
                    {
                        "id": 37,
                        "popularity": 8,
                        "description": "CoffeeScript is a programming language that transcompiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python and Haskell in an effort to enhance JavaScript's brevity and readability. Specific additional features include list comprehension and pattern matching.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 285,
                            "radius": 285
                        }
                    },
                    {
                        "id": 22,
                        "popularity": 2,
                        "description": "CoffeeScript is a programming language that transcompiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python and Haskell in an effort to enhance JavaScript's brevity and readability. Specific additional features include list comprehension and pattern matching.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 340,
                            "radius": 130
                        }
                    }
                ]
            },
            {
                "id": 42,
                "title": "Coldfusion",
                "url": "https://www.adobe.com/products/coldfusion-family.html",
                "placements": [
                    {
                        "popularity": 7,
                        "description": "Adobe ColdFusion is a commercial rapid web application development platform created by J. J. Allaire in 1995. (The programming language used with that platform is also commonly called ColdFusion, though is more accurately known as CFML.) ColdFusion was originally designed to make it easier to connect simple HTML pages to a database. By version 2 (1996), it became a full platform that included an IDE in addition to a full scripting language.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 295,
                            "radius": 295
                        }
                    }
                ]
            },
            {
                "id": 13,
                "title": "Selenide",
                "url": "http://selenide.org/",
                "placements": [
                    {
                        "popularity": 7,
                        "description": "Selenide is a framework for test automation powered by Selenium WebDriver.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 8
                        }
                    }
                ]
            },
            {
                "id": 11,
                "title": "Clojure",
                "url": "https://clojure.org/",
                "placements": [
                    {
                        "id": 11,
                        "popularity": 6,
                        "description": "Clojure is a dialect of the Lisp programming language. Clojure is a general-purpose programming language with an emphasis on functional programming. It runs on the Java virtual machine and the Common Language Runtime. There is a dialect, developed in lockstep with Clojure, called ClojureScript, that compiles to ECMAScript 3. Like other Lisps, Clojure treats code as data and has a macro system. The current development process is community-driven, overseen by Rich Hickey as its benevolent dictator for life (BDFL).\n\nClojure encourages immutability and immutable data structures. While its type system is entirely dynamic, recent efforts have also sought the implementation of gradual typing. Clojure encourages programmers to be explicit about managing state and identity. This focus on programming with immutable values and explicit progression-of-time constructs is intended to facilitate developing more robust programs, especially multithreaded ones.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 350,
                            "radius": 70
                        }
                    },
                    {
                        "id": 28,
                        "popularity": 2,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 205
                        }
                    }
                ]
            },
            {
                "id": 16,
                "title": "Hibernate",
                "url": "http://hibernate.org/",
                "placements": [
                    {
                        "id": 46,
                        "popularity": 5,
                        "description": "",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 340,
                            "radius": 265
                        }
                    },
                    {
                        "id": 16,
                        "popularity": 4,
                        "description": "Hibernate ORM (Hibernate in short) is an object-relational mapping tool for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database. Hibernate handles object-relational impedance mismatch problems by replacing direct, persistent database accesses with high-level object handling functions.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 308,
                            "radius": 8
                        }
                    }
                ]
            },
            {
                "id": 48,
                "title": "JSF",
                "url": "",
                "placements": [
                    {
                        "popularity": 5,
                        "description": "JavaServer Faces (JSF) is a Java specification for building component-based user interfaces for web applications and was formalized as a standard through the Java Community Process being part of the Java Platform, Enterprise Edition. It is also a MVC web framework that simplifies construction of user interfaces (UI) for server-based applications by using reusable UI components in a page.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 331,
                            "radius": 300
                        }
                    }
                ]
            },
            {
                "id": 5,
                "title": "Scala",
                "url": "https://www.scala-lang.org/",
                "placements": [
                    {
                        "id": 47,
                        "popularity": 5,
                        "description": "Scala is a general-purpose programming language providing support for functional programming and a strong static type system. Designed to be concise, many of Scala's design decisions aimed to address criticisms of Java.\n\nScala source code is intended to be compiled to Java bytecode, so that the resulting executable code runs on a Java virtual machine. Scala provides language interoperability with Java, so that libraries written in both languages may be referenced directly in Scala or Java code. Like Java, Scala is object-oriented, and uses a curly-brace syntax reminiscent of the C programming language. Unlike Java, Scala has many features of functional programming languages like Scheme, Standard ML and Haskell, including currying, type inference, immutability, lazy evaluation, and pattern matching. It also has an advanced type system supporting algebraic data types, covariance and contravariance, higher-order types (but not higher-rank types), and anonymous types. Other features of Scala not present in Java include operator overloading, optional parameters, named parameters, and raw strings. Conversely, a feature of Java not in Scala is checked exceptions, which have proved controversial.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 337,
                            "radius": 284
                        }
                    },
                    {
                        "id": 5,
                        "popularity": 4,
                        "description": "Scala is a general-purpose programming language providing support for functional programming and a strong static type system. Designed to be concise, many of Scala's design decisions aimed to address criticisms of Java.\n\nScala source code is intended to be compiled to Java bytecode, so that the resulting executable code runs on a Java virtual machine. Scala provides language interoperability with Java, so that libraries written in both languages may be referenced directly in Scala or Java code. Like Java, Scala is object-oriented, and uses a curly-brace syntax reminiscent of the C programming language. Unlike Java, Scala has many features of functional programming languages like Scheme, Standard ML and Haskell, including currying, type inference, immutability, lazy evaluation, and pattern matching. It also has an advanced type system supporting algebraic data types, covariance and contravariance, higher-order types (but not higher-rank types), and anonymous types. Other features of Scala not present in Java include operator overloading, optional parameters, named parameters, and raw strings. Conversely, a feature of Java not in Scala is checked exceptions, which have proved controversial.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 77
                        }
                    },
                    {
                        "id": 23,
                        "popularity": 3,
                        "description": "Scala is a general-purpose programming language providing support for functional programming and a strong static type system. Designed to be concise, many of Scala's design decisions aimed to address criticisms of Java.\n\nScala source code is intended to be compiled to Java bytecode, so that the resulting executable code runs on a Java virtual machine. Scala provides language interoperability with Java, so that libraries written in both languages may be referenced directly in Scala or Java code. Like Java, Scala is object-oriented, and uses a curly-brace syntax reminiscent of the C programming language. Unlike Java, Scala has many features of functional programming languages like Scheme, Standard ML and Haskell, including currying, type inference, immutability, lazy evaluation, and pattern matching. It also has an advanced type system supporting algebraic data types, covariance and contravariance, higher-order types (but not higher-rank types), and anonymous types. Other features of Scala not present in Java include operator overloading, optional parameters, named parameters, and raw strings. Conversely, a feature of Java not in Scala is checked exceptions, which have proved controversial.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 340,
                            "radius": 125
                        }
                    }
                ]
            },
            {
                "id": 30,
                "title": "AWS Lambda",
                "url": "https://aws.amazon.com/lambda/",
                "placements": [
                    {
                        "popularity": 3,
                        "description": "AWS Lambda is an event-driven, serverless computing platform provided by Amazon as a part of the Amazon Web Services. It is a computing service that runs code in response to events and automatically manages the computing resources required by that code. It was introduced in November 2014.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 185
                        }
                    }
                ]
            },
            {
                "id": 43,
                "title": "TestNG",
                "url": "https://testng.org/",
                "placements": [
                    {
                        "popularity": 3,
                        "description": "TestNG is a testing framework for the Java programming language created by Cédric Beust and inspired by JUnit and NUnit. The design goal of TestNG is to cover a wider range of test categories: unit, functional, end-to-end, integration, etc., with more powerful and easy-to-use functionalities.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 318,
                            "radius": 295
                        }
                    }
                ]
            },
            {
                "id": 15,
                "title": "VAVR",
                "url": "http://www.vavr.io/",
                "placements": [
                    {
                        "popularity": 3,
                        "description": "Vavr core is a functional library for Java. It helps to reduce the amount of code and to increase the robustness. A first step towards functional programming is to start thinking in immutable values. Vavr provides immutable collections and the necessary functions and control structures to operate on these values. ",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 335,
                            "radius": 70
                        }
                    }
                ]
            },
            {
                "id": 25,
                "title": "Gherkin/Cucumber",
                "url": "https://cucumber.io/",
                "placements": [
                    {
                        "popularity": 2,
                        "description": "Cucumber is a software tool used by computer programmers for testing other software. It runs automated acceptance tests written in a behavior-driven development (BDD) style. Central to the Cucumber BDD approach is its plain language parser called Gherkin. It allows expected software behaviors to be specified in a logical language that customers can understand. As such, Cucumber allows the execution of feature documentation written in business-facing text.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 130
                        }
                    }
                ]
            },
            {
                "id": 31,
                "title": "Vert.X",
                "url": "https://vertx.io/",
                "placements": [
                    {
                        "popularity": 1,
                        "description": "Eclipse Vert.x is a polyglot event-driven application framework that runs on the Java Virtual Machine.",
                        "since": 1527811200000,
                        "coordinates": {
                            "angle": 290,
                            "radius": 215
                        }
                    }
                ]
            }
        ]
    }
];
