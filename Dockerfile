FROM node:latest 

WORKDIR /nube2

COPY . . 

RUN npm install  

CMD  ["node" , "app.js"] 

