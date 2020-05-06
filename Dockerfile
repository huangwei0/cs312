FROM alpine:latest

# Install the NodeJS runtime
RUN apk -U add nodejs

# Copy the server JS file
COPY server.js /srv/server.js
COPY Dockerfile.NJSweb

# Expose the port 8080 for HTTP
EXPOSE 8080

# Run this command by default
CMD node /srv/server.js
