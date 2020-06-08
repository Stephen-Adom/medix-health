<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/auth_login', 'API\AuthController@authLogin');
Route::post('/auth_logout', 'API\AuthController@authLogout');
Route::get('/auth_info', 'API\AuthController@auth');
Route::patch('/update_account/{id}', 'API\AuthController@update_auth');
Route::post('/verify_password', 'API\AuthController@verify_password');
Route::post('/reset_password', 'API\AuthController@reset_password');

//Schedule Controller
Route::post('/add_schedule', 'API\ScheduleController@store');
Route::get('/fetch_schedules', 'API\ScheduleController@fetchSchedules');
Route::get('/fetch_previous_schedules', 'API\ScheduleController@fetchPreviousSchedules');
Route::post('/delete_time', 'API\ScheduleController@delete');
Route::post('/delete_schedule', 'API\ScheduleController@deleteSchedule');
Route::post('/clear_all_previous_schedules', 'API\ScheduleController@deleteAllPreviousSchedules');

Route::get('/all_created_appointments_staff', 'API\AppointmentController@allCreatedAppointment_Staff');
Route::post('/store_appointment', 'API\AppointmentController@store');
Route::post('/book_appointment', 'API\AppointmentController@book');
Route::post('/store_vitals', 'API\VitalsController@store');
Route::get('/all_appointment', 'API\AppointmentController@allAppointment');
Route::get('/completed_appointment', 'API\AppointmentController@completedAppointment');
Route::get('/current_appointment', 'API\AppointmentController@currentAppointment');
Route::get('/limited_appointment', 'API\AppointmentController@limitedAppointment');
Route::get('/medic_appointment', 'API\AppointmentController@medicAppointment');
Route::get('/accepted_appointment', 'API\AppointmentController@acceptedAppointment');
Route::post('/clear_all', 'API\AppointmentController@clearAll');

Route::get('/today_appointment', 'API\AppointmentController@today_appointment');
Route::get('/upcoming_appointment', 'API\AppointmentController@upcoming_appointment');
Route::get('/canceled_appointment', 'API\AppointmentController@canceled_appointment');
Route::get('/completed_appointment', 'API\AppointmentController@completed_appointment');

Route::post("/new_assessment", 'API\AssessmentController@store');
Route::post('/authorize', 'API\ExcuseDutyController@authorize_user');
Route::post('/submit_referral', 'API\ReferralController@store');
Route::get('/get_referrals', 'API\ReferralController@index');
Route::get('/unread_notifications', 'API\NotificationController@unread_notifications');
Route::post('/mark_as_read', 'API\NotificationController@mark_as_read');
Route::post('/mark_all_read', 'API\NotificationController@mark_all_read');
Route::get('/fetch_all_notifications', 'API\NotificationController@all_notifications');
Route::post('/delete_all_messages', 'API\NotificationController@delete_notifications');
Route::get('/my_schedules', 'API\StaffScheduleController@my_schedules');

//Lab Test Controllers
Route::post('/store_blood_cbc', 'API\TestController@store_cbc');
Route::post('/store_blood_metabolic', 'API\TestController@store_metabolic');
Route::post('/save_blood_lipoprotein', 'API\TestController@store_lipoprotein');
Route::post('/save_blood_enzymes', 'API\TestController@store_enzymes');
Route::post('/save_blood_thyroid', 'API\TestController@store_thyroid');
Route::post('/save_blood_coagulation', 'API\TestController@store_coagulation');
Route::post('/save_blood_disease', 'API\TestController@store_disease');
Route::post('/save_blood_dea', 'API\TestController@store_serum');
Route::post('/save_blood_protein', 'API\TestController@store_protein');

Route::post('/store_urine_chemical', 'API\UrineController@store_chemical');
Route::post('/store_urine_microscopic', 'API\UrineController@store_microscopic');
Route::post('/store_faecal', 'API\FaecalController@store_faecal');
Route::post('/store_saliva_steroid', 'API\SalivaController@store_saliva_steroid');
Route::post('/store_saliva_genetic', 'API\SalivaController@store_saliva_genetic');
Route::post('/store_saliva_infection', 'API\SalivaController@store_saliva_infection');

Route::post('/upload_profile', 'API\UploadImageController@save_image');
Route::delete('/delete_profile/{id}', 'API\UploadImageController@delete_image');


Route::get('/{any}', 'HomeController@index')->where('any','.*');

