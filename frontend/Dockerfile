# Build the react app
FROM node:18 AS build
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npm run build

# Setup environment for the server
FROM node:18
WORKDIR /app

# this is needed to
COPY --from=build /app/node_modules ./node_modules
# Copy the build folder from the build stage
COPY --from=build /app/build ./build
# Copy server.js and other necessary files
COPY ./frontend/server.js .

# Expose port 3000 for the server
EXPOSE 3000

CMD ["node", "server.js"]
