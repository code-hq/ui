FROM node:10-alpine

# Check that a user ID was specified.
# This ID will be assigned to a new user (created below) and should be the same
# as your own user ID on the host machine (run "id -u" to find the correct value).
# This ensures that file permissions are the same on the host and in the container.
ARG UID
RUN if [ -z "$UID" ]; then echo "Build argument 'UID' was not set" 1>&2 && exit 1; fi

# Create a user account manually rather than using:
# adduser -D -u $UID -h /home/dev dev
# This is necessary to support $UIDs > 256000 on alpine/busybox.
RUN echo "dev:x:$UID:$UID::/home/dev:" >> /etc/passwd \
    && echo "dev:!:$(($(date +%s) / 60 / 60 / 24)):0:99999:7:::" >> /etc/shadow \
    && echo "dev:x:$UID:" >> /etc/group \
    && mkdir /home/dev && chown dev: /home/dev

# Make the 'app' folder the current working directory.
WORKDIR /app

# Install the Vue CLI tool.
RUN npm install -g @vue/cli

USER dev

# Run the development server.
CMD sh -c "npm install && npm run serve"
