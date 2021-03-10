<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\ProductController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::middleware(['cors'])->group(function(){
//    //get all branch
//
//});
//Route::get('/greeting', function (Request $request) {
//    echo $request->fullUrl();
//});

Route::get('getAllBranches',[BranchController::class,'getAllBranches']);


//search product by the ID of Branch and name of Product
Route::post('searchProduct',[ProductController::class,'searchProduct']);

//search branch by the ID of Branch and name of Product
Route::post('searchBranch',[BranchController::class,'searchBranch']);

Route::group(['prefix'=>'updateSequence'],function ()
{
    //update product sequence
    Route::post('Product',[ProductController::class,'updateSequence']);

    //update branch sequence
    Route::post('Branch',[BranchController::class,'updateSequence']);
});

Route::post('deleteProduct',[ProductController::class,'deleteProduct']);

Route::post('updateProduct',[ProductController::class,'updateProduct']);

Route::post('deleteBranch',[BranchController::class,'deleteBranch']);

Route::post('updateBranch',[BranchController::class,'updateBranch']);
