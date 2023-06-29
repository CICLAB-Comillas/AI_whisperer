# Build: docker build -t frontend .
FROM nginx:latest

# Copy the build output to replace the default nginx contents
COPY dist/ /usr/share/nginx/html
# Copy the Nginx configuration file
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
