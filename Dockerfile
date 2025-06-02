# Use an official Node image to build the app
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use an Nginx image to serve the build
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Optional: remove default nginx config and use your own if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]