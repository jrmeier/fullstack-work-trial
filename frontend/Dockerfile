FROM node:18 AS build
WORKDIR /app
COPY ./frontend .
RUN npm install
RUN npm run build
# Serve the app using Nginx
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*
# Copy the build folder from the build stage and set it as the nginx static folder
COPY --from=build /app/build /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html && chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80 for the nginx server
EXPOSE 3000

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]