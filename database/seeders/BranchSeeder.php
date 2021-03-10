<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //insert sample data into 'Branches' table
        Branch::create([
            'id'=>1,
            'name' => 'ABC',
            'Sequence'=>3,
        ]);

        Branch::create([
            'id'=>2,
            'name' => 'WAKA',
            'Sequence'=>2,
        ]);

        Branch::create([
            'id'=>3,
            'name' => 'LAMPART',
            'Sequence'=>4,
        ]);
    }
}
