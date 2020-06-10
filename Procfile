web: vendor/bin/heroku-php-apache2 public/
database: php artisan queue:work --queue=emails --timeout=1800 && php artisan queue:work --queue=emails