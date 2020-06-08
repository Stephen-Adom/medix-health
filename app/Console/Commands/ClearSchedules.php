<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Auth;
use Carbon\Carbon;
use App\Schedule;

class ClearSchedules extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:clearSchedules';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Erase past schedules created by the Auth User';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $schedules = Schedule::whereDay('schedule_date', '<', Carbon::now()->day)->get();
        foreach($schedules as $data){
            foreach($data->timings as $time){
                $time->delete();
            }
            $data->delete();
        }
        echo 'deletion complete';
    }
}
