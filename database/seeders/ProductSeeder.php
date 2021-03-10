<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //insert sample data into 'Branches' table
//        Product::create([
//            'Sequence'=>25,
//            'Name' => 'ABC_Product_Test_001',
//            'Branch_id' => 1,
//        ]);
//
//        Product::create([
//            'Sequence'=>12,
//            'Name' => 'ABC_Product_Test_002',
//            'Branch_id' => 1,
//        ]);
//
//        Product::create([
//            'Sequence'=>18,
//            'Name' => 'ABC_Product_Test_010',
//            'Branch_id' => 1,
//        ]);
//
//        Product::create([
//            'Sequence'=>27,
//            'Name' => 'ABC_Product_Test_020',
//            'Branch_id' => 1,
//        ]);
//
//        Product::create([
//            'Sequence'=>14,
//            'Name' => 'ABC_Product_Test_021',
//            'Branch_id' => 1,
//        ]);
//
//        Product::create([
//            'Sequence'=>2,
//            'Name' => 'WAKA_Product_Test_033',
//            'Branch_id' => 2,
//        ]);
//
//        Product::create([
//            'Sequence'=>4,
//            'Name' => 'WAKA_Product_Test_034',
//            'Branch_id' => 2,
//        ]);
//
//        Product::create([
//            'Sequence'=>6,
//            'Name' => 'WAKA_Product_Test_040',
//            'Branch_id' => 2,
//        ]);
//
//        Product::create([
//            'Sequence'=>30,
//            'Name' => 'WAKA_Product_Test_050',
//            'Branch_id' => 2,
//        ]);
//
//        Product::create([
//            'Sequence'=>35,
//            'Name' => 'WAKA_Product_Test_051',
//            'Branch_id' => 2,
//        ]);
//
//        Product::create([
//            'Sequence'=>3,
//            'Name' => 'LAMPART_Product_Test_033',
//            'Branch_id' => 3,
//        ]);
//
//        Product::create([
//            'Sequence'=>5,
//            'Name' => 'LAMPART_Product_Test_034',
//            'Branch_id' => 3,
//        ]);
//
//        Product::create([
//            'Sequence'=>13,
//            'Name' => 'LAMPART_Product_Test_040',
//            'Branch_id' => 3,
//        ]);
//
//        Product::create([
//            'Sequence'=>1,
//            'Name' => 'LAMPART_Product_Test_050',
//            'Branch_id' => 3,
//        ]);
//
//        Product::create([
//            'Sequence'=>37,
//            'Name' => 'LAMPART_Product_Test_051',
//            'Branch_id' => 3,
//        ]);
        $temp = 1;
        for($i = 0;$i<1000;$i++)
        {
            Product::create([
                'Sequence'=>$i+1,
                'Name' => Str::random(20),
                'Branch_id' => $temp,
            ]);
            $temp++;
            if($temp == 4)
            {
                $temp =1;
            }
        }
    }
}
