<template>
    <v-app>
        <div class="wrapper"></div>
        <v-main  class="marginCom">
            <v-row justify="center">
                <v-col
                    cols="12"
                    sm="10"
                    md="6"
                    lg="30"
                >
                    <SearchComponent :instance="instance" :searchData ="searchData" :clearData ="clearData"
                    >
                        <div slot="contentSearch">
                            <v-text-field
                                ref="name"
                                v-model="search"
                                label="Name product"
                                placeholder=""
                                required
                            ></v-text-field>

                            <v-combobox
                                ref="country"
                                v-model="branch"
                                :items="branches"
                                item-text="name"
                                item-value="id"
                                label="Branch"
                                placeholder="Select..."
                                required
                            ></v-combobox>

                        </div>
                    </SearchComponent>
                </v-col>


                <v-col
                    cols="8"
                    sm="10"
                    md="7"
                    lg="20"
                >
                    <UpdateComponent ref="childComponent" :disableData="disableTable" :arr="products"
                                     :notFoundData="disableNotFoundData"
                                     :arrClone="cloneProducts"
                                     :callSearch="refreshData"
                                     :header="headers" :instances="instance" :branches="branches"></UpdateComponent>
                </v-col>
            </v-row>
        </v-main>
    </v-app>

</template>
<script>

import {getBranch, search} from '../function';
import UpdateComponent from "./UpdateComponent";
import SearchComponent from "./SearchComponent";

export default {

    components: {
        UpdateComponent,
        SearchComponent,
    },

    data: () => ({
        instance:'Product',
        search: '',
        cloneSearch:'',
        cloneBranch: '',
        branches: [],
        name: null,
        branch: null,
        disableTable: false,
        disableNotFoundData:false,
        products: [],
        cloneProducts: [],
        headers: [
            {text: '#', value: 'id', align:'center', },
            {text: 'Sequence', value: 'sequence',align:'center',},
            {
                text: 'Name',
                value: 'name',
                sortable: false,
                align:'center',

            },
            {text: 'Branch', value: 'branch_name', sortable: false, align:'center',},
            {text: 'Add Date', value: 'created_at', sortable: false, align:'center',},
            {text: '', value: 'actions', sortable: false, align:'center',},
        ],
    }),

    mounted() {
        this.getData();
        if(this.$store.state.productSearch.branch==null && this.$store.state.productSearch.search)
        {
            this.searchProduct(this.search, this.branch);
        }else{
            this.search = this.$store.state.productSearch.search;
            this.branch = this.$store.state.productSearch.branch;
            this.searchProduct(this.search, this.branch);
        }

    },

    methods: {
        clearData() {
            this.branch = [];
            this.search = null;
            this.searchProduct(this.search,this.branch);
        },
        searchData(){

            if(this.branch == null)
            {
                this.searchProduct(this.search,null);
            }else{
                this.searchProduct(this.search,this.branch.id);
            }

        },

        refreshData(){
            this.searchProduct(this.cloneSearch,this.cloneBranch);
        },

        searchProduct(valSearch, valBranchID) {
            this.$refs.childComponent.resetTable();
            this.$store.state.productSearch.search = null;
            this.$store.state.productSearch.branch = null;
            var temp = '';
            var vm = this;
            this.cloneSearch = valSearch;
            this.cloneBranch = valBranchID;
            this.disableTable = false;
            this.disableNotFoundData=false;
            if (valBranchID == null) {
                temp = '';
            } else {
                temp = valBranchID;
            }
            var promise = search(valSearch, temp,this.instance);
            promise.then(function (response) {
                vm.products = [];
                vm.cloneProducts = [];

                response.forEach(element => {

                    vm.products.push({
                        id: element.id,
                        sequence: element.Sequence,
                        name: element.Name,
                        branch_id: element.Branch_id,
                        branch_name: element.branch.name,
                        created_at: element.created_at,

                    });
                    vm.cloneProducts.push({id: element.id, sequence: element.Sequence});
                });

                if (vm.products.length == 0) {
                    vm.disableNotFoundData=true;
                    vm.disableTable = false;
                } else {
                    vm.disableNotFoundData=false;
                    vm.disableTable = true;
                }

            })
                .catch(function (error) {
                    console.log(error);
                });
            this.$store.state.productSearch.branch= this.branch;
            this.$store.state.productSearch.search = this.search;

        },

        getData() {
            var vm = this;
            var promise = getBranch();
            promise.then(function (response) {
                response.forEach(element => {
                    vm.branches.push({id: element.id, name: element.name});
                });
            })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },

}
</script>
<style scoped>
.background{
    background: linear-gradient(to right top, #1867c0, #19e5f4);
}

.wrapper {
    /* The image used */
    background-image: url("../../image/hinhnenthang2_2021.jpg");

    /* Add the blur effect */
    filter: blur(2px);
    -webkit-filter: blur(2px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.marginCom{
    margin-top:2.5%;
    margin-bottom:2.5%;
    position: absolute;
    width:100%;


}


</style>

