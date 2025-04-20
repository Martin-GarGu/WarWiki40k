# Usa la imagen de Node.js especificada
FROM node:20.11.1

# Establece el directorio de trabajo
WORKDIR /app

# Actualiza el índice de paquetes y instala git
RUN apt-get update && apt-get install -y git

# Copia los archivos de la aplicación cliente al directorio de trabajo
COPY ./cliente /app/cliente

# Cambia al directorio de la aplicación cliente
WORKDIR /app/cliente

# Instala las dependencias de npm
RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu

# Genera la aplicación con el comando de construcción
RUN npm run build

# Verifica si la carpeta dist fue creada
RUN ls -l /app/cliente/dist || echo "La carpeta dist no existe"

# Instala nginx
RUN apt-get update && apt-get install -y nginx

# Copia la configuración de nginx desde el contexto de construcción al contenedor
COPY nginx.conf /etc/nginx/nginx.conf

# Crea el directorio de destino para nginx si no existe
RUN mkdir -p /var/www/html

# Copia los archivos de distribución de la aplicación cliente al directorio HTML de nginx
RUN cp -r /app/cliente/dist/* /var/www/html/

# Expone el puerto 80 para el servidor web
EXPOSE 80

# Inicia nginx en el contenedor
CMD ["nginx", "-g", "daemon off;"]
