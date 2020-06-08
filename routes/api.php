<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create_role', 'API\RoleController@store');
Route::get('/get_roles', 'API\RoleController@index');
Route::post('/edit_role', 'API\RoleController@editRole');
Route::delete('/delete_role/{id}', 'API\RoleController@delete');

//Staff Controller
Route::get('/get_staff', 'API\StaffController@index');
Route::get('/get_staff_doctors', 'API\StaffController@doctors');
Route::get('/get_staff_nurses', 'API\StaffController@nurses');
Route::get('/get_staff_pharmacists', 'API\StaffController@pharmacists');
Route::get('/get_staff_techs', 'API\StaffController@lab_techs');
Route::get('/get_staff_managers', 'API\StaffController@managers');
Route::get('/get_active', 'API\StaffController@activeStaff');
Route::post('/store_staff', 'API\StaffController@store');
Route::patch('/updateRole/{id}', 'API\StaffController@updateRole');
Route::delete('/delete_staff/{id}', 'API\StaffController@delete');
Route::post('/deactivate', 'API\StaffController@deactivate');
Route::post('/activate', 'API\StaffController@activate');

//Drug Controller
Route::get('/drug_analysis', 'API\DrugController@drug_analysis');
Route::post('/store_drugs', 'API\DrugController@store');
Route::get('/get_drugs', 'API\DrugController@index');
Route::patch('/update_drug/{id}', 'API\DrugController@update');
Route::delete('/delete_drug/{id}', 'API\DrugController@delete');

//Creating Appointment Controller
Route::post('/doctor_schedule', 'API\StaffScheduleController@doctorSchedule');
Route::post('/fetch_specialist_schedules', 'API\StaffScheduleController@fetch_specialist_schedules');
Route::get('/lab_doctors', 'API\StaffScheduleController@lab_doctors');
Route::get('/doctors', 'API\StaffScheduleController@doctors');
Route::get('/lab_schedule', 'API\StaffScheduleController@labSchedule');
Route::post('/doctor_time', 'API\StaffScheduleController@doctorTime');
Route::get('/all_patients', 'API\PatientController@index');
Route::get('/all_male_patients', 'API\PatientController@male_index');
Route::get('/all_female_patients', 'API\PatientController@female_index');
Route::get('/patient_category', 'API\PatientController@patient_category');
Route::post('/new_patient', 'API\PatientController@newPatient');
Route::patch('/update_patient/{id}', 'API\PatientController@update_patient');
Route::post('/patient_appointment', 'API\PatientController@appointmentHistory');
Route::get('/patient_vitals', 'API\PatientController@patient_vitals');
Route::post('/patient_vitals', 'API\PatientController@vitalHistory');
Route::delete('/remove_patient_account/{id}', 'API\PatientController@delete_account');
Route::post('/vitals_date_range', 'API\PatientController@date_range_vitals');
Route::post('/query_patient_vital', 'API\PatientController@query_patient_vital');

Route::patch('/cancel_appointment/{id}', 'API\AppointmentController@cancel_appointment');
Route::patch('/accept_appointment/{id}', 'API\AppointmentController@updateStatus');
Route::patch('/complete_appointment/{id}', 'API\AppointmentController@completed');
Route::delete('/delete_appointment/{id}', 'API\AppointmentController@deleted');
Route::patch('/reschedule_appointment/{id}', 'API\AppointmentController@reschedule');
Route::patch('/manage_reschedule_appointment/{id}', 'API\AppointmentController@manage_reschedule');

Route::get('/all_limited_created_appointments', 'API\AppointmentController@allLimitedCreatedAppointment');
Route::get('/all_created_appointments', 'API\AppointmentController@allCreatedAppointment');
Route::get('/all_appointments_analysis', 'API\AppointmentController@allAppointmentAnalysis');
Route::post('/patient_medical_history', 'API\AssessmentController@patientHistory');
Route::get('/all_medical_history', 'API\AssessmentController@allMedicHistory');
Route::post('/first_aid_report', 'API\FirstAidController@store');
Route::post('/patient_first_aids', 'API\FirstAidController@aidReport');
Route::get('/fetch_first_aids', 'API\FirstAidController@index');
Route::post('/post_medic_appointment', 'API\AssessmentController@bookLabTest');
Route::get('/fetch_dispensary_data', 'API\PrescriptionController@index');
Route::post('/excuse_duty', 'API\ExcuseDutyController@store');
Route::get('/get_excuses', 'API\ExcuseDutyController@index');
Route::get('/previous_excuses', 'API\ExcuseDutyController@history');
Route::patch('/update_prescription/{id}', 'API\PrescriptionController@update');

Route::get('/patients_medical_history', 'API\PatientController@patients_medical_history');

Route::post('/delete_excuseduty_application', 'API\ExcuseDutyController@delete_application');
Route::post('/delete_referral', 'API\ReferralController@delete_application');
Route::post('/undo_referral', 'API\ReferralController@undo_application');
Route::get('/all_doctors', 'API\SpecialityController@all_doctors');
Route::get('/all_labs', 'API\SpecialityController@all_labs');

Route::post('/delete_aid', 'API\FirstAidController@delete');

Route::post('/medic_vital', 'API\VitalsController@getPatientVitals');
Route::post('/latest_medical', 'API\MedicalController@latest_medical');
Route::get('/fetch_cbc', 'API\LabResultController@cbc_result');
Route::get('/fetch_metabolics', 'API\LabResultController@metabolic_result');
Route::get('/fetch_lipoprotein', 'API\LabResultController@lipoprotein_result');
Route::get('/fetch_enzymes', 'API\LabResultController@enzymes_result');
Route::get('/fetch_thyroid', 'API\LabResultController@thyroid_result');
Route::get('/fetch_coagulation', 'API\LabResultController@coagulation_result');
Route::get('/fetch_disease', 'API\LabResultController@disease_result');
Route::get('/fetch_serum', 'API\LabResultController@serum_result');
Route::get('/fetch_reactive', 'API\LabResultController@reactive_result');
Route::get('/fetch_urine_chemical', 'API\LabResultController@urine_chemical_result');
Route::get('/fetch_urine_microscopic', 'API\LabResultController@urine_microscopic_result');
Route::get('/fetch_infections', 'API\LabResultController@infection_result');
Route::get('/fetch_steroid_hormone', 'API\LabResultController@steroid_hormone_result');
Route::get('/fetch_saliva_genetics', 'API\LabResultController@saliva_genetic_result');
Route::get('/fetch_saliva_infections', 'API\LabResultController@saliva_infections_result');

//Appointment Management for Other Staff
Route::get('/all_today_appointment', 'API\AppointmentController@all_today_appointment');
Route::get('/all_upcoming_appointment', 'API\AppointmentController@all_upcoming_appointment');
Route::get('/all_canceled_appointment', 'API\AppointmentController@all_canceled_appointment');
Route::get('/all_completed_appointment', 'API\AppointmentController@all_completed_appointment');

Route::patch('/upload_patient_profile/{id}', 'API\UploadImageController@save_patient_image');
Route::delete('/delete_patient_profile/{id}', 'API\UploadImageController@delete_patient_image');


