# Use an official Node runtime as a parent image
FROM node:14-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the client's source code
COPY . .

# Build for production.
RUN npm run build

# Start server
CMD ["npm", "start"]
