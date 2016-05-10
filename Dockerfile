FROM nginx:latest
RUN mkdir /code
WORKDIR /code

RUN apt-get update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash

RUN apt-get update && apt-get install -y \ 
    nodejs \
    && rm -rf /var/lib/apt/lists/*
    
COPY package.json /code
RUN npm install
RUN npm install -g webpack
COPY . /code
RUN webpack
COPY ./src/index.html /usr/share/nginx/html
RUN cp -r /code/dist/. /usr/share/nginx/html/
EXPOSE 80:80