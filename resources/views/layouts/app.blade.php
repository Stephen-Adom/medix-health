<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ secure_asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet" media="print">
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet" media="all">
</head>
<body>
    <div id="app">
        <v-app>
            <dashboard-app></dashboard-app>
        </v-app>
    </div>

    @auth
        <script>
            window.user = @json(auth()->user());
        </script>   
    @endauth
</body>
</html>
