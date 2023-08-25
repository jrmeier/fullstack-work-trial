# Full Stack Work Trial

## Overview

This is a full stack work trial for a company. The goal is to create a full stack application that allows users to add and view users.

## Getting Started

### First Time Setup

```bash
git clone git@github.com:jrmeier/fullstack-work-trial.git
cd ./fullstack-work-trial
```

NOTE: I've included a .env file with "real" fake values for the since its not being deployed, but I wouldn't do it for anything real/important.

### Running the Application

Make sure you're in the root directory of the project.

```base
docker-compose up
```

This will start the application and you should be able to access it at <http://localhost:3000>

## Tasks

- [x] Uses React with 3 pages
- [x] Allows downloading of users from external api
- [x] Displays properities of users on home
- [x] Persist data between pages
- [x] Displays properities of fetched users on fetch
- [x] Allows adding of users to custom api
- [x] Uses postgres to persist users data
- [x] Custom server to handle api requests
- [x] Uses docker and docker-compose to containerize and run the application
- [x] Bonus for styling
- [ ] Uses AWS to deploy the application

## AWS Deployment

Unfortunately a bunch of issues with my AWS cli and account and wasn't able to get it deployed.
I did the steps I think would get the job done, but I have to fix my local aws-cli issues before I can follow through.


Here's how I would have done it.

First, I would build the images locally.

```bash
docker-compose build
```

Next, I would go to AWS and create 3 new Container Registry's in ECS.

Then I would tag the images with the registry

```bash
docker tag backend:latest public.ecr.aws/w0h1a7p3/fullstack_worktrial_backend:latest
docker tag fontend:latest public.ecr.aws/w0h1a7p3/fullstack_worktrial_fontend:latest
docker tag postgres:latest public.ecr.aws/w0h1a7p3/postgres:latest
``````

Next I would push the newly tagged images.
I would probably use AWS Amplify to deploy the frontend and RDS for the database. In the spirit of this trial, I figured I would do it all in ECS.

```bash
docker push public.ecr.aws/w0h1a7p3/backend:latest
docker push public.ecr.aws/w0h1a7p3/frontend:latest
docker push public.ecr.aws/w0h1a7p3/postgres:latest
```

Once the images are pushed, I would create a new task definition in ECS and use the images from the registry.

Then I would create a new service in ECS and use the task definition I just created.

Once thats running, I should have a url to the frontend.
