# Use official Node.js image for building the React app
FROM node:18 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Serve the app using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf
