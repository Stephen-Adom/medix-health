<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('isDoctor', function ($user){
            return $user->role_id === 1;
        });

        Gate::define('isNurse', function ($user){
            return $user->role_id === 2;
        });

        Gate::define('isPharmacist', function ($user){
            return $user->role_id === 3;
        });

        Gate::define('isTechnician', function ($user){
            return $user->role_id === 4;
        });

        Gate::define('isManager', function ($user){
            return $user->role_id === 5;
        });
    }
}
