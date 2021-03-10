<?php

namespace App\Models;

use DateTimeInterface;

class Branch extends BaseModel
{
    protected $table = 'branches';

    /**
     * get the products for the branch
     */
    public function products()
    {
        return $this->hasMany(Product::class,'Branch_id','id');
    }

    protected function serializeDate(DateTimeInterface  $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function deleteBranch()
    {
        foreach ($this->products as $product)
        {
            $product->restoreDefaultBranch();
        }

        try {
            $this->delete();
        } catch (\Exception $e) {
            return 0;
        }
    }
}
