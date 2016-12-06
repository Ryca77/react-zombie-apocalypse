# Will You Survive A Zombie Apocalypse?

A lighthearted single page app which analyses various user inputs, their current location and a randomly generated zombie infection position in the UK, to determine whether they would make it to one of six designated safe zones before being overcome by zombies.

## User Journey

On launch, the browser will request access to the user's location and, once granted, displays a short series of buttons and questions where different options can be selected. The user can then load a map of the UK which shows their location, the zombie infections point and the siz safe zones. On clicking the 'Load Prediction' button the app analyses the options entered, along with the various locations, and then return a survival prediction.

## Technologies

* ReactJS, JavaScript, HTML5, CSS3
* Google Maps API - Geolocation, Directions, Street View Image

## Future Developments

* Visual represenation of the user journey and spread of zombie infection
* Make it global - would need to access safe zone data through an API
* Improvements in zombie movement, using an increasing radius rather than a linear direction
