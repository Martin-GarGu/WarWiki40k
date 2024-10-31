FROM php:8.2-apache

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Instalar las dependencias necesarias
RUN apt-get update && apt-get install -y git \
    zlib1g-dev \
    libzip-dev

# Instalar las extensiones de PHP necesarias
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql

# Crear un archivo de credenciales de Git
RUN echo "https://M2gargu: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@github.com" > ~/.git-credentials

# Configurar Git para usar el archivo de credenciales
RUN git config --global credential.helper store

# Clonar el repositorio en un directorio temporal
RUN git clone --no-checkout https://github.com/DAW2A-PDAW-24-25/WarWiki40k-MartinGarcia.git /app/temp_repo

# Configurar sparse checkout
RUN git -C /app/temp_repo config core.sparseCheckout true

# Especificar la carpeta que queremos clonar
RUN echo "servidor/" > /app/temp_repo/.git/info/sparse-checkout

# Hacer checkout del commit específico
RUN git -C /app/temp_repo checkout e06b9d8ff3ddde7076d7d6e0e40d2742378deceb

# Mover la carpeta 'servidor' al directorio de trabajo
RUN mv /app/temp_repo/servidor /var/www/html/servidor

# Limpiar el directorio temporal
RUN rm -rf /app/temp_repo

# Copiar el archivo .env al directorio correcto
COPY .env /var/www/html/servidor/.env

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Cambiar al directorio del servidor
WORKDIR /var/www/html/servidor

# Inicializar un nuevo repositorio y configurar el remoto
RUN git init
RUN git remote add origin https://github.com/DAW2A-PDAW-24-25/WarWiki40k-MartinGarcia.git
RUN git fetch origin # Obtener los datos del remoto
RUN git branch --set-upstream-to=origin/master master

# Instalar las dependencias de Composer
RUN composer install

# Comando para iniciar Apache
CMD ["apache2-foreground"]

# Configurar permisos
RUN chown -R www-data:www-data /var/www/html/servidor/storage /var/www/html/servidor/bootstrap/cache
RUN chmod -R 775 /var/www/html/servidor/storage
RUN chmod -R 775 /var/www/html/servidor/bootstrap/cache

# Configuración de Apache
RUN a2dissite 000-default.conf
COPY servidor.conf /etc/apache2/sites-available
RUN a2ensite servidor.conf
RUN a2enmod rewrite

# Exponer el puerto 80
EXPOSE 80
