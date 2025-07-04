FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
CMD ["npm", "build"]


# # Base image
# FROM node:20-alpine

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Expose the port Next.js runs on
# EXPOSE 3000

# # Start the application
# CMD ["npm", "start"]
