# Step 1: Build the Nuxt.js application
FROM node:16 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build

# Step 2: Serve the application with NGINX
FROM nginx:alpine

# Copy the built files from the build stage to NGINX's html directory
COPY --from=build /app/.nuxt /usr/share/nginx/html/.nuxt
COPY --from=build /app/static /usr/share/nginx/html/static
COPY --from=build /app/dist /usr/share/nginx/html

# Copy NGINX config file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
