<?php
namespace App\Services;
use App\Models\Product;

class ProductServices extends BaseServices
{
    private $product;

    /**
     * ProductServices constructor.
     * @param Product $product
     */
    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    /**
     * search products and order by asc
     * @param $dataRequest
     * @return mixed
     */
    public function searchProducts($dataRequest)
    {
        if ($dataRequest['branch_id'])
        {
            $this->product=$this->product->where('Branch_id','=',$dataRequest['branch_id']);
        }
        if ($dataRequest['name'] || $dataRequest['name']=='0')
        {
            $this->product=$this->product->where('Name', 'like','%'.$dataRequest['name'].'%');
        }
        return $this->product->orderBy('Sequence')->get()->load('Branch');
    }
}
