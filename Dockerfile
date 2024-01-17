# Use an official Node runtime as a parent image
FROM node:20.9.0-alpine

# Set the working directory in the container
WORKDIR /user/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the Next.js app
RUN npm run build

# Your app binds to port 3000 so use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD
CMD ["npm", "start"]