# Dockerfile for package.json

# Use the official Node.js image as the base image
FROM node:16 AS build-stage

# Set the working directory inside the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Use the official Expo CLI image to start the application
FROM expo/expo-cli:latest

# Set the working directory inside the Docker container
WORKDIR /app

# Copy the application code and dependencies from the build stage
COPY --from=build-stage /app .

# Expose the port that the application will run on
EXPOSE 19000 19001 19002 19006

# Start the Expo development server
CMD ["expo", "start"]