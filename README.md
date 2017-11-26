# howFarIs

![gif's alt tex](https://media.giphy.com/media/3ohhwFZkLYITxBft0k/giphy.gif)

*howFar is a node js application/script that provides the distance between the user and any website server.*
---
The way it works is by geo-locating any website through its IP address and calculating the distance between these. It's very simple. 

This was an assignment of the [understanding networks][a1] class and its purpose id to illustrate the distance that data physically travels every time you visit a website.

![alt text](http://graupuche.info/video/39_2.gif)

*me trying to filter information*
---
To get all this information, I first tried to read out of the `traceroute` command but my end goal was to have the whole system in one command and one prompt. My skill level at this point is not as high as I would like it to be for this type of script, so instead of reading all the IP


```
const extIP = require('external-ip');
const dns = require('dns');
var where = require('node-where');
var geodist = require('geodist');
```

`external-ip` provides, the external IP of the system being used, then we have `dns` that hands out the IP of any URL you provide. After that we put in use `node-where` that has, between others the ability to translate an IP to a latitude and longitude. With this information `geodist` gets the distance between the two geographical points.

And that's pretty much all that this script does. That would be the basics to get the information, but I wanted to be able to run the program and write any URL and get te distance. This is the reason for using `prompt`. After all that, just because I'm a graphic designer I had to make things look nice. So I used `colors`.

Not much more to be said about this, if you wanna try it out or play with it, go ahead! The code is available at my [GitHub][a2] and you can play around with it. Just clone the repo and do `npm install`

[a1]: http://blog.graupuche.info/understanding_networks/
[a2]: https://github.com/grauPuche/_howfaris
