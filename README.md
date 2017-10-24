# Project 1 - Charles Martin Swing Band

## Overview
### What is this website for?
This is a website for a swing band. It is for both existing and potential fans to keep in touch with the band.
 
### What does it do?
This website allows fans to hear and see music clips of the swing band, to view photos of the band members and to make enquiries about bookings including dates and estimates. Users can sign up for the monthly newsletter to stay up to date with forthcoming gigs and new material.

### How does it work?
This front-end website is built using the AngularJS framework which allows us to keep the code for the views, data and html separate. The site is styled with Bootstrap. AngularJS forms are used for enquiries and bookings. Media queries and Bootstrap are used to make site responsive.


## Features
### Existing Features
* Home page with access to the latest release and a link to the bookings form
* Social media links 
* Music and video clips from back catalogue
* Bookings form to inquire about bande availability and pricing
* Photos of the band members
* Form to sign up for newsletter 

### Features still to be implemented
* Gigs page listing all upcoming gigs
* Move data into a separate json file
* Replace audio element with just play and pause buttons for improved look
 

 
## Tech Used
### Some the tech used includes:
* [AngularJS](https://angularjs.org/)
	* We use **AngularJS** to handle page routing and because it contains everything required to build dynamic single page applications. 
* [Bootstrap](http://getbootstrap.com/)
    * We use **Bootstrap** to build a responsive front-end app.
* [NodeJS](https://nodejs.org/en/)
    * We use **NodeJS** to allow Javascript to run in the local environment as well as in the browser.
* [npm](https://www.npmjs.com/)
	* We use **npm** to help manage some of the dependencies in our application and reuse code (packages) from other developers.
* [bower](https://bower.io/)
	* **Bower** is used to manage the installation of any additional front-end libraries and frameworks and keep them uoto date.
* [http-server](https://https://www.npmjs.com/package/http-server)
	* We use **http-server** to set up a HTTP web-server on the local machine because angular-route needs to be served by a server in order to work.


## Testing
Tested website in following browsers:
	* Google Chrome 
	* Mozilla Firefox  
	* Internet Explorer - display becomes left-aligned instead of central
	* Opera

* Home page:
	* tested click event for latest track plays for full 27 seconds.
	* tested link to booking form does open the booking form.
	* test click event on email address activates email client.
	* tested clicking on social media buttons opens correct social media sites.
* Music clips page:
	* tested all the expected data loads correctly into each table column.
	* tested correct track plays when audio button clicked.
* Video clips:
	* tested each video element plays correct video file.
	* tested each video can be maximised.
* Gallery:
	* checked all 5 images display correctly.
	* tested when hovering over an image it enlargens x 2.5.
	* tested when one image is clicked on, the remaining images move to the back. This feature is not working correctly - the click event for this is the controller: gallerycontroller in controller.js.
* Bookings:
	* tested Submit button is enabled only when all required data is entered. All fields are required except the venue address and the package type (day/evening). Not sure how to set required on radio buttons.
	* tested selecting a day package for booking. Estimate given was £3000.
	* tested selecting an evening package. Estimate given was £1500.
	* tested entering an event date which does not match one of the available dates. In this case the next available date is offered.	
	* tested entering an event date which does match one of the available dates ('20/12/2017', '21/12/2017','22/12/2017','23/12/2017').
* Newsletter:
	* tested not entering all required fields.
* Bugs:
	* Footer does not stick to bottom of page.



## Deployment to Github Pages
1. I created a new branch called gh-pages in my github repositiory (https://github.com/Kazkal/proj1band). This copied all the code in the master branch to the new branch gh-pages.
2. I removed bower_components from the .gitignore file in gh-pages because bower components were needed for deployment.
3. I created a new local branch called gh-pages by running git fetch and git checkout. This copied project code into the local gh-pages branch.
4. I installed the bower-components by running  ```bower install```.
5. I pushed these changes to the remote gh-pages branch.
6. I changed the absolute paths to relative paths by updating the base tag in the index.html to "." and the Home link in the navigation bar to ".".
7. I created a file called 404.html to redirect users back to the Home page whenever the browser searches for a non-existing page.
8. I pushed these changes to the remote gh-pages branch.



## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone https://github.com/Kazkal/proj1band/tree/gh-pages``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request.