# Youtube Jquery Project

In this project you will be using the youtube data api. We will be using http requests to get data from youtube.

### Get an api key so you can use it to get youtube data.

First go to the google developer console and create a new project, add the youtube data api and generate api key.

- [https://console.developers.google.com](https://console.developers.google.com)

### Sample http request from the youtube api

    https://www.googleapis.com/youtube/v3/search?pageToken=CDIQAA&part=snippet&q=lady+gaga&type=video&maxResults=25&key=[add your api key here]

You can find all the different options for your query here.

[https://developers.google.com/youtube/v3/docs/search/list](https://developers.google.com/youtube/v3/docs/search/list)

### Code for embedding a youtube iframe into your webpage

    <iframe id="video" width="960" height="600" src="//www.youtube.com/embed/en2D_5TzXCA?rel=0" frameborder="0" allowfullscreen></iframe>
# youtubejQuery
