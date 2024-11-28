# Use a lightweight Node.js image
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm install

# Copy the application source code
COPY . .

# Build the application
RUN npm run build

# Use a smaller base image for the production stage
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy built files
COPY --from=build /usr/src/app/build ./build
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Expose the desired port
EXPOSE 3000

# Run as a non-root user
USER node

# Start the application
CMD ["node", "build/bin/server.js"]
