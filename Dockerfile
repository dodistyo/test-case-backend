# lightweight Node.js base image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose any ports your app uses
EXPOSE 8000

# Command to run the application
CMD ["node", "index.js"]