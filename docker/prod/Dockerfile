# BUILD STAGE

FROM node:10-alpine as build-stage

# Make the 'app' folder the current working directory.
WORKDIR /app

# Copy both 'package.json' and 'package-lock.json' (if available).
COPY package*.json ./

# Install project dependencies.
RUN npm install

# Copy project files and folders to the current working directory (i.e. 'app' folder).
COPY ../.. .

# Build app for production with minification.
RUN npm run build


# PRODUCTION STAGE

FROM nginx:1.13.12-alpine as production-stage

# Copy the built assets so they can be served by nginx.
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
