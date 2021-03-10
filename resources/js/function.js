 const URL = 'http://127.0.0.1:8000/api';

function update(updateData,instance) {
    var responseStatus = axios.post(URL + "/updateSequence/"+instance, updateData)
    return responseStatus.then(response => response.data);
}

function getBranch() {
    var responseStatus = axios.get(URL + "/getAllBranches")
    return responseStatus.then(response => response.data);
}

function search(nameSearch, idBranch,instance) {
    var responseStatus;
    if(instance == 'Product'){
        responseStatus = axios.post(URL + "/search"+instance,
            {name: nameSearch, branch_id: idBranch})
    }
   else if(instance == 'Branch'){
        responseStatus = axios.post(URL + "/search"+instance,
            { name: nameSearch})
    }

    return responseStatus.then(response => response.data);
}

function deleteItem(id,instance){
    var responseStatus;
    if(instance == 'Product'){
        responseStatus = axios.post(URL + "/delete"+instance,{id:id})
    }
    else if(instance == 'Branch'){
        responseStatus = axios.post(URL + "/delete"+instance,{id:id})
    }

    return responseStatus.then(response => response.data);
}

function updateItem(idItem,idExtend,instance, nameItem){
    var responseStatus;
    if(instance == 'Product'){
        responseStatus = axios.post(URL + "/update"+instance,{id:idItem,branch_id:idExtend,name:nameItem});
        console.log(responseStatus);
    }

    return responseStatus.then(response => response.data);
}

export {update, getBranch, search,deleteItem,updateItem}
