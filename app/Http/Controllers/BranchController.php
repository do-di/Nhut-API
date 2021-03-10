<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Product;
use App\Services\BranchServices;
use Illuminate\Http\Request;


class BranchController extends Controller
{

    private $branchService;

    /**
     * BranchController constructor.
     * @param $branchService
     */
    public function __construct(BranchServices $branchService)
    {
        $this->branchService = $branchService;
    }


    /**
     *  get all branches
     * @return Branch[]|\Illuminate\Database\Eloquent\Collection
     */

    /**
     * @api {get} /getAllBranches/ Get All Branches
     * @apiName GetAllBranches
     * @apiGroup Branches
     *
     *
     * @apiSuccess {Number} id Id of the Branch.
     * @apiSuccess {String} name  Name of the Branch.
     * @apiSuccess {Datetime} created_at  Time of created Branch.
     * @apiSuccess {Datetime} updated_at  Time of updated Branch.
     * @apiSuccess {Datetime} deleted_at  Time of deleted Branch.
     * @apiSuccess {Number} sequence  Sequence of Branch.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *    [{"id":1,"name":"ABC",
     *      "created_at":"2021-02-09 03:46:51",
     *      "updated_at":"2021-02-09 03:46:51",
     *      "deleted_at":null,
     *      "Sequence":3},...]
     *
     * @apiError Not Found Branches
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "Branch Not Found!"
     *     }
     *
     *
     */
    public function getAllBranches()
    {
        return Branch::all();
    }

    /**
     * search branch
     * @param Request $request
     * @return Branch colection
     */

    /**
     * @api {post} /searchBranch/ Get Branches with Name
     * @apiName GetBranches
     * @apiGroup Branches
     * @apiParam {String} name Name of Branch
     *
     * @apiSuccess {Number} id Id of the Branch.
     * @apiSuccess {String} name  Name of the Branch.
     * @apiSuccess {Datetime} created_at  Time of created Branch.
     * @apiSuccess {Datetime} updated_at  Time of updated Branch.
     * @apiSuccess {Datetime} deleted_at  Time of deleted Branch.
     * @apiSuccess {Number} sequence  Sequence of Branch.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *      [{"id":1,"name":"ABC",
     *      "created_at":"2021-02-09 03:46:51",
     *      "updated_at":"2021-02-09 03:46:51",
     *      "deleted_at":null,
     *      "Sequence":3},...]
     *
     * @apiError null Not found Branch with name
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "Branch Not Found!"
     *     }
     *
     */
    public function searchBranch(Request $request)
    {
        $dataRequest=   [
            'name'=>$request->name,
        ];
        return $this->branchService->searchBranches($dataRequest);
    }

    /**
     * update branch's sequence
     * @param Request $request
     * @return array|string[]
     */

    /**
     * @api {post} /updateSequence/Branch Update Sequence Branches
     * @apiName UpdateSequenceBranch
     * @apiGroup Branches
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

        return (new Branch())->update_sequence($dataRequest);
    }

    /**
     * @api {post} /deleteBranch/ Delete Branch
     * @apiName Delete Branch
     * @apiGroup Branches
     * @apiParam {number} id Id of branch that you want to delete
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
    public function deleteBranch(Request $request)
    {
        $validated=$request->validate([
            'id'=>'required|numeric'
        ]);

        return $this->branchService->deleteBranch($validated['id']);
    }

    /**
     * @api {post} /updateBranch/ Update Branch
     * @apiName Update Branch
     * @apiGroup Branches
     * @apiParam {number} id Id of branch that you want to update
     * @apiParam {string} name Name of branch that you want to update
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
    public function updateBranch(Request $request)
    {
        $validated=$request->validate([
            'id'=>'required|numeric',
        ]);

        $branch = Branch::find($validated['id']);

        if (!$branch)
        {
            return ['message'=>'branch was not exists'];
        }

        $branch->name=$request->name;

        if (!$branch->save())
        {
            return ['message'=>'failed to update'];
        }

        return ['message'=>'update successfully'];
    }
}
