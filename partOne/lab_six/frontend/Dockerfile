# Step 1: Use the official Node.js image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to serve the React app
FROM nginx:alpine

# Set the environment variable for the port
ENV PORT=4000

# Copy the build folder to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the dynamic port from the environment variable
EXPOSE $PORT

# Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]
