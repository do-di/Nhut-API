<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class BaseModel extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * can update sequence
     * @param $dataList
     * @return array|string[]
     */
    public function update_sequence($dataList)
    {
        DB::beginTransaction();
        try {
            foreach ($dataList as $data)
            {
                $object =$this->find($data['id']);
                $object->Sequence=$data['Sequence'];
                $object->save();
            }
        }catch (\Exception $exception) {
            DB::rollBack();
            switch ($exception->getCode())  {
                case "23505":
                    $messageReturn = 'Sequence value already exists';
                    break;
                case "22P02":
                    $messageReturn = 'Invalid data';
                    break;
                default:
                    $messageReturn = 'Update failure';
                    break;
            }
            return [
                'message' => $messageReturn,
                'id'      => $data['id']
            ];
        }

        DB::commit();
        return ['message'=>'update successfully'];
    }
}
