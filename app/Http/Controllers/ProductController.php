<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\ProductServices;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $productServices;

    /**
     * ProductController constructor.
     * @param ProductServices $productServices
     */
    public function __construct(ProductServices $productServices)
    {
        $this->productServices=$productServices;
    }

    /**
     * search products
     * @param Request $request
     * @return product colection
     */
    /**
     * @api {post} /searchProduct/ Get Products with Name and Branch
     * @apiName GetProduct
     * @apiGroup Products
     * @apiParam {string} name Name of Product
     * @apiParam {id} branch_id Branch ID
     *
     * @apiSuccess {Number} id Id of the Product.
     * @apiSuccess {String} name  Name of the Product.
     * @apiSuccess {Datetime} created_at  Time of created Product.
     * @apiSuccess {Datetime} updated_at  Time of updated Product.
     * @apiSuccess {Datetime} deleted_at  Time of deleted Product.
     * @apiSuccess {Number} sequence  Sequence of Product.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [
     *       {
     *       "id": 3,
     *       "Sequence": 18,
     *       "Name": "ABC_Product_Test_010",
     *       "Branch_id": "1",
     *       "created_at": "2021-02-17 07:23:14",
     *       "updated_at": "2021-02-17 07:23:14",
     *       "deleted_at": null,
     *       "branch": {
     *       "id": 1,
     *       "name": "ABC",
     *       "created_at": "2021-02-17 07:23:14",
     *       "updated_at": "2021-02-17 07:27:26",
     *       "deleted_at": null,
     *       "Sequence": 3}
     *        }
     *     ]
     *
     * @apiError null Not found Branch with name
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "Product Not Found!"
     *     }
     *
     */
    public function searchProduct(Request $request)
    {
        $dataRequest=   [
            'name'=>$request->name,
            'branch_id'=>$request->branch_id,
        ];
        return $this->productServices->searchProducts($dataRequest);
    }

    /**
     * update product's sequence
     * @param Request $request
     * @return array|string[]
     */

    /**
     * @api {post} /updateSequence/Product Update Sequence Products
     * @apiName UpdateSequenceProducts
     * @apiGroup Products
     * @apiParam {Object[]} objectSequenceChange Object have change sequence
     * @apiParamExample {Object[]} Request-Example:
     *      [{"id":1,"Sequence":4},
     *      {"id":2,"Sequence":5}]
     *
     * @apiSuccess {string} updatesuccessfully Update Successfully.

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      {
     *       "message": "update successfully"
     *      }
     *
     * @apiError 23505 Sequence value already exists
     * @apiError 22P02 Invalid data
     * @apiError Default Update failure
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "Sequence value already exists",
     *       "id": 2
     *     }
     *
     */
    public function updateSequence(Request $request)
    {
        $dataRequest=json_decode($request->getContent(), true);

        return (new Product())->update_sequence($dataRequest);
    }

    /**
     * @api {post} /deleteProduct/ Delete Product
     * @apiName Delete Product
     * @apiGroup Products
     * @apiParam {number} id Id of product that you want to delete
     *
     * @apiSuccess {string} updatesuccessfully Update Successfully.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      {
     *       "message": 'deleted'
     *      }
     *
     * @apiError failedtodelete failed to delete
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "message": "failed to delete"
     *     }
     *
     */
    public function deleteProduct(Request $request)
    {
        $validated=$request->validate([
            'id'=>'required|numeric'
        ]);

        $product = Product::find($validated['id']);

        if (!$product)
        {
            return ['message'=>'product was not exists'];
        }

         if(!$product->delete()){
             return ['message'=>'failed to delete'];
         }

         return ['message'=>'deleted'];
    }

    /**
     * @api {post} /updateProduct/ Update Product
     * @apiName Update Product
     * @apiGroup Products
     * @apiParam {number} id Id of product that you want to update
     * @apiParam {string} name Name of product that you want to update
     * @apiParam {number} branch_id Branch id of product that you want to update
     *
     * @apiSuccess {string} updatesuccessfully Update Successfully.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "message": "update successfully"
     *     }
     *
     * @apiError failedtodelete failed to delete
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *    {
     *   "message": "branch was not exists"
     *   }
     *
     */
    public function updateProduct(Request $request)
    {
        $validated=$request->validate([
            'id'=>'required|numeric',
            'branch_id'=>'required|numeric'
        ]);

        $product = Product::find($validated['id']);

        if (!$product)
        {
            return ['message'=>'product was not exists'];
        }

        $product->Name=$request->name;
        $product->Branch_id=$validated['branch_id'];

        if (!$product->save())
        {
            return ['message'=>'failed to update'];
        }

        return ['message'=>'update successfully'];
    }

}
