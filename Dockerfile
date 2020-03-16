FROM php:7.2-fpm

# install Lib for composer
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    libpq-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl
# Clear cache
RUN apt-get clean && rm -rf /var/cache/apt

RUN docker-php-ext-install mbstring pdo pdo_pgsql

# php.conf php-fpm.conf
#COPY docker/php/php.ini /usr/local/etc/php/php.ini
#COPY docker/php/docker.conf /usr/local/etc/php-fpm.d/docker.conf

# Set working directory
WORKDIR /var/www/app

# Install Node.js
RUN apt-get install gcc g++ make
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y nodejs

# install Composer
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    chmod +x /usr/local/bin/composer

COPY . /var/www/app

RUN /usr/local/bin/composer install -d /var/www/app

# change owner
RUN chown www-data:www-data -R ./

RUN php artisan key:generate
RUN npm install && npm run build