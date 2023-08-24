# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY backend/package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY backend/ .

# run the startup script

# Expose port 3000 (commonly used for Express apps) to the outside
EXPOSE 3001

# Command to run the application
CMD [ "npm", "run", "start" ]
