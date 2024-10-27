FROM node:20.11.1

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar git
RUN apt-get update && apt-get install -y git

# Crear un archivo de credenciales de Git (Asegúrate de usar un token válido aquí)
RUN echo "https://M2gargu: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@github.com" > ~/.git-credentials

# Configurar Git para usar el archivo de credenciales
RUN git config --global credential.helper store

# Clonar el repositorio especificando la ruta correcta
RUN git clone --no-checkout https://github.com/DAW2A-PDAW-24-25/WarWiki40k-MartinGarcia.git temp_repo

# Establecer sparse checkout
RUN cd temp_repo && git config core.sparseCheckout true

# Especificar la carpeta que queremos clonar
RUN echo "cliente/" >> temp_repo/.git/info/sparse-checkout

# Hacer checkout del commit específico
RUN cd temp_repo && git checkout e06b9d8ff3ddde7076d7d6e0e40d2742378deceb

# Mover la carpeta 'cliente' al directorio de trabajo
RUN mv temp_repo/cliente /app/cliente

# Limpiar el directorio temporal
RUN rm -rf temp_repo

# Cambiar al directorio del cliente
WORKDIR /app/cliente

# Instalar dependencias de npm
RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu

# Ejecutar el build
RUN npm run build

# Instalar Nginx
RUN apt-get install -y nginx

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos construidos a la ubicación de Nginx
RUN cp -r /app/cliente/dist/* /var/www/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
