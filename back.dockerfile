FROM php:8.2-apache

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y git \
    zlib1g-dev \
    libzip-dev

RUN docker-php-ext-install zip

RUN docker-php-ext-install pdo pdo_mysql

COPY ./servidor /var/www/html/servidor

COPY .env /var/www/html/servidor/

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html/servidor

RUN composer update
RUN composer install

CMD [ "apache2-foreground" ]

RUN chown -R www-data:www-data /var/www/html/servidor/storage /var/www/html/servidor/bootstrap/cache
RUN chown -R 775 /var/www/html/servidor/storage
RUN chown -R 775 /var/www/html/servidor/bootstrap/cache

RUN a2dissite 000-default.conf
COPY sitio_laravel.conf /etc/apache2/sites-available
RUN a2ensite sitio_laravel.conf

RUN a2enmod rewrite
EXPOSE 8000