FROM node:20.11.1

WORKDIR /app

RUN apt-get update && apt-get install git

COPY ./cliente .

WORKDIR /app/cliente

RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu

RUN npm run build

RUN apt-get install nginx -y

COPY nginx.conf /etc/nginx/nginx.conf

RUN cp -r /app/cliente/dist/* /var/www/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]