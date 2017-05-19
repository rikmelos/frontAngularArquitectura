#!/usr/bin/env sh

docker build -t myproject /home/richard-usr/Desktop/Front/AngularFront
docker run -d -p 8080:80 --name myprojectcontainer myproject
