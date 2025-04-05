# Step 1: Build the Nuxt.js app
FROM node:20.18.1 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nuxt.js app
RUN npm run build

# Step 2: Set up the Nginx image to serve the Nuxt.js app
FROM nginx:alpine

# Copy the custom Nginx configuration file
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built Nuxt.js app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports for HTTP and HTTPS
EXPOSE 80 443

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]