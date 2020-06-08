web: vendor/bin/heroku-php-apache2 public/
web: vendor/bin/heroku-php-apache2 public/storage/
worker: php artisan queue:restart && php artisan queue:work database --tries=3