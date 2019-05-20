FROM node:8

WORKDIR /iarl-vue

COPY . /iarl-vue

EXPOSE 8080

RUN \
    sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \    
    apt-get update -y && \    
    apt-get upgrade -y && \
    apt-get install -y apt-transport-https apt-utils ca-certificates \
    software-properties-common curl htop man unzip vim nano wget \ 
    net-tools iputils-ping && \
    apt-get update    

RUN npm install http-server -g 

RUN npm install && npm run build

CMD (http-server ./dist)