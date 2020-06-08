<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Timing;
use App\Patient;

class RescheduledNotification extends Notification
{
    use Queueable;

    public $timing;
    public $patient;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Timing $timing, Patient $patient)
    {
        $this->timing = $timing;
        $this->patient = $patient;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => 'Appointment Rescheduled',
            'data' => $this->patient->title. ' '. $this->patient->firstname,
            'date' => $this->timing->schedule->schedule_date,
            'time' => $this->timing->start_time
        ];
    }
}
