<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;


if(!function_exists('update_sequence'))
{
    /**
     * can update sequence
     * @param $dataList
     * @param Model $model
     * @return array|string[]
     */
    function update_sequence($dataList,Model $model)
    {
        DB::beginTransaction();
        try {
            foreach ($dataList as $data)
            {
                $object =$model->find($data['id']);
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
