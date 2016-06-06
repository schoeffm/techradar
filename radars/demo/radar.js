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
                "id": 1,
                "title": "Yeoman",
                "url": "http://yeoman.io/ ",
                "placements": [
                    {
                        "id": 1,
                        "description": "Yeoman helps to kickstart new projects, prescribing best practices and tools to help you stay productive. To do so, Yeoman provides a generator ecosystem. A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts. The offered workflow is a robust and opinionated client-side stack, comprising tools and frameworks that can help developers quickly build beautiful web applications. We take care of providing everything needed to get started without any of the normal headaches associated with a manual setup.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 90,
                            "radius": 180
                        }
                    },
                    {
                        "id": 49,
                        "description": "Yeoman helps to kickstart new projects, prescribing best practices and tools to help you stay productive. To do so, Yeoman provides a generator ecosystem. A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts. The offered workflow is a robust and opinionated client-side stack, comprising tools and frameworks that can help developers quickly build beautiful web applications. We take care of providing everything needed to get started without any of the normal headaches associated with a manual setup.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 0,
                            "radius": 90
                        }
                    }
                ]
            },
            {
                "id": 3,
                "title": "Buck",
                "url": "https://facebook.github.io/buck/ ",
                "placements": [
                    {
                        "id": 3,
                        "description": "Buck is a new player in the world of java build tools. Initially created and open sourced by <a href='https://www.facebook.com/'>Facebook</a> it was quickly adapted by Google in order to speed up the build process for Android development. It very aggressively optimizes the decision whether or not to (re-)compile a certain artifact, thus optimizing the overall build time (compared to gradle or maven).",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 30,
                            "radius": 216
                        }
                    },
                    {
                        "id": 50,
                        "description": "Buck is a new player in the world of java build tools. Initially created and open sourced by <a href='https://www.facebook.com/'>Facebook</a> it was quickly adapted by Google in order to speed up the build process for Android development. It very aggressively optimizes the decision whether or not to (re-)compile a certain artifact, thus optimizing the overall build time (compared to gradle or maven).",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 30,
                            "radius": 216
                        }
                    }
                ]
            },
            {
                "id": 4,
                "title": "Gradle",
                "url": "http://gradle.org/ ",
                "placements": [
                    {
                        "id": 4,
                        "description": "Based on the programming language Groovy Gradle offers much more flexibility than maven, although it still complies to the concept of <i>convention over configuration</i>.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 70,
                            "radius": 120
                        }
                    },
                    {
                        "id": 52,
                        "description": "Based on the programming language Groovy Gradle offers much more flexibility than maven, although it still complies to the concept of <i>convention over configuration</i>.",
                        "since": 1441978572000,
                        "coordinates": {
                            "angle": 70,
                            "radius": 120
                        }
                    }
                ]
            },
            {
                "id": 5,
                "title": "Bower",
                "url": "http://bower.io/ ",
                "placements": [
                    {
                        "id": 5,
                        "description": "When developing JavaScript based web-applications dependency management was an unsolved problem so far - Bower mitigates that issue. It lets you manage all your <i>client-side</i> dependencies in a configuration file.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 30,
                            "radius": 112
                        }
                    },
                    {
                        "id": 53,
                        "description": "When developing JavaScript based web-applications dependency management was an unsolved problem so far - Bower mitigates that issue. It lets you manage all your <i>client-side</i> dependencies in a configuration file.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 30,
                            "radius": 112
                        }
                    }
                ]
            },
            {
                "id": 6,
                "title": "Grunt",
                "url": "http://gruntjs.com/ ",
                "placements": [
                    {
                        "id": 6,
                        "description": "Grunt is currently the most widely used build tool in the JavaScript ecosystem. It got a hudge amount of plugins (not always an advantage, though), a vibrant community (which is definitely an advantage) and gets already adopted by IDE vendors. If you start a JS-project today, Grunt is definitely a save pick.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 40,
                            "radius": 96
                        }
                    },
                    {
                        "id": 56,
                        "description": "Grunt is currently the most widely used build tool in the JavaScript ecosystem. It got a hudge amount of plugins (not always an advantage, though), a vibrant community (which is definitely an advantage) and gets already adopted by IDE vendors. If you start a JS-project today, Grunt is definitely a save pick.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 40,
                            "radius": 96
                        }
                    }
                ]
            },
            {
                "id": 7,
                "title": "Docker",
                "url": "https://www.docker.com/ ",
                "placements": [
                    {
                        "id": 7,
                        "description": "Container solve many of the problems that are also adressed by virtual machines but in a much more lightweight way. Docker is a tool to encapsulate processes, services, applications of all kinds within lightweight, portable containers. You can even map whole multi-tier systems as inter-connected docker container. You can use it as developer tool as well as an application runtime in production environments where you <i>deploy</i> exactly the same container setup as you've used during development.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 20,
                            "radius": 216
                        }
                    },
                    {
                        "id": 102,
                        "description": "Container solve many of the problems that are also adressed by virtual machines but in a much more lightweight way. Docker is a tool to encapsulate processes, services, applications of all kinds within lightweight, portable containers. You can even map whole multi-tier systems as inter-connected docker container. You can use it as developer tool as well as an application runtime in production environments where you <i>deploy</i> exactly the same container setup as you've used during development.",
                        "since": 1426464000001,
                        "coordinates": {
                            "angle": 10,
                            "radius": 196
                        }
                    },                    
                    {
                        "id": 51,
                        "description": "The company behind Docker as well as the tool and the whole eco-system gained even more traction during the last few month. Docker was complemented with tools like <tt>docker-compose</tt> (in order to manage a whole set of containers within one configuration), <tt>docker-swarm</tt> (to run several docker-hosts within a cluster) or <tt>docker-machine</tt> (to seamlessly create/deploy containers into different environments) and evolved to an eco-system that addresses even more devops-concerns and made an even better fit for production setups and development tool-chains alike.<br/>\nWe as a company should definitely get comfortable with the possibilities and usage scenarios this technology offers - the only reason it is not in the <i>Adopt</i>-area is that we have grow expertise first.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 10,
                            "radius": 90
                        }
                    }
                ]
            },
            {
                "id": 8,
                "title": "Ansible",
                "url": "http://www.ansible.com/home",
                "placements": [
                    {
                        "id": 8,
                        "description": "For devops and sysadmins when it comes to provisioning Ansible is possibly the most flexible and versatile tool. In contrast to tools like <a href='https://puppetlabs.com/'>Puppet</a> or <a href='https://www.chef.io/chef/'>Chef</a> no client-side daemon is necessary but only a SSH connection and a view python packages. Based on VCS manageable YAML-configs you can specify the whole setup for your virtual or physical machines, thus being able to reproduce the exact same server-setup with just a single command.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 20,
                            "radius": 112
                        }
                    },
                    {
                        "id": 54,
                        "description": "For devops and sysadmins when it comes to provisioning Ansible is possibly the most flexible and versatile tool. In contrast to tools like <a href='https://puppetlabs.com/'>Puppet</a> or <a href='https://www.chef.io/chef/'>Chef</a> no client-side daemon is necessary but only a SSH connection and a view python packages. Based on VCS manageable YAML-configs you can specify the whole setup for your virtual or physical machines, thus being able to reproduce the exact same server-setup with just a single command.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 20,
                            "radius": 10
                        }
                    }
                ]
            },
            {
                "id": 10,
                "title": "DigitalOcean",
                "url": "https://www.digitalocean.com/ ",
                "placements": [
                    {
                        "id": 10,
                        "description": "<a href='http://digitalocean.com'>Digital Ocean</a> is a well known and currently quite popular cloud hosting service. You can host your application there within some clicks and minutes. It is mosted suited for small projects and for minimal viable products. For bigger cloud hosting solutions the Amazon Web Cloud should be considered. Digital Ocean profits from a big community and it's simple and well documented API.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 200,
                            "radius": 184
                        }
                    },
                    {
                        "id": 57,
                        "description": "<a href='http://digitalocean.com'>Digital Ocean</a> is a well known and currently quite popular cloud hosting service. You can host your application there within some clicks and minutes. It is mosted suited for small projects and for minimal viable products. For bigger cloud hosting solutions the Amazon Web Cloud should be considered. Digital Ocean profits from a big community and it's simple and well documented API.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 200,
                            "radius": 199
                        }
                    }
                ]
            },
            {
                "id": 11,
                "title": "ElasticSearch",
                "url": "http://www.elasticsearch.org/ ",
                "placements": [
                    {
                        "id": 11,
                        "description": "Elasticsearch is a search engine which is based on <a href='https://lucene.apache.org/'>Apache Lucene</a> but offers quite a bunch of convenience features on top like a REST-based API to query the index or cluster-support to distribute your search index over a variety of nodes. There are also client-libraries for most of the popular programming languages whereas the Java client is possibly the most powerful way to manage your index data.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 230,
                            "radius": 184
                        }
                    },
                    {
                        "id": 59,
                        "description": "Elasticsearch is a search engine which is based on <a href='https://lucene.apache.org/'>Apache Lucene</a> but offers quite a bunch of convenience features on top like a REST-based API to query the index or cluster-support to distribute your search index over a variety of nodes. There are also client-libraries for most of the popular programming languages whereas the Java client is possibly the most powerful way to manage your index data.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 230,
                            "radius": 184
                        }
                    }
                ]
            },
            {
                "id": 13,
                "title": "NodeJS",
                "url": "http://nodejs.org/ ",
                "placements": [
                    {
                        "id": 13,
                        "description": "With the appearance of NodeJS server side JavaScript not only became possible but also popular. Based on Googles V8-engine NodeJS provides a non-blocking JavaScript execution environment for server side applications and services. Since the whole programming model is based on streams it is a natural fit for IO-based tasks and services. Because of its single threaded nature it's a bad choice for number crunching tasks. Many of the JavaScript tools mentioned in this radar (like <a href='http://gulpjs.com/'>Gulp</a> or <a href='http://gruntjs.com/'>Grunt</a>) are based on NodeJS - so for tooling it's actually already a no risk choice. For your project it depends on the teams skillset and of course the issue to solve.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 350,
                            "radius": 64
                        }
                    },
                    {
                        "id": 61,
                        "description": "We've removed the spot for <a href=\"https://iojs.org\">IO.js</a> in this revision of the tech radar since it was re-integrated into Node. This is big news for NodeJS as a platform and the community around it since the driving forces which stand behind the development and maintenance of the platform are now consolidated, the fear of a community split a subsequent development slowdown has now vanished - in contrast NodeJS is more vital than ever. This is reflected by the lastly released major version 4.0.0 which - amongst several other things - also updated the V8 engine to the most current version.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 350,
                            "radius": 64
                        }
                    }
                ]
            },
            {
                "id": 15,
                "title": "Bootstrap",
                "url": "http://getbootstrap.com/ ",
                "placements": [
                    {
                        "id": 15,
                        "description": "Creating good looking web-apps from scratch is quite a challanging task, especially when it comes to styling and working around browser quirks. Bootstrap eases the need to do everything from scratch - it comes with a well crafted and educated browser reset and adds a whole bunch of best practices in order to get a mobile first, responsive web design. As a developer without any design experience its a save bet and thus a definite recommendation.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 120
                        }
                    },
                    {
                        "id": 62,
                        "description": "Creating good looking web-apps from scratch is quite a challanging task, especially when it comes to styling and working around browser quirks. Bootstrap eases the need to do everything from scratch - it comes with a well crafted and educated browser reset and adds a whole bunch of best practices in order to get a mobile first, responsive web design. As a developer without any design experience its a save bet and thus a definite recommendation.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 75
                        }
                    }
                ]
            },
            {
                "id": 16,
                "title": "Spock",
                "url": "http://docs.spockframework.org/en/latest/ ",
                "placements": [
                    {
                        "id": 16,
                        "description": "A groovy based BDD/DDD test-framework - although written in groovy you can also test your java project with this framework. It got almost everything you'll need like a decent DSL which let your write very expressive test code, mock- and stubbing-support without the need to add another library and remarkable precise error-messages in case of test failures.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 350,
                            "radius": 128
                        }
                    },
                    {
                        "id": 63,
                        "description": "A groovy based BDD/DDD test-framework - although written in groovy you can also test your java project with this framework. It got almost everything you'll need like a decent DSL which let your write very expressive test code, mock- and stubbing-support without the need to add another library and remarkable precise error-messages in case of test failures. See also <a href='#cucumber'>Cucumber</a>",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 350,
                            "radius": 128
                        }
                    }
                ]
            },
            {
                "id": 17,
                "title": "Swift",
                "url": "https://developer.apple.com/swift/ ",
                "placements": [
                    {
                        "id": 17,
                        "description": "The new programming language by Apple to write iOS applications - for a programmer with Java (or maybe Groovy) background the concepts should be quite familiar and thus the ramp up time can be expected as short. Although existing APIs are still in Objective-C Apple announced to promote Swift further and to extend the language support on its plattforms.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 136
                        }
                    },
                    {
                        "id": 64,
                        "description": "The new programming language by Apple to write iOS applications - for a programmer with Java (or maybe Groovy) background the concepts should be quite familiar and thus the ramp up time can be expected as short. Although existing APIs are still in Objective-C Apple announced to promote Swift further and to extend the language support on its plattforms.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 136
                        }
                    }
                ]
            },
            {
                "id": 18,
                "title": "Cucumber",
                "url": "https://cukes.info ",
                "placements": [
                    {
                        "id": 18,
                        "description": "As one of the most used BBD Frameworks, Cucumber supports several languages like Ruby, Java, .NET and Flex. One of the big values of Cucumber is the simplicity of writing acceptance tests. The test is written in a business-readable domain-specific language and serves both as automated tests and documentation.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 355,
                            "radius": 177
                        }
                    },
                    {
                        "id": 65,
                        "description": "As one of the most used BBD Frameworks, Cucumber supports several languages like Ruby, Java, .NET and Flex. One of the big values of Cucumber is the simplicity of writing acceptance tests. The test is written in a business-readable domain-specific language and serves both as automated tests and documentation. See also <a href='#spock'>Spock</a>",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 355,
                            "radius": 177
                        }
                    }
                ]
            },
            {
                "id": 19,
                "title": "Go",
                "url": "http://golang.org/ ",
                "placements": [
                    {
                        "id": 19,
                        "description": "Go is a programming language developed at Google which compiles directly to machine code (and not an interpreted bytecode) and still offers convenience like garbage collection or run-time reflection. Tools like Vagrant or Docker were built using Go - its complimented for its expressivness and efficiency.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 200
                        }
                    },
                    {
                        "id": 66,
                        "description": "Go is a programming language developed at Google which compiles directly to machine code (and not an interpreted bytecode) and still offers convenience like garbage collection or run-time reflection. Tools like Vagrant or Docker were built using Go - its complimented for its expressivness and efficiency.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 200
                        }
                    }
                ]
            },
            {
                "id": 20,
                "title": "Scala",
                "url": "http://www.scala-lang.org/ ",
                "placements": [
                    {
                        "id": 20,
                        "description": "As a JVM based programming language Scala combines the object oriented world with functional aspects. This combination makes it very flexible but also harder to get into it than into more focused languages. Pouplar frameworks like <a href='https://playframework.com/'>Play</a> or <a href='http://akka.io/'>Akka</a> map this flexibility to a concrete problem domain (which is solved very elegant and expressive due to the functional language features) and thus advocate the language even further.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 176
                        }
                    },
                    {
                        "id": 67,
                        "description": "As a JVM based programming language Scala combines the object oriented world with functional aspects. This combination makes it very flexible but also harder to get into it than into more focused languages. Pouplar frameworks like <a href='https://playframework.com/'>Play</a> or <a href='http://akka.io/'>Akka</a> map this flexibility to a concrete problem domain (which is solved very elegant and expressive due to the functional language features) and thus advocate the language even further.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 320,
                            "radius": 176
                        }
                    }
                ]
            },
            {
                "id": 21,
                "title": "Spring Boot",
                "url": "https://github.com/spring-projects/spring-boot ",
                "placements": [
                    {
                        "id": 21,
                        "description": "When talking about microservices you also should talk about Spring Boot. Although it's effectively nothing more than a small layer on top of already existing spring technologies it was never easier to quickly develop self-contained services. The spring team provides you with an educated view towards configuration and dependency management - if that's not an issue for you and your project it tremendously speeds up the development of java services. Combined with <a href='http://projects.spring.io/spring-cloud/'>spring cloud</a> you'll be able to create complete microservice architectures without the need to reimplement patterns like the <i>Circuite Breaker</i>.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 290,
                            "radius": 168
                        }
                    },
                    {
                        "id": 68,
                        "description": "When talking about microservices you also should talk about Spring Boot. Although it's effectively nothing more than a small layer on top of already existing spring technologies it was never easier to quickly develop self-contained services. The spring team provides you with an educated view towards configuration and dependency management - if that's not an issue for you and your project it tremendously speeds up the development of java services. Combined with <a href='http://projects.spring.io/spring-cloud/'>spring cloud</a> you'll be able to create complete microservice architectures without the need to reimplement patterns like the <i>Circuite Breaker</i>.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 290,
                            "radius": 122
                        }
                    },
                    {
                        "id": 68,
                        "description": "When talking about microservices you also should talk about Spring Boot. Although it's effectively nothing more than a small layer on top of already existing spring technologies it was never easier to quickly develop self-contained services. The spring team provides you with an educated view towards configuration and dependency management - if that's not an issue for you and your project it tremendously speeds up the development of java services. Combined with <a href='http://projects.spring.io/spring-cloud/'>spring cloud</a> you'll be able to create complete microservice architectures without the need to reimplement patterns like the <i>Circuite Breaker</i>.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 290,
                            "radius": 120
                        }
                    },
                    {
                        "id": 68,
                        "description": "When talking about microservices you also should talk about Spring Boot. Although it's effectively nothing more than a small layer on top of already existing spring technologies it was never easier to quickly develop self-contained services. The spring team provides you with an educated view towards configuration and dependency management - if that's not an issue for you and your project it tremendously speeds up the development of java services. Combined with <a href='http://projects.spring.io/spring-cloud/'>spring cloud</a> you'll be able to create complete microservice architectures without the need to reimplement patterns like the <i>Circuite Breaker</i>.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 300,
                            "radius": 160
                        }
                    },
                    {
                        "id": 68,
                        "description": "When talking about microservices you also should talk about Spring Boot. Although it's effectively nothing more than a small layer on top of already existing spring technologies it was never easier to quickly develop self-contained services. The spring team provides you with an educated view towards configuration and dependency management - if that's not an issue for you and your project it tremendously speeds up the development of java services. Combined with <a href='http://projects.spring.io/spring-cloud/'>spring cloud</a> you'll be able to create complete microservice architectures without the need to reimplement patterns like the <i>Circuite Breaker</i>.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 340,
                            "radius": 190
                        }
                    },
                    {
                        "id": 68,
                        "description": "When talking about microservices you also should talk about Spring Boot. Although it's effectively nothing more than a small layer on top of already existing spring technologies it was never easier to quickly develop self-contained services. The spring team provides you with an educated view towards configuration and dependency management - if that's not an issue for you and your project it tremendously speeds up the development of java services. Combined with <a href='http://projects.spring.io/spring-cloud/'>spring cloud</a> you'll be able to create complete microservice architectures without the need to reimplement patterns like the <i>Circuite Breaker</i>.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 290,
                            "radius": 210
                        }
                    }
                ]
            },
            {
                "id": 22,
                "title": "ES6",
                "url": "http://www.google.de",
                "placements": [
                    {
                        "id": 22,
                        "description": "ES6 refers to the upcoming JavaScript language standarad. It extends the language with familiar concepts like classes and other unaccounted concepts - frameworks and tools like IO.js or browser venders already provide support for most of these new features. In order to prepare for this irresistable change we should quickly get an idea about the new possibilities and challanges.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 176
                        }
                    },
                    {
                        "id": 69,
                        "description": "ES6 refers to the upcoming JavaScript language standarad. It extends the language with familiar concepts like classes and other unaccounted concepts - frameworks and tools like IO.js or browser venders already provide support for most of these new features. In order to prepare for this irresistable change we should quickly get an idea about the new possibilities and challanges.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 176
                        }
                    }
                ]
            },
            {
                "id": 23,
                "title": "TypeScript",
                "url": "http://www.typescriptlang.org/ ",
                "placements": [
                    {
                        "id": 23,
                        "description": "TypeScript is a programming language which compiles to plain JavaScript but unlike approaches as i.e. CoffeeScript (which is heavily influenced by the Ruby community), TypeScripts roots are C-based languages like i.e. Java. In addition, recently the AngularJS team announced that the next major release of the pouplar MVC-framework will use TypeScript as programming language which makes it even more pressing to get familiar with it.",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 280,
                            "radius": 224
                        }
                    },
                    {
                        "id": 70,
                        "description": "TypeScript is a programming language which compiles to plain JavaScript but unlike approaches as i.e. CoffeeScript (which is heavily influenced by the Ruby community), TypeScripts roots are C-based languages like i.e. Java. In addition, recently the AngularJS team announced that the next major release of the pouplar MVC-framework will use TypeScript as programming language which makes it even more pressing to get familiar with it.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 290,
                            "radius": 200
                        }
                    }
                ]
            },
            {
                "id": 24,
                "title": "Twitter",
                "url": "http://www.twitter.com",
                "placements": [
                    {
                        "id": 25,
                        "description": "Just use it!!\n\nAnd follow us under <a href=\"https://twitter.com/iteconomicsGmbH\">@iteconomicsGmbH</a>",
                        "since": 1426464000000,
                        "coordinates": {
                            "angle": 200,
                            "radius": 60
                        }
                    },
                    {
                        "id": 60,
                        "description": "Just use it!!\n\nAnd follow us under <a href=\"https://twitter.com/iteconomicsGmbH\">@iteconomicsGmbH</a>",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 200,
                            "radius": 60
                        }
                    }
                ]
            },
            {
                "id": 48,
                "title": "AWS",
                "url": "http://aws.amazon.com",
                "placements": [
                    {
                        "id": 58,
                        "description": "Amazon Web Services is a collection of remote computing services that are easily scaleable, configurable and cheaper than a physical server farm. This cloud computing platform offered by Amazon.com is also the most popular with a share of approximately 25% of the global cloud computing market.",
                        "since": 1441978094000,
                        "coordinates": {
                            "angle": 230,
                            "radius": 110
                        }
                    }
                ]
            },
            {
                "id": 49,
                "title": "CleanCode",
                "url": "http://clean-code-developer.de",
                "placements": [
                    {
                        "id": 71,
                        "description": "Robert C. Martin (Uncle Bob) described in his book <a href='http://www.amazon.de/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'>CleanCode</a> a bunch of really good principles and methods a developer can apply in his daily programming work. Following these hints can be a massive improvement concerning code quality, work efficiency and satisfaction in the end. At it-economics we introduce  <a href='https://apps.it-economics.de/confluence/display/CCD/Clean+Code+Developer'>Clean Code Developer</a> (CCD) to all our software developers. CCD is a continuous training on theses principles and methods on the job.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 120,
                            "radius": 55
                        }
                    }
                ]
            },
            {
                "id": 50,
                "title": "TDD",
                "url": "https://de.wikipedia.org/wiki/Testgetriebene_Entwicklung",
                "placements": [
                    {
                        "id": 72,
                        "description": "Test Driven Development (TDD) is a software development process to increase the quality, efficiency of source code and confidence of the developer.\nIt relies on repeating a short development cycle in which tests are written first, run to make sure the test fails, then the minimum of code is written to make the test pass and after that the code is refactored to meet acceptable standards.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 153,
                            "radius": 120
                        }
                    }
                ]
            },
            {
                "id": 51,
                "title": "AngularJS",
                "url": "https://angularjs.org",
                "placements": [
                    {
                        "id": 73,
                        "description": "AngularJS is one of the state-of-the-art JavaScript Frameworks for building web applications. Google's framework provides a simplistic programming model for data binding, dependency management, custom elements and much more. Alternative frameworks like <a href='https://facebook.github.io/react/'>ReactJS</a> and <a href='http://emberjs.com/'>EmberJS</a> are also fighting for the crown but due to Angular's maturity this framework can be regarded as our recommendation for web application projects.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 335,
                            "radius": 135
                        }
                    }
                ]
            },
            {
                "id": 52,
                "title": "Intellij",
                "url": "https://www.jetbrains.com/idea/",
                "placements": [
                    {
                        "id": 74,
                        "description": "As JetBrains, the company behind Intellij, claims it is <i>The Most Intelligent Java IDE</i>. Granted that's a bold statement - but during several projects we came to exact same conclusion. Intellij is tailored to java development and thus many functionalities you'll have to plug into general purpose platforms like Eclipse already come preinstalled and highly tuned with Intellij. Based on the success of Intellij JetBrains distilled a platform and now offers several other tailored products like for example <a href=\"https://www.jetbrains.com/ruby/\">RubyMine</a> or <a href=\"https://www.jetbrains.com/webstorm\">WebStorm</a> amongst others. While JetBrains sells licenses for their products the underlying platform is open which allowed Google to build its <a href=\"https://developer.android.com/sdk/index.html\">Android Studio</a> on top of the JetBrains platform.<br/>\nSo, the single caveat (when compared to open IDEs like NetBeans or Eclipse) to be mentioned here are the license costs. While the community edition (which mostly lacks enterprise features and support for several frameworks) is free to use we still highly recommend the usage of the ultimate edition for enterprise projects since the productivity gains outbalance the license costs.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 65,
                            "radius": 45
                        }
                    }
                ]
            },
            {
                "id": 53,
                "title": "ReactJS",
                "url": "http://reactjs.com",
                "placements": [
                    {
                        "id": 75,
                        "description": "ReactJS is a new JavaScript framework by Facebook to build Single-Page-Applications.\nWhile frameworks like AngularJS utilizes a 2-way data binding ReactJS promotes a one direction data flow. This leads \nto a strict hierarchical component model with clearly separated responsibilities. Another distinctive feature is the\nmixture of javascript and markup (whereat that markup also compiles down to javascript) - a fact that other \nframeworks try hard to prevent. Although controversial discussed this all leads to a quite plane learning curve.",
                        "since": 1441979123000,
                        "coordinates": {
                            "angle": 332,
                            "radius": 190
                        }
                    }
                ]
            }
        ]
    }
];
