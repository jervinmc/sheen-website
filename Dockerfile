# Use Node.js 20 image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build Nuxt.js for production
RUN npm run build

# Expose the port
EXPOSE 3000

# Start Nuxt.js in production mode
CMD ["npm", "run", "start"]
