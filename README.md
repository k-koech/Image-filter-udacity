# Udagram REST API

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

# Endpoints

1. [Filtered image](http://image-filter-starter-code.us-east-1.elasticbeanstalk.com/filteredimage/) 
2. [Login](http://image-filter-starter-code.us-east-1.elasticbeanstalk.com/api/users/auth/login)
3. [Register](http://image-filter-starter-code.us-east-1.elasticbeanstalk.com/api/users/auth/)

***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```
Ater installing the project dependencies, source the .env file using `. .env` in the terminal and run the server.

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase. 

