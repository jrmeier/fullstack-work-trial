FROM node:18

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

# Copy the rest of the application code into the container
COPY backend/ .


EXPOSE 3001

# set the environment variables
ENV DB_HOST='postgres'
ENV API_PORT=3001

# Command to run the application
CMD [ "npm", "run", "start" ]
