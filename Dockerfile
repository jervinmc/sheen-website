# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt app
RUN npm run build

# Expose the default Nuxt port
EXPOSE 3000

# Start the Nuxt app
CMD ["npm", "run", "start"]
