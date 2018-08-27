# Restaurant Reviews
Udacity provided the starter code of a [static webpage](https://github.com/udacity/mws-restaurant-stage-1) that shows the New York Neighborhood with the available restaurants and their reviews. User has the ability to search for these places.

## Project description
 The goal of this project was to convert the static webpage to a mobile-ready web application, which will be responsive on different sized displays without using any framework and accessible for screen reader use. Also, there was the requirement for a service worker. This will ensure that when available in the browser, the site will use the service worker to cache responses to requests for site assets. Thus, the visited pages will be rendered when there is no network access. 

## Installing
- Clone the repository or download the zip folder of the project 
- In project folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this.
- In a terminal (e.g. node.js), check the version of Python you have: `python -V`. 
- If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. 
- If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
- With your server running, visit the site: `http://localhost:8000` (Chrome is recommended)
