## Udagram REST API

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

### NOTE   Not all images load/load faster
   NOTE => The Link doesn't work because AWS is costly


### DEPLOYMENT URL
  http://image-filter-starter-code-dev22222222222222222222222.us-east-1.elasticbeanstalk.com

### Endpoint URL for elastic beanstalk deployment
  http://image-filter-starter-code-dev22222222222222222222222.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://media.geeksforgeeks.org/wp-content/uploads/20190328185307/gfg28.png

### GitHub Repository Link
  https://github.com/k-koech/image-filter


***
### Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```

### Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase. 

