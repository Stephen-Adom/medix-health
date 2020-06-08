<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //uncomment this when on a live server with https enabled
        if(config(‘app.env’) === ‘production’) {
            \URL::forceScheme(‘https’);
        }
    }
}
