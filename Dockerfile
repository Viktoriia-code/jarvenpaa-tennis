FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

# Use an Nginx image to serve the build
FROM nginx:alpine

# Create the subdirectory expected by nginx
RUN mkdir -p /usr/share/nginx/html/tennis-2023

# Vite outputs to /app/dist, not /app/build
COPY --from=build /app/dist /usr/share/nginx/html/tennis-2023

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
