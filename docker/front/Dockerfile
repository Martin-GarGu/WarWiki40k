FROM node:20.11.1

# Establecer el directorio de trabajo temporal para clonar
WORKDIR /app/temp

# Instalar git
RUN apt-get update && apt-get install -y git

# Configurar Git para almacenar credenciales
RUN git config --global credential.helper store
RUN echo "https://M2gargu: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@github.com" > ~/.git-credentials

# Inicializar el repositorio en el directorio temporal y configurar sparse checkout
RUN git init
RUN git remote add origin https://github.com/DAW2A-PDAW-24-25/WarWiki40k-MartinGarcia.git
RUN git config core.sparseCheckout true
RUN echo "cliente/" > .git/info/sparse-checkout

# Cambiar a la rama correcta (puede ser 'master' o cualquier otro nombre)
RUN git pull origin master 

# Hacer checkout del commit específico
RUN git checkout e06b9d8ff3ddde7076d7d6e0e40d2742378deceb

# Mover la carpeta 'cliente' al directorio final
RUN mv cliente /app/cliente

# Cambiar el directorio de trabajo al directorio final y reinicializar Git
WORKDIR /app/cliente
RUN rm -rf /app/temp 

# Inicializar un nuevo repositorio para permitir futuros pulls
RUN git init
RUN git remote add origin https://github.com/DAW2A-PDAW-24-25/WarWiki40k-MartinGarcia.git

# Instalar dependencias de npm en /app/cliente
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
