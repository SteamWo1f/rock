FROM fedora:40
RUN echo "Getting fedora:40 from hub.docker.com"

RUN dnf -y update && dnf install -y nodejs npm python3 pip
RUN echo "Installed nodejs, npm & python"
RUN mkdir /rock-app
RUN mkdir /rock-app/uploads
RUN chmod 774 /rock-app/uploads
RUN echo "Created /rock-app and uploads"
COPY . /rock-app
RUN echo "Copied rock from . to /rock-app"

WORKDIR /rock-app
RUN echo "Set WORKDIR to /rock-app"

RUN pip install flask
RUN npm install express
RUN npm install cors
RUN echo "Installed npm express & npm cors"

EXPOSE 80
RUN echo "Port 80 exposed"

CMD ["node", "/rock-app/server.js"]
RUN echo "Started rock, enjoy!"