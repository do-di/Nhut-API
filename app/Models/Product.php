<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class Product extends BaseModel
{
	protected $table = 'products';

    /**
     * get the branch that owns the product
     */
    public function Branch()
    {
        return $this->belongsTo(Branch::class,'Branch_id');
    }

    /**
     * custom date format
     * @param DateTimeInterface $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface  $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function restoreDefaultBranch()
    {
        $this->Branch_id= 1;
        $this->save();
    }

}
