# Build the react app
FROM node:18 AS build
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npm run build

# Setup environment for the server
FROM node:18
WORKDIR /app

# this is needed to run the express server
COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/build ./build

COPY ./frontend/server.js .

# Set the environment variables
ENV API_ENDPOINT='http://backend:3001'
ENV PORT=3000

# Expose port 3000 for the server
EXPOSE 3000

CMD ["node", "server.js"]
