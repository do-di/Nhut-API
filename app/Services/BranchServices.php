<?php
namespace App\Services;
use App\Models\Branch;
use Illuminate\Support\Facades\DB;

class BranchServices extends BaseServices
{
    private $branch;

    /**
     * BranchServices constructor.
     * @param Branch $branch
     */
    public function __construct(Branch $branch)
    {
        $this->branch = $branch;
    }

    /**
     * search branches and order by asc
     * @param $dataRequest
     * @return mixed
     */
    public function searchBranches($dataRequest)
    {
        if ($dataRequest['name'] || $dataRequest['name']=='0')
        {
            $this->branch=$this->branch->where('name', 'like','%'.$dataRequest['name'].'%');
        }
        return $this->branch->orderBy('Sequence')->get();
    }

    public function deleteBranch($id)
    {
        DB::beginTransaction();
        try {
            $branch = $this->branch->find($id);
            $branch->deleteBranch();
        }catch (\Exception $exception) {

            DB::rollBack();
            return ['message' => 'failed to delete'];
        }

        DB::commit();
        return ['message' => 'deleted'];

    }
}
