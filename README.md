# infoMe and HRM

## Setup Development Environment
In order to run the application on your local environment download and install below packages.

 1. Download and Install nodejs: https://docs.npmjs.com/getting-started/installing-node
 2. Download and Install mongodb: https://docs.mongodb.com/manual/installation/   

 ### Mongo Database set-up
  Steps to set up mongodb for disconnected local development   
  + In root directory, create `data` directory:   
  		``` mkdir ~/data/db ```   
  + Run this command to start your mongod server:   
 		``` mongod --dbpath ~/data/db --port 27017 ```

## Test and Run App

### System Requirements

Our start-up scripts are mainly targeted at *NIX users, so if you are on Linux or MacOS, great.

> **Important Note**: If you face any problems during the installation with your latest version of node then try using an older version of node and npm. We suggest to use v8.12.0 for node and 6.4.1 for npm

### Common Steps for setup
  1. ```npm install```


### Start-up Using the new ```gulp``` runner
> This method will start up mongo daemon and nodemon process for hot reload, so it's the minimal extra effort approach
  1. ``` npm install -g gulp ```
  2. ``` gulp build ``` will build the scripts and styles. Note if you notice the scripts or styles were not correctly build try running `gulp clean` and then `gulp build` again.
  3. ```sudo gulp serve```