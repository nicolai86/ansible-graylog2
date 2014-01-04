# graylog2-server REST URIs (one or more, comma separated) For example: "http://127.0.0.1:12900/,http://127.0.0.1:12910/"
graylog2-server.uris="http://127.0.0.1:12900/"

# Secret key
# ~~~~~
# The secret key is used to secure cryptographics functions. Set this to a long and randomly generated string.
# If you deploy your application to several instances be sure to use the same key!
# Generate for example with: pwgen -s 96
application.secret="{{ graylog2_secret }}"

# Web interface timezone
# Graylog2 stores all timestamps in UTC. To properly display times, set the default timezone of the interface.
# If you leave this out, Graylog2 will pick your system default as the timezone. Usually you will want to configure it explicitly.
timezone="Europe/Berlin"