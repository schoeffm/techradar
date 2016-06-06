# (Yet another) TechRadar

### TL;DR

Inspired by [bdargan](https://github.com/bdargan/techradar)s initial version of a tech-radar I've tried to 
build my own version of a radar and here it is.

###  The tail behind

I've stumbled upon a very inspiring [Thoughtworks](https://www.thoughtworks.com)-article by [Neil Ford](https://www.thoughtworks.com/de/insights/blog/build-your-own-technology-radar) in which he described the ideas behind a technology radar. As luck would have it the company I work for also had the need to establish some kind of communication channel regarding technology and/or tool decisions. Our intranet solution was based on [Atlassian Confluence](https://www.atlassian.com/software/confluence) and so I've created a (free) [Confluence-Plugin](https://marketplace.atlassian.com/plugins/de.iteconomics.confluence.techradar/server/overview) to create and present a technology radar based on that platform.

The frontend wasn't Confluence-specific at all and since Peter H. (hi Peter!!) <strike>nagged</strike> motivated me to eventually extract the UI-part I've created this repo (with a static data-source).

## Usage / Installation
Since I've used this project also as playground for me I've tried a whole bunch of tools to create it (I wouldn't suggest that approach these days again, but it still works). So, assuming you got `node` and `npm` installed you could issue the followin' commands and should be ready to go:

    $~> cd techradar
    $~/techradar> npm install         # will install all dev-dependencies
    $~/techradar> bower install       # will fetch all necessary front-end dependencies
    $~/techradar> grunt               # will squish everything together

Fire up your browser and open the `radars/demo/index.html`. You should see something like this:

![TechRadar Sample](radar.png?raw=true)

All the data is served by a static JSON-file `radars/demo/radar.js`. The structure should be quite self explanatory - change it at will to see your technologies appearing in the radar.

The project can host multiple radars. Just copy 'radars/demo' to 'radars/myradar' to create new one. To build your new radar use 'grunt --radar=myradar'

- Hovering over a spot will highlight it (_as demonstrated in the screenshot_)
  - still staying with your mouse over that spot it'll also show its historic way through the radar (if the spot contains a recognizable history - I've created three stops for the docker-spot in the example data)
- Clickin' on a spot will uncover the current description
  - the spots name will be automatically detected in the text and linked to the tools homepage.
  - you can also directly embed HTML there to add your own links (__beware__: no escaping is done)
  - to access also the historic descriptions you'll have to click the _Histor_ link a the very bottom of the current description
    - that will uncover another text-block at the bottom of the page
- Clickin' the __?__-sign at the lift upper corner will show a short description about what's the purpose of this radar and each ring etc.

## Create your own radar

The project can host multiple radars. To add and manage your own radar:

1. Copy demo radar
  * _cp -R radars/demo radars/myradar_
2. Build myradar
  * _grunt --radar=myradar_
3. Open radars/myradar/index.html
4. Add myradar to your private version control
  * _cd radars/myradar_
  * _git init && git add -A && git commit -m "Initial commit"_
    
With this layout and intelligent IDE i's easy to contribute back to this techradar project and manage your personal or company radar in a separate repository. Everything under radars/myradar will be pushed to your repository while rest of the files use different remote.
