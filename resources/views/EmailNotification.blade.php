@component('mail::message')
<div style="display: flex; justify-content: center;">
    <img src="http://localhost:8000/app_asset/medix_full.png" style="margin: 0 auto; width: 30%;"/>
</div>
<div style="display: flex; justify-content: center; margin: 0 auto;">
    <strong style="margin: 0 auto; text-decoration: underline;">Welcome to Medix Health Application</strong>
</div>

<p>Hello, {{$title}} {{$firstname}}</p>
<div style="text-align: justify;">
    <p>An Account has been created for you under Medix Health Application</p>
    <p>Your Username is <strong>{{$username}}</strong></p>
    <p>Your default password is  <strong>"password"</strong></p>
</div>

Click the button below to login to the application
@component('mail::button', ['url' => 'http://localhost:8000/login'])
Medix Login
@endcomponent

Thank you,<br>
{{ config('app.name') }}
@endcomponent
